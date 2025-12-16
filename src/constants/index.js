import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  python,
  django,
  git,
  figma,
  docker,
  react,
  blogapp,
  three,
  emoter,
  threejs,
  mongodb,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "NovinTejarat - Blockchain-based Tokenization App for Financial Services",
    icon: react,
    iconBg: "#FAFAFA",
    date: "Feb 2025 - Present",
    points: [
      "Architected and deployed high-performance RESTful APIs using Node.js and Express to handle transactions and user authentication.",
      "Designed secure backend modules for loan, credit, and asset operations, improving data consistency and reducing backend errors by 35%.",
      "Integrated PostgreSQL with optimized indexing and relational modeling to support 10K+ users.",
      "Architected type-safe data layers with strict TypeScript, reducing runtime errors and increasing team velocity by 40%.",
      "Implemented server-side filters, search, and pagination with type-safe queries, improving performance of data-heavy pages by 40%.",
      "Integrated advanced filtering and search features, enabling 3x faster product discovery via optimized state management with Redux.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Istg - Office-Automation Division",
    icon: react,
    iconBg: "#FAFAFA",
    date: "Jan 2025 - Present",
    points: [
      "Overhauled ~1,000 lines of outdated code in ASP.NET Web Forms, reducing technical debt by ~20% and simplifying maintenance.",
      "Integrated a Node.js microservice with the legacy ASP.NET Web Forms environment to manage new data processing tasks.",
      "Managed and optimized MS SQL Server queries and stored procedures, improving report generation time by 25%.",
      "Refactored Telerik RadTreeView/Grid components and server-side bindings into reusable backend-driven templates.",
      "Automated visual regression testing with Playwright, catching layout shifts early and shortening QA cycles.",
      "Improved Lighthouse accessibility score from 68 to 85 by standardizing headings, contrast ratios, and keyboard navigation.",
      "Collaborated with product, QA, and backend teams to align UI with branding, ensuring smooth transitions for thousands of users.",
    ],
  },
  {
    title: "Full-Stack Engineer",
    company_name: "Extend",
    icon: react,
    iconBg: "#FAFAFA",
    date: "Nov 2022 - Jan 2025",
    points: [
      "Led the migration of a monolithic backend service to serverless functions (AWS Lambda/Firebase Functions) for improved cost-efficiency and scalability.",
      "Designed and optimized PostgreSQL schemas for new features, reducing query overhead and improving load time by ~20%.",
      "Introduced AI-driven features via prompt engineering, boosting user engagement by ~15% and automating tasks.",
      "Reduced bug-fixing time by 40% via redesigning the folder structure, refactoring shared backend utilities, and enforcing type-safety across layers.",
      "Implemented CI/CD integrations (GitHub Actions + Docker) for backend services.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Inspection Mate",
    icon: react,
    iconBg: "#FAFAFA",
    date: "Nov 2018 - Nov 2022",
    points: [
      "Engineered defect-reporting tools with React + Node.js microservices, deployed at 10+ industrial sites.",
      "Built backend endpoints for file uploads, incident reports, and real-time data sync using Express.js + PostgreSQL.",
      "Containerized full application stack with Docker, reducing deployment time by 30%.",
      "Engineered defect reporting tools for mining and heavy industry, deployed at 10+ sites and reducing manual reporting time by ~25%.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Blog app",
    description:
      "The Blog App is a feature-rich T3 stack application that empowers users to express themselves through text, images, and interactions with other bloggers. With a robust set of functionalities, users can sign in, post their thoughts, tag their content, like and comment on other posts, bookmark articles, review their bookmarks, follow other users, and receive personalized recommendations based on their interests and interactions.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: blogapp,
    demo_link: "https://blog-app-git-main-farzanhosseini.vercel.app/",
    source_code_link: "https://github.com/FarzanHosseini/blog-app",
  },
  {
    name: "ThreeJS T-Shirt Design",
    description:
      "The ThreeJS T-Shirt Design project is a cutting-edge web application that enables users to create custom t-shirt designs with an immersive 3D rendering experience. Leveraging the power of Three.js, users can visualize their designs in a realistic 3D model, making the design process both interactive and engaging.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: three,
    demo_link: "https://threejs-front-demo-git-main-farzanhosseini.vercel.app/",
    source_code_link: "https://github.com/FarzanHosseini/threejs-front-demo",
  },
  {
    name: "Emoter",
    description:
      "Emoter is a fun and expressive Twitter clone with a twist. Instead of traditional text-based tweets, users communicate solely through emojis, making it a unique and engaging social media experience. Emoter allows users to post their emotions, thoughts, and reactions using a wide array of emojis, fostering a lighthearted and visually appealing platform for social interactions.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "prisma",
        color: "pink-text-gradient",
      },
    ],
    image: emoter,
    demo_link: "https://emoter-git-main-farzanhosseini.vercel.app/",
    source_code_link: "https://github.com/FarzanHosseini/emoter",
  },
];

// Desktop icons configuration
export const desktopIcons = [
  {
    id: "portfolio",
    name: "Portfolio",
    icon: "💼",
    action: "window",
    target: "portfolio",
  },
  {
    id: "resume",
    name: "Resume",
    icon: "📄",
    action: "pdf",
    target: null,
  },
  {
    id: "gaming",
    name: "Gaming Hub",
    icon: "🎮",
    action: "window",
    target: "gaming",
  },
  {
    id: "socials",
    name: "Social Links",
    icon: "🌐",
    action: "window",
    target: "socials",
  },
  {
    id: "blogs",
    name: "Blog",
    icon: "✍️",
    action: "window",
    target: "blogs",
  },
];

// Gaming links placeholder data
export const gamingLinks = [
  {
    platform: "Steam",
    username: "your_steam_username",
    link: "https://steamcommunity.com/id/your_steam_username",
    icon: "🎮",
  },
  {
    platform: "Epic Games",
    username: "your_epic_username",
    link: "https://www.epicgames.com/account/personal",
    icon: "🎯",
  },
  {
    platform: "Discord",
    username: "your_discord_tag",
    link: "https://discord.com/users/your_id",
    icon: "💬",
  },
  {
    platform: "Twitch",
    username: "your_twitch_username",
    link: "https://www.twitch.tv/your_twitch_username",
    icon: "📺",
  },
];

// Social links placeholder data
export const socialLinks = [
  {
    platform: "LinkedIn",
    username: "Farzan Hosseini",
    link: "https://www.linkedin.com/in/farzn/",
    icon: "💼",
  },
  {
    platform: "Website",
    username: "farzn.com",
    link: "https://farzn.com",
    icon: "🌐",
  },
];

// Blog posts placeholder data
export const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React and Three.js",
    excerpt: "Learn how to create stunning 3D web experiences using React and Three.js...",
    date: "2024-01-15",
    link: "#",
    tags: ["React", "Three.js", "Web Development"],
  },
  {
    id: 2,
    title: "Building Scalable Frontend Architectures",
    excerpt: "Exploring best practices for creating maintainable and scalable frontend applications...",
    date: "2024-01-10",
    link: "#",
    tags: ["React", "Architecture", "Best Practices"],
  },
  {
    id: 3,
    title: "Django REST Framework Tips and Tricks",
    excerpt: "Discover advanced techniques for building robust APIs with Django REST Framework...",
    date: "2024-01-05",
    link: "#",
    tags: ["Django", "Python", "API"],
  },
];

export { services, technologies, experiences, testimonials, projects };
