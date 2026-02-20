import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useHoverSound } from "../../../hooks/useHoverSound";

const DownloadButton = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const { onMouseEnter } = useHoverSound();

  return (
    <motion.div
      className="relative w-[13.125rem] h-[3.125rem] cursor-pointer flex items-center border-[2px] border-[rgba(var(--color-primary),0.6)] shadow-lg shadow-neon rounded-full group"
      onMouseEnter={onMouseEnter}
      initial={{
        opacity: 0,
        y: 100,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{ delay: isMobile ? 0 : 0.5, duration: 1.5 }}
      viewport={{ once: true }}
    >
      <a
        href="https://drive.google.com/file/d/18iaBa0qSOL7h8kc7sTZzORLZmPpmF_jg/view?usp=sharing"
        target="_blank"
        download="Abhinandan_Ojha_Resume.pdf"
        className="absolute w-full h-full top-0 left-0 z-10"
      ></a>
      <button className="w-full h-full flex items-center px-5 relative overflow-hidden rounded-full focus:outline-none ">
        <span className="left-0 text-left text-white text-shadow-neon font-semibold transform transition-all duration-300 group-hover:text-transparent">
          Download Resume
        </span>
        <span className="absolute right-0 h-full w-9 md:w-8 xl:w-9 bg-[rgb(var(--color-primary))] flex items-center justify-center transition-all duration-300 group-hover:w-full">
          <FiDownload className="fill-gray text-xl text-white font-black" />
        </span>
      </button>
    </motion.div>
  );
};

export default DownloadButton;
