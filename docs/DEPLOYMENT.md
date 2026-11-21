# GitHub Pages release: Feiye base

Approved local preview: academic-homepage commit 27bdb42, tag v0-feiye-base.
Destination: SuyangMa/suyangma.github.io, https://suyangma.github.io/.
Old production commit: e532b229ec9f6c44b8d04ced9a1f4982d464f69b.
Local backup tag: pre-feiye-20261121. Push this tag before release.
Prepared review branch: release/feiye-base-v0.

The existing Jekyll files and original LICENSE remain in this repository. The old package.json is retained in the old production commit. Feiye's MIT license is included as LICENSE-feiye; fonts retain their own OFL notices.
GitHub Actions builds the approved Astro src/ and public/ directories; only dist/ is published. Legacy Jekyll sources do not enter the new deployment.
The npm lockfile is explicitly tracked so npm ci works in Actions.
No citation crawler is installed in this release; no new scheduled tasks are added.

## Publish

1. Connect authenticated GitHub access for this repository.
2. Push pre-feiye-20261121 and release/feiye-base-v0.
3. In Settings > Pages > Build and deployment, set Source to GitHub Actions.
4. Merge the release branch into master without force-pushing. If master has advanced, rebase/merge and review first.
5. Monitor the Deploy to GitHub Pages workflow, then verify the public page, fonts, avatar, and anchors.

## Roll back

Preserve both the source state and the GitHub Pages setting. Revert the release commit to restore the previous files (or create a restore commit from pre-feiye-20261121). Set Pages back to its previous publishing configuration. Do not reset or force-push master.
The previous Pages publishing setting must be captured through authenticated access before switching.

## Content status

This is the owner-approved baseline with confirmed name and GitHub link, an initials avatar, and explicit placeholders for academic records. The preview noindex flag remains enabled until real profile details are completed. No Brittany visual deltas are included.

## Local release checks

Build passed. Every src/public file and every generated dist file is byte-identical to the approved local baseline. Original repository files were retained except the intentional package.json and .gitignore updates; no source files were deleted. Remote push and Pages configuration await authenticated GitHub access.
