# Personal homepage baseline

Owner: SuyangMa / Suyang Ma. Chinese name is taken only from the owner-provided GitHub screenshot.
Template: https://github.com/MaxwelsDonc/feiye
Upstream revision: bf4aa53 (pinned local source; see git history).
Production target: https://suyangma.github.io/
Existing production default branch: master, HEAD e532b229ec9f6c44b8d04ced9a1f4982d464f69b (read-only inspection).

## Current scope

- Preserve original Feiye palette, typography, layout, and existing interactions.
- No Brittany visual deltas have been applied.
- Identity uses only the owner's GitHub username, displayed name, and stated computer science student status.
- School, email, portrait, research details, papers, dates, and awards await owner input.
- All displayed academic records are explicitly marked as layout placeholders.
- Preview uses noindex. Set site.preview to false only after content and release approval.
- Scholar citation collection and analytics remain disabled; the upstream daily crawler schedule is disabled.
- Existing remote sites and repositories have NOT been changed.

## Build and preview

Use Node 22, then npm ci and npm run build.
This workstation also has a standalone runtime under E:/Codex_Workplace/runtimes/node22/node-v22.23.5-win-x64/.
After building, double-click preview.cmd and open http://127.0.0.1:4321/.
The built artifact is dist/. Python is needed only for this simple preview launcher.

## Incremental review

The v0-feiye-base tag is the initial personal baseline. Every later visual delta requires the owner's confirmation.
One approved change per commit. Record the change and verification here. Use git revert <delta-commit> to undo a later change without discarding other work.
Do not force-push, replace production, or delete the existing site as part of preview work.

## Eventual GitHub Pages release

Work from a preserved checkout of SuyangMa/suyangma.github.io, retaining its original history and a backup tag/branch.
Bring the approved Feiye site into a review branch. The prepared deploy workflow supports main and master and Node 22.
After the owner approves the final preview, integrate the branch, set Settings > Pages > Source to GitHub Actions, and verify deployment.
A public user-site repo named suyangma.github.io serves the root URL. No new same-name repo is needed.

## Resources to collect

1. Preferred English name, school/department, program/year, and site language.
2. Short biography, research interests, public email, Scholar/ORCID links if wanted.
3. Portrait (optional), CV (optional), paper list, education, experience, and awards.
4. Settings > Pages screenshot showing the current Source before a production switch.

## Baseline verification (2026-11-21)

- Astro type check: 0 errors, 0 warnings, 0 hints.
- Production build: passed.
- Loopback HTTP: index and 11 referenced local assets returned 200.
- All 6 internal anchors resolved.
- Owner English/Chinese name and preview noindex were present in generated HTML.
- Fictional template identity and university were absent from rendered HTML.
- src/styles/global.css is byte-identical to the upstream revision.
- Browser automation is unavailable in this session; desktop/mobile visual review awaits the owner.
- Verification server was closed after checking.
