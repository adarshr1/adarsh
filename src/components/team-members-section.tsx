
"use client";

import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxtYW4lMjBwcm9mZXNzaW9uYWx8ZW58MHx8fHwxNzQ4NTU1Njc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    dataAiHint: "man professional"
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image: "https://images.unsplash.com/photo-1641894252843-9794796577be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8bWFuJTIwYXZhdGFyfGVufDB8fHx8MTc0ODU1NTY3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    dataAiHint: "man avatar"
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGF2YXRhcnxlbnwwfHx8fDE3NDg1NTU2NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    dataAiHint: "woman avatar"
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image: "https://images.unsplash.com/photo-1602693130669-9c9e53cc320c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHx3b21hbiUyMHNtaWxpbmd8ZW58MHx8fHwxNzQ4NTU1Njc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    dataAiHint: "woman smiling"
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image: "https://images.unsplash.com/photo-1585807515950-bc46d934c28b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxtYW4lMjBnbGFzc2VzfGVufDB8fHx8MTc0ODU1NTY3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    dataAiHint: "man glasses"
  },
  {
    id: 6,
    name: "Dora Explorer",
    designation: "Lead Explorer",
    image: "https://images.unsplash.com/photo-1476817343404-01ccd61218d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHx3b21hbiUyMGNoZWVyZnVsfGVufDB8fHx8MTc0ODU1NTY3N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    dataAiHint: "woman cheerful"
  },
];

export function TeamMembersSection() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16 text-foreground">
          Meet Our Team
        </h2>
        <div className="flex flex-row items-center justify-center w-full">
          <AnimatedTooltip items={people} />
        </div>
      </div>
    </section>
  );
}
