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
