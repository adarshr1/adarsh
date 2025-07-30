
import { LandingHero } from "@/components/landing-hero";
import { TubelightNavbarDemo } from "@/components/tubelight-navbar-demo"; // Updated import
import { ServiceProvidersSection } from "@/components/service-providers-section";
import { StatsSection } from "@/components/stats-section";
import { TeamMembersSection } from "@/components/team-members-section";
import { CtaDemoSection } from "@/components/cta-demo-section";
import { ContactUsSection } from "@/components/contact-us-section";
import { FooterSection } from "@/components/footer-section";

export default function Home() {
  return (
    <main>
      <TubelightNavbarDemo /> {/* Updated component */}
      <LandingHero />
      <ServiceProvidersSection />
      <StatsSection />
      <TeamMembersSection />
      <CtaDemoSection />
      <ContactUsSection />
      <FooterSection />
    </main>
  );
}
