import { IoLogoGithub, IoMdOpen } from "react-icons/io";
import project1 from "./../assets/images/project1.png";
import project2 from "./../assets/images/project2.png";
import project3 from "./../assets/images/project3.png";
import project4 from "./../assets/images/project4.png";
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
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

export const projectsData = [
  {
    id: 1,
    title: "Amicizia Life Science",
    desc: "A comprehensive platform for Amicizia Life Science, a leading wholesale distributor of veterinary medicines and healthcare products.",
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
    desc: "An integrated platform for tracking team sales in real-time and managing employee tasks, designed to streamline operations and enhance productivity.",
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
    image: project1, // Placeholder
    genre: "Web",
    links: [
      {
        icon: IoMdOpen,
        text: "Live",
        url: "#", // Add link if provided
      },
    ],
    tech_used: [
      { icon: SiReact, name: "React" },
      { icon: SiTailwindcss, name: "Tailwind CSS" },
      { icon: SiTypescript, name: "TypeScript" },
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
