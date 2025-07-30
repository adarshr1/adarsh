
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Github, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

type AvatarProps = {
  imageSrc: string;
  delay: number;
  dataAiHint: string;
};

const Avatar: React.FC<AvatarProps> = ({ imageSrc, delay, dataAiHint }) => {
  return (
    <div 
      className="relative h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 rounded-full overflow-hidden border-2 border-border shadow-lg animate-appear"
      style={{ animationDelay: `${delay}ms` }}
    >
      <Image 
        src={imageSrc} 
        alt="User avatar"
        data-ai-hint={dataAiHint}
        width={40}
        height={40}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
    </div>
  );
};

const TrustElements: React.FC = () => {
  const avatars = [
    { src: "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=100", hint: "woman portrait" },
    { src: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=100", hint: "woman profile" },
    { src: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100", hint: "man smiling" },
    { src: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100", hint: "woman face" },
  ];

  return (
    <div className="inline-flex items-center space-x-3 bg-background/60 border border-border backdrop-blur-sm rounded-full py-2 px-3 sm:py-2 sm:px-4 text-xs sm:text-sm">
      <div className="flex -space-x-2 sm:-space-x-3">
        {avatars.map((avatar, index) => (
          <Avatar key={index} imageSrc={avatar.src} dataAiHint={avatar.hint} delay={index * 200} />
        ))}
      </div>
      <p className="text-foreground animate-appear whitespace-nowrap font-sans" style={{ animationDelay: '800ms' }}>
        <span className="text-foreground font-semibold">Loved by</span> Innovators & Startups
      </p>
    </div>
  );
};

const GradientBars: React.FC = () => {
  const [numBars] = useState(15);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);


  const calculateHeight = (index: number, total: number) => {
    const position = index / (total - 1);
    const maxHeight = 100; // Corresponds to scaleY(1)
    const minHeight = 20;  // Corresponds to scaleY(0.2)
    
    const center = 0.5;
    // Create a gentle curve peaking at the center and dipping at edges
    const distanceFromCenter = Math.abs(position - center);
    // Using a power function to make the dip more pronounced at edges
    // Adjust exponent (e.g., 1.5, 2) for different curve shapes
    let heightPercentage = 1 - Math.pow(distanceFromCenter * 2, 1.8); 
    heightPercentage = Math.max(0, heightPercentage); // Ensure it doesn't go negative

    return minHeight + (maxHeight - minHeight) * heightPercentage;
  };
  
  if (!isClient) {
    // Render a placeholder or null on the server to avoid hydration mismatch for dynamically styled elements
    return <div className="absolute inset-0 z-0 overflow-hidden"></div>;
  }

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div 
        className="flex h-full w-full"
        style={{
          transform: 'translateZ(0)', // Promote to a new layer for better animation performance
          backfaceVisibility: 'hidden',
        }}
      >
        {Array.from({ length: numBars }).map((_, index) => {
          const height = calculateHeight(index, numBars);
          // Primary color HSL values are 240 60% 70% (light) and 240 60% 60% (dark)
          // Let's use the light theme primary for the gradient base
          const primaryH = 240;
          const primaryS = 60;
          const primaryL = 70;

          return (
            <div
              key={index}
              className="animate-pulseBar"
              style={{
                flex: `1 0 calc(100% / ${numBars})`,
                maxWidth: `calc(100% / ${numBars})`,
                height: '100%',
                // background: `linear-gradient(to top, hsl(var(--primary)), transparent)`,
                background: `linear-gradient(to top, hsl(${primaryH} ${primaryS}% ${primaryL}% / 0.4), transparent 70%)`,
                transform: `scaleY(${height / 100})`,
                transformOrigin: 'bottom',
                animationDelay: `${index * 0.15}s`, // Stagger animation
                outline: '1px solid transparent', // Prevents flickering on some browsers
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export function AppDevelopmentHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center px-6 sm:px-8 md:px-12 overflow-hidden pt-24 md:pt-32 bg-background">
      {/* <div className="absolute inset-0 bg-background -z-10"></div> */}
      <GradientBars />
      
      <div className="relative z-10 text-center w-full max-w-4xl mx-auto flex flex-col items-center justify-center flex-grow py-8 sm:py-16">
        <div className="mb-6 sm:mb-8 animate-appear delay-100">
          <TrustElements />
        </div>
        
        <h1 className="w-full text-foreground leading-tight tracking-tight mb-6 sm:mb-8 animate-appear delay-200 px-4">
          <span className="block font-sans font-semibold text-[clamp(2rem,6vw,3.75rem)]"> 
            Transforming Ideas into
          </span>
          <span className="block font-sans font-medium italic text-[clamp(2rem,6vw,3.75rem)] text-primary">
            Engaging Mobile Apps
          </span>
        </h1>
        
        <div className="mb-6 sm:mb-10 px-4 max-w-2xl">
          <p className="text-[clamp(1rem,2.5vw,1.25rem)] text-muted-foreground leading-relaxed animate-appear delay-300 font-sans">
            We design and develop intuitive, high-performance mobile applications for iOS and Android that captivate users and drive business growth.
          </p>
        </div>
        
        <div className="w-full max-w-md mb-8 sm:mb-10 px-4 animate-appear delay-400">
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="shadow-lg hover:shadow-primary/30 transition-shadow">
                <Link href="/#contact">Get a Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="hover:shadow-md transition-shadow">
                <Link href="/#projects">See Our Apps</Link> 
              </Button>
            </div>
        </div>
        
        <div className="flex justify-center space-x-6 animate-appear delay-500">
          <Link href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300" aria-label="Instagram">
            <Instagram size={20} className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300" aria-label="LinkedIn">
            <Linkedin size={20} className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300" aria-label="GitHub">
            <Github size={20} className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
