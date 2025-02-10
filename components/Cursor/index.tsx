import React, { useCallback, useEffect, useRef, useState } from "react";

const Cursor = () => {
  const dot = useRef<HTMLDivElement>(null);
  const [cursorColor, setCursorColor] = useState("#00ff88");

  const cursorVisible = useRef(true);
  const cursorEnlarged = useRef(false);

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
    setCursorColor(cursorEnlarged.current ? "#ff3366" : "#00ff88");
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
    toggleCursorVisibility();

    if (dot.current) {
      dot.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    }
  }, [toggleCursorVisibility]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const style = document.createElement("style");
      style.textContent = `
        * { cursor: none !important; }
      `;
      document.head.appendChild(style);

      document.addEventListener("mousemove", mouseMoveEvent);
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
  }, [mouseMoveEvent, mouseOverEvent, mouseOutEvent, toggleCursorVisibility]);

  return (
    <>
      <style jsx global>{`
        @media (min-width: 989px) {
          .cursor-element {
            pointer-events: none;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 10000 !important; /* Ensure it's always on top */
            opacity: 1;
            transition: opacity 0.3s ease-in-out;
            mix-blend-mode: difference;
            will-change: transform;
          }

          .cursor-dot {
            width: 12px;
            height: 12px;
            background: ${cursorColor};
            border-radius: 50%;
            box-shadow: 0 0 10px ${cursorColor}, 0 0 20px ${cursorColor}, 0 0 30px ${cursorColor};
            transition: width 0.3s ease, height 0.3s ease, background-color 0.3s ease;
            transform: translate(-50%, -50%);
          }
        }
      `}</style>
      <div ref={dot} className="cursor-element cursor-dot" />
    </>
  );
};

export default Cursor;
