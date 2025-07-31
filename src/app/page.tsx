import { LandingHero } from "@/components/landing-hero";
import { TubelightNavbarDemo } from "@/components/tubelight-navbar-demo"; 
import { ServiceProvidersSection } from "@/components/service-providers-section";
import { StatsSection } from "@/components/stats-section";
import { TeamMembersSection } from "@/components/team-members-section";
import { LocationSection } from "@/components/location-section";
import { ReviewsSection } from "@/components/reviews-section";
import { CtaDemoSection } from "@/components/cta-demo-section";
import { ContactUsSection } from "@/components/contact-us-section";
import { FooterSection } from "@/components/footer-section";
import { FadeIn } from "@/components/ui/fade-in";

export default function Home() {
  return (
    <main className="min-h-screen">
      <TubelightNavbarDemo />
      
      <FadeIn>
        <LandingHero />
      </FadeIn>
      
      <FadeIn delay={200}>
        <ServiceProvidersSection />
      </FadeIn>
      
      <FadeIn delay={300} yOffset={50}>
        <StatsSection />
      </FadeIn>
      
      <FadeIn delay={400}>
        <TeamMembersSection />
      </FadeIn>

      <FadeIn delay={500} yOffset={50}>
        <LocationSection />
      </FadeIn>
      
      <FadeIn delay={600}>
        <ReviewsSection />
      </FadeIn>
      
      <FadeIn delay={700} yOffset={50}>
        <CtaDemoSection />
      </FadeIn>
      
      <FadeIn delay={800}>
        <ContactUsSection />
      </FadeIn>
      
      <FadeIn delay={900}>
        <FooterSection />
      </FadeIn>
    </main>
  );
}
