
import { TubelightNavbarDemo } from "@/components/tubelight-navbar-demo";
import { FooterSection } from "@/components/footer-section";
import { AppDevelopmentHero } from "@/components/app-development-hero";
import { AppDevelopmentProcess } from "@/components/app-development-process";
import { AppDevelopmentTechStack } from "@/components/app-development-tech-stack";
import { CTASection } from "@/components/ui/cta-with-rectangle";

export default function AppDevelopmentPage() {
  return (
    <>
      <TubelightNavbarDemo />
      <AppDevelopmentHero />
      <AppDevelopmentProcess />
      <AppDevelopmentTechStack />
      <CTASection
        title="Ready to Launch Your Mobile App?"
        description="Partner with us to bring your app idea to life. Let's discuss your project requirements today."
        action={{
          text: "Start Your App Project",
          href: "/#contact", // Assuming contact section is on homepage
          variant: "default",
        }}
        className="bg-background" // Ensure consistent background
      />
      <FooterSection />
    </>
  );
}
