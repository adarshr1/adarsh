"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { LocateFixed, MapPin, ArrowRight } from "lucide-react"
import { Button } from "./button"

interface DirectionButtonProps {
  address: string
  className?: string
  size?: "default" | "sm" | "lg" | "icon"
  variant?: "default" | "outline" | "ghost"
}

export function DirectionButton({
  address,
  className,
  size = "default",
  variant = "default",
}: DirectionButtonProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isIOS, setIsIOS] = useState(false)

  useEffect(() => {
    // Check if user is on iOS
    const userAgent = window.navigator.userAgent
    setIsIOS(/iPad|iPhone|iPod/.test(userAgent))
  }, [])

  const openMaps = () => {
    // Encode the address for URL
    const encodedAddress = encodeURIComponent(address)
    
    // Use Apple Maps on iOS, Google Maps on other devices
    const url = isIOS
      ? `http://maps.apple.com/?daddr=${encodedAddress}&dirflg=d`
      : `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}&travelmode=driving`
    
    window.open(url, "_blank")
  }

  return (
    <Button
      onClick={openMaps}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "group relative overflow-hidden transition-all duration-300",
        "bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70",
        "text-white hover:text-white/90 shadow-lg hover:shadow-xl",
        "border-0 hover:scale-[1.02] active:scale-95",
        "transform-gpu transition-all duration-300 ease-out",
        className
      )}
      size={size}
      variant={variant}
    >
      <div className="relative z-10 flex items-center justify-center gap-2">
        <MapPin className="w-4 h-4" />
        <span>Get Directions</span>
        <ArrowRight 
          className={cn(
            "w-4 h-4 transition-transform duration-300",
            isHovered ? "translate-x-1" : "translate-x-0"
          )} 
        />
      </div>
      
      {/* Animated background effect */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent",
        "transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"
      )} />
    </Button>
  )
}
