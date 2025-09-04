import { useState } from "react";
import { Button } from "@/components/ui/button";
import BeeLogo from "@/components/bee-logo";
import couponBackground from "@assets/generated_images/Fast_food_coupon_collage_background_3dab3dc1.png";
import { Menu, X } from "lucide-react";

export default function HeroSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToWaitlist = () => scrollToSection("waitlist");
  const scrollToHowItWorks = () => scrollToSection("how-it-works");

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center" data-testid="nav-logo">
              <BeeLogo size="lg" />
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={scrollToHowItWorks}
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="nav-how-it-works"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection("features")}
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="nav-features"
              >
                Features
              </button>
              <Button 
                onClick={scrollToWaitlist}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                data-testid="nav-join-waitlist"
              >
                Join Waitlist
              </Button>
            </div>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-background z-40 md:hidden" data-testid="mobile-menu">
          <div className="flex flex-col h-full pt-16">
            <nav className="flex-1 px-4 py-8">
              <ul className="space-y-6">
                <li>
                  <button 
                    onClick={scrollToHowItWorks}
                    className="text-xl text-foreground font-medium w-full text-left"
                    data-testid="mobile-nav-how-it-works"
                  >
                    How It Works
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection("features")}
                    className="text-xl text-foreground font-medium w-full text-left"
                    data-testid="mobile-nav-features"
                  >
                    Features
                  </button>
                </li>
                <li>
                  <Button 
                    onClick={scrollToWaitlist}
                    className="w-full bg-primary text-primary-foreground"
                    data-testid="mobile-nav-join-waitlist"
                  >
                    Join Waitlist
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}

      {/* Hero Section - Sleek Professional Design */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        
        {/* Coupon Collage Background */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${couponBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Subtle Overlay for Professional Look */}
          <div className="absolute inset-0 bg-white/10"></div>
        </div>
        
        {/* Sleek Hero Content */}
        <div className="relative z-10 text-center px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto">
          {/* Modern Sleek Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-12 leading-tight tracking-tight">
            <span className="bg-white px-8 py-4 rounded-2xl shadow-xl text-gray-900 inline-block">
              FlyQupon
            </span>
          </h1>
          
          {/* Clean Modern Subtitle */}
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-800 mb-6 leading-relaxed">
              Instant Access to Restaurant Deals
            </h2>
          </div>
          
          {/* Updated Messaging */}
          <div className="mb-16 max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed font-medium bg-white/90 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-lg text-gray-700">
              <span className="text-green-600 font-semibold">No paper, no need to wait for flyers to come in and no forgetting coupons.</span><br className="mb-2"/>
              We have it all in one app ready for whenever you need it.
            </p>
          </div>
          
          {/* Modern CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={scrollToWaitlist}
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white text-lg px-12 py-4 rounded-lg shadow-lg font-semibold transition-all hover:shadow-xl"
              data-testid="button-join-waitlist"
            >
              Join Early Access
            </Button>
            <Button 
              onClick={scrollToHowItWorks}
              variant="outline"
              size="lg"
              className="border-2 border-gray-300 text-gray-800 hover:bg-gray-50 text-lg px-12 py-4 rounded-lg font-semibold transition-all hover:shadow-lg"
              data-testid="button-see-how-it-works"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}