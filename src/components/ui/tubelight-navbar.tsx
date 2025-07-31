"use client"

import React, { useEffect, useState, useMemo, ReactNode } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/ui/icons"; 
import { Button } from "@/components/ui/button"; 
import { Sun, Moon } from 'lucide-react'; 
import { useTheme } from "next-themes"; 

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
  children?: ReactNode
  itemClassName?: string
  activeItemClassName?: string
}

export function NavBar({ 
  items, 
  className, 
  children,
  itemClassName = "text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors",
  activeItemClassName = "text-black dark:text-white font-medium"
}: NavBarProps) {
  const [activeTab, setActiveTab] = useState<string>('')
  const [isMobile, setIsMobile] = useState(false)

  // Set initial active tab once items are loaded
  useEffect(() => {
    if (items && items.length > 0 && !activeTab) {
      setActiveTab(items[0].name)
    }
  }, [items, activeTab])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(typeof window !== 'undefined' ? window.innerWidth < 768 : false)
    }
    
    handleResize() // Call once to set initial state
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  if (!items || items.length === 0) {
    return null
  }

  return (
    <nav className={cn("relative flex items-center justify-between px-4 py-2 rounded-full", className)}>
      <div className="flex items-center space-x-1">
        <Link href="/" className="pl-2 pr-1" aria-label="FancyType Home">
          <Icons.logo className="h-5 w-5 text-primary hover:opacity-80 transition-opacity" />
        </Link>
        {items.map((item) => {
          const isActive = activeTab === item.name
          return (
            <Link
              key={item.name}
              href={item.url}
              className={cn(
                "relative px-4 py-2 text-sm font-medium rounded-full",
                itemClassName,
                isActive && activeItemClassName
              )}
              onClick={() => setActiveTab(item.name)}
            >
              {isActive && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 z-10 bg-white/20 rounded-full mix-blend-overlay"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <div className="relative z-20 flex items-center space-x-2">
                <item.icon className="w-4 h-4" />
                {!isMobile && <span>{item.name}</span>}
              </div>
            </Link>
          )
        })}
      </div>
      
      {children && (
        <div className="flex items-center">
          {children}
        </div>
      )}
    </nav>
  )
}
