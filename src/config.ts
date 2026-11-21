import portrait from "./assets/suyang-ma.jpg";

// ============================================
// 扉页 — edit this file first.
// Owner identity is confirmed; academic records remain explicit layout placeholders.
// ============================================

export const site = {
  title: "Suyang Ma",
  description: "Suyang Ma - computer science student. Academic homepage preview; profile details are being prepared.",
  preview: true,
  /** Your GitHub Pages URL, with no trailing slash. Must not contain "yourname". */
  url: "https://suyangma.github.io",
  lang: "en",
  /** Google Analytics ID. Leave "" to disable. */
  analyticsId: "",
  /** Footer link back to the template. Set false to remove it. */
  showTemplateCredit: true,
};

export const author = {
  name: "Suyang Ma (马苏洋)",
  /** Owner-provided portrait; identifying metadata removed before import. */
  avatar: portrait,
  bio: "Computer Science Student",
  location: "",
  email: "",
  /** Confirmed GitHub username. */
  github: "SuyangMa",
  x: "",
  googleScholar: "",
  /** Scholar user id, the part before the colon in a paper id. */
  googleScholarId: "",
  orcid: "",
};

export const navigation = {
  header: [
    { label: "About", href: "/#about" },
    { label: "News", href: "/#news" },
    { label: "Experience", href: "/#experience" },
    { label: "Publications", href: "/#publications" },
    { label: "Honors", href: "/#honors" },
  ],
};

export const homePage = {
  name: "Suyang Ma",
  nameCn: "马苏洋",
  subtitle: "Computer Science Student",
  /** Toggle sections on/off. Set false to hide a section entirely. */
  sections: {
    aboutMe: true,
    news: true,
    experience: true,
    publications: true,
    education: true,
    projects: false,
    honors: true,
    services: false,
    skills: false,
  },
};

export const googleScholar = {
  /** Leave false until you have run the crawler. The sample fetches nothing. */
  enabled: false,
  /**
   * After the crawler pushes citation JSON, set this to your jsDelivr URL:
   * https://cdn.jsdelivr.net/gh/USER/REPO@google-scholar-stats/gs_data.json
   */
  statsUrl: "",
};

// ============================================
// Validation — checked at build time
// ============================================

function validateConfig() {
  const errors: string[] = [];

  if (!site.title || site.title === "Your Name")
    errors.push('site.title is required. Set it in src/config.ts');
  if (!site.url || site.url.includes("yourname"))
    errors.push('site.url is required. Set your GitHub Pages URL in src/config.ts');

  if (!author.name || author.name === "Your Name")
    errors.push('author.name is required. Set it in src/config.ts');

  if (errors.length > 0) {
    console.error("\n❌ Config validation failed:\n");
    errors.forEach((e) => console.error(`  • ${e}`));
    console.error("\nFix src/config.ts and try again.\n");
    throw new Error("Config validation failed — see messages above.");
  }
}

validateConfig();
