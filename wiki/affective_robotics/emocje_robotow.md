# Emocje w robotach — projektowanie i rozpoznawanie

## Czym są emocje w kontekście robotyki?

Pytanie o to, czy robot może „mieć" emocje, jest jednym z najbardziej dyskutowanych w kognitywistyce i filozofii umysłu. W praktyce inżynierskiej mówi się zwykle o dwóch odrębnych zadaniach:

- **rozpoznawanie emocji** — zdolność robota do wykrycia i interpretacji stanu emocjonalnego człowieka
- **wyrażanie emocji** — zdolność robota do komunikowania stanów wewnętrznych w sposób czytelny dla człowieka

Oba zadania są niezbędne do naturalnej, afektywnej interakcji człowiek–robot.

## Affective computing — obliczenia afektywne

Termin wprowadzony przez Rosalind Picard (MIT, 1997) opisuje systemy komputerowe zdolne do rozpoznawania, interpretowania i symulowania ludzkich emocji. Obliczenia afektywne opierają się na wielomodalnym przetwarzaniu danych wejściowych:

- **wyraz twarzy** — system kodowania ruchów mięśni twarzy FACS (Paul Ekman i Wallace Friesen, 1978)
- **ton i parametry głosu** — rytm, wysokość, tempo, energia
- **gestykulacja i postawa ciała** — kinematyka ruchów
- **sygnały fizjologiczne** — tętno, przewodność skóry (EDA), temperatura ciała, EEG

> **Fakt:** Paul Ekman zidentyfikował sześć emocji podstawowych (radość, smutek, gniew, strach, wstręt, zaskoczenie), które według jego badań są rozpoznawalne cross-kulturowo — stały się one podstawą wielu systemów rozpoznawania emocji w robotach.

## Systemy rozpoznawania emocji

### Rozpoznawanie wyrazu twarzy

Nowoczesne systemy oparte na sieciach konwolucyjnych (CNN) osiągają dokładność przekraczającą 90% w rozpoznawaniu podstawowych emocji ze zdjęć i wideo. Wyzwania obejmują: mikro-ekspresje trwające ułamki sekundy, różnice kulturowe w ekspresji oraz maskowanie emocji.

### Analiza głosu

Systemy SER (*Speech Emotion Recognition*) analizują prozodię, barwę i dynamikę głosu. Modele transformerowe (np. wav2vec) osiągają wysoką skuteczność nawet bez zrozumienia treści wypowiedzi.

### Sygnały fizjologiczne

Bransolety i sensory mierzące EDA (elektrodermalna aktywność), HRV (zmienność rytmu serca) i temperaturę skóry są coraz częściej integrowane z robotami terapeutycznymi i edukacyjnymi.

## Wyrażanie emocji przez roboty

### Mimika i ruch

Roboty humanoidalne takie jak **Sophia** (Hanson Robotics) posiadają silikonową skórę i silniki napędzające 50+ mięśni twarzy, umożliwiając bogatą ekspresję mimiczną. **Pepper** (SoftBank) i **NAO** używają uproszczonej, ale czytelnej mimiki oraz gestów ciała.

### Komunikacja werbalna i paralingwistyczna

Modulacja tonu, rytmu i głośności wypowiedzi przekazuje emocje nawet bez słów. Współczesne syntezatory mowy (np. ElevenLabs, Google WaveNet) umożliwiają naturalnie brzmiącą ekspresję emocjonalną.

### Kolor i oświetlenie

Wiele robotów (np. NAO, Cozmo) komunikuje stany wewnętrzne za pomocą koloru LED — czerwony sygnalizuje złość lub ostrzeżenie, niebieski spokój, zielony gotowość do interakcji.

> **Fakt:** Badania Kappasa i współpracowników (2010) wykazały, że roboty wyrażające emocje spójne z kontekstem sytuacyjnym są oceniane przez ludzi jako bardziej kompetentne i godne zaufania niż roboty „neutralne emocjonalnie".

## Wyzwania i kontrowersje

### Autentyczność vs symulacja

Kluczowe pytanie etyczne: czy robot *przeżywa* emocje, czy jedynie je *symuluje*? Większość badaczy przyjmuje stanowisko funkcjonalistyczne — robot wyraża stany funkcjonalnie odpowiadające emocjom, niezależnie od tego, czy towarzyszą im subiektywne przeżycia.

### Manipulacja emocjonalna

Roboty zdolne do wzbudzania emocji mogą być użyte manipulacyjnie — np. w celu zwiększenia zaangażowania klientów lub uzależnienia dzieci od interakcji. To poważne wyzwanie etyczne dla projektantów.

### Różnice kulturowe

Ekspresja i interpretacja emocji różnią się między kulturami. System trenowany na danych z jednego kręgu kulturowego może być znacznie mniej dokładny w innym.

## Podsumowanie

Projektowanie i rozpoznawanie emocji w robotach to jedno z najbardziej dynamicznych pól badawczych na skrzyżowaniu psychologii, neuronauki i inżynierii. Postęp w tej dziedzinie otwiera zarówno ogromne możliwości terapeutyczne i edukacyjne, jak i poważne pytania etyczne dotyczące granic symulacji i autentyczności.
