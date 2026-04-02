# PsyHub — Portal Wiedzy Psychologicznej

A static single-page application (SPA) for browsing a Polish-language encyclopedia of psychology and neuropsychology.

## Running locally

The app uses `fetch()` to load Markdown articles, so it **requires an HTTP server** — it cannot be opened directly as a `file://` URL.

Any simple static server works:

```bash
# Python 3
python3 -m http.server 8080

# Node.js (npx)
npx serve .
```

Then open `http://localhost:8080` in your browser.

## Project structure

```
PsyHub/
├── index.html        — HTML shell (no inline CSS or JS)
├── style.css         — All styles
├── app.js            — Application logic (IIFE, no global pollution)
├── site-config.js    — Navigation, article registry, wiki encyclopedias
├── anime.min.js      — Anime.js animation library (local copy)
├── assets/           — Favicon and logo images
├── labs/             — Supplementary PDF/DOCX materials
├── wiki/             — Markdown articles organised by domain
│   ├── cognitive/
│   ├── neuro/
│   ├── psychopathology/
│   └── … (31 domain folders, 303 articles)
└── tools/
    ├── konwerter.py      — One-time UTF-8 conversion utility for .md files
    └── setup_psyhub.bat  — Windows script that scaffolds the wiki directory tree
```

## Adding content

### New article

1. Create a Markdown file under the relevant `wiki/<domain>/` folder.
2. In `site-config.js`, add an entry to:
   - `nav` — so it appears in the sidebar.
   - `plans.<domain>` — so it appears in the domain plan list.
   - `wikis.<key>` — so it appears in the encyclopedia index.

### New domain / encyclopedia

Follow the same pattern as an existing domain (e.g. `cognitive`):
- Add a nav section to `SITE_CONFIG.nav`.
- Add a `plans.<domain>` array to `SITE_CONFIG.plans`.
- Add a `wikis.<key>` object to `SITE_CONFIG.wikis` and a `wiki-index/<key>` nav entry.

## Markdown features

The built-in renderer (`md2html` in `app.js`) supports:

| Syntax | Output |
|--------|--------|
| `# … ####` | Headings h1–h4 |
| `**bold**` / `*italic*` | Bold / italic |
| `` `code` `` | Inline code |
| ` ```…``` ` | Fenced code block |
| `[text](url)` | Link (http/https/# only) |
| `> quote` | Blockquote |
| `- item` / `1. item` | Unordered / ordered list |
| `---` | Horizontal rule |
| Pipe tables | HTML table |

> **Note:** A blank line is required before a list that follows a regular paragraph, otherwise the list renders as escaped text inside a `<p>` tag.

