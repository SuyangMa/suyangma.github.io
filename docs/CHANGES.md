# Approved homepage changes

## 2026-11-21: Portrait

- Replaced initials avatar with the owner-supplied portrait.
- Removed EXIF/XMP/IPTC metadata before adding the source to the repository; original JPEG scan data and ICC color profile are retained. Desktop original was not changed.
- Astro generates responsive WebP images at 192, 304, and 456 pixels wide (8-28 KB).
- Preserved the square avatar frame and positioned the photo at 50% / 20% to include both faces.
- No other visual features were added.
- Astro check: zero errors. Production build and optimized image assertions passed.
- Previous deployed baseline is retained as v0-live-base. Revert the portrait commit to undo only this change.

## 2026-11-21: Approved larger portrait and profile layout

- Published the owner-approved local preview from commits 1a05e76 and 5b9f432.
- Enlarged the portrait from 96-152px to 220-320px square while retaining the original 8px corners, object-fit cover and 50% / 20% framing. The source JPEG and person/corgi proportions are unchanged.
- Placed the photo to the left of the profile and links, with natural wrapping on compact screens.
- Responsive WebP sources now use 320, 640 and 960px widths.
- Previous production state: 5aad405f0b5ebc8f96ab9522c0f24204e308717b. Revert this layout commit to restore it; no Pages settings changes are needed.

## 2026-11-21: Confirmed academic identity

- Updated the homepage subtitle and author bio to the owner-confirmed "Ph.D. Student @ HUST".
- Updated the page description to use the same identity.
- Previous production state: 1e2aa804663af436788b2c0a1e24e59677d7f12e. Revert this identity commit to restore it.

## 2026-11-21: Portrait site icons

- Replaced template favicons and mobile home-screen icons with the owner's existing homepage portrait, preserving its square framing and rounded corners.
- Added a root favicon.ico fallback and versioned icon URLs to refresh cached template icons.
- scripts/generate-favicons.mjs reproduces all icon sizes from the unchanged sanitized portrait source using the existing Sharp dependency.
- Previous production state: b32a0720eb5ddf378a044d9cccb47a1cf92fda95. Revert this icon commit to restore it.

## 2026-11-21: English and Chinese pages

- Added an independent Simplified Chinese route at /zh-cn/ and a header language switch, following the referenced site's English/Chinese page pattern.
- Root URL stays English without automatic language detection or preference redirects. Switching preserves the current section hash when JavaScript is available.
- Translated navigation, profile identity, section headings, placeholder records, accessibility labels and page metadata. Updated the English introduction to the confirmed doctoral-student identity.
- Shared the page component between languages; existing portrait framing and favicon assets are unchanged.
- Added reciprocal alternate-language links and language-specific document metadata.
- Maintenance instructions: docs/BILINGUAL.md. Previous production commit: b8ec22a2aef7a2471bd5592c6f4eba234b061dcc.

## 2026-11-21: Visible language buttons

- Replaced the subtle single language link with an outlined English / Chinese button group, with both languages visible and the current language highlighted.
- Preserved native links, keyboard focus styling and section hashes on both options.
- Allowed the header to wrap naturally so controls remain visible on narrow screens.
- Previous production commit: 8d9d8f80b6a0fd48b6fc0445154757fa3921564e.

## 2026-11-21: Approved bilingual biography

- Replaced the introductory paragraphs in both languages with the owner's approved biography: doctoral student at HUST advised by Professor Yu Zhang, B.Eng. from CUMT, and research interests in high-performance systems for LLM agents.
- Removed the Preview notice from the introduction. Other placeholder records and the existing indexing setting are unchanged.
- Previous production commit: fdb3d259e325a9d721e9f58f1c78f2d07a343994. Revert this biography commit to restore it.

## 2026-11-21: Emphasize research interests

- Bolded the research-interest phrase in both English and Chinese biographies, preserving the approved wording.
- Previous production commit: 7ce4b103c3555c1331ce3f589f6d864e779d1208.

## 2026-11-22: First publication and acceptance News

- Replaced publication placeholders with the verified SSI paper (DOI 10.1360/SSI-2026-0127) in both languages.
- Added the owner-corrected, publisher-verified 2026.09.09 acceptance News with a linked paper title.
- Added optional publication journal/year and language-note rendering, and day-aware News sorting.
- Highlighted the owner's name and retained full author order. Journal name is bold italic on its own line; unknown volume/issue/pages remain omitted.
- Metadata evidence and maintenance notes: docs/PUBLICATIONS.md.
- Previous production commit: 97f4817c28846f1d6a3e415bf71d56e2cc0a1aa8.

## 2026-11-22: Weave accepted at KDD 2027

- Added the updated Weave title and all eight authors in the supplied PDF order, with the owner's name bold.
- Added a 2027 publication group, accepted status and the 2026.11.14 acceptance News in both languages.
- Per owner instruction, the new paper and News have no links, and no manuscript or acceptance-email assets are uploaded.
- Added optional conference-name rendering alongside the existing journal field. Existing SSI metadata and link are preserved.
- Previous production commit: da252435b404a8bd143d75e250f7cf27bca6953a.

## 2026-11-22: Author emphasis, CCF badge and venue/year layout

- Changed the Chinese advisor name to the owner-confirmed Chinese spelling.
- Added underlines to the existing bold owner names in both publication lists.
- Added a small CCF A badge to KDD in both languages, leaving SSI unlabelled.
- Replaced the flex venue/year row with inline flow and a nonbreaking final word/year/badge group to prevent the year from wrapping alone.
- Preserved the restriction on Weave links and manuscript publication.
- Previous production commit: b6de01af45841761daad57e71e22b9f507050fcd.

## 2026-11-22: Subtle raised CCF badge

- Removed the English and Chinese parenthetical acceptance notes after the KDD title.
- Updated the CCF A label with a warm ivory gradient, fine border, inset highlight and subtle shadow, as requested.
- Previous production commit: 37153fb73e6767aca08d78dc20b0742782663566.
