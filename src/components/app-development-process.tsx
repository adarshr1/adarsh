
"use client";

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Lightbulb, Smartphone, Code, ShieldCheck, Rocket, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ProcessStep {
  title: string;
  description: string;
  icon: LucideIcon;
}

const processSteps: ProcessStep[] = [
  {
    title: "Conceptualization & Strategy",
    description: "Understanding your app's vision, target users, and market position to define a clear roadmap.",
    icon: Lightbulb,
  },
  {
    title: "UI/UX Design & Prototyping",
    description: "Crafting seamless user experiences and visually stunning interfaces, validated through interactive prototypes.",
    icon: Smartphone,
  },
  {
    title: "Native/Cross-Platform Development",
    description: "Building robust and scalable apps using cutting-edge technologies for iOS, Android, or both.",
    icon: Code,
  },
  {
    title: "Testing & Quality Assurance",
    description: "Rigorous testing across devices and scenarios to ensure a bug-free, high-quality application.",
    icon: ShieldCheck,
  },
  {
    title: "Deployment & Support",
    description: "Smoothly launching your app to stores and providing ongoing support and maintenance.",
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

export function AppDevelopmentProcess() {
  return (
    <section className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16 text-foreground">
          Our App Development Journey
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
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
                as={Card} 
                className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl bg-card flex flex-col" // Added flex flex-col
              >
                <CardHeader className="p-6 flex-grow"> {/* Added flex-grow */}
                  <div className="flex flex-col items-center text-center h-full"> {/* Added h-full */}
                    <IconComponent className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-xl font-semibold text-card-foreground mb-2">
                      {step.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-sm">
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
