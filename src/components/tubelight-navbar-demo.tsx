
"use client";
import { Home, User, Briefcase, FileText, Sun, Moon, Newspaper, Code, Smartphone, Archive } from 'lucide-react'; // Added Smartphone, Archive
import { NavBar } from "@/components/ui/tubelight-navbar";
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";

export function TubelightNavbarDemo() {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Web Dev', url: '/web-development', icon: Code },
    { name: 'App Dev', url: '/app-development', icon: Smartphone },
    { name: 'ERP Software', url: '/erp-software', icon: Archive },
    { name: 'About', url: '/#about', icon: User }, // Assuming #about is on homepage
    { name: 'Projects', url: '/#projects', icon: Briefcase }, // Assuming #projects is on homepage
    { name: 'Blog', url: '/blog', icon: Newspaper },
    { name: 'Contact', url: '/#contact', icon: FileText } // Assuming #contact is on homepage
  ];

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  
  if (!mounted) {
    // Adjusted placeholder to reflect added item and maintain approximate width
    return (
      <div className={cn(
        "fixed top-0 left-1/2 -translate-x-1/2 z-50 mt-6 w-full px-4 sm:w-auto sm:px-0"
      )}>
        <div className="flex items-center justify-center gap-3 h-[42px] bg-transparent py-1 px-1 rounded-full">
          <div className="w-[40px] h-full"></div> {/* Placeholder for logo */}
          <div className="w-[65px] sm:w-[85px] h-full"></div>
          <div className="w-[65px] sm:w-[85px] h-full"></div> 
          <div className="w-[65px] sm:w-[85px] h-full"></div>
          <div className="w-[65px] sm:w-[85px] h-full"></div> {/* Placeholder for new ERP item */}
          <div className="w-[65px] sm:w-[85px] h-full"></div>
          <div className="w-[65px] sm:w-[85px] h-full"></div>
          <div className="w-[65px] sm:w-[85px] h-full"></div>
          <div className="w-[40px] h-full"></div> {/* Placeholder for theme toggle */}
        </div>
      </div>
    );
  }

  return (
    <NavBar 
      items={navItems} 
      className="flex items-center"
    >
      <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="ml-1 mr-1 rounded-full text-foreground/80 hover:text-primary focus-visible:ring-0 focus-visible:ring-offset-0"
          aria-label="Toggle theme"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
    </NavBar>
  );
}
