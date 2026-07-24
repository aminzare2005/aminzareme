export const DESIGNS_ITEMS = [
  {
    title: "Phonecase design",
    url: "/designs/1.png",
    brand: "VLONEFARSI",
  },
  {
    title: "Banner Design for Github Project",
    url: "/designs/3.jpg",
    brand: "Personal",
  },
  {
    title: "Printable Sticker Design",
    url: "/designs/4.png",
    brand: "VLONEFARSI",
  },
  {
    title: "Character Design",
    url: "/designs/5.jpg",
    brand: "Personal",
  },
  {
    title: "Hiring Banner",
    url: "/designs/6.png",
    brand: "YXN Studio",
  },
  {
    title: "CodeNest Gathering Banner",
    url: "/designs/7.jpg",
    brand: "Finger Coder",
  },
  {
    title: "Logo Design",
    url: "/designs/8.png",
    brand: "YXN Studio",
  },
  {
    title: "Prompt Engineering Gathering Banner",
    url: "/designs/10.png",
    brand: "Finger Coder",
  },
  {
    title: "#ILOVEFREESOFTWARE Banner",
    url: "/designs/11.png",
    brand: "ShirazLinux",
  },
  {
    title: "Logo Design",
    url: "/designs/12.png",
    brand: "Personal",
  },
  {
    title: "Claude Code Gathering Banner",
    url: "/designs/13.png",
    brand: "Finger Coder",
  },
  {
    title: "Reel Banner",
    url: "/designs/14.png",
    brand: "Finger Coder",
  },
];

export const GALLERY_ITEMS = [
  {
    title: "ShirazLinux & ShirazTux Gathering",
    url: "/gallery/1.jpg",
  },
  {
    title: "Last ShirazLinux Gathering in 1404",
    url: "/gallery/5.jpg",
  },
  {
    title: "Touring bootcamp (AIPM) Day 1",
    url: "/gallery/2.jpg",
  },
  {
    title: "Long Meeting Sessions in War Holidays",
    url: "/gallery/6.jpg",
  },
  {
    title: "Mins Before vlonefarsi.ir Production Release",
    url: "/gallery/3.jpg",
  },
];

export const WORK_ITEMS = [
  {
    company: "YXN Studio",
    position: "Co-Founder",
    description: "digital creative studio with focus on building cool web apps",
    image: "/images/yxn.png",
  },
  {
    company: "@vlonefarsi",
    position: "Frontend Developer",
    description: "e-commerce website of vlonefarsi instagram brand",
    image: "/images/vlonefarsi.jpg",
    link: { title: "visit vlonefarsi.ir", href: "https://vlonefarsi.ir" },
  },
  {
    company: "Webha",
    position: "Frontend Developer",
    description: "creator-first next-generation persian blogging platform",
    image: "/images/webha.jpg",
    link: { title: "visit webha.blog", href: "https://webha.blog" },
  },
];

export type ProjectItem = {
  slug: string;
  title: string;
  description: string;
  link: { title: string; href: string };
  stack: string[];
  featured?: boolean;
};

export const PROJECTS_ITEMS: ProjectItem[] = [
  {
    slug: "vlonefarsi",
    title: "vlonefarsi.ir",
    description:
      "full e-commerce experience for a streetwear instagram brand, from design to production.",
    link: {
      title: "read case study",
      href: "/projects/vlonefarsi",
    },
    stack: ["nextjs", "e-commerce"],
    featured: true,
  },
  {
    slug: "hand-detector",
    title: "hand detector",
    description:
      "self-hosted ai teachable machine that detects your hand in your webcam",
    link: {
      title: "view github source",
      href: "https://github.com/aminzare2005/hand-detector",
    },
    stack: ["ai", "vite"],
  },
  {
    slug: "to-farsi",
    title: "to-farsi",
    description:
      "simple npm package to convert english digits to farsi digits.",
    link: {
      title: "visit npmjs.com/to-farsi",
      href: "https://www.npmjs.com/package/to-farsi",
    },
    stack: ["npm", "open-source"],
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
