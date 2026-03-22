/**
 * brain3d.js — Moduł wizualizacji mózgu 3D (v4.0)
 * Neuropsychologia Portal Wiedzy
 *
 * Geometria oparta na atlasach neuroanatomicznych i widokach referencyjnych:
 *   - Widok boczny (lateral): płat skroniowy wyraźnie niżej od Sylwiusza
 *   - Widok górny (superior): dwie półkule, najszersze w okolicy ciemieniowej
 *   - Widok czołowy (coronal): łukowaty kształt korony
 *
 * UKŁAD WSPÓŁRZĘDNYCH:
 *   Z+ = anterior (przód), Z- = posterior (tył)
 *   Y+ = superior (góra), Y- = inferior (dół)
 *   X+ = right (prawa), X- = left (lewa)
 *   Cały mózg: Z ∈ [-1.05, 1.05], Y ∈ [-0.75, 0.92], X ∈ [-1.08, 1.08]
 */

(function (global) {
  'use strict';

  // ══════════════════════════════════════════════════════════════
  //  PRNG deterministyczny (Mulberry32)
  // ══════════════════════════════════════════════════════════════
  function makePRNG(seed) {
    let s = (seed ^ 0xdeadbeef) >>> 0;
    return function () {
      s += 0x6d2b79f5;
      let t = s;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  // ══════════════════════════════════════════════════════════════
  //  PERTURBACJA KOROWA — zakręty i bruzdy jako suma harmonik
  // ══════════════════════════════════════════════════════════════
  function fold(theta, phi, harmonics) {
    let d = 0;
    for (const h of harmonics)
      d += h.a * Math.sin(h.ft * theta + h.pt) * Math.cos(h.fp * phi + h.pp);
    return d;
  }

  /**
   * Generuje punkt na powierzchni korowej regionu.
   * Parametryzacja: sfera → elipsoida → perturbacja harmoniczna → grubość kory
   */
  function corticalPt(rng, cfg, side) {
    const u     = rng() * 2 - 1;
    const theta = rng() * Math.PI * 2;
    const phi   = Math.asin(Math.max(-1, Math.min(1, u)));

    // Ograniczenie do wycinka kuli anatomicznego regionu
    const t = cfg.tMin + (theta / (Math.PI * 2)) * (cfg.tMax - cfg.tMin);
    const p = cfg.pMin + ((phi + Math.PI * 0.5) / Math.PI) * (cfg.pMax - cfg.pMin);

    // Perturbacja fałdów + szum
    const f = fold(t, p, cfg.h);
    const n = (rng() - 0.5) * 0.014;
    const k = (rng() - 0.5) * cfg.thick;
    const r = cfg.r * (1.0 + f + n) + k;

    const cP = Math.cos(p), sP = Math.sin(p), cT = Math.cos(t), sT = Math.sin(t);
    return new THREE.Vector3(
      r * cfg.sx * cP * cT  +  side * cfg.cx,
      r * cfg.sy * sP       +  cfg.cy,
      r * cfg.sz * cP * sT  +  cfg.cz
    );
  }

  /** Punkt w objętości struktury podkorowej (rozkład sześcienny = równomierny w bryle) */
  function volPt(rng, cx, cy, cz, rx, ry, rz, side) {
    const r  = Math.cbrt(rng());
    const u  = rng() * 2 - 1;
    const t  = rng() * Math.PI * 2;
    const sU = Math.sqrt(Math.max(0, 1 - u * u));
    const nz = 0.86 + rng() * 0.28;
    return new THREE.Vector3(
      side * cx + rx * r * sU * Math.cos(t) * nz,
      cy        + ry * r * u  * nz,
      cz        + rz * r * sU * Math.sin(t) * nz
    );
  }

  // ══════════════════════════════════════════════════════════════
  //  KONFIGURACJE GEOMETRYCZNE PŁATÓW
  //
  //  Parametry wyznaczone na podstawie atlasów:
  //    r  = promień bazowy
  //    sx/sy/sz = skalowanie elipsoidy
  //    cx/cy/cz = centrum regionu (PRZED przemnożeniem przez side)
  //    tMin/tMax = zakres azymutalny [rad]
  //    pMin/pMax = zakres elevacji [rad]
  //    thick = grubość (wolumen chmury)
  //    h = harmoniki {a=amplituda, ft=freq_theta, fp=freq_phi, pt/pp=fazy}
  //
  //  Bruzda Sylwiusza (Sylvian fissure) dzieli:
  //    górę (czołowy + ciemieniowy) od dołu (skroniowy)
  //    — stąd temporal: cy=-0.22, pMax=0.13π (głównie poniżej equatora)
  // ══════════════════════════════════════════════════════════════
  const CFG = {

    // ── PŁAT CZOŁOWY ─────────────────────────────────────────────
    // Anatomia (z lateral view): zajmuje ~40% długości AP od przodu.
    // Zakręty: precentral, superior/middle/inferior frontal, orbital.
    // Bruzdy dominujące: sulcus precentralis, frontalis sup./inf.
    frontal: {
      r: 0.94, sx: 1.04, sy: 0.90, sz: 0.98,
      cx: 0.29, cy: 0.28, cz: 0.56,
      tMin: 0.06,            tMax: Math.PI * 1.94,  // niemal pełny azymut
      pMin: -Math.PI * 0.34, pMax: Math.PI * 0.50,
      thick: 0.13,
      h: [
        // Główne bruzdy (niska f, wysoka amplituda)
        { ft: 1.8, fp: 1.0, a: 0.072, pt: 0.00, pp: 0.10 }, // sulcus frontalis sup.
        { ft: 2.5, fp: 1.8, a: 0.062, pt: 0.40, pp: 0.50 }, // sulcus precentralis
        { ft: 1.2, fp: 0.7, a: 0.058, pt: 1.00, pp: 0.00 }, // globalna krzywizna
        // Zakręty pośrednie
        { ft: 3.4, fp: 2.0, a: 0.042, pt: 1.20, pp: 1.20 },
        { ft: 2.0, fp: 3.4, a: 0.034, pt: 0.70, pp: 1.80 }, // sulcus frontalis inf.
        { ft: 4.2, fp: 1.4, a: 0.026, pt: 2.20, pp: 0.40 },
        // Drobne zakręty
        { ft: 5.5, fp: 2.6, a: 0.017, pt: 0.50, pp: 2.50 },
        { ft: 3.8, fp: 4.2, a: 0.013, pt: 1.80, pp: 1.00 },
        { ft: 6.5, fp: 2.0, a: 0.010, pt: 3.00, pp: 0.80 },
      ]
    },

    // ── PŁAT CIEMIENIOWY ─────────────────────────────────────────
    // Anatomia: między sulcus centralis a sulcus parieto-occipitalis.
    // Dominuje w widoku górnym (superior view) — najszerszy rejon.
    // Bruzdy: postcentralis, intraparietalis (IPS), marginalna.
    parietal: {
      r: 0.83, sx: 0.94, sy: 0.82, sz: 0.82,
      cx: 0.31, cy: 0.52, cz: -0.13,
      tMin: Math.PI * 0.40, tMax: Math.PI * 1.40,
      pMin: -Math.PI * 0.20, pMax: Math.PI * 0.50,
      thick: 0.11,
      h: [
        { ft: 2.2, fp: 1.8, a: 0.068, pt: 0.30, pp: 0.20 }, // sulcus postcentralis
        { ft: 3.8, fp: 1.5, a: 0.056, pt: 1.40, pp: 0.80 }, // sulcus intraparietalis
        { ft: 1.6, fp: 2.8, a: 0.042, pt: 0.00, pp: 1.50 },
        { ft: 2.8, fp: 3.0, a: 0.030, pt: 2.00, pp: 0.50 }, // zakręt kątowy
        { ft: 4.6, fp: 2.0, a: 0.020, pt: 0.80, pp: 2.80 },
        { ft: 2.0, fp: 1.0, a: 0.048, pt: 1.00, pp: 0.00 },
        { ft: 5.5, fp: 3.5, a: 0.013, pt: 1.50, pp: 1.20 },
      ]
    },

    // ── PŁAT SKRONIOWY ───────────────────────────────────────────
    // KLUCZOWA KOREKTA: płat skroniowy leży PONIŻEJ bruzdy Sylwiusza.
    // W widoku bocznym: wyraźnie niżej od czołowego/ciemieniowego.
    // Kształt: wydłużony AP (~banana), wąski DV, bardzo boczny.
    // Zakręty: STG (Wernicke), MTG, ITG — równoległe AP.
    // Bruzdy: STS (górna skroniowa), sulcus temporalis inf.
    temporal: {
      r: 0.74, sx: 0.68, sy: 0.52, sz: 1.14,
      cx: 0.70, cy: -0.22, cz: 0.08,       // ← cy bardzo ujemne = PONIŻEJ Sylwiusza
      tMin: 0.02,            tMax: Math.PI * 1.06,
      pMin: -Math.PI * 0.46, pMax: Math.PI * 0.13, // ← głównie poniżej equatora
      thick: 0.10,
      h: [
        { ft: 1.5, fp: 2.2, a: 0.065, pt: 0.00, pp: 0.50 }, // sulcus temporalis sup.
        { ft: 2.8, fp: 1.2, a: 0.050, pt: 0.80, pp: 1.00 }, // sulcus temporalis inf.
        { ft: 1.0, fp: 1.0, a: 0.055, pt: 0.50, pp: 0.00 },
        { ft: 3.5, fp: 2.5, a: 0.030, pt: 2.00, pp: 1.80 }, // zakręt wrzecionowaty
        { ft: 4.2, fp: 1.8, a: 0.022, pt: 1.00, pp: 2.50 },
        { ft: 2.0, fp: 3.8, a: 0.018, pt: 1.50, pp: 0.80 },
        { ft: 5.5, fp: 2.0, a: 0.013, pt: 0.30, pp: 1.50 },
      ]
    },

    // ── PŁAT POTYLICZNY ──────────────────────────────────────────
    // Posterior tip. Kluczowa bruzda: calcarine (V1 po obu stronach).
    // Z widoku superior: zaokrąglony tył, węższy niż parietal.
    // Z widoku lateral: stosunkowo mały, ukryty za ciemieniowym.
    occipital: {
      r: 0.74, sx: 0.90, sy: 0.80, sz: 0.70,
      cx: 0.23, cy: 0.02, cz: -0.92,
      tMin: Math.PI * 0.84, tMax: Math.PI * 1.90,
      pMin: -Math.PI * 0.40, pMax: Math.PI * 0.44,
      thick: 0.10,
      h: [
        { ft: 2.0, fp: 2.5, a: 0.080, pt: 0.00, pp: 0.00 }, // sulcus calcarinus (V1)
        { ft: 4.0, fp: 1.5, a: 0.054, pt: 1.00, pp: 0.80 }, // sulcus lunatus
        { ft: 1.5, fp: 1.0, a: 0.060, pt: 0.80, pp: 2.00 },
        { ft: 3.0, fp: 3.5, a: 0.038, pt: 0.50, pp: 1.50 },
        { ft: 5.5, fp: 2.0, a: 0.024, pt: 2.00, pp: 0.30 },
        { ft: 2.5, fp: 5.0, a: 0.012, pt: 3.20, pp: 0.70 },
        { ft: 7.0, fp: 2.5, a: 0.009, pt: 0.20, pp: 2.20 },
      ]
    },

    // ── WYSPA (INSULA) ───────────────────────────────────────────
    // Ukryta w bruździe Sylwiusza. Zakręty krótkie (przód) i długie (tył).
    // Bruzda środkowa wyspy (centralna) dominuje.
    insula: {
      r: 0.36, sx: 0.56, sy: 0.78, sz: 0.50,
      cx: 0.53, cy: 0.10, cz: 0.14,
      tMin: 0.0, tMax: Math.PI * 2,
      pMin: -Math.PI * 0.36, pMax: Math.PI * 0.36,
      thick: 0.040,
      h: [
        { ft: 3.0, fp: 2.0, a: 0.088, pt: 0.0, pp: 0.0 },
        { ft: 5.0, fp: 1.5, a: 0.062, pt: 0.5, pp: 0.5 },
        { ft: 2.0, fp: 4.0, a: 0.042, pt: 1.2, pp: 1.0 },
        { ft: 7.0, fp: 3.0, a: 0.026, pt: 2.0, pp: 1.5 },
      ]
    },

    // ── MÓŻDŻEK ──────────────────────────────────────────────────
    // BARDZO gęste, równoległe folia cerebelli — zupełnie inny charakter
    // niż zakręty kory. Harmoniki o wysokich częstotliwościach dominują.
    // Z widoku lateral: wyraźnie oddzielony od mózgowia, posterior-inferior.
    cerebellum: {
      r: 0.66, sx: 1.16, sy: 0.60, sz: 0.80,
      cx: 0.0, cy: -0.63, cz: -0.70,
      tMin: 0.0, tMax: Math.PI * 2,
      pMin: -Math.PI * 0.46, pMax: Math.PI * 0.30,
      thick: 0.030,
      h: [
        // Dominujące folia (wysoka freq w theta, niska w phi — równoległe)
        { ft:  8.0, fp: 0.8, a: 0.090, pt: 0.0, pp: 0.0 },
        { ft: 10.0, fp: 0.8, a: 0.074, pt: 0.3, pp: 0.1 },
        { ft: 12.0, fp: 0.8, a: 0.058, pt: 0.6, pp: 0.0 },
        { ft: 14.0, fp: 0.7, a: 0.044, pt: 0.9, pp: 0.2 },
        { ft: 16.0, fp: 0.6, a: 0.032, pt: 0.2, pp: 0.0 },
        { ft: 18.0, fp: 0.5, a: 0.022, pt: 1.5, pp: 0.1 },
        { ft:  6.0, fp: 0.9, a: 0.060, pt: 1.2, pp: 0.3 },
        // Główne podziały anatomiczne (niskie freq)
        { ft:  4.0, fp: 2.0, a: 0.052, pt: 0.0, pp: 0.5 }, // lobus ant. / post.
        { ft:  2.0, fp: 1.5, a: 0.078, pt: 0.5, pp: 1.0 }, // robak / półkule
        { ft:  1.0, fp: 0.5, a: 0.062, pt: 0.0, pp: 0.0 },
      ]
    },
  };

  // ══════════════════════════════════════════════════════════════
  //  REGIONY — definicje anatomiczne, opisy, generatory geometrii
  // ══════════════════════════════════════════════════════════════
  const REGIONS = [

    // ── PŁATY KORY ────────────────────────────────────────────────

    {
      id: 'frontal', linkedTo: null,
      label: 'Płat czołowy',
      name: 'Płat czołowy (Lobus frontalis)',
      color: 0x4d9de0,
      points: 27000,
      generator: (rng) => corticalPt(rng, CFG.frontal, -1),
      desc: 'Największy płat kory mózgowej — zajmuje przednią trzecią część mózgowia, od bieguna czołowego po bruzdę centralną (sulcus centralis). <em>Zakręt przedcentralny</em> (pole 4 Brodmanna) tworzy pierwotną korę ruchową z somatotopowym homunkulusem ruchowym. <em>Obszar Broki</em> (pola 44/45) w lewej półkuli programuje mowę ekspresywną. <em>Grzbietowo-boczna kora przedczołowa</em> (dlPFC, pola 9/46) odpowiada za pamięć roboczą, planowanie i kontrolę poznawczą. <em>Kora oczodołowo-czołowa</em> (OFC) przetwarza wartości nagród i decyzje moralne. Uszkodzenia: zmiany osobowości, impulsywność, deficyty planowania (syndrom czołowy), afazja Broki lub apatia akinetyczna.',
    },
    {
      id: 'frontal_r', linkedTo: 'frontal',
      label: null, name: 'Płat czołowy (prawa półkula)',
      color: 0x4d9de0, points: 27000, desc: null,
      generator: (rng) => corticalPt(rng, CFG.frontal, +1),
    },

    {
      id: 'parietal', linkedTo: null,
      label: 'Płat ciemieniowy',
      name: 'Płat ciemieniowy (Lobus parietalis)',
      color: 0x3bbfaa,
      points: 21000,
      generator: (rng) => corticalPt(rng, CFG.parietal, -1),
      desc: 'Leży między bruzdą centralną a bruzdą potyliczno-ciemieniową, dominując w widoku górnym. <em>Zakręt zaśrodkowy</em> (pola 1, 2, 3) tworzy pierwotną korę somatosensoryczną — czuciowy homunkulus z nadreprezentacją twarzy i dłoni. <em>Bruzda śródciemieniowa</em> (IPS) rozdziela płacik górny (SPL — orientacja przestrzenna) od dolnego (IPL): <em>zakręt kątowy</em> (pole 39 — czytanie, liczenie, integracja multimodalna) i <em>nadmarginalny</em> (pole 40 — praksja ideomotoryczna). Droga grzbietowa wzroku (<em>where/how</em>) dociera tu z kory wzrokowej. Uszkodzenia prawostronne → neglect przestrzenny; lewostronne → apraksja, aleksja, akalkulia, zespół Gerstmanna.',
    },
    {
      id: 'parietal_r', linkedTo: 'parietal',
      label: null, name: 'Płat ciemieniowy (prawa półkula)',
      color: 0x3bbfaa, points: 21000, desc: null,
      generator: (rng) => corticalPt(rng, CFG.parietal, +1),
    },

    {
      id: 'temporal', linkedTo: null,
      label: 'Płat skroniowy',
      name: 'Płat skroniowy (Lobus temporalis)',
      color: 0xe8a838,
      points: 23000,
      generator: (rng) => corticalPt(rng, CFG.temporal, -1),
      desc: 'Leży poniżej bruzdy bocznej Sylwiusza, wydłużony ku tyłowi niczym poziomy "kciuk" zwisający po stronie bocznej. <em>Zakręt skroniowy górny</em> (STG, pole 22) zawiera w lewej półkuli obszar Wernickego (rozumienie mowy) oraz zakręty Heschla (pierwotna kora słuchowa). <em>Zakręt wrzecionowaty</em> (FFA) specjalizuje się w rozpoznawaniu twarzy. <em>Zakręt przyhipokampalny</em> (PHC) koduje kontekst przestrzenny scen. W głębi przyśrodkowej kory skroniowej leżą hipokamp i ciało migdałowate. Uszkodzenia lewostronne → afazja Wernickego; obustronne przyśrodkowej kory skroniowej → ciężka amnezja anterogradowa.',
    },
    {
      id: 'temporal_r', linkedTo: 'temporal',
      label: null, name: 'Płat skroniowy (prawa półkula)',
      color: 0xe8a838, points: 23000, desc: null,
      generator: (rng) => corticalPt(rng, CFG.temporal, +1),
    },

    {
      id: 'occipital', linkedTo: null,
      label: 'Płat potyliczny',
      name: 'Płat potyliczny (Lobus occipitalis)',
      color: 0x9b6fd4,
      points: 15000,
      generator: (rng) => corticalPt(rng, CFG.occipital, -1),
      desc: 'Tylny biegun mózgowia, całkowicie dedykowany przetwarzaniu wzrokowemu. <em>Pierwotna kora wzrokowa V1</em> (pole 17) leży po obu stronach bruzdy kalkarynowej i wykazuje precyzyjną retinotopię. <em>Droga brzuszna</em> (<em>co</em>: V1→V4→IT — kolor, kształt, twarze) biegnie ku płatowi skroniowemu. <em>Droga grzbietowa</em> (<em>gdzie/jak</em>: V1→V5→PPC — ruch, lokalizacja) biegnie ku ciemieniowemu. <em>Obszar V5/MT</em> specjalizuje się w detekcji ruchu. Uszkodzenia: V1 → ślepota korowa; V4 → akromatopsja; V5 → akinetopsja; pola skroniowo-potyliczne → prozopagnozja, agnozja wzrokowa.',
    },
    {
      id: 'occipital_r', linkedTo: 'occipital',
      label: null, name: 'Płat potyliczny (prawa półkula)',
      color: 0x9b6fd4, points: 15000, desc: null,
      generator: (rng) => corticalPt(rng, CFG.occipital, +1),
    },

    {
      id: 'insula', linkedTo: null,
      label: 'Wyspa (insula)',
      name: 'Kora wyspy (Cortex insularis)',
      color: 0x30d8e8,
      points: 6000,
      generator: (rng) => corticalPt(rng, CFG.insula, -1),
      desc: 'Piąty płat kory, ukryty za wieczkami czołowym, ciemieniowym i skroniowym w bruździe bocznej. Bruzda środkowa wyspy dzieli ją na część <em>przednią</em> (zakręty krótkie — smak, ból, emocje, interocepcja) i <em>tylną</em> (zakręty długie — dotyk dyskryminacyjny, temperatura, propriocepcja). Przednia wyspa jest kluczowym centrum <em>świadomości stanu ciała</em> i aktywuje się podczas empatii z bólem. Uszkodzenia: anozognozja, apraksja artykulacyjna, zaburzenia smaku i odczuwania bólu.',
    },
    {
      id: 'insula_r', linkedTo: 'insula',
      label: null, name: 'Kora wyspy (prawa półkula)',
      color: 0x30d8e8, points: 6000, desc: null,
      generator: (rng) => corticalPt(rng, CFG.insula, +1),
    },

    // ── ZAKRĘT OBRĘCZY ────────────────────────────────────────────
    {
      id: 'cingulate', linkedTo: null,
      label: 'Zakręt obręczy',
      name: 'Zakręt obręczy (Gyrus cinguli)',
      color: 0x80e890,
      points: 5500,
      generator: (rng) => {
        const t  = rng() * Math.PI * 1.25 - 0.45;
        const sd = rng() < 0.5 ? -1 : 1;
        const th = (rng() - 0.5) * 0.058;
        const fld = 0.042 * Math.sin(t * 5.5) * Math.cos(t * 2.8)
                  + 0.024 * Math.sin(t * 8.0 + 0.5)
                  + 0.014 * Math.cos(t * 3.5 + 1.0);
        return new THREE.Vector3(
          sd * (0.06 + rng() * 0.14),
          0.44 + 0.26 * Math.sin(t + 0.38) + th + fld,
          -0.14 + 0.76 * Math.cos(t + 0.38) + (rng() - 0.5) * 0.04
        );
      },
      desc: 'Łukowata struktura na przyśrodkowej ścianie półkuli, otaczająca ciało modzelowate od góry. <em>Przednia część</em> (ACC, pola 24/32) monitoruje konflikty poznawcze, błędy i moduluje ból emocjonalny — generuje potencjał N2/Pe w ERP. <em>Strefa śródpasa</em> łączy ACC z tylną częścią. <em>Tylna część</em> (PCC, pole 31) jest centralnym węzłem <em>sieci domyślnej</em> (DMN) aktywnej w spoczynku, autorefleksji i pamięci epizodycznej. Obustronne uszkodzenie ACC → akinetyczny mutyzm (brak inicjacji ruchu i mowy).',
    },

    // ── HIPOKAMP ──────────────────────────────────────────────────
    {
      id: 'hippocampus', linkedTo: null,
      label: 'Hipokamp',
      name: 'Hipokamp (Hippocampus)',
      color: 0xff8844,
      points: 5000,
      generator: (rng) => {
        const t  = rng() * Math.PI * 1.15;
        const r  = 0.055 + rng() * 0.062;
        const ph = rng() * Math.PI * 2;
        // Anatomia: łuk w kształcie C, głowa szersza od ogona
        const ax = 0.33 * Math.sin(t) - 0.06 * Math.cos(t * 2.2) * Math.sin(t * 0.5);
        const ay = -0.07 * Math.cos(t) + 0.05 * Math.sin(t * 1.8 + 0.3);
        const az = 0.40 * Math.cos(t) * (0.78 + 0.22 * Math.cos(t * 1.5));
        const nr = r * (0.6 + 0.4 * Math.sin(t * 3.0));
        return new THREE.Vector3(
          -0.43 + ax + nr * Math.cos(ph) * 0.52,
          -0.26 + ay + nr * Math.sin(ph),
          -0.11 + az + nr * Math.cos(ph) * 0.32
        );
      },
      desc: 'Zakrzywiona struktura kształtu konika morskiego (gr. ἱππόκαμπος) w przyśrodkowej korze skroniowej. Składa się z <em>pól CA1–CA4</em> (cornu ammonis), <em>zakrętu zębatego</em> (DG — jedyne miejsce neurogenezy u dorosłych) i <em>subiculum</em>. Absolutnie niezbędny do <em>konsolidacji pamięci deklaratywnej</em>. Zawiera <em>place cells</em> (O\'Keefe, Nobel 2014), <em>grid cells</em> (Mosery) i <em>time cells</em> — tworząc wewnętrzny GPS mózgu. Obustronne uszkodzenie (H.M.) → całkowita amnezja anterogradowa przy zachowanej pamięci proceduralnej.',
    },
    {
      id: 'hippocampus_r', linkedTo: 'hippocampus',
      label: null, name: 'Hipokamp (prawa półkula)',
      color: 0xff8844, points: 5000, desc: null,
      generator: (rng) => {
        const t = rng() * Math.PI * 1.15, r = 0.055 + rng() * 0.062, ph = rng() * Math.PI * 2;
        const ax = 0.33 * Math.sin(t) - 0.06 * Math.cos(t * 2.2) * Math.sin(t * 0.5);
        const ay = -0.07 * Math.cos(t) + 0.05 * Math.sin(t * 1.8 + 0.3);
        const az = 0.40 * Math.cos(t) * (0.78 + 0.22 * Math.cos(t * 1.5));
        const nr = r * (0.6 + 0.4 * Math.sin(t * 3.0));
        return new THREE.Vector3(0.43 - ax + nr * Math.cos(ph) * 0.52, -0.26 + ay + nr * Math.sin(ph), -0.11 + az + nr * Math.cos(ph) * 0.32);
      },
    },

    // ── CIAŁO MIGDAŁOWATE ─────────────────────────────────────────
    {
      id: 'amygdala', linkedTo: null,
      label: 'Ciało migdałowate',
      name: 'Ciało migdałowate (Amygdala)',
      color: 0xe04068,
      points: 3500,
      generator: (rng) => volPt(rng, 0.53, -0.12, 0.28, 0.17, 0.15, 0.17, -1),
      desc: 'Jądro kształtu migdała w głębi bieguna skroniowego, przed głową hipokampa. <em>Część podstawno-boczna</em> (BLA) uczestniczy w uczeniu emocjonalnym i połączeniach z korą czołową. <em>Jądro środkowe</em> (CeA) stanowi wyjście do układu autonomicznego. Reaguje na zagrożenie "drogą niską" (wzgórze→CeA) <em>bez udziału kory</em> — reakcja obronna zanim świadomość zidentyfikuje bodziec. Moduluje konsolidację pamięci emocjonalnej przez noradrenalinę. Obustronne uszkodzenie (S.M. — lipoidoza Urbacha-Wiethego): całkowity brak strachu i niemożność rozpoznania emocji z twarzy.',
    },
    {
      id: 'amygdala_r', linkedTo: 'amygdala',
      label: null, name: 'Ciało migdałowate (prawa półkula)',
      color: 0xe04068, points: 3500, desc: null,
      generator: (rng) => volPt(rng, 0.53, -0.12, 0.28, 0.17, 0.15, 0.17, +1),
    },

    // ── WZGÓRZE ───────────────────────────────────────────────────
    {
      id: 'thalamus', linkedTo: null,
      label: 'Wzgórze',
      name: 'Wzgórze (Thalamus)',
      color: 0x50c855,
      points: 7000,
      generator: (rng) => volPt(rng, 0.145, 0.04, -0.07, 0.25, 0.23, 0.30, -1),
      desc: 'Parzysta jajowata masa (~3,5 cm) w diencephalonie, po obu stronach komory trzeciej. <em>Jądra swoiste</em>: LGN (wzrok→V1), MGN (słuch→A1), VPL (czucie kończyn→S1), VA/VL (wyjście z jąder podstawy i móżdżku→kora ruchowa). <em>Jądra skojarzone</em>: poduszka (pulvinar — integracja wzrokowo-przestrzenna), MD (połączenia z PFC — emocje, pamięć). <em>Jądra nieswoiste</em> (CM, PF): regulują globalne pobudzenie kory. Wzgórze pełni rolę "bramy świadomości" — uszkodzenie → amnezja wzgórzowa, zaburzenia świadomości.',
    },
    {
      id: 'thalamus_r', linkedTo: 'thalamus',
      label: null, name: 'Wzgórze (prawa półkula)',
      color: 0x50c855, points: 7000, desc: null,
      generator: (rng) => volPt(rng, 0.145, 0.04, -0.07, 0.25, 0.23, 0.30, +1),
    },

    // ── JĄDRA PODSTAWY ────────────────────────────────────────────
    {
      id: 'basal_ganglia', linkedTo: null,
      label: 'Jądra podstawy',
      name: 'Jądra podstawy (Ganglia basalia)',
      color: 0xf09030,
      points: 7500,
      generator: (rng) => volPt(rng, 0.30, 0.10, 0.06, 0.32, 0.28, 0.26, -1),
      desc: 'Obwód jąder podkorowych mediujący selekcję i wzmacnianie działań. <em>Prążkowie</em> (jądro ogoniaste + skorupa) odbiera projekcje ze wszystkich płatów kory. <em>Droga bezpośrednia</em> (D1: prążkowie→GPi→wzgórze → disinhibicja, Go) i <em>droga pośrednia</em> (D2: prążkowie→GPe→STN→GPi → hamowanie, NoGo). <em>Istota czarna</em> (SNc) uwalnia <em>dopaminę</em> kodującą błąd predykcji nagrody (RPE). Dysfunkcja: ch. Parkinsona (↓DA w SNc → hipokinezja), ch. Huntingtona (degeneracja prążkowia → pląsawica), dystonia, zespół Tourette\'a.',
    },
    {
      id: 'basal_ganglia_r', linkedTo: 'basal_ganglia',
      label: null, name: 'Jądra podstawy (prawa półkula)',
      color: 0xf09030, points: 7500, desc: null,
      generator: (rng) => volPt(rng, 0.30, 0.10, 0.06, 0.32, 0.28, 0.26, +1),
    },

    // ── CIAŁO MODZELOWATE ─────────────────────────────────────────
    {
      id: 'corpus_callosum', linkedTo: null,
      label: 'Ciało modzelowate',
      name: 'Ciało modzelowate (Corpus callosum)',
      color: 0xd8d870,
      points: 5500,
      generator: (rng) => {
        const t = rng() * Math.PI * 0.96 - Math.PI * 0.08;
        const w = rng() * 0.36 - 0.18;
        const th = (rng() - 0.5) * 0.062;
        // Grubość zmienna: kolano i splenium grubsze
        const vt = 1.0 + 0.50 * (Math.cos(t * 2) + 0.5 * Math.cos(t * 3 + 1.0));
        return new THREE.Vector3(
          w,
          0.33 + 0.24 * Math.sin(t + Math.PI * 0.5) + th * vt,
          -0.07 + 0.64 * Math.cos(t + Math.PI * 0.5) + (rng() - 0.5) * 0.026
        );
      },
      desc: 'Największa komisura mózgu — spłaszczony łuk istoty białej z ~200–250 mln aksonów mielinowanych łączących obie półkule. Anatomia: <em>dziób</em> (rostrum — OFC), <em>kolano</em> (genu — PFC, cienkie niemielinowane włókna), <em>trzon</em> (truncus — włókna ciemieniowe i ruchowe), <em>wał</em> (splenium — włókna potyliczne i skroniowo-tylne, najszybsze). Topografia somatotopowa: przód kory→przód CC. Callosotomia (chirurgiczne przecięcie w padaczce) tworzy fenomen "podzielonego mózgu" badany przez Sperrego: lewa ręka dosłownie "nie wie, co robi prawa".',
    },

    // ── OBSZAR BROKI ──────────────────────────────────────────────
    {
      id: 'broca', linkedTo: null,
      label: 'Obszar Broki',
      name: 'Obszar Broki (pola 44/45 Brodmanna)',
      color: 0xff70e0,
      points: 2500,
      generator: (rng) => volPt(rng, 0.73, 0.23, 0.66, 0.11, 0.10, 0.11, -1),
      desc: 'W dolnym zakręcie czołowym (IFG) lewej półkuli — zakręt wieczkowy (pars opercularis, pole 44) i trójkątny (pars triangularis, pole 45). Odkryty przez Brokę w 1861 r. na podstawie przypadku Louisa Leborgne\'a ("Tan"). Pole 44: programowanie motoryczne sekwencji artykulacyjnych. Pole 45: przetwarzanie składni i semantyki. Połączony z obszarem Wernickego pęczkiem łukowatym. Uszkodzenie → <em>afazja Broki</em>: mowa niefluentna, telegraficzna, agramatyczna — przy względnie zachowanym rozumieniu.',
    },

    // ── OBSZAR WERNICKEGO ─────────────────────────────────────────
    {
      id: 'wernicke', linkedTo: null,
      label: 'Obszar Wernickego',
      name: 'Obszar Wernickego (pole 22 Brodmanna)',
      color: 0xffe050,
      points: 2500,
      generator: (rng) => volPt(rng, 0.69, -0.03, -0.22, 0.13, 0.11, 0.13, -1),
      desc: 'Tylna część zakrętu skroniowego górnego (posterior STG, pole 22) lewej półkuli. Odkryty przez Wernickego w 1874 r. Zawiera leksykalne reprezentacje fonemów — magazyn dźwiękowych wzorców języka. Niezbędny do rozumienia mowy i doboru poprawnych słów. Uszkodzenie → <em>afazja Wernickego</em>: mowa fluentna, lecz pełna parafazji fonemicznych i neologizmów, z głębokim brakiem rozumienia — pacjent nie jest świadom deficytu (anozognozja językowa). Uszkodzenie pęczka łukowatego (bez obu ośrodków) → afazja przewodzenia.',
    },

    // ── MÓŻDŻEK ───────────────────────────────────────────────────
    {
      id: 'cerebellum', linkedTo: null,
      label: 'Móżdżek',
      name: 'Móżdżek (Cerebellum)',
      color: 0x70aaff,
      points: 22000,
      generator: (rng) => corticalPt(rng, CFG.cerebellum, 0),
      desc: 'Tylna jama czaszki, oddzielona od mózgowia namiotem móżdżku. Charakterystyczne <em>folia cerebelli</em> (listki) — gęstsze niż zakręty kory, odzwierciedlone w modelu wyższymi częstotliwościami harmonik. Zawiera ~69 mld neuronów (ponad 50% wszystkich). Anatomia: <em>robak</em> (vermis — równowaga, postawa) + <em>półkule</em> (koordynacja kończyn, uczenie motoryczne) + <em>kłaczek</em> (odruchy przedsionkowo-oczne). Działa jako <em>predykcyjny procesor błędu</em>: porównuje zamierzony ruch ze sprzężeniem proprioceptywnym. Uszkodzenie: ataksja, dysmetria, adiadochokineza, drżenie zamiarowe, dyzartria móżdżkowa.',
    },

    // ── PIEŃ MÓZGU ────────────────────────────────────────────────
    {
      id: 'brainstem', linkedTo: null,
      label: 'Pień mózgu',
      name: 'Pień mózgu (Truncus cerebri)',
      color: 0xa0a0b8,
      points: 8000,
      generator: (rng) => {
        const t = rng();
        let y, rb, czo;
        if      (t < 0.30) { y = -0.02 + rng() * 0.30; rb = 0.18; czo = -0.10; }
        else if (t < 0.65) { y = -0.32 + rng() * 0.36; rb = 0.20; czo = -0.15; }
        else               { y = -0.65 + rng() * 0.38; rb = 0.13 - rng()*0.03; czo = -0.12; }
        const phi = rng() * Math.PI * 2;
        const r   = rb * (0.55 + rng() * 0.45);
        return new THREE.Vector3(r * Math.cos(phi) * 0.82, y, czo + r * Math.sin(phi) * 0.65);
      },
      desc: 'Łączy mózgowie z rdzeniem kręgowym. Trzy segmenty: <em>śródmózgowie</em> (jądra III–IV n.cz., substancja czarna, wzgórki czworaczki — odruchy wzrokowe i słuchowe); <em>most</em> (jądra V–VIII n.cz., <em>locus coeruleus</em> — główne źródło noradrenaliny, jądra raphe — serotonina, PPRF — ruchy gałek ocznych); <em>rdzeń przedłużony</em> (jądra IX–XII n.cz., centra oddychania i sercowo-naczyniowe, skrzyżowanie piramid — 85% włókien drogi korowo-rdzeniowej). <em>ARAS</em> (ascending reticular activating system) reguluje czuwanie i świadomość — uszkodzenie pnia zagraża życiu bezpośrednio.',
    },
  ];

  // ══════════════════════════════════════════════════════════════
  //  BUDOWA CHMURY PUNKTÓW — per-vertex colors z gradientem głębokości
  // ══════════════════════════════════════════════════════════════

  function hexToRgb(hex) {
    return {
      r: ((hex >> 16) & 255) / 255,
      g: ((hex >>  8) & 255) / 255,
      b: ( hex        & 255) / 255,
    };
  }

  function buildCloud(region, seed) {
    const rng  = makePRNG(seed);
    const n    = region.points;
    const pos  = new Float32Array(n * 3);
    const col  = new Float32Array(n * 3);
    const base = hexToRgb(region.color);

    for (let i = 0; i < n; i++) {
      const v = region.generator(rng, i);
      pos[i*3] = v.x; pos[i*3+1] = v.y; pos[i*3+2] = v.z;
    }

    let zMin=Infinity, zMax=-Infinity, yMin=Infinity, yMax=-Infinity;
    for (let i = 0; i < n; i++) {
      const z = pos[i*3+2], y = pos[i*3+1];
      if (z < zMin) zMin=z; if (z > zMax) zMax=z;
      if (y < yMin) yMin=y; if (y > yMax) yMax=y;
    }
    const zR = zMax-zMin||1, yR = yMax-yMin||1;

    const rng2 = makePRNG(seed + 888888);
    for (let i = 0; i < n; i++) {
      const depth  = (pos[i*3+2] - zMin) / zR;
      const height = (pos[i*3+1] - yMin) / yR;
      // Gradient: punkty z przodu i z góry jaśniejsze
      const bright = 0.50 + 0.36 * depth + 0.14 * height;
      const noize  = 1.0 + (rng2() - 0.5) * 0.18;
      col[i*3]   = Math.min(1, base.r * bright * noize);
      col[i*3+1] = Math.min(1, base.g * bright * noize);
      col[i*3+2] = Math.min(1, base.b * bright * noize);
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('color',    new THREE.BufferAttribute(col, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.0125,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      opacity: 0.90,
    });

    const cloud = new THREE.Points(geo, mat);
    cloud.userData = { regionId: region.linkedTo || region.id, baseSize: 0.0125, baseOpacity: 0.90 };
    return cloud;
  }

  // ══════════════════════════════════════════════════════════════
  //  ETYKIETY (THREE.Sprite billboard)
  // ══════════════════════════════════════════════════════════════

  function makeLabel(text, x, y, z, color) {
    const W = 290, H = 52;
    const cv = document.createElement('canvas');
    cv.width = W; cv.height = H;
    const ctx = cv.getContext('2d');
    ctx.fillStyle = 'rgba(5,5,14,0.86)';
    ctx.beginPath(); ctx.roundRect(2, 2, W-4, H-4, 7); ctx.fill();
    ctx.fillStyle = '#' + color.toString(16).padStart(6,'0');
    ctx.fillRect(2, 2, 4, H-4);
    ctx.fillStyle = '#f0f0f8';
    ctx.font = 'bold 16px Inter, system-ui, sans-serif';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, 13, H/2);
    const tex = new THREE.CanvasTexture(cv);
    const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false });
    const sp  = new THREE.Sprite(mat);
    sp.position.set(x, y, z);
    sp.scale.set(0.74, 0.165, 1);
    sp.userData.isLabel = true;
    return sp;
  }

  // ══════════════════════════════════════════════════════════════
  //  KLASA GŁÓWNA: Brain3DViewer
  // ══════════════════════════════════════════════════════════════

  class Brain3DViewer {
    constructor(containerId, infoPanelId) {
      this.containerId   = containerId;
      this.infoPanelId   = infoPanelId;
      this.scene = this.camera = this.renderer = this.controls = null;
      this.brainGroup = null;
      this.clouds = []; this.labels = [];
      this.activeRegion = 'all';
      this.labelsVisible = true;
      this._animFrame = null;
      this._autoRotate = true;
      this._pulseCloud = null;  // chmura "glow" dla wybranego regionu
    }

    init() {
      const container = document.getElementById(this.containerId);
      if (!container) return;
      while (container.firstChild) container.removeChild(container.firstChild);
      if (this._animFrame) cancelAnimationFrame(this._animFrame);

      // ── Scena ─────────────────────────────────────────────────
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(0x06060e);
      this.scene.fog = new THREE.FogExp2(0x06060e, 0.12);

      // ── Kamera ────────────────────────────────────────────────
      this.camera = new THREE.PerspectiveCamera(44, container.clientWidth / container.clientHeight, 0.05, 100);
      this.camera.position.set(0.0, 0.18, 4.3);

      // ── Renderer ──────────────────────────────────────────────
      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(this.renderer.domElement);

      // ── Orbit Controls ────────────────────────────────────────
      this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
      this.controls.enableDamping   = true;
      this.controls.dampingFactor   = 0.06;
      this.controls.minDistance     = 1.4;
      this.controls.maxDistance     = 9.0;
      this.controls.autoRotate      = true;
      this.controls.autoRotateSpeed = 0.38;
      this.controls.target.set(0, 0.05, 0);

      // ── Oświetlenie ───────────────────────────────────────────
      this.scene.add(new THREE.AmbientLight(0xffffff, 1.0));
      const pl = new THREE.PointLight(0x8090ff, 0.22, 12);
      pl.position.set(2.5, 2.8, 1.8);
      this.scene.add(pl);

      // ── Siatka ───────────────────────────────────────────────
      const grid = new THREE.GridHelper(5, 26, 0x17172a, 0x11111e);
      grid.position.y = -1.32;
      this.scene.add(grid);

      // ── Mózg ─────────────────────────────────────────────────
      this.brainGroup = new THREE.Group();
      this.scene.add(this.brainGroup);
      this._buildClouds();
      this._buildLabels();
      this._setupPicking();
      this._animate();

      this._resizeHandler = () => this._onResize();
      window.addEventListener('resize', this._resizeHandler);
      this._updateInfoPanel('all');
    }

    _buildClouds() {
      this.clouds = [];
      REGIONS.forEach((region, i) => {
        const cloud = buildCloud(region, i * 6571 + 17);
        this.brainGroup.add(cloud);
        this.clouds.push({ cloud, region });
      });
    }

    _buildLabels() {
      this.labels = [];
      const defs = [
        { id: 'frontal',         x: -1.14, y:  0.72, z:  0.98 },
        { id: 'parietal',        x: -1.12, y:  0.84, z: -0.38 },
        { id: 'temporal',        x: -1.42, y: -0.26, z:  0.16 },
        { id: 'occipital',       x: -0.98, y: -0.06, z: -1.32 },
        { id: 'insula',          x: -1.04, y:  0.14, z:  0.32 },
        { id: 'cingulate',       x:  0.44, y:  0.84, z:  0.02 },
        { id: 'hippocampus',     x: -0.90, y: -0.34, z: -0.24 },
        { id: 'amygdala',        x: -0.94, y: -0.08, z:  0.44 },
        { id: 'thalamus',        x:  0.60, y:  0.16, z: -0.06 },
        { id: 'basal_ganglia',   x:  0.78, y:  0.28, z:  0.12 },
        { id: 'corpus_callosum', x:  0.46, y:  0.68, z:  0.06 },
        { id: 'broca',           x: -1.18, y:  0.38, z:  0.90 },
        { id: 'wernicke',        x: -1.18, y: -0.05, z: -0.32 },
        { id: 'cerebellum',      x:  0.10, y: -1.18, z: -0.92 },
        { id: 'brainstem',       x:  0.48, y: -0.74, z: -0.10 },
      ];
      defs.forEach(def => {
        const region = REGIONS.find(r => r.id === def.id);
        if (!region?.label) return;
        const sp = makeLabel(region.label, def.x, def.y, def.z, region.color);
        this.brainGroup.add(sp);
        this.labels.push({ sprite: sp, regionId: def.id });
      });
    }

    _setupPicking() {
      const rc = new THREE.Raycaster();
      rc.params.Points.threshold = 0.050;
      const mouse = new THREE.Vector2();
      const canvas = this.renderer.domElement;
      canvas.addEventListener('click', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x =  ((e.clientX - rect.left) / rect.width)  * 2 - 1;
        mouse.y = -((e.clientY - rect.top)  / rect.height) * 2 + 1;
        rc.setFromCamera(mouse, this.camera);
        const hits = rc.intersectObjects(this.clouds.map(c => c.cloud));
        if (hits.length) this.highlightRegion(hits[0].object.userData.regionId);
      });
    }

    _animate() {
      this._animFrame = requestAnimationFrame(() => this._animate());
      this.controls.update();
      this.renderer.render(this.scene, this.camera);
    }

    _onResize() {
      const c = document.getElementById(this.containerId);
      if (!c || !this.renderer) return;
      this.camera.aspect = c.clientWidth / c.clientHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(c.clientWidth, c.clientHeight);
    }

    /**
     * NOWY EFEKT PODŚWIETLENIA:
     *   - Wybrany region: pełna jasność, większy rozmiar punktów, kolor tints JAŚNIEJSZY
     *   - Niewybrany: opacity 0.30 (MIĘKKIE przyciemnienie, nie 0.05)
     *     + tint ciemny szary przez material.color (nie niszczy vertex colors)
     *
     * Technika tintowania: material.color * vertexColor = finalColor
     *   - active:   material.color = 0xffffff  → brak zmiany (×1.0)
     *   - inactive: material.color = 0x606060  → przytłumione do ~37% jasności
     *   Połączone z opacity 0.30 daje miękki efekt "cień".
     */
    highlightRegion(regionId) {
      this.activeRegion = regionId;
      this._updateInfoPanel(regionId);

      this.clouds.forEach(({ cloud }) => {
        const mat = cloud.material;
        const hit = regionId === 'all' || cloud.userData.regionId === regionId;

        if (regionId === 'all') {
          mat.opacity = cloud.userData.baseOpacity;
          mat.size    = cloud.userData.baseSize;
          mat.color.setHex(0xffffff);
        } else if (hit) {
          // Wybrany: pełna widoczność + większy rozmiar
          mat.opacity = 0.97;
          mat.size    = cloud.userData.baseSize * 1.60;
          mat.color.setHex(0xffffff);
        } else {
          // Niewybrany: MIĘKKO przyciemniony (nie niewidoczny!)
          mat.opacity = 0.30;
          mat.size    = cloud.userData.baseSize * 0.92;
          mat.color.setHex(0x585858);  // tint ciemny → vertex colors × 0.35
        }
        mat.needsUpdate = true;
      });

      document.querySelectorAll('.brain-region-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.region === regionId);
      });

      this.labels.forEach(({ sprite, regionId: lid }) => {
        const show = regionId === 'all' || lid === regionId;
        sprite.material.opacity = show ? 1.0 : 0.12;
        sprite.material.needsUpdate = true;
      });
    }

    toggleLabels() {
      this.labelsVisible = !this.labelsVisible;
      this.labels.forEach(({ sprite }) => { sprite.visible = this.labelsVisible; });
      return this.labelsVisible;
    }

    toggleRotation() {
      this._autoRotate = !this._autoRotate;
      this.controls.autoRotate = this._autoRotate;
      return this._autoRotate;
    }

    resetView() {
      this.camera.position.set(0, 0.18, 4.3);
      this.controls.target.set(0, 0.05, 0);
      this.controls.reset();
      this.highlightRegion('all');
    }

    _updateInfoPanel(regionId) {
      const panel = document.getElementById(this.infoPanelId);
      if (!panel) return;
      const total = REGIONS.reduce((s,r) => s + r.points, 0);

      if (regionId === 'all') {
        panel.innerHTML = `
          <div class="brain-info-title">🧠 Model chmury punktów</div>
          <div class="brain-info-stats">
            <span class="brain-stat"><strong>${total.toLocaleString('pl-PL')}</strong> punktów</span>
            <span class="brain-stat"><strong>${REGIONS.filter(r=>r.label).length}</strong> regionów</span>
          </div>
          <div class="brain-info-desc">
            Geometria wyznaczona z atlasów neuroanatomicznych. Płat skroniowy leży wyraźnie poniżej
            bruzdy Sylwiusza. Fałdy kory generowane sumą harmonik perturbacyjnych; móżdżek ma gęstsze,
            równoległe folia.<br><br>
            <span style="color:var(--accent-gold)">Kliknij region</span> na modelu lub wybierz strukturę
            z listy, aby poznać szczegóły anatomiczne. Obracaj myszą · przybliżaj kółkiem.
          </div>`;
        return;
      }

      const reg = REGIONS.find(r => r.id === regionId);
      if (!reg?.desc) return;
      const hex = '#' + reg.color.toString(16).padStart(6, '0');
      panel.innerHTML = `
        <div class="brain-info-title" style="color:${hex}">◉ ${reg.name}</div>
        <div class="brain-info-desc">${reg.desc}</div>`;
    }

    destroy() {
      if (this._animFrame)    cancelAnimationFrame(this._animFrame);
      if (this._resizeHandler) window.removeEventListener('resize', this._resizeHandler);
      if (this.renderer) {
        this.renderer.dispose();
        const c = this.renderer.domElement;
        if (c.parentNode) c.parentNode.removeChild(c);
      }
      this.scene = this.renderer = null;
    }
  }

  global.Brain3DViewer = Brain3DViewer;
  global.BRAIN_REGIONS = REGIONS;

})(window);
