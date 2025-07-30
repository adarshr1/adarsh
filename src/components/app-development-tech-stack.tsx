
"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Smartphone, Database, Network, type LucideIcon } from 'lucide-react'; 

interface TechItem {
    name: string;
    category: string;
    icon: LucideIcon;
}

const technologies: TechItem[] = [
  { name: "Swift / SwiftUI", category: "iOS Development", icon: Smartphone },
  { name: "Kotlin / Jetpack Compose", category: "Android Development", icon: Smartphone },
  { name: "React Native", category: "Cross-Platform", icon: Smartphone },
  { name: "Flutter", category: "Cross-Platform", icon: Smartphone },
  { name: "Firebase", category: "Backend & Services", icon: Database },
  { name: "REST APIs / GraphQL", category: "Data Integration", icon: Network },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export function AppDevelopmentTechStack() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16 text-foreground">
          App Technologies We Utilize
        </h2>
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {technologies.map((tech) => {
            const IconComponent = tech.icon;
            return (
              <motion.div key={tech.name} variants={itemVariants}>
                <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl h-full">
                  <CardHeader className="pb-3 pt-5 px-4">
                    <div className="flex items-center gap-3">
                      <IconComponent className="h-7 w-7 text-primary" />
                      <CardTitle className="text-lg font-semibold text-foreground">
                        {tech.name}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="px-4 pb-4 pt-0">
                     <Badge variant="secondary" className="text-xs">{tech.category}</Badge>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
