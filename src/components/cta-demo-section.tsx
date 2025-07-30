
"use client";

import { CTASection } from "@/components/ui/cta-with-rectangle"; 

export function CtaDemoSection() {
  return (
    <CTASection
      title="Ready to Transform Your Business?"
      description="Let's work together to bring your vision to life with our innovative technology solutions."
      action={{
        text: "Contact Us",
        href: "#contact",
        variant: "default" 
      }}
    />
  );
}
