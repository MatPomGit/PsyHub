# Analizy statystyczne w badaniach psychologicznych

Statystyki są narzędziem — nie celem pracy magisterskiej. Celem jest odpowiedź na pytania badawcze, a statystyki są językiem, w którym ta odpowiedź jest formułowana. Wybór właściwych analiz jest równie ważny jak poprawne ich wykonanie.

## Planowanie analiz przed zbieraniem danych

**Preregistracja analiz** (przed zebraniem danych) to rosnący standard w psychologii. Polega na publicznym zapisaniu planowanych hipotez, metody i analiz (np. w OSF — Open Science Framework) przed zebraniem danych. Chroni przed **p-hackingiem** i zwiększa wiarygodność wyników.

Nawet bez preregistracji warto przed badaniem zaplanować:
- Jakie testy zastosujemy do każdej hipotezy?
- Jakie będą zmienne niezależne, zależne i kontrolne?
- Czy będziemy przeprowadzać analizy moderacji/mediacji?
- Jak postąpimy z wartościami odstającymi (outliers)?

## Statystyki opisowe

Zawsze zacznij od statystyk opisowych. Dla każdej zmiennej ciągłej oblicz:
- **Średnią arytmetyczną (M)**
- **Odchylenie standardowe (SD)**
- **Minimum i maksimum**
- **Skośność i kurtozę** (wskaźniki normalności rozkładu)

Dla zmiennych kategorycznych: **częstości** i **odsetki (%)**.

## Sprawdzanie założeń

Większość testów parametrycznych (t, ANOVA, regresja) wymaga spełnienia założeń:

| Założenie | Test/sprawdzenie |
|-----------|-----------------|
| Normalność rozkładu | Shapiro-Wilk (n < 50), K-S, histogram, Q-Q plot |
| Homogeniczność wariancji | Levene'a, Bartletta |
| Liniowość relacji | Wykres rozproszenia, kwadratura reszt |
| Niezależność obserwacji | Wynika z projektu badania |
| Brak multikolinearności (regresja) | VIF < 10, tolerancja > 0,1 |

Naruszenie założenia wymaga albo **transformacji danych** (logarytm, pierwiastek), albo zastosowania **testów nieparametrycznych**.

## Testy istotności — kiedy stosować?

### Porównanie grup

| Sytuacja | Test parametryczny | Test nieparametryczny |
|----------|-------------------|----------------------|
| 2 grupy niezależne | t-test dla prób niezależnych | U Manna-Whitneya |
| 2 grupy zależne (pomiary powtórzone) | t-test dla prób zależnych | Wilcoxona |
| 3+ grupy niezależne | ANOVA jednokierunkowa | Kruskala-Wallisa |
| 3+ grupy, czynnik powtórzony | ANOVA z pomiarami powtórzonymi | Friedmana |
| 2 czynniki | ANOVA dwuczynnikowa | — |

### Zależności między zmiennymi

| Sytuacja | Test |
|----------|------|
| Dwie zmienne ciągłe | Korelacja r Pearsona |
| Dwie zmienne porządkowe | Korelacja ρ Spearmana lub τ Kendalla |
| Dwie zmienne nominalne | Chi-kwadrat (χ²) |
| Predykcja liniowa | Regresja prosta lub wielokrotna |
| Mediacja, moderacja | Regresja z bootstrappingiem (PROCESS, lavaan) |
| Zmienne binarne | Regresja logistyczna |

## Wielkość efektu (effect size)

**Wartość p mówi nam, czy efekt istnieje. Wielkość efektu mówi nam, jak duży jest.**

Raportowanie wyłącznie wartości p bez wielkości efektu jest niewystarczające i coraz częściej krytykowane.

| Test | Miara wielkości efektu | Interpretacja |
|------|------------------------|---------------|
| t-test | Cohen's d | 0,2 mały; 0,5 średni; 0,8 duży |
| ANOVA | η² (eta kwadrat) / ω² | 0,01; 0,06; 0,14 |
| Korelacja | r | 0,10; 0,30; 0,50 |
| Regresja | R², ΔR² | — |
| Chi-kwadrat | Cramér's V, φ | 0,10; 0,30; 0,50 |

## Przedziały ufności

Podawaj **95% przedziały ufności (CI)** dla kluczowych parametrów. Przedziały ufności mówią, w jakim zakresie znajduje się prawdziwa wartość parametru z 95% prawdopodobieństwem. Wąski CI = precyzyjny oszacunek. Jeśli CI dla różnicy nie zawiera 0, efekt jest istotny statystycznie.

## Programy statystyczne

| Program | Zalety | Dostęp |
|---------|--------|--------|
| **SPSS** | Intuicyjny interfejs graficzny, popularny w Polsce | Płatny (licencje uczelniane) |
| **R + RStudio** | Bezpłatny, elastyczny, publikowalne skrypty | Bezpłatny |
| **Jamovi** | Intuicyjny, bezpłatny, oparty na R | Bezpłatny |
| **JASP** | Statystyki bayesowskie i klasyczne | Bezpłatny |
| **PROCESS (Hayes)** | Mediacja, moderacja w SPSS/R | Bezpłatny plugin |

> **Wskazówka:** Jamovi i JASP to doskonałe alternatywy dla SPSS — bezpłatne, łatwe i produkujące tabele gotowe do wklejenia do pracy.

## Raportowanie wyników statystycznych (styl APA)

Standardowe raportowanie w stylu APA 7:

- **t-test:** *t*(df) = wartość, *p* = wartość, *d* = wartość, 95% CI [dolny, górny]
- **ANOVA:** *F*(df_between, df_within) = wartość, *p* = wartość, η² = wartość
- **Korelacja:** *r*(df) = wartość, *p* = wartość, 95% CI [dolny, górny]
- **Regresja:** *b* = wartość, *SE* = wartość, *β* = wartość, *t*(df) = wartość, *p* = wartość

Przykład: *Uczestnicy w grupie eksperymentalnej uzyskali istotnie wyższe wyniki (M = 42,3, SD = 8,1) niż w grupie kontrolnej (M = 36,7, SD = 9,4), t(148) = 3,72, p = 0,003, d = 0,64, 95% CI [2,5, 8,7].*

## Tabele i wykresy

- Każda tabela i wykres powinny mieć **numer i opis** (zgodnie z APA 7)
- Tabele: unikaj pionowych linii; użyj poziomych linii wyłącznie w nagłówkach i stopce
- Wykresy: osie z opisami i jednostkami; legenda; brak zbędnych „śmieci" graficznych (*chart junk*)
- Zawsze podawaj *n* w grupach

## Statystyki bayesowskie

Alternatywa dla klasycznych testów istotności — Bayesian Factor (BF) mówi, ile razy bardziej prawdopodobna jest hipoteza badawcza niż zerowa przy zaobserwowanych danych. BF > 3 wspiera H1, BF < 1/3 wspiera H0. Dostępne w JASP.

## Podsumowanie

Analiza statystyczna wymaga planowania, znajomości założeń i odpowiedniego raportowania. Nie wystarczy „wrzucić danych do SPSS-a" — każda decyzja analityczna powinna być świadoma i uzasadniona. Wyniki należy interpretować nie tylko przez pryzmat *p*, ale też wielkości efektu, przedziałów ufności i kontekstu teoretycznego.
