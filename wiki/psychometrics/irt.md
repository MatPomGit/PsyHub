# IRT i model Rascha

Teoria odpowiedzi na pozycje (Item Response Theory, IRT) to nowoczesne podejście do pomiaru psychologicznego, które modeluje relację między cechą latentną (nieobserwowalną) a prawdopodobieństwem odpowiedzi na każdą pozycję testową. Stanowi alternatywę dla klasycznej teorii testu (CTT), usuwając jej ograniczenia.

## Ograniczenia CTT i motywacja dla IRT

Klasyczna teoria testu (CTT) zakłada, że rzetelność testu zależy od konkretnej próby badanych — im bardziej jednorodna próba, tym niższy szacowany współczynnik rzetelności. Trudność pozycji i zdolność osoby są wyrażone na różnych skalach i nie mogą być bezpośrednio porównywane.

IRT rozwiązuje te problemy przez:
- Umieszczenie trudności pozycji i zdolności osoby na tej samej skali (logity)
- Parametry pozycji niezależne od próby (w teorii)
- Możliwość adaptacyjnego testowania

## Model Rascha (model 1PL)

**Model Rascha** (Georg Rasch, 1960) jest najprostszym modelem IRT. Zakłada, że prawdopodobieństwo poprawnej odpowiedzi zależy tylko od różnicy między zdolnością osoby (θ) a trudnością pozycji (b):

*P(X=1 | θ, b) = exp(θ - b) / [1 + exp(θ - b)]*

Cecha charakterystyczna: model Rascha jest **probabilistycznym modelem addytywnym** — jeśli dane dobrze pasują do modelu, wyniki są mierzalne w sensie Raasha (porównywalne jak temperatura w stopniach Celsjusza, nie tylko w rankingach).

> **Intuicja:** Jeśli zdolność osoby θ = trudność pozycji b, prawdopodobieństwo odpowiedzi poprawnej wynosi 50%. Każde odchylenie o 1 logit zwiększa/zmniejsza prawdopodobieństwo ok. 25 punktów procentowych.

## Model 2PL i 3PL

**Model 2-parametrowy (2PL, Birnbaum)** dodaje parametr dyskryminacji (a) — jak strome jest przejście od małej do dużej szansy odpowiedzi poprawnej. Pozycje z wysoką dyskryminacją lepiej różnicują osoby o zbliżonych zdolnościach.

**Model 3-parametrowy (3PL)** dodaje parametr zgadywania (c) — dolną asymptotę krzywej charakterystycznej pozycji. Stosowany przy testach wyboru, gdzie możliwość zgadywania jest realna.

## Krzywa charakterystyczna pozycji (ICC)

**ICC (Item Characteristic Curve)** to graficzna reprezentacja relacji między zdolnością (θ) a prawdopodobieństwem odpowiedzi poprawnej. Dla modelu Rascha jest to krzywa logistyczna. Analiza ICC pozwala wykrywać pozycje, które zachowują się inaczej dla różnych grup (DIF — Differential Item Functioning).

## Funkcja informacyjna

**Funkcja informacyjna pozycji (IIF)** opisuje, jak precyzyjnie dana pozycja mierzy zdolność w różnych punktach skali. Każda pozycja jest najbardziej informacyjna w okolicach swojej trudności.

**Testowa funkcja informacyjna (TIF)** to suma IIF wszystkich pozycji. Pozwala ocenić, dla jakich poziomów zdolności test jest najdokładniejszy, i dostosować dobór pozycji do zamierzonego celu pomiaru.

## Komputerowe testowanie adaptacyjne (CAT)

**CAT** (Computerized Adaptive Testing) to najważniejsze praktyczne zastosowanie IRT. Komputer dobiera kolejne pytania na podstawie aktualnego szacunku zdolności osoby. Efektem jest:
- Krótszy test (50–60% mniej pozycji) przy tej samej dokładności
- Brak frustracji z pytaniami zbyt łatwymi lub zbyt trudnymi
- Mniejsze ryzyko zmęczenia testowego

Przykłady: GRE, niektóre testy adaptacyjne ADHD i depresji.

## Analiza DIF

**DIF (Differential Item Functioning)** oznacza, że pozycja zachowuje się inaczej dla różnych grup (np. płeć, kultura) po kontroli za poziom zdolności. Jest to wskaźnik stronniczości testu (test bias).

Wykrycie DIF nie zawsze oznacza błąd — pozycja może rzeczywiście mierzyć nieco inną cechę w różnych grupach (impact vs. bias).

## Dopasowanie modelu

Dane empiryczne rzadko idealnie pasują do wybranego modelu IRT. Standardem jest analiza dopasowania (fit statistics):
- **Infit** — ważony przez informację, czuły na anomalie w centrum skali
- **Outfit** — nieważony, czuły na ekstremalne odpowiedzi

Pozycje z nieodpowiednim dopasowaniem powinny być rewizowane lub usunięte.

> **Wybór modelu:** Model Rascha jest bardziej restrykcyjny (zakłada równą dyskryminację pozycji), ale daje mocniejsze właściwości pomiarowe. Modele 2PL/3PL są bardziej elastyczne, ale mogą nadmiernie dopasowywać się do danych. Wybór zależy od celów pomiaru i filozofii pomiarowej.
