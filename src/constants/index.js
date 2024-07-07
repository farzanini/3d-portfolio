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
    title: "Web Developer",
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
];

const experiences = [
  {
    title: "Senior Frontend Developer ",
    company_name: "Extend",
    icon: react,
    iconBg: "#FAFAFA",
    date: "From November 2022",
    points: [
      "Fintech Project Leadership: Directed the development of key fintech applications, innovating with a custom npm package to streamline API integration and improve overall system performance. The initiative significantly boosted application efficiency and user engagement.",
      "Agile Development: Championed Agile and Scrum methodologies, ensuring seamless team coordination and on-time delivery of weekly sprint tasks. This strategic approach markedly increased team productivity and project delivery rates.",
      "AI Integration & Prompt Engineering: Integrated AI into the application, leveraging prompt engineering to enhance user experience and make the system more intuitive and user-friendly for customers.",
      "TypeScript & Cypress Integration: Enhanced codebase quality and reliability by integrating TypeScript and implementing Cypress for end-to-end testing, resulting in a 40% decrease in production bugs.",
      "UI/UX Redesign: Oversaw the comprehensive redesign of the user interface for the platform’s second version, incorporating modern UI libraries and custom components to elevate the user experience, leading to a 25% increase in user satisfaction scores.",
      "Project Structure Innovation: Reengineered the project framework to a Monorepo structure, enhancing code reuse and team collaboration, and facilitating a 20% improvement in development cycle times.",
    ],
  },
  {
    title: "Frontend Developer ",
    company_name: "Inspection",
    icon: react,
    iconBg: "#FAFAFA",
    date: "February 2020 - November 2022",
    points: [
      "React Application Development: Spearheaded the design and implementation of a scalable frontend architecture using React, driving improvements in application efficiency and user engagement. This initiative resulted in a 20% increase in application performance and user interaction.",
      "Modern Deployment Practices: Leveraged Docker to containerize the frontend solution, ensuring streamlined deployment processes and enhanced scalability. This approach reduced deployment times by 30% and facilitated consistent environments across development and production.",
      "Complex UI Challenges: Crafted and deployed a sophisticated user interface utilizing DevExtreme, adeptly presenting complex datasets through intuitive graphs and diagrams. Enhanced data visualization techniques led to a 25% improvement in user comprehension and decision-making efficiency",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Tymr",
    icon: react,
    iconBg: "#FAFAFA",
    date: "January 2019 - February 2020",
    points: [
      "Startup Project Leadership: Pioneered the frontend development of Tymr’s time management system, showcasing my entrepreneurial spirit and ability to drive projects from concept to launch. This effort culminated in the successful deployment of a highly intuitive and user-friendly application.",
      "Frontend Development Collaboration: Worked seamlessly with backend developers, employing React and Material-UI to craft dynamic user interfaces. This collaboration enhanced application functionality and user experience, leading to a 40% increase in user retention and a significant reduction in user-reported issues.",
    ],
  },
  {
    title: "Frontend developer",
    company_name: "Dinaweb",
    icon: react,
    iconBg: "#FAFAFA",
    date: "July 2008 - September 2018",
    points: [
      "Web Development: Spearheaded the creation of multiple web pages and platforms using HTML, CSS, and JavaScript, as well as WordPress, catering to various businesses and retail shops. This initiative significantly improved client online presence and customer engagement.",
      "Solution Optimization: Engineered web solutions and scripts to streamline operations, demonstrating a keen aptitude for enhancing process efficiency through innovative tech applications.",
      "Innovative Product Development: Designed and implemented an intelligent Wi-Fi advertising system for restaurants, automatically engaging customers’ devices with tailored content and menus. This solution bridged technology with customer service, resulting in a 30% increase in client business engagement and sales.",
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

export { services, technologies, experiences, testimonials, projects };
