import type { RefObject} from "react";
import { useEffect, useRef } from "react";

export const useMousePositionRef = (
  containerRef?: RefObject<HTMLElement | SVGElement>
) => {
  const positionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (x: number, y: number) => {
      if (containerRef && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        // Calculate mouse position relative to the center of the container
        const relativeX = x - (rect.left + rect.width / 2);
        const relativeY = y - (rect.top + rect.height / 2);
        positionRef.current = { x: relativeX, y: relativeY };
      } else {
        // Fallback to viewport-relative if no containerRef or if it's not mounted
        // This part might need adjustment based on desired default behavior
        positionRef.current = { x: x - window.innerWidth / 2, y: y - window.innerHeight / 2 };
      }
    };

    const handleMouseMove = (ev: MouseEvent) => {
      updatePosition(ev.clientX, ev.clientY);
    };

    const handleTouchMove = (ev: TouchEvent) => {
      if (ev.touches.length > 0) {
        const touch = ev.touches[0];
        updatePosition(touch.clientX, touch.clientY);
      }
    };

    // Ensure this effect runs only on the client
    if (typeof window !== "undefined") {
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("touchmove", handleTouchMove, { passive: false });
    }
    
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("touchmove", handleTouchMove);
      }
    };
  }, [containerRef]);

  return positionRef;
};
