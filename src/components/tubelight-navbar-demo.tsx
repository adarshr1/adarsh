"use client";
import { Home, User, Briefcase, FileText, Newspaper, Code, Smartphone, Archive } from 'lucide-react';
import { NavBar } from "@/components/ui/tubelight-navbar";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import { useEffect, useState } from 'react';

export function TubelightNavbarDemo() {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Web Dev', url: '/web-development', icon: Code },
    { name: 'App Dev', url: '/app-development', icon: Smartphone },
    { name: 'ERP Software', url: '/erp-software', icon: Archive },
    { name: 'About', url: '/#about', icon: User },
    { name: 'Projects', url: '/#projects', icon: Briefcase },
    { name: 'Blog', url: '/blog', icon: Newspaper },
    { name: 'Contact', url: '/#contact', icon: FileText }
  ];

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    // Placeholder for SSR
    return (
      <div className={cn(
        "fixed top-0 left-1/2 -translate-x-1/2 z-50 mt-6 w-full px-4 sm:w-auto sm:px-0"
      )}>
        <div className="flex items-center justify-center gap-3 h-[42px] bg-transparent py-1 px-1 rounded-full">
          <div className="w-[40px] h-full"></div>
          {[...Array(7)].map((_, i) => (
            <div key={i} className="w-[65px] sm:w-[85px] h-full"></div>
          ))}
          <div className="w-[40px] h-full"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn(
      "fixed top-0 left-1/2 -translate-x-1/2 z-50 mt-6 w-full px-4 sm:w-auto sm:px-0"
    )}>
      <NavBar
        items={navItems}
        className="backdrop-blur-md bg-white/30 dark:bg-black/30 shadow-lg"
      >
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </NavBar>
    </div>
  );
}
