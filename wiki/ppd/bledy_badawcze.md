# Typowe błędy badawcze — czego unikać

Błędy w badaniach psychologicznych mogą pojawić się na każdym etapie — od sformułowania pytania badawczego, przez zbieranie i analizę danych, aż po interpretację wyników. Świadomość typowych pułapek to podstawa rzetelnej pracy naukowej.

## Błędy na etapie projektowania badania

### 1. Niejasne lub niefalsyfikowalne pytanie badawcze

**Problem:** Pytanie jest zbyt ogólne (*Jak stres wpływa na człowieka?*) albo sformułowane tak, że każdy wynik je potwierdza.

**Rozwiązanie:** Pytanie badawcze powinno być konkretne, operacjonalne i falsyfikowalne. Dobra hipoteza określa spodziewany kierunek i siłę efektu oraz jest możliwa do odrzucenia przez dane.

---

### 2. Błąd konfirmacji na etapie projektowania (*confirmation bias*)

**Problem:** Badacz projektuje badanie tak, by potwierdzić własne oczekiwania — dobiera próbę, narzędzia i procedurę w sposób, który faworyzuje oczekiwany wynik.

**Rozwiązanie:** Aktywne poszukiwanie możliwości obalenia hipotezy; preregistracja; zasada *falsyfikacji* (Popper).

---

### 3. Brak grupy kontrolnej

**Problem:** W badaniach quasi-eksperymentalnych lub interwencyjnych pominięcie grupy kontrolnej uniemożliwia wnioskowanie przyczynowe.

**Rozwiązanie:** Zawsze planuj grupę porównawczą lub stosuj design z serią pomiarów czasowych (ABAB).

---

### 4. Nieodpowiednia wielkość próby

**Problem:** Za mała próba → niskie prawdopodobieństwo wykrycia realnego efektu (moc statystyczna). Za duża próba → nawet trywialny efekt będzie istotny statystycznie.

**Rozwiązanie:** Przeprowadź **analizę mocy a priori** (G\*Power) i uzasadnij liczebność próby w rozdziale metodologicznym.

---

### 5. Brak randomizacji lub nieadekwatne losowanie

**Problem:** Grupy eksperymentalna i kontrolna różnią się w ważnych cechach (np. nasileniu objawów, poziomie motywacji), co wypacza wyniki.

**Rozwiązanie:** Prawdziwa randomizacja lub — przy braku możliwości — analiza równoważności grup i statystyczna kontrola potencjalnych konfundów.

## Błędy pomiaru

### 6. Efekt sufitu i efekt podłogi

**Problem:** Większość uczestników uzyskuje najwyższe (sufit) lub najniższe (podłoga) możliwe wyniki — brakuje zróżnicowania.

**Rozwiązanie:** Sprawdź w badaniu pilotażowym, czy narzędzie jest odpowiednio dopasowane do grupy. Użyj narzędzi z szerszym zakresem lub dostosuj kryteria włączenia.

---

### 7. Efekt aprobaty społecznej (*social desirability bias*)

**Problem:** Uczestnicy odpowiadają zgodnie z normami społecznymi, a nie zgodnie z rzeczywistością — szczególnie w badaniach o agresji, alkoholu, seksualności.

**Rozwiązanie:** Stosuj skale kłamstwa (np. SDS-17), zapewnij anonimowość, rozważ technikę wywiadu komputerowego (ACASI).

---

### 8. Efekt halo

**Problem:** Ogólna pozytywna lub negatywna ocena uczestnika wpływa na ocenę jego specyficznych cech (dotyczy metod obserwacyjnych i ratingów klinicznych).

**Rozwiązanie:** Blind raters, struktura oceny, szkolenie obserwatorów.

---

### 9. Regresja do średniej

**Problem:** Ekstremalnie wysokie lub niskie wyniki przy pierwszym pomiarze zbliżają się do średniej przy kolejnym pomiarze — niezależnie od interwencji.

**Rozwiązanie:** Dołącz grupę kontrolną; przeprowadź co najmniej dwa pomiary bazowe.

---

### 10. Niespójność pomiędzy badaczami (*inter-rater unreliability*)

