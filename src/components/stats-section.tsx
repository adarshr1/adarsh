
"use client";

import { Award, Briefcase, Smile, Users } from "lucide-react";
import AnimatedCounter from "@/components/ui/animated-counter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  {
    value: 50,
    label: "Projects Completed",
    icon: Briefcase,
  },
  {
    value: 50,
    label: "Happy Clients",
    icon: Smile,
  },
  {
    value: 6,
    label: "Team Members",
    icon: Users,
  },
  {
    value: 2,
    label: "Years Experience",
    icon: Award,
  },
];

export function StatsSection() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16 text-foreground">
          Our Milestones
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <Card key={stat.label} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl">
                <CardHeader className="pt-6 pb-2">
                  <IconComponent className="h-10 w-10 md:h-12 md:w-12 text-primary mx-auto mb-2 md:mb-3" />
                  <CardTitle className="text-3xl md:text-4xl font-bold text-foreground">
                    <AnimatedCounter to={stat.value} postfix="+" duration={2} />
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-6 pt-0">
                  <p className="text-sm md:text-base text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
