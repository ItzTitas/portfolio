import {
  SiGit,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiWindows,
  SiLinux,
  SiDatabricks,
} from "react-icons/si";
import {
  FaNetworkWired,
  FaMemory,
  FaCode,
  FaJava,
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

export interface Skill {
  name: string;
  icon: React.ComponentType<{ size: string; color: string }>;
  color: string;
  size: string;
}

export const skillsData = [
  {
    id: 1,
    category: "Programming Languages",
    skills: [
      {
        name: "JAVA",
        icon: FaJava,
        color: "#ED8B00",
        progress: 85,
      },
      {
        name: "HTML",
        icon: SiHtml5,
        color: "#E34F26",
        progress: 95,
      },
      {
        name: "CSS",
        icon: SiCss3,
        color: "#1572B6",
        progress: 90,
      },
      {
        name: "JAVASCRIPT",
        icon: SiJavascript,
        color: "#F7DF1E",
        progress: 85,
      },
    ],
  },
  {
    id: 2,
    category: "Tools and Frameworks",
    skills: [
      {
        name: "GIT",
        icon: SiGit,
        color: "#F05032",
        progress: 85,
      },
      {
        name: "VS Code",
        icon: VscVscode,
        color: "#007ACC",
        progress: 90,
      },
      {
        name: "Dreamweaver",
        icon: FaCode,
        color: "#FF0000",
        progress: 70,
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "#4479A1",
        progress: 80,
      },
    ],
  },
  {
    id: 3,
    category: "Platforms",
    skills: [
      {
        name: "Windows",
        icon: SiWindows,
        color: "#0078D6",
        progress: 90,
      },
      {
        name: "Linux",
        icon: SiLinux,
        color: "#FCC624",
        progress: 85,
      },
    ],
  },
  {
    id: 4,
    category: "Subjects",
    skills: [
      {
        name: "Data Structure",
        icon: SiDatabricks,
        color: "#FF3621",
        progress: 85,
      },
      {
        name: "Operating System",
        icon: FaMemory,
        color: "#4CAF50",
        progress: 80,
      },
      {
        name: "Computer Networks",
        icon: FaNetworkWired,
        color: "#2196F3",
        progress: 80,
      },
    ],
  },
];
