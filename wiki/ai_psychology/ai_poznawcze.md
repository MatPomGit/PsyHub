# Poznawcze aspekty działania AI

## AI jako model ludzkiego poznania

Związek między sztuczną inteligencją a psychologią poznawczą jest jednym z najgłębszych i najdłużej trwających w historii nauki. Psychologia poznawcza bada, jak umysł ludzki przetwarza informacje — jak postrzega, zapamiętuje, rozumuje, uczy się i podejmuje decyzje. AI od początku czerpała z tych odkryć, budując systemy inspirowane architekturą ludzkiego poznania. Jednocześnie AI stała się dla psychologii cennym narzędziem — modelem obliczeniowym, który można testować i porównywać z ludzkim umysłem.

Dziś, gdy wielkie modele językowe osiągają poziom zbliżony do ludzkiego w wielu testach poznawczych, pytanie o podobieństwa i różnice między poznaniem ludzkim a maszynowym nabiera nowego, pilnego znaczenia.

> **Fakt:** GPT-4 uzyskał wyniki w górnym percentylu ludzkim w Uniform Bar Exam (egzamin prawniczy), SAT i GRE, a także wykazał zdolność do rozwiązywania analogii, rozumowania przez analogię i teorii umysłu — co zainicjowało poważną debatę o tym, czym właściwie jest inteligencja.

## Architektura poznawcza i jej komputerowe modele

### Pamięć robocza

Psycholodzy poznawczy, zwłaszcza Alan Baddeley, opisali pamięć roboczą jako system o ograniczonej pojemności, odpowiedzialny za tymczasowe przechowywanie i przetwarzanie informacji. Koncepcja ta znalazła odwzorowanie w architekturze systemów AI:

- Mechanizmy uwagi (attention) w transformerach
- Kontekst w modelach językowych (okno kontekstowe)
- Pamięć epizodyczna w systemach planowania

Jednak ludzka pamięć robocza operuje na reprezentacjach multimodalnych, zintegrowanych z emocjami i wcześniejszymi doświadczeniami — czego obecne systemy AI w pełni nie replikują.

### Uczenie się i pamięć długoterminowa

Uczenie maszynowe (machine learning) czerpie z teorii warunkowania i uczenia przez wzmacnianie (reinforcement learning, RL). Algorytmy RL są bezpośrednio zainspirowane modelem psychologicznym, w którym agent uczy się przez nagrody i kary w interakcji ze środowiskiem.

Jednak ludzkie uczenie się wyróżnia się:

- Szybką generalizacją z małej liczby przykładów (one-shot i few-shot learning)
- Integracją wiedzy pojęciowej z doświadczeniem sensorycznym
- Transferem wiedzy między niepokrewnymi domenami
- Uczeniem przez obserwację i naśladowanie

### Reprezentacje pojęciowe

Jak AI i umysł ludzki reprezentują pojęcia? Embeddingi wektorowe w modelach językowych tworzą przestrzenie semantyczne, w których podobne pojęcia sąsiadują — co ma pewną analogię z psychologicznymi modelami sieci semantycznych. Jednak ludzkie reprezentacje pojęciowe są zakorzenione w ciele, emocjach i doświadczeniu zmysłowym — podczas gdy embeddingi AI są czysto lingwistyczne.

## Uwaga i percepcja w AI

### Mechanizmy uwagi

Mechanizm uwagi (attention mechanism) w transformerach — kluczowy składnik architektur takich jak BERT i GPT — jest luźno inspirowany koncepcją selektywnej uwagi w psychologii poznawczej. W obu przypadkach chodzi o to, by system koncentrował swoje zasoby przetwarzania na najistotniejszych częściach wejścia.

Różnice są jednak fundamentalne: ludzka uwaga jest kształtowana przez biologiczne priorytety (zagrożenie, nowość, społeczna istotność), emocje i motywację — czynniki nieobecne w mechanizmach uwagi AI.

### Percepcja wzrokowa

Sieci konwolucyjne (CNN), używane w rozpoznawaniu obrazów, zostały zainspirowane hierarchiczną organizacją kory wzrokowej opisaną przez Hubela i Wiesela. Pierwsze warstwy wykrywają krawędzie i orientacje, wyższe — złożone wzorce i obiekty.

Badania porównujące błędy ludzkiej i algorytmicznej percepcji wzrokowej ujawniają interesujące różnice: AI jest odporna na pewne złudzenia optyczne, na które podatni są ludzie, ale z kolei jest podatna na specyficzne ataki adwersarialne (adversarial examples), które nie mylą ludzkiego wzroku.

> **Fakt:** W spektakularnym eksperymencie wykazano, że dodanie do obrazu kota kilku pikseli niezauważalnych dla człowieka może sprawić, że sieć neuronowa „zobaczy" w nim guacamole — co demonstruje, jak fundamentalnie różne są strategie percepcji AI i człowieka mimo zbliżonej skuteczności.

## Rozumowanie i wnioskowanie

### Rozumowanie dedukcyjne i indukcyjne

Modele językowe wykazują imponujące zdolności w testach rozumowania dedukcyjnego, analogii i wnioskowania przez analogię — zbliżone do wyników ludzkich. Jednak ich rozumowanie jest fundamentalnie odmienne od ludzkiego: opiera się na wzorcach statystycznych w danych, nie na przyczynowych modelach świata.

