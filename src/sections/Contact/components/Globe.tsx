import createGlobe, { COBEOptions } from "cobe";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "../../../lib/utils";

function useThemeState() {
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
  return isDark;
}

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => { },
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1.2,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1], // white
  markerColor: [0.1, 0.4, 1], // blue without intense bloom
  glowColor: [0, 0, 0], // removed outer glow
  markers: [
    { location: [22.5726, 88.3639], size: 0.1 }, // Kolkata
  ],
};

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  // Keep track of phi for animation purposes
  const phiRef = useRef(0);
  let width = 0; // width of the canvas
  const canvasRef = useRef<HTMLCanvasElement>(null); // reference to the canvas element

  const isDark = useThemeState();

  // Callback function to update the state of the globe on render
  const onRender = useCallback(
    (state: Record<string, unknown>) => {
      phiRef.current += 0.005;
      state.phi = phiRef.current;
      state.width = width * 2;
      state.height = width * 2;
    },
    [width]
  );

  // Callback function to resize the canvas when the window is resized
  const onResize = () => {
    if (canvasRef.current) {
      width = canvasRef.current.offsetWidth;
    }
  };

  // UseEffect hook to add event listener for window resize and create the globe
  useEffect(() => {
    window.addEventListener("resize", onResize);
    onResize();
    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width * 2,
      height: width * 2,
      markerColor: isDark ? [0.93, 0.26, 0.26] : [0.1, 0.4, 1], // red for dark side, blue for light side
      onRender,
    });
    setTimeout(() => (canvasRef.current!.style.opacity = "1"));
    return () => {
      window.removeEventListener("resize", onResize);
      globe.destroy();
    };
  }, [isDark, config, onRender]);

  return (
    <div
      className={cn(
        "absolute aspect-[1/1] w-[18.75rem] sm:w-[17.5rem] md:w-[19rem] lg:w-[23.125rem]",
        className
      )}
    >
      {/* Add a canvas element to render the globe */}
      <canvas
        className="size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        ref={canvasRef}
      />
    </div>
  );
}
