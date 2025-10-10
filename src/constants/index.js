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
    id: "/",
    title: "Home",
    titleKey: "home",
    isRoute: true,
  },
  {
    id: "/portfolio",
    title: "Portfolio",
    titleKey: "portfolio",
    isRoute: true,
  },
  {
    id: "/blog",
    title: "Blog",
    titleKey: "blog",
    isRoute: true,
  },
  {
    id: "/tutorials",
    title: "Tutorials",
    titleKey: "tutorials",
    isRoute: true,
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/FarzanHosseini",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/farzan-hosseini",
    icon: "linkedin",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/farzanhosseini",
    icon: "twitter",
  },
  {
    name: "Email",
    url: "mailto:farzan@example.com",
    icon: "email",
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
      "Design System Overhaul & Codebase Simplification: Redesigned the project’s design system and folder structure, eliminating unnecessary code and third-party dependencies. Transitioned the codebase to a self-explanatory format, dramatically reducing bug-fixing times and improving the development process.",
      "Agile Development: Championed Agile and Scrum methodologies, ensuring seamless team coordination and on-time delivery of weekly sprint tasks. This strategic approach markedly increased team productivity and project delivery rates.",
      "AI Integration & Prompt Engineering: Integrated advanced AI functionalities into the application using prompt engineering, enhancing user experience and enabling more intelligent workflows for users.",
      "Efficiency & Scalability Improvements: Removed redundancies across the codebase, improving maintainability, feature development speed, and team collaboration. These changes empowered developers to resolve bugs faster and deploy features seamlessly.",
      "Landing Page Development with Webflow: Spearheaded the design and implementation of the project’s landing page, transitioning to a new project ecosystem with Webflow to enhance digital presence and brand identity.",
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
      "Web Development: Created custom websites for small businesses using WordPress, HTML, and CSS.",
      "Solution Optimization: Developed a foundational understanding of user-centric design and responsive web development.",
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

const blogPosts = [
  {
    title: "Building a 3D Portfolio with Three.js and React",
    slug: "building-3d-portfolio-threejs-react",
    description:
      "Learn how I built my interactive 3D portfolio using Three.js, React Three Fiber, and modern web technologies. This post covers the architecture, challenges, and solutions.",
    date: "October 8, 2025",
    image: three,
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "threejs", color: "green-text-gradient" },
      { name: "webdev", color: "pink-text-gradient" },
    ],
    content: `Creating an interactive 3D portfolio was an exciting challenge that pushed my skills in both web development and 3D graphics. In this post, I'll share the journey of building this portfolio and the technologies that made it possible.

## Why 3D?

In today's competitive tech landscape, standing out is crucial. A 3D portfolio not only showcases technical skills but also demonstrates creativity and attention to detail. It's an immersive experience that engages visitors in a way traditional portfolios can't.

## The Tech Stack

I chose React Three Fiber for its seamless integration with React and its declarative approach to 3D scene creation. Combined with Three.js for the heavy lifting and Framer Motion for smooth animations, the result is a performant and visually stunning website.

## Key Challenges

Performance optimization was the biggest challenge. 3D graphics can be resource-intensive, so I implemented lazy loading, level of detail (LOD) techniques, and careful memory management to ensure smooth performance across devices.

## Lessons Learned

Building this portfolio taught me the importance of balancing aesthetics with performance. Every 3D element needs to serve a purpose and be optimized for the web. The journey was challenging but incredibly rewarding.`,
    github: "https://github.com/FarzanHosseini/3d-portfolio",
  },
  {
    title: "Modern State Management in React: Beyond Redux",
    slug: "modern-state-management-react",
    description:
      "Exploring modern state management solutions in React applications, including Context API, Zustand, Jotai, and when to use each approach for optimal performance.",
    date: "September 25, 2025",
    image: reactjs,
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "state-management", color: "green-text-gradient" },
      { name: "performance", color: "pink-text-gradient" },
    ],
    content: `State management has evolved significantly in the React ecosystem. While Redux remains popular, newer solutions offer simpler APIs and better performance for many use cases.

## The Evolution of State Management

From prop drilling to Redux, to hooks and Context API, state management in React has come a long way. Modern solutions like Zustand and Jotai offer minimal boilerplate while maintaining excellent performance.

## When to Use What

Context API is perfect for theme and auth state. Zustand excels at global state with minimal setup. Jotai shines with atomic state updates. And Redux? Still great for complex applications with time-travel debugging needs.

## Performance Considerations

Understanding re-render patterns is crucial. I'll show you how each solution handles updates and how to optimize your React applications for maximum performance.

## Practical Examples

Through real-world examples, we'll explore migration strategies and best practices for implementing these state management solutions in your projects.`,
  },
  {
    title: "Django REST Framework: Building Scalable APIs",
    slug: "django-rest-framework-scalable-apis",
    description:
      "A comprehensive guide to building production-ready REST APIs with Django REST Framework, covering authentication, serialization, optimization, and best practices.",
    date: "August 15, 2025",
    image: backend,
    tags: [
      { name: "django", color: "blue-text-gradient" },
      { name: "python", color: "green-text-gradient" },
      { name: "api", color: "pink-text-gradient" },
    ],
    content: `Django REST Framework (DRF) is my go-to tool for building robust, scalable APIs. In this post, I'll share insights from building production APIs that handle thousands of requests per second.

## Why DRF?

DRF provides a powerful toolkit for building Web APIs, including authentication, serialization, and browsable API documentation out of the box. It's battle-tested and production-ready.

## Architecture Patterns

Proper API architecture is crucial for maintainability. I'll cover viewsets, serializers, permissions, and how to organize your Django project for maximum scalability.

## Performance Optimization

From query optimization to caching strategies, I'll share techniques that have helped me build APIs that remain fast under heavy load.

## Security Best Practices

Security isn't optional. We'll cover authentication, authorization, rate limiting, and other security measures essential for production APIs.`,
    github: "https://github.com/FarzanHosseini",
  },
];

