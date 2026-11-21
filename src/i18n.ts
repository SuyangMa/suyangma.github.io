import enIntro from "./data/intro.md?raw";
import enEducation from "./data/education.json";
import enExperience from "./data/experience.json";
import enNews from "./data/news.json";
import enPublications from "./data/publications.json";
import enProjects from "./data/projects.json";
import enHonors from "./data/honors.json";
import enServices from "./data/services.json";
import enSkills from "./data/skills.json";
import zhIntro from "./data/zh-cn/intro.md?raw";
import zhEducation from "./data/zh-cn/education.json";
import zhExperience from "./data/zh-cn/experience.json";
import zhNews from "./data/zh-cn/news.json";
import zhPublications from "./data/zh-cn/publications.json";
import zhProjects from "./data/zh-cn/projects.json";
import zhHonors from "./data/zh-cn/honors.json";
import zhServices from "./data/zh-cn/services.json";
import zhSkills from "./data/zh-cn/skills.json";

export type Locale = "en" | "zh-cn";

const ui = {
  "en": {
    "htmlLang": "en",
    "path": "/",
    "homeTitle": "Homepage",
    "description": null,
    "navigation": "Main navigation",
    "switchLabel": "中文",
    "switchAria": "Switch to Chinese",
    "switchLang": "zh-CN",
    "switchPath": "/zh-cn/",
    "skip": "Skip to main content",
    "subtitle": null,
    "email": "Email",
    "scholar": "Google Scholar",
    "citationLabel": "citations",
    "nav": {
      "about": "About",
      "news": "News",
      "experience": "Experience",
      "publications": "Publications",
      "honors": "Honors"
    },
    "sections": {
      "news": "News",
      "experience": "Experience",
      "publications": "Publications",
      "education": "Education",
      "projects": "Research Projects",
      "honors": "Honors and Awards",
      "services": "Academic Services",
      "skills": "Skills"
    }
  },
  "zh-cn": {
    "htmlLang": "zh-CN",
    "path": "/zh-cn/",
    "homeTitle": "个人主页",
    "description": "马苏洋，华中科技大学博士研究生。个人学术主页预览版，其余信息正在整理中。",
    "navigation": "主导航",
    "switchLabel": "English",
    "switchAria": "Switch to English",
    "switchLang": "en",
    "switchPath": "/",
    "skip": "跳转到正文",
    "subtitle": "华中科技大学 · 博士研究生",
    "email": "邮箱",
    "scholar": "谷歌学术",
    "citationLabel": "次引用",
    "nav": {
      "about": "个人简介",
      "news": "最新动态",
      "experience": "科研经历",
      "publications": "学术论文",
      "honors": "荣誉奖项"
    },
    "sections": {
      "news": "最新动态",
      "experience": "科研与实习经历",
      "publications": "学术论文",
      "education": "教育经历",
      "projects": "科研项目",
      "honors": "荣誉与奖项",
      "services": "学术服务",
      "skills": "专业技能"
    }
  }
} as const;

export const getUi = (locale: Locale) => ui[locale];

const content = {
  "en": { intro: enIntro, education: enEducation, experience: enExperience, news: enNews, publications: enPublications, projects: enProjects, honors: enHonors, services: enServices, skills: enSkills },
  "zh-cn": { intro: zhIntro, education: zhEducation, experience: zhExperience, news: zhNews, publications: zhPublications, projects: zhProjects, honors: zhHonors, services: zhServices, skills: zhSkills },
};

export const getContent = (locale: Locale) => content[locale];
