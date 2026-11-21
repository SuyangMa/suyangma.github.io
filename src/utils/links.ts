import { site } from "../config";

/** Native new-tab behavior for external web links; retain same-tab internal links. */
export function externalLinkAttrs(href: string) {
  try {
    const url = new URL(href, site.url);
    if ((url.protocol === "http:" || url.protocol === "https:") &&
        url.origin !== new URL(site.url).origin) {
      return { target: "_blank" as const, rel: "noopener noreferrer" };
    }
  } catch {
    // Invalid or non-web destinations keep their existing navigation behavior.
  }
  return {};
}
