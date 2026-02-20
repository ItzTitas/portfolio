import { useEffect, useState } from "react";
import { useHoverSound } from "../hooks/useHoverSound";
import { useAudio } from "../context/AudioContext";
import { motion, AnimatePresence } from "framer-motion";

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(false);
    const [themeSwish, setThemeSwish] = useState<'light' | 'dark' | null>(null);
    const { onMouseEnter } = useHoverSound();
    const { playSlideSound } = useAudio();

    useEffect(() => {
        // Check initial state from local storage or default to false
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setIsDark(true);
            document.documentElement.classList.add("dark-side");
        }
    }, []);

    const toggleTheme = (dark: boolean) => {
        if (dark === isDark) return;

        setThemeSwish(dark ? 'dark' : 'light');
        playSlideSound();

        // Swap the actual underlying theme precisely when the screen is heavily obfuscated by the middle of the sweep
        setTimeout(() => {
            setIsDark(dark);
            if (dark) {
                document.documentElement.classList.add("dark-side");
                localStorage.setItem("theme", "dark");
            } else {
                document.documentElement.classList.remove("dark-side");
                localStorage.setItem("theme", "light");
            }
        }, 500);

        // Remove the swish overlay entirely after the animation ends
        setTimeout(() => {
            setThemeSwish(null);
        }, 1100);
    };

    const isDarkSwish = themeSwish === 'dark';

    return (
        <>
            <motion.div
                className="relative flex w-72 h-14 rounded-full overflow-hidden border-2 border-[rgba(var(--color-primary),0.6)] shadow-neon bg-transparent mx-auto sm:mx-0 group cursor-pointer backdrop-blur-md"
                onMouseEnter={onMouseEnter}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <button
                    onClick={() => toggleTheme(false)}
                    className={`absolute left-0 top-0 bottom-0 w-[55%] flex items-center justify-center text-xs sm:text-base font-bold tracking-widest transition-all duration-300 z-10
            ${!isDark ? 'text-white drop-shadow-[0_0_8px_rgba(37,99,235,0.8)] bg-blue-500/20 border-r border-blue-500/50' : 'text-blue-400 hover:text-white hover:drop-shadow-[0_0_8px_rgba(37,99,235,0.8)] hover:bg-blue-500/10'}`}
                    style={{ clipPath: "polygon(0 0, 100% 0, calc(100% - 1.5rem) 100%, 0 100%)", paddingRight: '0.5rem' }}
                >
                    LIGHT SIDE
                </button>

                <button
                    onClick={() => toggleTheme(true)}
                    className={`absolute right-0 top-0 bottom-0 w-[55%] flex items-center justify-center text-xs sm:text-base font-bold tracking-widest transition-all duration-300 z-10
            ${isDark ? 'text-white drop-shadow-[0_0_8px_rgba(239,68,68,0.8)] bg-red-500/20 border-l border-red-500/50' : 'text-red-400 hover:text-white hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.8)] hover:bg-red-500/10'}`}
                    style={{ clipPath: "polygon(1.5rem 0, 100% 0, 100% 100%, 0 100%)", paddingLeft: '0.5rem' }}
                >
                    DARK SIDE
                </button>
            </motion.div>

            <AnimatePresence>
                {themeSwish && (
                    <motion.div
                        className="fixed top-[-50%] bottom-[-50%] w-[150vw] pointer-events-none z-[100]"
                        style={{
                            rotate: '15deg',
                            background: isDarkSwish
                                ? 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0) 1%, rgba(255,255,255,1) 2%, rgba(255,255,255,1) 3%, rgba(239,68,68,1) 6%, rgba(69,10,10,1) 50%, rgba(239,68,68,1) 94%, rgba(255,255,255,1) 97%, rgba(255,255,255,1) 98%, rgba(255,255,255,0) 99%, transparent 100%)'
                                : 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0) 1%, rgba(255,255,255,1) 2%, rgba(255,255,255,1) 3%, rgba(59,130,246,1) 6%, rgba(23,37,84,1) 50%, rgba(59,130,246,1) 94%, rgba(255,255,255,1) 97%, rgba(255,255,255,1) 98%, rgba(255,255,255,0) 99%, transparent 100%)',
                        }}
                        initial={{
                            x: isDarkSwish ? '120vw' : '-170vw',
                            opacity: 1
                        }}
                        animate={{
                            x: isDarkSwish ? '-170vw' : '120vw',
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.0, ease: "easeInOut" }}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default ThemeToggle;
