# Approved homepage changes

## 2026-11-21: Portrait

- Replaced initials avatar with the owner-supplied portrait.
- Removed EXIF/XMP/IPTC metadata before adding the source to the repository; original JPEG scan data and ICC color profile are retained. Desktop original was not changed.
- Astro generates responsive WebP images at 192, 304, and 456 pixels wide (8-28 KB).
- Preserved the square avatar frame and positioned the photo at 50% / 20% to include both faces.
- No other visual features were added.
- Astro check: zero errors. Production build and optimized image assertions passed.
- Previous deployed baseline is retained as v0-live-base. Revert the portrait commit to undo only this change.
