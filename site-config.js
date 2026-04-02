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

  defaultPage: '__home__',

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
      section: 'Dla Studentów',
      items: [
        { id: 'students/wybor_specjalnosci', label: 'Wybór specjalności', file: 'wiki/students/wybor_specjalnosci.md' },
        { id: 'students/test_specjalnosci',  label: 'Test wyboru specjalności', custom: 'specialization_test' },
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
        { id: 'neuro/cykl_miesiaczkowy',                  label: 'Neuropsychologia cyklu miesiączkowego',  file: 'wiki/neuro/cykl_miesiaczkowy.md'                  },
        { id: 'neuro/rehabilitacja_neuropsychologiczna',  label: 'Rehabilitacja neuropsychologiczna',      file: 'wiki/neuro/rehabilitacja_neuropsychologiczna.md'  },
        { id: 'neuro/neuronauka_poznawcza',               label: 'Neuronauka poznawcza',                   file: 'wiki/neuro/neuronauka_poznawcza.md'               },
        { id: 'neuro/podstawy_neurologii',  label: 'Podstawy neurologii',                  file: 'wiki/neuro/podstawy_neurologii.md'  },
      ]
    },
    {
      section: 'Funkcje Poznawcze',
      items: [
        { id: 'cognitive/pamiec',              label: 'Pamięć',               file: 'wiki/cognitive/pamiec.md'              },
        { id: 'cognitive/pamiec_dlugotrwala',  label: 'Pamięć długotrwała',   file: 'wiki/cognitive/pamiec_dlugotrwala.md'  },
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
        { id: 'cognitive/teoria_perspektywy',  label: 'Teoria perspektywy',         file: 'wiki/cognitive/teoria_perspektywy.md'  },
        { id: 'cognitive/efekt_ramowania',     label: 'Efekt ramowania',             file: 'wiki/cognitive/efekt_ramowania.md'     },
        { id: 'cognitive/nasa_tlx',            label: 'NASA Task Load Index (TLX)', file: 'wiki/cognitive/nasa_tlx.md'            },
        { id: 'cognitive/iluzje',              label: 'Iluzje i błędy poznawcze',   file: 'wiki/cognitive/iluzje.md'              },
        { id: 'cognitive/eksperyment_posnera', label: 'Eksperyment Posnera',         file: 'wiki/cognitive/eksperyment_posnera.md' },
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
        { id: 'psychotherapy/trening_umiejetnosci_spolecznych', label: 'Trening Umiejętności Społecznych (SST)', file: 'wiki/psychotherapy/trening_umiejetnosci_spolecznych.md' },
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
        { id: 'psychopathology/depresja_poporodowa',          label: 'Depresja poporodowa',             file: 'wiki/psychopathology/depresja_poporodowa.md'          },
        { id: 'psychopathology/przymus_powtarzania',          label: 'Przymus powtarzania',             file: 'wiki/psychopathology/przymus_powtarzania.md'          },
        { id: 'psychopathology/wiktymizacja',                 label: 'Wiktymizacja',                    file: 'wiki/psychopathology/wiktymizacja.md'                  },
        { id: 'psychopathology/wyuczona_bezradnosc',          label: 'Wyuczona bezradność',             file: 'wiki/psychopathology/wyuczona_bezradnosc.md'           },
        { id: 'psychopathology/intelektualizacja',            label: 'Intelektualizacja emocji',        file: 'wiki/psychopathology/intelektualizacja.md'             },
        { id: 'psychopathology/dezintegracja_pozytywna',      label: 'Dezintegracja pozytywna',         file: 'wiki/psychopathology/dezintegracja_pozytywna.md'       },
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
      section: 'Psychologia Zdrowia',
      items: [
        { id: 'health_psychology/zdrowie_wprowadzenie',    label: 'Psychologia zdrowia — wprow.',    file: 'wiki/health_psychology/zdrowie_wprowadzenie.md'    },
        { id: 'health_psychology/model_biopsychospoleczny',label: 'Model biopsychospołeczny',        file: 'wiki/health_psychology/model_biopsychospoleczny.md'},
        { id: 'health_psychology/stres',                   label: 'Stres i zdrowie',                 file: 'wiki/health_psychology/stres.md'                   },
        { id: 'health_psychology/radzenie_sobie',          label: 'Radzenie sobie ze stresem',       file: 'wiki/health_psychology/radzenie_sobie.md'          },
        { id: 'health_psychology/zachowania_zdrowotne',    label: 'Zachowania zdrowotne',            file: 'wiki/health_psychology/zachowania_zdrowotne.md'    },
        { id: 'health_psychology/styl_zycia',              label: 'Styl życia a zdrowie',            file: 'wiki/health_psychology/styl_zycia.md'              },
        { id: 'health_psychology/sen_zdrowie',             label: 'Sen i zdrowie psychiczne',        file: 'wiki/health_psychology/sen_zdrowie.md'             },
        { id: 'health_psychology/aktywnosc_fizyczna',      label: 'Aktywność fizyczna a zdrowie psychiczne',    file: 'wiki/health_psychology/aktywnosc_fizyczna.md'      },
        { id: 'health_psychology/dieta_zdrowie',           label: 'Dieta a zdrowie psychiczne',      file: 'wiki/health_psychology/dieta_zdrowie.md'           },
        { id: 'health_psychology/bol',                     label: 'Psychologia bólu',                file: 'wiki/health_psychology/bol.md'                     },
        { id: 'health_psychology/bol_chroniczny',          label: 'Ból przewlekły — zarządzanie',    file: 'wiki/health_psychology/bol_chroniczny.md'          },
        { id: 'health_psychology/choroby_przewlekle',      label: 'Psychologia chorób przewlekłych', file: 'wiki/health_psychology/choroby_przewlekle.md'      },
        { id: 'health_psychology/psychoonkologia',         label: 'Psychoonkologia',                 file: 'wiki/health_psychology/psychoonkologia.md'         },
        { id: 'health_psychology/choroby_ukladu_krazenia', label: 'Choroby układu krążenia',         file: 'wiki/health_psychology/choroby_ukladu_krazenia.md' },
        { id: 'health_psychology/cukrzyca',                label: 'Psychologia cukrzycy',            file: 'wiki/health_psychology/cukrzyca.md'                },
        { id: 'health_psychology/jakosc_zycia',            label: 'Jakość życia a choroba',          file: 'wiki/health_psychology/jakosc_zycia.md'            },
        { id: 'health_psychology/promocja_zdrowia',        label: 'Promocja zdrowia i profilaktyka', file: 'wiki/health_psychology/promocja_zdrowia.md'        },
        { id: 'health_psychology/psychoneuroimmunologia',  label: 'Psychoneuroimmunologia',          file: 'wiki/health_psychology/psychoneuroimmunologia.md'  },
        { id: 'health_psychology/placebo',                 label: 'Efekt placebo i nocebo',          file: 'wiki/health_psychology/placebo.md'                 },
        { id: 'health_psychology/wsparcie_spoleczne',      label: 'Wsparcie społeczne a zdrowie',    file: 'wiki/health_psychology/wsparcie_spoleczne.md'      },
        { id: 'health_psychology/adherencja',              label: 'Adherencja terapeutyczna',        file: 'wiki/health_psychology/adherencja.md'              },
        { id: 'health_psychology/komunikacja_medyczna',    label: 'Komunikacja lekarz–pacjent',      file: 'wiki/health_psychology/komunikacja_medyczna.md'    },
        { id: 'health_psychology/interwencje_zdrowotne',   label: 'Interwencje psychologiczne w medycynie',      file: 'wiki/health_psychology/interwencje_zdrowotne.md'   },
        { id: 'health_psychology/rehabilitacja',           label: 'Rehabilitacja psychologiczna',    file: 'wiki/health_psychology/rehabilitacja.md'           },
        { id: 'health_psychology/wypalenie_zawodowe',      label: 'Wypalenie zawodowe',              file: 'wiki/health_psychology/wypalenie_zawodowe.md'      },
      ]
    },
    {
      section: 'Psychosomatyka',
      items: [
        { id: 'psychosomatics/wprowadzenie',            label: 'Psychosomatyka — wprowadzenie',    file: 'wiki/psychosomatics/wprowadzenie.md'            },
        { id: 'psychosomatics/historia',                label: 'Historia psychosomatyki',           file: 'wiki/psychosomatics/historia.md'                },
        { id: 'psychosomatics/modele_psychosomatyczne', label: 'Modele psychosomatyczne',           file: 'wiki/psychosomatics/modele_psychosomatyczne.md' },
        { id: 'psychosomatics/os_hpa',                  label: 'Oś HPA i mechanizmy stresu',        file: 'wiki/psychosomatics/os_hpa.md'                  },
        { id: 'psychosomatics/aleksytymia',             label: 'Aleksytymia',                       file: 'wiki/psychosomatics/aleksytymia.md'             },
        { id: 'psychosomatics/somatyzacja',             label: 'Somatyzacja i zaburzenia somatyczne', file: 'wiki/psychosomatics/somatyzacja.md'           },
        { id: 'psychosomatics/bol_psychosomatyczny',    label: 'Ból psychosomatyczny',              file: 'wiki/psychosomatics/bol_psychosomatyczny.md'    },
        { id: 'psychosomatics/psychodermatologia',      label: 'Psychodermatologia',                file: 'wiki/psychosomatics/psychodermatologia.md'      },
        { id: 'psychosomatics/psychogastroenterologia', label: 'Psychogastroenterologia',           file: 'wiki/psychosomatics/psychogastroenterologia.md' },
        { id: 'psychosomatics/psychokardiologia',       label: 'Psychokardiologia',                 file: 'wiki/psychosomatics/psychokardiologia.md'       },
        { id: 'psychosomatics/uklad_oddechowy',         label: 'Psychosomatyka układu oddechowego', file: 'wiki/psychosomatics/uklad_oddechowy.md'         },
        { id: 'psychosomatics/choroby_autoimmunologiczne', label: 'Choroby autoimmunologiczne',     file: 'wiki/psychosomatics/choroby_autoimmunologiczne.md' },
        { id: 'psychosomatics/diagnoza_psychosomatyczna',  label: 'Diagnoza psychosomatyczna',      file: 'wiki/psychosomatics/diagnoza_psychosomatyczna.md'  },
        { id: 'psychosomatics/terapia_psychosomatyczna',   label: 'Terapia psychosomatyczna',       file: 'wiki/psychosomatics/terapia_psychosomatyczna.md'   },
      ]
    },
    {
      section: 'Psychologia Osób w Podeszłym Wieku',
      items: [
        { id: 'geropsychology/wprowadzenie',               label: 'Psychologia starości — wprow.',       file: 'wiki/geropsychology/wprowadzenie.md'               },
        { id: 'geropsychology/starzenie_poznawcze',        label: 'Starzenie się poznawcze',             file: 'wiki/geropsychology/starzenie_poznawcze.md'        },
        { id: 'geropsychology/demencja',                   label: 'Demencja i ch. neurodegeneracyjne',   file: 'wiki/geropsychology/demencja.md'                   },
        { id: 'geropsychology/depresja_starszych',         label: 'Depresja u osób starszych',           file: 'wiki/geropsychology/depresja_starszych.md'         },
        { id: 'geropsychology/samotnosc',                  label: 'Samotność i izolacja społeczna',      file: 'wiki/geropsychology/samotnosc.md'                  },
        { id: 'geropsychology/jakosc_zycia_starszych',     label: 'Jakość życia w starości',             file: 'wiki/geropsychology/jakosc_zycia_starszych.md'     },
        { id: 'geropsychology/aktywnosc_poznawcza',        label: 'Aktywność poznawcza i trening umysłu',file: 'wiki/geropsychology/aktywnosc_poznawcza.md'        },
        { id: 'geropsychology/umieranie_smierc',           label: 'Psychologia umierania i śmierci',     file: 'wiki/geropsychology/umieranie_smierc.md'           },
        { id: 'geropsychology/relacje_spoleczne_starszych',label: 'Relacje społeczne i wsparcie rodziny',file: 'wiki/geropsychology/relacje_spoleczne_starszych.md'},
        { id: 'geropsychology/adaptacja_do_starosci',      label: 'Adaptacja do starości i rezyliencja', file: 'wiki/geropsychology/adaptacja_do_starosci.md'      },
        { id: 'geropsychology/interwencje_terapeutyczne',  label: 'Interwencje terapeutyczne',           file: 'wiki/geropsychology/interwencje_terapeutyczne.md'  },
        { id: 'geropsychology/opieka_nad_opiekunami',      label: 'Wypalenie i wsparcie opiekunów',      file: 'wiki/geropsychology/opieka_nad_opiekunami.md'      },
      ]
    },
    {
      section: 'Psychologia Gier Wideo',
      items: [
        { id: 'game_psychology/wprowadzenie',          label: 'Psychologia gier wideo — wprow.', file: 'wiki/game_psychology/wprowadzenie.md'          },
        { id: 'game_psychology/uzaleznienie_od_gier',  label: 'Uzależnienie od gier (IGD)',      file: 'wiki/game_psychology/uzaleznienie_od_gier.md'  },
        { id: 'game_psychology/agresja_a_gry',         label: 'Agresja a gry wideo',             file: 'wiki/game_psychology/agresja_a_gry.md'         },
        { id: 'game_psychology/efekty_poznawcze',      label: 'Efekty poznawcze grania',         file: 'wiki/game_psychology/efekty_poznawcze.md'      },
        { id: 'game_psychology/motywacja_gracza',      label: 'Motywacja gracza',                file: 'wiki/game_psychology/motywacja_gracza.md'      },
        { id: 'game_psychology/flow_i_immersja',       label: 'Przepływ (flow) i immersja',      file: 'wiki/game_psychology/flow_i_immersja.md'       },
        { id: 'game_psychology/gry_spolecznosciowe',   label: 'Gry wieloosobowe i aspekty społ.',file: 'wiki/game_psychology/gry_spolecznosciowe.md'   },
        { id: 'game_psychology/esport',                label: 'Esport i psychologia zawodnika',  file: 'wiki/game_psychology/esport.md'                },
        { id: 'game_psychology/gry_a_dzieci',          label: 'Gry wideo a dzieci i nastolatki', file: 'wiki/game_psychology/gry_a_dzieci.md'          },
        { id: 'game_psychology/gender_w_grach',        label: 'Płeć i tożsamość w grach',        file: 'wiki/game_psychology/gender_w_grach.md'        },
        { id: 'game_psychology/gry_terapeutyczne',     label: 'Gry w terapii i rehabilitacji',   file: 'wiki/game_psychology/gry_terapeutyczne.md'     },
        { id: 'game_psychology/klasyfikacja_gier',     label: 'Klasyfikacja gier (PEGI, ESRB)',  file: 'wiki/game_psychology/klasyfikacja_gier.md'     },
      ]
    },
    {
      section: 'Odporność Psychiczna, Mobbing i Wypalenie',
      items: [
        { id: 'resilience_mobbing/odpornosc_wprowadzenie',   label: 'Odporność psychiczna — wprow.',        file: 'wiki/resilience_mobbing/odpornosc_wprowadzenie.md'   },
        { id: 'resilience_mobbing/modele_odpornosci',        label: 'Modele i teorie odporności',           file: 'wiki/resilience_mobbing/modele_odpornosci.md'        },
        { id: 'resilience_mobbing/budowanie_odpornosci',     label: 'Budowanie odporności psychicznej',     file: 'wiki/resilience_mobbing/budowanie_odpornosci.md'     },
        { id: 'resilience_mobbing/przemoc_psychiczna',       label: 'Przemoc psychiczna — definicja',       file: 'wiki/resilience_mobbing/przemoc_psychiczna.md'       },
        { id: 'resilience_mobbing/mobbing_definicja',        label: 'Mobbing — definicja, rodzaje, fazy',   file: 'wiki/resilience_mobbing/mobbing_definicja.md'        },
        { id: 'resilience_mobbing/mobbing_skutki',           label: 'Skutki psychologiczne mobbingu',       file: 'wiki/resilience_mobbing/mobbing_skutki.md'           },
        { id: 'resilience_mobbing/mobbing_interwencja',      label: 'Interwencja i zapobieganie mobbingowi',file: 'wiki/resilience_mobbing/mobbing_interwencja.md'      },
        { id: 'resilience_mobbing/wypalenie_zawodowe',       label: 'Wypalenie zawodowe — definicja',       file: 'wiki/resilience_mobbing/wypalenie_zawodowe.md'       },
        { id: 'resilience_mobbing/fazy_wypalenia',           label: 'Fazy i wymiary wypalenia',             file: 'wiki/resilience_mobbing/fazy_wypalenia.md'           },
        { id: 'resilience_mobbing/wypalenie_zawody',         label: 'Wypalenie w wybranych zawodach',       file: 'wiki/resilience_mobbing/wypalenie_zawody.md'         },
        { id: 'resilience_mobbing/profilaktyka_wypalenia',   label: 'Profilaktyka wypalenia zawodowego',    file: 'wiki/resilience_mobbing/profilaktyka_wypalenia.md'   },
        { id: 'resilience_mobbing/wsparcie_psychologiczne',  label: 'Wsparcie psychologiczne ofiar',        file: 'wiki/resilience_mobbing/wsparcie_psychologiczne.md'  },
      ]
    },
    {
      section: 'Psychologia Pozytywna',
      items: [
        { id: 'positive_psychology/wprowadzenie',          label: 'Psychologia pozytywna — wprow.',   file: 'wiki/positive_psychology/wprowadzenie.md'          },
        { id: 'positive_psychology/model_perma',           label: 'Model PERMA',                      file: 'wiki/positive_psychology/model_perma.md'           },
        { id: 'positive_psychology/szczescie_dobrostan',   label: 'Szczęście i dobrostan',            file: 'wiki/positive_psychology/szczescie_dobrostan.md'   },
        { id: 'positive_psychology/optymizm_nadzieja',     label: 'Optymizm i nadzieja',              file: 'wiki/positive_psychology/optymizm_nadzieja.md'     },
        { id: 'positive_psychology/przeplyw_flow',         label: 'Przepływ (flow)',                  file: 'wiki/positive_psychology/przeplyw_flow.md'         },
        { id: 'positive_psychology/sily_charakteru',       label: 'Siły charakteru (VIA)',            file: 'wiki/positive_psychology/sily_charakteru.md'       },
        { id: 'positive_psychology/wdziecznosc',           label: 'Wdzięczność',                      file: 'wiki/positive_psychology/wdziecznosc.md'           },
        { id: 'positive_psychology/mindfulness',           label: 'Mindfulness i uważność',           file: 'wiki/positive_psychology/mindfulness.md'           },
        { id: 'positive_psychology/wspolczucie_dla_siebie',label: 'Współczucie dla siebie',           file: 'wiki/positive_psychology/wspolczucie_dla_siebie.md'},
        { id: 'positive_psychology/sens_i_cel',            label: 'Sens życia i poczucie celu',       file: 'wiki/positive_psychology/sens_i_cel.md'            },
        { id: 'positive_psychology/relacje_pozytywne',     label: 'Pozytywne relacje i miłość',       file: 'wiki/positive_psychology/relacje_pozytywne.md'     },
        { id: 'positive_psychology/interwencje_pozytywne', label: 'Interwencje pozytywne',            file: 'wiki/positive_psychology/interwencje_pozytywne.md' },
      ]
    },
    {
      section: 'Ekrany, Książki i Natura',
      items: [
        { id: 'media_nature/wprowadzenie',              label: 'Ekrany, książki i natura — wprow.',   file: 'wiki/media_nature/wprowadzenie.md'              },
        { id: 'media_nature/ekrany_funkcje_poznawcze',  label: 'Ekrany a funkcje poznawcze',          file: 'wiki/media_nature/ekrany_funkcje_poznawcze.md'  },
        { id: 'media_nature/smartfony_psychologia',     label: 'Smartfony a psychologia',             file: 'wiki/media_nature/smartfony_psychologia.md'     },
        { id: 'media_nature/tablety_dzieci',            label: 'Tablety a rozwój poznawczy dzieci',   file: 'wiki/media_nature/tablety_dzieci.md'            },
        { id: 'media_nature/telewizja_psychologia',     label: 'Telewizja a funkcje psychiczne',      file: 'wiki/media_nature/telewizja_psychologia.md'     },
        { id: 'media_nature/czas_ekranowy',             label: 'Czas ekranowy a zdrowie psychiczne',  file: 'wiki/media_nature/czas_ekranowy.md'             },
        { id: 'media_nature/czytanie_ksiazek',          label: 'Czytanie książek a funkcje psych.',   file: 'wiki/media_nature/czytanie_ksiazek.md'          },
        { id: 'media_nature/gleboke_czytanie',          label: 'Głębokie czytanie',                   file: 'wiki/media_nature/gleboke_czytanie.md'          },
        { id: 'media_nature/czytanie_fikcja_empatia',   label: 'Czytanie fikcji a empatia',           file: 'wiki/media_nature/czytanie_fikcja_empatia.md'   },
        { id: 'media_nature/natura_psychologia',        label: 'Natura a psychologia',                file: 'wiki/media_nature/natura_psychologia.md'        },
        { id: 'media_nature/las_shinrin_yoku',          label: 'Kąpiel leśna (shinrin-yoku)',         file: 'wiki/media_nature/las_shinrin_yoku.md'          },
        { id: 'media_nature/gory_psychologia',          label: 'Góry i wędrówki górskie',             file: 'wiki/media_nature/gory_psychologia.md'          },
      ]
    },
    {
      section: 'Psychologia Sztucznej Inteligencji',
      items: [
        { id: 'ai_psychology/wprowadzenie',           label: 'Psychologia AI — wprowadzenie',             file: 'wiki/ai_psychology/wprowadzenie.md'           },
        { id: 'ai_psychology/historia_ai',            label: 'Historia AI i psychologia',                 file: 'wiki/ai_psychology/historia_ai.md'            },
        { id: 'ai_psychology/czlowiek_a_ai',          label: 'Interakcja człowiek-AI',                    file: 'wiki/ai_psychology/czlowiek_a_ai.md'          },
        { id: 'ai_psychology/zaufanie_do_ai',         label: 'Zaufanie do sztucznej inteligencji',        file: 'wiki/ai_psychology/zaufanie_do_ai.md'         },
        { id: 'ai_psychology/uprzedzenia_ai',         label: 'Uprzedzenia i błędy poznawcze w AI',        file: 'wiki/ai_psychology/uprzedzenia_ai.md'         },
        { id: 'ai_psychology/etyka_ai',               label: 'Etyka AI z perspektywy psychologicznej',    file: 'wiki/ai_psychology/etyka_ai.md'               },
        { id: 'ai_psychology/ai_emocje',              label: 'AI a emocje i rozumienie emocji',           file: 'wiki/ai_psychology/ai_emocje.md'              },
        { id: 'ai_psychology/decyzje_ai',             label: 'AI a podejmowanie decyzji',                 file: 'wiki/ai_psychology/decyzje_ai.md'             },
        { id: 'ai_psychology/ai_w_terapii',           label: 'AI w psychoterapii i diagnostyce',          file: 'wiki/ai_psychology/ai_w_terapii.md'           },
        { id: 'ai_psychology/ai_poznawcze',           label: 'Poznawcze aspekty działania AI',            file: 'wiki/ai_psychology/ai_poznawcze.md'           },
        { id: 'ai_psychology/antropomorfizacja_ai',   label: 'Antropomorfizacja AI',                      file: 'wiki/ai_psychology/antropomorfizacja_ai.md'   },
        { id: 'ai_psychology/przyszlosc_ai',          label: 'Przyszłość relacji człowiek-AI',            file: 'wiki/ai_psychology/przyszlosc_ai.md'          },
      ]
    },
    {
      section: 'Robotyka Afektywna i Kognitywistyka',
      items: [
        { id: 'affective_robotics/wprowadzenie',                    label: 'Robotyka afektywna — wprowadzenie',         file: 'wiki/affective_robotics/wprowadzenie.md'                    },
        { id: 'affective_robotics/historia_robotyki_afektywnej',    label: 'Historia robotyki afektywnej',              file: 'wiki/affective_robotics/historia_robotyki_afektywnej.md'    },
        { id: 'affective_robotics/emocje_robotow',                  label: 'Emocje w robotach',                         file: 'wiki/affective_robotics/emocje_robotow.md'                  },
        { id: 'affective_robotics/dolina_niesamowitosci',           label: 'Dolina niesamowitości',                     file: 'wiki/affective_robotics/dolina_niesamowitosci.md'           },
        { id: 'affective_robotics/roboty_spoleczne',                label: 'Roboty społeczne i HRI',                    file: 'wiki/affective_robotics/roboty_spoleczne.md'                },
        { id: 'affective_robotics/kognitywistyka_obliczeniowa',     label: 'Kognitywistyka obliczeniowa',               file: 'wiki/affective_robotics/kognitywistyka_obliczeniowa.md'     },
        { id: 'affective_robotics/percepcja_robotow',               label: 'Percepcja i ocena robotów przez ludzi',     file: 'wiki/affective_robotics/percepcja_robotow.md'               },
        { id: 'affective_robotics/roboty_w_opiece',                 label: 'Roboty w opiece i terapii',                 file: 'wiki/affective_robotics/roboty_w_opiece.md'                 },
        { id: 'affective_robotics/swiadomosc_maszyn',               label: 'Świadomość i podmiotowość maszyn',          file: 'wiki/affective_robotics/swiadomosc_maszyn.md'               },
        { id: 'affective_robotics/wspolpraca_czlowiek_robot',       label: 'Współpraca człowiek–robot (HRC)',            file: 'wiki/affective_robotics/wspolpraca_czlowiek_robot.md'       },
        { id: 'affective_robotics/interfejsy_mozg_maszyna',         label: 'Interfejsy mózg–maszyna (BCI)',              file: 'wiki/affective_robotics/interfejsy_mozg_maszyna.md'         },
        { id: 'affective_robotics/przyszlosc_robotyki_afektywnej',  label: 'Przyszłość robotyki afektywnej',            file: 'wiki/affective_robotics/przyszlosc_robotyki_afektywnej.md'  },
      ]
    },
    {
      section: 'Psychologia Szkolna i Edukacyjna',
      items: [
        { id: 'school_psychology/wprowadzenie',                  label: 'Psych. szkolna — wprowadzenie',            file: 'wiki/school_psychology/wprowadzenie.md'                  },
        { id: 'school_psychology/teorie_uczenia_sie',            label: 'Teorie uczenia się',                       file: 'wiki/school_psychology/teorie_uczenia_sie.md'            },
        { id: 'school_psychology/strefa_najblizszego_rozwoju',   label: 'Strefa najbliższego rozwoju (ZPD)',        file: 'wiki/school_psychology/strefa_najblizszego_rozwoju.md'   },
        { id: 'school_psychology/motywacja_szkolna',             label: 'Motywacja szkolna',                        file: 'wiki/school_psychology/motywacja_szkolna.md'             },
        { id: 'school_psychology/inteligencja_wieloraka',        label: 'Inteligencje wielorakie (Gardner)',        file: 'wiki/school_psychology/inteligencja_wieloraka.md'        },
        { id: 'school_psychology/trudnosci_w_uczeniu_sie',       label: 'Trudności w uczeniu się',                 file: 'wiki/school_psychology/trudnosci_w_uczeniu_sie.md'       },
        { id: 'school_psychology/adhd_w_szkole',                 label: 'ADHD w szkole',                            file: 'wiki/school_psychology/adhd_w_szkole.md'                 },
        { id: 'school_psychology/relacje_nauczyciel_uczen',      label: 'Relacje nauczyciel–uczeń',                file: 'wiki/school_psychology/relacje_nauczyciel_uczen.md'      },
        { id: 'school_psychology/klimat_szkolny',                label: 'Klimat szkolny',                           file: 'wiki/school_psychology/klimat_szkolny.md'                },
        { id: 'school_psychology/ocenianie_i_feedback',          label: 'Ocenianie i informacja zwrotna',           file: 'wiki/school_psychology/ocenianie_i_feedback.md'          },
        { id: 'school_psychology/stres_szkolny',                 label: 'Stres szkolny i lęk egzaminacyjny',       file: 'wiki/school_psychology/stres_szkolny.md'                 },
        { id: 'school_psychology/interwencje_szkolne',           label: 'Interwencje psychologiczne w szkole',      file: 'wiki/school_psychology/interwencje_szkolne.md'           },
      ]
    },
    {
      section: 'Neuroróżnorodność',
      items: [
        { id: 'neurodiversity/wprowadzenie',               label: 'Neuroróżnorodność — wprowadzenie',    file: 'wiki/neurodiversity/wprowadzenie.md'               },
        { id: 'neurodiversity/adhd',                       label: 'ADHD jako wariant neuroróżnorodności', file: 'wiki/neurodiversity/adhd.md'                       },
        { id: 'neurodiversity/spektrum_autyzmu',           label: 'Spektrum autyzmu (ASD)',               file: 'wiki/neurodiversity/spektrum_autyzmu.md'           },
        { id: 'neurodiversity/dysleksja',                  label: 'Dysleksja',                            file: 'wiki/neurodiversity/dysleksja.md'                  },
        { id: 'neurodiversity/dyskalkulia',                label: 'Dyskalkulia',                          file: 'wiki/neurodiversity/dyskalkulia.md'                },
        { id: 'neurodiversity/dyspraksja',                 label: 'Dyspraksja i DCD',                     file: 'wiki/neurodiversity/dyspraksja.md'                 },
        { id: 'neurodiversity/tourette',                   label: 'Zespół Tourette\'a i tiki',            file: 'wiki/neurodiversity/tourette.md'                   },
        { id: 'neurodiversity/hiperleksja',                label: 'Hiperleksja i wyjątkowe zdolności',    file: 'wiki/neurodiversity/hiperleksja.md'                },
        { id: 'neurodiversity/model_mocnych_stron',        label: 'Model mocnych stron',                  file: 'wiki/neurodiversity/model_mocnych_stron.md'        },
        { id: 'neurodiversity/wsparcie_interwencje',       label: 'Wsparcie i interwencje',               file: 'wiki/neurodiversity/wsparcie_interwencje.md'       },
        { id: 'neurodiversity/neurozroznorodnosc_w_pracy', label: 'Neuroróżnorodność w miejscu pracy',   file: 'wiki/neurodiversity/neurozroznorodnosc_w_pracy.md' },
        { id: 'neurodiversity/identyfikacja_i_diagnoza',   label: 'Identyfikacja i diagnoza',             file: 'wiki/neurodiversity/identyfikacja_i_diagnoza.md'   },
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
        { id: 'wiki-index/zdrowie',          label: 'WIKI — Psych. zdrowia',              wiki: 'zdrowie'          },
        { id: 'wiki-index/psychosomatics',   label: 'WIKI — Psychosomatyka',              wiki: 'psychosomatics'   },
        { id: 'wiki-index/niepelnosprawnosc', label: 'WIKI — Psych. niepełnosprawności',  wiki: 'niepelnosprawnosc' },
        { id: 'wiki-index/geropsychology',   label: 'WIKI — Psych. osób starszych',       wiki: 'geropsychology'   },
        { id: 'wiki-index/gry_wideo',        label: 'WIKI — Psych. gier wideo',           wiki: 'gry_wideo'        },
        { id: 'wiki-index/odpornosc_mobbing',label: 'WIKI — Odporność, mobbing, wypalenie', wiki: 'odpornosc_mobbing' },
        { id: 'wiki-index/media_natura',     label: 'WIKI — Ekrany, książki i natura',      wiki: 'media_natura'      },
        { id: 'wiki-index/psych_pozytywna',  label: 'WIKI — Psychologia pozytywna',         wiki: 'psych_pozytywna'   },
        { id: 'wiki-index/psych_ai',         label: 'WIKI — Psychologia AI',                wiki: 'psych_ai'          },
        { id: 'wiki-index/robotyka_afektywna', label: 'WIKI — Robotyka afektywna',          wiki: 'robotyka_afektywna' },
        { id: 'wiki-index/psych_szkolna',      label: 'WIKI — Psych. szkolna i edukacyjna', wiki: 'psych_szkolna'      },
        { id: 'wiki-index/neurozroznorodnosc', label: 'WIKI — Neuroróżnorodność', wiki: 'neurozroznorodnosc' },
      ]
    },
    {
      section: 'Referencje',
      items: [
        { id: 'reference/zakres',          label: 'Zakres wiedzy',                 file: 'wiki/reference/zakres.md'          },
        { id: 'reference/literatura',      label: 'Literatura',                    file: 'wiki/reference/literatura.md'      },
        { id: 'reference/przepisy_zawod',  label: 'Przepisy i zasady pracy psychologa', file: 'wiki/reference/przepisy_zawod.md'  },
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
      { file: 'wiki/neuro/cykl_miesiaczkowy.md', label: 'Neuropsychologia cyklu miesiączkowego', status: 'live' },
      { file: 'wiki/neuro/rehabilitacja_neuropsychologiczna.md', label: 'Rehabilitacja neuropsychologiczna', status: 'live' },
      { file: 'wiki/neuro/neuronauka_poznawcza.md', label: 'Neuronauka poznawcza', status: 'live' },
      { file: 'wiki/neuro/podstawy_neurologii.md', label: 'Podstawy neurologii',                 status: 'live' },
    ],
    cognitive: [
      { file: 'wiki/cognitive/pamiec.md',              label: 'Pamięć',               status: 'live' },
      { file: 'wiki/cognitive/pamiec_dlugotrwala.md', label: 'Pamięć długotrwała',   status: 'live' },
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
      { file: 'wiki/cognitive/teoria_perspektywy.md', label: 'Teoria perspektywy',    status: 'live' },
      { file: 'wiki/cognitive/efekt_ramowania.md',    label: 'Efekt ramowania',       status: 'live' },
      { file: 'wiki/cognitive/nasa_tlx.md',           label: 'NASA Task Load Index (TLX)', status: 'live' },
      { file: 'wiki/cognitive/iluzje.md',             label: 'Iluzje i błędy poznawcze',   status: 'live' },
      { file: 'wiki/cognitive/eksperyment_posnera.md', label: 'Eksperyment Posnera',         status: 'live' },
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
      { file: 'wiki/psychotherapy/trening_umiejetnosci_spolecznych.md', label: 'Trening Umiejętności Społecznych (SST)', status: 'live' },
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
      { file: 'wiki/psychopathology/depresja_poporodowa.md',       label: 'Depresja poporodowa',         status: 'live' },
      { file: 'wiki/psychopathology/przymus_powtarzania.md',       label: 'Przymus powtarzania',         status: 'live' },
      { file: 'wiki/psychopathology/wiktymizacja.md',               label: 'Wiktymizacja',                status: 'live' },
      { file: 'wiki/psychopathology/wyuczona_bezradnosc.md',        label: 'Wyuczona bezradność',         status: 'live' },
      { file: 'wiki/psychopathology/intelektualizacja.md',          label: 'Intelektualizacja emocji',    status: 'live' },
      { file: 'wiki/psychopathology/dezintegracja_pozytywna.md',    label: 'Dezintegracja pozytywna',     status: 'live' },
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
    health_psychology: [
      { file: 'wiki/health_psychology/zdrowie_wprowadzenie.md',    label: 'Psychologia zdrowia — wprowadzenie', status: 'live' },
      { file: 'wiki/health_psychology/model_biopsychospoleczny.md',label: 'Model biopsychospołeczny',           status: 'live' },
      { file: 'wiki/health_psychology/stres.md',                   label: 'Stres i zdrowie',                    status: 'live' },
      { file: 'wiki/health_psychology/radzenie_sobie.md',          label: 'Radzenie sobie ze stresem',          status: 'live' },
      { file: 'wiki/health_psychology/zachowania_zdrowotne.md',    label: 'Zachowania zdrowotne',               status: 'live' },
      { file: 'wiki/health_psychology/styl_zycia.md',              label: 'Styl życia a zdrowie',               status: 'live' },
      { file: 'wiki/health_psychology/sen_zdrowie.md',             label: 'Sen i zdrowie psychiczne',           status: 'live' },
      { file: 'wiki/health_psychology/aktywnosc_fizyczna.md',      label: 'Aktywność fizyczna a zdrowie psychiczne',       status: 'live' },
      { file: 'wiki/health_psychology/dieta_zdrowie.md',           label: 'Dieta a zdrowie psychiczne',         status: 'live' },
      { file: 'wiki/health_psychology/bol.md',                     label: 'Psychologia bólu',                   status: 'live' },
      { file: 'wiki/health_psychology/bol_chroniczny.md',          label: 'Ból przewlekły — zarządzanie',       status: 'live' },
      { file: 'wiki/health_psychology/choroby_przewlekle.md',      label: 'Psychologia chorób przewlekłych',    status: 'live' },
      { file: 'wiki/health_psychology/psychoonkologia.md',         label: 'Psychoonkologia',                    status: 'live' },
      { file: 'wiki/health_psychology/choroby_ukladu_krazenia.md', label: 'Choroby układu krążenia',            status: 'live' },
      { file: 'wiki/health_psychology/cukrzyca.md',                label: 'Psychologia cukrzycy',               status: 'live' },
      { file: 'wiki/health_psychology/jakosc_zycia.md',            label: 'Jakość życia a choroba',             status: 'live' },
      { file: 'wiki/health_psychology/promocja_zdrowia.md',        label: 'Promocja zdrowia i profilaktyka',    status: 'live' },
      { file: 'wiki/health_psychology/psychoneuroimmunologia.md',  label: 'Psychoneuroimmunologia',             status: 'live' },
      { file: 'wiki/health_psychology/placebo.md',                 label: 'Efekt placebo i nocebo',             status: 'live' },
      { file: 'wiki/health_psychology/wsparcie_spoleczne.md',      label: 'Wsparcie społeczne a zdrowie',       status: 'live' },
      { file: 'wiki/health_psychology/adherencja.md',              label: 'Adherencja terapeutyczna',           status: 'live' },
      { file: 'wiki/health_psychology/komunikacja_medyczna.md',    label: 'Komunikacja lekarz–pacjent',         status: 'live' },
      { file: 'wiki/health_psychology/interwencje_zdrowotne.md',   label: 'Interwencje psychologiczne w medycynie',         status: 'live' },
      { file: 'wiki/health_psychology/rehabilitacja.md',           label: 'Rehabilitacja psychologiczna',       status: 'live' },
      { file: 'wiki/health_psychology/wypalenie_zawodowe.md',      label: 'Wypalenie zawodowe',                 status: 'live' },
    ],
    psychosomatics: [
      { file: 'wiki/psychosomatics/wprowadzenie.md',               label: 'Psychosomatyka — wprowadzenie',      status: 'live' },
      { file: 'wiki/psychosomatics/historia.md',                   label: 'Historia psychosomatyki',            status: 'live' },
      { file: 'wiki/psychosomatics/modele_psychosomatyczne.md',    label: 'Modele psychosomatyczne',            status: 'live' },
      { file: 'wiki/psychosomatics/os_hpa.md',                     label: 'Oś HPA i mechanizmy stresu',         status: 'live' },
      { file: 'wiki/psychosomatics/aleksytymia.md',                label: 'Aleksytymia',                        status: 'live' },
      { file: 'wiki/psychosomatics/somatyzacja.md',                label: 'Somatyzacja i zaburzenia somatyczne', status: 'live' },
      { file: 'wiki/psychosomatics/bol_psychosomatyczny.md',       label: 'Ból psychosomatyczny',               status: 'live' },
      { file: 'wiki/psychosomatics/psychodermatologia.md',         label: 'Psychodermatologia',                 status: 'live' },
      { file: 'wiki/psychosomatics/psychogastroenterologia.md',    label: 'Psychogastroenterologia',            status: 'live' },
      { file: 'wiki/psychosomatics/psychokardiologia.md',          label: 'Psychokardiologia',                  status: 'live' },
      { file: 'wiki/psychosomatics/uklad_oddechowy.md',            label: 'Psychosomatyka układu oddechowego',  status: 'live' },
      { file: 'wiki/psychosomatics/choroby_autoimmunologiczne.md', label: 'Choroby autoimmunologiczne',         status: 'live' },
      { file: 'wiki/psychosomatics/diagnoza_psychosomatyczna.md',  label: 'Diagnoza psychosomatyczna',          status: 'live' },
      { file: 'wiki/psychosomatics/terapia_psychosomatyczna.md',   label: 'Terapia psychosomatyczna',           status: 'live' },
    ],
    disability_psychology: [
      { file: 'wiki/disability_psychology/wprowadzenie.md',                  label: 'Psychologia niepełnosprawności — wprow.',       status: 'planned' },
      { file: 'wiki/disability_psychology/modele_niepelnosprawnosci.md',     label: 'Modele niepełnosprawności',                     status: 'planned' },
      { file: 'wiki/disability_psychology/niepelnosprawnosc_intelektualna.md', label: 'Niepełnosprawność intelektualna',             status: 'planned' },
      { file: 'wiki/disability_psychology/niepelnosprawnosc_ruchowa.md',     label: 'Niepełnosprawność ruchowa',                     status: 'planned' },
      { file: 'wiki/disability_psychology/niepelnosprawnosc_wzrokowa.md',    label: 'Niepełnosprawność wzrokowa',                    status: 'planned' },
      { file: 'wiki/disability_psychology/niepelnosprawnosc_sluchowa.md',    label: 'Niepełnosprawność słuchowa',                    status: 'planned' },
      { file: 'wiki/disability_psychology/autyzm_niepelnosprawnosc.md',      label: 'Spektrum autyzmu i niepełnosprawność',          status: 'planned' },
      { file: 'wiki/disability_psychology/jakosc_zycia.md',                  label: 'Jakość życia osób z niepełnosprawnością',       status: 'planned' },
      { file: 'wiki/disability_psychology/stres_i_adaptacja.md',             label: 'Stres, adaptacja i radzenie sobie',             status: 'planned' },
      { file: 'wiki/disability_psychology/rodzina_i_opiekunowie.md',         label: 'Rodzina i opiekunowie',                        status: 'planned' },
      { file: 'wiki/disability_psychology/rehabilitacja_psychologiczna.md',  label: 'Rehabilitacja psychologiczna',                 status: 'planned' },
      { file: 'wiki/disability_psychology/inkluzja_spoleczna.md',            label: 'Inkluzja społeczna i prawa',                   status: 'planned' },
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
      { file: 'wiki/reference/zakres.md',         label: 'Zakres wiedzy',                      status: 'live' },
      { file: 'wiki/reference/literatura.md',     label: 'Literatura',                         status: 'live' },
      { file: 'wiki/reference/przepisy_zawod.md', label: 'Przepisy i zasady pracy psychologa', status: 'live' },
    ],
    geropsychology: [
      { file: 'wiki/geropsychology/wprowadzenie.md',               label: 'Psychologia starości — wprowadzenie',  status: 'live' },
      { file: 'wiki/geropsychology/starzenie_poznawcze.md',        label: 'Starzenie się poznawcze',              status: 'live' },
      { file: 'wiki/geropsychology/demencja.md',                   label: 'Demencja i choroby neurodegeneracyjne',status: 'live' },
      { file: 'wiki/geropsychology/depresja_starszych.md',         label: 'Depresja u osób starszych',            status: 'live' },
      { file: 'wiki/geropsychology/samotnosc.md',                  label: 'Samotność i izolacja społeczna',       status: 'live' },
      { file: 'wiki/geropsychology/jakosc_zycia_starszych.md',     label: 'Jakość życia w starości',              status: 'live' },
      { file: 'wiki/geropsychology/aktywnosc_poznawcza.md',        label: 'Aktywność poznawcza i trening umysłu', status: 'live' },
      { file: 'wiki/geropsychology/umieranie_smierc.md',           label: 'Psychologia umierania i śmierci',      status: 'live' },
      { file: 'wiki/geropsychology/relacje_spoleczne_starszych.md',label: 'Relacje społeczne i wsparcie rodziny', status: 'live' },
      { file: 'wiki/geropsychology/adaptacja_do_starosci.md',      label: 'Adaptacja do starości i rezyliencja',  status: 'live' },
      { file: 'wiki/geropsychology/interwencje_terapeutyczne.md',  label: 'Interwencje terapeutyczne',            status: 'live' },
      { file: 'wiki/geropsychology/opieka_nad_opiekunami.md',      label: 'Wypalenie i wsparcie opiekunów',       status: 'live' },
    ],
    game_psychology: [
      { file: 'wiki/game_psychology/wprowadzenie.md',         label: 'Psychologia gier wideo — wprowadzenie', status: 'live' },
      { file: 'wiki/game_psychology/uzaleznienie_od_gier.md', label: 'Uzależnienie od gier (IGD)',            status: 'live' },
      { file: 'wiki/game_psychology/agresja_a_gry.md',        label: 'Agresja a gry wideo',                  status: 'live' },
      { file: 'wiki/game_psychology/efekty_poznawcze.md',     label: 'Efekty poznawcze grania',              status: 'live' },
      { file: 'wiki/game_psychology/motywacja_gracza.md',     label: 'Motywacja gracza',                     status: 'live' },
      { file: 'wiki/game_psychology/flow_i_immersja.md',      label: 'Przepływ (flow) i immersja',           status: 'live' },
      { file: 'wiki/game_psychology/gry_spolecznosciowe.md',  label: 'Gry wieloosobowe i aspekty społeczne', status: 'live' },
      { file: 'wiki/game_psychology/esport.md',               label: 'Esport i psychologia zawodnika',       status: 'live' },
      { file: 'wiki/game_psychology/gry_a_dzieci.md',         label: 'Gry wideo a dzieci i nastolatki',      status: 'live' },
      { file: 'wiki/game_psychology/gender_w_grach.md',       label: 'Płeć i tożsamość w grach',             status: 'live' },
      { file: 'wiki/game_psychology/gry_terapeutyczne.md',    label: 'Gry w terapii i rehabilitacji',        status: 'live' },
      { file: 'wiki/game_psychology/klasyfikacja_gier.md',    label: 'Klasyfikacja gier (PEGI, ESRB)',        status: 'live' },
    ],
    resilience_mobbing: [
      { file: 'wiki/resilience_mobbing/odpornosc_wprowadzenie.md',  label: 'Odporność psychiczna — wprowadzenie',      status: 'live' },
      { file: 'wiki/resilience_mobbing/modele_odpornosci.md',       label: 'Modele i teorie odporności',               status: 'live' },
      { file: 'wiki/resilience_mobbing/budowanie_odpornosci.md',    label: 'Budowanie odporności psychicznej',         status: 'live' },
      { file: 'wiki/resilience_mobbing/przemoc_psychiczna.md',      label: 'Przemoc psychiczna — definicja i formy',   status: 'live' },
      { file: 'wiki/resilience_mobbing/mobbing_definicja.md',       label: 'Mobbing — definicja, rodzaje i fazy',      status: 'live' },
      { file: 'wiki/resilience_mobbing/mobbing_skutki.md',          label: 'Skutki psychologiczne mobbingu',           status: 'live' },
      { file: 'wiki/resilience_mobbing/mobbing_interwencja.md',     label: 'Interwencja i zapobieganie mobbingowi',    status: 'live' },
      { file: 'wiki/resilience_mobbing/wypalenie_zawodowe.md',      label: 'Wypalenie zawodowe — definicja i modele',  status: 'live' },
      { file: 'wiki/resilience_mobbing/fazy_wypalenia.md',          label: 'Fazy i wymiary wypalenia zawodowego',      status: 'live' },
      { file: 'wiki/resilience_mobbing/wypalenie_zawody.md',        label: 'Wypalenie w wybranych zawodach',           status: 'live' },
      { file: 'wiki/resilience_mobbing/profilaktyka_wypalenia.md',  label: 'Profilaktyka wypalenia zawodowego',        status: 'live' },
      { file: 'wiki/resilience_mobbing/wsparcie_psychologiczne.md', label: 'Wsparcie psychologiczne ofiar',            status: 'live' },
    ],

    media_nature: [
      { file: 'wiki/media_nature/wprowadzenie.md',             label: 'Ekrany, książki i natura — wprowadzenie',    status: 'live' },
      { file: 'wiki/media_nature/ekrany_funkcje_poznawcze.md', label: 'Ekrany a funkcje poznawcze',                 status: 'live' },
      { file: 'wiki/media_nature/smartfony_psychologia.md',    label: 'Smartfony a psychologia',                    status: 'live' },
      { file: 'wiki/media_nature/tablety_dzieci.md',           label: 'Tablety a rozwój poznawczy dzieci',          status: 'live' },
      { file: 'wiki/media_nature/telewizja_psychologia.md',    label: 'Telewizja a funkcje psychiczne',             status: 'live' },
      { file: 'wiki/media_nature/czas_ekranowy.md',            label: 'Czas ekranowy a zdrowie psychiczne',         status: 'live' },
      { file: 'wiki/media_nature/czytanie_ksiazek.md',         label: 'Czytanie książek a funkcje psychiczne',      status: 'live' },
      { file: 'wiki/media_nature/gleboke_czytanie.md',         label: 'Głębokie czytanie',                          status: 'live' },
      { file: 'wiki/media_nature/czytanie_fikcja_empatia.md',  label: 'Czytanie fikcji a empatia i ToM',            status: 'live' },
      { file: 'wiki/media_nature/natura_psychologia.md',       label: 'Natura a psychologia',                       status: 'live' },
      { file: 'wiki/media_nature/las_shinrin_yoku.md',         label: 'Kąpiel leśna — shinrin-yoku',                status: 'live' },
      { file: 'wiki/media_nature/gory_psychologia.md',         label: 'Góry i wędrówki górskie a psychologia',      status: 'live' },
    ],

    positive_psychology: [
      { file: 'wiki/positive_psychology/wprowadzenie.md',           label: 'Psychologia pozytywna — wprowadzenie',    status: 'live' },
      { file: 'wiki/positive_psychology/model_perma.md',            label: 'Model PERMA',                            status: 'live' },
      { file: 'wiki/positive_psychology/szczescie_dobrostan.md',    label: 'Szczęście i dobrostan psychiczny',       status: 'live' },
      { file: 'wiki/positive_psychology/optymizm_nadzieja.md',      label: 'Optymizm i nadzieja',                    status: 'live' },
      { file: 'wiki/positive_psychology/przeplyw_flow.md',          label: 'Przepływ (flow)',                        status: 'live' },
      { file: 'wiki/positive_psychology/sily_charakteru.md',        label: 'Siły charakteru (VIA)',                  status: 'live' },
      { file: 'wiki/positive_psychology/wdziecznosc.md',            label: 'Wdzięczność',                            status: 'live' },
      { file: 'wiki/positive_psychology/mindfulness.md',            label: 'Mindfulness i uważność',                 status: 'live' },
      { file: 'wiki/positive_psychology/wspolczucie_dla_siebie.md', label: 'Współczucie dla siebie',                 status: 'live' },
      { file: 'wiki/positive_psychology/sens_i_cel.md',             label: 'Sens życia i poczucie celu',             status: 'live' },
      { file: 'wiki/positive_psychology/relacje_pozytywne.md',      label: 'Pozytywne relacje i miłość',             status: 'live' },
      { file: 'wiki/positive_psychology/interwencje_pozytywne.md',  label: 'Interwencje psychologii pozytywnej',     status: 'live' },
    ],
    ai_psychology: [
      { file: 'wiki/ai_psychology/wprowadzenie.md',          label: 'Psychologia AI — wprowadzenie',             status: 'live' },
      { file: 'wiki/ai_psychology/historia_ai.md',           label: 'Historia AI i psychologia',                 status: 'live' },
      { file: 'wiki/ai_psychology/czlowiek_a_ai.md',         label: 'Interakcja człowiek-AI',                    status: 'live' },
      { file: 'wiki/ai_psychology/zaufanie_do_ai.md',        label: 'Zaufanie do sztucznej inteligencji',        status: 'live' },
      { file: 'wiki/ai_psychology/uprzedzenia_ai.md',        label: 'Uprzedzenia i błędy poznawcze w AI',        status: 'live' },
      { file: 'wiki/ai_psychology/etyka_ai.md',              label: 'Etyka AI z perspektywy psychologicznej',    status: 'live' },
      { file: 'wiki/ai_psychology/ai_emocje.md',             label: 'AI a emocje i rozumienie emocji',           status: 'live' },
      { file: 'wiki/ai_psychology/decyzje_ai.md',            label: 'AI a podejmowanie decyzji',                 status: 'live' },
      { file: 'wiki/ai_psychology/ai_w_terapii.md',          label: 'AI w psychoterapii i diagnostyce',          status: 'live' },
      { file: 'wiki/ai_psychology/ai_poznawcze.md',          label: 'Poznawcze aspekty działania AI',            status: 'live' },
      { file: 'wiki/ai_psychology/antropomorfizacja_ai.md',  label: 'Antropomorfizacja AI',                      status: 'live' },
      { file: 'wiki/ai_psychology/przyszlosc_ai.md',         label: 'Przyszłość relacji człowiek-AI',            status: 'live' },
    ],
    affective_robotics: [
      { file: 'wiki/affective_robotics/wprowadzenie.md',                    label: 'Robotyka afektywna — wprowadzenie',         status: 'live' },
      { file: 'wiki/affective_robotics/historia_robotyki_afektywnej.md',    label: 'Historia robotyki afektywnej',              status: 'live' },
      { file: 'wiki/affective_robotics/emocje_robotow.md',                  label: 'Emocje w robotach',                         status: 'live' },
      { file: 'wiki/affective_robotics/dolina_niesamowitosci.md',           label: 'Dolina niesamowitości',                     status: 'live' },
      { file: 'wiki/affective_robotics/roboty_spoleczne.md',                label: 'Roboty społeczne i HRI',                    status: 'live' },
      { file: 'wiki/affective_robotics/kognitywistyka_obliczeniowa.md',     label: 'Kognitywistyka obliczeniowa',               status: 'live' },
      { file: 'wiki/affective_robotics/percepcja_robotow.md',               label: 'Percepcja i ocena robotów przez ludzi',     status: 'live' },
      { file: 'wiki/affective_robotics/roboty_w_opiece.md',                 label: 'Roboty w opiece i terapii',                 status: 'live' },
      { file: 'wiki/affective_robotics/swiadomosc_maszyn.md',               label: 'Świadomość i podmiotowość maszyn',          status: 'live' },
      { file: 'wiki/affective_robotics/wspolpraca_czlowiek_robot.md',       label: 'Współpraca człowiek–robot (HRC)',            status: 'live' },
      { file: 'wiki/affective_robotics/interfejsy_mozg_maszyna.md',         label: 'Interfejsy mózg–maszyna (BCI)',              status: 'live' },
      { file: 'wiki/affective_robotics/przyszlosc_robotyki_afektywnej.md',  label: 'Przyszłość robotyki afektywnej',            status: 'live' },
    ],
    school_psychology: [
      { file: 'wiki/school_psychology/wprowadzenie.md',                 label: 'Psychologia szkolna — wprowadzenie',        status: 'live' },
      { file: 'wiki/school_psychology/teorie_uczenia_sie.md',           label: 'Teorie uczenia się',                        status: 'live' },
      { file: 'wiki/school_psychology/strefa_najblizszego_rozwoju.md',  label: 'Strefa najbliższego rozwoju (ZPD)',         status: 'live' },
      { file: 'wiki/school_psychology/motywacja_szkolna.md',            label: 'Motywacja szkolna',                         status: 'live' },
      { file: 'wiki/school_psychology/inteligencja_wieloraka.md',       label: 'Inteligencje wielorakie (Gardner)',         status: 'live' },
      { file: 'wiki/school_psychology/trudnosci_w_uczeniu_sie.md',      label: 'Trudności w uczeniu się',                  status: 'live' },
      { file: 'wiki/school_psychology/adhd_w_szkole.md',                label: 'ADHD w środowisku szkolnym',               status: 'live' },
      { file: 'wiki/school_psychology/relacje_nauczyciel_uczen.md',     label: 'Relacje nauczyciel–uczeń',                 status: 'live' },
      { file: 'wiki/school_psychology/klimat_szkolny.md',               label: 'Klimat szkolny',                            status: 'live' },
      { file: 'wiki/school_psychology/ocenianie_i_feedback.md',         label: 'Ocenianie i informacja zwrotna',            status: 'live' },
      { file: 'wiki/school_psychology/stres_szkolny.md',                label: 'Stres szkolny i lęk egzaminacyjny',        status: 'live' },
      { file: 'wiki/school_psychology/interwencje_szkolne.md',          label: 'Interwencje psychologiczne w szkole',       status: 'live' },
    ],
    neurodiversity: [
      { file: 'wiki/neurodiversity/wprowadzenie.md',               label: 'Neuroróżnorodność — wprowadzenie',    status: 'live' },
      { file: 'wiki/neurodiversity/adhd.md',                       label: 'ADHD jako wariant neuroróżnorodności', status: 'live' },
      { file: 'wiki/neurodiversity/spektrum_autyzmu.md',           label: 'Spektrum autyzmu (ASD)',               status: 'live' },
      { file: 'wiki/neurodiversity/dysleksja.md',                  label: 'Dysleksja',                            status: 'live' },
      { file: 'wiki/neurodiversity/dyskalkulia.md',                label: 'Dyskalkulia',                          status: 'live' },
      { file: 'wiki/neurodiversity/dyspraksja.md',                 label: 'Dyspraksja i DCD',                     status: 'live' },
      { file: 'wiki/neurodiversity/tourette.md',                   label: 'Zespół Tourette\'a i tiki',            status: 'live' },
      { file: 'wiki/neurodiversity/hiperleksja.md',                label: 'Hiperleksja i wyjątkowe zdolności',    status: 'live' },
      { file: 'wiki/neurodiversity/model_mocnych_stron.md',        label: 'Model mocnych stron',                  status: 'live' },
      { file: 'wiki/neurodiversity/wsparcie_interwencje.md',       label: 'Wsparcie i interwencje',               status: 'live' },
      { file: 'wiki/neurodiversity/neurozroznorodnosc_w_pracy.md', label: 'Neuroróżnorodność w miejscu pracy',   status: 'live' },
      { file: 'wiki/neurodiversity/identyfikacja_i_diagnoza.md',   label: 'Identyfikacja i diagnoza',             status: 'live' },
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
            { label: 'Neuropsychologia cyklu miesiączkowego', id: 'neuro/cykl_miesiaczkowy', status: 'live', desc: 'Wpływ estradiolu i progesteronu na poznanie, nastrój i mózg.' },
            { label: 'Neuronauka poznawcza', id: 'neuro/neuronauka_poznawcza', status: 'live', desc: 'Biologiczne mechanizmy procesów poznawczych — percepcja, pamięć, uwaga, świadomość.' },
            { label: 'Podstawy neurologii', id: 'neuro/podstawy_neurologii', status: 'live', desc: 'Organizacja OUN/PNS, neurony, glej, drogi nerwowe, badanie neurologiczne.' },
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
          title: 'Rehabilitacja neuropsychologiczna',
          articles: [
            { label: 'Rehabilitacja neuropsychologiczna', id: 'neuro/rehabilitacja_neuropsychologiczna', status: 'live', desc: 'Metody, modele i praktyka rehabilitacji po uszkodzeniach mózgu.' },
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
            { label: 'Depresja poporodowa', id: 'psychopathology/depresja_poporodowa', status: 'live' },
            { label: 'Przymus powtarzania', id: 'psychopathology/przymus_powtarzania', status: 'live' },
            { label: 'Wiktymizacja', id: 'psychopathology/wiktymizacja', status: 'live' },
            { label: 'Wyuczona bezradność', id: 'psychopathology/wyuczona_bezradnosc', status: 'live' },
            { label: 'Intelektualizacja emocji', id: 'psychopathology/intelektualizacja', status: 'live' },
            { label: 'Dezintegracja pozytywna', id: 'psychopathology/dezintegracja_pozytywna', status: 'live' },
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
            { label: 'Trening Umiejętności Społecznych (SST)', id: 'psychotherapy/trening_umiejetnosci_spolecznych', status: 'live' },
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
            { label: 'Pamięć długotrwała', id: 'cognitive/pamiec_dlugotrwala', status: 'live' },
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
            { label: 'Teoria perspektywy', id: 'cognitive/teoria_perspektywy', status: 'live' },
            { label: 'Efekt ramowania', id: 'cognitive/efekt_ramowania', status: 'live' },
            { label: 'NASA Task Load Index (TLX)', id: 'cognitive/nasa_tlx', status: 'live' },
            { label: 'Świadomość i metapoznanie', id: 'cognitive/swiadomosc', status: 'live' },
            { label: 'Uczenie się', id: 'cognitive/uczenie', status: 'live' },
            { label: 'Wyobraźnia i reprezentacje', id: 'cognitive/wyobraznia', status: 'live' },
            { label: 'Zmęczenie poznawcze', id: 'cognitive/zmeczenie_poznawcze', status: 'live' },
            { label: 'Iluzje i błędy poznawcze', id: 'cognitive/iluzje', status: 'live' },
            { label: 'Eksperyment Posnera', id: 'cognitive/eksperyment_posnera', status: 'live' },
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
            { label: 'Przepisy i zasady pracy psychologa w Polsce i NFZ', id: 'reference/przepisy_zawod', status: 'live' },
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
            { term: 'Agnozja',         def: 'Niemożność rozpoznawania obiektów przy zachowanych zmysłach i inteligencji.', link: 'disorders/agnozja' },
            { term: 'Amnezja',         def: 'Zaburzenie pamięci — anterogradna (nowe wspomnienia) lub retrogradna (dawne wspomnienia).', link: 'disorders/amnezje' },
            { term: 'Apraksja',        def: 'Zaburzenie wykonywania celowych ruchów przy zachowanej sprawności motorycznej i rozumieniu polecenia.', link: 'disorders/apraksja' },
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
            { term: 'IRT',             def: 'Item Response Theory — rodzina modeli psychometrycznych opisujących prawdopodobieństwo odpowiedzi w zależności od trudności i zdolności.', link: 'psychometrics/irt' },
            { term: 'Lateralizacja',   def: 'Asymetryczna lokalizacja funkcji — język zazwyczaj w lewej półkuli, uwaga przestrzenna w prawej.', link: 'neuro/lateralizacja' },
            { term: 'LTD',             def: 'Long-Term Depression — długotrwałe osłabienie synapsy przy niskiej aktywności. Mechanizm zapominania.' },
            { term: 'LTP',             def: 'Long-Term Potentiation — trwałe wzmocnienie synapsy po wysokiej aktywności. Podstawa uczenia się w hipokampie.', link: 'neuro/neuron' },
            { term: 'MoCA',            def: 'Montreal Cognitive Assessment — test przesiewowy zaburzeń poznawczych, bardziej czuły niż MMSE na łagodne deficyty.', link: 'diagnostics/mmse_moca' },
            { term: 'Neglect',         def: 'Zaburzenie uwagi przestrzennej — nieświadome pomijanie jednej strony przestrzeni po uszkodzeniu prawej półkuli.', link: 'disorders/neglect' },
            { term: 'Neuroplastyczność', def: 'Zdolność mózgu do zmiany struktury i funkcji — od poziomu synaptycznego (LTP/LTD) po reorganizację kortykalna.', link: 'neuro/plastycznosc' },
            { term: 'NSSI',            def: 'Non-Suicidal Self-Injury — samookaleczenie bez intencji śmierci, często pełniące funkcję regulacji emocji.', link: 'suicidology/nssi' },
            { term: 'Pola Brodmanna',  def: '52 obszary kory mózgowej wyznaczone przez Brodmanna (1909) na podstawie cytoarchitektoniki.', link: 'neuro/anatomia' },
            { term: 'Prozopagnozja',   def: 'Specyficzny deficyt rozpoznawania twarzy — związany z uszkodzeniem FFA w zakręcie wrzecionowatym.', link: 'disorders/agnozja' },
            { term: 'Psychometria',    def: 'Dział metodologii zajmujący się teorią i techniką pomiaru psychologicznego — rzetelność, trafność, normalizacja.', link: 'psychometrics/psychometria_wprowadzenie' },
            { term: 'Pęczek łukowaty', def: 'Szlak istoty białej łączący obszar Wernickego z Broki. Uszkodzenie → afazja przewodzenia.', link: 'disorders/afazje' },
            { term: 'Rzetelność',      def: 'Stopień, w jakim wyniki testu są stabilne i wolne od błędu pomiarowego (alfa Cronbacha, test-retest).', link: 'psychometrics/rzetelnosc' },
            { term: 'TBI',             def: 'Traumatic Brain Injury — uraz mózgu od łagodnego wstrząśnienia po ciężki uraz z długoterminowymi konsekwencjami.', link: 'disorders/tbi' },
            { term: 'Trafność',        def: 'Stopień, w jakim test mierzy to, co ma mierzyć — treściowa, kryterialna, zbieżna, czynnikowa.', link: 'psychometrics/trafnosc' },
            { term: 'Wzgórze',         def: '"Brama świadomości" — przekaźnik zmysłów do kory, regulacja czujności. Uszkodzenie → amnezja wzgórzowa.', link: 'neuro/anatomia' },
          ]
        }
      ]
    },

    zdrowie: {
      title: 'WIKI — Psychologia zdrowia',
      intro: 'Psychologiczne aspekty zdrowia i choroby — stres, zachowania zdrowotne, ból, choroby przewlekłe, promocja zdrowia, psychoneuroimmunologia i rehabilitacja.',
      sections: [
        {
          title: 'Podstawy',
          articles: [
            { label: 'Psychologia zdrowia — wprowadzenie', id: 'health_psychology/zdrowie_wprowadzenie',    status: 'live' },
            { label: 'Model biopsychospołeczny',            id: 'health_psychology/model_biopsychospoleczny', status: 'live' },
          ]
        },
        {
          title: 'Stres i radzenie sobie',
          articles: [
            { label: 'Stres i zdrowie',              id: 'health_psychology/stres',               status: 'live' },
            { label: 'Radzenie sobie ze stresem',    id: 'health_psychology/radzenie_sobie',      status: 'live' },
            { label: 'Wsparcie społeczne a zdrowie', id: 'health_psychology/wsparcie_spoleczne',  status: 'live' },
          ]
        },
        {
          title: 'Zachowania i styl życia',
          articles: [
            { label: 'Zachowania zdrowotne',           id: 'health_psychology/zachowania_zdrowotne', status: 'live' },
            { label: 'Styl życia a zdrowie',           id: 'health_psychology/styl_zycia',           status: 'live' },
            { label: 'Sen i zdrowie psychiczne',       id: 'health_psychology/sen_zdrowie',          status: 'live' },
            { label: 'Aktywność fizyczna a zdrowie psychiczne',   id: 'health_psychology/aktywnosc_fizyczna',   status: 'live' },
            { label: 'Dieta a zdrowie psychiczne',     id: 'health_psychology/dieta_zdrowie',        status: 'live' },
            { label: 'Promocja zdrowia i profilaktyka', id: 'health_psychology/promocja_zdrowia',    status: 'live' },
          ]
        },
        {
          title: 'Ból i choroby przewlekłe',
          articles: [
            { label: 'Psychologia bólu',                 id: 'health_psychology/bol',                    status: 'live' },
            { label: 'Ból przewlekły — zarządzanie',     id: 'health_psychology/bol_chroniczny',         status: 'live' },
            { label: 'Psychologia chorób przewlekłych',  id: 'health_psychology/choroby_przewlekle',     status: 'live' },
            { label: 'Psychoonkologia',                  id: 'health_psychology/psychoonkologia',        status: 'live' },
            { label: 'Choroby układu krążenia',          id: 'health_psychology/choroby_ukladu_krazenia', status: 'live' },
            { label: 'Psychologia cukrzycy',             id: 'health_psychology/cukrzyca',               status: 'live' },
            { label: 'Jakość życia a choroba',           id: 'health_psychology/jakosc_zycia',           status: 'live' },
          ]
        },
        {
          title: 'Mechanizmy biologiczne',
          articles: [
            { label: 'Psychoneuroimmunologia', id: 'health_psychology/psychoneuroimmunologia', status: 'live' },
            { label: 'Efekt placebo i nocebo', id: 'health_psychology/placebo',                status: 'live' },
          ]
        },
        {
          title: 'Praktyka kliniczna',
          articles: [
            { label: 'Adherencja terapeutyczna',      id: 'health_psychology/adherencja',            status: 'live' },
            { label: 'Komunikacja lekarz–pacjent',    id: 'health_psychology/komunikacja_medyczna',  status: 'live' },
            { label: 'Interwencje psychologiczne w medycynie',    id: 'health_psychology/interwencje_zdrowotne', status: 'live' },
            { label: 'Rehabilitacja psychologiczna',  id: 'health_psychology/rehabilitacja',         status: 'live' },
            { label: 'Wypalenie zawodowe',            id: 'health_psychology/wypalenie_zawodowe',    status: 'live' },
          ]
        },
      ]
    },

    psychosomatics: {
      title: 'WIKI — Psychosomatyka',
      intro: 'Psychosomatyka bada wzajemne relacje między procesami psychicznymi a ciałem — od osi HPA i aleksytymii po psychodermatologię, psychokardiologię i terapię psychosomatyczną.',
      sections: [
        {
          title: 'Podstawy i historia',
          articles: [
            { label: 'Psychosomatyka — wprowadzenie',  id: 'psychosomatics/wprowadzenie',            status: 'live' },
            { label: 'Historia psychosomatyki',         id: 'psychosomatics/historia',                status: 'live' },
            { label: 'Modele psychosomatyczne',         id: 'psychosomatics/modele_psychosomatyczne', status: 'live' },
          ]
        },
        {
          title: 'Mechanizmy biologiczne',
          articles: [
            { label: 'Oś HPA i mechanizmy stresu',      id: 'psychosomatics/os_hpa',                  status: 'live' },
            { label: 'Aleksytymia',                     id: 'psychosomatics/aleksytymia',             status: 'live' },
          ]
        },
        {
          title: 'Zaburzenia i somatyzacja',
          articles: [
            { label: 'Somatyzacja i zaburzenia somatyczne', id: 'psychosomatics/somatyzacja',         status: 'live' },
            { label: 'Ból psychosomatyczny',            id: 'psychosomatics/bol_psychosomatyczny',    status: 'live' },
          ]
        },
        {
          title: 'Układy narządowe',
          articles: [
            { label: 'Psychodermatologia',              id: 'psychosomatics/psychodermatologia',      status: 'live' },
            { label: 'Psychogastroenterologia',         id: 'psychosomatics/psychogastroenterologia', status: 'live' },
            { label: 'Psychokardiologia',               id: 'psychosomatics/psychokardiologia',       status: 'live' },
            { label: 'Psychosomatyka układu oddechowego', id: 'psychosomatics/uklad_oddechowy',       status: 'live' },
            { label: 'Choroby autoimmunologiczne',      id: 'psychosomatics/choroby_autoimmunologiczne', status: 'live' },
          ]
        },
        {
          title: 'Praktyka kliniczna',
          articles: [
            { label: 'Diagnoza psychosomatyczna',       id: 'psychosomatics/diagnoza_psychosomatyczna', status: 'live' },
            { label: 'Terapia psychosomatyczna',        id: 'psychosomatics/terapia_psychosomatyczna',  status: 'live' },
          ]
        },
      ]
    },

    niepelnosprawnosc: {
      title: 'WIKI — Psychologia osób z niepełnosprawnością',
      intro: 'Psychologiczne aspekty życia z niepełnosprawnością — od modeli i klasyfikacji przez specyfikę poszczególnych rodzajów niepełnosprawności po rehabilitację, jakość życia i inkluzję społeczną.',
      sections: [
        {
          title: 'Podstawy',
          articles: [
            { label: 'Psychologia niepełnosprawności — wprowadzenie', id: null, status: 'planned', desc: 'Definicje, zakres dyscypliny, historia podejść do niepełnosprawności.' },
            { label: 'Modele niepełnosprawności',                     id: null, status: 'planned', desc: 'Model medyczny, społeczny, biopsychospołeczny i ICF (WHO).' },
          ]
        },
        {
          title: 'Rodzaje niepełnosprawności',
          articles: [
            { label: 'Niepełnosprawność intelektualna',  id: null, status: 'planned', desc: 'Klasyfikacja, diagnoza (IQ, adaptacja), wsparcie i terapia.' },
            { label: 'Niepełnosprawność ruchowa',        id: null, status: 'planned', desc: 'Psychologiczne konsekwencje ograniczeń motorycznych i bólu przewlekłego.' },
            { label: 'Niepełnosprawność wzrokowa',       id: null, status: 'planned', desc: 'Specyfika funkcjonowania poznawczego i społecznego przy dysfunkcjach wzroku.' },
            { label: 'Niepełnosprawność słuchowa',       id: null, status: 'planned', desc: 'Tożsamość głuchych, komunikacja, wsparcie psychologiczne.' },
            { label: 'Spektrum autyzmu i niepełnosprawność', id: null, status: 'planned', desc: 'ASD w kontekście niepełnosprawności — neurodywersja i wsparcie.' },
          ]
        },
        {
          title: 'Funkcjonowanie psychiczne',
          articles: [
            { label: 'Jakość życia osób z niepełnosprawnością', id: null, status: 'planned', desc: 'Pomiar jakości życia, czynniki ochronne i ryzyka, dobrostan.' },
            { label: 'Stres, adaptacja i radzenie sobie',        id: null, status: 'planned', desc: 'Modele stresu i kryzysu po nabytej niepełnosprawności, resilience.' },
          ]
        },
        {
          title: 'Środowisko i wsparcie',
          articles: [
            { label: 'Rodzina i opiekunowie',              id: null, status: 'planned', desc: 'Obciążenie opiekunów, interwencje wspierające rodzinę, rodzeństwo.' },
            { label: 'Rehabilitacja psychologiczna',       id: null, status: 'planned', desc: 'Modele i metody rehabilitacji — od biopsychospołecznej po środowiskową.' },
            { label: 'Inkluzja społeczna i prawa',         id: null, status: 'planned', desc: 'Konwencja ONZ o prawach osób z niepełnosprawnościami, antydyskryminacja, dostępność.' },
          ]
        },
      ]
    },

    geropsychology: {
      title: 'WIKI — Psychologia osób w podeszłym wieku',
      intro: 'Psychologia osób w podeszłym wieku bada procesy starzenia się, zdrowie psychiczne, funkcjonowanie poznawcze i społeczne seniorów — od demencji i depresji po adaptację do starości i wsparcie opiekunów.',
      sections: [
        {
          title: 'Podstawy i wprowadzenie',
          articles: [
            { label: 'Psychologia starości — wprowadzenie',   id: 'geropsychology/wprowadzenie',           status: 'live' },
            { label: 'Starzenie się poznawcze',               id: 'geropsychology/starzenie_poznawcze',    status: 'live' },
          ]
        },
        {
          title: 'Zaburzenia i choroby',
          articles: [
            { label: 'Demencja i choroby neurodegeneracyjne', id: 'geropsychology/demencja',               status: 'live' },
            { label: 'Depresja u osób starszych',             id: 'geropsychology/depresja_starszych',     status: 'live' },
          ]
        },
        {
          title: 'Funkcjonowanie społeczne i jakość życia',
          articles: [
            { label: 'Samotność i izolacja społeczna',        id: 'geropsychology/samotnosc',              status: 'live' },
            { label: 'Jakość życia w starości',               id: 'geropsychology/jakosc_zycia_starszych', status: 'live' },
            { label: 'Relacje społeczne i wsparcie rodziny',  id: 'geropsychology/relacje_spoleczne_starszych', status: 'live' },
          ]
        },
        {
          title: 'Aktywność i adaptacja',
          articles: [
            { label: 'Aktywność poznawcza i trening umysłu',  id: 'geropsychology/aktywnosc_poznawcza',    status: 'live' },
            { label: 'Adaptacja do starości i rezyliencja',   id: 'geropsychology/adaptacja_do_starosci',  status: 'live' },
          ]
        },
        {
          title: 'Interwencje i opieka',
          articles: [
            { label: 'Interwencje terapeutyczne',             id: 'geropsychology/interwencje_terapeutyczne', status: 'live' },
            { label: 'Psychologia umierania i śmierci',       id: 'geropsychology/umieranie_smierc',       status: 'live' },
            { label: 'Wypalenie i wsparcie opiekunów',        id: 'geropsychology/opieka_nad_opiekunami',  status: 'live' },
          ]
        },
      ]
    },

    gry_wideo: {
      title: 'WIKI — Psychologia gier wideo',
      intro: 'Psychologia gier wideo bada wpływ gier komputerowych i elektronicznych na procesy poznawcze, emocjonalne i społeczne — od uzależnień i agresji przez motywację i flow po zastosowania terapeutyczne.',
      sections: [
        {
          title: 'Podstawy i wprowadzenie',
          articles: [
            { label: 'Psychologia gier wideo — wprowadzenie', id: 'game_psychology/wprowadzenie',         status: 'live' },
            { label: 'Klasyfikacja gier (PEGI, ESRB)',         id: 'game_psychology/klasyfikacja_gier',    status: 'live' },
          ]
        },
        {
          title: 'Efekty psychologiczne grania',
          articles: [
            { label: 'Agresja a gry wideo',            id: 'game_psychology/agresja_a_gry',       status: 'live' },
            { label: 'Efekty poznawcze grania',         id: 'game_psychology/efekty_poznawcze',    status: 'live' },
            { label: 'Przepływ (flow) i immersja',      id: 'game_psychology/flow_i_immersja',     status: 'live' },
          ]
        },
        {
          title: 'Motywacja i zachowanie gracza',
          articles: [
            { label: 'Motywacja gracza',                    id: 'game_psychology/motywacja_gracza',      status: 'live' },
            { label: 'Uzależnienie od gier (IGD)',           id: 'game_psychology/uzaleznienie_od_gier',  status: 'live' },
            { label: 'Płeć i tożsamość w grach',            id: 'game_psychology/gender_w_grach',        status: 'live' },
          ]
        },
        {
          title: 'Kontekst społeczny i wiekowy',
          articles: [
            { label: 'Gry wieloosobowe i aspekty społeczne', id: 'game_psychology/gry_spolecznosciowe',  status: 'live' },
            { label: 'Esport i psychologia zawodnika',        id: 'game_psychology/esport',               status: 'live' },
            { label: 'Gry wideo a dzieci i nastolatki',       id: 'game_psychology/gry_a_dzieci',         status: 'live' },
          ]
        },
        {
          title: 'Zastosowania terapeutyczne',
          articles: [
            { label: 'Gry w terapii i rehabilitacji', id: 'game_psychology/gry_terapeutyczne', status: 'live' },
          ]
        },
      ]
    },

    odpornosc_mobbing: {
      title: 'WIKI — Odporność psychiczna, mobbing i wypalenie zawodowe',
      intro: 'Encyklopedia obejmuje trzy powiązane obszary: odporność psychiczną (resilience) jako zasób chroniący, psychologiczne aspekty przemocy psychicznej i mobbingu w miejscu pracy oraz wypalenie zawodowe — mechanizmy, skutki i profilaktykę.',
      sections: [
        {
          title: 'Odporność psychiczna',
          articles: [
            { label: 'Odporność psychiczna — wprowadzenie',  id: 'resilience_mobbing/odpornosc_wprowadzenie', status: 'live' },
            { label: 'Modele i teorie odporności',            id: 'resilience_mobbing/modele_odpornosci',      status: 'live' },
            { label: 'Budowanie odporności psychicznej',      id: 'resilience_mobbing/budowanie_odpornosci',   status: 'live' },
          ]
        },
        {
          title: 'Przemoc psychiczna i mobbing',
          articles: [
            { label: 'Przemoc psychiczna — definicja i formy',   id: 'resilience_mobbing/przemoc_psychiczna',    status: 'live' },
            { label: 'Mobbing — definicja, rodzaje i fazy',      id: 'resilience_mobbing/mobbing_definicja',     status: 'live' },
            { label: 'Skutki psychologiczne mobbingu',           id: 'resilience_mobbing/mobbing_skutki',        status: 'live' },
            { label: 'Interwencja i zapobieganie mobbingowi',    id: 'resilience_mobbing/mobbing_interwencja',   status: 'live' },
            { label: 'Wsparcie psychologiczne ofiar',            id: 'resilience_mobbing/wsparcie_psychologiczne', status: 'live' },
          ]
        },
        {
          title: 'Wypalenie zawodowe',
          articles: [
            { label: 'Wypalenie zawodowe — definicja i modele',  id: 'resilience_mobbing/wypalenie_zawodowe',    status: 'live' },
            { label: 'Fazy i wymiary wypalenia zawodowego',      id: 'resilience_mobbing/fazy_wypalenia',        status: 'live' },
            { label: 'Wypalenie w wybranych zawodach',           id: 'resilience_mobbing/wypalenie_zawody',      status: 'live' },
            { label: 'Profilaktyka wypalenia zawodowego',        id: 'resilience_mobbing/profilaktyka_wypalenia', status: 'live' },
          ]
        },
      ]
    },

    media_natura: {
      title: 'WIKI — Ekrany, książki i natura',
      intro: 'Encyklopedia obejmuje trzy powiązane obszary: wpływ ekranów (telefony, tablety, telewizja) na funkcje poznawcze i zdrowie psychiczne, psychologiczne efekty czytania książek oraz dobroczynne działanie kontaktu z naturą — od kąpieli leśnych po wędrówki górskie.',
      sections: [
        {
          title: 'Ekrany i technologia',
          articles: [
            { label: 'Ekrany, książki i natura — wprowadzenie',  id: 'media_nature/wprowadzenie',             status: 'live' },
            { label: 'Ekrany a funkcje poznawcze',               id: 'media_nature/ekrany_funkcje_poznawcze', status: 'live' },
            { label: 'Smartfony a psychologia',                  id: 'media_nature/smartfony_psychologia',    status: 'live' },
            { label: 'Tablety a rozwój poznawczy dzieci',        id: 'media_nature/tablety_dzieci',           status: 'live' },
            { label: 'Telewizja a funkcje psychiczne',           id: 'media_nature/telewizja_psychologia',    status: 'live' },
            { label: 'Czas ekranowy a zdrowie psychiczne',       id: 'media_nature/czas_ekranowy',            status: 'live' },
          ]
        },
        {
          title: 'Czytanie książek',
          articles: [
            { label: 'Czytanie książek a funkcje psychiczne',    id: 'media_nature/czytanie_ksiazek',         status: 'live' },
            { label: 'Głębokie czytanie',                        id: 'media_nature/gleboke_czytanie',         status: 'live' },
            { label: 'Czytanie fikcji a empatia i ToM',          id: 'media_nature/czytanie_fikcja_empatia',  status: 'live' },
          ]
        },
        {
          title: 'Natura i środowisko',
          articles: [
            { label: 'Natura a psychologia',                     id: 'media_nature/natura_psychologia',       status: 'live' },
            { label: 'Kąpiel leśna — shinrin-yoku',              id: 'media_nature/las_shinrin_yoku',         status: 'live' },
            { label: 'Góry i wędrówki górskie a psychologia',    id: 'media_nature/gory_psychologia',         status: 'live' },
          ]
        },
      ]
    },

    psych_pozytywna: {
      title: 'WIKI — Psychologia pozytywna',
      intro: 'Psychologia pozytywna bada naukowe podstawy dobrostanu, szczęścia i rozkwitu człowieka. Encyklopedia obejmuje kluczowe koncepcje — od modelu PERMA i teorii flow, przez siły charakteru i wdzięczność, po interwencje oparte na dowodach.',
      sections: [
        {
          title: 'Podstawy i teorie',
          articles: [
            { label: 'Psychologia pozytywna — wprowadzenie', id: 'positive_psychology/wprowadzenie',        status: 'live' },
            { label: 'Model PERMA',                          id: 'positive_psychology/model_perma',         status: 'live' },
            { label: 'Szczęście i dobrostan psychiczny',     id: 'positive_psychology/szczescie_dobrostan', status: 'live' },
          ]
        },
        {
          title: 'Zasoby i siły psychologiczne',
          articles: [
            { label: 'Optymizm i nadzieja',           id: 'positive_psychology/optymizm_nadzieja',      status: 'live' },
            { label: 'Przepływ (flow)',                id: 'positive_psychology/przeplyw_flow',          status: 'live' },
            { label: 'Siły charakteru (VIA)',          id: 'positive_psychology/sily_charakteru',        status: 'live' },
            { label: 'Wdzięczność',                    id: 'positive_psychology/wdziecznosc',            status: 'live' },
          ]
        },
        {
          title: 'Uważność i relacje',
          articles: [
            { label: 'Mindfulness i uważność',        id: 'positive_psychology/mindfulness',             status: 'live' },
            { label: 'Współczucie dla siebie',         id: 'positive_psychology/wspolczucie_dla_siebie', status: 'live' },
            { label: 'Sens życia i poczucie celu',     id: 'positive_psychology/sens_i_cel',             status: 'live' },
            { label: 'Pozytywne relacje i miłość',     id: 'positive_psychology/relacje_pozytywne',      status: 'live' },
          ]
        },
        {
          title: 'Interwencje',
          articles: [
            { label: 'Interwencje psychologii pozytywnej', id: 'positive_psychology/interwencje_pozytywne', status: 'live' },
          ]
        },
      ]
    },

    psych_ai: {
      title: 'WIKI — Psychologia sztucznej inteligencji',
      intro: 'Psychologia sztucznej inteligencji bada psychologiczne aspekty systemów AI — od procesów poznawczych i antropomorfizacji po etykę, zaufanie i przyszłość relacji człowiek-maszyna. Encyklopedia obejmuje zarówno wpływ AI na człowieka, jak i psychologiczne mechanizmy projektowania i użytkowania systemów inteligentnych.',
      sections: [
        {
          title: 'Podstawy i historia',
          articles: [
            { label: 'Psychologia AI — wprowadzenie',   id: 'ai_psychology/wprowadzenie',  status: 'live' },
            { label: 'Historia AI i psychologia',       id: 'ai_psychology/historia_ai',   status: 'live' },
          ]
        },
        {
          title: 'Procesy poznawcze i decyzje',
          articles: [
            { label: 'Poznawcze aspekty działania AI',  id: 'ai_psychology/ai_poznawcze',  status: 'live' },
            { label: 'AI a podejmowanie decyzji',       id: 'ai_psychology/decyzje_ai',    status: 'live' },
          ]
        },
        {
          title: 'Relacja człowiek-AI',
          articles: [
            { label: 'Interakcja człowiek-AI',                  id: 'ai_psychology/czlowiek_a_ai',        status: 'live' },
            { label: 'Zaufanie do sztucznej inteligencji',      id: 'ai_psychology/zaufanie_do_ai',       status: 'live' },
            { label: 'Antropomorfizacja AI',                    id: 'ai_psychology/antropomorfizacja_ai', status: 'live' },
            { label: 'AI a emocje i rozumienie emocji',         id: 'ai_psychology/ai_emocje',            status: 'live' },
          ]
        },
        {
          title: 'Etyka, uprzedzenia i zastosowania',
          articles: [
            { label: 'Uprzedzenia i błędy poznawcze w AI',      id: 'ai_psychology/uprzedzenia_ai', status: 'live' },
            { label: 'Etyka AI z perspektywy psychologicznej',  id: 'ai_psychology/etyka_ai',       status: 'live' },
            { label: 'AI w psychoterapii i diagnostyce',        id: 'ai_psychology/ai_w_terapii',   status: 'live' },
            { label: 'Przyszłość relacji człowiek-AI',          id: 'ai_psychology/przyszlosc_ai',  status: 'live' },
          ]
        },
      ]
    },

    robotyka_afektywna: {
      title: 'WIKI — Robotyka afektywna i kognitywistyka',
      intro: 'Robotyka afektywna i kognitywistyka badają emocjonalne i poznawcze aspekty maszyn oraz interakcji człowiek–robot. Encyklopedia obejmuje zagadnienia od historii robotyki afektywnej, przez doliny niesamowitości i roboty społeczne, po interfejsy mózg–maszyna i filozofię świadomości maszyn.',
      sections: [
        {
          title: 'Podstawy i historia',
          articles: [
            { label: 'Robotyka afektywna — wprowadzenie',  id: 'affective_robotics/wprowadzenie',                 status: 'live' },
            { label: 'Historia robotyki afektywnej',       id: 'affective_robotics/historia_robotyki_afektywnej', status: 'live' },
            { label: 'Kognitywistyka obliczeniowa',        id: 'affective_robotics/kognitywistyka_obliczeniowa',  status: 'live' },
          ]
        },
        {
          title: 'Emocje i percepcja',
          articles: [
            { label: 'Emocje w robotach',                      id: 'affective_robotics/emocje_robotow',           status: 'live' },
            { label: 'Dolina niesamowitości',                  id: 'affective_robotics/dolina_niesamowitosci',    status: 'live' },
            { label: 'Percepcja i ocena robotów przez ludzi',  id: 'affective_robotics/percepcja_robotow',        status: 'live' },
          ]
        },
        {
          title: 'Interakcja i zastosowania',
          articles: [
            { label: 'Roboty społeczne i HRI',           id: 'affective_robotics/roboty_spoleczne',          status: 'live' },
            { label: 'Roboty w opiece i terapii',        id: 'affective_robotics/roboty_w_opiece',           status: 'live' },
            { label: 'Współpraca człowiek–robot (HRC)',  id: 'affective_robotics/wspolpraca_czlowiek_robot', status: 'live' },
          ]
        },
        {
          title: 'Świadomość, BCI i przyszłość',
          articles: [
            { label: 'Świadomość i podmiotowość maszyn',  id: 'affective_robotics/swiadomosc_maszyn',              status: 'live' },
            { label: 'Interfejsy mózg–maszyna (BCI)',     id: 'affective_robotics/interfejsy_mozg_maszyna',         status: 'live' },
            { label: 'Przyszłość robotyki afektywnej',    id: 'affective_robotics/przyszlosc_robotyki_afektywnej',  status: 'live' },
          ]
        },
      ]
    },

    psych_szkolna: {
      title: 'WIKI — Psychologia szkolna i edukacyjna',
      intro: 'Psychologia szkolna i edukacyjna bada procesy uczenia się, nauczania i rozwoju w kontekście instytucji edukacyjnych. Encyklopedia obejmuje teorie uczenia się, motywację akademicką, trudności szkolne, relacje nauczyciel–uczeń, klimat szkolny oraz interwencje psychologiczne w placówkach oświatowych.',
      sections: [
        {
          title: 'Podstawy i teorie',
          articles: [
            { label: 'Psychologia szkolna — wprowadzenie',  id: 'school_psychology/wprowadzenie',                status: 'live' },
            { label: 'Teorie uczenia się',                  id: 'school_psychology/teorie_uczenia_sie',          status: 'live' },
            { label: 'Strefa najbliższego rozwoju (ZPD)',   id: 'school_psychology/strefa_najblizszego_rozwoju', status: 'live' },
          ]
        },
        {
          title: 'Motywacja i zdolności',
          articles: [
            { label: 'Motywacja szkolna',               id: 'school_psychology/motywacja_szkolna',      status: 'live' },
            { label: 'Inteligencje wielorakie (Gardner)', id: 'school_psychology/inteligencja_wieloraka', status: 'live' },
          ]
        },
        {
          title: 'Trudności i zaburzenia',
          articles: [
            { label: 'Trudności w uczeniu się',  id: 'school_psychology/trudnosci_w_uczeniu_sie', status: 'live' },
            { label: 'ADHD w środowisku szkolnym', id: 'school_psychology/adhd_w_szkole',          status: 'live' },
            { label: 'Stres szkolny i lęk egzaminacyjny', id: 'school_psychology/stres_szkolny',   status: 'live' },
          ]
        },
        {
          title: 'Środowisko szkolne i interwencje',
          articles: [
            { label: 'Relacje nauczyciel–uczeń',           id: 'school_psychology/relacje_nauczyciel_uczen', status: 'live' },
            { label: 'Klimat szkolny',                      id: 'school_psychology/klimat_szkolny',           status: 'live' },
            { label: 'Ocenianie i informacja zwrotna',      id: 'school_psychology/ocenianie_i_feedback',     status: 'live' },
            { label: 'Interwencje psychologiczne w szkole', id: 'school_psychology/interwencje_szkolne',      status: 'live' },
          ]
        },
      ]
    },
    neurozroznorodnosc: {
      title: 'WIKI — Neuroróżnorodność',
      intro: 'Neuroróżnorodność to koncepcja uznająca naturalne różnice neurologiczne — takie jak autyzm, ADHD, dysleksja, dyskalkulia czy dyspraksja — za warianty ludzkiego mózgu, a nie zaburzenia wymagające "naprawy". Encyklopedia obejmuje zagadnienia od podstaw teoretycznych neuroróżnorodności, przez poszczególne profile neurologiczne, po modele mocnych stron, wsparcie, interwencje i inkluzję zawodową.',
      sections: [
        {
          title: 'Podstawy i profile',
          articles: [
            { label: 'Neuroróżnorodność — wprowadzenie',     id: 'neurodiversity/wprowadzenie',     status: 'live' },
            { label: 'ADHD jako wariant neuroróżnorodności', id: 'neurodiversity/adhd',             status: 'live' },
            { label: 'Spektrum autyzmu (ASD)',                id: 'neurodiversity/spektrum_autyzmu', status: 'live' },
          ]
        },
        {
          title: 'Trudności uczenia się',
          articles: [
            { label: 'Dysleksja',        id: 'neurodiversity/dysleksja',   status: 'live' },
            { label: 'Dyskalkulia',      id: 'neurodiversity/dyskalkulia', status: 'live' },
            { label: 'Dyspraksja i DCD', id: 'neurodiversity/dyspraksja',  status: 'live' },
          ]
        },
        {
          title: 'Inne profile i zdolności',
          articles: [
            { label: 'Zespół Tourette\'a i tiki',         id: 'neurodiversity/tourette',    status: 'live' },
            { label: 'Hiperleksja i wyjątkowe zdolności', id: 'neurodiversity/hiperleksja', status: 'live' },
          ]
        },
        {
          title: 'Wsparcie i inkluzja',
          articles: [
            { label: 'Model mocnych stron',                id: 'neurodiversity/model_mocnych_stron',        status: 'live' },
            { label: 'Wsparcie i interwencje',             id: 'neurodiversity/wsparcie_interwencje',       status: 'live' },
            { label: 'Neuroróżnorodność w miejscu pracy', id: 'neurodiversity/neurozroznorodnosc_w_pracy', status: 'live' },
            { label: 'Identyfikacja i diagnoza',           id: 'neurodiversity/identyfikacja_i_diagnoza',   status: 'live' },
          ]
        },
      ]
    },
  },
};
