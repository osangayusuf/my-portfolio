export type Project = {
  id: number;
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
    id: 1,
    slug: "the-annex",
    category: "Fullstack Development",
    title: "The Annex",
    description:
      "Premium Training and Meeting Venue. Fullstack application built ensuring seamless booking and event management features.",
    techStack: ["NextJS", "Laravel", "Tailwind", "HTML"],
    imageUrl: "/projects/the-annex.png",
    imageAlt: "Screenshot of The Annex website",
    cardType: "large",
    liveSite: "https://theannex.ng",
    timeline: "3 weeks",
    status: "Completed",
    role: "Fullstack Developer",
    challenge:
      "The client required a premium, frictionless booking system for their training and meeting venue capable of dynamically managing complex room types, flexible pricing models, and real-time availability.",
    solution:
      "Engineered a robust fullstack platform leveraging NextJS and Laravel. The solution seamlessly orchestrates room reservations, secure payment processing, and inventory management, complemented by a powerful administrative dashboard.",
    metrics: [
      {
        value: "100%",
        label: "System Uptime",
        description:
          "Achieved flawless reliability with zero downtime since deployment.",
      },
      {
        value: "24/7",
        label: "Automated Booking",
        description:
          "Empowered round-the-clock automated reservations and customer self-service.",
      },
    ],
  },
  {
    id: 2,
    slug: "reach-agency",
    category: "Fullstack Development",
    title: "Reach Agency",
    description:
      "Fullstack development for a digital agency using modern architecture for high performance and engaging UX.",
    techStack: ["NextJS", "Tailwind", "HTML"],
    imageUrl: "/projects/reach-agency.png",
    imageAlt: "Screenshot of Reach Agency website",
    cardType: "tall",
    liveSite: "https://reachagency.ng",
    timeline: "3 weeks",
    status: "Completed",
    role: "Fullstack Developer",
    challenge:
      "The agency needed a cutting-edge digital presence to effectively highlight their portfolio and attract high-value clients, demanding blazing-fast performance and a deeply engaging user experience.",
    solution:
      "Crafted a high-performance, fully responsive website utilizing NextJS and Tailwind CSS. The modernized architecture delivers rapid page loads, sleek interactions, and intuitive navigation.",
    metrics: [
      {
        value: "100%",
        label: "System Uptime",
        description:
          "Maintained continuous, highly-available service since launch.",
      },
      {
        value: "100%",
        label: "Client Satisfaction",
        description:
          "Exceeded all performance and design expectations, resulting in complete client approval.",
      },
    ],
  },
  {
    id: 3,
    slug: "turtle-uniforms",
    category: "E-Commerce",
    title: "Turtle Uniforms",
    description:
      "Fullstack ecommerce platform customized for a uniform manufacturing and retail business.",
    techStack: ["Laravel", "ReactJS", "Tailwind", "HTML"],
    imageUrl: "/projects/turtle.png",
    imageAlt: "Screenshot of Turtle Uniforms website",
    cardType: "tall",
    liveSite: "https://turtleuniforms.com.ng",
    timeline: "5 weeks",
    status: "Completed",
    role: "Fullstack Developer",
    challenge:
      "The client envisioned a digital storefront to globally showcase their uniform manufacturing catalog while seamlessly processing a high volume of concurrent retail orders.",
    solution:
      "Developed a comprehensive, scalable e-commerce infrastructure using Laravel and ReactJS. The platform elegantly displays the product catalog, processes complex orders, and features an intuitive back-office dashboard for inventory and order management.",
    metrics: [
      {
        value: "Streamlined",
        label: "Operations",
        description:
          "Provided a powerful, automated administrative dashboard for effortless product management.",
      },
      {
        value: "100%",
        label: "System Uptime",
        description:
          "Delivered flawless, uninterrupted e-commerce service since going live.",
      },
    ],
  },
  {
    id: 4,
    slug: "farm-monitor",
    category: "Backend Development",
    title: "Farm Monitor Africa",
    description:
      "Backend API design, development and testing. Real-time visibility into farm programmes/projects and AI-powered tool for farm yield optimization.",
    techStack: ["Laravel", "PHP", "API", "Postman", "MySQL"],
    imageUrl: "/projects/farm-monitor.png",
    imageAlt: "Screenshot of Farm Monitor Africa website",
    cardType: "large",
    liveSite: "https://farmmonitor.africa",
    timeline: "8 weeks",
    status: "Completed",
    role: "Backend Developer",
    challenge:
      "The client required a high-throughput backend API capable of aggregating and processing real-time agricultural data from diverse, distributed sources to power an AI-driven yield optimization tool.",
    solution:
      "Engineered a highly scalable REST API using Laravel and PHP, designed to instantly ingest and synchronize multi-source data streams while gracefully handling intense concurrent request loads.",
    metrics: [
      {
        value: "Real-Time",
        label: "Data Processing",
        description:
          "Successfully aggregates live telemetrics and data from highly distributed farm locations.",
      },
      {
        value: "Highly Scalable",
        label: "Architecture",
        description:
          "Resilient infrastructure built to consistently handle massive API request volumes without lag.",
      },
    ],
  },
  {
    id: 5,
    slug: "techhillcity-react",
    category: "Frontend Development",
    title: "Tech Hill City",
    description:
      "Modern, high-performance IT services and consulting web application built from a legacy static site migration. Features rich interactive sections, dynamic services filter, testimonial carousels, and fluid Framer Motion entrance animations.",
    techStack: [
      "React 19",
      "Chakra UI v3",
      "Vite",
      "React Router v6",
      "React Hook Form",
      "Framer Motion",
      "Swiper",
    ],
    imageUrl: "/projects/techhillcity.png",
    imageAlt: "Screenshot of Tech Hill City React App website",
    cardType: "large",
    liveSite: "https://techhillcity.com",
    timeline: "4 weeks",
    status: "Completed",
    role: "Frontend Developer",
    challenge:
      "Migrating a legacy multi-page static HTML website into a modern, single-page React application while improving performance, maintaining SEO readiness, enhancing responsiveness, and adding premium interactive micro-animations.",
    solution:
      "Rebuilt the interface using React 19 and Chakra UI v3, utilizing the createSystem API for custom design tokens. Implemented Framer Motion for premium entering transitions, React Hook Form for client-validated contact forms, and Swiper for touch-enabled carousels.",
    metrics: [
      {
        value: "50%+",
        label: "Load Time Reduction",
        description:
          "Drastically improved page load performance and asset delivery using Vite and React 19.",
      },
      {
        value: "100%",
        label: "Responsive UI",
        description:
          "Perfect fluid adaptation across mobile, tablet, and desktop breakpoints.",
      },
    ],
  },
  {
    id: 6,
    slug: "thc-rdi-portal",
    category: "Fullstack Development",
    title: "THC RDI Portal",
    description:
      "Comprehensive Research, Development, and Innovation (RDI) management portal featuring course enrollment, automated interactive assessments, learning journeys, capstone projects tracking, attendance registers, and dynamic PDF certificate generation.",
    techStack: [
      "Laravel 12",
      "PHP",
      "Inertia.js v2",
      "Vue 3",
      "Tailwind CSS v4",
      "MySQL",
      "Laravel Fortify",
      "Pest",
    ],
    imageUrl: "/projects/thc-rdi-portal.png",
    imageAlt: "Screenshot of THC RDI Portal website",
    cardType: "tall",
    liveSite: "https://rdiportal.techhillcity.com",
    timeline: "8 weeks",
    status: "Completed",
    role: "Fullstack Developer",
    challenge:
      "Managing multi-tenant user roles (students, facilitators, administrators) while providing seamless tracking for assignments, capstones, real-time quizzes, and issuing cryptographically verifiable PDF certificates with varying honors classifications.",
    solution:
      "Designed an elegant relational database structure with robust Laravel controllers and Inertia.js v2 Vue views. Implemented Laravel Fortify for secure authentication, and utilized a custom PDF rendering engine for certified student achievements coupled with unique verification UUIDs.",
    metrics: [
      {
        value: "Automated",
        label: "Certification",
        description:
          "Instantly generates and registers verified honors certificates upon course completion.",
      },
      {
        value: "Multi-Role",
        label: "Workflow",
        description:
          "Streamlined grading pipelines and attendance tracking for students, facilitators, and admins.",
      },
    ],
  },
  {
    id: 7,
    slug: "daniel-young-furniture",
    category: "E-Commerce",
    title: "Daniel Young Furniture",
    description:
      "Fullstack ecommerce platform providing an elegant online catalog and shopping experience for customized furniture.",
    techStack: ["Laravel", "ReactJS", "Tailwind", "HTML"],
    imageUrl: "/projects/daniel-young-furniture.png",
    imageAlt: "Screenshot of Daniel Young Furniture website",
    cardType: "regular",
    liveSite: "https://danielyoungfurniture.com",
    timeline: "4 weeks",
    status: "Completed",
    role: "Fullstack Developer",
    challenge:
      "The client wanted a refined online store to beautifully showcase customized furniture collections and provide a frictionless purchasing journey.",
    solution:
      "Designed and built a responsive e-commerce platform using ReactJS and Laravel, integrating an elegant product catalog, streamlined checkout, and secure payment processing.",
    metrics: [
      {
        value: "Seamless",
        label: "Shopping Experience",
        description:
          "Delivered an intuitive and premium interface for showcasing high-end furniture.",
      },
    ],
  },
  {
    id: 8,
    slug: "rideskut",
    category: "Fullstack Development",
    title: "SKUT",
    description:
      "Fullstack development for a transportation and mobility application platform.",
    techStack: ["ReactJS", "Tailwind", "HTML"],
    imageUrl: "/projects/ride-skut.png",
    imageAlt: "Screenshot of Ride Skut website",
    cardType: "regular",
    liveSite: "https://rideskut.com",
    timeline: "6 weeks",
    status: "Completed",
    role: "Fullstack Developer",
    challenge:
      "Building a reliable, high-performance mobility platform to ensure seamless transportation and intuitive ride-booking experiences for users.",
    solution:
      "Developed an engaging frontend using ReactJS that connects riders with transportation services, featuring a real-time tracking interface, instant feedback, and an optimized ride-booking flow.",
    metrics: [
      {
        value: "Optimized",
        label: "Booking Flow",
        description:
          "Created a smooth and exceptionally responsive experience for requesting rides.",
      },
    ],
  },
  {
    id: 9,
    slug: "sba-reads",
    category: "Backend Development",
    title: "SBA Reads",
    description:
      "Architected and developed a robust backend API for a mobile marketplace connecting readers and writers.",
    techStack: ["Laravel", "PHP", "API", "Postman", "MySQL"],
    imageUrl: "/projects/sba-reads.jpg",
    imageAlt: "Screenshot of SBA Reads website",
    cardType: "regular",
    liveSite: "Nil",
    timeline: "4 weeks",
    status: "Completed",
    role: "Backend Developer",
    challenge:
      "The client envisioned a vibrant mobile ecosystem where readers and writers could securely discover, purchase, and share literature, demanding a fast, highly available backend architecture.",
    solution:
      "Engineered a scalable RESTful API with Laravel and MySQL to manage user accounts, rapid content delivery, and secure transactions, ensuring minimal latency and robust data synchronization.",
    metrics: [
      {
        value: "High Speed",
        label: "Query Execution",
        description:
          "Structured highly relational data models for instantaneous content retrieval.",
      },
      {
        value: "Scalable",
        label: "API Architecture",
        description:
          "Built extensible endpoints resilient enough to support concurrent active users seamlessly.",
      },
    ],
  },
  {
    id: 10,
    slug: "carrygo",
    category: "Fullstack Development",
    title: "CarryGo",
    description:
      "Gamified reverse bidding and loyalty platform designed for users to place bids, complete task center activities, check-in daily, spin the wheel for rewards, and track real-time auction countdowns.",
    techStack: [
      "Laravel 13",
      "PHP",
      "Inertia.js v3",
      "Vue 3",
      "Tailwind CSS v4",
      "Vite",
      "TypeScript",
    ],
    imageUrl: "/projects/carrygo.png",
    imageAlt: "Screenshot of CarryGo website",
    cardType: "regular",
    liveSite: "https://ngcarrygo.com",
    timeline: "6 weeks",
    status: "Completed",
    role: "Fullstack Developer",
    challenge:
      "Developing a highly interactive, real-time gamified reverse auction platform that keeps users engaged through daily tasks, check-ins, and spin-the-wheel rewards, all while maintaining high performance and precise countdown synchronization for concurrent bidders.",
    solution:
      "Leveraged Laravel 13 on the backend for robust business logic, paired with Inertia.js v3 and Vue 3 for a fluid client-side SPA experience. Utilized Tailwind CSS v4 for a cutting-edge dark-themed UI and implemented atomic queue-based bid handling to prevent race conditions during last-second bids.",
    metrics: [
      {
        value: "100%",
        label: "Real-Time Sync",
        description:
          "Guaranteed instant countdown and leaderboard updates across all active bidders.",
      },
      {
        value: "50%+",
        label: "Engagement Boost",
        description:
          "Increased daily active users through the task center and check-in rewards loop.",
      },
    ],
  },
];

