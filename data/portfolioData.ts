export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  description: string;
}

export interface SkillItem {
  name: string;
  category: 'programming' | 'problem-solving' | 'tools' | 'soft-skills';
  iconType?: 'c' | 'cpp' | 'java' | 'sql' | 'postgresql' | 'html' | 'css' | 'canva' | 'google' | 'word' | 'excel' | 'powerpoint' | 'microsoft';
}

export interface ProjectItem {
  title: string;
  date?: string;
  description: string;
  tags: string[];
  repoUrl: string;
  thumbnail: string;
}

export interface EducationItem {
  institution: string;
  url: string;
  degree: string;
  details: string[];
  logo?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: 'github' | 'facebook' | 'linkedin' | 'instagram';
  logo?: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    headline: string;
    intro: string;
    profilePhoto: string;
    resumePdf: string;
  };
  experiences: ExperienceItem[];
  skills: {
    marqueeSkills: SkillItem[];
    softSkills: string[];
  };
  projects: ProjectItem[];
  education: EducationItem[];
  connect: {
    email: string;
    email2?: string;
    phone?: string;
    location: string;
    socials: SocialLink[];
  };
  footer: {
    copyright: string;
  };
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Tasvirul Hasan Riyad",
    headline: "Computer Science & Engineering Undergraduate",
    intro:
      "I'm a Computer Science & Engineering undergraduate at North South University, passionate about programming and problem-solving. I enjoy learning new technologies and turning ideas into working projects.",
    profilePhoto: "/images/profile.jpg",
    resumePdf: "/resume.pdf",
  },

  /**
   * EXPERIENCE SECTION DATA:
   * Keep this array empty (`[]`) for now.
   * When empty, the <Experience /> component renders nothing (returns null).
   * Adding any entry here will automatically make it appear on the site in the
   * exact same timeline style as the reference, with no other changes needed!
   *
   * Example to uncomment when ready:
   * [
   *   {
   *     period: "2023 – Present",
   *     role: "Social Media Manager & Graphic Designer",
   *     organization: "Educational Brands",
   *     description: "Designed logos and promotional posters for three educational brands. Managed social media presence across platforms and created visual content aligned with brand identity."
   *   },
   *   {
   *     period: "2024 – Present",
   *     role: "Graphics Designer",
   *     organization: "NSU Social Services Club",
   *     description: "Designed posters, banners, and social media content to promote club events and workshops. Collaborated with event organizers and fellow club members to ensure engaging and impactful visuals."
   *   }
   * ]
   */
  experiences: [],

  skills: {
    marqueeSkills: [
      { name: "C", category: "programming", iconType: "c" },
      { name: "C++", category: "programming", iconType: "cpp" },
      { name: "Java", category: "programming", iconType: "java" },
      { name: "SQL", category: "programming", iconType: "sql" },
      { name: "PostgreSQL", category: "programming", iconType: "postgresql" },
      { name: "HTML5", category: "programming", iconType: "html" },
      { name: "CSS3", category: "programming", iconType: "css" },
      { name: "Problem Solving", category: "problem-solving" },
      { name: "Canva", category: "tools", iconType: "canva" },
      { name: "Google Docs", category: "tools", iconType: "google" },
      { name: "MS Word", category: "tools", iconType: "word" },
      { name: "MS PowerPoint", category: "tools", iconType: "powerpoint" },
      { name: "MS Excel", category: "tools", iconType: "excel" },
    ],
    softSkills: [
      "Leadership",
      "Communication",
      "Teamwork",
      "Adaptability",
      "Perseverance",
      "Networking",
      "Working Under Pressure",
    ],
  },

  projects: [
    {
      title: "Apartment Management System",
      date: "Featured Project",
      description:
        "A full-stack apartment and building management system with a public listings page, an admin dashboard for rent, billing and tenant management, and a resident self-service portal — with bilingual Bengali/English support.",
      tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
      repoUrl: "https://github.com/tasvir-riyad/Apartment-Management-System",
      thumbnail: "/images/projects/apartment-management.png",
    },
    {
      title: "Classroom Booking System (CBS)",
      date: "Junior Design Project",
      description:
        "A full-stack classroom inventory and scheduling system built with Next.js and a Node.js/Express API. Features an algorithmic bulk semester allocation engine, PostgreSQL transactional conflict prevention, faculty seniority priority queuing, and a real-time lobby schedule.",
      tags: ["Next.js", "TypeScript", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
      repoUrl: "https://github.com/tasvir-riyad/CSE_299_NSU",
      thumbnail: "/images/projects/cbs.png",
    },
  ],

  education: [
    {
      institution: "North South University",
      url: "https://www.northsouth.edu/",
      logo: "/images/education/nsu.svg",
      degree: "Bachelor of Science in Computer Science & Engineering (CSE)",
      details: [
        "CGPA: 3.30/4.00 (up to 6th semester)",
        "Third Year Ongoing",
        "Feb 2024 – Present",
      ],
    },
    {
      institution: "Chattogram Cantonment Public College",
      url: "https://ccpc.edu.bd/",
      logo: "/images/education/ccpc.png",
      degree: "Higher Secondary & Secondary Certificate",
      details: [
        "HSC (Science), 2022 — GPA 5.00",
        "SSC (Science), 2020 — GPA 5.00",
      ],
    },
  ],

  connect: {
    email: "tasvirriyad@gmail.com",
    email2: "tasvirul.riyad.241@northsouth.edu",
    phone: "01879414202",
    location: "Dhaka, Bangladesh",
    socials: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/tasvir-riyad",
        icon: "linkedin",
        logo: "/images/socials/linkedin.svg",
      },
      {
        name: "GitHub",
        url: "https://github.com/tasvir-riyad",
        icon: "github",
        logo: "/images/socials/github.svg",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/riyad_naldo/",
        icon: "instagram",
        logo: "/images/socials/instagram.svg",
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/share/14puWG9K2JW/?mibextid=wwXIfr",
        icon: "facebook",
        logo: "/images/socials/facebook.svg",
      },
    ],
  },

  footer: {
    copyright: "© 2026 Tasvirul Hasan Riyad. All rights reserved.",
  },
};
