import { useAudio } from "../context/AudioContext";

export const useHoverSound = () => {
    const { playHoverSound } = useAudio();

    const onMouseEnter = () => {
        playHoverSound();
    };

    return { onMouseEnter };
};
