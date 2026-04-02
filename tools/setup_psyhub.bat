@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

echo.
echo  ╔══════════════════════════════════════════════════════╗
echo  ║  PsyHub v3.0 "ATLAS" — Generator struktury plików   ║
echo  ║  Uruchom w folderze, w którym ma powstać portal.     ║
echo  ╚══════════════════════════════════════════════════════╝
echo.

:: ── Sprawdź czy index.html już istnieje ──────────────────────
if exist "index.html" (
  echo  [INFO]  Znaleziono istniejący projekt w tym folderze.
  echo          Skrypt utworzy tylko brakujace pliki i foldery.
) else (
  echo  [INFO]  Nowy folder projektu. Skopiuj index.html i site-config.js
  echo          do tego katalogu, a nastepnie uruchom skrypt ponownie.
  echo          Albo uruchom teraz — foldery i tak zostana utworzone.
)

echo.
echo  Tworzenie struktury folderow wiki...
echo.

:: ═════════════════════════════════════════════════════════════
::  TWORZENIE FOLDERÓW
:: ═════════════════════════════════════════════════════════════
for %%D in (
  wiki
  wiki\intro
  wiki\neuro
  wiki\cognitive
  wiki\disorders
  wiki\cases
  wiki\diagnostics
  wiki\psychometrics
  wiki\pharmacology
  wiki\individual_diffs
  wiki\temperament
  wiki\emotions
  wiki\biology
  wiki\psychotherapy
  wiki\psychopathology
  wiki\suicidology
  wiki\sexology
  wiki\artetherapy
  wiki\animaltherapy
  wiki\reference
) do (
  if not exist "%%D\" (
    mkdir "%%D"
    echo  [MKDIR]  %%D
  )
)

echo.
echo  Tworzenie plikow MD (placeholdery dla brakujacych)...
echo.

:: ═════════════════════════════════════════════════════════════
::  MAKRO POMOCNICZE — tworzy plik tylko gdy nie istnieje
:: ═════════════════════════════════════════════════════════════
::  Wywołanie:  call :mkmd <ścieżka> <Tytuł H1> <Sekcja>
:: ═════════════════════════════════════════════════════════════

:: ── WPROWADZENIE ─────────────────────────────────────────────
call :mkmd "wiki\intro\definicja.md"  "Definicja i zakres neuropsychologii"  "Wprowadzenie"
call :mkmd "wiki\intro\historia.md"   "Historia dyscypliny"                  "Wprowadzenie"

:: ── NEUROBIOLOGIA ────────────────────────────────────────────
call :mkmd "wiki\neuro\anatomia.md"             "Anatomia mózgu"               "Neurobiologia"
call :mkmd "wiki\neuro\neuron.md"               "Neuron i synapsa"             "Neurobiologia"
call :mkmd "wiki\neuro\systemy.md"              "Układy i sieci mózgowe"       "Neurobiologia"
call :mkmd "wiki\neuro\myelinizacja.md"         "Mielinizacja i istota biała"  "Neurobiologia"
call :mkmd "wiki\neuro\plastycznosc.md"         "Neuroplastyczność"            "Neurobiologia"
call :mkmd "wiki\neuro\neuroobrazowanie.md"     "Neuroobrazowanie"             "Neurobiologia"
call :mkmd "wiki\neuro\lateralizacja.md"        "Lateralizacja funkcji"        "Neurobiologia"
call :mkmd "wiki\neuro\kora_prefrontalna.md"    "Kora przedczołowa"            "Neurobiologia"
call :mkmd "wiki\neuro\uklad_limbiczny.md"      "Układ limbiczny"              "Neurobiologia"

:: ── FUNKCJE POZNAWCZE ────────────────────────────────────────
call :mkmd "wiki\cognitive\pamiec.md"               "Pamięć"                          "Funkcje Poznawcze"
call :mkmd "wiki\cognitive\uwaga.md"                "Uwaga"                           "Funkcje Poznawcze"
call :mkmd "wiki\cognitive\jezyk.md"                "Język"                           "Funkcje Poznawcze"
call :mkmd "wiki\cognitive\funkcje_wykonawcze.md"   "Funkcje wykonawcze"              "Funkcje Poznawcze"
call :mkmd "wiki\cognitive\percepcja.md"            "Percepcja i gnozja"              "Funkcje Poznawcze"
call :mkmd "wiki\cognitive\zmeczenie_poznawcze.md"  "Zmęczenie poznawcze"             "Funkcje Poznawcze"
call :mkmd "wiki\cognitive\myslenie.md"             "Myślenie i rozumowanie"          "Funkcje Poznawcze"
call :mkmd "wiki\cognitive\uczenie.md"              "Uczenie się"                     "Funkcje Poznawcze"
call :mkmd "wiki\cognitive\wyobraznia.md"           "Wyobraźnia i reprezentacje"      "Funkcje Poznawcze"
call :mkmd "wiki\cognitive\swiadomosc.md"           "Świadomość i metapoznanie"       "Funkcje Poznawcze"
call :mkmd "wiki\cognitive\podejmowanie_decyzji.md" "Podejmowanie decyzji"            "Funkcje Poznawcze"

