# Inwariancja pomiarowa

Inwariancja pomiarowa (measurement invariance) to właściwość narzędzia psychologicznego, która oznacza, że mierzy ono ten sam konstrukt w ten sam sposób w różnych grupach (np. kobiet i mężczyzn, różnych kultur, grup wiekowych). Bez inwariancji porównywanie wyników między grupami może być błędne.

## Dlaczego inwariancja jest ważna?

Gdy naukowcy stwierdzają, że "kobiety mają wyższe średnie nasilenia lęku niż mężczyźni", zakładają implicite, że kwestionariusz lęku działa jednakowo w obu grupach. Jeśli pewne pytania są systematycznie różnie interpretowane przez kobiety i mężczyzn (np. różne progi akceptowalności przyznania się do strachu), porównanie jest bezpodstawne.

Inwariancja pomiarowa jest warunkiem wstępnym:
- Porównywania średnich między grupami
- Porównywania korelacji i regresji między grupami
- Używania jednego narzędzia w badaniach międzykulturowych lub podłużnych

## Model hierarchiczny inwariancji (Millsap i Kwok)

Inwariancja jest badana etapami — każdy kolejny jest silniejszy od poprzedniego:

### 1. Inwariancja konfiguracyjna
Ten sam wzorzec ładowań czynnikowych (które pytania dotyczą których konstruktów) — ale parametry mogą się różnić między grupami. Jest to model bazowy; jego dobre dopasowanie potwierdza, że ta sama struktura czynnikowa jest sensowna w obu grupach.

### 2. Inwariancja metryczna (słaba)
Ładunki czynnikowe są równe we wszystkich grupach. Oznacza to, że "jednostka" skali latentnej ma to samo znaczenie w obu grupach. Pozwala porównywać korelacje i kowariancje, ale nie średnie.

### 3. Inwariancja skalarna (mocna)
Ładunki czynnikowe *i* intercepty pozycji są równe. Intercepty odzwierciedlają różne "poziomy startowe" pozycji niezależnie od cechy. Tylko pełna inwariancja skalarna pozwala porównywać średnie latentne.

### 4. Inwariancja resztkowa (ścisła)
Wariancje reszt (błędów) są równe. Bardzo restrykcyjne kryterium; najczęściej nie jest wymagane do większości celów badawczych.

> **Ważna uwaga:** Częściowa inwariancja (partial invariance) — gdy większość ładunków/interceptów jest równa, ale kilka nie — jest często wystarczająca do porównywania grup po uwzględnieniu niezmiennych pozycji.

## Procedura testowania w CFA

1. Dopasuj **model konfiguracyjny** (ta sama struktura, wszystkie parametry wolne w każdej grupie)
2. Nałóż ograniczenie równości na **ładunki** → model metryczny; oceń pogorszenie dopasowania
3. Nałóż ograniczenie równości na **intercepty** → model skalarny; oceń pogorszenie dopasowania
4. Nałóż ograniczenie równości na **residua** → model ścisły (opcjonalnie)

### Ocena pogorszenia dopasowania
Tradycyjnie: test chi² różnicy. Ale chi² jest wrażliwy na wielkość próby — przy N > 300 prawie zawsze istotny.

Lepsze podejście: ΔCFI ≥ −0.010 i/lub ΔRMSEA ≥ 0.015 sygnalizują problematyczne pogorszenie (Cheung i Rensvold).

## Inwariancja a DIF

**DIF (Differential Item Functioning)** w IRT i brak inwariancji skalarnej w CFA są powiązanymi konceptami — oba oznaczają, że pozycja zachowuje się inaczej dla różnych grup po kontroli za poziom cechy.

DIF jest bardziej powszechny w badaniach adaptacji testów, inwariancja pomiarowa — w badaniach porównawczych.

## Przykłady badań

- **Wielka Piątka:** Badania cross-kulturowe (Schmitt i in., 2007) wykazały częściową, ale nie pełną inwariancję NEO-PI między 56 krajami. Wyciąganie wniosków o "narodowym charakterze" bez uwzględnienia inwariancji jest ryzykowne.

- **PHQ-9 (skala depresji):** Badania wykazały inwariancję metryczną między płciami, ale brak pełnej inwariancji skalarnej — kobiety mają wyższe intercepty dla pozycji o smutku, co wynika ze zróżnicowania w wyrażaniu emocji, nie tylko w depresji.

- **Testy inteligencji:** Badania fl ynn effect (wzrost IQ w czasie) sugerują, że część wzrostu może odzwierciedlać zmiany w sposobie podejścia do testów, nie prawdziwy wzrost inteligencji — problem inwariancji w czasie.

## Implikacje praktyczne

Klinicyści i badacze powinni:
- Sprawdzać, czy narzędzia zostały zwalidowane inwariancyjnie przed porównywaniem grup
- Traktować sceptycznie porównania międzykulturowe bez dowodów inwariancji
- Przy adaptacji testu do nowej kultury standardowo przeprowadzać analizę inwariancji

> **Podsumowanie:** Inwariancja pomiarowa jest metodologicznym fundamentem porównawczych badań psychologicznych. Jej brak nie dyskwalifikuje narzędzia — może też ujawnić ważne różnice między grupami. Kluczem jest świadomość ograniczeń i raportowanie wyników analiz inwariancji.
