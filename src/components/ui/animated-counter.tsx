
"use client";

import type { ElementRef } from "react";
import { useEffect, useRef }  from "react";
import { animate } from "framer-motion";

interface AnimatedCounterProps {
  from?: number;
  to: number;
  className?: string;
  duration?: number;
  postfix?: string;
}

function AnimatedCounter({
  from = 0,
  to,
  className,
  duration = 2,
  postfix = "",
}: AnimatedCounterProps) {
  const nodeRef = useRef<ElementRef<"span">>(null);
  const isInViewRef = useRef(false);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isInViewRef.current) {
            isInViewRef.current = true;
            animate(from, to, {
              duration: duration,
              ease: "easeOut",
              onUpdate(value) {
                node.textContent = Math.round(value).toString() + postfix;
              },
            });
            observer.unobserve(node);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(node);

    // Set initial text content
    node.textContent = from.toString() + postfix;

    return () => {
      observer.disconnect();
    };
  }, [from, to, duration, postfix]);

  return <span ref={nodeRef} className={className} />;
}

export default AnimatedCounter;
