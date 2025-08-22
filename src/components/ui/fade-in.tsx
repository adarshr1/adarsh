"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface FadeInProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number
  yOffset?: number
  className?: string
  children: React.ReactNode
}

// Client-side only component to handle animations
const AnimatedFadeIn = ({
  delay = 0,
  yOffset = 20,
  className,
  children,
  ...props
}: FadeInProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible
          ? "translate-y-0 opacity-100"
          : `translate-y-[${yOffset}px] opacity-0`,
        className
      )}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : "0ms",
      }}
      {...props}
    >
      {children}
    </div>
  )
}

// Server-side fallback component
const StaticFadeIn = ({
  className,
  children,
  ...props
}: FadeInProps) => (
  <div className={cn("opacity-0", className)} {...props}>
    {children}
  </div>
)

export function FadeIn(props: FadeInProps) {
  const [isMounted, setIsMounted] = useState(false)
  
  useEffect(() => {
    setIsMounted(true)
  }, [])
  
  if (!isMounted) {
    return <StaticFadeIn {...props} />
  }
  
  return <AnimatedFadeIn {...props} />
}
