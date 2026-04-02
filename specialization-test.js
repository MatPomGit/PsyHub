(function(){
  const SPECIALTIES = [
    { key: 'kliniczna', name: 'Psychologia kliniczna', color: '#b86b7b', desc: 'Diagnoza, interwencja i wsparcie osób z zaburzeniami psychicznymi.' },
    { key: 'neuro', name: 'Neuropsychologia', color: '#5b8cb8', desc: 'Praca na styku neurologii, poznania i rehabilitacji funkcji mózgowych.' },
    { key: 'psychoterapia', name: 'Psychoterapia', color: '#5a9e6f', desc: 'Długofalowa praca relacyjna i procesowa z pacjentem.' },
    { key: 'sadowa', name: 'Psychologia sądowa', color: '#8b7ab8', desc: 'Ocena ryzyka, opiniowanie i decyzje osadzone w prawie.' },
    { key: 'dziecieca', name: 'Psychologia dzieci i młodzieży', color: '#4a9b9b', desc: 'Wsparcie rozwoju i współpraca z rodziną oraz szkołą.' },
    { key: 'zdrowia', name: 'Psychologia zdrowia', color: '#c9a227', desc: 'Łączenie wiedzy psychologicznej i medycznej w opiece nad pacjentem.' }
  ];

  const AXES = [
    { key: 'conservatism_acceptance', left: 'Konserwatyzm', right: 'Akceptacja' },
    { key: 'law_compassion', left: 'Prawo', right: 'Współczucie' },
    { key: 'comfort_ambition', left: 'Wygoda', right: 'Ambicja' }
  ];

  const q = (id, text, options) => ({ id, text, options });

  const QUESTIONS = [
    q(1, 'Na praktykach widzisz pacjenta po urazie głowy, który upiera się, że „wszystko pamięta”, ale dane z testów temu przeczą. Co najbardziej Cię angażuje?', [
      { text: 'Ustalenie, które funkcje poznawcze są zaburzone i jak je rehabilitować.', scores: { neuro: 3, kliniczna: 1 }, axes: { comfort_ambition: 1 } },
      { text: 'Sprawdzenie, jak przekazać diagnozę tak, by nie odebrać pacjentowi sprawczości.', scores: { psychoterapia: 2, kliniczna: 1 }, axes: { law_compassion: 1 } },
      { text: 'Ocena, czy może bezpiecznie wrócić do pracy wymagającej odpowiedzialności za innych.', scores: { sadowa: 2, zdrowia: 1 }, axes: { conservatism_acceptance: -1, law_compassion: -1 } },
      { text: 'Rozmowa z rodziną o realnym planie codziennego wsparcia i adaptacji.', scores: { dziecieca: 1, zdrowia: 2 }, axes: { law_compassion: 1 } }
    ]),
    q(2, 'W badaniu klinicznym nowej interwencji część uczestników poprawia się mimo placebo. Co robisz najpierw?', [
      { text: 'Analizuję, czy efekt może wynikać z relacji terapeutycznej i oczekiwań pacjenta.', scores: { psychoterapia: 2, kliniczna: 1 }, axes: { comfort_ambition: 1 } },
      { text: 'Sprawdzam model statystyczny i możliwe błędy pomiaru.', scores: { neuro: 2, zdrowia: 1 }, axes: { comfort_ambition: 1 } },
      { text: 'Zadaję pytanie, czy protokół badania spełnia wszystkie wymogi etyczno-prawne.', scores: { sadowa: 2, kliniczna: 1 }, axes: { law_compassion: -1 } },
      { text: 'Interesuje mnie, jak efekt wykorzystać psychoedukacyjnie w pracy z pacjentami.', scores: { zdrowia: 2, dziecieca: 1 }, axes: { law_compassion: 1 } }
    ]),
    q(3, 'Rodzic prosi, by „nie wpisywać wszystkiego” do opinii o dziecku, bo boi się stygmatyzacji. Twoja reakcja?', [
      { text: 'Wyjaśniam granice formalne i dokumentuję pełny obraz, mimo dyskomfortu rodzica.', scores: { sadowa: 2, dziecieca: 1 }, axes: { law_compassion: -1, conservatism_acceptance: -1 } },
      { text: 'Szukam języka, który zachowuje rzetelność, ale minimalizuje etykietowanie.', scores: { dziecieca: 3 }, axes: { conservatism_acceptance: 1, law_compassion: 1 } },
      { text: 'Proponuję dodatkową diagnozę funkcjonalną i plan wsparcia, zanim finalizuję wnioski.', scores: { kliniczna: 2, neuro: 1 }, axes: { comfort_ambition: 1 } },
      { text: 'Koncentruję się na zasobach rodziny i długofalowej pracy nad relacją z dzieckiem.', scores: { psychoterapia: 2, dziecieca: 2 }, axes: { law_compassion: 1 } }
    ]),
    q(4, 'W oddziale psychiatrycznym pacjent odmawia leków i chce wypisu, choć jego stan jest niestabilny. Co uważasz za priorytet?', [
      { text: 'Bezpieczeństwo pacjenta i innych, nawet kosztem ograniczenia autonomii.', scores: { kliniczna: 2, sadowa: 2 }, axes: { law_compassion: -1, conservatism_acceptance: -1 } },
      { text: 'Maksymalnie pogłębioną rozmowę o motywacji i lękach związanych z farmakoterapią.', scores: { psychoterapia: 2, zdrowia: 1 }, axes: { law_compassion: 1 } },
      { text: 'Oceniam, czy przyczyna odmowy może wynikać z deficytów poznawczych lub neurologicznych.', scores: { neuro: 2, kliniczna: 1 }, axes: { comfort_ambition: 1 } },
      { text: 'Pracuję nad planem opieki po wypisie, by uniknąć ponownego kryzysu.', scores: { zdrowia: 2, dziecieca: 1 }, axes: { comfort_ambition: 1 } }
    ]),
    q(5, 'Masz wybrać temat pracy magisterskiej. Który najbardziej Cię „ciągnie”?', [
      { text: 'Biomarkery neurozapalne i ich związek z funkcjami wykonawczymi.', scores: { neuro: 3, zdrowia: 1 }, axes: { comfort_ambition: 1 } },
      { text: 'Skuteczność interwencji krótkoterminowej w leczeniu depresji.', scores: { kliniczna: 2, psychoterapia: 1 }, axes: { comfort_ambition: 1 } },
      { text: 'Różnice w orzecznictwie biegłych przy ocenie poczytalności.', scores: { sadowa: 3 }, axes: { law_compassion: -1 } },
      { text: 'Czynniki chroniące dobrostan uczniów w środowisku szkolnym.', scores: { dziecieca: 2, zdrowia: 1 }, axes: { conservatism_acceptance: 1 } }
    ]),
    q(6, 'W scenariuszu kryzysowym nastolatek ujawnia samookaleczenia i prosi: „Nie mów nikomu”. Co robisz?', [
      { text: 'Utrzymuję granice poufności zgodnie z procedurami i uruchamiam interwencję.', scores: { dziecieca: 2, sadowa: 1, kliniczna: 1 }, axes: { law_compassion: -1 } },
      { text: 'Najpierw stabilizuję emocje rozmową i wspólnie negocjuję kolejne kroki.', scores: { psychoterapia: 2, dziecieca: 1 }, axes: { law_compassion: 1 } },
      { text: 'Analizuję poziom ryzyka i dobieram narzędzia diagnostyczne.', scores: { kliniczna: 2, neuro: 1 }, axes: { comfort_ambition: 1 } },
      { text: 'Organizuję sieć wsparcia (rodzina, szkoła, lekarz), żeby nie został z tym sam.', scores: { zdrowia: 2, dziecieca: 2 }, axes: { law_compassion: 1 } }
    ]),
    q(7, 'Która sytuacja zawodowa daje Ci najwięcej satysfakcji?', [
      { text: 'Widzę poprawę wyników poznawczych po dobrze zaplanowanej rehabilitacji.', scores: { neuro: 3 }, axes: { comfort_ambition: 1 } },
      { text: 'Pacjent po miesiącach terapii zaczyna inaczej rozumieć własne emocje.', scores: { psychoterapia: 3 }, axes: { law_compassion: 1 } },
      { text: 'Moja opinia pomaga sądowi podjąć decyzję chroniącą społeczeństwo.', scores: { sadowa: 3 }, axes: { law_compassion: -1, conservatism_acceptance: -1 } },
      { text: 'Rodzina uczy się, jak wspierać chorego i poprawia się codzienne funkcjonowanie.', scores: { zdrowia: 2, dziecieca: 1 }, axes: { conservatism_acceptance: 1 } }
    ]),
    q(8, 'Podczas superwizji słyszysz dwie skrajne interpretacje przypadku. Jak reagujesz?', [
      { text: 'Dopytuję o dane obiektywne: testy, skale, wskaźniki zmian.', scores: { kliniczna: 2, neuro: 1 }, axes: { law_compassion: -1 } },
      { text: 'Sprawdzam, która interpretacja lepiej chroni dobro pacjenta tu i teraz.', scores: { psychoterapia: 2, zdrowia: 1 }, axes: { law_compassion: 1 } },
      { text: 'Przypominam o standardach dokumentacji i odpowiedzialności prawnej.', scores: { sadowa: 2, kliniczna: 1 }, axes: { law_compassion: -1 } },
      { text: 'Szukam rozwiązania łączącego perspektywę dziecka, rodziny i instytucji.', scores: { dziecieca: 2, zdrowia: 1 }, axes: { conservatism_acceptance: 1 } }
    ]),
    q(9, 'Co bardziej Cię przekonuje w praktyce klinicznej?', [
      { text: 'Dobrze udokumentowany mechanizm neurobiologiczny i powtarzalny efekt.', scores: { neuro: 2, zdrowia: 1 }, axes: { comfort_ambition: 1 } },
      { text: 'Stabilna relacja terapeutyczna, nawet jeśli zmiana jest stopniowa.', scores: { psychoterapia: 2, kliniczna: 1 }, axes: { law_compassion: 1 } },
      { text: 'Rozwiązanie, które minimalizuje ryzyko błędu prawnego i etycznego.', scores: { sadowa: 2, kliniczna: 1 }, axes: { law_compassion: -1 } },
      { text: 'Interwencja możliwa do wdrożenia w środowisku szkoły lub poradni.', scores: { dziecieca: 2, zdrowia: 1 }, axes: { comfort_ambition: -1 } }
    ]),
    q(10, 'Gdy słyszysz „pacjent niestosujący się do zaleceń”, pierwsza myśl to:', [
      { text: 'Trzeba zbadać funkcje wykonawcze i ewentualne zaburzenia poznawcze.', scores: { neuro: 2, kliniczna: 1 }, axes: { conservatism_acceptance: 1 } },
      { text: 'Być może zalecenia były niedopasowane do jego możliwości i wartości.', scores: { psychoterapia: 2, zdrowia: 1 }, axes: { law_compassion: 1, conservatism_acceptance: 1 } },
      { text: 'Należy jasno określić odpowiedzialność i konsekwencje.', scores: { sadowa: 2 }, axes: { law_compassion: -1, conservatism_acceptance: -1 } },
      { text: 'Trzeba włączyć bliskich i zbudować system przypomnień i wsparcia.', scores: { zdrowia: 2, dziecieca: 1 }, axes: { law_compassion: 1 } }
    ]),
    q(11, 'W zespole pojawia się konflikt: terapeuta chce długiej terapii, lekarz szybkiej stabilizacji farmakologicznej. Co robisz?', [
      { text: 'Wybieram ścieżkę, która najszybciej redukuje ryzyko dekompensacji.', scores: { kliniczna: 2, zdrowia: 1 }, axes: { law_compassion: -1 } },
      { text: 'Mediuję, by połączyć interwencję biologiczną i psychologiczną.', scores: { zdrowia: 2, psychoterapia: 1 }, axes: { law_compassion: 1, comfort_ambition: 1 } },
      { text: 'Pilnuję, by decyzja była zgodna z przepisami i odpowiedzialnością zawodową.', scores: { sadowa: 2, kliniczna: 1 }, axes: { law_compassion: -1 } },
      { text: 'Sprawdzam, jak decyzja wpłynie na funkcjonowanie rodziny lub szkoły.', scores: { dziecieca: 2, psychoterapia: 1 }, axes: { conservatism_acceptance: 1 } }
    ]),
    q(12, 'Wybierz środowisko pracy, które brzmi dla Ciebie najbardziej naturalnie:', [
      { text: 'Oddział neurologii i pracownia testów neuropsychologicznych.', scores: { neuro: 3 }, axes: { comfort_ambition: 1 } },
      { text: 'Gabinet psychoterapeutyczny i długoterminowe procesy.', scores: { psychoterapia: 3 }, axes: { law_compassion: 1 } },
      { text: 'Sąd, areszt lub zespół opiniodawczy.', scores: { sadowa: 3 }, axes: { law_compassion: -1 } },
      { text: 'Poradnia zdrowia i szkoła we współpracy z rodzinami.', scores: { dziecieca: 2, zdrowia: 2 }, axes: { conservatism_acceptance: 1 } }
    ]),
    q(13, 'Pacjent pyta, czy „to na pewno diagnoza, a nie etykietka”. Co odpowiadasz najchętniej?', [
      { text: 'Diagnoza to narzędzie robocze — ma prowadzić do skutecznego planu pomocy.', scores: { kliniczna: 2, zdrowia: 1 }, axes: { comfort_ambition: 1 } },
      { text: 'To hipoteza, którą weryfikujemy razem z doświadczeniem pacjenta.', scores: { psychoterapia: 2, neuro: 1 }, axes: { conservatism_acceptance: 1 } },
      { text: 'To również dokument o znaczeniu prawnym, więc wymaga precyzji.', scores: { sadowa: 2, kliniczna: 1 }, axes: { law_compassion: -1 } },
      { text: 'Najważniejsze, aby nie zamykała drogi rozwoju i wsparcia dziecka/rodziny.', scores: { dziecieca: 2, zdrowia: 1 }, axes: { conservatism_acceptance: 1 } }
    ]),
    q(14, 'Który obszar wiedzy rozwijał(a)byś najchętniej przez kolejne lata?', [
      { text: 'Anatomia funkcjonalna, neurologia i neuroobrazowanie.', scores: { neuro: 3 }, axes: { comfort_ambition: 1 } },
      { text: 'Modele zmiany psychicznej i techniki prowadzenia procesu terapeutycznego.', scores: { psychoterapia: 3 }, axes: { comfort_ambition: 1 } },
      { text: 'Procedury opiniowania, standardy dowodowe i etyka biegłego.', scores: { sadowa: 3 }, axes: { law_compassion: -1 } },
      { text: 'Psychoprofilaktyka, edukacja zdrowotna i praca systemowa.', scores: { zdrowia: 2, dziecieca: 1 }, axes: { comfort_ambition: 1 } }
    ]),
    q(15, 'W niejednoznacznej sytuacji etycznej częściej kierujesz się:', [
      { text: 'Zasadą minimalizacji szkody zdrowotnej i ryzyka klinicznego.', scores: { kliniczna: 2, zdrowia: 1 }, axes: { law_compassion: -1 } },
      { text: 'Dobrem relacji i podmiotowością pacjenta.', scores: { psychoterapia: 2, dziecieca: 1 }, axes: { law_compassion: 1, conservatism_acceptance: 1 } },
      { text: 'Literalną zgodnością z przepisami i dokumentacją.', scores: { sadowa: 3 }, axes: { law_compassion: -1, conservatism_acceptance: -1 } },
      { text: 'Rozwiązaniem, które da się utrzymać długofalowo w realnym życiu rodziny.', scores: { dziecieca: 2, zdrowia: 1 }, axes: { comfort_ambition: -1 } }
    ]),
    q(16, 'Zespół prosi Cię o „szybki werdykt” bez pełnych danych. Co robisz?', [
      { text: 'Odmawiam kategorycznych wniosków i rekomenduję dodatkową diagnostykę.', scores: { kliniczna: 2, neuro: 1 }, axes: { comfort_ambition: 1 } },
      { text: 'Przedstawiam roboczą hipotezę i warunki jej weryfikacji w terapii.', scores: { psychoterapia: 2, zdrowia: 1 }, axes: { conservatism_acceptance: 1 } },
      { text: 'Przypominam, że bez pełnych danych opinia może być prawnie wadliwa.', scores: { sadowa: 2 }, axes: { law_compassion: -1 } },
      { text: 'Szukam kompromisu: tymczasowe wsparcie + plan dalszego monitoringu.', scores: { dziecieca: 1, zdrowia: 2 }, axes: { law_compassion: 1 } }
    ]),
    q(17, 'Gdybyś miał(a) wybrać jedną „trudną” kompetencję do opanowania, byłaby to:', [
      { text: 'Interpretacja danych neuropsychologicznych i różnicowanie źródeł deficytów.', scores: { neuro: 3 }, axes: { comfort_ambition: 1 } },
      { text: 'Prowadzenie rozmowy z osobą, która jednocześnie chce i boi się zmiany.', scores: { psychoterapia: 3 }, axes: { law_compassion: 1 } },
      { text: 'Bezstronne wydawanie opinii mimo presji stron postępowania.', scores: { sadowa: 3 }, axes: { law_compassion: -1 } },
      { text: 'Koordynowanie współpracy między pacjentem, rodziną i instytucjami.', scores: { dziecieca: 2, zdrowia: 2 }, axes: { comfort_ambition: 1 } }
    ]),
    q(18, 'Masz ograniczony czas. Co robisz w pierwszej kolejności?', [
      { text: 'Priorytetyzuję objawy alarmowe i bezpieczeństwo somatyczno-psychiczne.', scores: { kliniczna: 2, zdrowia: 1 }, axes: { law_compassion: -1 } },
      { text: 'Wybieram pytania, które budują zaufanie i odsłaniają motywację pacjenta.', scores: { psychoterapia: 2, dziecieca: 1 }, axes: { law_compassion: 1 } },
      { text: 'Ustalam fakty istotne dla odpowiedzialności prawnej i decyzji instytucji.', scores: { sadowa: 2 }, axes: { law_compassion: -1 } },
      { text: 'Oceniam gotowość do zmiany i zasoby wsparcia w środowisku pacjenta.', scores: { zdrowia: 2, dziecieca: 1 }, axes: { conservatism_acceptance: 1 } }
    ]),
    q(19, 'Które zdanie jest Ci najbliższe?', [
      { text: 'Dobra diagnoza to taka, którą da się obronić na danych.', scores: { neuro: 2, kliniczna: 1 }, axes: { comfort_ambition: 1 } },
      { text: 'Dobra diagnoza to taka, która otwiera drogę do realnej zmiany w życiu człowieka.', scores: { psychoterapia: 2, zdrowia: 1 }, axes: { law_compassion: 1 } },
      { text: 'Dobra diagnoza to taka, która wytrzyma próbę procedury i prawa.', scores: { sadowa: 3 }, axes: { law_compassion: -1 } },
      { text: 'Dobra diagnoza to taka, którą rozumie pacjent i jego bliscy.', scores: { dziecieca: 2, zdrowia: 1 }, axes: { conservatism_acceptance: 1 } }
    ]),
    q(20, 'Po pięciu latach pracy chcesz móc powiedzieć:', [
      { text: 'Rozumiem złożone mechanizmy mózg–zachowanie i umiem je przekładać na terapię.', scores: { neuro: 2, kliniczna: 1 }, axes: { comfort_ambition: 1 } },
      { text: 'Pomagam ludziom zmieniać życie przez relację, refleksję i systematyczną pracę.', scores: { psychoterapia: 3 }, axes: { law_compassion: 1 } },
      { text: 'Podejmuję trudne decyzje i biorę odpowiedzialność za ich konsekwencje społeczne.', scores: { sadowa: 3 }, axes: { law_compassion: -1, conservatism_acceptance: -1 } },
      { text: 'Łączę wiedzę psychologiczną i zdrowotną, by wzmacniać codzienne funkcjonowanie.', scores: { zdrowia: 2, dziecieca: 1 }, axes: { comfort_ambition: 1 } }
    ])
  ];

  function evaluate(answers) {
    const specialtyScores = Object.fromEntries(SPECIALTIES.map(s => [s.key, 0]));
    const axisScores = Object.fromEntries(AXES.map(a => [a.key, 0]));

    for (let i = 0; i < QUESTIONS.length; i += 1) {
      const selectedIndex = answers[i];
      if (typeof selectedIndex !== 'number') continue;
      const opt = QUESTIONS[i]?.options[selectedIndex];
      if (!opt) continue;
      for (const [spec, val] of Object.entries(opt.scores || {})) specialtyScores[spec] += val;
      for (const [axis, val] of Object.entries(opt.axes || {})) axisScores[axis] += val;
    }

    const ranking = SPECIALTIES.map(s => ({ ...s, score: specialtyScores[s.key] }))
      .sort((a, b) => b.score - a.score);
    const maxScore = Math.max(...ranking.map(r => r.score), 1);
    const percentages = ranking.map(r => ({ ...r, percent: Math.round((r.score / maxScore) * 100) }));
    const recommended = percentages[0];

    const axisResults = AXES.map(axis => {
      const value = axisScores[axis.key] || 0;
      const normalized = Math.max(-100, Math.min(100, value * 8));
      return { ...axis, value: normalized };
    });

    return { recommended, ranking: percentages, axes: axisResults };
  }

  window.SPECIALIZATION_TEST = { SPECIALTIES, AXES, QUESTIONS, evaluate };
})();
