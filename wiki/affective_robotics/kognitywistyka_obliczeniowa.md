# Kognitywistyka obliczeniowa

## Definicja i zakres

**Kognitywistyka obliczeniowa** (*computational cognitive science*) to dziedzina nauki badająca procesy poznawcze poprzez tworzenie ich formalnych, komputerowych modeli. Celem jest nie tylko wyjaśnienie, jak działa umysł ludzki, ale też budowanie systemów sztucznej inteligencji zdolnych do podobnych operacji.

Kognitywistyka obliczeniowa zakłada, że **poznanie jest obliczeniem** — czyli przetwarzaniem informacji zgodnie z określonymi regułami. Stanowisko to bywa nazywane **hipotezą obliczeniową umysłu** (*Computational Theory of Mind*, Fodor, 1975).

## Główne podejścia teoretyczne

### Symboliczne AI (klasyczne)

Najstarsze podejście zakłada, że myślenie polega na manipulowaniu symbolami według reguł logicznych — analogicznie do formalnego języka. Programy takie jak General Problem Solver (Newell i Simon, 1957) czy systemy eksperckie lat 80. realizowały ten paradygmat.

Ograniczenia: trudność z przetwarzaniem niejednoznaczności, kontekstu i wiedzy niejawnej (*tacit knowledge*).

### Koneksjonizm i sieci neuronowe

Alternatywne podejście inspirowane architekturą mózgu. Wiedza jest przechowywana nie w symbolach, lecz w wagach połączeń między węzłami sieci. Sieci neuronowe uczą się przez przykłady, a nie przez programowanie reguł.

> **Fakt:** Geoffrey Hinton, Yann LeCun i Yoshua Bengio — pionierzy głębokiego uczenia maszynowego — otrzymali w 2018 roku Nagrodę Turinga za wkład, który zrewolucjonizował zarówno AI, jak i kognitywistykę obliczeniową.

### Ucieleśnione poznanie (*embodied cognition*)

Francisco Varela, Evan Thompson i Eleanor Rosch w książce *The Embodied Mind* (1991) zakwestionowali klasyczny paradygmat obliczeniowy: poznanie nie jest oderwane od ciała — jest głęboko zakorzenione w doświadczeniu cielesnym i interakcji ze środowiskiem. To podejście ma fundamentalne znaczenie dla robotyki — uzasadnia projektowanie robotów z ciałem zdolnym do aktywnego eksplorowania środowiska.

### Przetwarzanie predykcyjne (*predictive processing*)

Karl Friston (2010) zaproponował teorię wolnej energii (*free energy principle*): mózg jest maszyną predykcyjną, która nieustannie generuje modele świata i minimalizuje błąd predykcji. Teoria ta integruje percepcję, działanie i uczenie się w jednolity formalny framework.

> **Fakt:** Teoria wolnej energii Fristona jest uważana za jeden z najbardziej ambitnych projektów unifikacji neuronauki i kognitywistyki — jej obliczeniowe implikacje są intensywnie badane w kontekście robotyki autonomicznej.

## Architektury kognitywne

**Architektura kognitywna** to ogólny model procesów poznawczych implementowany jako system komputerowy. Najważniejsze:

### ACT-R (Adaptive Control of Thought — Rational)

Opracowana przez Johna Andersona (Carnegie Mellon University). Modeluje pamięć deklaratywną, proceduralną i percepcję wzrokową. Używana do symulacji zachowania człowieka w testach psychologicznych z bardzo dużą precyzją.

### SOAR

Architektura stworzona przez Allena Newella i Johna Lairdsa. Oparta na mechanizmie *chunking* — tworzenia reguł na podstawie doświadczenia. Stosowana w grach wideo (AI botów) i symulacjach wojskowych.

### CLARION

Model integrujący procesy jawne (symboliczne) i niejawne (subsymboliczne). Szczególnie przydatny do modelowania uczenia się umiejętności.

## Kognitywistyka obliczeniowa a robotyka

Modele kognitywistyki obliczeniowej są bezpośrednio stosowane w robotyce:

- **planowanie i rozwiązywanie problemów** — algorytmy oparte na SOAR i ACT-R
- **uczenie przez wzmacnianie** — robot uczy się optymalnych zachowań metodą prób i błędów
- **rozumienie języka naturalnego** — modele transformerowe (BERT, GPT) oparte na koneksjonizmie
- **percepcja i nawigacja** — sieci neuronowe przetwarzające obraz i dane sensoryczne

## Granice podejścia obliczeniowego

Krytycy kognitywistyki obliczeniowej wskazują na:

- **problem qualiów** — doświadczenie subiektywne (czerwień jest czerwona) nie daje się zredukować do obliczeń
- **problem ramowania** (*frame problem*) — systemy AI mają trudności z określeniem, co jest istotne w danej sytuacji
- **brak sensu** — manipulowanie symbolami nie jest tym samym co ich rozumienie (argument chińskiego pokoju Searle'a)

## Podsumowanie

Kognitywistyka obliczeniowa dostarcza fundamentów teoretycznych dla nowoczesnej AI i robotyki. Jej modele — od architektur symbolicznych przez sieci neuronowe po przetwarzanie predykcyjne — kształtują sposób, w jaki projektujemy maszyny zdolne do rozumowania, uczenia się i interakcji z człowiekiem.
