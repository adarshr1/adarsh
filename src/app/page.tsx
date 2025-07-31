import { LandingHero } from "@/components/landing-hero";
import { TubelightNavbarDemo } from "@/components/tubelight-navbar-demo"; 
import { ServiceProvidersSection } from "@/components/service-providers-section";
import { StatsSection } from "@/components/stats-section";
import { TeamMembersSection } from "@/components/team-members-section";
import { ReviewsSection } from "@/components/reviews-section";
import { CtaDemoSection } from "@/components/cta-demo-section";
import { ContactUsSection } from "@/components/contact-us-section";
import { FooterSection } from "@/components/footer-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <TubelightNavbarDemo /> 
      <LandingHero />
      <ServiceProvidersSection />
      <StatsSection />
      <TeamMembersSection />
      <ReviewsSection />
      <CtaDemoSection />
      <ContactUsSection />
      <FooterSection />
    </main>
  );
}
