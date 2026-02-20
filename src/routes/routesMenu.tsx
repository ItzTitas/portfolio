import {
  FaCode,
  FaHandshake,
  FaHome,
  FaLaptopCode,
  FaPaperPlane,
  FaGraduationCap,
} from "react-icons/fa";

// Routes menu data in the navigation bar
export const routesMenu = [
  {
    id: "home",
    label: "Home",
    path: "/#home",
    icon: <FaHome />,
  },
  {
    id: "project",
    label: "Project",
    path: "/#project",
    icon: <FaLaptopCode />,
  },
  {
    id: "technical-skill",
    label: "Tech Skill",
    path: "/#technical-skill",
    icon: <FaCode />,
  },
  {
    id: "service",
    label: "Service",
    path: "/#service",
    icon: <FaHandshake />,
  },
  {
    id: "credential",
    label: "Credential",
    path: "/#credential",
    icon: <FaGraduationCap />,
  },
  {
    id: "contact",
    label: "Contact",
    path: "/#contact",
    icon: <FaPaperPlane />,
  },
];
