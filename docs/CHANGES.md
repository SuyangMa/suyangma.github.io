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
