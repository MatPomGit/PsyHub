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
      },
      {
        key: 'psychopatologia',
        label: 'Psychopatologia',
        file: 'tests/psychopatologia.json',
        icon: '🧩'
      },
      {
        key: 'psychoterapia',
        label: 'Psychoterapia',
        file: 'tests/psychoterapia.json',
        icon: '🛋️'
      },
      {
        key: 'psychologia_spoleczna',
        label: 'Psychologia społeczna',
        file: 'tests/psychologia_spoleczna.json',
        icon: '👥'
      },
      {
        key: 'neuropsychologia',
        label: 'Neuropsychologia',
        file: 'tests/neuropsychologia.json',
        icon: '🧠'
      },
      {
        key: 'psychologia_poznawcza',
        label: 'Psychologia poznawcza',
        file: 'tests/psychologia_poznawcza.json',
        icon: '💡'
      }
    ]
  };
})();
