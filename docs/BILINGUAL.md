# English and Chinese homepage

- The root URL `/` always serves English. No browser-language redirect, preference cookie or localStorage is used.
- `/zh-cn/` serves Simplified Chinese; both routes are generated as static HTML and switching uses ordinary links.
- The header has an outlined English / Chinese button group. Both languages remain visible; the current language has a dark selected state. The links switch between the two routes. A small enhancement preserves the current section hash when JavaScript is enabled.
- Both routes use src/components/HomePage.astro, keeping section order, layout, image framing and visibility settings in sync.
- Interface text and language metadata live in src/i18n.ts. English profile strings still use src/config.ts.
- English content remains in src/data/. Chinese content uses matching files in src/data/zh-cn/. Keep factual changes and new records synchronized in both directories; never translate placeholder records into actual achievements.
- Real publication titles, author names, DOI and source links should retain their published form in both languages.
- Canonical URLs, HTML language tags, reciprocal hreflang links and Open Graph locales are generated for both pages. The existing preview noindex setting is retained.
- The owner-confirmed identity is Ph.D. Student @ HUST; the Chinese equivalent is used on the Chinese page. No advisor, department, dates or academic achievements have been inferred.
- Previous production commit: b8ec22a2aef7a2471bd5592c6f4eba234b061dcc. Revert the bilingual release commit to restore the previous single-language site.
