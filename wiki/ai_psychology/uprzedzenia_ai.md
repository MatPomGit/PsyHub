# Uprzedzenia i błędy poznawcze w AI

## Wprowadzenie: AI jako lustro ludzkich uprzedzeń

Systemy sztucznej inteligencji nie istnieją w próżni — są tworzone przez ludzi, trenowane na danych wytworzonych przez ludzi i wdrażane w kontekstach społecznych uformowanych przez ludzkie decyzje. Nie powinno zatem dziwić, że przejmują one i często wzmacniają uprzedzenia obecne w tych danych i procesach. Co więcej, algorytmy mogą nadawać tym uprzedzeniom nowy, groźniejszy wymiar: pozór obiektywności, naukowego autorytetu i nieuchronności.

Zrozumienie uprzedzeń algorytmicznych wymaga zarówno technicznej wiedzy o tym, jak systemy uczą się z danych, jak i psychologicznej wiedzy o tym, jak ludzkie uprzedzenia wnikają do tych danych i jak ludzie reagują na stronnicze systemy AI.

> **Fakt:** Badanie przeprowadzone przez ProPublica w 2016 roku ujawniło, że algorytm COMPAS, używany w amerykańskich sądach do oceny ryzyka recydywy, był dwukrotnie bardziej skłonny błędnie klasyfikować czarnych oskarżonych jako wysokie ryzyko niż białych — co wywołało ogólnonarodową debatę o algorytmicznej sprawiedliwości.

## Czym są uprzedzenia algorytmiczne?

Uprzedzenie algorytmiczne (algorithmic bias) to systematyczne odchylenie wyników systemu AI od sprawiedliwości lub dokładności, które dotyka w nieproporcjonalny sposób określone grupy lub jednostki. Wyróżniamy kilka głównych kategorii:

### Uprzedzenia w danych (data bias)

Najczęstsze źródło stronniczości AI. Jeśli dane treningowe odzwierciedlają historyczne nierówności, system nauczy się je odtwarzać i utrwalać. Przykłady obejmują:

- Systemy rekrutacyjne trenowane na danych z firm historycznie zatrudniających głównie mężczyzn, które „uczą się" preferować kandydatów płci męskiej
- Systemy rozpoznawania twarzy trenowane głównie na twarzach osób o jasnej karnacji, które gorzej rozpoznają osoby ciemnoskóre
- Algorytmy medyczne trenowane na próbach klinicznych zdominowanych przez mężczyzn, które gorzej diagnozują choroby u kobiet

### Uprzedzenia w projektowaniu (design bias)

Wynikają z wyborów projektantów: co mierzyć, jakie zmienne uwzględnić, jaki cel zoptymalizować. Te wybory zawierają nieuchronnie założenia wartościujące, które mogą faworyzować jedne grupy kosztem innych.

### Uprzedzenia oceniającego (evaluation bias)

Pojawiają się gdy benchmarki i miary sukcesu systemu są same w sobie stronnicze lub nie uwzględniają potrzeb wszystkich grup użytkowników.

## Błędy poznawcze wzmacniane przez AI

AI nie tylko przejmuje ludzkie uprzedzenia — interakcja z systemami AI aktywuje i wzmacnia specyficzne błędy poznawcze u użytkowników:

### Błąd potwierdzenia (confirmation bias)

Algorytmy personalizacji dostarczają użytkownikom treści spójnych z ich istniejącymi przekonaniami, tworząc bańki informacyjne. Użytkownik, który nie jest świadomy tego mechanizmu, odbiera stream informacji jako obiektywny obraz rzeczywistości, co wzmacnia jego dotychczasowe poglądy.

### Błąd automatyzacyjny (automation bias)

Opisana wcześniej tendencja do bezkrytycznego przyjmowania rekomendacji systemów automatycznych. W kontekście AI jest szczególnie podstępny, bo systemy AI często wyglądają bardziej kompetentnie niż są w rzeczywistości — generują pewne, dobrze sformułowane odpowiedzi nawet gdy się mylą.

### Iluzja głębi wyjaśnienia (illusion of explanatory depth)

Użytkownicy AI często przeceniają swoje rozumienie działania systemu. Prosta wizualizacja lub wyjaśnienie daje złudzenie rozumienia mechanizmu, podczas gdy rzeczywista logika pozostaje nieprzejrzysta.

### Błąd zakotwiczenia (anchoring bias)

Pierwsza rekomendacja AI staje się punktem odniesienia dla dalszych ocen, nawet jeśli jest błędna. Badania wykazują, że lekarze korzystający z systemów diagnostycznych AI trudniej odchodzą od pierwszej sugestii systemu, nawet gdy nowe informacje wskazują na inną diagnozę.

> **Fakt:** Eksperyment przeprowadzony przez badaczy z Harvardu wykazał, że studenci medycyny, którym pokazano diagnozę AI przed badaniem przypadku, rzadziej samodzielnie dochodzili do prawidłowej diagnozy niż studenci nieznający sugestii algorytmu — nawet gdy sugestia AI była błędna.

## Psychologiczne mechanizmy powstawania danych stronniczych

