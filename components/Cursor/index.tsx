import React, { useCallback, useEffect, useRef, useState } from "react";

const Cursor = () => {
  const dot = useRef<HTMLDivElement>(null);
  const trail = useRef<HTMLDivElement>(null);
  const [cursorState, setCursorState] = useState({
    color: "#00ff88",
    scale: 1,
    opacity: 1,
    blend: "difference"
  });

  const cursorVisible = useRef(true);
  const cursorEnlarged = useRef(false);
  const lastPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (dot.current) {
      dot.current.style.opacity = "1"; // Force cursor visibility
    }
  }, []);

  const toggleCursorVisibility = useCallback(() => {
    if (dot.current) {
      dot.current.style.opacity = cursorVisible.current ? "1" : "0";
    }
  }, []);

  const toggleCursorSize = useCallback(() => {
    setCursorState(prev => ({
      ...prev,
      color: cursorEnlarged.current ? "#ff3366" : "#00ff88"
    }));
  }, []);

  const mouseOverEvent = useCallback((e: MouseEvent) => {
    if ((e.target as HTMLElement)?.id === "cardHover") {
      cursorEnlarged.current = true;
      toggleCursorSize();
    }
  }, [toggleCursorSize]);

  const mouseOutEvent = useCallback((e: MouseEvent) => {
    if ((e.target as HTMLElement)?.id === "cardHover") {
      cursorEnlarged.current = false;
      toggleCursorSize();
    }
  }, [toggleCursorSize]);

  const mouseMoveEvent = useCallback((e: MouseEvent) => {
    cursorVisible.current = true;
    lastPosition.current = { x: e.clientX, y: e.clientY };

    if (dot.current && trail.current) {
      // Main cursor follows immediately
      dot.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      
      // Trail follows with delay
      trail.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    }
  }, []);

  const handleElementStates = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    
    if (target?.tagName === 'A' || target?.tagName === 'BUTTON') {
      setCursorState({
        color: "#ff3366",
        scale: 1.5,
        opacity: 0.8,
        blend: "normal"
      });
    } else if (target?.id === "cardHover") {
      setCursorState({
        color: "#ffffff",
        scale: 2,
        opacity: 0.6,
        blend: "overlay"
      });
    } else {
      setCursorState({
        color: "#00ff88",
        scale: 1,
        opacity: 1,
        blend: "difference"
      });
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const style = document.createElement("style");
      style.textContent = `* { cursor: none !important; }`;
      document.head.appendChild(style);

      document.addEventListener("mousemove", (e) => {
        mouseMoveEvent(e);
        handleElementStates(e);
      });
      document.addEventListener("mouseover", mouseOverEvent);
      document.addEventListener("mouseout", mouseOutEvent);
      document.addEventListener("click", toggleCursorVisibility); // Keep cursor visible

      return () => {
        document.removeEventListener("mousemove", mouseMoveEvent);
        document.removeEventListener("mouseover", mouseOverEvent);
        document.removeEventListener("mouseout", mouseOutEvent);
        document.removeEventListener("click", toggleCursorVisibility);
        document.head.removeChild(style);
      };
    }
  }, [mouseMoveEvent, mouseOverEvent, mouseOutEvent, toggleCursorVisibility, handleElementStates]);

  return (
    <>
      <style jsx global>{`
        @media (min-width: 989px) {
          .cursor-element {
            pointer-events: none;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 10000;
            opacity: ${cursorState.opacity};
            mix-blend-mode: ${cursorState.blend};
            will-change: transform;
          }

          .cursor-dot {
            width: ${12 * cursorState.scale}px;
            height: ${12 * cursorState.scale}px;
            background: ${cursorState.color};
            border-radius: 50%;
            transform: translate(-50%, -50%);
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            box-shadow: 0 0 10px ${cursorState.color}33,
                        0 0 20px ${cursorState.color}22,
                        0 0 30px ${cursorState.color}11;
          }

          .cursor-trail {
            width: ${8 * cursorState.scale}px;
            height: ${8 * cursorState.scale}px;
            background: ${cursorState.color}44;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            transition: transform 0.15s ease-out,
                        width 0.3s ease,
                        height 0.3s ease,
                        background 0.3s ease;
            filter: blur(2px);
          }

          /* Interactive elements hover states */
          a:hover ~ .cursor-element,
          button:hover ~ .cursor-element {
            animation: cursorPulse 1.5s infinite;
          }

          @keyframes cursorPulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
        }
      `}</style>
      <div ref={trail} className="cursor-element cursor-trail" />
      <div ref={dot} className="cursor-element cursor-dot" />
    </>
  );
};

export default Cursor;
