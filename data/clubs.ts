export type RecruitmentStatus = "Open" | "Closed" | "Coming Soon";

export interface Club {
  id: string;
  name: string;
  shortName: string;
  domain: string;
  tagline: string;
  description: string;
  bgCard: string; // Tailored poster colors
  badgeBg: string;
  badgeText: string;
  status: RecruitmentStatus;
  statusBg: string;
  statusText: string;
  website: string;
  instagram: string;
  linkedin: string;
  stats: {
    members: string;
    events: string;
    founded: string;
  };
  openRoles?: string[];
  recruitmentDeadline?: string;
  recruitmentFormUrl?: string;
}

export const CLUBS_DATA: Club[] = [
  {
    id: "codechef",
    name: "CodeChef VIT Chapter",
    shortName: "CodeChef",
    domain: "Competitive Programming",
    tagline: "Algorithms, optimization, and high-performance computing.",
    description:
      "Fostering algorithmic problem solvers through weekly contests, data structure bootcamps, ICPC preparation tracks, and peer code reviews.",
    bgCard: "#D9A441", // Light Ochre
    badgeBg: "#1C2742",
    badgeText: "#F5EAD8",
    status: "Open",
    statusBg: "#C86B1F", // Burnt Orange
    statusText: "#F5EAD8",
    website: "https://codechef.vitchennai.ac.in",
    instagram: "https://instagram.com/codechef_vitc",
    linkedin: "https://linkedin.com/company/codechef-vitc",
    stats: {
      members: "250+",
      events: "32",
      founded: "2019",
    },
    openRoles: ["Problem Setter", "Competitive Coding Mentor", "PR & Outreach"],
    recruitmentDeadline: "August 20, 2026",
    recruitmentFormUrl: "https://forms.gle/codechef-2026",
  },
  {
    id: "mic",
    name: "Microsoft Innovations Club",
    shortName: "MIC",
    domain: "Software Dev & Cloud",
    tagline: "Innovating with Microsoft tech, cloud computing, and AI.",
    description:
      "Dedicated to software engineering excellence, Microsoft Azure cloud workflows, full-stack dev bootcamps, and national level technical hackathons.",
    bgCard: "#EFE4D2", // Cream
    badgeBg: "#C86B1F",
    badgeText: "#F5EAD8",
    status: "Open",
    statusBg: "#C86B1F", // Burnt Orange
    statusText: "#F5EAD8",
    website: "https://micvitc.in",
    instagram: "https://instagram.com/mic_vitc",
    linkedin: "https://linkedin.com/company/mic-vitc",
    stats: {
      members: "180+",
      events: "20",
      founded: "2020",
    },
    openRoles: ["Cloud Developer Trainee", "Fullstack Intern", "UI Designer"],
    recruitmentDeadline: "August 24, 2026",
    recruitmentFormUrl: "https://forms.gle/mic-2026",
  },
  {
    id: "dao",
    name: "DAO Blockchain Club",
    shortName: "DAO",
    domain: "Blockchain & Web3",
    tagline: "Fostering decentralization, smart contracts, and Web3 innovation.",
    description:
      "An elite collective of developers and researchers building decentralized apps, writing smart contracts, and exploring cryptography and decentralized governance.",
    bgCard: "#E6ECDC", // Muted Sage
    badgeBg: "#11141B",
    badgeText: "#F5EAD8",
    status: "Open",
    statusBg: "#C86B1F", // Burnt Orange
    statusText: "#F5EAD8",
    website: "https://daocommunity.in",
    instagram: "https://www.instagram.com/daocommunity_",
    linkedin: "https://www.linkedin.com/company/daovitcc/",
    stats: {
      members: "120+",
      events: "14",
      founded: "2022",
    },
    openRoles: ["Smart Contract Auditor", "Web3 Frontend Developer", "Community Builder"],
    recruitmentDeadline: "August 25, 2026",
    recruitmentFormUrl: "https://forms.gle/dao-2026",
  },
  {
    id: "cyscom",
    name: "CYSCOM",
    shortName: "CYSCOM",
    domain: "Cybersecurity & Ethical Hacking",
    tagline: "Securing digital infrastructure and mastering penetration testing.",
    description:
      "A premier cybersecurity student chapter conducting network penetration testing, digital forensics, reverse engineering, and hosting national capture-the-flag competitions.",
    bgCard: "#E7DBEC", // Soft Dark Purple / Cyber
    badgeBg: "#20232C",
    badgeText: "#F5EAD8",
    status: "Open",
    statusBg: "#C86B1F", // Burnt Orange
    statusText: "#F5EAD8",
    website: "https://cyscomvit.com/",
    instagram: "https://www.instagram.com/cyscomvit",
    linkedin: "https://www.linkedin.com/company/cyscomvit/",
    stats: {
      members: "160+",
      events: "22",
      founded: "2020",
    },
    openRoles: ["Security Analyst", "CTF Creator", "PR & Creatives"],
    recruitmentDeadline: "August 22, 2026",
    recruitmentFormUrl: "https://forms.gle/cyscom-2026",
  },
  {
    id: "android-club",
    name: "Android Club",
    shortName: "Android",
    domain: "App Development & Kotlin",
    tagline: "Building elegant, high-performance mobile applications.",
    description:
      "A community of developers, UI/UX designers, and mobile enthusiasts creating beautiful, production-grade Android apps using Kotlin, Jetpack Compose, and Flutter.",
    bgCard: "#ECE7FC", // Soft Violet
    badgeBg: "#A74C22",
    badgeText: "#F5EAD8",
    status: "Coming Soon",
    statusBg: "#8797A8", // Gray / Dust Blue
    statusText: "#20232C",
    website: "https://androidclub.in",
    instagram: "https://www.instagram.com/androidvitc",
    linkedin: "https://www.linkedin.com/company/android-club-vitc/",
    stats: {
      members: "150+",
      events: "18",
      founded: "2021",
    },
    openRoles: ["Native Android Trainee", "Jetpack Compose Specialist", "App Designer"],
    recruitmentDeadline: "TBA - Late August",
    recruitmentFormUrl: "#",
  },
  {
    id: "bic",
    name: "Beacon Innovation Cell",
    shortName: "BIC",
    domain: "Ideation & Prototyping",
    tagline: "Incubating ideas and building hardware-software solutions.",
    description:
      "The innovation cell of Beacon focusing on hardware hacking, product design, patenting support, and converting early student ideas into functional MVPs.",
    bgCard: "#E3ECF5", // Light Blue
    badgeBg: "#C86B1F",
    badgeText: "#F5EAD8",
    status: "Open",
    statusBg: "#C86B1F", // Burnt Orange
    statusText: "#F5EAD8",
    website: "https://bicvitc.in",
    instagram: "https://instagram.com/bic_vitc",
    linkedin: "https://linkedin.com/company/bic-vitc",
    stats: {
      members: "130+",
      events: "15",
      founded: "2021",
    },
    openRoles: ["Hardware Hacker", "CAD Designer", "Outreach Associate"],
    recruitmentDeadline: "August 28, 2026",
    recruitmentFormUrl: "https://forms.gle/bic-2026",
  },
  {
    id: "enactus",
    name: "Enactus VITC",
    shortName: "Enactus",
    domain: "Social Entrepreneurship",
    tagline: "Enacting business innovation for social and ecological good.",
    description:
      "A global student community implementing sustainable startup business models that target environmental issues, societal struggles, and community empowerment.",
    bgCard: "#FCE6EC", // Soft Pink
    badgeBg: "#A74C22",
    badgeText: "#F5EAD8",
    status: "Coming Soon",
    statusBg: "#8797A8", // Gray
    statusText: "#20232C",
    website: "https://enactusvitc.in",
    instagram: "https://instagram.com/enactus_vitc",
    linkedin: "https://linkedin.com/company/enactus-vitc",
    stats: {
      members: "100+",
      events: "12",
      founded: "2022",
    },
    openRoles: ["Social Project Coordinator", "Finance Lead", "Content Creator"],
    recruitmentDeadline: "TBA - Mid September",
    recruitmentFormUrl: "#",
  },
];
