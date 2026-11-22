import portrait from "./assets/suyang-ma.jpg";

// ============================================
// 扉页 — edit this file first.
// Owner identity is confirmed; academic records remain explicit layout placeholders.
// ============================================

export const site = {
  title: "Suyang Ma",
  tabTitle: "Suyang Ma（马苏洋） — Homepage",
  description: "Suyang Ma (马苏洋), Ph.D. student at HUST advised by Prof. Yu Zhang. Research: high-performance systems for large language model (LLM) agents.",
  preview: false,
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
  bio: "Ph.D. Student @ HUST",
  location: "",
  email: "suyangma609@hust.edu.cn",
  /** Confirmed GitHub username. */
  github: "SuyangMa",
  x: "",
  googleScholar: "https://scholar.google.com/citations?user=LQTxVVoAAAAJ&hl=zh-CN",
  /** Scholar user id, the part before the colon in a paper id. */
  googleScholarId: "LQTxVVoAAAAJ",
  orcid: "",
};

export const navigation = {
  header: [
    { label: "About", href: "/#about" },
    { label: "News", href: "/#news" },
    { label: "Publications", href: "/#publications" },
  ],
};

export const homePage = {
  name: "Suyang Ma",
  nameCn: "马苏洋",
  subtitle: "Ph.D. Student @ HUST",
  /** Toggle sections on/off. Set false to hide a section entirely. */
  sections: {
    aboutMe: true,
    news: true,
    experience: false,
    publications: true,
    education: false,
    projects: false,
    honors: false,
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
