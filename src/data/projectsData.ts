import { IoLogoGithub, IoMdOpen } from "react-icons/io";
import project1 from "./../assets/images/project1.png";
import project2 from "./../assets/images/project2.png";
import project3 from "./../assets/images/project3.png";
import project4 from "./../assets/images/project4.png";
import project5 from "./../assets/images/project5.png";
import project6 from "./../assets/images/project6.png";
import project7 from "./../assets/images/project7.png";
import project8 from "./../assets/images/project8.png";
import {
  SiFlask,
  SiGoogledrive,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiSocketdotio,
  SiFirebase,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

export const projectsData = [
  {
    id: 1,
    title: "Pharma Website with E-commerce",
    desc: "A production-ready corporate platform combining brand presence with digital commerce capabilities. The system enables customers to explore veterinary solutions by species category, view detailed product information, and engage with the company through an intuitive and visually polished interface.",
    image: project1, // Keeping placeholder until user provides images
    genre: "Web",
    links: [
      {
        icon: IoMdOpen,
        text: "Live",
        url: "https://amicizialifescience.com/",
      },
    ],
    tech_used: [
      { icon: SiReact, name: "React" },
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: SiTailwindcss, name: "Tailwind CSS" },
      { icon: SiTypescript, name: "TypeScript" },
    ],
  },
  {
    id: 2,
    title: "Sales Tracker and Employee Task Provider",
    desc: "A production-grade administrative control platform for managing field sales teams. The system centralizes route planning, personnel assignment, and customer engagement workflows, enabling organizations to coordinate distributed teams efficiently while maintaining full visibility over operational activities.",
    image: project2,
    genre: "Web",
    links: [
      {
        icon: IoMdOpen,
        text: "Live",
        url: "https://attendance.amicizialifescience.com/",
      },
    ],
    tech_used: [
      { icon: SiReact, name: "React" },
      { icon: SiTailwindcss, name: "Tailwind CSS" },
      { icon: TbApi, name: "REST APIs" },
    ],
  },
  {
    id: 3,
    title: "GenAI Resume Screening",
    desc: "AI-powered resume screening tool that utilizes LLMs to evaluate and score resumes against job requirements for streamlined hiring.",
    image: project3,
    genre: "AI / ML",
    links: [
      {
        icon: IoLogoGithub,
        text: "GitHub",
        url: "https://github.com/ItzTitas/GenAIProject",
      },
    ],
    tech_used: [
      { icon: SiPython, name: "Python" },
      { icon: SiGoogledrive, name: "Google Generative AI" },
      { icon: SiFlask, name: "Flask" },
    ],
  },
  {
    id: 4,
    title: "Star Wars Portfolio",
    desc: "A modern, highly animated Star Wars-themed professional portfolio showcasing projects and skills with a unique cinematic experience.",
    image: project4,
    genre: "Web",
    links: [
      {
        icon: IoLogoGithub,
        text: "GitHub",
        url: "https://github.com/ItzTitas/portfolio",
      },
    ],
    tech_used: [
      { icon: SiReact, name: "React" },
      { icon: SiVite, name: "Vite" },
      { icon: SiTailwindcss, name: "Tailwind CSS" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: SiFramer, name: "Framer Motion" },
    ],
  },
  {
    id: 5,
    title: "Attendance System over WebApp",
    desc: "A production-grade Field Operations Management Platform built for pharmaceutical sales teams. The system centralizes workforce coordination by enabling administrators to manage organizational hierarchy, managers to assign daily routes and customers, and employees to log attendance and field visits in real time. Includes analytics dashboards, automated reporting, and mobile accessibility for on-the-go usage",
    image: project5,
    genre: "Web",
    links: [
      {
        icon: IoMdOpen,
        text: "Live",
        url: "https://office.amicizialifescience.com/",
      },
    ],
    tech_used: [
      { icon: SiReact, name: "React" },
      { icon: SiTailwindcss, name: "Tailwind CSS" },
      { icon: SiTypescript, name: "TypeScript" },
    ],
  },
  {
    id: 6,
    title: "Inventory and Finance Manager",
    desc: "A production-grade operations platform that unifies inventory control, manufacturing workflow tracking, and financial oversight into a single system. Designed to reduce manual record-keeping and improve visibility across procurement, production, and distribution processes.",
    image: project6,
    genre: "Web",
    links: [
      {
        icon: IoMdOpen,
        text: "Live",
        url: "https://inventory.amicizialifescience.com/",
      },
    ],
    tech_used: [
      { icon: SiReact, name: "React" },
      { icon: SiTailwindcss, name: "Tailwind CSS" },
      { icon: SiTypescript, name: "TypeScript" },
    ],
  },
  {
    id: 7,
    title: "I Can't Decide What to Watch",
    desc: "A web-based movie and TV show discovery platform with a premium, pool-table-inspired shelf layout. Users can toggle between Movies and Shows, search titles, and filter by genre, era, rating, and more. Swipeable cards fit within a structured slab hierarchy, ensuring a consistent, responsive experience across desktop and mobile.",
    image: project7,
    genre: "Web",
    links: [
      {
        icon: IoMdOpen,
        text: "Live",
        url: "https://icantdecidewhattowatch.vercel.app/",
      },
    ],
    tech_used: [
      { icon: SiVite, name: "Vite" },
      { icon: SiReact, name: "React" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: SiTailwindcss, name: "Tailwind CSS" },
    ],
  },
  {
    id: 8,
    title: "Super Tic Tac Toh",
    desc: "A real-time multiplayer strategy game where players compete on a 3×3 grid of mini Tic-Tac-Toe boards. Players claim blocks by winning mini boards and aim to secure three blocks in a row to win the match. Features a nostalgic Windows XP-style interface with matchmaking, friend rooms, and a leaderboard.",
    image: project8,
    genre: "Web",
    links: [
      {
        icon: IoMdOpen,
        text: "Live",
        url: "https://supertictactoh.vercel.app/",
      },
    ],
    tech_used: [
      { icon: SiNodedotjs, name: "Node.js" },
      { icon: SiExpress, name: "Express" },
      { icon: SiSocketdotio, name: "Socket.IO" },
      { icon: SiFirebase, name: "Firebase" },
    ],
  },
];

export const genres = [
  // Add "ALL" to the beginning of the array
  "All",
  ...Array.from(new Set(projectsData.flatMap((project) => project.genre))),
];

// Function to filter projects based on genre
export const filterProjects = (genre: string) => {
  if (genre === "All") {
    return projectsData;
  }
  return projectsData.filter((project) =>
    Array.isArray(project.genre)
      ? project.genre.includes(genre)
      : project.genre === genre
  );
};