:: ── ZABURZENIA KLINICZNE ─────────────────────────────────────
call :mkmd "wiki\disorders\afazje.md"    "Afazje"                 "Zaburzenia Kliniczne"
call :mkmd "wiki\disorders\amnezje.md"   "Amnezje"                "Zaburzenia Kliniczne"
call :mkmd "wiki\disorders\otepienia.md" "Otępienia"              "Zaburzenia Kliniczne"
call :mkmd "wiki\disorders\tbi.md"       "Urazy głowy — TBI"      "Zaburzenia Kliniczne"
call :mkmd "wiki\disorders\apraksja.md"  "Apraksja"               "Zaburzenia Kliniczne"
call :mkmd "wiki\disorders\agnozja.md"   "Agnozja wzrokowa"       "Zaburzenia Kliniczne"
call :mkmd "wiki\disorders\neglect.md"   "Neglect przestrzenny"   "Zaburzenia Kliniczne"
call :mkmd "wiki\disorders\adhd.md"      "ADHD"                   "Zaburzenia Kliniczne"
call :mkmd "wiki\disorders\asd.md"       "Spektrum autyzmu — ASD" "Zaburzenia Kliniczne"

:: ── PRZYPADKI KLINICZNE ──────────────────────────────────────
call :mkmd "wiki\cases\hm.md"          "Henry Molaison — H.M."     "Przypadki Kliniczne"
call :mkmd "wiki\cases\gage.md"        "Phineas Gage"               "Przypadki Kliniczne"
call :mkmd "wiki\cases\tan.md"         "Louis Leborgne — Tan"       "Przypadki Kliniczne"
call :mkmd "wiki\cases\split_brain.md" "Rozdzielony mózg"           "Przypadki Kliniczne"

:: ── DIAGNOSTYKA ──────────────────────────────────────────────
call :mkmd "wiki\diagnostics\testy_przeglad.md"    "Testy neuropsychologiczne — przegląd"  "Diagnostyka"
call :mkmd "wiki\diagnostics\mmse_moca.md"         "Testy przesiewowe — MMSE i MoCA"       "Diagnostyka"
call :mkmd "wiki\diagnostics\testy_wykonawcze.md"  "Testy funkcji wykonawczych"            "Diagnostyka"
call :mkmd "wiki\diagnostics\testy_pamieci.md"     "Testy pamięci"                         "Diagnostyka"
call :mkmd "wiki\diagnostics\testy_uwagi.md"       "Testy uwagi"                           "Diagnostyka"
call :mkmd "wiki\diagnostics\testy_jezyka.md"      "Testy językowe"                        "Diagnostyka"
call :mkmd "wiki\diagnostics\wais.md"              "Skale Wechslera"                       "Diagnostyka"
call :mkmd "wiki\diagnostics\neuropsych_battery.md" "Baterie neuropsychologiczne"          "Diagnostyka"

:: ── PSYCHOMETRIA ─────────────────────────────────────────────
call :mkmd "wiki\psychometrics\psychometria_wprowadzenie.md" "Psychometria — wprowadzenie"  "Psychometria"
call :mkmd "wiki\psychometrics\rzetelnosc.md"   "Rzetelność pomiaru"          "Psychometria"
call :mkmd "wiki\psychometrics\trafnosc.md"     "Trafność pomiaru"            "Psychometria"
call :mkmd "wiki\psychometrics\normalizacja.md" "Normalizacja i normy"        "Psychometria"
call :mkmd "wiki\psychometrics\teoria_ct.md"    "Klasyczna teoria testu"      "Psychometria"
call :mkmd "wiki\psychometrics\irt.md"          "IRT i model Rascha"          "Psychometria"
call :mkmd "wiki\psychometrics\cfa_efa.md"      "Analiza czynnikowa"          "Psychometria"
call :mkmd "wiki\psychometrics\invariancja.md"  "Inwariancja pomiarowa"       "Psychometria"

