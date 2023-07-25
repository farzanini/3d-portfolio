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
  nodejs,
  python,
  django,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  blogapp,
  jobit,
  tripguide,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    title: "Freelance Full Stack Developer ",
    company_name: "Australia",
    icon: starbucks,
    iconBg: "#383E56",
    date: "From February 2021",
    points: [
      "Successfully transitioned from a Front-End developer to a full-stack React and Django developer",
      "Utilized Redux to implement a robust 'store,' effectively managing data across multiple components and pages",
      "Demonstrated expertise in utilizing various React component libraries to enhance UI/UX and optimize development efficiency",
      "Gained extensive knowledge and experience in JavaScript ES5/ES6/ES7, enabling the development of modern and sophisticated web applications",
      "Deepened Django Rest Framework (DRF) knowledge, resulting in faster and more streamlined API responses",
      "Designed and implemented a relational database model using Django ORM, ensuring efficient data management and retrieval",
    ],
  },
  {
    title: "Back-End Developer",
    company_name: "Tymer",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "January 2020 - February 2021",
    points: [
      "Utilized Django Rest Framework (DRF) to build RESTful APIs, enabling seamless data communication between the Front-End and Back-End.",
      "Designed and implemented Django models using ORM, ensuring efficient interactions between the Database and API.",
      "Collaborated with Front-End developers using Git, facilitating version control and smooth teamwork.",
      "Successfully deployed the project using Docker and Docker-compose, effectively deploying it on a Platform-as-a-Service (PAAS) infrastructure.",
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
    source_code_link: "https://github.com/FarzanHosseini/blog-app",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
