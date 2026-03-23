/**
 * site-config.js — PsyHub v3.0 "ATLAS"
 * Jedyne źródło prawdy: nawigacja, mapowanie plików MD, definicje WIKI.
 *
 * Konwencja statusów artykułu:
 *   live    — plik MD istnieje, artykuł dostępny
 *   planned — artykuł zaplanowany, plik jeszcze nie istnieje
 *   xlink   — artykuł współdzielony z innym działem (jeden plik MD)
 *   wiki    — odnośnik do strony indeksu WIKI
 */

window.SITE_CONFIG = {

  // ─────────────────────────────────────────────────────────────
  //  NAWIGACJA BOCZNA
  //  Każda sekcja to zwijany blok w sidebarze.
  //  Klucz "file" → ładowanie MD; "wiki" → strona indeksu WIKI.
  // ─────────────────────────────────────────────────────────────
  nav: [
    {
      section: 'Wprowadzenie',
      items: [
        { id: 'intro/definicja', label: 'Definicja i zakres',  file: 'wiki/intro/definicja.md' },
        { id: 'intro/historia',  label: 'Historia dyscypliny', file: 'wiki/intro/historia.md'  },
      ]
    },
    {
      section: 'Neurobiologia',
      items: [
        { id: 'neuro/anatomia', label: 'Anatomia mózgu',   file: 'wiki/neuro/anatomia.md'  },
        { id: 'neuro/neuron',   label: 'Neuron i synapsa', file: 'wiki/neuro/neuron.md'    },
        { id: 'neuro/systemy',  label: 'Układy i sieci',   file: 'wiki/neuro/systemy.md'   },
        { id: 'neuro/przesilenie_wiosenne', label: 'Neurobiologia przesilenia wiosennego', file: 'wiki/neuro/przesilenie_wiosenne.md' },
      ]
    },
    {
      section: 'Funkcje Poznawcze',
      items: [
        { id: 'cognitive/pamiec',              label: 'Pamięć',               file: 'wiki/cognitive/pamiec.md'              },
        { id: 'cognitive/uwaga',               label: 'Uwaga',                file: 'wiki/cognitive/uwaga.md'               },
        { id: 'cognitive/jezyk',               label: 'Język',                file: 'wiki/cognitive/jezyk.md'               },
        { id: 'cognitive/funkcje_wykonawcze',  label: 'Funkcje wykonawcze',   file: 'wiki/cognitive/funkcje_wykonawcze.md'  },
        { id: 'cognitive/percepcja',           label: 'Percepcja i gnozja',   file: 'wiki/cognitive/percepcja.md'           },
        { id: 'cognitive/zmeczenie_poznawcze', label: 'Zmęczenie poznawcze',  file: 'wiki/cognitive/zmeczenie_poznawcze.md' },
      ]
    },
    {
      section: 'Zaburzenia Kliniczne',
      items: [
        { id: 'disorders/afazje',    label: 'Afazje',            file: 'wiki/disorders/afazje.md'    },
        { id: 'disorders/amnezje',   label: 'Amnezje',           file: 'wiki/disorders/amnezje.md'   },
        { id: 'disorders/otepienia', label: 'Otępienia',         file: 'wiki/disorders/otepienia.md' },
        { id: 'disorders/tbi',       label: 'Urazy głowy (TBI)', file: 'wiki/disorders/tbi.md'       },
      ]
    },
    {
      section: 'Przypadki Kliniczne',
      items: [
        { id: 'cases/hm',          label: 'H.M. — amnezja',      file: 'wiki/cases/hm.md'         },
        { id: 'cases/gage',        label: 'Phineas Gage',         file: 'wiki/cases/gage.md'       },
        { id: 'cases/tan',         label: '„Tan" — afazja',       file: 'wiki/cases/tan.md'        },
        { id: 'cases/split_brain', label: 'Rozdzielony mózg',     file: 'wiki/cases/split_brain.md'},
      ]
    },
    {
      section: 'Diagnostyka',
      items: [
        { id: 'diagnostics/testy_przeglad',   label: 'Testy — przegląd',      file: 'wiki/diagnostics/testy_przeglad.md'   },
        { id: 'diagnostics/mmse_moca',        label: 'Testy przesiewowe',     file: 'wiki/diagnostics/mmse_moca.md'        },
        { id: 'diagnostics/testy_wykonawcze', label: 'Testy wyk. — przegląd', file: 'wiki/diagnostics/testy_wykonawcze.md' },
      ]
    },
    {
      section: 'Psychometria',
      items: [
        { id: 'psychometrics/psychometria_wprowadzenie', label: 'Psychometria — wprowadzenie', file: 'wiki/psychometrics/psychometria_wprowadzenie.md' },
        { id: 'psychometrics/rzetelnosc',    label: 'Rzetelność pomiaru',    file: 'wiki/psychometrics/rzetelnosc.md'    },
        { id: 'psychometrics/trafnosc',      label: 'Trafność pomiaru',      file: 'wiki/psychometrics/trafnosc.md'      },
        { id: 'psychometrics/normalizacja',  label: 'Normalizacja i normy',  file: 'wiki/psychometrics/normalizacja.md'  },
        { id: 'psychometrics/teoria_ct',     label: 'Klasyczna teoria testu',file: 'wiki/psychometrics/teoria_ct.md'     },
        { id: 'psychometrics/irt',           label: 'IRT i Rasch',           file: 'wiki/psychometrics/irt.md'           },
      ]
    },
    {
      section: 'Farmakologia',
      items: [
        { id: 'pharmacology/neurofarmakologia',  label: 'Neurofarmakologia',          file: 'wiki/pharmacology/neurofarmakologia.md'  },
        { id: 'pharmacology/przeciwdepresyjne',  label: 'Leki przeciwdepresyjne',     file: 'wiki/pharmacology/przeciwdepresyjne.md'  },
        { id: 'pharmacology/przeciwpsychotyczne',label: 'Leki przeciwpsychotyczne',   file: 'wiki/pharmacology/przeciwpsychotyczne.md' },
        { id: 'pharmacology/anxiolityki',        label: 'Anksjolityki i nasenne',     file: 'wiki/pharmacology/anxiolityki.md'        },
        { id: 'pharmacology/stabilizatory',      label: 'Stabilizatory nastroju',     file: 'wiki/pharmacology/stabilizatory.md'      },
        { id: 'pharmacology/uzaleznienia_farm',  label: 'Farmakoterapia uzależnień',  file: 'wiki/pharmacology/uzaleznienia_farm.md'  },
      ]
    },
    {
      section: 'Różnice Indywidualne',
      items: [
        { id: 'individual_diffs/roznice_wprowadzenie', label: 'Różnice ind. — wprowadzenie', file: 'wiki/individual_diffs/roznice_wprowadzenie.md' },
        { id: 'individual_diffs/inteligencja',          label: 'Inteligencja',                file: 'wiki/individual_diffs/inteligencja.md'          },
        { id: 'individual_diffs/osobowosc',             label: 'Osobowość',                   file: 'wiki/individual_diffs/osobowosc.md'             },
        { id: 'individual_diffs/kreatywnosc',           label: 'Kreatywność',                 file: 'wiki/individual_diffs/kreatywnosc.md'           },
        { id: 'individual_diffs/genetyka',              label: 'Uwarunkowania genetyczne',    file: 'wiki/individual_diffs/genetyka.md'              },
      ]
    },
    {
      section: 'Temperament',
      items: [
        { id: 'temperament/temperament_wprowadzenie', label: 'Temperament — wprowadzenie', file: 'wiki/temperament/temperament_wprowadzenie.md' },
        { id: 'temperament/modele',      label: 'Modele temperamentu',   file: 'wiki/temperament/modele.md'      },
        { id: 'temperament/pomiar',      label: 'Pomiar temperamentu',   file: 'wiki/temperament/pomiar.md'      },
        { id: 'temperament/kliniczne',   label: 'Wymiar kliniczny',      file: 'wiki/temperament/kliniczne.md'   },
      ]
    },
    {
      section: 'Emocje i Motywacja',
      items: [
        { id: 'emotions/emocje_wprowadzenie', label: 'Emocje — wprowadzenie',   file: 'wiki/emotions/emocje_wprowadzenie.md' },
        { id: 'emotions/teorie',              label: 'Teorie emocji',            file: 'wiki/emotions/teorie.md'              },
        { id: 'emotions/regulacja',           label: 'Regulacja emocjonalna',    file: 'wiki/emotions/regulacja.md'           },
        { id: 'emotions/motywacja',           label: 'Motywacja',                file: 'wiki/emotions/motywacja.md'           },
        { id: 'emotions/neurobiologia',       label: 'Neurobiologia emocji',     file: 'wiki/emotions/neurobiologia.md'       },
      ]
    },
    {
      section: 'Biologiczne Podstawy',
      items: [
        { id: 'biology/biologiczne_podstawy', label: 'Biologiczne podstawy — wprow.', file: 'wiki/biology/biologiczne_podstawy.md' },
        { id: 'biology/genetyka_beh',          label: 'Genetyka behawioralna',         file: 'wiki/biology/genetyka_beh.md'          },
        { id: 'biology/hormony',               label: 'Hormony i zachowanie',          file: 'wiki/biology/hormony.md'               },
        { id: 'biology/ewolucja',              label: 'Ewolucja i psychologia ewol.',  file: 'wiki/biology/ewolucja.md'              },
        { id: 'biology/psychofizjologia',      label: 'Psychofizjologia',              file: 'wiki/biology/psychofizjologia.md'      },
      ]
    },
    {
      section: 'Psychoterapia',
      items: [
        { id: 'psychotherapy/psychoterapia_wprowadzenie', label: 'Psychoterapia — wprowadzenie', file: 'wiki/psychotherapy/psychoterapia_wprowadzenie.md' },
        { id: 'psychotherapy/cbt',        label: 'Terapia poznawczo-beh. (CBT)', file: 'wiki/psychotherapy/cbt.md'        },
        { id: 'psychotherapy/dbt',        label: 'Terapia dialektyczna (DBT)',    file: 'wiki/psychotherapy/dbt.md'        },
        { id: 'psychotherapy/psychodyn',  label: 'Terapia psychodynamiczna',     file: 'wiki/psychotherapy/psychodyn.md'  },
        { id: 'psychotherapy/humanist',   label: 'Podejście humanistyczne',      file: 'wiki/psychotherapy/humanist.md'   },
        { id: 'psychotherapy/systemowa',  label: 'Terapia systemowa i rodzin.',  file: 'wiki/psychotherapy/systemowa.md'  },
        { id: 'psychotherapy/skutecznosc',label: 'Skuteczność psychoterapii',    file: 'wiki/psychotherapy/skutecznosc.md'},
      ]
    },
    {
      section: 'Psychopatologia',
      items: [
        { id: 'psychopathology/psychopatologia_wprowadzenie', label: 'Psychopatologia — wprow.',       file: 'wiki/psychopathology/psychopatologia_wprowadzenie.md' },
        { id: 'psychopathology/objawy_ogolne',                label: 'Objawy ogólne',                  file: 'wiki/psychopathology/objawy_ogolne.md'                },
        { id: 'psychopathology/zaburzenia_lekowe',            label: 'Zaburzenia lękowe',              file: 'wiki/psychopathology/zaburzenia_lekowe.md'            },
        { id: 'psychopathology/zaburzenia_nastroju',          label: 'Zaburzenia nastroju',            file: 'wiki/psychopathology/zaburzenia_nastroju.md'          },
        { id: 'psychopathology/psychozy',                     label: 'Psychozy i schizofrenia',        file: 'wiki/psychopathology/psychozy.md'                     },
        { id: 'psychopathology/zaburzenia_osobowosci',        label: 'Zaburzenia osobowości',          file: 'wiki/psychopathology/zaburzenia_osobowosci.md'        },
        { id: 'psychopathology/trauma_ptsd',                  label: 'Trauma i PTSD',                  file: 'wiki/psychopathology/trauma_ptsd.md'                  },
        { id: 'psychopathology/zaburzenia_odzywiania',        label: 'Zaburzenia odżywiania',          file: 'wiki/psychopathology/zaburzenia_odzywiania.md'        },
        { id: 'psychopathology/neurorozwojowe',               label: 'Zaburzenia neurorozwojowe',      file: 'wiki/psychopathology/neurorozwojowe.md'               },
      ]
    },
    {
      section: 'Suicydologia',
      items: [
        { id: 'suicidology/suicydologia_wprowadzenie', label: 'Suicydologia — wprowadzenie', file: 'wiki/suicidology/suicydologia_wprowadzenie.md' },
        { id: 'suicidology/epidemiologia',             label: 'Epidemiologia',                file: 'wiki/suicidology/epidemiologia.md'             },
        { id: 'suicidology/teorie',                    label: 'Teorie i modele',              file: 'wiki/suicidology/teorie.md'                    },
        { id: 'suicidology/ocena_ryzyka',              label: 'Ocena ryzyka',                 file: 'wiki/suicidology/ocena_ryzyka.md'              },
        { id: 'suicidology/interwencja',               label: 'Interwencja kryzysowa',        file: 'wiki/suicidology/interwencja.md'               },
        { id: 'suicidology/profilaktyka',              label: 'Profilaktyka',                 file: 'wiki/suicidology/profilaktyka.md'              },
        { id: 'suicidology/nssi',                      label: 'Samookaleczenia (NSSI)',        file: 'wiki/suicidology/nssi.md'                      },
      ]
    },
    {
      section: 'Seksuologia',
      items: [
        { id: 'sexology/seksuologia_wprowadzenie', label: 'Seksuologia — wprowadzenie', file: 'wiki/sexology/seksuologia_wprowadzenie.md' },
        { id: 'sexology/orientacja',               label: 'Orientacja seksualna',        file: 'wiki/sexology/orientacja.md'               },
        { id: 'sexology/tozsamosc_plciowa',        label: 'Tożsamość płciowa',           file: 'wiki/sexology/tozsamosc_plciowa.md'        },
        { id: 'sexology/dysfunkcje',               label: 'Dysfunkcje seksualne',        file: 'wiki/sexology/dysfunkcje.md'               },
        { id: 'sexology/terapia_seksualna',        label: 'Terapia seksualna',           file: 'wiki/sexology/terapia_seksualna.md'        },
        { id: 'sexology/trauma_seksualna',         label: 'Trauma seksualna',            file: 'wiki/sexology/trauma_seksualna.md'         },
      ]
    },
    {
      section: 'Arteterapia',
      items: [
        { id: 'artetherapy/arteterapia_wprowadzenie', label: 'Arteterapia — wprowadzenie', file: 'wiki/artetherapy/arteterapia_wprowadzenie.md' },
        { id: 'artetherapy/art_therapy',   label: 'Arteterapia plastyczna',    file: 'wiki/artetherapy/art_therapy.md'   },
        { id: 'artetherapy/muzykoterapia', label: 'Muzykoterapia',             file: 'wiki/artetherapy/muzykoterapia.md' },
        { id: 'artetherapy/dmt',           label: 'Choreoterapia (DMT)',       file: 'wiki/artetherapy/dmt.md'           },
        { id: 'artetherapy/drameterapia',  label: 'Drameterapia',              file: 'wiki/artetherapy/drameterapia.md'  },
        { id: 'artetherapy/biblioterapia', label: 'Biblioterapia',             file: 'wiki/artetherapy/biblioterapia.md' },
      ]
    },
    {
      section: 'Animaloterapia',
      items: [
        { id: 'animaltherapy/animaloterapia_wprowadzenie', label: 'Animaloterapia — wprowadzenie', file: 'wiki/animaltherapy/animaloterapia_wprowadzenie.md' },
        { id: 'animaltherapy/dogoterapia',    label: 'Dogoterapia',            file: 'wiki/animaltherapy/dogoterapia.md'    },
        { id: 'animaltherapy/hipoterapia',    label: 'Hipoterapia',            file: 'wiki/animaltherapy/hipoterapia.md'    },
        { id: 'animaltherapy/felinoterapia',  label: 'Felinoterapia',          file: 'wiki/animaltherapy/felinoterapia.md'  },
        { id: 'animaltherapy/aat_zastosowania', label: 'AAT — zastosowania',   file: 'wiki/animaltherapy/aat_zastosowania.md' },
        { id: 'animaltherapy/etyka_aat',      label: 'Etyka i dobrostan',      file: 'wiki/animaltherapy/etyka_aat.md'      },
      ]
    },
    {
      section: 'Encyklopedie',
      items: [
        { id: 'wiki-index/neuropsychologia', label: 'WIKI — Neuropsychologia',      wiki: 'neuropsychologia' },
        { id: 'wiki-index/kliniczna',        label: 'WIKI — Psych. kliniczna',      wiki: 'kliniczna'        },
        { id: 'wiki-index/poznawcza',        label: 'WIKI — Psych. poznawcza',      wiki: 'poznawcza'        },
        { id: 'wiki-index/spoleczna',        label: 'WIKI — Psych. społeczna',      wiki: 'spoleczna'        },
        { id: 'wiki-index/kulturowa',        label: 'WIKI — Psych. kulturowa',      wiki: 'kulturowa'        },
        { id: 'wiki-index/rozwojowa',        label: 'WIKI — Psych. rozwojowa',      wiki: 'rozwojowa'        },
        { id: 'wiki-index/uzaleznienia',     label: 'WIKI — Uzależnienia',          wiki: 'uzaleznienia'     },
        { id: 'wiki-index/relacje',          label: 'WIKI — Relacje i związki',     wiki: 'relacje'          },
        { id: 'wiki-index/diagnoza',         label: 'WIKI — Diagnoza psychologiczna', wiki: 'diagnoza'       },
        { id: 'wiki-index/etyka',            label: 'WIKI — Etyka zawodowa',        wiki: 'etyka'            },
        { id: 'wiki-index/slownik',          label: 'WIKI — Słownik terminów',      wiki: 'slownik'          },
      ]
    },
    {
      section: 'Referencje',
      items: [
        { id: 'reference/zakres',    label: 'Zakres wiedzy', file: 'wiki/reference/zakres.md'    },
        { id: 'reference/literatura',label: 'Literatura',    file: 'wiki/reference/literatura.md'},
      ]
    },
  ],

  // ─────────────────────────────────────────────────────────────
  //  PLANY ARTYKUŁÓW PER DZIAŁ
  //  Używane przez strony działu jako lista zaplanowanych prac.
  //  Klucz = id działu z nav (pierwsza część przed "/")
  // ─────────────────────────────────────────────────────────────
  plans: {
    neuro: [
      { file: 'wiki/neuro/anatomia.md',    label: 'Anatomia mózgu',             status: 'live' },
      { file: 'wiki/neuro/neuron.md',      label: 'Neuron i synapsa',           status: 'live' },
      { file: 'wiki/neuro/systemy.md',     label: 'Układy i sieci mózgowe',     status: 'live' },
      { file: 'wiki/neuro/myelinizacja.md',label: 'Mielinizacja i istota biała',status: 'planned' },
      { file: 'wiki/neuro/plastycznosc.md',label: 'Neuroplastyczność',          status: 'planned' },
      { file: 'wiki/neuro/neuroobrazowanie.md', label: 'Neuroobrazowanie (fMRI, DTI)', status: 'planned' },
      { file: 'wiki/neuro/lateralizacja.md',label: 'Lateralizacja funkcji',    status: 'planned' },
      { file: 'wiki/neuro/kora_prefrontalna.md', label: 'Kora przedczołowa',   status: 'planned' },
      { file: 'wiki/neuro/uklad_limbiczny.md', label: 'Układ limbiczny',       status: 'planned' },
      { file: 'wiki/neuro/przesilenie_wiosenne.md', label: 'Neurobiologia przesilenia wiosennego', status: 'live' },
    ],
    cognitive: [
      { file: 'wiki/cognitive/pamiec.md',              label: 'Pamięć',               status: 'live' },
      { file: 'wiki/cognitive/uwaga.md',               label: 'Uwaga',                status: 'live' },
      { file: 'wiki/cognitive/jezyk.md',               label: 'Język',                status: 'live' },
      { file: 'wiki/cognitive/funkcje_wykonawcze.md',  label: 'Funkcje wykonawcze',   status: 'live' },
      { file: 'wiki/cognitive/percepcja.md',           label: 'Percepcja i gnozja',   status: 'live' },
      { file: 'wiki/cognitive/zmeczenie_poznawcze.md', label: 'Zmęczenie poznawcze',  status: 'live' },
      { file: 'wiki/cognitive/myslenie.md',            label: 'Myślenie i rozumowanie', status: 'planned' },
      { file: 'wiki/cognitive/uczenie.md',             label: 'Uczenie się',          status: 'planned' },
      { file: 'wiki/cognitive/wyobraznia.md',          label: 'Wyobraźnia i reprezentacje', status: 'planned' },
      { file: 'wiki/cognitive/swiadomosc.md',          label: 'Świadomość i metapoznanie', status: 'planned' },
      { file: 'wiki/cognitive/podejmowanie_decyzji.md',label: 'Podejmowanie decyzji', status: 'planned' },
    ],
    disorders: [
      { file: 'wiki/disorders/afazje.md',    label: 'Afazje',                 status: 'live' },
      { file: 'wiki/disorders/amnezje.md',   label: 'Amnezje',                status: 'live' },
      { file: 'wiki/disorders/otepienia.md', label: 'Otępienia',              status: 'live' },
      { file: 'wiki/disorders/tbi.md',       label: 'Urazy głowy (TBI)',      status: 'live' },
      { file: 'wiki/disorders/apraksja.md',  label: 'Apraksja',               status: 'planned' },
      { file: 'wiki/disorders/agnozja.md',   label: 'Agnozja wzrokowa',       status: 'planned' },
      { file: 'wiki/disorders/neglect.md',   label: 'Neglect przestrzenny',   status: 'planned' },
      { file: 'wiki/disorders/adhd.md',      label: 'ADHD',                   status: 'planned' },
      { file: 'wiki/disorders/asd.md',       label: 'Spektrum autyzmu (ASD)', status: 'planned' },
    ],
    diagnostics: [
      { file: 'wiki/diagnostics/testy_przeglad.md',   label: 'Testy — przegląd',      status: 'live' },
      { file: 'wiki/diagnostics/mmse_moca.md',        label: 'MMSE i MoCA',           status: 'live' },
      { file: 'wiki/diagnostics/testy_wykonawcze.md', label: 'Testy funkcji wyk.',    status: 'live' },
      { file: 'wiki/diagnostics/testy_pamieci.md',    label: 'Testy pamięci',         status: 'planned' },
      { file: 'wiki/diagnostics/testy_uwagi.md',      label: 'Testy uwagi',           status: 'planned' },
      { file: 'wiki/diagnostics/testy_jezyka.md',     label: 'Testy językowe',        status: 'planned' },
      { file: 'wiki/diagnostics/wais.md',             label: 'Skale Wechslera (WAIS/WISC)', status: 'planned' },
      { file: 'wiki/diagnostics/neuropsych_battery.md',label: 'Baterie neuropsychologiczne', status: 'planned' },
    ],
    psychometrics: [
      { file: 'wiki/psychometrics/psychometria_wprowadzenie.md', label: 'Psychometria — wprowadzenie', status: 'live' },
      { file: 'wiki/psychometrics/rzetelnosc.md',   label: 'Rzetelność pomiaru',      status: 'live' },
      { file: 'wiki/psychometrics/trafnosc.md',     label: 'Trafność pomiaru',        status: 'live' },
      { file: 'wiki/psychometrics/normalizacja.md', label: 'Normalizacja i normy',    status: 'live' },
      { file: 'wiki/psychometrics/teoria_ct.md',    label: 'Klasyczna teoria testu',  status: 'live' },
      { file: 'wiki/psychometrics/irt.md',          label: 'IRT i model Rascha',      status: 'live' },
      { file: 'wiki/psychometrics/cfa_efa.md',      label: 'Analiza czynnikowa',      status: 'live' },
      { file: 'wiki/psychometrics/invariancja.md',  label: 'Inwariancja pomiarowa',   status: 'live' },
    ],
    pharmacology: [
      { file: 'wiki/pharmacology/neurofarmakologia.md',   label: 'Neurofarmakologia',           status: 'live' },
      { file: 'wiki/pharmacology/przeciwdepresyjne.md',   label: 'Leki przeciwdepresyjne',      status: 'live' },
      { file: 'wiki/pharmacology/przeciwpsychotyczne.md', label: 'Leki przeciwpsychotyczne',    status: 'live' },
      { file: 'wiki/pharmacology/anxiolityki.md',         label: 'Anksjolityki i nasenne',      status: 'live' },
      { file: 'wiki/pharmacology/stabilizatory.md',       label: 'Stabilizatory nastroju',      status: 'live' },
      { file: 'wiki/pharmacology/uzaleznienia_farm.md',   label: 'Farmakoterapia uzależnień',   status: 'live' },
      { file: 'wiki/pharmacology/psychodeliki.md',        label: 'Psychodeliki w terapii',      status: 'planned' },
      { file: 'wiki/pharmacology/nootropiki.md',          label: 'Nootropiki i kognitywne',     status: 'planned' },
    ],
    individual_diffs: [
      { file: 'wiki/individual_diffs/roznice_wprowadzenie.md', label: 'Różnice ind. — wprowadzenie', status: 'live' },
      { file: 'wiki/individual_diffs/inteligencja.md',  label: 'Inteligencja',              status: 'live' },
      { file: 'wiki/individual_diffs/osobowosc.md',     label: 'Osobowość (Wielka Piątka)', status: 'live' },
      { file: 'wiki/individual_diffs/kreatywnosc.md',   label: 'Kreatywność',              status: 'live' },
      { file: 'wiki/individual_diffs/genetyka.md',      label: 'Uwarunkowania genetyczne', status: 'live' },
      { file: 'wiki/individual_diffs/style_poznawcze.md',label: 'Style poznawcze',         status: 'planned' },
      { file: 'wiki/individual_diffs/plec_psychologia.md',label: 'Psychologia płci',       status: 'planned' },
    ],
    temperament: [
      { file: 'wiki/temperament/temperament_wprowadzenie.md', label: 'Temperament — wprowadzenie', status: 'live' },
      { file: 'wiki/temperament/modele.md',    label: 'Modele temperamentu',     status: 'live' },
      { file: 'wiki/temperament/pomiar.md',    label: 'Pomiar temperamentu',     status: 'live' },
      { file: 'wiki/temperament/kliniczne.md', label: 'Temperament w klinice',   status: 'live' },
      { file: 'wiki/temperament/razvoj.md',    label: 'Temperament a rozwój',    status: 'planned' },
    ],
    emotions: [
      { file: 'wiki/emotions/emocje_wprowadzenie.md', label: 'Emocje — wprowadzenie',    status: 'live' },
      { file: 'wiki/emotions/teorie.md',       label: 'Teorie emocji',           status: 'live' },
      { file: 'wiki/emotions/regulacja.md',    label: 'Regulacja emocjonalna',   status: 'live' },
      { file: 'wiki/emotions/motywacja.md',    label: 'Motywacja',               status: 'live' },
      { file: 'wiki/emotions/neurobiologia.md',label: 'Neurobiologia emocji',    status: 'live' },
      { file: 'wiki/emotions/wspolczucie.md',  label: 'Empatia i współczucie',   status: 'planned' },
      { file: 'wiki/emotions/aleksytymia.md',  label: 'Aleksytymia',             status: 'planned' },
    ],
    biology: [
      { file: 'wiki/biology/biologiczne_podstawy.md', label: 'Biologiczne podstawy — wprow.', status: 'live' },
      { file: 'wiki/biology/genetyka_beh.md',    label: 'Genetyka behawioralna',      status: 'live' },
      { file: 'wiki/biology/hormony.md',          label: 'Hormony i zachowanie',       status: 'live' },
      { file: 'wiki/biology/ewolucja.md',         label: 'Ewolucja i psychologia ewol.',status: 'live' },
      { file: 'wiki/biology/psychofizjologia.md', label: 'Psychofizjologia',           status: 'live' },
      { file: 'wiki/biology/chronobiologia.md',   label: 'Chronobiologia i sen',       status: 'planned' },
      { file: 'wiki/biology/mikrobiom.md',        label: 'Oś jelita–mózg',            status: 'planned' },
    ],
    psychotherapy: [
      { file: 'wiki/psychotherapy/psychoterapia_wprowadzenie.md', label: 'Psychoterapia — wprowadzenie', status: 'live' },
      { file: 'wiki/psychotherapy/cbt.md',         label: 'Terapia poznawczo-beh. (CBT)', status: 'live' },
      { file: 'wiki/psychotherapy/dbt.md',         label: 'Terapia dialektyczna (DBT)',    status: 'live' },
      { file: 'wiki/psychotherapy/psychodyn.md',   label: 'Terapia psychodynamiczna',     status: 'live' },
      { file: 'wiki/psychotherapy/humanist.md',    label: 'Podejście humanistyczne',      status: 'live' },
      { file: 'wiki/psychotherapy/systemowa.md',   label: 'Terapia systemowa',            status: 'live' },
      { file: 'wiki/psychotherapy/skutecznosc.md', label: 'Skuteczność psychoterapii',    status: 'live' },
      { file: 'wiki/psychotherapy/sojusz.md',      label: 'Sojusz terapeutyczny',         status: 'planned' },
      { file: 'wiki/psychotherapy/emdr.md',        label: 'EMDR',                         status: 'planned' },
      { file: 'wiki/psychotherapy/act.md',         label: 'Terapia akceptacji (ACT)',      status: 'planned' },
    ],
    psychopathology: [
      { file: 'wiki/psychopathology/psychopatologia_wprowadzenie.md', label: 'Psychopatologia — wprowadzenie', status: 'live' },
      { file: 'wiki/psychopathology/objawy_ogolne.md',             label: 'Objawy ogólne (MSE)',         status: 'live' },
      { file: 'wiki/psychopathology/zaburzenia_lekowe.md',         label: 'Zaburzenia lękowe',           status: 'live' },
      { file: 'wiki/psychopathology/zaburzenia_nastroju.md',       label: 'Zaburzenia nastroju',         status: 'live' },
      { file: 'wiki/psychopathology/psychozy.md',                  label: 'Psychozy i schizofrenia',     status: 'live' },
      { file: 'wiki/psychopathology/zaburzenia_osobowosci.md',     label: 'Zaburzenia osobowości',       status: 'live' },
      { file: 'wiki/psychopathology/trauma_ptsd.md',               label: 'Trauma i PTSD',               status: 'live' },
      { file: 'wiki/psychopathology/zaburzenia_odzywiania.md',     label: 'Zaburzenia odżywiania',       status: 'live' },
      { file: 'wiki/psychopathology/neurorozwojowe.md',            label: 'Zaburzenia neurorozwojowe',   status: 'live' },
      { file: 'wiki/psychopathology/ocd.md',                       label: 'OCD i pokrewne',              status: 'planned' },
      { file: 'wiki/psychopathology/uzaleznienia_psych.md',        label: 'Uzależnienia — aspekt psych.',status: 'planned' },
    ],
    suicidology: [
      { file: 'wiki/suicidology/suicydologia_wprowadzenie.md', label: 'Suicydologia — wprowadzenie', status: 'live' },
      { file: 'wiki/suicidology/epidemiologia.md',  label: 'Epidemiologia',              status: 'live' },
      { file: 'wiki/suicidology/teorie.md',         label: 'Teorie (Joiner, IMV)',       status: 'live' },
      { file: 'wiki/suicidology/ocena_ryzyka.md',   label: 'Ocena ryzyka (C-SSRS)',      status: 'live' },
      { file: 'wiki/suicidology/interwencja.md',    label: 'Interwencja kryzysowa',      status: 'live' },
      { file: 'wiki/suicidology/profilaktyka.md',   label: 'Profilaktyka (3 poziomy)',   status: 'live' },
      { file: 'wiki/suicidology/nssi.md',           label: 'Samookaleczenia (NSSI)',     status: 'live' },
      { file: 'wiki/suicidology/postvention.md',    label: 'Postvention',                status: 'planned' },
      { file: 'wiki/suicidology/media.md',          label: 'Efekt Wertera i Papageno',   status: 'planned' },
    ],
    sexology: [
      { file: 'wiki/sexology/seksuologia_wprowadzenie.md', label: 'Seksuologia — wprowadzenie', status: 'live' },
      { file: 'wiki/sexology/orientacja.md',         label: 'Orientacja seksualna',      status: 'live' },
      { file: 'wiki/sexology/tozsamosc_plciowa.md',  label: 'Tożsamość płciowa',         status: 'live' },
      { file: 'wiki/sexology/dysfunkcje.md',         label: 'Dysfunkcje seksualne',      status: 'live' },
      { file: 'wiki/sexology/terapia_seksualna.md',  label: 'Terapia seksualna',         status: 'live' },
      { file: 'wiki/sexology/trauma_seksualna.md',   label: 'Trauma seksualna',          status: 'live' },
      { file: 'wiki/sexology/rozw_seksualny.md',     label: 'Rozwój seksualny',          status: 'planned' },
      { file: 'wiki/sexology/modele_odpowiedzi.md',  label: 'Modele odpowiedzi seksualnej', status: 'planned' },
    ],
    artetherapy: [
      { file: 'wiki/artetherapy/arteterapia_wprowadzenie.md', label: 'Arteterapia — wprowadzenie', status: 'live' },
      { file: 'wiki/artetherapy/art_therapy.md',   label: 'Arteterapia plastyczna', status: 'live' },
      { file: 'wiki/artetherapy/muzykoterapia.md', label: 'Muzykoterapia',          status: 'live' },
      { file: 'wiki/artetherapy/dmt.md',           label: 'Choreoterapia (DMT)',    status: 'live' },
      { file: 'wiki/artetherapy/drameterapia.md',  label: 'Drameterapia',           status: 'live' },
      { file: 'wiki/artetherapy/biblioterapia.md', label: 'Biblioterapia',          status: 'live' },
      { file: 'wiki/artetherapy/mechanizmy.md',    label: 'Mechanizmy działania',   status: 'planned' },
      { file: 'wiki/artetherapy/zastosowania.md',  label: 'Zastosowania kliniczne', status: 'planned' },
    ],
    animaltherapy: [
      { file: 'wiki/animaltherapy/animaloterapia_wprowadzenie.md', label: 'Animaloterapia — wprowadzenie', status: 'live' },
      { file: 'wiki/animaltherapy/dogoterapia.md',     label: 'Dogoterapia',          status: 'live' },
      { file: 'wiki/animaltherapy/hipoterapia.md',     label: 'Hipoterapia',          status: 'live' },
      { file: 'wiki/animaltherapy/felinoterapia.md',   label: 'Felinoterapia',        status: 'live' },
      { file: 'wiki/animaltherapy/aat_zastosowania.md',label: 'AAT — zastosowania',  status: 'live' },
      { file: 'wiki/animaltherapy/etyka_aat.md',       label: 'Etyka i dobrostan',   status: 'live' },
      { file: 'wiki/animaltherapy/mechanizmy_aat.md',  label: 'Mechanizmy AAT',      status: 'live' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  //  WIKI — definicje encyklopedii tematycznych
  // ─────────────────────────────────────────────────────────────
  wikis: {
    neuropsychologia: {
      title: 'WIKI — Neuropsychologia kliniczna',
      intro: 'Systematyczny przegląd zagadnień neuropsychologii klinicznej — od struktur mózgu przez syndromologię po rehabilitację.',
      sections: [
        {
          title: 'Podstawy neuroanatomiczne',
          articles: [
            { label: 'Płaty kory mózgowej', id: 'neuro/anatomia', status: 'live' },
            { label: 'Układ limbiczny', id: 'neuro/anatomia', status: 'xlink', desc: 'Hipokamp, ciało migdałowate, zakręt obręczy.' },
            { label: 'Pień mózgu i móżdżek', id: null, status: 'planned', desc: 'Struktury podkorowe i ich funkcje kliniczne.' },
            { label: 'Istota biała — szlaki projekcyjne i asocjacyjne', id: null, status: 'planned', desc: 'Pęczek łukowaty, ciało modzelowate, szlaki piramidowe.' },
          ]
        },
        {
          title: 'Syndromologia',
          articles: [
            { label: 'Afazje — klasyfikacja i diagnoza', id: 'disorders/afazje', status: 'live' },
            { label: 'Amnezje — typy i podłoże', id: 'disorders/amnezje', status: 'live' },
            { label: 'Agnozja wzrokowa i prozopagnozja', id: null, status: 'planned' },
            { label: 'Neglect przestrzenny', id: null, status: 'planned' },
            { label: 'Apraksja', id: null, status: 'planned' },
          ]
        },
        {
          title: 'Ocena neuropsychologiczna',
          articles: [
            { label: 'Testy przesiewowe (MMSE, MoCA)', id: 'diagnostics/mmse_moca', status: 'live' },
            { label: 'Testy funkcji wykonawczych', id: 'diagnostics/testy_wykonawcze', status: 'live' },
            { label: 'Baterie kompleksowe', id: null, status: 'planned', desc: 'LNNB, HRNB, D-KEFS.' },
          ]
        },
      ]
    },

    kliniczna: {
      title: 'WIKI — Psychologia kliniczna',
      intro: 'Diagnoza, terapia i praca kliniczna — od rozumienia zaburzeń po praktykę w systemie ochrony zdrowia.',
      sections: [
        {
          title: 'Podstawy diagnostyki',
          articles: [
            { label: 'Psychopatologia ogólna', id: 'psychopathology/psychopatologia_wprowadzenie', status: 'live' },
            { label: 'Badanie stanu psychicznego (MSE)', id: null, status: 'planned' },
            { label: 'Klasyfikacje ICD-11 i DSM-5-TR', id: null, status: 'planned' },
            { label: 'Formułowanie przypadku', id: null, status: 'planned' },
          ]
        },
        {
          title: 'Zaburzenia kliniczne',
          articles: [
            { label: 'Zaburzenia lękowe', id: 'psychopathology/zaburzenia_lekowe', status: 'live' },
            { label: 'Zaburzenia nastroju', id: 'psychopathology/zaburzenia_nastroju', status: 'live' },
            { label: 'Psychozy', id: 'psychopathology/psychozy', status: 'live' },
            { label: 'Zaburzenia osobowości', id: 'psychopathology/zaburzenia_osobowosci', status: 'live' },
            { label: 'Trauma i PTSD', id: 'psychopathology/trauma_ptsd', status: 'live' },
          ]
        },
        {
          title: 'Interwencje',
          articles: [
            { label: 'CBT — podstawy', id: 'psychotherapy/cbt', status: 'live' },
            { label: 'DBT — terapia dialektyczna', id: 'psychotherapy/dbt', status: 'live' },
            { label: 'Interwencja kryzysowa', id: 'suicidology/interwencja', status: 'live' },
          ]
        },
        {
          title: 'Psychometria',
          articles: [
            { label: 'Psychometria — wprowadzenie', id: 'psychometrics/psychometria_wprowadzenie', status: 'xlink' },
            { label: 'Narzędzia kliniczne (PHQ-9, GAD-7, PCL-5)', id: null, status: 'planned' },
          ]
        },
      ]
    },

    poznawcza: {
      title: 'WIKI — Psychologia poznawcza',
      intro: 'Procesy przetwarzania informacji — od percepcji przez pamięć i uwagę po myślenie i podejmowanie decyzji.',
      sections: [
        {
          title: 'Procesy podstawowe',
          articles: [
            { label: 'Pamięć', id: 'cognitive/pamiec', status: 'live' },
            { label: 'Uwaga', id: 'cognitive/uwaga', status: 'live' },
            { label: 'Percepcja i gnozja', id: 'cognitive/percepcja', status: 'live' },
            { label: 'Język', id: 'cognitive/jezyk', status: 'live' },
          ]
        },
        {
          title: 'Procesy złożone',
          articles: [
            { label: 'Funkcje wykonawcze', id: 'cognitive/funkcje_wykonawcze', status: 'live' },
            { label: 'Myślenie i rozumowanie', id: null, status: 'planned' },
            { label: 'Podejmowanie decyzji', id: null, status: 'planned' },
            { label: 'Świadomość i metapoznanie', id: null, status: 'planned' },
          ]
        },
        {
          title: 'Modele i teorie',
          articles: [
            { label: 'System 1 i System 2 (Kahneman)', id: null, status: 'planned' },
            { label: 'Predictive processing', id: null, status: 'planned' },
            { label: 'Ucieleśnione poznanie', id: null, status: 'planned' },
          ]
        },
      ]
    },

    spoleczna: {
      title: 'WIKI — Psychologia społeczna',
      intro: 'Jak myśli, emocje i zachowania jednostki kształtują się pod wpływem obecności innych — od percepcji społecznej po dynamikę grupową.',
      sections: [
        {
          title: 'Poznanie społeczne',
          articles: [
            { label: 'Percepcja społeczna i atrybucje', id: null, status: 'planned' },
            { label: 'Stereotypy i uprzedzenia', id: null, status: 'planned' },
            { label: 'Ja i samoocena', id: null, status: 'planned' },
            { label: 'Postawy i zmiana postaw', id: null, status: 'planned' },
          ]
        },
        {
          title: 'Wpływ społeczny',
          articles: [
            { label: 'Konformizm i posłuszeństwo', id: null, status: 'planned' },
            { label: 'Perswazja i propaganda', id: null, status: 'planned' },
            { label: 'Dynamika grupowa', id: null, status: 'planned' },
          ]
        },
        {
          title: 'Relacje i zachowania',
          articles: [
            { label: 'Atrakcyjność interpersonalna', id: null, status: 'planned' },
            { label: 'Agresja', id: null, status: 'planned' },
            { label: 'Zachowania prospołeczne', id: null, status: 'planned' },
          ]
        },
      ]
    },

    kulturowa: {
      title: 'WIKI — Psychologia kulturowa',
      intro: 'Jak kultura współtworzy poznanie, emocje, Ja i relacje — badania porównawcze i perspektywa emic/etic.',
      sections: [
        {
          title: 'Podstawy',
          articles: [
            { label: 'Czym jest psychologia kulturowa?', id: null, status: 'planned' },
            { label: 'Metody: emic vs. etic', id: null, status: 'planned' },
            { label: 'Wymiar indywidualizm–kolektywizm', id: null, status: 'planned' },
          ]
        },
        {
          title: 'Kultura a procesy psychiczne',
          articles: [
            { label: 'Kultura a percepcja i uwaga', id: null, status: 'planned' },
            { label: 'Kultura a emocje', id: 'emotions/emocje_wprowadzenie', status: 'xlink' },
            { label: 'Kulturowe modele Ja', id: null, status: 'planned' },
            { label: 'Kultura a zdrowie psychiczne', id: null, status: 'planned' },
          ]
        },
      ]
    },

    rozwojowa: {
      title: 'WIKI — Psychologia rozwojowa',
      intro: 'Zmiany w funkcjonowaniu psychicznym od okresu prenatalnego po późną dorosłość — normatywne i atypowe ścieżki.',
      sections: [
        {
          title: 'Fundamenty',
          articles: [
            { label: 'Główne teorie rozwoju', id: null, status: 'planned' },
            { label: 'Metody badań podłużnych', id: null, status: 'planned' },
          ]
        },
        {
          title: 'Etapy życia',
          articles: [
            { label: 'Niemowlęctwo i wczesne dzieciństwo', id: null, status: 'planned' },
            { label: 'Wiek szkolny', id: null, status: 'planned' },
            { label: 'Adolescencja', id: null, status: 'planned' },
            { label: 'Dorosłość i starzenie się', id: null, status: 'planned' },
          ]
        },
        {
          title: 'Neurobiologia rozwoju',
          articles: [
            { label: 'Neurobiologia — podstawy', id: 'neuro/anatomia', status: 'xlink' },
            { label: 'Plastyczność mózgu a okresy krytyczne', id: null, status: 'planned' },
          ]
        },
      ]
    },

    uzaleznienia: {
      title: 'WIKI — Psychologia uzależnień',
      intro: 'Mechanizmy uzależnień, diagnoza, terapia i profilaktyka — od neurobiologii nałogu po pracę z rodziną.',
      sections: [
        {
          title: 'Mechanizmy i diagnoza',
          articles: [
            { label: 'Neurobiologia uzależnień', id: 'pharmacology/neurofarmakologia', status: 'xlink' },
            { label: 'Kryteria diagnostyczne', id: null, status: 'planned' },
            { label: 'Uzależnienia behawioralne', id: null, status: 'planned' },
          ]
        },
        {
          title: 'Terapia',
          articles: [
            { label: 'Dialog motywujący', id: null, status: 'planned' },
            { label: 'CBT w uzależnieniach', id: 'psychotherapy/cbt', status: 'xlink' },
            { label: 'Zapobieganie nawrotom', id: null, status: 'planned' },
          ]
        },
        {
          title: 'Konteksty',
          articles: [
            { label: 'Uzależnienia u młodzieży', id: null, status: 'planned' },
            { label: 'Współuzależnienie', id: null, status: 'planned' },
            { label: 'Profilaktyka', id: null, status: 'planned' },
          ]
        },
      ]
    },

    relacje: {
      title: 'WIKI — Relacje i związki',
      intro: 'Psychologia bliskich relacji — przywiązanie, miłość, komunikacja, konflikty i terapia par.',
      sections: [
        {
          title: 'Podstawy',
          articles: [
            { label: 'Style przywiązania u dorosłych', id: null, status: 'planned' },
            { label: 'Triangularna teoria miłości', id: null, status: 'planned' },
            { label: 'Dobór partnera', id: null, status: 'planned' },
          ]
        },
        {
          title: 'Dynamika związku',
          articles: [
            { label: 'Komunikacja w parze', id: null, status: 'planned' },
            { label: 'Konflikty i ich rozwiązywanie', id: null, status: 'planned' },
            { label: 'Zdrada i odbudowa zaufania', id: null, status: 'planned' },
          ]
        },
        {
          title: 'Terapia i trudne sytuacje',
          articles: [
            { label: 'Terapia par', id: null, status: 'planned' },
            { label: 'Przemoc w związkach', id: null, status: 'planned' },
            { label: 'Psychologia seksu', id: 'sexology/seksuologia_wprowadzenie', status: 'xlink' },
          ]
        },
      ]
    },

    diagnoza: {
      title: 'WIKI — Diagnoza psychologiczna',
      intro: 'Metody diagnozy jakościowej i ilościowej, wymagania prawne i etyczne, sporządzanie opinii.',
      sections: [
        {
          title: 'Proces diagnostyczny',
          articles: [
            { label: 'Etapy i cele diagnozy', id: null, status: 'planned' },
            { label: 'Wywiad psychologiczny', id: null, status: 'planned' },
            { label: 'Obserwacja kliniczna', id: null, status: 'planned' },
            { label: 'Formułowanie przypadku', id: null, status: 'planned' },
          ]
        },
        {
          title: 'Narzędzia',
          articles: [
            { label: 'Psychometria — podstawy', id: 'psychometrics/psychometria_wprowadzenie', status: 'xlink' },
            { label: 'Techniki projekcyjne', id: null, status: 'planned' },
            { label: 'Testy neuropsychologiczne', id: 'diagnostics/testy_przeglad', status: 'xlink' },
          ]
        },
        {
          title: 'Etyka i prawo',
          articles: [
            { label: 'Opinia psychologiczna', id: null, status: 'planned' },
            { label: 'Tajemnica zawodowa', id: null, status: 'planned' },
            { label: 'Diagnoza a stygmatyzacja', id: null, status: 'planned' },
          ]
        },
      ]
    },

    etyka: {
      title: 'WIKI — Etyka zawodowa',
      intro: 'Zasady etyczne wykonywania zawodu psychologa i psychoterapeuty — od tajemnicy zawodowej po granice relacji.',
      sections: [
        {
          title: 'Fundament etyki',
          articles: [
            { label: 'Kodeksy etyczne — przegląd', id: null, status: 'planned' },
            { label: 'Zasady APA i PTP', id: null, status: 'planned' },
            { label: 'Dobro i nieszkodzenie', id: null, status: 'planned' },
          ]
        },
        {
          title: 'Praktyka',
          articles: [
            { label: 'Tajemnica zawodowa i jej granice', id: null, status: 'planned' },
            { label: 'Świadoma zgoda', id: null, status: 'planned' },
            { label: 'Granice relacji terapeutycznej', id: null, status: 'planned' },
            { label: 'Superwizja i odpowiedzialność', id: null, status: 'planned' },
          ]
        },
      ]
    },

    slownik: {
      title: 'WIKI — Słownik terminów',
      intro: 'Alfabetyczny słownik kluczowych pojęć neuropsychologii i psychologii klinicznej.',
      sections: [
        {
          isGlossary: true,
          entries: [
            { term: 'Afazja',          def: 'Nabyte zaburzenie językowe po uszkodzeniu mózgu — może dotyczyć mówienia, rozumienia, czytania i pisania.', link: 'disorders/afazje' },
            { term: 'Agnozja',         def: 'Niemożność rozpoznawania obiektów przy zachowanych zmysłach i inteligencji.', link: 'neuro/anatomia' },
            { term: 'Amnezja',         def: 'Zaburzenie pamięci — anterogradna (nowe wspomnienia) lub retrogradna (dawne wspomnienia).', link: 'disorders/amnezje' },
            { term: 'Apraksja',        def: 'Zaburzenie wykonywania celowych ruchów przy zachowanej sprawności motorycznej i rozumieniu polecenia.' },
            { term: 'ARAS',            def: 'Wstępujący układ siatkowaty aktywujący — reguluje poziom czujności i aktywacji kory.' },
            { term: 'Ciało modzelowate', def: 'Największa komisura mózgu łącząca obie półkule — ~200 milionów aksonów mielinowanych.' },
            { term: 'DAI',             def: 'Rozlane uszkodzenie aksonalne — rozerwanie długich włókien wskutek sił przyspieszenia-opóźnienia w TBI.', link: 'disorders/tbi' },
            { term: 'DMN',             def: 'Default Mode Network — sieć trybu domyślnego aktywna w spoczynku i autorefleksji; zaburzona w depresji i Alzheimerze.' },
            { term: 'Dopamina',        def: 'Neuroprzekaźnik modulacyjny — motywacja, nagroda, kontrola ruchu. Niedobór → Parkinson; nadmiar → objawy psychotyczne.', link: 'pharmacology/neurofarmakologia' },
            { term: 'DTI',             def: 'Dyfuzyjna tomografia tensora — technika MRI pozwalająca wizualizować szlaki istoty białej (traktografia).' },
            { term: 'ERP',             def: 'Potencjały wywołane — uśrednione odpowiedzi EEG na powtarzane bodźce; N400, P300, MMN.' },
            { term: 'FFA',             def: 'Fusiform Face Area — obszar zakrętu wrzecionowatego wyspecjalizowany w rozpoznawaniu twarzy. Uszkodzenie → prozopagnozja.' },
            { term: 'fMRI',            def: 'Funkcjonalny rezonans magnetyczny — mierzy aktywność mózgu przez zmiany przepływu krwi (sygnał BOLD).' },
            { term: 'GABA',            def: 'Główny neuroprzekaźnik inhibicyjny OUN. Cel benzodiazepin i barbituranów.', link: 'pharmacology/neurofarmakologia' },
            { term: 'Glutaminian',     def: 'Główny neuroprzekaźnik ekscytacyjny. Kluczowy w LTP i ekscytotoksyczności udarowej.', link: 'pharmacology/neurofarmakologia' },
            { term: 'Hipokamp',        def: 'Struktura kształtu konika morskiego — konsolidacja pamięci deklaratywnej i nawigacja przestrzenna.', link: 'neuro/anatomia' },
            { term: 'IRT',             def: 'Item Response Theory — rodzina modeli psychometrycznych opisujących prawdopodobieństwo odpowiedzi w zależności od trudności i zdolności.', link: 'psychometrics/psychometria_wprowadzenie' },
            { term: 'Lateralizacja',   def: 'Asymetryczna lokalizacja funkcji — język zazwyczaj w lewej półkuli, uwaga przestrzenna w prawej.' },
            { term: 'LTD',             def: 'Long-Term Depression — długotrwałe osłabienie synapsy przy niskiej aktywności. Mechanizm zapominania.' },
            { term: 'LTP',             def: 'Long-Term Potentiation — trwałe wzmocnienie synapsy po wysokiej aktywności. Podstawa uczenia się w hipokampie.', link: 'neuro/neuron' },
            { term: 'MoCA',            def: 'Montreal Cognitive Assessment — test przesiewowy zaburzeń poznawczych, bardziej czuły niż MMSE na łagodne deficyty.', link: 'diagnostics/mmse_moca' },
            { term: 'Neglect',         def: 'Zaburzenie uwagi przestrzennej — nieświadome pomijanie jednej strony przestrzeni po uszkodzeniu prawej półkuli.' },
            { term: 'Neuroplastyczność', def: 'Zdolność mózgu do zmiany struktury i funkcji — od poziomu synaptycznego (LTP/LTD) po reorganizację kortykalna.' },
            { term: 'NSSI',            def: 'Non-Suicidal Self-Injury — samookaleczenie bez intencji śmierci, często pełniące funkcję regulacji emocji.', link: 'suicidology/suicydologia_wprowadzenie' },
            { term: 'Pola Brodmanna',  def: '52 obszary kory mózgowej wyznaczone przez Brodmanna (1909) na podstawie cytoarchitektoniki.', link: 'neuro/anatomia' },
            { term: 'Prozopagnozja',   def: 'Specyficzny deficyt rozpoznawania twarzy — związany z uszkodzeniem FFA w zakręcie wrzecionowatym.', link: 'cognitive/percepcja' },
            { term: 'Psychometria',    def: 'Dział metodologii zajmujący się teorią i techniką pomiaru psychologicznego — rzetelność, trafność, normalizacja.', link: 'psychometrics/psychometria_wprowadzenie' },
            { term: 'Pęczek łukowaty', def: 'Szlak istoty białej łączący obszar Wernickego z Broki. Uszkodzenie → afazja przewodzenia.', link: 'disorders/afazje' },
            { term: 'Rzetelność',      def: 'Stopień, w jakim wyniki testu są stabilne i wolne od błędu pomiarowego (alfa Cronbacha, test-retest).', link: 'psychometrics/psychometria_wprowadzenie' },
            { term: 'TBI',             def: 'Traumatic Brain Injury — uraz mózgu od łagodnego wstrząśnienia po ciężki uraz z długoterminowymi konsekwencjami.', link: 'disorders/tbi' },
            { term: 'Trafność',        def: 'Stopień, w jakim test mierzy to, co ma mierzyć — treściowa, kryterialna, zbieżna, czynnikowa.', link: 'psychometrics/psychometria_wprowadzenie' },
            { term: 'Wzgórze',         def: '"Brama świadomości" — przekaźnik zmysłów do kory, regulacja czujności. Uszkodzenie → amnezja wzgórzowa.', link: 'neuro/anatomia' },
          ]
        }
      ]
    },
  },

  defaultPage: 'intro/definicja',
};
