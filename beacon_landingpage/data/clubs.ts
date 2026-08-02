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
    id: "nexus-ai",
    name: "Nexus AI & Robotics",
    shortName: "Nexus AI",
    domain: "Artificial Intelligence & Hardware",
    tagline: "Architecting autonomous systems and machine intelligence.",
    description:
      "Empowering students to build state-of-the-art neural architectures, robotics prototypes, and computer vision systems for real-world academic & industrial challenges.",
    bgCard: "#EFE4D2", // Cream
    badgeBg: "#C86B1F",
    badgeText: "#F5EAD8",
    status: "Open",
    statusBg: "#C86B1F", // Burnt Orange
    statusText: "#F5EAD8",
    website: "https://nexusai.vitchennai.ac.in",
    instagram: "https://instagram.com/nexusai_vitc",
    linkedin: "https://linkedin.com/company/nexus-ai-vitc",
    stats: {
      members: "180+",
      events: "24",
      founded: "2021",
    },
    openRoles: ["ML Engineer Trainee", "Robotics Hardware Lead", "Creative & Media Designer"],
    recruitmentDeadline: "August 18, 2026",
    recruitmentFormUrl: "https://forms.gle/nexus-ai-2026",
  },
  {
    id: "cyberforge",
    name: "CyberForge Club",
    shortName: "CyberForge",
    domain: "Cybersecurity & Ethical Hacking",
    tagline: "Defending systems, analyzing exploits, and mastering CTFs.",
    description:
      "A premier cybersecurity collective conducting reverse engineering workshops, vulnerability research, red/blue team simulations, and hosting national CTFs.",
    bgCard: "#8797A8", // Dust Blue
    badgeBg: "#20232C",
    badgeText: "#F5EAD8",
    status: "Open",
    statusBg: "#C86B1F", // Burnt Orange
    statusText: "#F5EAD8",
    website: "https://cyberforge.vitchennai.ac.in",
    instagram: "https://instagram.com/cyberforge_vitc",
    linkedin: "https://linkedin.com/company/cyberforge-vitc",
    stats: {
      members: "140+",
      events: "18",
      founded: "2020",
    },
    openRoles: ["CTF Challenge Author", "Web Security Researcher", "Event Coordinator"],
    recruitmentDeadline: "August 22, 2026",
    recruitmentFormUrl: "https://forms.gle/cyberforge-2026",
  },
  {
    id: "designcraft",
    name: "DesignCraft Studio",
    shortName: "DesignCraft",
    domain: "UI/UX & Creative Motion",
    tagline: "Where aesthetic rigor meets human-centered design.",
    description:
      "Cultivating digital craft, spatial UI, generative graphics, motion design, and brand architecture for university flagships and open-source initiatives.",
    bgCard: "#E6D8C1", // Warm Sand
    badgeBg: "#A74C22",
    badgeText: "#F5EAD8",
    status: "Coming Soon",
    statusBg: "#8797A8", // Gray / Dust Blue
    statusText: "#20232C",
    website: "https://designcraft.vitchennai.ac.in",
    instagram: "https://instagram.com/designcraft_vitc",
    linkedin: "https://linkedin.com/company/designcraft-vitc",
    stats: {
      members: "110+",
      events: "16",
      founded: "2022",
    },
    openRoles: ["UI/UX Designer", "Motion Graphic Artist", "3D Generalist"],
    recruitmentDeadline: "TBA - Mid September",
    recruitmentFormUrl: "#",
  },
  {
    id: "codechef",
    name: "CodeChef VIT Chapter",
    shortName: "CodeChef VITC",
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
    id: "beacon-media",
    name: "Team Beacon Editorial",
    shortName: "Beacon Editorial",
    domain: "Journalism & Media Publication",
    tagline: "Chronicling stories, movement, and student discourse.",
    description:
      "The official university editorial collective publishing quarterly magazines, campus gazettes, photojournalism essays, and student spotlight films.",
    bgCard: "#EFE4D2", // Cream
    badgeBg: "#C86B1F",
    badgeText: "#F5EAD8",
    status: "Closed",
    statusBg: "#4D627D", // Slate Blue
    statusText: "#F5EAD8",
    website: "https://beaconmedia.vitchennai.ac.in",
    instagram: "https://instagram.com/beacon_media_vitc",
    linkedin: "https://linkedin.com/company/beacon-media-vitc",
    stats: {
      members: "95+",
      events: "14",
      founded: "2020",
    },
    openRoles: [],
    recruitmentDeadline: "Closed for Season 1",
    recruitmentFormUrl: "#",
  },
  {
    id: "veloce-ecell",
    name: "Veloce Entrepreneurship Cell",
    shortName: "Veloce E-Cell",
    domain: "Innovation & Startup Incubation",
    tagline: "Transforming ambitious ideas into sustainable ventures.",
    description:
      "Connecting student founders with VC mentorship, seed funding pitch nights, hackathons, and legal/ip support across the South Asian startup ecosystem.",
    bgCard: "#8797A8", // Dust Blue
    badgeBg: "#11141B",
    badgeText: "#F5EAD8",
    status: "Open",
    statusBg: "#C86B1F", // Burnt Orange
    statusText: "#F5EAD8",
    website: "https://veloce.vitchennai.ac.in",
    instagram: "https://instagram.com/veloce_ecell_vitc",
    linkedin: "https://linkedin.com/company/veloce-ecell-vitc",
    stats: {
      members: "165+",
      events: "20",
      founded: "2018",
    },
    openRoles: ["Venture Analyst", "Sponsorship Manager", "Incubation Associate"],
    recruitmentDeadline: "August 25, 2026",
    recruitmentFormUrl: "https://forms.gle/veloce-2026",
  },
  {
    id: "cadence-literary",
    name: "Cadence Literary & Debating",
    shortName: "Cadence Society",
    domain: "Oratory, Debating & Performing Arts",
    tagline: "Fostering articulate voices, critical debate, and expression.",
    description:
      "A vibrant hub for Parliamentary debating, spoken word poetry, model UN delegations, creative writing, and campus theatre productions.",
    bgCard: "#E6D8C1", // Warm Sand
    badgeBg: "#A74C22",
    badgeText: "#F5EAD8",
    status: "Coming Soon",
    statusBg: "#8797A8", // Gray / Dust Blue
    statusText: "#20232C",
    website: "https://cadence.vitchennai.ac.in",
    instagram: "https://instagram.com/cadence_vitc",
    linkedin: "https://linkedin.com/company/cadence-vitc",
    stats: {
      members: "130+",
      events: "19",
      founded: "2021",
    },
    openRoles: ["Parliamentary Adjudicator", "Public Speaking Coach", "Content Writer"],
    recruitmentDeadline: "TBA - Late August",
    recruitmentFormUrl: "#",
  },
];
