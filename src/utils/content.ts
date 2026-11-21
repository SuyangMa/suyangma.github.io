import { externalLinkAttrs } from "./links";

/** Convert a subset of Markdown inline syntax to HTML: **bold** and [text](url). */
export function mdInline(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_match, label: string, href: string) => {
      const attrs = externalLinkAttrs(href);
      const extra = attrs.target ? ' target="_blank" rel="noopener noreferrer"' : "";
      return `<a href="${href}"${extra}>${label}</a>`;
    })
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}
