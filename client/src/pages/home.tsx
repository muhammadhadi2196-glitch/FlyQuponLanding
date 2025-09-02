import HeroSection from "@/components/sections/hero-section";
import HowItWorksSection from "@/components/sections/how-it-works-section";
import AppMockupSection from "@/components/sections/app-mockup-section";
import ValuePropositionSection from "@/components/sections/value-proposition-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import WaitlistSection from "@/components/sections/waitlist-section";
import FooterSection from "@/components/sections/footer-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HowItWorksSection />
      <AppMockupSection />
      <ValuePropositionSection />
      <TestimonialsSection />
      <WaitlistSection />
      <FooterSection />
    </div>
  );
}
