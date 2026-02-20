import { useMediaQuery } from "react-responsive";
import SocialIcons from "../components/SocialIcons";
import { motion } from "framer-motion";

const Footer = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <footer>
      <motion.hr
        className="my-24"
        initial={{ width: "0%", marginLeft: "50%" }}
        whileInView={{ width: "100%", marginLeft: "0%" }}
        transition={{ duration: isMobile ? 2 : 1.5 }}
        viewport={{ once: true }}
      />

      <motion.div
        className="flex justify-center py-14"
        initial={{
          opacity: 0,
          y: -100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{ delay: isMobile ? 0.25 : 0.4, duration: 1.5 }}
        viewport={{ once: true }}
      >
        <SocialIcons />
      </motion.div>
      <motion.div
        className="flex flex-col sm:flex-row justify-center text-xs sm:text-sm lg:text-base font-light gap-x-1"
        initial={{
          opacity: 0,
          y: -100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{ delay: isMobile ? 0.5 : 0.65, duration: 1.5 }}
        viewport={{ once: true }}
      >
        <p>&#169; 2026 Abhinandan Ojha.</p>
      </motion.div>
    </footer >
  );
};

export default Footer;