:: ── FARMAKOLOGIA ─────────────────────────────────────────────
call :mkmd "wiki\pharmacology\neurofarmakologia.md"    "Neurofarmakologia"              "Farmakologia"
call :mkmd "wiki\pharmacology\przeciwdepresyjne.md"    "Leki przeciwdepresyjne"         "Farmakologia"
call :mkmd "wiki\pharmacology\przeciwpsychotyczne.md"  "Leki przeciwpsychotyczne"       "Farmakologia"
call :mkmd "wiki\pharmacology\anxiolityki.md"          "Anksjolityki i leki nasenne"    "Farmakologia"
call :mkmd "wiki\pharmacology\stabilizatory.md"        "Stabilizatory nastroju"         "Farmakologia"
call :mkmd "wiki\pharmacology\uzaleznienia_farm.md"    "Farmakoterapia uzależnień"      "Farmakologia"
call :mkmd "wiki\pharmacology\psychodeliki.md"         "Psychodeliki w terapii"         "Farmakologia"
call :mkmd "wiki\pharmacology\nootropiki.md"           "Nootropiki i leki kognitywne"   "Farmakologia"

:: ── RÓŻNICE INDYWIDUALNE ─────────────────────────────────────
call :mkmd "wiki\individual_diffs\roznice_wprowadzenie.md"  "Różnice indywidualne — wprowadzenie"  "Różnice Indywidualne"
call :mkmd "wiki\individual_diffs\inteligencja.md"           "Inteligencja"                         "Różnice Indywidualne"
call :mkmd "wiki\individual_diffs\osobowosc.md"              "Osobowość"                            "Różnice Indywidualne"
call :mkmd "wiki\individual_diffs\kreatywnosc.md"            "Kreatywność"                          "Różnice Indywidualne"
call :mkmd "wiki\individual_diffs\genetyka.md"               "Uwarunkowania genetyczne"             "Różnice Indywidualne"
call :mkmd "wiki\individual_diffs\style_poznawcze.md"        "Style poznawcze"                      "Różnice Indywidualne"
call :mkmd "wiki\individual_diffs\plec_psychologia.md"       "Psychologia płci"                     "Różnice Indywidualne"

:: ── TEMPERAMENT ──────────────────────────────────────────────
call :mkmd "wiki\temperament\temperament_wprowadzenie.md"  "Temperament — wprowadzenie"  "Temperament"
call :mkmd "wiki\temperament\modele.md"    "Modele temperamentu"   "Temperament"
call :mkmd "wiki\temperament\pomiar.md"    "Pomiar temperamentu"   "Temperament"
call :mkmd "wiki\temperament\kliniczne.md" "Temperament w klinice" "Temperament"
call :mkmd "wiki\temperament\razvoj.md"    "Temperament a rozwój"  "Temperament"

:: ── EMOCJE I MOTYWACJA ───────────────────────────────────────
call :mkmd "wiki\emotions\emocje_wprowadzenie.md"  "Emocje — wprowadzenie"   "Emocje i Motywacja"
call :mkmd "wiki\emotions\teorie.md"       "Teorie emocji"           "Emocje i Motywacja"
call :mkmd "wiki\emotions\regulacja.md"    "Regulacja emocjonalna"   "Emocje i Motywacja"
call :mkmd "wiki\emotions\motywacja.md"    "Motywacja"               "Emocje i Motywacja"
call :mkmd "wiki\emotions\neurobiologia.md" "Neurobiologia emocji"   "Emocje i Motywacja"
call :mkmd "wiki\emotions\wspolczucie.md"  "Empatia i współczucie"   "Emocje i Motywacja"
call :mkmd "wiki\emotions\aleksytymia.md"  "Aleksytymia"             "Emocje i Motywacja"

:: ── BIOLOGICZNE PODSTAWY ─────────────────────────────────────
call :mkmd "wiki\biology\biologiczne_podstawy.md"  "Biologiczne podstawy zachowania — wprowadzenie"  "Biologiczne Podstawy"
call :mkmd "wiki\biology\genetyka_beh.md"    "Genetyka behawioralna"       "Biologiczne Podstawy"
call :mkmd "wiki\biology\hormony.md"          "Hormony i zachowanie"        "Biologiczne Podstawy"
call :mkmd "wiki\biology\ewolucja.md"         "Psychologia ewolucyjna"      "Biologiczne Podstawy"
call :mkmd "wiki\biology\psychofizjologia.md" "Psychofizjologia"            "Biologiczne Podstawy"
call :mkmd "wiki\biology\chronobiologia.md"   "Chronobiologia i sen"        "Biologiczne Podstawy"
call :mkmd "wiki\biology\mikrobiom.md"        "Oś jelita–mózg"              "Biologiczne Podstawy"