Dane, na których uczą się systemy AI, są produktem ludzkiej aktywności — a ludzka aktywność jest przesiąknięta uprzedzeniami. Kluczowe mechanizmy to:

1. **Uprzedzenia przeszłości**: dane historyczne kodują nierówności z przeszłości — nawet jeśli te nierówności były niesprawiedliwe, algorytm traktuje je jako normatywny wzorzec
2. **Efekt pomiaru selektywnego**: rejestrujemy i przechowujemy dane o jednych zjawiskach (np. aresztowaniach) łatwiej niż o innych (np. przestępstwach bez aresztu), co tworzy systematyczne zniekształcenie
3. **Autoprofetyczne przepowiednie**: algorytm przewidujący, że dana osoba jest ryzykowna, może prowadzić do zachowań, które zwiększają to ryzyko (np. częstsze kontrole policji)
4. **Nierówna reprezentacja w danych**: grupy mniejszościowe są często niedostatecznie reprezentowane w zbiorach danych, co prowadzi do gorszej wydajności systemu dla tych grup

## Wpływ uprzedzeń algorytmicznych na różne grupy

Skutki uprzedzeń algorytmicznych są nierówno rozłożone i dotykają najbardziej grupy już marginalizowane:

- **Kobiety**: systemy rekrutacyjne i oceny kredytowej mogą dyskryminować na podstawie płci
- **Osoby ciemnoskóre**: systemy rozpoznawania twarzy, oceny ryzyka prawnego i algorytmy medyczne wykazują gorszą dokładność
- **Osoby o niskich dochodach**: algorytmy finansowe mogą utrwalać cykle ubóstwa
- **Osoby z niepełnosprawnościami**: interfejsy AI często nie są dostępne, a algorytmy nie uwzględniają specyficznych potrzeb
- **Grupy LGBTQ+**: systemy mogą wnioskować o orientacji seksualnej z danych, naruszając prywatność

## Psychologia odbioru uprzedzeń algorytmicznych

Interesującym zagadnieniem jest to, jak ludzie reagują na informację o uprzedzeniach algorytmicznych. Badania wskazują na kilka wzorców:

### Asymetria oceny: algorytmy kontra ludzie

Ludzie oceniają uprzedzenia systemów AI i uprzedzenia ludzkich ekspertów różnymi miarami. Gdy ekspert ludzki popełni błąd wynikający z uprzedzeń, reakcja jest łagodniejsza niż gdy to samo uprzedzenie ujawnia algorytm. Paradoksalnie, od maszyn oczekuje się wyższej bezstronności niż od ludzi.

### Efekt autorytetu algorytmu

Gdy decyzja jest przedstawiana jako wynik „obiektywnego algorytmu", ludzie rzadziej ją kwestionują i rzadziej szukają odwołania. Ten efekt jest szczególnie niebezpieczny w kontekstach prawnych i administracyjnych.

### Fatalizm algorytmiczny

Część użytkowników — szczególnie z grup marginalizowanych — wykazuje postawę „i tak nie ma sensu walczyć z algorytmem", co utrudnia dochodzenie sprawiedliwości.

> **Fakt:** Badanie opublikowane w Nature Human Behaviour wykazało, że ludzie są bardziej skłonni zaakceptować niesprawiedliwą decyzję algorytmu niż taką samą niesprawiedliwą decyzję podjętą przez człowieka — nawet gdy algorytm został im przedstawiony jako stronniczy.

## Podejścia do redukcji uprzedzeń algorytmicznych

Eliminacja uprzedzeń algorytmicznych jest technicznie i społecznie skomplikowana, ale istnieje szereg podejść:

### Techniczne podejścia do fairness

- Rebalansowanie zbiorów danych (oversampling grup niedoreprezentowanych)
- Algorytmy korygujące bias (debiasing techniques)
- Wielokryteriowe miary sprawiedliwości uwzględniające różne grupy
- Regularne audyty sprawiedliwości systemów

### Psychologiczne i organizacyjne podejścia

- Szkolenia dla twórców AI w zakresie świadomości uprzedzeń
- Włączenie zróżnicowanych zespołów do projektowania systemów
- Procedury oceny wpływu na równość (Algorithmic Impact Assessment)
- Mechanizmy odwołania od decyzji algorytmicznych

### Regulacyjne podejścia

- Europejski Akt o AI wprowadza obowiązki przejrzystości dla systemów wysokiego ryzyka
- Prawo do wyjaśnienia decyzji algorytmicznych (RODO, artykuł 22)
- Obowiązkowe audyty dla AI stosowanej w obszarach kredytów, pracy i wymiaru sprawiedliwości

## Podsumowanie

Uprzedzenia algorytmiczne to jedno z najpilniejszych wyzwań w obszarze AI i psychologii. Rozumienie ich źródeł — zakorzenionych zarówno w danych, jak i w ludzkich procesach poznawczych — jest niezbędnym krokiem do projektowania sprawiedliwych systemów. Psychologia dostarcza tu nieocenionej perspektywy: zarówno w wyjaśnianiu, jak uprzedzenia wnikają do AI, jak i w rozumieniu tego, jak wpływają na ludzi, którzy są ich ofiarami lub narzędziami ich utrwalania.
