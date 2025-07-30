
"use client";

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Globe, Smartphone, Database, Megaphone, type LucideIcon } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect"; // Import the new component

interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

const services: ServiceItem[] = [
  {
    title: "Web Development",
    description: "Crafting modern, responsive, and high-performance websites tailored to your needs.",
    icon: Globe,
  },
  {
    title: "App Development",
    description: "Building intuitive and engaging mobile applications for iOS and Android platforms.",
    icon: Smartphone,
  },
  {
    title: "ERP Software",
    description: "Developing custom Enterprise Resource Planning solutions to streamline your business operations.",
    icon: Database,
  },
  {
    title: "Digital Advertising",
    description: "Maximizing your online presence and reach with targeted digital advertising campaigns.",
    icon: Megaphone,
  },
];

export function ServiceProvidersSection() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16 text-foreground">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={service.title}
                className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl relative overflow-hidden group"
              >
                <GlowingEffect
                  disabled={false}
                  glow={true} // Static border glow
                  spread={25}
                  proximity={30}
                  inactiveZone={0.85}
                  borderWidth={1}
                  blur={0}
                  // className is removed to let internal opacity (defaulting to visible for interactive part) and logic take over
                />
                <CardHeader className="p-6 relative z-10"> {/* Ensure content is above glow */}
                  <div className="flex items-center gap-4 mb-3">
                    <IconComponent className="h-10 w-10 text-primary" />
                    <CardTitle className="text-xl md:text-2xl font-semibold text-foreground">
                      {service.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-muted-foreground text-sm md:text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
