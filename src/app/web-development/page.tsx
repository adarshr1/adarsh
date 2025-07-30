
import { TubelightNavbarDemo } from "@/components/tubelight-navbar-demo";
import { FooterSection } from "@/components/footer-section";
import { WebDevelopmentHero } from "@/components/web-development-hero";
import { WebDevelopmentProcess } from "@/components/web-development-process";
import { WebDevelopmentTechStack } from "@/components/web-development-tech-stack";
import { CTASection } from "@/components/ui/cta-with-rectangle";

export default function WebDevelopmentPage() {
  return (
    <>
      <TubelightNavbarDemo />
      <WebDevelopmentHero />
      <WebDevelopmentProcess />
      <WebDevelopmentTechStack />
      <CTASection
        title="Ready to Build Your Next Web Project?"
        description="Let's collaborate to create a powerful and engaging web presence for your business."
        action={{
          text: "Get a Quote",
          href: "/#contact", 
          variant: "default",
        }}
        className="bg-background"
      />
      <FooterSection />
    </>
  );
}

    