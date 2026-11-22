# SEO metadata and indexing

- The active site is built with Astro. Legacy Jekyll files in the repository do not control the published HTML.
- src/layouts/BaseLayout.astro already renders a description meta tag at build time; there is no missing-description output bug in this active template.
- English description is sourced from site.description in src/config.ts. Chinese description is sourced from src/i18n.ts. The same resolved value feeds Meta Description, Open Graph description and Twitter description.
- On 2026-11-22 the owner provided exact English and Chinese summaries. Both were applied without changing visible body content or the shared browser-tab title.
- Disabled the old preview flag to remove noindex,nofollow, as the owner now requests search indexing. The flag can be re-enabled for a future deliberately private-from-search preview.
- Preserve the existing per-language canonical URLs and reciprocal hreflang links. Unknown academic records remain placeholders and no unpublished Weave links or PDF files are added.
- Source verification: inspect the original HTTP HTML, not only a JavaScript-modified DOM. Require exactly one meta[name=description] inside head, the matching Open Graph and Twitter values, and no blocking robots meta or X-Robots-Tag header.
- public/indexnow-key.txt is the public ownership-verification file required by IndexNow. Publish it before submitting the two page URLs, using an explicit keyLocation at the root path. Never confuse this file with a Bing account credential.
- Only submit the public root homepage and /zh-cn/ page for this update. Do not include private manuscripts or their paths. No scheduled submission job is installed.
- An IndexNow response acknowledges notification or pending key validation; it does not establish search-engine crawling, inclusion, ranking or the final displayed snippet. Account-specific crawl/index reports must be checked in the owner's Bing Webmaster Tools account.

Official references:
- https://www.bing.com/webmasters/help/why-is-my-site-not-in-the-index-2141dfab
- https://www.bing.com/indexnow/getstarted
- https://www.indexnow.org/documentation

## 2026-11-22: Bing live inspection follow-up

- Bing's owner-provided English Live URL result allowed indexing but flagged description length. Shortened the English description from 183 to 139 characters while retaining both names, HUST, advisor and research focus. Chinese description remains unchanged because the owner's Chinese Index result showed successful indexing and no SEO/GEO issues.
- Added public/robots.txt with open crawl access and the absolute sitemap URL.
- Added a static public/sitemap.xml for the two canonical HTML pages, with reciprocal language alternates. No additional dependency is required for this two-page site. Update the sitemap when adding or removing public HTML routes; verification files and assets are excluded. Omitted lastmod rather than inventing modification dates.
- The green Live URL result is indexing eligibility, not a guarantee of indexing or ranking. Retest the English page and submit the sitemap in Bing Webmaster Tools after deployment.
