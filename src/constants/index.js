import { m } from "framer-motion";
import {
  mobile,
  backend,
  creator,
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
      " I’ve meticulously revised and refactored legacy code, infusing modern programming paradigms and efficient algorithms to ensure optimal performance, maintainability, and scalability. My precision and attention to detail have resulted in a harmonized, clean codebase, laying a robust foundation for future developments.",
      " Leading the initiative to transcend the conventional, I spearheaded the migration from a standard UI component library to a sophisticated blend of custom-created UI elements and a novel library. This transition, orchestrated with finesse, ensures a unique, intuitive, and engaging user experience tailored to our audience.",
      " My role is characterized by a synergistic collaboration with the design team. By fostering an environment of open communication and creative freedom, I’ve facilitated the seamless translation of their innovative designs into functional, user-friendly interfaces. This close-knit partnership ensures the realization of aesthetic and functional excellence, unmarred by technical limitations.",
    ],
  },
  {
    title: "Full Stack Developer ",
    company_name: "Inspection",
    icon: react,
    iconBg: "#FAFAFA",
    date: "February 2020 - November 2022",
    points: [
      " Spearheaded the selection of cutting-edge technologies and engineered both frontend and backend systems, ensuring seamless integration and optimized performance",
      " Utilized diverse React component libraries and Redux for effective data management, elevating the user experience and development efficiency.",
      " Gained extensive knowledge and experience in JavaScript ES5/ES6/ES7, enabling the development of modern and sophisticated web applications.",
      "Gained extensive knowledge and experience in JavaScript ES5/ES6/ES7, enabling the development of modern and sophisticated web applicationsRefined and applied DRF expertise to optimize API responses, ensuring streamlined and rapid data processing and retrieval.",
    ],
  },
  {
    title: "Back-End Developer",
    company_name: "Tymr",
    icon: django,
    iconBg: "#FAFAFA",
    date: "January 2019 - February 2020",
    points: [
      "Utilized Django Rest Framework (DRF) to build RESTful APIs, enabling seamless data communication between the Front-End and Back-End.Utilized Django Rest Framework to create efficient APIs, ensuring seamless front-end and back-end communication.",
      "Designed and executed Django models, enhancing API-database interactions.Designed and implemented Django models using ORM, ensuring efficient interactions between the Database and API.",
      " Successfully launched the project on a PAAS infrastructure using Docker and Docker-compose.Collaborated with Front-End developers using Git, facilitating version control and smooth teamwork.",
    ],
  },
  {
    title: "Digital Solutions Specialist: Web Designer IT Support Engineer",
    company_name: "Dinaweb",
    icon: django,
    iconBg: "#FAFAFA",
    date: "July 2008 - September 2018",
    points: [
      "Designed aesthetic websites using CMSs and developed Android applications, offering tailored digital solutions.",
      "Delivered comprehensive support, resolving a range of software, hardware, and network issues for diverse clients.",
      "Effectively managed team tasks and deadlines, ensuring a collaborative and productive work environment.",
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
