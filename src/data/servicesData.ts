import { BiServer } from "react-icons/bi";
import { PiCode, PiDatabase, PiCpu } from "react-icons/pi";

export const servicesData = [
  {
    id: 1,
    name: "AI & Web Development",
    desc: "Building intelligent, high-performance web applications using React, Next.js, and Generative AI. I specialize in integrating LLMs to create autonomous and user-centric digital solutions.",
    icon: PiCode,
  },
  {
    id: 2,
    name: "Internal Tooling & Process Optimization",
    desc: "Developing custom internal systems like Amicizia Attendance to streamline operations, track metrics, and improve organizational efficiency through automation.",
    icon: BiServer,
  },
  {
    id: 3,
    name: "Managed Database Systems (DBMS)",
    desc: "Designing and optimizing robust database architectures using SQL and NoSQL (MongoDB, Oracle). I focus on data integrity, security, and high-availability systems.",
    icon: PiDatabase,
  },
  {
    id: 4,
    name: "IoT & Embedded Systems",
    desc: "Designing and building physical portable devices and embedded systems using microcontrollers like Arduino, focusing on hardware integration, sensors, and real-world data acquisition.",
    icon: PiCpu,
  },
];