To prowadzi do charakterystycznego wzorca: AI radzi sobie dobrze w typowych przypadkach, ale potyka się na zadaniach, które wymagają rozumowania kauzalnego, zdrowego rozsądku lub uwzględnienia kontekstu nieobecnego w danych treningowych.

### Heurystyki i błędy AI

Podobnie jak ludzie stosują heurystyki prowadzące do błędów, modele AI mają swoje charakterystyczne „błędy algorytmiczne":

- **Halucynacje**: generowanie przekonująco brzmiących, ale fałszywych informacji
- **Bias reprezentacyjny**: przeszacowanie lub niedoszacowanie pewnych kategorii na podstawie ich częstości w danych
- **Efekt pozornej pewności**: model może wyrażać równe przekonanie w prawdziwych i fałszywych odpowiedziach
- **Sycophancy**: tendencja do zgadzania się z użytkownikiem, nawet gdy użytkownik się myli

## Język i myślenie

### Hipoteza Sapira-Whorfa a AI

Hipoteza lingwistycznego relatywizmu sugeruje, że język kształtuje myślenie. Jeśli modele językowe myślą przez pryzmat języka — co jest implicite założone w ich architekturze — to czy są podatne na te same ograniczenia poznawcze, które wnoszi struktura językowa? Badania sugerują, że tak: modele trenowane na różnych językach wykazują subtelne różnice w rozumowaniu, odzwierciedlające kulturowe schematy zakodowane w języku.

### Rozumienie języka naturalnego

Czy AI „rozumie" język, czy tylko go przewiduje? To pytanie jest centralnym sporem w lingwistyce obliczeniowej i kognitywistyce. Argument chińskiego pokoju Johna Searle'a (1980) — myślowy eksperyment pokazujący, że manipulowanie symbolami zgodnie z regułami nie jest rozumieniem — jest często przywoływany w tej debacie. Z kolei zwolennicy modeli funkcjonalistycznych argumentują, że jeśli zachowanie systemu jest nieodróżnialne od rozumienia, to dla celów praktycznych możemy mówić o rozumieniu.

## Kreatywność w AI i człowieku

### Czym jest kreatywność?

Psychologiczne teorie kreatywności wyróżniają kreatywność jako:

- Kombinatorykę: łączenie istniejących elementów w nowe konfiguracje
- Transformację: radykalną zmianę paradygmatu lub struktury
- Eksplorację: poszerzanie granic istniejącej przestrzeni konceptualnej

### AI a kreatywność

Systemy AI generatywne — modele tekstowe, obrazowe (Midjourney, DALL-E), muzyczne (MusicLM) i wideo — wykazują imponujące zdolności kreatywne w sensie kombinatorycznym. Generują nowe, niespotykane połączenia stylów, tematów i form.

Kontrowersyjne jest natomiast, czy AI jest zdolna do kreatywności transformacyjnej — tworzenia nowych paradygmatów — czy jedynie interpoluje i ekstrapoluje w przestrzeni treningowych przykładów.

> **Fakt:** Obraz generowany przez AI „Théâtre D'Opéra Spatial" zwyciężył w konkursie sztuki na targach stanowych w Kolorado w 2022 roku, wywołując falę kontrowersji o to, czym jest twórczość i czy AI może być autorem dzieła artystycznego.

## Uczenie się i adaptacja AI vs. uczenie się ludzkie

| Cecha | Uczenie ludzkie | Uczenie maszynowe |
|---|---|---|
| Efektywność próbek | Bardzo wysoka (kilka przykładów) | Wymaga tysięcy-milionów przykładów |
| Transfer między domenami | Naturalny | Ograniczony |
| Zapominanie | Stopniowe, adaptacyjne | Katastroficzne zapominanie |
| Motywacja | Wewnętrzna, emocjonalna | Zewnętrzna, funkcja nagrody |
| Ciągłość | Ciągłe, w czasie rzeczywistym | Etapy treningu |

## Metapoznanie — myślenie o myśleniu

Metapoznanie — zdolność do refleksji nad własnym myśleniem i jego regulacja — jest jedną z wyróżniających cech ludzkiego poznania. Czy AI ma metapoznanie?

Nowoczesne modele językowe wykazują pewne behawioralne oznaki metapoznania: mogą wyrażać niepewność, wskazywać na granice swojej wiedzy i przyznawać się do błędów. Jednak te zachowania są prawdopodobnie wyuczonymi wzorcami z danych treningowych, nie prawdziwą świadomością ograniczeń własnej wiedzy.

## Podsumowanie

Porównanie poznania AI i ludzkiego jest jednym z najbardziej intelektualnie stymulujących przedsięwzięć współczesnej nauki. AI stawia psychologii poznawczej lusterko — a to, co widać w odbiciu, jest zarówno fascynujące (podobieństwa w strategiach przetwarzania), jak i pouczające (fundamentalne różnice w architekturze, cielesności i doświadczeniu). Głębsze zrozumienie tych podobieństw i różnic jest kluczem zarówno do budowania lepszych systemów AI, jak i do głębszego rozumienia ludzkiego umysłu.
