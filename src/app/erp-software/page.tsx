
import { TubelightNavbarDemo } from "@/components/tubelight-navbar-demo";
import { FooterSection } from "@/components/footer-section";
import { ErpEnhancedHero } from "@/components/erp-enhanced-hero"; // Updated import
import { ErpSoftwareFeatures } from "@/components/erp-software-features";
import { ErpSoftwareBenefits } from "@/components/erp-software-benefits";
import { CTASection } from "@/components/ui/cta-with-rectangle";

export default function ErpSoftwarePage() {
  return (
    <>
      <TubelightNavbarDemo />
      <ErpEnhancedHero /> {/* Updated component */}
      <ErpSoftwareFeatures />
      <ErpSoftwareBenefits />
      <CTASection
        title="Streamline Your Business with Our ERP Solution"
        description="Discover how our tailored ERP software can optimize your operations and drive growth. Request a demo today."
        action={{
          text: "Request a Demo",
          href: "/#contact", // Assuming contact section is on homepage
          variant: "default",
        }}
        className="bg-background" // Ensure consistent background
      />
      <FooterSection />
    </>
  );
}
