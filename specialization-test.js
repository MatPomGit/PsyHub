(function(){
  const SPECIALTIES = [
    { key: 'kliniczna', name: 'Psychologia kliniczna', color: '#b86b7b', desc: 'Diagnoza, interwencja i wsparcie osób z zaburzeniami psychicznymi.' },
    { key: 'neuro', name: 'Neuropsychologia', color: '#5b8cb8', desc: 'Praca na styku neurologii, poznania i rehabilitacji funkcji mózgowych.' },
    { key: 'psychoterapia', name: 'Psychoterapia', color: '#5a9e6f', desc: 'Długofalowa praca relacyjna i procesowa z pacjentem.' },
    { key: 'sadowa', name: 'Psychologia sądowa', color: '#8b7ab8', desc: 'Ocena ryzyka, opiniowanie i decyzje osadzone w prawie.' },
    { key: 'dziecieca', name: 'Psychologia dzieci i młodzieży', color: '#4a9b9b', desc: 'Wsparcie rozwoju i współpraca z rodziną oraz szkołą.' },
    { key: 'zdrowia', name: 'Psychologia zdrowia', color: '#c9a227', desc: 'Łączenie wiedzy psychologicznej i medycznej w opiece nad pacjentem.' }
  ];

  const AXES = [
    { key: 'conservatism_acceptance', left: 'Konserwatyzm', right: 'Akceptacja' },
    { key: 'law_compassion', left: 'Prawo', right: 'Współczucie' },
    { key: 'comfort_ambition', left: 'Wygoda', right: 'Ambicja' }
  ];

  const q = (id, text, options) => ({ id, text, options });

  const QUESTIONS = [
    q(1, 'Na praktykach widzisz pacjenta po urazie głowy, który upiera się, że „wszystko pamięta”, ale dane z testów temu przeczą. Co najbardziej Cię angażuje?', [
      { text: 'Ustalenie, które funkcje poznawcze są zaburzone — nawet jeśli wyniki okażą się niejednoznaczne i trudne do zinterpretowania.', scores: { neuro: 3, kliniczna: 1 }, axes: { comfort_ambition: 1 } },
      { text: 'Zastanawiam się, jak przekazać diagnozę, nie niszcząc nadziei pacjenta — nawet jeśli wiąże się to z przemilczeniem niektórych wyników.', scores: { psychoterapia: 2, kliniczna: 1 }, axes: { law_compassion: 1 } },
      { text: 'Ocena, czy może bezpiecznie wrócić do pracy — choć mam świadomość, że moja ocena może wpłynąć na jego utrzymanie lub zwolnienie.', scores: { sadowa: 2, zdrowia: 1 }, axes: { conservatism_acceptance: -1, law_compassion: -1 } },
      { text: 'Rozmowa z rodziną o wsparciu — nawet jeśli rodzina nie chce słyszeć o długofalowych ograniczeniach.', scores: { dziecieca: 1, zdrowia: 2 }, axes: { law_compassion: 1 } },
      { text: 'Zastanawiam się, czy warto podważać przekonania pacjenta, skoro stabilna tożsamość może być dla niego ważniejsza niż trafna diagnoza.', scores: { psychoterapia: 2, neuro: 1 }, axes: { conservatism_acceptance: 1, law_compassion: 1 } },
      { text: 'Szukam kompromisu między rzetelnością wyników a dobrostanem emocjonalnym pacjenta — nawet jeśli muszę złagodzić wnioski.', scores: { zdrowia: 2, kliniczna: 1 }, axes: { comfort_ambition: -1, law_compassion: 1 } }
    ]),
    q(2, 'W badaniu klinicznym nowej interwencji część uczestników poprawia się mimo placebo. Co robisz najpierw?', [
      { text: 'Analizuję, czy efekt może wynikać z relacji terapeutycznej — co rodzi pytanie, czy sama terapia w ogóle jest potrzebna.', scores: { psychoterapia: 2, kliniczna: 1 }, axes: { comfort_ambition: 1 } },
      { text: 'Sprawdzam model statystyczny — choć zastanawiam się, czy wyniki nie są zbyt wygodne, by je kwestionować.', scores: { neuro: 2, zdrowia: 1 }, axes: { comfort_ambition: 1 } },
      { text: 'Pytam, czy protokół spełnia wymogi etyczno-prawne — nawet jeśli formalnie tak, a pacjenci i tak nie rozumieją, na co się zgodzili.', scores: { sadowa: 2, kliniczna: 1 }, axes: { law_compassion: -1 } },
      { text: 'Interesuje mnie, jak efekt placebo wykorzystać psychoedukacyjnie — choć zastanawiam się, czy to nie jest forma manipulacji.', scores: { zdrowia: 2, dziecieca: 1 }, axes: { law_compassion: 1 } },
      { text: 'Zastanawiam się, czy nie należy ujawnić wyników i zrezygnować z dalszych prób — nawet kosztem obiecującego projektu.', scores: { sadowa: 1, kliniczna: 2 }, axes: { law_compassion: -1, conservatism_acceptance: -1 } },
      { text: 'Szukam sposobu, by wyniki trafiły do pacjentów w przystępnej formie — nawet jeśli może to wpłynąć na ich oczekiwania wobec terapii.', scores: { dziecieca: 1, psychoterapia: 2 }, axes: { conservatism_acceptance: 1, law_compassion: 1 } }
    ]),
    q(3, 'Rodzic prosi, by „nie wpisywać wszystkiego” do opinii o dziecku, bo boi się stygmatyzacji. Twoja reakcja?', [
      { text: 'Wyjaśniam granice formalne i dokumentuję pełny obraz — choć wiem, że opinia może zaszkodzić dziecku w przyszłości.', scores: { sadowa: 2, dziecieca: 1 }, axes: { law_compassion: -1, conservatism_acceptance: -1 } },
      { text: 'Szukam języka, który zachowuje rzetelność, ale minimalizuje etykietowanie — nawet jeśli wymaga to pewnych uproszczeń.', scores: { dziecieca: 3 }, axes: { conservatism_acceptance: 1, law_compassion: 1 } },
      { text: 'Proponuję diagnozę funkcjonalną i plan wsparcia — zanim finalizuję wnioski, których rodzic może nie zaakceptować.', scores: { kliniczna: 2, neuro: 1 }, axes: { comfort_ambition: 1 } },
      { text: 'Skupiam się na zasobach rodziny, odkładając trudne wnioski diagnostyczne na późniejszy etap współpracy.', scores: { psychoterapia: 2, dziecieca: 2 }, axes: { law_compassion: 1 } },
      { text: 'Rozważam, czy częściowe pominięcie informacji może być etyczne, jeśli chroni dziecko przed piętnem w systemie edukacji.', scores: { dziecieca: 2, psychoterapia: 1 }, axes: { conservatism_acceptance: 1, law_compassion: 1 } },
      { text: 'Informuję rodzica o konsekwencjach niepełnej dokumentacji — łącznie z tym, że może to utrudnić dziecku dostęp do pomocy.', scores: { sadowa: 2, zdrowia: 1 }, axes: { law_compassion: -1, conservatism_acceptance: -1 } }
    ]),
    q(4, 'W oddziale psychiatrycznym pacjent odmawia leków i chce wypisu, choć jego stan jest niestabilny. Co uważasz za priorytet?', [
      { text: 'Bezpieczeństwo — nawet jeśli oznacza to zatrzymanie osoby wbrew jej woli i trwały uszczerbek dla zaufania do służby zdrowia.', scores: { kliniczna: 2, sadowa: 2 }, axes: { law_compassion: -1, conservatism_acceptance: -1 } },
      { text: 'Pogłębiona rozmowa o lękach — nawet jeśli zajmuje czas, który można poświęcić innym pacjentom w gorszym stanie.', scores: { psychoterapia: 2, zdrowia: 1 }, axes: { law_compassion: 1 } },
      { text: 'Oceniam, czy odmowa wynika z zaburzeń poznawczych — mając świadomość, że wynik może być narzędziem do uzasadnienia przymusu.', scores: { neuro: 2, kliniczna: 1 }, axes: { comfort_ambition: 1 } },
      { text: 'Pracuję nad planem po wypisie — choć zdaję sobie sprawę, że pacjent może i tak zrezygnować z leczenia po opuszczeniu oddziału.', scores: { zdrowia: 2, dziecieca: 1 }, axes: { comfort_ambition: 1 } },
      { text: 'Rozważam, czy respektowanie autonomii pacjenta jest ważniejsze niż krótkoterminowe bezpieczeństwo — nawet jeśli rodzina się z tym nie zgadza.', scores: { psychoterapia: 2, sadowa: 1 }, axes: { conservatism_acceptance: 1, law_compassion: 1 } },
      { text: 'Badam, jakie wsparcie środowiskowe mogłoby skłonić pacjenta do współpracy — zamiast eskalować do procedur przymusowych.', scores: { zdrowia: 2, kliniczna: 1 }, axes: { law_compassion: 1, conservatism_acceptance: 1 } }
    ]),
    q(5, 'Masz wybrać temat pracy magisterskiej. Który najbardziej Cię „ciągnie”?', [
      { text: 'Biomarkery neurozapalne — choć wyniki mogą okazać się niejednoznaczne lub trudne do zastosowania klinicznie.', scores: { neuro: 3, zdrowia: 1 }, axes: { comfort_ambition: 1 } },
      { text: 'Skuteczność interwencji krótkoterminowej — przy świadomości, że wyniki zależą od tego, jak mierzysz „skuteczność”.', scores: { kliniczna: 2, psychoterapia: 1 }, axes: { comfort_ambition: 1 } },
      { text: 'Różnice w orzecznictwie przy ocenie poczytalności — temat kontrowersyjny i politycznie wrażliwy.', scores: { sadowa: 3 }, axes: { law_compassion: -1 } },
      { text: 'Czynniki chroniące dobrostan uczniów — choć trudno zmierzyć długofalowy wpływ takich interwencji.', scores: { dziecieca: 2, zdrowia: 1 }, axes: { conservatism_acceptance: 1 } },
      { text: 'Wpływ diagnozy psychiatrycznej na postrzeganie pacjenta przez rodzinę — bo etykieta może leczyć i krzywdzić jednocześnie.', scores: { kliniczna: 1, psychoterapia: 2 }, axes: { conservatism_acceptance: 1, law_compassion: 1 } },
      { text: 'Doświadczenie psychologów pracujących w warunkach chronicznego niedoboru zasobów — bo system zdrowia stawia nas przed wyborami moralnymi.', scores: { zdrowia: 2, kliniczna: 1 }, axes: { comfort_ambition: -1, law_compassion: 1 } }
    ]),
    q(6, 'W scenariuszu kryzysowym nastolatek ujawnia samookaleczenia i prosi: „nie mów nikomu”. Co robisz?', [
      { text: 'Uruchamiam procedury interwencji — choć wiem, że może to trwale zniszczyć zaufanie nastolatka do dorosłych.', scores: { dziecieca: 2, sadowa: 1, kliniczna: 1 }, axes: { law_compassion: -1 } },
      { text: 'Najpierw stabilizuję emocje i negocjuję kolejne kroki — mając świadomość, że czas może działać na niekorzyść.', scores: { psychoterapia: 2, dziecieca: 1 }, axes: { law_compassion: 1 } },
      { text: 'Analizuję poziom ryzyka narzędziami diagnostycznymi — choć żaden test nie zastąpi oceny kontekstu.', scores: { kliniczna: 2, neuro: 1 }, axes: { comfort_ambition: 1 } },
      { text: 'Organizuję sieć wsparcia — nawet jeśli włączenie rodziny może być źródłem problemu, nie jego rozwiązaniem.', scores: { zdrowia: 2, dziecieca: 2 }, axes: { law_compassion: 1 } },
      { text: 'Staram się zrozumieć funkcję samookaleczenia, zanim cokolwiek zrobię — bo interwencja bez zrozumienia może zaszkodzić.', scores: { psychoterapia: 3 }, axes: { conservatism_acceptance: 1, law_compassion: 1 } },
      { text: 'Informuję nastolatka, że nie mogę zachować tajemnicy — ale obiecuję, że będę przy nim podczas rozmowy z rodzicem.', scores: { dziecieca: 2, sadowa: 1 }, axes: { law_compassion: 1, conservatism_acceptance: -1 } }
    ]),
    q(7, 'Która sytuacja zawodowa daje Ci najwięcej satysfakcji?', [
      { text: 'Widzę poprawę wyników poznawczych — choć czasem nie wiem, czy to zasługa terapii, czy naturalnej remisji.', scores: { neuro: 3 }, axes: { comfort_ambition: 1 } },
      { text: 'Pacjent po miesiącach terapii inaczej rozumie emocje — nawet jeśli zmiana jest ledwo zauważalna dla otoczenia.', scores: { psychoterapia: 3 }, axes: { law_compassion: 1 } },
      { text: 'Moja opinia pomaga sądowi — choć zdaję sobie sprawę, że może też zostać wykorzystana w sposób, którego nie przewidywałem.', scores: { sadowa: 3 }, axes: { law_compassion: -1, conservatism_acceptance: -1 } },
      { text: 'Rodzina uczy się wspierać chorego — nawet jeśli wymaga to trudnych rozmów o granicach i oczekiwaniach.', scores: { zdrowia: 2, dziecieca: 1 }, axes: { conservatism_acceptance: 1 } },
      { text: 'Pacjent odchodzi bez diagnozy, ale z lepszym rozumieniem siebie — choć to trudno wpisać w dokumentację.', scores: { psychoterapia: 2, kliniczna: 1 }, axes: { conservatism_acceptance: 1, law_compassion: 1 } },
      { text: 'Udaje mi się utrzymać granicę między profesjonalizmem a empatią — nawet kiedy sytuacja jest wyjątkowo trudna emocjonalnie.', scores: { kliniczna: 2, zdrowia: 1 }, axes: { comfort_ambition: 1, law_compassion: 1 } }
    ]),
    q(8, 'Podczas superwizji słyszysz dwie skrajne interpretacje przypadku. Jak reagujesz?', [
      { text: 'Dopytuję o dane obiektywne — choć wiem, że każde narzędzie ma ograniczenia i może prowadzić do różnych wniosków.', scores: { kliniczna: 2, neuro: 1 }, axes: { law_compassion: -1 } },
      { text: 'Sprawdzam, która interpretacja lepiej chroni dobro pacjenta — choć obie strony uważają, że właśnie o to im chodzi.', scores: { psychoterapia: 2, zdrowia: 1 }, axes: { law_compassion: 1 } },
      { text: 'Przypominam o odpowiedzialności prawnej — nawet jeśli formalny wymóg kłóci się z intuicją kliniczną.', scores: { sadowa: 2, kliniczna: 1 }, axes: { law_compassion: -1 } },
      { text: 'Szukam rozwiązania łączącego perspektywę dziecka, rodziny i instytucji — nawet jeśli żadna ze stron nie jest w pełni zadowolona.', scores: { dziecieca: 2, zdrowia: 1 }, axes: { conservatism_acceptance: 1 } },
      { text: 'Zawieszam ocenę i sugeruję zebranie dodatkowych danych — wiedząc, że to może opóźnić pomoc pacjentowi.', scores: { neuro: 2, kliniczna: 1 }, axes: { comfort_ambition: 1, conservatism_acceptance: -1 } },
      { text: 'Otwarcie mówię, że obie interpretacje mogą być częściowo trafne — i że potrzeba więcej pokory wobec złożoności człowieka.', scores: { psychoterapia: 2, zdrowia: 1 }, axes: { conservatism_acceptance: 1, law_compassion: 1 } }
    ]),
    q(9, 'Co bardziej Cię przekonuje w praktyce klinicznej?', [
      { text: 'Dobrze udokumentowany mechanizm neurobiologiczny — choć zastanawiam się, czy redukcja człowieka do mózgu to nie zbyt duże uproszczenie.', scores: { neuro: 2, zdrowia: 1 }, axes: { comfort_ambition: 1 } },
      { text: 'Stabilna relacja terapeutyczna — nawet jeśli zmiana jest wolna i trudna do zmierzenia zewnętrznymi narzędziami.', scores: { psychoterapia: 2, kliniczna: 1 }, axes: { law_compassion: 1 } },
      { text: 'Rozwiązanie minimalizujące ryzyko błędu prawnego — choć nie zawsze jest ono najlepsze dla konkretnego człowieka.', scores: { sadowa: 2, kliniczna: 1 }, axes: { law_compassion: -1 } },
      { text: 'Interwencja możliwa do wdrożenia w szkole lub poradni — nawet jeśli kompromis oznacza rezygnację z optymalnego podejścia.', scores: { dziecieca: 2, zdrowia: 1 }, axes: { comfort_ambition: -1 } },
      { text: 'Podejście, które angażuje pacjenta jako współautora planu — nawet jeśli to wydłuża proces i komplikuje pracę zespołową.', scores: { psychoterapia: 2, zdrowia: 1 }, axes: { conservatism_acceptance: 1, law_compassion: 1 } },
      { text: 'Interwencja oparta na dowodach, która działa dla większości — nawet jeśli dla konkretnego pacjenta może nie być odpowiednia.', scores: { kliniczna: 2, neuro: 1 }, axes: { comfort_ambition: 1, conservatism_acceptance: -1 } }
    ]),
    q(10, 'Gdy słyszysz „pacjent niestosujący się do zaleceń”, pierwsza myśl to:', [
      { text: 'Trzeba zbadać funkcje wykonawcze — choć wynik może być użyty do przesunięcia odpowiedzialności z systemu na pacjenta.', scores: { neuro: 2, kliniczna: 1 }, axes: { conservatism_acceptance: 1 } },
      { text: 'Zalecenia były niedopasowane — ale to trudno przyznać głośno, gdy wystawił je starszy kolega lub lekarz.', scores: { psychoterapia: 2, zdrowia: 1 }, axes: { law_compassion: 1, conservatism_acceptance: 1 } },
      { text: 'Należy jasno określić konsekwencje — choć zastanawiam się, czy podejście karne wzmacnia czy osłabia współpracę terapeutyczną.', scores: { sadowa: 2 }, axes: { law_compassion: -1, conservatism_acceptance: -1 } },
      { text: 'Trzeba włączyć bliskich i zbudować system wsparcia — nawet jeśli pacjent tego nie chce i traktuje to jako naruszenie prywatności.', scores: { zdrowia: 2, dziecieca: 1 }, axes: { law_compassion: 1 } },
      { text: 'Zastanawiam się, czy „niestosowanie się” to opór, wybór, czy wołanie o pomoc, na które nikt nie odpowiedział.', scores: { psychoterapia: 3 }, axes: { conservatism_acceptance: 1, law_compassion: 1 } },
      { text: 'Pytam, czy system opieki stworzył realną szansę na stosowanie się — czy tylko pozory takiej szansy.', scores: { zdrowia: 2, kliniczna: 1 }, axes: { conservatism_acceptance: 1, law_compassion: 1 } }
    ]),
    q(11, 'W zespole pojawia się konflikt: terapeuta chce długiej terapii, lekarz szybkiej stabilizacji farmakologicznej. Co robisz?', [
      { text: 'Wybieram ścieżkę najszybciej redukującą ryzyko — nawet jeśli oznacza to pominięcie zdania terapeuty i preferencji pacjenta.', scores: { kliniczna: 2, zdrowia: 1 }, axes: { law_compassion: -1 } },
      { text: 'Mediuję, by połączyć oba podejścia — choć wiem, że kompromis może nie być optymalny z żadnej perspektywy.', scores: { zdrowia: 2, psychoterapia: 1 }, axes: { law_compassion: 1, comfort_ambition: 1 } },
      { text: 'Pilnuję zgodności z przepisami — nawet jeśli procedura kłóci się z tym, co jest najlepsze dla pacjenta w tej chwili.', scores: { sadowa: 2, kliniczna: 1 }, axes: { law_compassion: -1 } },
      { text: 'Sprawdzam, jak decyzja wpłynie na rodzinę i szkołę — choć zdaję sobie sprawę, że to może być postrzegane jako wykraczanie poza rolę.', scores: { dziecieca: 2, psychoterapia: 1 }, axes: { conservatism_acceptance: 1 } },
      { text: 'Pytam pacjenta, jakie ma własne oczekiwania — nawet jeśli jego zdanie skomplikuje negocjacje w zespole.', scores: { psychoterapia: 2, zdrowia: 1 }, axes: { conservatism_acceptance: 1, law_compassion: 1 } },
      { text: 'Proponuję plan etapowy: farmakoterapia jako pomost do terapii, ale z jasnym harmonogramem — by nikt nie czuł się pominięty.', scores: { zdrowia: 2, kliniczna: 1 }, axes: { comfort_ambition: 1, conservatism_acceptance: 1 } }
    ]),
    q(12, 'Wybierz środowisko pracy, które brzmi dla Ciebie najbardziej naturalnie:', [
      { text: 'Oddział neurologii i pracownia testów — choć praca tam wymaga dystansu emocjonalnego, który bywa trudny do utrzymania.', scores: { neuro: 3 }, axes: { comfort_ambition: 1 } },
      { text: 'Gabinet psychoterapeutyczny — nawet jeśli proces jest długi, drogi i dostępny tylko dla wybranych.', scores: { psychoterapia: 3 }, axes: { law_compassion: 1 } },
      { text: 'Sąd lub zespół opiniodawczy — wiedząc, że moje słowa mogą decydować o wolności lub losie człowieka.', scores: { sadowa: 3 }, axes: { law_compassion: -1 } },
      { text: 'Poradnia i szkoła — gdzie działam systemowo, nawet jeśli efekty są rozproszone i trudne do zmierzenia.', scores: { dziecieca: 2, zdrowia: 2 }, axes: { conservatism_acceptance: 1 } },
      { text: 'Środowisko badawcze, gdzie moje odkrycia mogą zmienić praktykę — nawet jeśli praca jest oderwana od bezpośredniego kontaktu z pacjentami.', scores: { neuro: 2, kliniczna: 1 }, axes: { comfort_ambition: 1, conservatism_acceptance: -1 } },
      { text: 'Organizacja pozarządowa lub system pomocy społecznej — choć wiem, że brakuje tam zasobów i często pracuje się na granicy możliwości.', scores: { zdrowia: 2, dziecieca: 2 }, axes: { comfort_ambition: -1, law_compassion: 1 } }
    ]),
    q(13, 'Pacjent pyta, czy „to na pewno diagnoza, a nie etykietka”. Co odpowiadasz najchętniej?', [
      { text: 'Diagnoza to narzędzie robocze — choć wiem, że raz postawiona może przykleić się do człowieka na całe życie.', scores: { kliniczna: 2, zdrowia: 1 }, axes: { comfort_ambition: 1 } },
      { text: 'To hipoteza weryfikowana z doświadczeniem pacjenta — nawet jeśli wymaga gotowości do jej zakwestionowania.', scores: { psychoterapia: 2, neuro: 1 }, axes: { conservatism_acceptance: 1 } },
      { text: 'To dokument o znaczeniu prawnym — więc wymaga precyzji, nawet jeśli precyzja jest tu złudzeniem.', scores: { sadowa: 2, kliniczna: 1 }, axes: { law_compassion: -1 } },
      { text: 'Najważniejsze, żeby nie zamykała drogi — nawet jeśli musisz poświęcić trochę dokładności diagnostycznej.', scores: { dziecieca: 2, zdrowia: 1 }, axes: { conservatism_acceptance: 1 } },
      { text: 'Nie wiem, odpowiadam szczerze — i właśnie w tej niepewności jest coś uczciwego.', scores: { psychoterapia: 2, zdrowia: 1 }, axes: { conservatism_acceptance: 1, law_compassion: 1 } },
      { text: 'To zależy od kontekstu — ta sama diagnoza bywa wsparciem lub bronią w zależności od tego, kto jej używa i po co.', scores: { sadowa: 1, kliniczna: 2 }, axes: { conservatism_acceptance: 1, law_compassion: 1 } }
    ]),
    q(14, 'Który obszar wiedzy rozwijał(a)byś najchętniej przez kolejne lata?', [
      { text: 'Anatomia funkcjonalna i neuroobrazowanie — choć to wiedza, która podnosi prestiż bardziej niż skuteczność kliniczna.', scores: { neuro: 3 }, axes: { comfort_ambition: 1 } },
      { text: 'Modele zmiany i techniki prowadzenia procesu — bo zmiana człowieka jest bardziej złożona niż jakikolwiek protokół.', scores: { psychoterapia: 3 }, axes: { comfort_ambition: 1 } },
      { text: 'Etyka biegłego i standardy dowodowe — bo praca w tym obszarze stawia trudne pytania bez jednoznacznych odpowiedzi.', scores: { sadowa: 3 }, axes: { law_compassion: -1 } },
      { text: 'Psychoprofilaktyka i praca systemowa — choć efekty widać dopiero po latach i trudno je przypisać konkretnym działaniom.', scores: { zdrowia: 2, dziecieca: 1 }, axes: { comfort_ambition: 1 } },
      { text: 'Traumatologia i psychologia kryzysu — bo coraz więcej ludzi trafia do gabinetu z ranami, na które brakuje dobrych odpowiedzi.', scores: { kliniczna: 2, psychoterapia: 1 }, axes: { comfort_ambition: 1, law_compassion: 1 } },
      { text: 'Psychologia kulturowa i wpływ środowiska społecznego — bo indywidualna diagnoza bez kontekstu systemowego jest niepełna.', scores: { zdrowia: 2, dziecieca: 1 }, axes: { conservatism_acceptance: 1, law_compassion: 1 } }
    ]),
    q(15, 'W niejednoznacznej sytuacji etycznej częściej kierujesz się:', [
      { text: 'Zasadą minimalizacji szkody — choć to, co wydaje się mniejszą szkodą, bywa subiektywne i zależy od punktu widzenia.', scores: { kliniczna: 2, zdrowia: 1 }, axes: { law_compassion: -1 } },
      { text: 'Dobrem relacji i podmiotowością pacjenta — nawet jeśli to utrudnia współpracę z instytucją lub rodziną.', scores: { psychoterapia: 2, dziecieca: 1 }, axes: { law_compassion: 1, conservatism_acceptance: 1 } },
      { text: 'Literalną zgodnością z przepisami — bo przynajmniej ta granica jest sprawdzalna, choć niekoniecznie słuszna moralnie.', scores: { sadowa: 3 }, axes: { law_compassion: -1, conservatism_acceptance: -1 } },
      { text: 'Rozwiązaniem, które da się utrzymać długofalowo — nawet jeśli w krótkim terminie jest mniej satysfakcjonujące.', scores: { dziecieca: 2, zdrowia: 1 }, axes: { comfort_ambition: -1 } },
      { text: 'Głosem sumienia, nawet jeśli jest on sprzeczny z procedurami — bo procedury tworzy się dla typowych przypadków, a etykę dla wyjątków.', scores: { psychoterapia: 2, kliniczna: 1 }, axes: { conservatism_acceptance: 1, law_compassion: 1 } },
      { text: 'Pytaniem, czyje interesy są tu naprawdę chronione — i czy moje działanie służy pacjentowi, instytucji, czy przede wszystkim mnie.', scores: { sadowa: 1, zdrowia: 2 }, axes: { conservatism_acceptance: 1, law_compassion: 1 } }
    ]),
    q(16, 'Zespół prosi Cię o „szybki werdykt” bez pełnych danych. Co robisz?', [
      { text: 'Odmawiam kategorycznych wniosków — choć wiem, że moja ostrożność może zostać odebrana jako brak zaangażowania.', scores: { kliniczna: 2, neuro: 1 }, axes: { comfort_ambition: 1 } },
      { text: 'Przedstawiam roboczą hipotezę — wiedząc, że w praktyce „tymczasowe” wnioski mają tendencję do stałości.', scores: { psychoterapia: 2, zdrowia: 1 }, axes: { conservatism_acceptance: 1 } },
      { text: 'Przypominam o wadliwości prawnej niepełnej opinii — nawet jeśli to nie jest tym, czego w tej chwili potrzebuje pacjent.', scores: { sadowa: 2 }, axes: { law_compassion: -1 } },
      { text: 'Szukam kompromisu: tymczasowe wsparcie i plan monitoringu — choć wiem, że może nie wystarczyć.', scores: { dziecieca: 1, zdrowia: 2 }, axes: { law_compassion: 1 } },
      { text: 'Pytam, dlaczego brakuje danych i czy presja czasu nie jest wynikiem problemów systemowych, a nie realnej konieczności.', scores: { zdrowia: 2, sadowa: 1 }, axes: { conservatism_acceptance: 1, law_compassion: 1 } },
      { text: 'Zgadzam się na wstępną ocenę, ale zaznaczam jej ograniczenia na piśmie — by zabezpieczyć siebie i pacjenta.', scores: { kliniczna: 2, sadowa: 1 }, axes: { law_compassion: -1, comfort_ambition: -1 } }
    ]),
    q(17, 'Gdybyś miał(a) wybrać jedną „trudną” kompetencję do opanowania, byłaby to:', [
      { text: 'Interpretacja danych neuropsychologicznych — choć różnicowanie źródeł deficytów bywa niemożliwe bez dodatkowych badań.', scores: { neuro: 3 }, axes: { comfort_ambition: 1 } },
      { text: 'Prowadzenie rozmowy z osobą, która chce i boi się zmiany jednocześnie — bo taka ambiwalencja jest normą, nie wyjątkiem.', scores: { psychoterapia: 3 }, axes: { law_compassion: 1 } },
      { text: 'Bezstronne wydawanie opinii mimo presji stron — choć pełna bezstronność jest prawdopodobnie nieosiągalna.', scores: { sadowa: 3 }, axes: { law_compassion: -1 } },
      { text: 'Koordynowanie współpracy między pacjentem, rodziną i instytucjami — bo każda ze stron ma inne oczekiwania i interesy.', scores: { dziecieca: 2, zdrowia: 2 }, axes: { comfort_ambition: 1 } },
      { text: 'Utrzymanie granic terapeutycznych, gdy pacjent staje się kimś ważnym — bo granica między zaangażowaniem a uwikłaniem bywa cienka.', scores: { psychoterapia: 2, kliniczna: 1 }, axes: { conservatism_acceptance: 1, law_compassion: 1 } },
      { text: 'Powiedzenie „nie wiem” z przekonaniem — bez udawania pewności, której nie mam, i bez utraty autorytetu w oczach pacjenta.', scores: { kliniczna: 2, zdrowia: 1 }, axes: { conservatism_acceptance: 1, law_compassion: 1 } }
    ]),
    q(18, 'Masz ograniczony czas. Co robisz w pierwszej kolejności?', [
      { text: 'Priorytetyzuję objawy alarmowe i bezpieczeństwo — nawet jeśli pacjent woli rozmawiać o czymś innym.', scores: { kliniczna: 2, zdrowia: 1 }, axes: { law_compassion: -1 } },
      { text: 'Wybieram pytania budujące zaufanie — wiedząc, że bez niego żadne dane diagnostyczne nie będą pełne.', scores: { psychoterapia: 2, dziecieca: 1 }, axes: { law_compassion: 1 } },
      { text: 'Ustalam fakty istotne dla odpowiedzialności prawnej — nawet jeśli pacjent oczekuje czegoś zupełnie innego.', scores: { sadowa: 2 }, axes: { law_compassion: -1 } },
      { text: 'Oceniam gotowość do zmiany i zasoby wsparcia — choć często są to pytania, na które nie ma prostych odpowiedzi.', scores: { zdrowia: 2, dziecieca: 1 }, axes: { conservatism_acceptance: 1 } },
      { text: 'Pytam pacjenta, co w tej chwili jest dla niego najważniejsze — nawet jeśli to odwróci moją wstępną agendę spotkania.', scores: { psychoterapia: 2, zdrowia: 1 }, axes: { conservatism_acceptance: 1, law_compassion: 1 } },
      { text: 'Staram się nie udawać, że godzinne spotkanie wystarczy, i otwarcie rozmawiam o ograniczeniach tego, co możemy razem zrobić.', scores: { kliniczna: 1, zdrowia: 2 }, axes: { comfort_ambition: -1, law_compassion: 1 } }
    ]),
    q(19, 'Które zdanie jest Ci najbliższe?', [
      { text: 'Dobra diagnoza to taka, którą da się obronić na danych — choć dane to tylko część opowieści o człowieku.', scores: { neuro: 2, kliniczna: 1 }, axes: { comfort_ambition: 1 } },
      { text: 'Dobra diagnoza otwiera drogę do realnej zmiany — choć droga ta bywa kręta i niewidoczna w krótkim horyzoncie.', scores: { psychoterapia: 2, zdrowia: 1 }, axes: { law_compassion: 1 } },
      { text: 'Dobra diagnoza wytrzyma próbę procedury i prawa — choć prawo bywa w tyle za rozumieniem człowieka.', scores: { sadowa: 3 }, axes: { law_compassion: -1 } },
      { text: 'Dobra diagnoza to taka, którą rozumie pacjent i jego bliscy — nawet jeśli wymaga uproszczenia.', scores: { dziecieca: 2, zdrowia: 1 }, axes: { conservatism_acceptance: 1 } },
      { text: 'Dobra diagnoza to taka, która pozwala pacjentowi żyć — nie tylko przeżywać system opieki.', scores: { psychoterapia: 2, zdrowia: 1 }, axes: { conservatism_acceptance: 1, law_compassion: 1 } },
      { text: 'Dobra diagnoza nie zamyka — zostawia miejsce na zmianę, wątpliwości i rewizję wraz z pacjentem.', scores: { psychoterapia: 1, kliniczna: 2 }, axes: { conservatism_acceptance: 1, comfort_ambition: 1 } }
    ]),
    q(20, 'Po pięciu latach pracy chcesz móc powiedzieć:', [
      { text: 'Rozumiem mechanizmy mózg–zachowanie — choć to rozumienie bywa bardziej intelektualną satysfakcją niż realną pomocą.', scores: { neuro: 2, kliniczna: 1 }, axes: { comfort_ambition: 1 } },
      { text: 'Pomagam ludziom zmieniać życie — wiedząc, że zmiana jest rzadka, wolna i nigdy nie jest tylko moja zasługa.', scores: { psychoterapia: 3 }, axes: { law_compassion: 1 } },
      { text: 'Podejmuję trudne decyzje i biorę za nie odpowiedzialność — nawet jeśli społeczeństwo oceni je różnie.', scores: { sadowa: 3 }, axes: { law_compassion: -1, conservatism_acceptance: -1 } },
      { text: 'Łączę wiedzę psychologiczną i zdrowotną, by wzmacniać codzienne funkcjonowanie — nawet jeśli to praca bez spektakularnych efektów.', scores: { zdrowia: 2, dziecieca: 1 }, axes: { comfort_ambition: 1 } },
      { text: 'Zachowałem(am) w sobie ciekawość i szacunek wobec pacjenta — bo wypalenie byłoby zdradą własnych wartości.', scores: { psychoterapia: 2, zdrowia: 1 }, axes: { conservatism_acceptance: 1, law_compassion: 1 } },
      { text: 'Zadaję pytania, na które nie ma łatwych odpowiedzi — i uczę się z każdej sytuacji, w której uprzednio zakładałem(am), że wiem lepiej.', scores: { kliniczna: 2, neuro: 1 }, axes: { comfort_ambition: 1, conservatism_acceptance: 1 } }
    ])
  ];

  function evaluate(answers) {
    const specialtyScores = Object.fromEntries(SPECIALTIES.map(s => [s.key, 0]));
    const axisScores = Object.fromEntries(AXES.map(a => [a.key, 0]));

    for (let i = 0; i < QUESTIONS.length; i += 1) {
      const selectedIndex = answers[i];
      if (typeof selectedIndex !== 'number') continue;
      const opt = QUESTIONS[i]?.options[selectedIndex];
      if (!opt) continue;
      for (const [spec, val] of Object.entries(opt.scores || {})) specialtyScores[spec] += val;
      for (const [axis, val] of Object.entries(opt.axes || {})) axisScores[axis] += val;
    }

    const ranking = SPECIALTIES.map(s => ({ ...s, score: specialtyScores[s.key] }))
      .sort((a, b) => b.score - a.score);
    const maxScore = Math.max(...ranking.map(r => r.score), 1);
    const percentages = ranking.map(r => ({ ...r, percent: Math.round((r.score / maxScore) * 100) }));
    const recommended = percentages[0];

    const axisResults = AXES.map(axis => {
      const value = axisScores[axis.key] || 0;
      const normalized = Math.max(-100, Math.min(100, value * 8));
      return { ...axis, value: normalized };
    });

    return { recommended, ranking: percentages, axes: axisResults };
  }

  window.SPECIALIZATION_TEST = { SPECIALTIES, AXES, QUESTIONS, evaluate };
})();
