import { useEffect, useState } from "react";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";
import deathStar from "../assets/images/deathstar.png";
import tatooine from "../assets/images/tatooine.png";
import { motion, AnimatePresence } from "framer-motion";

const ShootingStarsBackground = () => {
  const [isDark, setIsDark] = useState(document.documentElement.classList.contains("dark-side"));

  useEffect(() => {
    // Listen for theme changes on the html element
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark-side"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed inset-0 -z-10 bg-black overflow-hidden">
      <ShootingStars />
      <StarsBackground />

      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.div
            key="deathstar"
            className="absolute top-[15%] left-[5%] w-[250px] h-[250px] md:w-[450px] md:h-[450px] pointer-events-none z-[-5]"
            initial={{ opacity: 0, x: -100, rotate: -5, scale: 0.9 }}
            animate={{
              opacity: 0.4,
              x: 0,
              rotate: 0,
              scale: 1,
              y: [0, -20, 0]
            }}
            exit={{ opacity: 0, x: -100, rotate: 5, scale: 0.9 }}
            transition={{
              opacity: { duration: 1.2 },
              x: { duration: 1.2 },
              y: { duration: 12, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 1.2 }
            }}
          >
            <div className="relative w-full h-full">
              <img
                src={deathStar}
                alt="Death Star"
                className="w-full h-full object-contain filter drop-shadow-[0_0_40px_rgba(239,68,68,0.25)]"
              />
              {/* Subtle red glow behind */}
              <div className="absolute inset-0 bg-red-600/10 blur-[100px] rounded-full -z-10" />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="tatooine"
            className="absolute top-[10%] left-[2%] w-[300px] h-[300px] md:w-[550px] md:h-[550px] pointer-events-none z-[-5]"
            initial={{ opacity: 0, x: -100, rotate: 5, scale: 0.9 }}
            animate={{
              opacity: 0.55,
              x: 0,
              rotate: 0,
              scale: 1,
              y: [0, 25, 0]
            }}
            exit={{ opacity: 0, x: -100, rotate: -5, scale: 0.9 }}
            transition={{
              opacity: { duration: 1.2 },
              x: { duration: 1.2 },
              y: { duration: 15, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 1.2 }
            }}
          >
            <div className="relative w-full h-full">
              <img
                src={tatooine}
                alt="Tatooine"
                className="w-full h-full object-contain filter drop-shadow-[0_0_60px_rgba(59,130,246,0.2)]"
              />
              {/* Subtle blue glow behind */}
              <div className="absolute inset-0 bg-blue-400/10 blur-[120px] rounded-full -z-10" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ShootingStarsBackground;