:: ── PSYCHOTERAPIA ────────────────────────────────────────────
call :mkmd "wiki\psychotherapy\psychoterapia_wprowadzenie.md"  "Psychoterapia — wprowadzenie"  "Psychoterapia"
call :mkmd "wiki\psychotherapy\cbt.md"         "Terapia poznawczo-behawioralna — CBT"  "Psychoterapia"
call :mkmd "wiki\psychotherapy\dbt.md"         "Terapia dialektyczno-behawioralna — DBT"  "Psychoterapia"
call :mkmd "wiki\psychotherapy\psychodyn.md"   "Terapia psychodynamiczna"              "Psychoterapia"
call :mkmd "wiki\psychotherapy\humanist.md"    "Podejście humanistyczne"               "Psychoterapia"
call :mkmd "wiki\psychotherapy\systemowa.md"   "Terapia systemowa i rodzinna"          "Psychoterapia"
call :mkmd "wiki\psychotherapy\skutecznosc.md" "Skuteczność psychoterapii"             "Psychoterapia"
call :mkmd "wiki\psychotherapy\sojusz.md"      "Sojusz terapeutyczny"                  "Psychoterapia"
call :mkmd "wiki\psychotherapy\emdr.md"        "EMDR"                                  "Psychoterapia"
call :mkmd "wiki\psychotherapy\act.md"         "Terapia akceptacji i zaangażowania — ACT"  "Psychoterapia"

:: ── PSYCHOPATOLOGIA ──────────────────────────────────────────
call :mkmd "wiki\psychopathology\psychopatologia_wprowadzenie.md"  "Psychopatologia — wprowadzenie"  "Psychopatologia"
call :mkmd "wiki\psychopathology\objawy_ogolne.md"             "Objawy ogólne i MSE"                 "Psychopatologia"
call :mkmd "wiki\psychopathology\zaburzenia_lekowe.md"         "Zaburzenia lękowe"                   "Psychopatologia"
call :mkmd "wiki\psychopathology\zaburzenia_nastroju.md"       "Zaburzenia nastroju"                 "Psychopatologia"
call :mkmd "wiki\psychopathology\psychozy.md"                  "Psychozy i schizofrenia"             "Psychopatologia"
call :mkmd "wiki\psychopathology\zaburzenia_osobowosci.md"     "Zaburzenia osobowości"               "Psychopatologia"
call :mkmd "wiki\psychopathology\trauma_ptsd.md"               "Trauma i PTSD"                       "Psychopatologia"
call :mkmd "wiki\psychopathology\zaburzenia_odzywiania.md"     "Zaburzenia odżywiania"               "Psychopatologia"
call :mkmd "wiki\psychopathology\neurorozwojowe.md"            "Zaburzenia neurorozwojowe"           "Psychopatologia"
call :mkmd "wiki\psychopathology\ocd.md"                       "OCD i zaburzenia pokrewne"           "Psychopatologia"
call :mkmd "wiki\psychopathology\uzaleznienia_psych.md"        "Uzależnienia — aspekt psychologiczny" "Psychopatologia"

:: ── SUICYDOLOGIA ─────────────────────────────────────────────
call :mkmd "wiki\suicidology\suicydologia_wprowadzenie.md"  "Suicydologia — wprowadzenie"  "Suicydologia"
call :mkmd "wiki\suicidology\epidemiologia.md"  "Epidemiologia samobójstw"      "Suicydologia"
call :mkmd "wiki\suicidology\teorie.md"         "Teorie i modele"               "Suicydologia"
call :mkmd "wiki\suicidology\ocena_ryzyka.md"   "Ocena ryzyka samobójczego"     "Suicydologia"
call :mkmd "wiki\suicidology\interwencja.md"    "Interwencja kryzysowa"         "Suicydologia"
call :mkmd "wiki\suicidology\profilaktyka.md"   "Profilaktyka"                  "Suicydologia"
call :mkmd "wiki\suicidology\nssi.md"           "Samookaleczenia — NSSI"        "Suicydologia"
call :mkmd "wiki\suicidology\postvention.md"    "Postvention"                   "Suicydologia"
call :mkmd "wiki\suicidology\media.md"          "Efekt Wertera i Papageno"      "Suicydologia"

