/* ══════════════════════════════════════════════════
   TESTY TEORETYCZNE — konfiguracja modułu
   Plik: theoretical-test.js
   Zawiera listę dostępnych tematów testów.
   Pytania ładowane są dynamicznie z plików JSON.
══════════════════════════════════════════════════ */
(function () {
  'use strict';

  window.THEORETICAL_TEST = {
    topics: [
      {
        key: 'diagnoza_psychologiczna',
        label: 'Diagnoza psychologiczna',
        file: 'tests/diagnoza_psychologiczna.json',
        icon: '🔬'
      }
      /* kolejne moduły będą dodawane tutaj */
    ]
  };
})();
