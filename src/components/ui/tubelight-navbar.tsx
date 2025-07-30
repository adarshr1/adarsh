
"use client"

import React, { useEffect, useState, useMemo } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import type { LucideIcon } from "lucide-react" // Import type
import { cn } from "@/lib/utils"
import { Icons } from "@/components/ui/icons"; // Added for logo
import { Button } from "@/components/ui/button"; // Added for theme toggle
import { Sun, Moon } from 'lucide-react'; // Added for theme toggle
import { useTheme } from "next-themes"; // Added for theme toggle

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
  children?: React.ReactNode; // Allow children for theme toggle button
}

export function NavBar({ items, className, children }: NavBarProps) {
  const initialActiveTab = useMemo(() => items[0]?.name || '', [items]);
  const [activeTab, setActiveTab] = useState(initialActiveTab);
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Ensure window is defined (client-side) before accessing window.innerWidth
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768)
      }
      handleResize() // Call once to set initial state
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    if (items.length > 0 && !items.find(item => item.name === activeTab)) {
      setActiveTab(items[0].name);
    }
  }, [items, activeTab]);


  if (!items || items.length === 0) {
    return null; // Don't render if no items
  }

  return (
    <div
      className={cn(
        "fixed top-0 left-1/2 -translate-x-1/2 z-50 mt-6 w-full px-4 sm:w-auto sm:px-0", // Always top, mt-6 for spacing from viewport top. Full width on mobile.
        className,
      )}
    >
      <div className="flex items-center justify-center gap-3 bg-background/80 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
         <Link href="/" className="pl-2 pr-1" aria-label="FancyType Home">
            <Icons.logo className="h-5 w-5 text-primary hover:opacity-80 transition-opacity" />
        </Link>
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-4 sm:px-5 py-2 rounded-full transition-colors", // Adjusted padding slightly
                "text-foreground/80 hover:text-primary",
                isActive && "text-primary", // Removed bg-muted to let motion.div handle background
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/10 rounded-full -z-10" // Lighter background for active tab
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
        {children} {/* Render theme toggle button or any other children here */}
      </div>
    </div>
  )
}
