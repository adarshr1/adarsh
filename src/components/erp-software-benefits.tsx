
"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Settings2, Scaling, Cloud, ShieldCheck, type LucideIcon } from 'lucide-react'; 

interface BenefitItem {
    name: string;
    category: string; // Or description
    icon: LucideIcon;
}

const benefits: BenefitItem[] = [
  { name: "Highly Customizable", category: "Tailored to your specific business processes and workflows.", icon: Settings2 },
  { name: "Scalable Architecture", category: "Grows with your business, supporting more users and data.", icon: Scaling },
  { name: "Cloud-Based & Accessible", category: "Access your ERP anywhere, anytime, with secure cloud hosting.", icon: Cloud },
  { name: "Robust Security", category: "Protect sensitive business data with advanced security measures.", icon: ShieldCheck },
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

export function ErpSoftwareBenefits() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16 text-foreground">
          Why Choose Our ERP Solution?
        </h2>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {benefits.map((benefit) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div key={benefit.name} variants={itemVariants}>
                <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl h-full">
                  <CardHeader className="pb-3 pt-5 px-4">
                    <div className="flex items-center gap-3 mb-2">
                      <IconComponent className="h-8 w-8 text-primary" />
                      <CardTitle className="text-lg font-semibold text-foreground">
                        {benefit.name}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="px-4 pb-4 pt-0">
                     <p className="text-sm text-muted-foreground">{benefit.category}</p>
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
