
"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react"; // Using MessageCircle as a stand-in for WhatsApp
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function WhatsappCTA() {
  return (
    <Link
      href="https://wa.me/1234567890" // Replace with your actual WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 right-6 z-50",
        "md:bottom-8 md:right-8"
      )}
      aria-label="Chat on WhatsApp"
    >
      <Button
        variant="default"
        size="icon"
        className="rounded-full w-14 h-14 md:w-16 md:h-16 shadow-lg hover:scale-105 transition-transform duration-200 bg-green-500 hover:bg-green-600"
      >
        <MessageCircle className="h-7 w-7 md:h-8 md:h-8 text-white" />
      </Button>
    </Link>
  );
}
