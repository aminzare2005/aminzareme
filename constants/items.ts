export const GALLERY_ITEMS = [
  {
    url: "",
    title: "",
  },
];
export const DESIGNS_ITEMS = [
  {
    title: "",
    url: "",
    brand: "",
  },
];

export const WORK_ITEMS = [
  {
    company: "YXN Studio",
    position: "Founder",
    description: "digital creative studio with focus on building cool web apps",
    image: "/images/yxn.png",
  },
];

export type ProjectItem = {
  slug: string;
  title: string;
  description: string;
  link: string;
  stack: string[];
  featured?: boolean;
};

export const PROJECTS_ITEMS: ProjectItem[] = [
  {
    slug: "vlonefarsi",
    title: "vlonefarsi.ir",
    description: "e-commerce website for vlonefarsi",
    link: "/projects/vlonefarsi",
    stack: ["nextjs", "e-commerce"],
  },
  {
    slug: "selka",
    title: "Selka",
    description: "persian shop-builder for cool brands",
    link: "/projects/selka",
    stack: ["nextjs", "saas"],
  },
  {
    slug: "webha",
    title: "Webha",
    description: "next generation of persian blogging",
    link: "/projects/webha",
    stack: ["nextjs"],
  },
  {
    slug: "learnpov",
    title: "LearnPov",
    description: "text base soical learning network",
    link: "/projects/learnpov",
    stack: ["nextjs", "shadcn"],
  },
];

export const COMMUNITY_ITEMS = [
  {
    name: "Finger Coder",
    role: "Graphic Designer",
    logo: "/images/finger-coder.png",
    color: "02c39a",
    link: {
      title: "instagram",
      href: "https://instagram.com/fingercoder",
    },
  },
  {
    name: "Asr Didani (Shiraz)",
    role: "Video Editor",
    logo: "/images/asrdidani.png",
    color: "a12eac",
    link: {
      title: "instagram",
      href: "https://instagram.com/asrdidani",
    },
  },
];

export const soft_skills = ["Git", "Swagger", "Figma", "v0", "bolt.new"];

export const hard_skills = [
  "NextJS",
  "Tailwindcss",
  "React-Query",
  "Expo",
  "React Bits",
  "ShadcnUI",
];