const tutorials = [
  {
    title: "Getting Started with React Three Fiber",
    slug: "getting-started-react-three-fiber",
    description:
      "A beginner-friendly guide to creating 3D experiences in React using React Three Fiber. Learn the basics and create your first 3D scene.",
    date: "September 30, 2025",
    difficulty: "beginner",
    image: three,
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "threejs", color: "green-text-gradient" },
      { name: "tutorial", color: "pink-text-gradient" },
    ],
    content: `Welcome to this comprehensive tutorial on React Three Fiber! If you've ever wanted to add stunning 3D graphics to your React applications, you're in the right place.

## Prerequisites

Basic knowledge of React and JavaScript is required. No prior 3D graphics experience needed!

## Installation

First, let's set up our project:

\`\`\`
npm create vite@latest my-3d-app -- --template react
cd my-3d-app
npm install three @react-three/fiber @react-three/drei
\`\`\`

## Your First 3D Scene

Let's create a simple rotating cube:

\`\`\`
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function Box() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  )
}

export default function App() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box />
      <OrbitControls />
    </Canvas>
  )
}
\`\`\`

## Understanding the Code

The Canvas component creates a Three.js scene. Inside, we define our 3D objects using familiar React patterns. The mesh component is like a div, but for 3D!

## Adding Animation

Let's make our cube rotate:

\`\`\`
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

function Box() {
  const meshRef = useRef()
  
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta
    meshRef.current.rotation.y += delta
  })
  
  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  )
}
\`\`\`

## Next Steps

Congratulations! You've created your first 3D React scene. From here, you can explore more complex geometries, materials, lighting, and interactions.`,
    github: "https://github.com/FarzanHosseini/r3f-tutorial",
  },
  {
    title: "Tailwind CSS: From Zero to Hero",
    slug: "tailwind-css-zero-to-hero",
    description:
      "Master Tailwind CSS with this comprehensive tutorial. Learn utility-first CSS, responsive design, custom configurations, and advanced techniques.",
    date: "August 20, 2025",
    difficulty: "beginner",
    image: tailwind,
    tags: [
      { name: "css", color: "blue-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
      { name: "design", color: "pink-text-gradient" },
    ],
    content: `Tailwind CSS has revolutionized how we write CSS. In this tutorial, I'll take you from zero to building beautiful, responsive interfaces with Tailwind.

## Why Tailwind?

Tailwind's utility-first approach means you can build complex interfaces without writing custom CSS. It's fast, flexible, and incredibly powerful.

## Installation

Let's get Tailwind set up in your project:

\`\`\`
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
\`\`\`

Configure your template paths in tailwind.config.js:

\`\`\`
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
\`\`\`

## Core Concepts

Tailwind uses utility classes like \`flex\`, \`pt-4\`, \`text-center\` instead of writing custom CSS. This might feel weird at first, but you'll quickly appreciate the speed and consistency.

## Building a Component

Let's create a beautiful card component:

\`\`\`
<div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
  <img className="w-full" src="/image.jpg" alt="Card" />
  <div className="px-6 py-4">
    <h2 className="font-bold text-xl mb-2">Card Title</h2>
    <p className="text-gray-700 text-base">
      Card description goes here.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
      #tag
    </span>
  </div>
</div>
\`\`\`

## Responsive Design

Tailwind makes responsive design easy with breakpoint prefixes:

\`\`\`
<div className="text-sm md:text-base lg:text-lg xl:text-xl">
  Responsive text
</div>
\`\`\`

## Custom Configuration

Extend Tailwind to match your brand:

\`\`\`
theme: {
  extend: {
    colors: {
      primary: '#3B82F6',
      secondary: '#1F2937',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
  },
}
\`\`\`

## Best Practices

- Use @apply sparingly for repeated patterns
- Leverage Tailwind plugins for extended functionality
- Configure PurgeCSS to keep production builds small
- Use the JIT compiler for instant builds

## Conclusion

Tailwind CSS empowers you to build beautiful interfaces quickly. With practice, you'll be designing and coding simultaneously, dramatically speeding up your workflow.`,
  },
  {
    title: "Building a Full-Stack App with Django and React",
    slug: "fullstack-django-react",
    description:
      "Learn how to build a complete full-stack application using Django REST Framework for the backend and React for the frontend, with authentication and deployment.",
    date: "July 10, 2025",
    difficulty: "intermediate",
    image: blogapp,
    tags: [
      { name: "django", color: "blue-text-gradient" },
      { name: "react", color: "green-text-gradient" },
      { name: "fullstack", color: "pink-text-gradient" },
    ],
    content: `Building full-stack applications requires understanding both frontend and backend technologies. In this tutorial, we'll create a complete application from scratch.

## Project Overview

We'll build a task management application with user authentication, CRUD operations, and a modern React frontend. By the end, you'll have a production-ready application.

## Backend Setup

First, let's create our Django project:

\`\`\`
python -m venv venv
source venv/bin/activate
pip install django djangorestframework django-cors-headers
django-admin startproject backend
cd backend
python manage.py startapp tasks
\`\`\`

## Creating Models

Define your data models in models.py:

\`\`\`
from django.db import models
from django.contrib.auth.models import User

class Task(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.TextField()
    completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['-created_at']
\`\`\`

## Serializers and Views

Create serializers for your API:

\`\`\`
from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'
\`\`\`

## Frontend Setup

Create your React application:

\`\`\`
npm create vite@latest frontend -- --template react
cd frontend
npm install axios react-router-dom
\`\`\`

## Connecting Frontend and Backend

Use axios to make API calls:

\`\`\`
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
})

export const getTasks = () => api.get('/tasks/')
export const createTask = (task) => api.post('/tasks/', task)
export const updateTask = (id, task) => api.put(\`/tasks/\${id}/\`, task)
export const deleteTask = (id) => api.delete(\`/tasks/\${id}/\`)
\`\`\`

## Authentication

Implement JWT authentication for secure API access. Use Django Rest Framework Simple JWT and handle tokens on the frontend.

## Deployment

Finally, deploy your application using platforms like Railway for Django and Vercel for React.

## Conclusion

You now have a solid foundation for building full-stack applications. Continue learning by adding features like real-time updates, file uploads, and advanced authentication!`,
    github: "https://github.com/FarzanHosseini/fullstack-tutorial",
  },
];

export { services, technologies, experiences, testimonials, projects, blogPosts, tutorials };
