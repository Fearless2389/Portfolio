import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor = () => {
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  // Core tracking values
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth springs for outer reticle tracing (highly refined for 60fps)
  const springConfig = { damping: 30, stiffness: 400, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (typeof window !== "undefined" && "ontouchstart" in window) {
      setIsHidden(true);
      return;
    }

    const onMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = e.target as HTMLElement;
      
      const clickable = target && target.closest 
        ? target.closest("a, button, input, textarea, [role='button'], label") 
        : null;
      
      setIsPointer(!!clickable);

      const isText = target?.tagName === "INPUT" || target?.tagName === "TEXTAREA";
      setIsHidden(isText);
    };

    const onDown = () => setIsClicking(true);
    const onUp = () => setIsClicking(false);
    const onLeave = () => setIsHidden(true);
    const onEnter = () => setIsHidden(false);

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mousedown", onDown, { passive: true });
    document.addEventListener("mouseup", onUp, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, [cursorX, cursorY]);

  if (isHidden && typeof window !== "undefined" && "ontouchstart" in window) return null;

  return (
    <>
      <style>{`
        @media (pointer: fine) {
          *, *::before, *::after { cursor: none !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { cursor: auto !important; }
        }
      `}</style>

      {/* Inner Dot - tracks mouse perfectly without lag */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-screen"
        style={{
          x: cursorX,
          y: cursorY,
          opacity: isHidden ? 0 : 1,
        }}
      >
        <motion.div
          animate={{ scale: isClicking ? 0.5 : 1 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="absolute top-0 left-0 w-[6px] h-[6px] -ml-[3px] -mt-[3px] bg-[#00f5ff] rounded-full shadow-[0_0_8px_2px_rgba(0,245,255,0.8)]"
        />
      </motion.div>

      {/* Outer Reticle - trails slightly for fluid motion */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] mix-blend-screen"
        style={{
          x: smoothX,
          y: smoothY,
          opacity: isHidden ? 0 : 1,
        }}
      >
        <motion.div
          className="absolute top-0 left-0 w-[40px] h-[40px] -ml-[20px] -mt-[20px]"
          animate={{
            scale: isClicking ? 0.85 : isPointer ? 1.2 : 1,
            opacity: isPointer ? 1 : 0.6,
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {/* Cyberpunk Glow Effect */}
          <motion.div 
            className="absolute inset-0 rounded-full bg-[#00f5ff]/5 blur-md"
            animate={{ opacity: isPointer ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Cyan Outer Arcs - CW rotation */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: isPointer ? 3 : 8, ease: "linear" }}
            className="absolute inset-0 rounded-full border-[1px] border-[#00f5ff]/20 border-t-[#00f5ff]/90 border-b-[#00f5ff]/90"
          />
          
          {/* Magenta Inner Ring - CCW rotation */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: isPointer ? 4 : 10, ease: "linear" }}
            className="absolute inset-[5px] rounded-full border-[1px] border-dashed border-[#ff2d75]/70"
          />

          {/* Accent Brackets */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: isPointer ? 15 : 25, ease: "linear" }}
            className="absolute inset-[-4px] opacity-40"
          >
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00f5ff]" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#00f5ff]" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#00f5ff]" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#00f5ff]" />
          </motion.div>

          {/* Crosshairs - fixed, no rotation */}
          <motion.div 
            className="absolute inset-0"
            animate={{ opacity: isPointer ? 0.9 : 0.4 }}
          >
            <span className="absolute top-[-4px] left-1/2 -translate-x-1/2 w-[1px] h-[3px] bg-[#00f5ff]" />
            <span className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-[1px] h-[3px] bg-[#00f5ff]" />
            <span className="absolute left-[-4px] top-1/2 -translate-y-1/2 h-[1px] w-[3px] bg-[#00f5ff]" />
            <span className="absolute right-[-4px] top-1/2 -translate-y-1/2 h-[1px] w-[3px] bg-[#00f5ff]" />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};
