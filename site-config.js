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
        { id: 'neuro/myelinizacja',         label: 'Mielinizacja i istota biała',          file: 'wiki/neuro/myelinizacja.md'         },
        { id: 'neuro/plastycznosc',         label: 'Neuroplastyczność',                    file: 'wiki/neuro/plastycznosc.md'         },
        { id: 'neuro/neuroobrazowanie',     label: 'Neuroobrazowanie (fMRI, DTI)',          file: 'wiki/neuro/neuroobrazowanie.md'     },
        { id: 'neuro/lateralizacja',        label: 'Lateralizacja funkcji',                file: 'wiki/neuro/lateralizacja.md'        },
        { id: 'neuro/kora_prefrontalna',    label: 'Kora przedczołowa',                    file: 'wiki/neuro/kora_prefrontalna.md'    },
        { id: 'neuro/uklad_limbiczny',      label: 'Układ limbiczny',                      file: 'wiki/neuro/uklad_limbiczny.md'      },
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
        { id: 'cognitive/zmeczenie_poznawcze', label: 'Zmęczenie poznawcze',       file: 'wiki/cognitive/zmeczenie_poznawcze.md' },
        { id: 'cognitive/myslenie',             label: 'Myślenie i rozumowanie',    file: 'wiki/cognitive/myslenie.md'             },
        { id: 'cognitive/uczenie',              label: 'Uczenie się',               file: 'wiki/cognitive/uczenie.md'              },
        { id: 'cognitive/wyobraznia',           label: 'Wyobraźnia i reprezentacje',file: 'wiki/cognitive/wyobraznia.md'           },
        { id: 'cognitive/swiadomosc',           label: 'Świadomość i metapoznanie', file: 'wiki/cognitive/swiadomosc.md'           },
        { id: 'cognitive/podejmowanie_decyzji', label: 'Podejmowanie decyzji',      file: 'wiki/cognitive/podejmowanie_decyzji.md' },
      ]
    },
    {
      section: 'Zaburzenia Kliniczne',
      items: [
        { id: 'disorders/afazje',    label: 'Afazje',            file: 'wiki/disorders/afazje.md'    },
        { id: 'disorders/amnezje',   label: 'Amnezje',           file: 'wiki/disorders/amnezje.md'   },
        { id: 'disorders/otepienia', label: 'Otępienia',         file: 'wiki/disorders/otepienia.md' },
        { id: 'disorders/tbi',       label: 'Urazy głowy (TBI)', file: 'wiki/disorders/tbi.md'       },
        { id: 'disorders/apraksja',  label: 'Apraksja',               file: 'wiki/disorders/apraksja.md'  },
        { id: 'disorders/agnozja',   label: 'Agnozja wzrokowa',       file: 'wiki/disorders/agnozja.md'   },
        { id: 'disorders/neglect',   label: 'Neglect przestrzenny',   file: 'wiki/disorders/neglect.md'   },
        { id: 'disorders/adhd',      label: 'ADHD',                   file: 'wiki/disorders/adhd.md'      },
        { id: 'disorders/asd',       label: 'Spektrum autyzmu (ASD)', file: 'wiki/disorders/asd.md'       },
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
        { id: 'diagnostics/testy_pamieci',     label: 'Testy pamięci',              file: 'wiki/diagnostics/testy_pamieci.md'     },
        { id: 'diagnostics/testy_uwagi',       label: 'Testy uwagi',                file: 'wiki/diagnostics/testy_uwagi.md'       },
        { id: 'diagnostics/testy_jezyka',      label: 'Testy językowe',             file: 'wiki/diagnostics/testy_jezyka.md'      },
        { id: 'diagnostics/wais',              label: 'Skale Wechslera (WAIS/WISC)',file: 'wiki/diagnostics/wais.md'              },
        { id: 'diagnostics/neuropsych_battery',label: 'Baterie neuropsychologiczne',file: 'wiki/diagnostics/neuropsych_battery.md'},
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
        { id: 'psychometrics/cfa_efa',       label: 'Analiza czynnikowa',    file: 'wiki/psychometrics/cfa_efa.md'       },
        { id: 'psychometrics/invariancja',   label: 'Inwariancja pomiarowa', file: 'wiki/psychometrics/invariancja.md'   },
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
        { id: 'pharmacology/psychodeliki',       label: 'Psychodeliki w terapii',     file: 'wiki/pharmacology/psychodeliki.md'       },
        { id: 'pharmacology/nootropiki',         label: 'Nootropiki i kognitywne',    file: 'wiki/pharmacology/nootropiki.md'         },
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
        { id: 'individual_diffs/style_poznawcze',       label: 'Style poznawcze',             file: 'wiki/individual_diffs/style_poznawcze.md'       },
        { id: 'individual_diffs/plec_psychologia',      label: 'Psychologia płci',            file: 'wiki/individual_diffs/plec_psychologia.md'      },
      ]
    },
    {
      section: 'Temperament',
      items: [
        { id: 'temperament/temperament_wprowadzenie', label: 'Temperament — wprowadzenie', file: 'wiki/temperament/temperament_wprowadzenie.md' },
        { id: 'temperament/modele',      label: 'Modele temperamentu',   file: 'wiki/temperament/modele.md'      },
        { id: 'temperament/pomiar',      label: 'Pomiar temperamentu',   file: 'wiki/temperament/pomiar.md'      },
        { id: 'temperament/kliniczne',   label: 'Wymiar kliniczny',      file: 'wiki/temperament/kliniczne.md'   },
        { id: 'temperament/razvoj',      label: 'Temperament a rozwój',  file: 'wiki/temperament/razvoj.md'      },
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
        { id: 'emotions/wspolczucie',          label: 'Empatia i współczucie',    file: 'wiki/emotions/wspolczucie.md'         },
        { id: 'emotions/aleksytymia',          label: 'Aleksytymia',              file: 'wiki/emotions/aleksytymia.md'         },
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
        { id: 'biology/chronobiologia',        label: 'Chronobiologia i sen',          file: 'wiki/biology/chronobiologia.md'        },
        { id: 'biology/mikrobiom',             label: 'Oś jelita–mózg',               file: 'wiki/biology/mikrobiom.md'             },
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
        { id: 'psychotherapy/sojusz',     label: 'Sojusz terapeutyczny',         file: 'wiki/psychotherapy/sojusz.md'    },
        { id: 'psychotherapy/emdr',       label: 'EMDR',                         file: 'wiki/psychotherapy/emdr.md'      },
        { id: 'psychotherapy/act',        label: 'Terapia akceptacji (ACT)',      file: 'wiki/psychotherapy/act.md'       },
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
        { id: 'psychopathology/ocd',                          label: 'OCD i pokrewne',                  file: 'wiki/psychopathology/ocd.md'                          },
        { id: 'psychopathology/uzaleznienia_psych',           label: 'Uzależnienia — aspekt psych.',   file: 'wiki/psychopathology/uzaleznienia_psych.md'           },
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
        { id: 'suicidology/postvention',               label: 'Postvention',                  file: 'wiki/suicidology/postvention.md'               },
        { id: 'suicidology/media',                     label: 'Efekt Wertera i Papageno',     file: 'wiki/suicidology/media.md'                     },
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
        { id: 'sexology/rozw_seksualny',           label: 'Rozwój seksualny',            file: 'wiki/sexology/rozw_seksualny.md'           },
        { id: 'sexology/modele_odpowiedzi',        label: 'Modele odpowiedzi seksualnej',file: 'wiki/sexology/modele_odpowiedzi.md'        },
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
        { id: 'artetherapy/biblioterapia', label: 'Biblioterapia',          file: 'wiki/artetherapy/biblioterapia.md' },
        { id: 'artetherapy/mechanizmy',   label: 'Mechanizmy działania',   file: 'wiki/artetherapy/mechanizmy.md'   },
        { id: 'artetherapy/zastosowania', label: 'Zastosowania kliniczne', file: 'wiki/artetherapy/zastosowania.md' },
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
        { id: 'animaltherapy/mechanizmy_aat', label: 'Mechanizmy AAT',         file: 'wiki/animaltherapy/mechanizmy_aat.md' },
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
        { id: 'wiki-index/biologia',         label: 'WIKI — Biologia zachowania',   wiki: 'biologia'         },
        { id: 'wiki-index/roznice_ind',      label: 'WIKI — Różnice indywidualne',  wiki: 'roznice_ind'      },
        { id: 'wiki-index/terapie_artystyczne', label: 'WIKI — Terapie artystyczne', wiki: 'terapie_artystyczne' },
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
      { file: 'wiki/neuro/myelinizacja.md',label: 'Mielinizacja i istota biała',status: 'live' },
      { file: 'wiki/neuro/plastycznosc.md',label: 'Neuroplastyczność',          status: 'live' },
      { file: 'wiki/neuro/neuroobrazowanie.md', label: 'Neuroobrazowanie (fMRI, DTI)', status: 'live' },
      { file: 'wiki/neuro/lateralizacja.md',label: 'Lateralizacja funkcji',    status: 'live' },
      { file: 'wiki/neuro/kora_prefrontalna.md', label: 'Kora przedczołowa',   status: 'live' },
      { file: 'wiki/neuro/uklad_limbiczny.md', label: 'Układ limbiczny',       status: 'live' },
      { file: 'wiki/neuro/przesilenie_wiosenne.md', label: 'Neurobiologia przesilenia wiosennego', status: 'live' },
    ],
    cognitive: [
      { file: 'wiki/cognitive/pamiec.md',              label: 'Pamięć',               status: 'live' },
      { file: 'wiki/cognitive/uwaga.md',               label: 'Uwaga',                status: 'live' },
      { file: 'wiki/cognitive/jezyk.md',               label: 'Język',                status: 'live' },
      { file: 'wiki/cognitive/funkcje_wykonawcze.md',  label: 'Funkcje wykonawcze',   status: 'live' },
      { file: 'wiki/cognitive/percepcja.md',           label: 'Percepcja i gnozja',   status: 'live' },
      { file: 'wiki/cognitive/zmeczenie_poznawcze.md', label: 'Zmęczenie poznawcze',  status: 'live' },
      { file: 'wiki/cognitive/myslenie.md',            label: 'Myślenie i rozumowanie', status: 'live' },
      { file: 'wiki/cognitive/uczenie.md',             label: 'Uczenie się',          status: 'live' },
      { file: 'wiki/cognitive/wyobraznia.md',          label: 'Wyobraźnia i reprezentacje', status: 'live' },
      { file: 'wiki/cognitive/swiadomosc.md',          label: 'Świadomość i metapoznanie', status: 'live' },
      { file: 'wiki/cognitive/podejmowanie_decyzji.md',label: 'Podejmowanie decyzji', status: 'live' },
    ],
    disorders: [
      { file: 'wiki/disorders/afazje.md',    label: 'Afazje',                 status: 'live' },
      { file: 'wiki/disorders/amnezje.md',   label: 'Amnezje',                status: 'live' },
      { file: 'wiki/disorders/otepienia.md', label: 'Otępienia',              status: 'live' },
      { file: 'wiki/disorders/tbi.md',       label: 'Urazy głowy (TBI)',      status: 'live' },
      { file: 'wiki/disorders/apraksja.md',  label: 'Apraksja',               status: 'live' },
      { file: 'wiki/disorders/agnozja.md',   label: 'Agnozja wzrokowa',       status: 'live' },
      { file: 'wiki/disorders/neglect.md',   label: 'Neglect przestrzenny',   status: 'live' },
      { file: 'wiki/disorders/adhd.md',      label: 'ADHD',                   status: 'live' },
      { file: 'wiki/disorders/asd.md',       label: 'Spektrum autyzmu (ASD)', status: 'live' },
    ],
    diagnostics: [
      { file: 'wiki/diagnostics/testy_przeglad.md',   label: 'Testy — przegląd',      status: 'live' },
      { file: 'wiki/diagnostics/mmse_moca.md',        label: 'MMSE i MoCA',           status: 'live' },
      { file: 'wiki/diagnostics/testy_wykonawcze.md', label: 'Testy funkcji wyk.',    status: 'live' },
      { file: 'wiki/diagnostics/testy_pamieci.md',    label: 'Testy pamięci',         status: 'live' },
      { file: 'wiki/diagnostics/testy_uwagi.md',      label: 'Testy uwagi',           status: 'live' },
      { file: 'wiki/diagnostics/testy_jezyka.md',     label: 'Testy językowe',        status: 'live' },
      { file: 'wiki/diagnostics/wais.md',             label: 'Skale Wechslera (WAIS/WISC)', status: 'live' },
      { file: 'wiki/diagnostics/neuropsych_battery.md',label: 'Baterie neuropsychologiczne', status: 'live' },
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
      { file: 'wiki/pharmacology/psychodeliki.md',        label: 'Psychodeliki w terapii',      status: 'live' },
      { file: 'wiki/pharmacology/nootropiki.md',          label: 'Nootropiki i kognitywne',     status: 'live' },
    ],
    individual_diffs: [
      { file: 'wiki/individual_diffs/roznice_wprowadzenie.md', label: 'Różnice ind. — wprowadzenie', status: 'live' },
      { file: 'wiki/individual_diffs/inteligencja.md',  label: 'Inteligencja',              status: 'live' },
      { file: 'wiki/individual_diffs/osobowosc.md',     label: 'Osobowość (Wielka Piątka)', status: 'live' },
      { file: 'wiki/individual_diffs/kreatywnosc.md',   label: 'Kreatywność',              status: 'live' },
      { file: 'wiki/individual_diffs/genetyka.md',      label: 'Uwarunkowania genetyczne', status: 'live' },
      { file: 'wiki/individual_diffs/style_poznawcze.md',label: 'Style poznawcze',         status: 'live' },
      { file: 'wiki/individual_diffs/plec_psychologia.md',label: 'Psychologia płci',       status: 'live' },
    ],
    temperament: [
      { file: 'wiki/temperament/temperament_wprowadzenie.md', label: 'Temperament — wprowadzenie', status: 'live' },
      { file: 'wiki/temperament/modele.md',    label: 'Modele temperamentu',     status: 'live' },
      { file: 'wiki/temperament/pomiar.md',    label: 'Pomiar temperamentu',     status: 'live' },
      { file: 'wiki/temperament/kliniczne.md', label: 'Temperament w klinice',   status: 'live' },
      { file: 'wiki/temperament/razvoj.md',    label: 'Temperament a rozwój',    status: 'live' },
    ],
    emotions: [
      { file: 'wiki/emotions/emocje_wprowadzenie.md', label: 'Emocje — wprowadzenie',    status: 'live' },
      { file: 'wiki/emotions/teorie.md',       label: 'Teorie emocji',           status: 'live' },
      { file: 'wiki/emotions/regulacja.md',    label: 'Regulacja emocjonalna',   status: 'live' },
      { file: 'wiki/emotions/motywacja.md',    label: 'Motywacja',               status: 'live' },
      { file: 'wiki/emotions/neurobiologia.md',label: 'Neurobiologia emocji',    status: 'live' },
      { file: 'wiki/emotions/wspolczucie.md',  label: 'Empatia i współczucie',   status: 'live' },
      { file: 'wiki/emotions/aleksytymia.md',  label: 'Aleksytymia',             status: 'live' },
    ],
    biology: [
      { file: 'wiki/biology/biologiczne_podstawy.md', label: 'Biologiczne podstawy — wprow.', status: 'live' },
      { file: 'wiki/biology/genetyka_beh.md',    label: 'Genetyka behawioralna',      status: 'live' },
      { file: 'wiki/biology/hormony.md',          label: 'Hormony i zachowanie',       status: 'live' },
      { file: 'wiki/biology/ewolucja.md',         label: 'Ewolucja i psychologia ewol.',status: 'live' },
      { file: 'wiki/biology/psychofizjologia.md', label: 'Psychofizjologia',           status: 'live' },
      { file: 'wiki/biology/chronobiologia.md',   label: 'Chronobiologia i sen',       status: 'live' },
      { file: 'wiki/biology/mikrobiom.md',        label: 'Oś jelita–mózg',            status: 'live' },
    ],
    psychotherapy: [
      { file: 'wiki/psychotherapy/psychoterapia_wprowadzenie.md', label: 'Psychoterapia — wprowadzenie', status: 'live' },
      { file: 'wiki/psychotherapy/cbt.md',         label: 'Terapia poznawczo-beh. (CBT)', status: 'live' },
      { file: 'wiki/psychotherapy/dbt.md',         label: 'Terapia dialektyczna (DBT)',    status: 'live' },
      { file: 'wiki/psychotherapy/psychodyn.md',   label: 'Terapia psychodynamiczna',     status: 'live' },
      { file: 'wiki/psychotherapy/humanist.md',    label: 'Podejście humanistyczne',      status: 'live' },
      { file: 'wiki/psychotherapy/systemowa.md',   label: 'Terapia systemowa',            status: 'live' },
      { file: 'wiki/psychotherapy/skutecznosc.md', label: 'Skuteczność psychoterapii',    status: 'live' },
      { file: 'wiki/psychotherapy/sojusz.md',      label: 'Sojusz terapeutyczny',         status: 'live' },
      { file: 'wiki/psychotherapy/emdr.md',        label: 'EMDR',                         status: 'live' },
      { file: 'wiki/psychotherapy/act.md',         label: 'Terapia akceptacji (ACT)',      status: 'live' },
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
      { file: 'wiki/psychopathology/ocd.md',                       label: 'OCD i pokrewne',              status: 'live' },
      { file: 'wiki/psychopathology/uzaleznienia_psych.md',        label: 'Uzależnienia — aspekt psych.',status: 'live' },
    ],
    suicidology: [
      { file: 'wiki/suicidology/suicydologia_wprowadzenie.md', label: 'Suicydologia — wprowadzenie', status: 'live' },
      { file: 'wiki/suicidology/epidemiologia.md',  label: 'Epidemiologia',              status: 'live' },
      { file: 'wiki/suicidology/teorie.md',         label: 'Teorie (Joiner, IMV)',       status: 'live' },
      { file: 'wiki/suicidology/ocena_ryzyka.md',   label: 'Ocena ryzyka (C-SSRS)',      status: 'live' },
      { file: 'wiki/suicidology/interwencja.md',    label: 'Interwencja kryzysowa',      status: 'live' },
      { file: 'wiki/suicidology/profilaktyka.md',   label: 'Profilaktyka (3 poziomy)',   status: 'live' },
      { file: 'wiki/suicidology/nssi.md',           label: 'Samookaleczenia (NSSI)',     status: 'live' },
      { file: 'wiki/suicidology/postvention.md',    label: 'Postvention',                status: 'live' },
      { file: 'wiki/suicidology/media.md',          label: 'Efekt Wertera i Papageno',   status: 'live' },
    ],
    sexology: [
      { file: 'wiki/sexology/seksuologia_wprowadzenie.md', label: 'Seksuologia — wprowadzenie', status: 'live' },
      { file: 'wiki/sexology/orientacja.md',         label: 'Orientacja seksualna',      status: 'live' },
      { file: 'wiki/sexology/tozsamosc_plciowa.md',  label: 'Tożsamość płciowa',         status: 'live' },
      { file: 'wiki/sexology/dysfunkcje.md',         label: 'Dysfunkcje seksualne',      status: 'live' },
      { file: 'wiki/sexology/terapia_seksualna.md',  label: 'Terapia seksualna',         status: 'live' },
      { file: 'wiki/sexology/trauma_seksualna.md',   label: 'Trauma seksualna',          status: 'live' },
      { file: 'wiki/sexology/rozw_seksualny.md',     label: 'Rozwój seksualny',          status: 'live' },
      { file: 'wiki/sexology/modele_odpowiedzi.md',  label: 'Modele odpowiedzi seksualnej', status: 'live' },
    ],
    artetherapy: [
      { file: 'wiki/artetherapy/arteterapia_wprowadzenie.md', label: 'Arteterapia — wprowadzenie', status: 'live' },
      { file: 'wiki/artetherapy/art_therapy.md',   label: 'Arteterapia plastyczna', status: 'live' },
      { file: 'wiki/artetherapy/muzykoterapia.md', label: 'Muzykoterapia',          status: 'live' },
      { file: 'wiki/artetherapy/dmt.md',           label: 'Choreoterapia (DMT)',    status: 'live' },
      { file: 'wiki/artetherapy/drameterapia.md',  label: 'Drameterapia',           status: 'live' },
      { file: 'wiki/artetherapy/biblioterapia.md', label: 'Biblioterapia',          status: 'live' },
      { file: 'wiki/artetherapy/mechanizmy.md',    label: 'Mechanizmy działania',   status: 'live' },
      { file: 'wiki/artetherapy/zastosowania.md',  label: 'Zastosowania kliniczne', status: 'live' },
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
    intro: [
      { file: 'wiki/intro/definicja.md', label: 'Definicja i zakres',  status: 'live' },
      { file: 'wiki/intro/historia.md',  label: 'Historia dyscypliny', status: 'live' },
    ],
    cases: [
      { file: 'wiki/cases/hm.md',         label: 'H.M. — amnezja',  status: 'live' },
      { file: 'wiki/cases/gage.md',        label: 'Phineas Gage',     status: 'live' },
      { file: 'wiki/cases/tan.md',         label: '„Tan" — afazja',   status: 'live' },
      { file: 'wiki/cases/split_brain.md', label: 'Rozdzielony mózg', status: 'live' },
    ],
    reference: [
      { file: 'wiki/reference/zakres.md',    label: 'Zakres wiedzy', status: 'live' },
      { file: 'wiki/reference/literatura.md',label: 'Literatura',    status: 'live' },
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
            { label: 'Układ limbiczny', id: 'neuro/uklad_limbiczny', status: 'live', desc: 'Hipokamp, ciało migdałowate, zakręt obręczy.' },
            { label: 'Neuron i synapsa', id: 'neuro/neuron', status: 'live', desc: 'Budowa neuronu, potencjał czynnościowy, LTP/LTD.' },
            { label: 'Układy i sieci mózgowe', id: 'neuro/systemy', status: 'live' },
            { label: 'Mielinizacja i istota biała', id: 'neuro/myelinizacja', status: 'live', desc: 'Pęczek łukowaty, ciało modzelowate, szlaki piramidowe.' },
            { label: 'Neuroplastyczność', id: 'neuro/plastycznosc', status: 'live' },
            { label: 'Neuroobrazowanie (fMRI, DTI)', id: 'neuro/neuroobrazowanie', status: 'live' },
            { label: 'Lateralizacja funkcji', id: 'neuro/lateralizacja', status: 'live' },
            { label: 'Kora przedczołowa', id: 'neuro/kora_prefrontalna', status: 'live' },
            { label: 'Neurobiologia przesilenia wiosennego', id: 'neuro/przesilenie_wiosenne', status: 'live' },
            { label: 'Pień mózgu i móżdżek', id: null, status: 'planned', desc: 'Struktury podkorowe i ich funkcje kliniczne.' },
          ]
        },
        {
          title: 'Syndromologia',
          articles: [
            { label: 'Afazje — klasyfikacja i diagnoza', id: 'disorders/afazje', status: 'live' },
            { label: 'Amnezje — typy i podłoże', id: 'disorders/amnezje', status: 'live' },
            { label: 'Agnozja wzrokowa i prozopagnozja', id: 'disorders/agnozja', status: 'live' },
            { label: 'Neglect przestrzenny', id: 'disorders/neglect', status: 'live' },
            { label: 'Apraksja', id: 'disorders/apraksja', status: 'live' },
            { label: 'Urazy głowy (TBI)', id: 'disorders/tbi', status: 'live' },
            { label: 'Otępienia', id: 'disorders/otepienia', status: 'live' },
            { label: 'ADHD', id: 'disorders/adhd', status: 'live' },
            { label: 'Spektrum autyzmu (ASD)', id: 'disorders/asd', status: 'live' },
          ]
        },
        {
          title: 'Ocena neuropsychologiczna',
          articles: [
            { label: 'Testy przesiewowe (MMSE, MoCA)', id: 'diagnostics/mmse_moca', status: 'live' },
            { label: 'Testy funkcji wykonawczych', id: 'diagnostics/testy_wykonawcze', status: 'live' },
            { label: 'Testy pamięci', id: 'diagnostics/testy_pamieci', status: 'live' },
            { label: 'Testy uwagi', id: 'diagnostics/testy_uwagi', status: 'live' },
            { label: 'Testy językowe', id: 'diagnostics/testy_jezyka', status: 'live' },
            { label: 'Skale Wechslera (WAIS/WISC)', id: 'diagnostics/wais', status: 'live' },
            { label: 'Baterie neuropsychologiczne', id: 'diagnostics/neuropsych_battery', status: 'live', desc: 'LNNB, HRNB, D-KEFS.' },
          ]
        },
        {
          title: 'Przypadki kliniczne',
          articles: [
            { label: 'H.M. — amnezja', id: 'cases/hm', status: 'live' },
            { label: 'Phineas Gage', id: 'cases/gage', status: 'live' },
            { label: '„Tan" — afazja Broki', id: 'cases/tan', status: 'live' },
            { label: 'Rozdzielony mózg', id: 'cases/split_brain', status: 'live' },
          ]
        },
        {
          title: 'Wprowadzenie do dyscypliny',
          articles: [
            { label: 'Definicja i zakres', id: 'intro/definicja', status: 'live' },
            { label: 'Historia dyscypliny', id: 'intro/historia', status: 'live' },
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
            { label: 'Badanie stanu psychicznego (MSE)', id: 'psychopathology/objawy_ogolne', status: 'live' },
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
            { label: 'OCD i zaburzenia pokrewne', id: 'psychopathology/ocd', status: 'live' },
            { label: 'Zaburzenia odżywiania', id: 'psychopathology/zaburzenia_odzywiania', status: 'live' },
            { label: 'Zaburzenia neurorozwojowe', id: 'psychopathology/neurorozwojowe', status: 'live' },
            { label: 'Uzależnienia — aspekt psychologiczny', id: 'psychopathology/uzaleznienia_psych', status: 'live' },
          ]
        },
        {
          title: 'Interwencje i psychoterapia',
          articles: [
            { label: 'Psychoterapia — wprowadzenie', id: 'psychotherapy/psychoterapia_wprowadzenie', status: 'live' },
            { label: 'CBT — podstawy', id: 'psychotherapy/cbt', status: 'live' },
            { label: 'DBT — terapia dialektyczna', id: 'psychotherapy/dbt', status: 'live' },
            { label: 'Terapia psychodynamiczna', id: 'psychotherapy/psychodyn', status: 'live' },
            { label: 'Podejście humanistyczne', id: 'psychotherapy/humanist', status: 'live' },
            { label: 'Terapia systemowa', id: 'psychotherapy/systemowa', status: 'live' },
            { label: 'Terapia akceptacji (ACT)', id: 'psychotherapy/act', status: 'live' },
            { label: 'EMDR', id: 'psychotherapy/emdr', status: 'live' },
            { label: 'Skuteczność psychoterapii', id: 'psychotherapy/skutecznosc', status: 'live' },
            { label: 'Sojusz terapeutyczny', id: 'psychotherapy/sojusz', status: 'live' },
            { label: 'Interwencja kryzysowa', id: 'suicidology/interwencja', status: 'live' },
          ]
        },
        {
          title: 'Suicydologia',
          articles: [
            { label: 'Suicydologia — wprowadzenie', id: 'suicidology/suicydologia_wprowadzenie', status: 'live' },
            { label: 'Epidemiologia', id: 'suicidology/epidemiologia', status: 'live' },
            { label: 'Teorie (Joiner, IMV)', id: 'suicidology/teorie', status: 'live' },
            { label: 'Ocena ryzyka (C-SSRS)', id: 'suicidology/ocena_ryzyka', status: 'live' },
            { label: 'Profilaktyka', id: 'suicidology/profilaktyka', status: 'live' },
            { label: 'Samookaleczenia (NSSI)', id: 'suicidology/nssi', status: 'live' },
            { label: 'Postvention', id: 'suicidology/postvention', status: 'live' },
            { label: 'Efekt Wertera i Papageno', id: 'suicidology/media', status: 'live' },
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
            { label: 'Myślenie i rozumowanie', id: 'cognitive/myslenie', status: 'live' },
            { label: 'Podejmowanie decyzji', id: 'cognitive/podejmowanie_decyzji', status: 'live' },
            { label: 'Świadomość i metapoznanie', id: 'cognitive/swiadomosc', status: 'live' },
            { label: 'Uczenie się', id: 'cognitive/uczenie', status: 'live' },
            { label: 'Wyobraźnia i reprezentacje', id: 'cognitive/wyobraznia', status: 'live' },
            { label: 'Zmęczenie poznawcze', id: 'cognitive/zmeczenie_poznawcze', status: 'live' },
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
        {
          title: 'Emocje i motywacja',
          articles: [
            { label: 'Emocje — wprowadzenie', id: 'emotions/emocje_wprowadzenie', status: 'live' },
            { label: 'Teorie emocji', id: 'emotions/teorie', status: 'live' },
            { label: 'Regulacja emocjonalna', id: 'emotions/regulacja', status: 'live' },
            { label: 'Motywacja', id: 'emotions/motywacja', status: 'live' },
            { label: 'Neurobiologia emocji', id: 'emotions/neurobiologia', status: 'live' },
            { label: 'Empatia i współczucie', id: 'emotions/wspolczucie', status: 'live' },
            { label: 'Aleksytymia', id: 'emotions/aleksytymia', status: 'live' },
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
            { label: 'Uzależnienia — aspekt psychologiczny', id: 'psychopathology/uzaleznienia_psych', status: 'live' },
            { label: 'Kryteria diagnostyczne', id: null, status: 'planned' },
          ]
        },
        {
          title: 'Farmakoterapia',
          articles: [
            { label: 'Neurofarmakologia', id: 'pharmacology/neurofarmakologia', status: 'live' },
            { label: 'Leki przeciwdepresyjne', id: 'pharmacology/przeciwdepresyjne', status: 'live' },
            { label: 'Leki przeciwpsychotyczne', id: 'pharmacology/przeciwpsychotyczne', status: 'live' },
            { label: 'Anksjolityki i nasenne', id: 'pharmacology/anxiolityki', status: 'live' },
            { label: 'Stabilizatory nastroju', id: 'pharmacology/stabilizatory', status: 'live' },
            { label: 'Farmakoterapia uzależnień', id: 'pharmacology/uzaleznienia_farm', status: 'live' },
            { label: 'Psychodeliki w terapii', id: 'pharmacology/psychodeliki', status: 'live' },
            { label: 'Nootropiki i kognitywne', id: 'pharmacology/nootropiki', status: 'live' },
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
        {
          title: 'Seksuologia',
          articles: [
            { label: 'Seksuologia — wprowadzenie', id: 'sexology/seksuologia_wprowadzenie', status: 'live' },
            { label: 'Orientacja seksualna', id: 'sexology/orientacja', status: 'live' },
            { label: 'Tożsamość płciowa', id: 'sexology/tozsamosc_plciowa', status: 'live' },
            { label: 'Dysfunkcje seksualne', id: 'sexology/dysfunkcje', status: 'live' },
            { label: 'Terapia seksualna', id: 'sexology/terapia_seksualna', status: 'live' },
            { label: 'Trauma seksualna', id: 'sexology/trauma_seksualna', status: 'live' },
            { label: 'Rozwój seksualny', id: 'sexology/rozw_seksualny', status: 'live' },
            { label: 'Modele odpowiedzi seksualnej', id: 'sexology/modele_odpowiedzi', status: 'live' },
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
          title: 'Narzędzia diagnostyczne',
          articles: [
            { label: 'Psychometria — podstawy', id: 'psychometrics/psychometria_wprowadzenie', status: 'xlink' },
            { label: 'Testy neuropsychologiczne', id: 'diagnostics/testy_przeglad', status: 'xlink' },
            { label: 'Techniki projekcyjne', id: null, status: 'planned' },
          ]
        },
        {
          title: 'Psychometria',
          articles: [
            { label: 'Psychometria — wprowadzenie', id: 'psychometrics/psychometria_wprowadzenie', status: 'live' },
            { label: 'Rzetelność pomiaru', id: 'psychometrics/rzetelnosc', status: 'live' },
            { label: 'Trafność pomiaru', id: 'psychometrics/trafnosc', status: 'live' },
            { label: 'Normalizacja i normy', id: 'psychometrics/normalizacja', status: 'live' },
            { label: 'Klasyczna teoria testu', id: 'psychometrics/teoria_ct', status: 'live' },
            { label: 'IRT i model Rascha', id: 'psychometrics/irt', status: 'live' },
            { label: 'Analiza czynnikowa', id: 'psychometrics/cfa_efa', status: 'live' },
            { label: 'Inwariancja pomiarowa', id: 'psychometrics/invariancja', status: 'live' },
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
        {
          title: 'Źródła i zasoby',
          articles: [
            { label: 'Zakres wiedzy', id: 'reference/zakres', status: 'live' },
            { label: 'Literatura', id: 'reference/literatura', status: 'live' },
          ]
        },
      ]
    },

    biologia: {
      title: 'WIKI — Biologiczne podstawy zachowania',
      intro: 'Biologiczne podłoże zachowań i procesów psychicznych — od genetyki przez hormony po chronobiologię i mikrobiom.',
      sections: [
        {
          title: 'Podstawy',
          articles: [
            { label: 'Biologiczne podstawy zachowania', id: 'biology/biologiczne_podstawy', status: 'live' },
            { label: 'Genetyka zachowania', id: 'biology/genetyka_beh', status: 'live' },
            { label: 'Psychofizjologia', id: 'biology/psychofizjologia', status: 'live' },
          ]
        },
        {
          title: 'Regulacja biologiczna',
          articles: [
            { label: 'Hormony a zachowanie', id: 'biology/hormony', status: 'live' },
            { label: 'Chronobiologia', id: 'biology/chronobiologia', status: 'live' },
            { label: 'Mikrobiom a mózg', id: 'biology/mikrobiom', status: 'live' },
            { label: 'Ewolucja zachowania', id: 'biology/ewolucja', status: 'live' },
          ]
        },
      ]
    },

    roznice_ind: {
      title: 'WIKI — Różnice indywidualne i temperament',
      intro: 'Czynniki wyjaśniające różnorodność psychologiczną — inteligencja, osobowość, temperament i ich biologiczne podłoże.',
      sections: [
        {
          title: 'Różnice indywidualne',
          articles: [
            { label: 'Wprowadzenie — różnice indywidualne', id: 'individual_diffs/roznice_wprowadzenie', status: 'live' },
            { label: 'Inteligencja', id: 'individual_diffs/inteligencja', status: 'live' },
            { label: 'Osobowość — modele', id: 'individual_diffs/osobowosc', status: 'live' },
            { label: 'Kreatywność', id: 'individual_diffs/kreatywnosc', status: 'live' },
            { label: 'Genetyka osobowości', id: 'individual_diffs/genetyka', status: 'live' },
            { label: 'Style poznawcze', id: 'individual_diffs/style_poznawcze', status: 'live' },
            { label: 'Psychologia płci', id: 'individual_diffs/plec_psychologia', status: 'live' },
          ]
        },
        {
          title: 'Temperament',
          articles: [
            { label: 'Temperament — wprowadzenie', id: 'temperament/temperament_wprowadzenie', status: 'live' },
            { label: 'Modele temperamentu', id: 'temperament/modele', status: 'live' },
            { label: 'Pomiar temperamentu', id: 'temperament/pomiar', status: 'live' },
            { label: 'Temperament a klinika', id: 'temperament/kliniczne', status: 'live' },
            { label: 'Rozwój temperamentu', id: 'temperament/razvoj', status: 'live' },
          ]
        },
      ]
    },

    terapie_artystyczne: {
      title: 'WIKI — Terapie artystyczne i animaloterapia',
      intro: 'Kreatywne i zwierzęce metody terapeutyczne — arteterapia, muzykoterapia, dogoterapia i inne interwencje wspomagające.',
      sections: [
        {
          title: 'Arteterapia',
          articles: [
            { label: 'Arteterapia — wprowadzenie', id: 'artetherapy/arteterapia_wprowadzenie', status: 'live' },
            { label: 'Art therapy (plastyczna)', id: 'artetherapy/art_therapy', status: 'live' },
            { label: 'Muzykoterapia', id: 'artetherapy/muzykoterapia', status: 'live' },
            { label: 'Drameterapia', id: 'artetherapy/drameterapia', status: 'live' },
            { label: 'Taniec i ruch (DMT)', id: 'artetherapy/dmt', status: 'live' },
            { label: 'Biblioterapia', id: 'artetherapy/biblioterapia', status: 'live' },
            { label: 'Mechanizmy terapeutyczne', id: 'artetherapy/mechanizmy', status: 'live' },
            { label: 'Zastosowania kliniczne', id: 'artetherapy/zastosowania', status: 'live' },
          ]
        },
        {
          title: 'Animaloterapia',
          articles: [
            { label: 'Animaloterapia — wprowadzenie', id: 'animaltherapy/animaloterapia_wprowadzenie', status: 'live' },
            { label: 'Dogoterapia', id: 'animaltherapy/dogoterapia', status: 'live' },
            { label: 'Hipoterapia', id: 'animaltherapy/hipoterapia', status: 'live' },
            { label: 'Felinoterapia', id: 'animaltherapy/felinoterapia', status: 'live' },
            { label: 'Zastosowania AAT', id: 'animaltherapy/aat_zastosowania', status: 'live' },
            { label: 'Etyka i dobrostan', id: 'animaltherapy/etyka_aat', status: 'live' },
            { label: 'Mechanizmy AAT', id: 'animaltherapy/mechanizmy_aat', status: 'live' },
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

  defaultPage: '__home__',
};
