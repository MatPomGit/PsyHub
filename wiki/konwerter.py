#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import os
import sys

# Spróbuj zaimportować chardet (opcjonalnie) – jeśli brak, użyj prostszej metody
try:
    import chardet
    HAS_CHARDET = True
except ImportError:
    HAS_CHARDET = False
    print("Uwaga: biblioteka 'chardet' nie jest zainstalowana. "
          "Będzie używana domyślna metoda z zastępowaniem błędnych znaków.",
          file=sys.stderr)

def detect_encoding(filepath):
    """Zwraca kodowanie pliku na podstawie analizy bajtów (jeśli chardet dostępny)."""
    if HAS_CHARDET:
        with open(filepath, 'rb') as f:
            raw = f.read(10000)  # odczytaj początek pliku
            result = chardet.detect(raw)
            return result['encoding']
    return None

def convert_to_utf8(filepath):
    """Konwertuje plik do UTF-8, nadpisując go."""
    # 1. Spróbuj wykryć kodowanie źródłowe (jeśli mamy chardet)
    src_encoding = detect_encoding(filepath)

    # 2. Odczytaj zawartość z odpowiednim kodowaniem
    try:
        if src_encoding:
            with open(filepath, 'r', encoding=src_encoding) as f:
                content = f.read()
        else:
            # jeśli nie wykryto, spróbuj z utf-8 i zamień niepoprawne znaki na �
            with open(filepath, 'r', encoding='utf-8', errors='replace') as f:
                content = f.read()
    except Exception as e:
        print(f"Błąd odczytu {filepath}: {e}")
        return False

    # 3. Zapisz jako UTF-8
    try:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Przekonwertowano: {filepath} (kodowanie źródłowe: {src_encoding or 'utf-8 (z replace)'})")
        return True
    except Exception as e:
        print(f"Błąd zapisu {filepath}: {e}")
        return False

def main():
    # Pobierz katalog, w którym znajduje się skrypt (lub bieżący)
    start_dir = os.path.dirname(os.path.abspath(__file__))
    print(f"Przeszukiwanie katalogu: {start_dir}")

    count = 0
    for root, dirs, files in os.walk(start_dir):
        for file in files:
            if file.endswith('.md'):
                filepath = os.path.join(root, file)
                if convert_to_utf8(filepath):
                    count += 1

    print(f"\nZakończono. Przetworzono {count} plik(ów) .md.")

if __name__ == "__main__":
    main()