export const experience = [
  {
    id: "1",
    role: "Fullstack Engineer",
    company: "Tech Hill City International",
    date: "November 2025 — Present",
    description:
      "Took full ownership of the web application lifecycle, from conception and building up to deployment, for new websites.",
    bullets: [
      "Conducted regular monitoring, evaluation, and Quality Assurance (QA) tests to ensure web applications met high standards for quality and performance.",
      "Utilized AI tools extensively as a fullstack engineer, cutting down development and build times by over 50%.",
    ],
  },
  {
    id: "2",
    role: "Fullstack Engineer",
    company: "The Nebula",
    date: "March 2025 — November 2025",
    description:
      "Worked across multiple client projects ensuring timeful project delivery with excellent attention to detail.",
    bullets: [
      "Leveraged various AI tools to cut down development time by over 50%.",
      "Collaborated effectively with technical and non-technical stakeholders to ensure clear communication and successful alignment on project requirements and delivery.",
      "Managed and optimized database schemas to accurately support complex business workflows and data requirements.",
      "Utilized Laravel Queues for processing asynchronous tasks like email notifications and data imports to enhance application responsiveness.",
      "Set up monitoring hooks to ensure seamless operation of APIs in production environments.",
    ],
  },
  {
    id: "3",
    role: "Volunteer Web Developer",
    company: "Zurfte Empowercare Foundation",
    date: "November 2024 — March 2025",
    description:
      "Played a key role in a website migration, transitioning from a static HTML, CSS, and JavaScript foundation to a dynamic and scalable React.js architecture.",
    bullets: [
      "Significantly improved website performance and maintainability through the development of reusable React components and the implementation of effective state management strategies.",
      "Enhanced the website's visual design and responsiveness by integrating Tailwind CSS for styling.",
      "Effectively collaborated with development teams and stakeholders, utilizing Trello for requirement gathering, progress updates, and ensuring project satisfaction.",
    ],
  },
  {
    id: "4",
    role: "Fullstack Web Developer",
    company: "Turtle Consulting",
    date: "January 2023 — March 2025",
    description:
      "During a two-year engagement with Turtle Consulting, I developed and maintained four web applications, showcasing commitment and project continuity. My responsibilities included:",
    bullets: [
      "Designed and implemented RESTful APIs using PHP (Laravel) to drive four client web applications, ensuring scalability and robust performance.",
      "Front-end development with ReactJS to create dynamic and responsive user interfaces for optimal user experience.",
      "Integration of third-party APIs and services.",
      "Close collaboration with the client for requirements gathering, progress updates, and ensuring satisfaction.",
      "Maintaining code quality through reviews and testing.",
      "Deployment and maintenance of applications on G054 hosting (formerly whogohost).",
      "Implemented caching mechanisms to improve API response times.",
    ],
  },
];