:: ── SEKSUOLOGIA ──────────────────────────────────────────────
call :mkmd "wiki\sexology\seksuologia_wprowadzenie.md"  "Seksuologia — wprowadzenie"  "Seksuologia"
call :mkmd "wiki\sexology\orientacja.md"         "Orientacja seksualna"         "Seksuologia"
call :mkmd "wiki\sexology\tozsamosc_plciowa.md"  "Tożsamość płciowa"            "Seksuologia"
call :mkmd "wiki\sexology\dysfunkcje.md"         "Dysfunkcje seksualne"         "Seksuologia"
call :mkmd "wiki\sexology\terapia_seksualna.md"  "Terapia seksualna"            "Seksuologia"
call :mkmd "wiki\sexology\trauma_seksualna.md"   "Trauma seksualna"             "Seksuologia"
call :mkmd "wiki\sexology\rozw_seksualny.md"     "Rozwój seksualny"             "Seksuologia"
call :mkmd "wiki\sexology\modele_odpowiedzi.md"  "Modele odpowiedzi seksualnej" "Seksuologia"

:: ── ARTETERAPIA ──────────────────────────────────────────────
call :mkmd "wiki\artetherapy\arteterapia_wprowadzenie.md"  "Arteterapia — wprowadzenie"  "Arteterapia"
call :mkmd "wiki\artetherapy\art_therapy.md"   "Arteterapia plastyczna"   "Arteterapia"
call :mkmd "wiki\artetherapy\muzykoterapia.md" "Muzykoterapia"            "Arteterapia"
call :mkmd "wiki\artetherapy\dmt.md"           "Choreoterapia — DMT"      "Arteterapia"
call :mkmd "wiki\artetherapy\drameterapia.md"  "Drameterapia"             "Arteterapia"
call :mkmd "wiki\artetherapy\biblioterapia.md" "Biblioterapia"            "Arteterapia"
call :mkmd "wiki\artetherapy\mechanizmy.md"    "Mechanizmy działania"     "Arteterapia"
call :mkmd "wiki\artetherapy\zastosowania.md"  "Zastosowania kliniczne"   "Arteterapia"

:: ── ANIMALOTERAPIA ───────────────────────────────────────────
call :mkmd "wiki\animaltherapy\animaloterapia_wprowadzenie.md"  "Animaloterapia — wprowadzenie"  "Animaloterapia"
call :mkmd "wiki\animaltherapy\dogoterapia.md"      "Dogoterapia"          "Animaloterapia"
call :mkmd "wiki\animaltherapy\hipoterapia.md"      "Hipoterapia"          "Animaloterapia"
call :mkmd "wiki\animaltherapy\felinoterapia.md"    "Felinoterapia"        "Animaloterapia"
call :mkmd "wiki\animaltherapy\aat_zastosowania.md" "AAT — zastosowania"  "Animaloterapia"
call :mkmd "wiki\animaltherapy\etyka_aat.md"        "Etyka i dobrostan"   "Animaloterapia"
call :mkmd "wiki\animaltherapy\mechanizmy_aat.md"   "Mechanizmy AAT"      "Animaloterapia"

:: ── REFERENCJE ───────────────────────────────────────────────
call :mkmd "wiki\reference\zakres.md"    "Zakres wiedzy" "Referencje"
call :mkmd "wiki\reference\literatura.md" "Literatura"   "Referencje"

:: ═════════════════════════════════════════════════════════════
echo.
echo  ══════════════════════════════════════════════════════
echo  Gotowe! Struktura PsyHub v3.0 jest kompletna.
echo.
echo  Kolejne kroki:
echo    1. Upewnij sie ze index.html i site-config.js
echo       sa w tym samym katalogu co folder wiki\
echo    2. Otwórz index.html w przegladarce (plik lokalny)
echo       lub uruchom lokalny serwer HTTP:
echo         python -m http.server 8080
echo       i przejdz na http://localhost:8080
echo    3. Artykuly ze statusem "planned" to pliki-szkielety
echo       gotowe do uzupelnienia trescia.
echo  ══════════════════════════════════════════════════════
echo.
pause
goto :eof

:: ═════════════════════════════════════════════════════════════
::  PODPROGRAM — :mkmd
::  Tworzy plik MD z minimalnym nagłówkiem TYLKO gdy nie istnieje
:: ═════════════════════════════════════════════════════════════
:mkmd
  set "_path=%~1"
  set "_title=%~2"
  set "_section=%~3"
  if not exist "%_path%" (
    echo  [CREATE]  %_path%
    (
      echo # %_title%
      echo.
      echo ^> **Dział:** %_section%
      echo.
      echo *Ten artykuł jest planowany. Uzupełnij tę sekcję treścią.*
      echo.
      echo ## Wprowadzenie
      echo.
      echo Treść artykułu w przygotowaniu.
      echo.
      echo ## Zobacz też
      echo.
      echo - Powiązane artykuły z tego działu są widoczne poniżej artykułu w portalu.
    ) > "%_path%"
  ) else (
    echo  [EXISTS]  %_path%
  )
goto :eof
