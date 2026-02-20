import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import bgMusicSrc from "../assets/audio/bgmusic.mp3";
import hoverSoundSrc from "../assets/audio/button_hover.mp3";

interface AudioContextType {
    isMuted: boolean;
    toggleMute: () => void;
    playHoverSound: () => void;
    startBgMusic: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isMuted, setIsMuted] = useState(false);
    const [audioStarted, setAudioStarted] = useState(false);
    const bgAudioRef = useRef<HTMLAudioElement | null>(null);
    const hoverAudioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Initialize background music
        const bgAudio = new Audio(bgMusicSrc);
        bgAudio.loop = true;
        bgAudio.volume = 0.4;
        bgAudioRef.current = bgAudio;

        // Initialize hover sound
        const hoverAudio = new Audio(hoverSoundSrc);
        hoverAudio.volume = 0.2;
        hoverAudioRef.current = hoverAudio;

        return () => {
            bgAudio.pause();
            bgAudioRef.current = null;
        };
    }, []);

    useEffect(() => {
        if (bgAudioRef.current) {
            bgAudioRef.current.muted = isMuted;
        }
    }, [isMuted]);

    // Global listener to bypass autoplay restrictions on first interaction
    useEffect(() => {
        const handleInteraction = () => {
            if (bgAudioRef.current && !audioStarted) {
                bgAudioRef.current.play()
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
    }, [audioStarted]);

    const toggleMute = () => {
        const newMuteState = !isMuted;
        setIsMuted(newMuteState);

        // If unmuting or first interaction, try to play
        if (bgAudioRef.current && (!audioStarted || !newMuteState)) {
            bgAudioRef.current.play()
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

    const startBgMusic = () => {
        if (bgAudioRef.current && !audioStarted) {
            bgAudioRef.current.play()
                .then(() => setAudioStarted(true))
                .catch((_e) => {
                    console.log("Initial start blocked, waiting for interaction.");
                });
        }
    };

    return (
        <AudioContext.Provider value={{ isMuted, toggleMute, playHoverSound, startBgMusic }}>
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
