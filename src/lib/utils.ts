import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const hoverScale = "transform transition-transform duration-300 hover:scale-105"
export const activeScale = "active:scale-95"
export const tapScale = "active:scale-95 transition-transform duration-150"

export const buttonVariants = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  ghost: "hover:bg-accent hover:text-accent-foreground",
  link: "text-primary underline-offset-4 hover:underline",
}

export const cardVariants = {
  default: "bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow duration-300",
  elevated: "bg-card text-card-foreground shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1",
  bordered: "border border-border bg-card text-card-foreground hover:border-primary/50 transition-colors duration-300",
  glass: "backdrop-blur-md bg-white/30 dark:bg-black/30 border border-white/20 hover:border-white/30 transition-all duration-300",
}

export const focusRing = [
  // Base styles
  "outline-none",
  // Focus-visible styles
  "focus-visible:ring-2",
  "focus-visible:ring-ring",
  "focus-visible:ring-offset-2",
  "focus-visible:ring-offset-background",
  // Focus state for keyboard navigation
  "focus:outline-none",
  "focus:ring-2",
  "focus:ring-ring",
  "focus:ring-offset-2",
  "focus:ring-offset-background",
].join(" ")
