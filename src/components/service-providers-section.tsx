"use client";

import { Globe, Smartphone, Database, Megaphone, type LucideIcon } from "lucide-react";
import { Section } from "./ui/section";
import { FeatureCard } from "./ui/section";

interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

const services: ServiceItem[] = [
  {
    title: "Web Development",
    description: "Crafting modern, responsive, and high-performance websites tailored to your needs.",
    icon: Globe,
    features: [
      "Custom website development",
      "E-commerce solutions",
      "CMS integration",
      "Web application development"
    ]
  },
  {
    title: "App Development",
    description: "Building intuitive and engaging mobile applications for iOS and Android platforms.",
    icon: Smartphone,
    features: [
      "iOS and Android apps",
      "Cross-platform solutions",
      "UI/UX design",
      "App maintenance & updates"
    ]
  },
  {
    title: "ERP Software",
    description: "Developing custom Enterprise Resource Planning solutions to streamline your business operations.",
    icon: Database,
    features: [
      "Custom ERP development",
      "Inventory management",
      "CRM integration",
      "Business analytics"
    ]
  },
  {
    title: "Digital Advertising",
    description: "Maximizing your online presence and reach with targeted digital advertising campaigns.",
    icon: Megaphone,
    features: [
      "PPC campaign management",
      "Social media advertising",
      "SEO optimization",
      "Analytics & reporting"
    ]
  },
];

export function ServiceProvidersSection() {
  return (
    <Section 
      title="Our Services"
      description="Comprehensive digital solutions to grow your business"
      id="services"
      className="bg-gradient-to-b from-background to-muted/20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <FeatureCard
            key={service.title}
            title={service.title}
            description={service.description}
            icon={<service.icon className="w-6 h-6" />}
            className="h-full"
          >
            <ul className="mt-4 space-y-2">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </FeatureCard>
        ))}
      </div>
    </Section>
  );
}
