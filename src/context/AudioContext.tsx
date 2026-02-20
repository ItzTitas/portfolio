import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import bgMusicLightSrc from "../assets/audio/bgmusic.mp3";
import bgMusicDarkSrc from "../assets/audio/bg_music_dark.mp3";
import hoverSoundSrc from "../assets/audio/button_hover.mp3";
import slideSoundSrc from "../assets/audio/slide.mp3";

interface AudioContextType {
    isMuted: boolean;
    toggleMute: () => void;
    playHoverSound: () => void;
    playSlideSound: () => void;
    startBgMusic: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isMuted, setIsMuted] = useState(false);
    const [audioStarted, setAudioStarted] = useState(false);

    const lightAudioRef = useRef<HTMLAudioElement | null>(null);
    const darkAudioRef = useRef<HTMLAudioElement | null>(null);
    const hoverAudioRef = useRef<HTMLAudioElement | null>(null);
    const slideAudioRef = useRef<HTMLAudioElement | null>(null);

    const [isDark, setIsDark] = useState(() =>
        typeof document !== "undefined" ? document.documentElement.classList.contains("dark-side") : false
    );

    useEffect(() => {
        const observer = new MutationObserver(() => {
            setIsDark(document.documentElement.classList.contains("dark-side"));
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        // Initialize background music
        const lightAudio = new Audio(bgMusicLightSrc);
        lightAudio.loop = true;
        lightAudio.volume = 0.4;
        lightAudioRef.current = lightAudio;

        const darkAudio = new Audio(bgMusicDarkSrc);
        darkAudio.loop = true;
        darkAudio.volume = 0.4;
        darkAudioRef.current = darkAudio;

        // Initialize hover sound
        const hoverAudio = new Audio(hoverSoundSrc);
        hoverAudio.volume = 0.2;
        hoverAudioRef.current = hoverAudio;

        // Initialize slide sound
        const slideAudio = new Audio(slideSoundSrc);
        slideAudio.volume = 0.5;
        slideAudioRef.current = slideAudio;

        return () => {
            lightAudio.pause();
            darkAudio.pause();
            lightAudioRef.current = null;
            darkAudioRef.current = null;
            slideAudioRef.current = null;
        };
    }, []);

    const activeAudioRef = isDark ? darkAudioRef : lightAudioRef;
    const inactiveAudioRef = isDark ? lightAudioRef : darkAudioRef;

    useEffect(() => {
        if (inactiveAudioRef.current) {
            inactiveAudioRef.current.pause();
        }
        if (activeAudioRef.current) {
            activeAudioRef.current.muted = isMuted;
            if (audioStarted && !isMuted) {
                // Ensure the new active audio plays since the old one paused
                activeAudioRef.current.play().catch(e => console.log("Theme swap play blocked:", e));
            }
        }
    }, [isDark, audioStarted, isMuted]);

    // Global listener to bypass autoplay restrictions on first interaction
    useEffect(() => {
        const handleInteraction = () => {
            if (activeAudioRef.current && !audioStarted) {
                activeAudioRef.current.play()
                    .then(() => {
                        setAudioStarted(true);
                        cleanup();
                    })
                    .catch((_e) => {
                        console.log("Autoplay still blocked:", _e);
                    });
            }
        };

        const cleanup = () => {
            window.removeEventListener("click", handleInteraction);
            window.removeEventListener("touchstart", handleInteraction);
            window.removeEventListener("keydown", handleInteraction);
            window.removeEventListener("scroll", handleInteraction);
        };

        if (!audioStarted) {
            window.addEventListener("click", handleInteraction);
            window.addEventListener("touchstart", handleInteraction);
            window.addEventListener("keydown", handleInteraction);
            window.addEventListener("scroll", handleInteraction); // Scroll sometimes works in certain mobile browsers
        }

        return cleanup;
    }, [audioStarted, activeAudioRef]);

    const toggleMute = () => {
        const newMuteState = !isMuted;
        setIsMuted(newMuteState);

        // If unmuting or first interaction, try to play
        if (activeAudioRef.current && (!audioStarted || !newMuteState)) {
            activeAudioRef.current.play()
                .then(() => setAudioStarted(true))
                .catch((_e) => console.log("Toggle play blocked:", _e));
        }
    };

    const playHoverSound = () => {
        if (hoverAudioRef.current && !isMuted) {
            // Clone the node so multiple overlaps can play if needed
            const sound = hoverAudioRef.current.cloneNode() as HTMLAudioElement;
            sound.volume = 0.2;
            sound.play().catch((_e) => console.log("Hover sound blocked:", _e));
        }
    };

    const playSlideSound = () => {
        if (slideAudioRef.current && !isMuted) {
            const sound = slideAudioRef.current.cloneNode() as HTMLAudioElement;
            sound.volume = 0.5;
            sound.play().catch((_e) => console.log("Slide sound blocked:", _e));
        }
    };

    const startBgMusic = () => {
        if (activeAudioRef.current && !audioStarted) {
            activeAudioRef.current.play()
                .then(() => setAudioStarted(true))
                .catch((_e) => {
                    console.log("Initial start blocked, waiting for interaction.");
                });
        }
    };

    return (
        <AudioContext.Provider value={{ isMuted, toggleMute, playHoverSound, playSlideSound, startBgMusic }}>
            {children}
        </AudioContext.Provider>
    );
};

export const useAudio = () => {
    const context = useContext(AudioContext);
    if (!context) {
        throw new Error("useAudio must be used within an AudioProvider");
    }
    return context;
};
