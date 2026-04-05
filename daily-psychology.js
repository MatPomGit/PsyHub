/* ══════════════════════════════════════════════════
   PSYCHOLOGIA CODZIENNEJ — dane tygodniowe
   Plik: daily-psychology.js
   Każdy wpis zawiera:
     - day:        0=niedziela … 6=sobota (getDay())
     - dayName:    polska nazwa dnia
     - theme:      temat dnia
     - emoji:      ikona dnia
     - curiosity:  { title, lead, body }   ← ciekawostka psychologiczna
     - exercise:   { title, type, steps }  ← ćwiczenie nad sobą
        type: 'reflection' | 'challenge' | 'bodyscan' | 'writing' | 'mindfulness' | 'social' | 'creative'
══════════════════════════════════════════════════ */
(function () {
  'use strict';

  const DAILY_PSYCHOLOGY = [
    /* ─── Niedziela (0) ────────────────────────────── */
    {
      day: 0,
      dayName: 'Niedziela',
      theme: 'Autonarracja i tożsamość',
      emoji: '🌙',
      curiosity: {
        title: 'Narracyjna tożsamość – jesteś historią, którą sobie opowiadasz',
        lead: 'Dan McAdams wykazał, że tożsamość człowieka nie jest gotową „etykietą", lecz żywą opowieścią – personal myth – którą nieustannie piszemy i przepisujemy.',
        body: [
          'Każdy z nas konstruuje wewnętrzną narrację swojego życia: kto jest bohaterem, jakie były zwroty akcji, co nas ukształtowało. Badania McAdamsa pokazują, że osoby psychicznie prężne charakteryzują się historiami z motywem <em>odkupienia</em> – trudne doświadczenia prowadzą do czegoś lepszego – podczas gdy narracje <em>skażenia</em> (dobre zdarzenia kończą się źle) korelują z depresją.',
          'Dla psychologa ta wiedza jest podwójna: rozumiesz mechanizm klientów, ale równie ważne jest uświadomienie sobie własnej narracji. Jak opowiadasz swój wybór zawodu? Czy jest to historia powołania, ucieczki, czy może wciąż niedomkniętego pytania?'
        ]
      },
      exercise: {
        title: 'Trzyzdaniowa historia bohatera',
        type: 'writing',
        intro: 'Niedziela to dobry czas na refleksję, zanim nowy tydzień nabierze własnej dynamiki.',
        steps: [
          'Weź kartkę lub otwórz notatnik. Napisz trzy zdania streszczające swoje życie zawodowe z perspektywy bohatera, który <strong>pokonuje trudności</strong>, a nie ofiary, która im ulega. Zacznij od: <em>„Wybrałem/wybrałam tę drogę, bo…"</em>',
          'Przeczytaj to, co napisałeś/aś, na głos. Co czujesz? Gdzie brzmi prawdziwie, a gdzie czujesz opór?',
          'Dopisz jedno zdanie o tym, co chcesz, by znalazło się w tej historii za rok – nie osiągnięcie, lecz jakość: jak chcesz <em>być</em>, nie co chcesz <em>mieć</em>.',
          '<strong>Refleksja:</strong> Narracja nie jest kłamstwem ani życzeniem – jest soczewką. Zmiana języka, którym opisujesz siebie, realnie zmienia Twoje działania.'
        ]
      }
    },

    /* ─── Poniedziałek (1) ─────────────────────────── */
    {
      day: 1,
      dayName: 'Poniedziałek',
      theme: 'Efekt reflektora i samoświadomość',
      emoji: '🔦',
      curiosity: {
        title: 'Efekt reflektora – inni patrzą na nas o wiele mniej, niż myślimy',
        lead: 'Thomas Gilovich i Kenneth Savitsky (1999) poprosili studentów, by weszli do wypełnionej sali w krępującym t-shircie z Barry Manilowem. Studenci szacowali, że połowa sali to zauważyła – w rzeczywistości mniej niż jedna czwarta.',
        body: [
          'Efekt reflektora (spotlight effect) to tendencja do przeceniania tego, jak bardzo nasza wygląd, zachowanie czy błędy są dostrzegane przez innych. Wynika z czegoś prostego: dla nas samych jesteśmy centrum uwagi, więc zakładamy, że jesteśmy nim dla wszystkich.',
          'W kontekście zawodowym: strach przed oceną kolegów po fachu, wstyd po nieudanej sesji terapeutycznej lub „zły" dzień w pracy – często opierają się na iluzji, że wszyscy to widzą i pamiętają. Efekt reflektora napędza perfekcjonizm, a perfekcjonizm – wypalenie zawodowe.',
          'Wyjście poza własny reflektor to nie cynizm ani obojętność – to uwalniające uznanie, że świat nie obraca się wokół naszych potknięć.'
        ]
      },
      exercise: {
        title: 'Wyjdź spod reflektora',
        type: 'social',
        intro: 'To ćwiczenie może być niekomfortowe – i właśnie o to w nim chodzi.',
        steps: [
          'Wybierz jedno drobne działanie, które normalnie odkładasz przez lęk przed oceną: zagadaj do nieznajomego o drogę, usiądź sam/a w kawiarni bez telefonu i książki, zapytaj o coś głupiego w sklepie.',
          'Zrób to. Obserwuj swoje myśli <em>przed</em>, <em>w trakcie</em> i <em>po</em>.',
          'Wieczorem zapisz: ilu ludzi faktycznie zwróciło na Ciebie uwagę? Jak długo trwał dyskomfort? Co poczułeś/aś, gdy minął?',
          '<strong>Refleksja:</strong> Każde małe wyjście z cienia własnego reflektora wzmacnia odporność na osąd – kluczową kompetencję w pracy psychologa, który musi być obecny dla klienta, nie dla własnego wizerunku.'
        ]
      }
    },

    /* ─── Wtorek (2) ───────────────────────────────── */
    {
      day: 2,
      dayName: 'Wtorek',
      theme: 'Okno tolerancji i regulacja emocjonalna',
      emoji: '🪟',
      curiosity: {
        title: 'Okno tolerancji – gdzie mieszka nasza równowaga',
        lead: 'Dan Siegel wprowadził pojęcie „window of tolerance" – optymalnego pasma pobudzenia, w którym mózg przetwarza doświadczenia efektywnie, bez uciekania w nadmierne pobudzenie lub odrętwienie.',
        body: [
          'Gdy jesteśmy wewnątrz okna: myślimy jasno, czujemy emocje bez bycia przez nie pochłoniętymi, jesteśmy zdolni do empatii i rozwiązywania problemów. Gdy wypadamy <em>powyżej</em> okna (hiperpobudzenie) – pojawia się panika, agresja, chaos myśli. Gdy wypadamy <em>poniżej</em> (hipopobudzenie) – odrętwienie, dysocjacja, pustka.',
          'Dla psychologów i studentów psychologii okno tolerancji jest szczególnie ważne z dwóch powodów: po pierwsze, praca z traumą klientów może nas wytrącać z równowagi; po drugie, presja akademicka i zawodowa stale testuje nasze własne okno. Zrozumienie swoich regulatorów to podstawa higieny psychicznej.',
          '<strong>Sygnały hiperpobudzenia:</strong> napięte ramiona, szybki oddech, gonitwa myśli, drażliwość.<br><strong>Sygnały hipopobudzenia:</strong> zmęczenie bez przyczyny, trudność z koncentracją, poczucie odcięcia od emocji.'
        ]
      },
      exercise: {
        title: 'Skan okna tolerancji',
        type: 'bodyscan',
        intro: 'Potrzebujesz 10 minut i cichego miejsca.',
        steps: [
          'Usiądź wygodnie. Zamknij oczy lub skieruj wzrok na podłogę. Zrób trzy powolne oddechy: wdech 4 sekundy, wydech 6 sekund.',
          'Zeskanuj ciało od stóp do głowy. Pytaj się: <em>Gdzie czuję napięcie? Gdzie czuję ciepło lub spokój? Gdzie czuję pustkę lub odcięcie?</em>',
          'Oceń w skali 1–10 swoje obecne pobudzenie: 1 = całkowite odrętwienie, 10 = pełna panika. Gdzie leży Twoje okno tolerancji dziś?',
          'Jeśli jesteś powyżej okna: 5 powolnych wydechów przez usta. Jeśli poniżej: 10 szybkich przysiadów lub energiczne potrząśnięcie dłońmi.',
          '<strong>Refleksja:</strong> Zapisz, co pomaga Ci wracać do okna. To jest Twój osobisty repertuar regulacji.'
        ]
      }
    },

    /* ─── Środa (3) ───────────────────────────────── */
    {
      day: 3,
      dayName: 'Środa',
      theme: 'Neurony lustrzane i empatia ucieleśniona',
      emoji: '🪞',
      curiosity: {
        title: 'Neurony lustrzane – mózg, który odgrywa cudze emocje',
        lead: 'Giacomo Rizzolatti odkrył w latach 90. komórki nerwowe, które aktywują się zarówno gdy wykonujemy czynność, jak i gdy obserwujemy kogoś innego wykonującego tę samą czynność. Nazwano je neuronami lustrzanymi.',
        body: [
          'Choć ich rola w ludzkiej empatii jest wciąż przedmiotem debat (mózg ludzki jest znacznie bardziej złożony niż mózg makaków, u których dokonano odkrycia), neurony lustrzane stały się metaforą dla <em>ucieleśnionej symulacji</em> – hipotezy, że rozumiemy innych, bo wewnętrznie „odgrywamy" ich stany.',
          'W praktyce klinicznej oznacza to, że empatia nie jest tylko intelektualnym „rozumieniem" klienta. Coś w naszym ciele rezonuje z jego ciałem. Psychologowie często opisują uczucie, że „niosą" emocje klienta po sesji – to właśnie ta rezonans cielesny.',
          'Z tego powodu superwizja i dbałość o własne ciało to nie luksus, lecz narzędzie pracy. Ciało jest pierwszym instrumentem psychologa.'
        ]
      },
      exercise: {
        title: 'Świadome lustrzanie',
        type: 'social',
        intro: 'Ćwiczenie na cały dzień – nie wymaga specjalnego czasu, tylko uwagi.',
        steps: [
          'W pierwszej rozmowie dnia zwróć uwagę nie tylko na <em>słowa</em>, ale na <em>ciało</em> rozmówcy: rytm oddechu, napięcie ramion, tempo mówienia.',
          'Delikatnie (nienachalnie) dopasuj swój rytm oddechu i tempo głosu do rozmówcy. Nie naśladuj ruchów – słuchaj <em>ciałem</em>.',
          'Wieczorem zapisz: Co poczułeś/aś w ciele podczas rozmowy? Czy „zabrałeś/zabrałaś" czyjąś emocję ze sobą? Jak długo trwała?',
          '<strong>Refleksja:</strong> Rozpoznanie rezonansów emocjonalnych to pierwsza linia obrony przed zmęczeniem empatycznym (compassion fatigue). Zanim nauczysz się „zdejmować" emocje klienta, naucz się je rozpoznawać.'
        ]
      }
    },

    /* ─── Czwartek (4) ─────────────────────────────── */
    {
      day: 4,
      dayName: 'Czwartek',
      theme: 'Efekt Pigmaliona i siła oczekiwań',
      emoji: '🌱',
      curiosity: {
        title: 'Efekt Pigmaliona – oczekiwania, które kształtują rzeczywistość',
        lead: 'Robert Rosenthal i Lenore Jacobson wykazali w 1968 roku, że uczniowie, od których nauczyciele oczekiwali większych postępów (nawet bezpodstawnie), faktycznie osiągali lepsze wyniki. Oczekiwania stały się samospełniającą przepowiednią.',
        body: [
          'Mechanizm jest czterostopniowy: (1) mamy oczekiwanie, (2) zmieniamy zachowanie wobec danej osoby (cieplej, z większą uwagą), (3) ona reaguje na to zmienione zachowanie, (4) co potwierdza nasze oczekiwanie. Cykl zamknięty.',
          'Dla psychologa i studenta psychologii ten efekt działa w dwie strony. Wobec klientów: wiara w możliwość zmiany (nawet gdy klient w nią nie wierzy) jest aktywnym czynnikiem terapeutycznym. Wobec siebie: jeśli wierzysz, że „nie jesteś wystarczająco dobry/a", twoje zachowanie zacznie to potwierdzać.',
          'Efekt Pigmaliona w odwrotnym kierunku – tzw. <em>efekt Golema</em> – pokazuje, że niskie oczekiwania wobec siebie lub innych realnie obniżają wyniki. To naukowy argument za pracą nad własnym wewnętrznym krytykiem.'
        ]
      },
      exercise: {
        title: 'List od przyszłego siebie',
        type: 'writing',
        intro: 'Potrzebujesz 15 minut i kartki.',
        steps: [
          'Napisz krótki list do siebie – ale z perspektywy <em>siebie za 5 lat</em>, który/która osiągnął/osiągnęła ważny cel zawodowy lub osobisty.',
          'W liście zawrzyj: co tamten „przyszły Ty" wie teraz, czego Ty dziś nie dostrzegasz? Jakiego wsparcia potrzebowałeś/aś na tej drodze? Co okazało się łatwiejsze niż myślałeś/aś?',
          'Przeczytaj list. Zaznacz jedno zdanie, które najbardziej rezonuje. Wróć do niego wieczorem.',
          '<strong>Refleksja:</strong> Ćwiczenie aktywuje efekt Pigmaliona skierowany ku sobie – tworzysz żywy obraz kompetentnej wersji siebie, co subtelnie wpływa na dzisiejsze decyzje.'
        ]
      }
    },

    /* ─── Piątek (5) ──────────────────────────────── */
    {
      day: 5,
      dayName: 'Piątek',
      theme: 'Sieć trybu domyślnego i moc nicnierobienia',
      emoji: '🌊',
      curiosity: {
        title: 'Sieć trybu domyślnego – mózg, który pracuje na „biegu jałowym"',
        lead: 'Marcus Raichle odkrył, że mózg wcale nie „wypoczywa" gdy nie wykonujemy zadania. Uruchamia się wtedy sieć trybu domyślnego (default mode network, DMN) – i to właśnie wtedy zachodzą procesy kluczowe dla zdrowia psychicznego.',
        body: [
          'DMN jest aktywna podczas błądzenia myślami, fantazjowania, przetwarzania wspomnień i wyobrażania przyszłości. Badania wykazały, że właśnie wtedy mózg konsoliduje wiedzę, przetwarza emocjonalne doświadczenia i buduje spójne poczucie tożsamości.',
          'Paradoks naszych czasów: ciągła stymulacja (smartfon, podcast, powiadomienia) skutecznie blokuje DMN. Studenci psychologii i psychologowie, którzy nie dają sobie czasu na „nicnierobienie", mogą odczuwać chroniczne wyczerpanie właśnie dlatego, że ich mózg nigdy nie dostaje przestrzeni do przetwarzania.',
          'Dobra wiadomość: 20–30 minut dziennie bez bodźców zewnętrznych wystarczy, by DMN mogła zrobić swoje. To nie lenistwo – to higiena neurologiczna.'
        ]
      },
      exercise: {
        title: 'Dwadzieścia minut bez ekranu',
        type: 'mindfulness',
        intro: 'Koniec tygodnia pracy – czas dać mózgowi oddech.',
        steps: [
          'Odłóż telefon, wyłącz muzykę i powiadomienia. Ustaw timer na 20 minut.',
          'Wyjdź na spacer lub usiądź przy oknie. Nie masz zadania. Możesz obserwować, rozmyślać lub po prostu być. Opór, który poczujesz po kilku minutach, jest normalny.',
          'Nie oceniaj, o czym myślisz. Nie planuj celowo. Pozwól umysłowi wędrować.',
          'Po 20 minutach zapisz jedno zdanie: co się pojawiło? Jakiś niezwiązany pomysł? Dawna myśl? Rozwiązanie problemu?',
          '<strong>Refleksja:</strong> Wiele przełomowych obserwacji klinicznych pochodzi z chwil poza gabinetem. Mózg w trybie domyślnym integruje wiedzę, której świadoma analiza nie dosięgnie.'
        ]
      }
    },

    /* ─── Sobota (6) ─────────────────────────────── */
    {
      day: 6,
      dayName: 'Sobota',
      theme: 'Nastawienie na wzrost i strefa komfortu',
      emoji: '🚀',
      curiosity: {
        title: 'Growth mindset – mózg lubi się uczyć na błędach, jeśli mu na to pozwolisz',
        lead: 'Carol Dweck przez dekady badała dwie przekonania o zdolnościach: <em>fixed mindset</em> (zdolności są wrodzone i stałe) i <em>growth mindset</em> (zdolności można rozwijać). Wynik jest jednoznaczny: mindset dosłownie zmienia trajektorię życia.',
        body: [
          'Osoby z fixed mindset unikają wyzwań, bo porażka zagraża ich tożsamości („jestem głupy/a"). Osoby z growth mindset traktują porażkę jako dane – informację zwrotną, nie wyrok. Różnica nie leży w inteligencji, lecz w <em>interpretacji trudności</em>.',
          'Dla psychologów growth mindset jest szczególnie ważny z powodu tzw. <em>syndromu impostora</em> – powszechnego wśród ludzi sukcesu poczucia, że jest się oszustem, który zaraz zostanie zdemaskowany. Badania pokazują, że nawet doświadczeni terapeuci i naukowcy zmagają się z tym przekonaniem.',
          'Neurobiologicznie: gdy popełniamy błąd i traktujemy go jako lekcję, hipokamp koduje to doświadczenie jako wartościowe. Gdy traktujemy błąd jako zagrożenie, ciało migdałowate blokuje przetwarzanie. Mózg dosłownie uczy się lepiej pod jednym warunkiem: bezpieczeństwa porażki.'
        ]
      },
      exercise: {
        title: 'Celowo zrób coś, w czym jesteś kiepski/a',
        type: 'challenge',
        intro: 'To ćwiczenie jest z gatunku „wyjście ze strefy komfortu" – i to jest właśnie jego cel.',
        steps: [
          'Wybierz jedną aktywność, w której jesteś słaby/a i która nie zagraża Twojemu bezpieczeństwu (nowy przepis kulinarny, próba taneczna, rysowanie, gra na instrumencie, nowy sport, pisanie wiersza).',
          'Rób to przez 30 minut. Naprawdę postaraj się – ale bez presji na efekt. Zwróć uwagę: co mówi Twój wewnętrzny krytyk?',
          'Zatrzymaj się i zapisz: jakie zdania pojawiły się w głowie? <em>„Jestem do niczego"</em> czy <em>„To jest trudne, ale mogę się poprawić"</em>? Skąd pochodzi ten głos?',
          'Zakończ ćwiczenie z jednym pozytywnym spostrzeżeniem: czego się <em>nauczyłeś/aś</em>, nawet jeśli efekt był słaby?',
          '<strong>Refleksja:</strong> Sabotażysta wewnętrzny, który pojawia się gdy jesteś kiepski/a w czymś nowym, to ten sam głos, który mówi Twoim klientom, że zmiana jest niemożliwa. Znając go z autopsji, skuteczniej z nim pracujesz w gabinecie.'
        ]
      }
    }
  ];

  window.DAILY_PSYCHOLOGY = DAILY_PSYCHOLOGY;
}());
