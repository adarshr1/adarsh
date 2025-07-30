
"use client";

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { DollarSign, Truck, Users, UserCog, Factory, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

const features: FeatureItem[] = [
  {
    title: "Financial Management",
    description: "Streamline accounting, budgeting, and financial reporting with robust tools.",
    icon: DollarSign,
  },
  {
    title: "Supply Chain & Inventory",
    description: "Optimize inventory levels, manage procurement, and track logistics efficiently.",
    icon: Truck,
  },
  {
    title: "Customer Relationship Management (CRM)",
    description: "Enhance customer engagement, manage leads, and track sales pipelines.",
    icon: Users,
  },
  {
    title: "Human Resources (HR) Management",
    description: "Simplify payroll, manage employee data, and streamline HR processes.",
    icon: UserCog,
  },
  {
    title: "Manufacturing & Production",
    description: "Control production schedules, manage resources, and ensure quality output.",
    icon: Factory,
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

export function ErpSoftwareFeatures() {
  return (
    <section id="features" className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16 text-foreground">
          Key ERP Software Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.custom
                key={feature.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={index}
                // @ts-ignore
                as={Card} 
                className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl bg-card flex flex-col"
              >
                <CardHeader className="p-6 flex-grow">
                  <div className="flex flex-col items-center text-center h-full">
                    <IconComponent className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-xl font-semibold text-card-foreground mb-2">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-sm">
                      {feature.description}
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
