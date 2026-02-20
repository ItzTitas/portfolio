import { FaSchool, FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { IconType } from "react-icons/lib";

interface ICredentialsData {
    id: number;
    title: string;
    date: string;
    organization: string;
    location?: string;
    desc?: string;
    icon: IconType;
}

export const credentialsData: ICredentialsData[] = [
    {
        id: 1,
        title: "Web Development Intern",
        date: "April 2025 - May 2025",
        organization: "Pinnacle Lab",
        desc: "Gaining hands-on experience in full-stack web development, contributing to real-world projects and refining proficiency in modern frameworks.",
        icon: FaBriefcase,
    },
    {
        id: 2,
        title: "B-Tech in Computer Science Engineering",
        date: "2022 - 2026",
        organization: "Institute of Engineering and Management (IEM)",
        location: "Kolkata, WB, India",
        desc: "Pursuing a comprehensive degree in CSE, focusing on algorithms, system design, and emerging AI technologies.",
        icon: FaGraduationCap,
    },
    {
        id: 3,
        title: "Higher Secondary Education",
        date: "2019 - 2021",
        organization: "Barasat Indira Gandhi Memorial High School",
        location: "Kolkata, WB, India",
        desc: "Focused on Science with a strong emphasis on Mathematics and Physics.",
        icon: FaSchool,
    },
    {
        id: 4,
        title: "Secondary Education",
        date: "2017 - 2018",
        organization: "Narayana Schools, Newtown",
        location: "Kolkata, WB, India",
        desc: "Early academic foundation with excellence in science and computing.",
        icon: FaSchool,
    },
    {
        id: 5,
        title: "Primary & Middle School",
        date: "2008 - 2016",
        organization: "Julien Day School (JDS), Ganganagar",
        location: "Kolkata, WB, India",
        icon: FaSchool,
    },
    {
        id: 6,
        title: "Elementary School",
        date: "2006 - 2007",
        organization: "South Point School",
        location: "Guwahati, Assam, India",
        icon: FaSchool,
    },
];
