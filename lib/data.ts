export type Project = {
  id: string;
  slug: string;
  category: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  imageAlt: string;
  cardType: "large" | "tall" | "regular";
  role?: string;
  liveSite?: string;
  timeline?: string;
  status?: string;
  challenge?: string;
  solution?: string;
  metrics?: { value: string; label: string; description: string }[];
};

export const projects: Project[] = [
  {
    id: "1",
    slug: "the-annex",
    category: "Fullstack Development",
    title: "The Annex",
    description: "Premium Training and Meeting Venue. Fullstack application built ensuring seamless booking and event management features.",
    techStack: ["NextJS", "Laravel", "Tailwind", "HTML"],
    imageUrl: "/projects/the-annex.png",
    imageAlt: "Screenshot of The Annex website",
    cardType: "large",
    liveSite: "https://theannex.ng",
    timeline: "2 weeks",
    status: "Completed",
    role: "Fullstack Developer",
    challenge: "The client needed a seamless booking system for their training and meeting venue. The system needed to handle multiple room types, pricing, and availability.",
    solution: "I built a fullstack application using NextJS and Laravel that handles room booking, payment processing, and availability management. The system also includes an admin dashboard for managing bookings and rooms.",
    metrics: [
      {
        value: "100%",
        label: "Uptime",
        description: "The system has been running with 100% uptime since launch."
      },
      {
        value: "24/7",
        label: "Support",
        description: "The system is available 24/7 for bookings."
      }
    ]
  },
  {
    id: "2",
    slug: "reach-agency",
    category: "Fullstack Development",
    title: "Reach Agency",
    description: "Fullstack development for a digital agency using modern architecture for high performance and engaging UX.",
    techStack: ["NextJS", "Tailwind", "HTML"],
    imageUrl: "/projects/reach-agency.png",
    imageAlt: "Screenshot of Reach Agency website",
    cardType: "tall",
    liveSite: "https://reachagency.ng"
  },
  {
    id: "3",
    slug: "farm-monitor",
    category: "Backend Development",
    title: "Farm Monitor Africa",
    description: "Backend API design, development and testing. Real-time visibility into farm programmes/projects and AI-powered tool for farm yield optimization.",
    techStack: ["Laravel", "PHP", "API"],
    imageUrl: "/projects/farm-monitor.png",
    imageAlt: "Screenshot of Farm Monitor Africa website",
    cardType: "tall",
    liveSite: "https://farmmonitor.africa"
  },
  {
    id: "4",
    slug: "daniel-young-uniforms",
    category: "E-Commerce",
    title: "Daniel Young Uniforms",
    description: "Fullstack ecommerce platform customized for a uniform manufacturing and retail business.",
    techStack: ["Laravel", "ReactJS", "Tailwind", "HTML"],
    imageUrl: "/projects/daniel-young-uniforms.png",
    imageAlt: "Screenshot of Daniel Young Uniforms website",
    cardType: "large",
    liveSite: "https://danielyounguniforms.com"
  },
  {
    id: "5",
    slug: "daniel-young-furniture",
    category: "E-Commerce",
    title: "Daniel Young Furniture",
    description: "Fullstack ecommerce platform providing an elegant online catalog and shopping experience for customized furniture.",
    techStack: ["Laravel", "ReactJS", "Tailwind", "HTML"],
    imageUrl: "/projects/daniel-young-furniture.png",
    imageAlt: "Screenshot of Daniel Young Furniture website",
    cardType: "regular",
    liveSite: "https://danielyoungfurniture.com"
  },
  {
    id: "6",
    slug: "rideskut",
    category: "Fullstack Development",
    title: "Ride SKUT",
    description: "Fullstack development for a transportation and mobility application platform.",
    techStack: ["ReactJS", "Tailwind", "HTML"],
    imageUrl: "/projects/ride-skut.png",
    imageAlt: "Screenshot of Ride Skut website",
    cardType: "regular",
    liveSite: "https://rideskut.com"
  }
];

export const experience = [
  {
    id: "1",
    role: "IT Agency Founder",
    company: "Reach Innovative Solutions",
    date: "2026 — Present",
    description: "Leading a boutique team of 8 developers. Spearheading the design of microservices architectures for fintech and e-commerce clients. Successfully launched 15+ production-grade applications.",
    bullets: [
      "Reduced infrastructure costs by 40% through serverless migration.",
      "Architected multi-region failover systems for high-availability apps."
    ]
  },
  {
    id: "2",
    role: "Senior Graduate Trainee",
    company: "Global Tech Solutions Corp",
    date: "2018 — 2020",
    description: "Accelerated rotation through cloud engineering, DevOps, and front-end architecture. Awarded 'Innovator of the Year' for developing an internal automated testing suite.",
    bullets: []
  }
];
