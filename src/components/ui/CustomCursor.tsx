import { useEffect, useRef, useState } from "react";

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const reticleRef = useRef<HTMLDivElement>(null);
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const pos = useRef({ x: -100, y: -100 });
  const reticlePos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number>(0);

  useEffect(() => {
    // Hide on touch devices
    if ("ontouchstart" in window) {
      setIsHidden(true);
      return;
    }

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };

      // Detect if hovering over interactive element
      const target = e.target as HTMLElement;
      const clickable = target.closest("a, button, input, textarea, [role='button'], label");
      setIsPointer(!!clickable);

      // Also hide on text inputs
      const isText = target.tagName === "INPUT" || target.tagName === "TEXTAREA";
      setIsHidden(isText);
    };

    const onDown = () => setIsClicking(true);
    const onUp = () => setIsClicking(false);
    const onLeave = () => setIsHidden(true);
    const onEnter = () => setIsHidden(false);

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    // Smooth lagging reticle animation loop
    const animate = () => {
      reticlePos.current.x += (pos.current.x - reticlePos.current.x) * 0.12;
      reticlePos.current.y += (pos.current.y - reticlePos.current.y) * 0.12;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }
      if (reticleRef.current) {
        reticleRef.current.style.transform = `translate(${reticlePos.current.x}px, ${reticlePos.current.y}px)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };
    rafId.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (isHidden && typeof window !== "undefined" && "ontouchstart" in window) return null;

  return (
    <>
      {/* 
        Global style to hide the default OS cursor.
        Must respect prefers-reduced-motion (we keep default cursor in that case).
      */}
      <style>{`
        @media (pointer: fine) {
          *, *::before, *::after { cursor: none !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { cursor: auto !important; }
        }
      `}</style>

      {/* Inner dot — snaps instantly to mouse */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9999] will-change-transform"
        style={{ marginLeft: "-3px", marginTop: "-3px" }}
      >
        <div
          className="transition-all duration-150 rounded-full"
          style={{
            width: isClicking ? "4px" : "6px",
            height: isClicking ? "4px" : "6px",
            background: "#00f5ff",
            boxShadow: "0 0 6px 2px rgba(0,245,255,0.8)",
            opacity: isHidden ? 0 : 1,
          }}
        />
      </div>

      {/* Outer reticle — lags behind to create trail feel */}
      <div
        ref={reticleRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9998] will-change-transform"
        style={{ marginLeft: "-16px", marginTop: "-16px" }}
      >
        <div
          className="relative transition-all duration-200"
          style={{
            width: isPointer ? "40px" : "32px",
            height: isPointer ? "40px" : "32px",
            opacity: isHidden ? 0 : isPointer ? 0.9 : 0.5,
            transform: isClicking ? "scale(0.8)" : "scale(1)",
          }}
        >
          {/* Four crosshair ticks */}
          {/* Top */}
          <span className="absolute left-1/2 -translate-x-1/2 top-0 block bg-[#00f5ff] transition-all duration-200"
            style={{ width: "1px", height: isPointer ? "6px" : "8px", boxShadow: "0 0 4px rgba(0,245,255,0.9)" }} />
          {/* Bottom */}
          <span className="absolute left-1/2 -translate-x-1/2 bottom-0 block bg-[#00f5ff] transition-all duration-200"
            style={{ width: "1px", height: isPointer ? "6px" : "8px", boxShadow: "0 0 4px rgba(0,245,255,0.9)" }} />
          {/* Left */}
          <span className="absolute top-1/2 -translate-y-1/2 left-0 block bg-[#00f5ff] transition-all duration-200"
            style={{ height: "1px", width: isPointer ? "6px" : "8px", boxShadow: "0 0 4px rgba(0,245,255,0.9)" }} />
          {/* Right */}
          <span className="absolute top-1/2 -translate-y-1/2 right-0 block bg-[#00f5ff] transition-all duration-200"
            style={{ height: "1px", width: isPointer ? "6px" : "8px", boxShadow: "0 0 4px rgba(0,245,255,0.9)" }} />

          {/* Corner brackets — collapse inward on hover = "lock-on" effect */}
          {/* Top-left */}
          <span className="absolute top-0 left-0 block border-t border-l border-[#0066ff] transition-all duration-200"
            style={{ width: isPointer ? "8px" : "6px", height: isPointer ? "8px" : "6px", opacity: isPointer ? 1 : 0.6 }} />
          {/* Top-right */}
          <span className="absolute top-0 right-0 block border-t border-r border-[#0066ff] transition-all duration-200"
            style={{ width: isPointer ? "8px" : "6px", height: isPointer ? "8px" : "6px", opacity: isPointer ? 1 : 0.6 }} />
          {/* Bottom-left */}
          <span className="absolute bottom-0 left-0 block border-b border-l border-[#0066ff] transition-all duration-200"
            style={{ width: isPointer ? "8px" : "6px", height: isPointer ? "8px" : "6px", opacity: isPointer ? 1 : 0.6 }} />
          {/* Bottom-right */}
          <span className="absolute bottom-0 right-0 block border-b border-r border-[#0066ff] transition-all duration-200"
            style={{ width: isPointer ? "8px" : "6px", height: isPointer ? "8px" : "6px", opacity: isPointer ? 1 : 0.6 }} />
        </div>
      </div>
    </>
  );
};
