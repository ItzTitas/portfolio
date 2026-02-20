import { FaLinkedin, FaGithub, FaYoutube, FaFacebook } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { SocialIconsAnimation } from "./ui/social-icons-animation";

const iconData = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin className="size-full" />,
    hoverColor: "text-[#0A66C2]",
    href: "https://www.linkedin.com/in/abhinandan-ojha-66864421b/",
  },
  {
    name: "GitHub",
    icon: <FaGithub className="size-full" />,
    hoverColor: "text-[#6E5494]",
    href: "https://github.com/ItzTitas",
  },
  {
    name: "YouTube",
    icon: <FaYoutube className="size-full" />,
    hoverColor: "text-[#FF0000]",
    href: "https://www.youtube.com/@itztitas",
  },
  {
    name: "Facebook",
    icon: <FaFacebook className="size-full" />,
    hoverColor: "text-[#1877F2]",
    href: "https://www.facebook.com/NoobTitas69/",
  },
  {
    name: "Email",
    icon: <IoMdMail className="size-full" />,
    hoverColor: "text-[#00B2FF]",
    href: "mailto:titasojha13@gmail.com",
  },
];

const SocialIcons = () => {
  return (
    <div>
      <SocialIconsAnimation items={iconData} />
    </div>
  );
};

export default SocialIcons;
