# hhuang.github.io

Personal academic website of Harrison Huang, live at [hhuang5163.github.io](https://hhuang5163.github.io).

Built with Jekyll, based on the [academic-homepage](https://github.com/luost26/academic-homepage) template — now heavily customized (see changelog below).

## Structure

| Path | Purpose |
| --- | --- |
| `_data/profile.yml` | Name, bio, "Currently" line, education, experience, awards |
| `_data/highlights.yml` | Homepage highlights strip (short, quantified wins) |
| `_data/facts.yml` | Discover-page gachapon facts (supports `link`/`link_text` cross-links) |
| `_data/navigation.yml` | Navbar pages |
| `_data/display.yml` | Homepage section toggles |
| `_projects/` | Paper cards with abstracts, shown on the Publications page (`publications.html`, at `/publications`; `/projects` redirects there) |
| `_posts/` | Notes/blog posts, rendered at `/notes` (create as `YYYY-MM-DD-title.md`) |
| `_publications/` | Publications collection (homepage Selected Publications; the old year-by-year list in `publications-old.html` is unpublished) |
| `_news/` | News items |
| `_data/talks.yml` | Talks & posters (shown on the Publications page) |
| `discover.html` | Gachapon fun-fact page with capsule collection book |
| `feed.xml` | RSS feed for Notes |
| `sitemap.xml` | Search-engine sitemap |

## Running locally

```bash
bundle install
bundle exec jekyll serve
```

Then browse to the displayed URL (default `http://127.0.0.1:4000`).

## TODO / ideas

- **Interactive gridworld demo** — a small in-browser RL agent walking a gridworld with a
  "summarize this policy" button, as a live demonstration of policy summarization for
  non-expert visitors. The most portfolio-worthy addition, but a real project — build it
  as a standalone JS page (no backend needed) when there's time.
- Fill in `_data/talks.yml` with any missing invited talks/posters and slide/poster PDFs.
- Enable analytics: sign up at [goatcounter.com](https://www.goatcounter.com) and set
  `goatcounter_code` in `_config.yml`.

## Changelog

### 2026-07-19 (later) — Polish, collection book, and academic extras

**Publications**
- Copy-BibTeX button on publication items (add a `bibtex:` block to a publication's
  front matter to enable). PPS entry seeded with the official BibTeX from AAAI (verified
  DOI, volume, pages).
- New "Talks & Posters" section at the bottom of the Publications page, driven by
  `_data/talks.yml`.

**Homepage trim**
- Selected Projects removed from the homepage (kept at `/projects`); Selected
  Publications stays. News trimmed from 10 to 5 items.

**Discover / gacha**
- Capsule collection book: rolled facts fill in a Pokédex-style grid ("Collected X/9"),
  persisted in `localStorage`, with a reset link.
- Rare capsules: every roll has a 5% chance of being golden — special modal styling,
  confetti burst, and a permanent shiny marker in the collection book.

**Site-wide**
- Konami code easter egg (↑↑↓↓←→←→BA): capsule rain on any page (`assets/js/konami.js`).
- `sitemap.xml` (hand-rolled, excludes 404/feeds/template extras).
- GoatCounter analytics hook, disabled until `goatcounter_code` is set in `_config.yml`.

### 2026-07-19 — De-templating and new pages

**Homepage**
- Added a Discover teaser card linking to the gachapon page.
- Added a "Currently" line under the bio (`currently:` in `_data/profile.yml`).
- Added a highlights strip of quantified wins (`_data/highlights.yml`).
- Portrait is now circular with a gradient accent bar (was a square thumbnail).
- Added a "Selected Projects" section (projects with `selected: true`).

**New pages**
- `/projects` — new `_projects` collection with problem → approach → outcome cards, tag badges, and client-side tag filtering. Seeded with PPS (AIES 2024) and the MS thesis.
- `/notes` — blog powered by Jekyll's native `_posts`, with pretty permalinks (`/notes/YYYY/MM/DD/title/`), a card-style post layout (`_layouts/note.html`), and an RSS feed at `/feed.xml`.
- `404.html` — gachapon-themed 404 with a runaway capsule animation.

**Discover page**
- Facts now draw from a shuffle bag (every fact appears once before any repeat; deck persists in `sessionStorage`) instead of uniform `Math.random()`, which allowed streaky repeats.
- Facts support `link`/`link_text` fields; research facts now cross-link to `/projects` and the AIES paper.
- Removed dead commented-out code.

**Site-wide**
- Open Graph / Twitter Card / canonical / description meta tags in `_layouts/default.html` (`url:` set in `_config.yml`).
- RSS `<link>` in the page head.
- Dark mode with a navbar toggle (remembers the choice; defaults to OS `prefers-color-scheme`). Styles in `assets/css/global.css`, toggle in `assets/js/common.js`.
- Gemfile: added `logger`, `base64`, `bigdecimal` (needed by Jekyll 3.x on Ruby ≥ 3.4/4.0, where they left the default gems).
