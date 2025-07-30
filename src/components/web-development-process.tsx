
"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Search, Palette, Terminal, Rocket, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ProcessStep {
  title: string;
  description: string;
  icon: LucideIcon;
}

const processSteps: ProcessStep[] = [
  {
    title: "Discovery & Planning",
    description: "We start by understanding your goals, target audience, and project requirements to create a solid plan.",
    icon: Search,
  },
  {
    title: "UI/UX Design",
    description: "Our team designs intuitive and engaging user interfaces that provide an exceptional user experience.",
    icon: Palette,
  },
  {
    title: "Development & Testing",
    description: "Skilled developers bring the designs to life using modern technologies, followed by rigorous testing.",
    icon: Terminal,
  },
  {
    title: "Deployment & Launch",
    description: "We handle the deployment process, ensuring a smooth launch of your web application.",
    icon: Rocket,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export function WebDevelopmentProcess() {
  return (
    <section className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16 text-foreground">
          Our Web Development Process
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.custom
                key={step.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={index}
                // @ts-ignore
                as={Card} // Use motion.custom with as prop for Card
                className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl bg-card"
              >
                <CardHeader className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <IconComponent className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-xl md:text-2xl font-semibold text-card-foreground mb-2">
                      {step.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-sm md:text-base">
                      {step.description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </motion.custom>
            );
          })}
        </div>
      </div>
    </section>
  );
}
