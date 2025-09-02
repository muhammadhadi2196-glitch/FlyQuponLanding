import { useState } from "react";
import { Button } from "@/components/ui/button";
import BeeLogo from "@/components/bee-logo";
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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Sleek Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        
        {/* Subtle Restaurant Brand Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 text-8xl">🍔</div>
          <div className="absolute top-60 right-20 text-6xl">🍕</div>
          <div className="absolute bottom-40 left-20 text-7xl">🍟</div>
          <div className="absolute top-40 right-1/4 text-5xl">☕</div>
          <div className="absolute bottom-20 right-10 text-6xl">🌮</div>
          <div className="absolute top-80 left-1/3 text-5xl">🥪</div>
        </div>
        
        {/* Accent Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-accent/10" />
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="animate-float">
              <BeeLogo size="lg" className="w-32 h-32 drop-shadow-2xl" />
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Coupon on the Go
          </h1>
          <p className="text-xl sm:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            All your favorite coupons in one app. No flyers, no hassle — just instant savings.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={scrollToWaitlist}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 transform hover:scale-105 transition-all w-full sm:w-auto text-lg px-10 py-4 rounded-full shadow-2xl font-semibold"
              data-testid="button-join-waitlist"
            >
              Join the Waitlist
            </Button>
            <Button 
              onClick={scrollToHowItWorks}
              variant="outline"
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white w-full sm:w-auto text-lg px-10 py-4 rounded-full backdrop-blur-sm transform hover:scale-105 transition-all"
              data-testid="button-see-how-it-works"
            >
              See How It Works
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