**Problem:** Różni oceniający stosują te same kategorie niezgodnie — niespójne dane.

**Rozwiązanie:** Szkolenie i kalibracja przed badaniem, systematyczne obliczanie zgodności (Cohen κ, ICC).

## Błędy w zbieraniu danych

### 11. Atrycja różnicowa (dropout nielosowy)

**Problem:** Osoby, które rezygnują z badania podłużnego lub interwencji, różnią się od tych, które pozostają — co zaburza wyniki.

**Rozwiązanie:** Analiza porównawcza grupy „dropouts" vs. „completers"; metody imputacji; raportowanie atrycji.

---

### 12. Efekt popytu (*demand characteristics*)

**Problem:** Uczestnicy domyślają się hipotezy badania i zachowują się zgodnie z tym, czego — ich zdaniem — badacz oczekuje.

**Rozwiązanie:** Procedury zaślepienia (blind), techniki deception (z pełnym debriefingiem), miary behawioralne zamiast samoopisu.

---

### 13. Contamination i diffusion of treatment

**Problem:** W eksperymentach z randomizacją, uczestnicy z grupy kontrolnej dowiadują się o interwencji i ją stosują (diffusion), lub grupy mają niezamierzony kontakt.

**Rozwiązanie:** Oddzielne lokalizacje lub czasy badania, edukacja uczestników.

## Błędy analityczne

### 14. P-hacking

**Problem:** Wielokrotne analizy, wybór miary, usuwanie outlierów lub dodawanie zmiennych kontrolnych do czasu uzyskania p < 0,05.

**Rozwiązanie:** Preregistracja; korekta na wielokrotne testowanie (Bonferroni, FDR); raportowanie wszystkich przeprowadzonych analiz.

---

### 15. Mylenie korelacji z przyczynowością

**Problem:** Stwierdzenie, że „A powoduje B", gdy dane wskazują tylko na współwystępowanie A i B.

**Rozwiązanie:** Stosuj ostrożny język (*„jest związane z"*, *„przewiduje"*); dla wniosków przyczynowych potrzebny jest eksperyment lub projekt podłużny z modelowaniem przyczynowym.

---

### 16. Ignoring multiplicity — brak korekty przy wielu testach

**Problem:** Przy 20 porównaniach statystycznych, 1 z nich będzie istotne tylko na mocy przypadku (α = 0,05 × 20 = 1 fałszywy pozytyw).

**Rozwiązanie:** Korekta Bonferroniego, poprawka Holma lub kontrola FDR (False Discovery Rate).

---

### 17. Niedostosowanie testu do danych

**Problem:** Zastosowanie testu parametrycznego (t, ANOVA) gdy dane naruszają założenia (normalność, homogeniczność wariancji).

**Rozwiązanie:** Sprawdzaj założenia; stosuj testy nieparametryczne lub transformacje gdy założenia są naruszone.

## Błędy interpretacyjne

### 18. Utożsamianie braku istotności statystycznej z dowodem na brak efektu

**Problem:** *p* > 0,05 nie oznacza, że H0 jest prawdziwa — może to być kwestia małej mocy.

**Rozwiązanie:** Prezentuj przedziały ufności i wielkość efektu; stosuj podejście bayesowskie.

---

### 19. HARKing (Hypothesizing After Results are Known)

**Problem:** Po zobaczeniu wyników badacz formułuje „hipotezy", jakby były planowane a priori.

**Rozwiązanie:** Rozróżniaj wyraźnie analizy planowane (confirmatory) od eksploracyjnych (exploratory).

---

### 20. Overgeneralizacja wyników

**Problem:** Wnioski wykraczają daleko poza badaną próbę (np. wyniki ze studentów psychologii uogólniane na całą populację).

**Rozwiązanie:** Precyzyjnie opisuj, na kogo wyniki są możliwe do uogólnienia i jakie są ograniczenia ekologicznej trafności.

## Podsumowanie

Znajomość typowych błędów badawczych nie ma na celu demotywowania — żadne badanie nie jest idealne. Chodzi o to, by popełniać błędy *świadomie* i *uczciwie je raportować*. Praca, która rzetelnie opisuje swoje ograniczenia, jest wartościowsza niż ta, która udaje perfekcję.
