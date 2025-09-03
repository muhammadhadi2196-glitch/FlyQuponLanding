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
        {/* Futuristic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-800 to-black" />
        
        {/* Immersive Food Photography Background */}
        <div className="absolute inset-0">
          {/* Large Pizza Background - Top Left */}
          <div 
            className="absolute top-0 left-0 w-96 h-72 transform rotate-12 overflow-hidden opacity-60"
            style={{
              backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><defs><radialGradient id="pizza" cx="50%" cy="50%"><stop offset="0%" stop-color="%23FEF3C7"/><stop offset="30%" stop-color="%23FCD34D"/><stop offset="60%" stop-color="%23F59E0B"/><stop offset="100%" stop-color="%23D97706"/></radialGradient></defs><circle cx="200" cy="150" r="140" fill="url(%23pizza)"/><circle cx="120" cy="100" r="15" fill="%23DC2626"/><circle cx="280" cy="130" r="18" fill="%23059669"/><circle cx="200" cy="190" r="20" fill="%23DC2626"/><circle cx="160" cy="80" r="12" fill="%23FBBF24"/><circle cx="240" cy="200" r="16" fill="%23059669"/><circle cx="100" cy="180" r="14" fill="%23DC2626"/><circle cx="300" cy="90" r="13" fill="%23FBBF24"/><circle cx="180" cy="120" r="17" fill="%23059669"/></svg>')`,
              backgroundSize: 'cover'
            }}
          />
          
          {/* Gourmet Burger - Top Right */}
          <div 
            className="absolute top-10 right-8 w-84 h-64 rounded-2xl transform -rotate-8 overflow-hidden opacity-70"
            style={{
              backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 280"><defs><linearGradient id="bun" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%23F59E0B"/><stop offset="100%" stop-color="%23D97706"/></linearGradient></defs><ellipse cx="175" cy="60" rx="140" ry="45" fill="url(%23bun)"/><rect x="35" y="90" width="280" height="25" fill="%23059669"/><rect x="30" y="120" width="290" height="35" fill="%23DC2626"/><rect x="40" y="160" width="270" height="20" fill="%23FBBF24"/><rect x="45" y="185" width="260" height="15" fill="%23B91C1C"/><ellipse cx="175" cy="220" rx="150" ry="50" fill="url(%23bun)"/></svg>')`,
              backgroundSize: 'cover'
            }}
          />
          
          {/* Shawarma Wrap - Middle Left */}
          <div 
            className="absolute top-1/3 left-0 w-88 h-56 rounded-2xl transform rotate-6 overflow-hidden opacity-65"
            style={{
              backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 240"><defs><linearGradient id="wrap" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%23FEF3C7"/><stop offset="100%" stop-color="%23FCD34D"/></linearGradient></defs><rect width="360" height="240" fill="url(%23wrap)"/><rect x="60" y="90" width="240" height="60" rx="30" fill="%23D97706"/><rect x="70" y="95" width="220" height="15" fill="%23DC2626"/><rect x="75" y="115" width="210" height="20" fill="%23059669"/><rect x="80" y="140" width="200" height="15" fill="%23FBBF24"/></svg>')`,
              backgroundSize: 'cover'
            }}
          />
          
          {/* Golden French Fries - Right Side */}
          <div 
            className="absolute top-2/3 right-0 w-72 h-80 rounded-2xl transform -rotate-15 overflow-hidden opacity-75"
            style={{
              backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 350"><defs><linearGradient id="fries" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%23FCD34D"/><stop offset="100%" stop-color="%23F59E0B"/></linearGradient></defs><rect width="300" height="350" fill="%23B45309"/><rect x="50" y="120" width="15" height="200" fill="url(%23fries)" rx="7"/><rect x="75" y="100" width="15" height="220" fill="url(%23fries)" rx="7"/><rect x="100" y="110" width="15" height="210" fill="url(%23fries)" rx="7"/><rect x="125" y="90" width="15" height="230" fill="url(%23fries)" rx="7"/><rect x="150" y="105" width="15" height="215" fill="url(%23fries)" rx="7"/><rect x="175" y="95" width="15" height="225" fill="url(%23fries)" rx="7"/><rect x="200" y="115" width="15" height="205" fill="url(%23fries)" rx="7"/><rect x="225" y="85" width="15" height="235" fill="url(%23fries)" rx="7"/></svg>')`,
              backgroundSize: 'cover'
            }}
          />
          
          {/* Colorful Tacos - Bottom Center */}
          <div 
            className="absolute bottom-0 left-1/4 w-80 h-56 rounded-2xl transform rotate-8 overflow-hidden opacity-80"
            style={{
              backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 240"><defs><linearGradient id="taco" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%23FCD34D"/><stop offset="100%" stop-color="%23D97706"/></linearGradient></defs><path d="M70 180 Q170 100 270 180 Q170 200 70 180" fill="url(%23taco)"/><rect x="90" y="130" width="180" height="18" fill="%23DC2626"/><rect x="100" y="150" width="160" height="12" fill="%23059669"/><circle cx="140" cy="140" r="10" fill="%23FBBF24"/><circle cx="200" cy="145" r="8" fill="%23FBBF24"/><path d="M120 190 Q170 110 220 190 Q170 210 120 190" fill="url(%23taco)" opacity="0.7"/></svg>')`,
              backgroundSize: 'cover'
            }}
          />
          
          {/* Additional Food Elements for Full Coverage */}
          <div 
            className="absolute top-1/4 left-1/3 w-60 h-60 rounded-full transform rotate-45 overflow-hidden opacity-50"
            style={{
              backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250"><defs><radialGradient id="pizza3" cx="50%" cy="50%"><stop offset="0%" stop-color="%23FEF3C7"/><stop offset="50%" stop-color="%23F59E0B"/><stop offset="100%" stop-color="%23B45309"/></radialGradient></defs><circle cx="125" cy="125" r="120" fill="url(%23pizza3)"/><circle cx="90" cy="90" r="12" fill="%23DC2626"/><circle cx="160" cy="110" r="14" fill="%23059669"/><circle cx="125" cy="150" r="16" fill="%23DC2626"/></svg>')`,
              backgroundSize: 'cover'
            }}
          />
          
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></div>
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-orange-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        {/* Clean Hero Content - No Logo */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-6xl sm:text-7xl lg:text-9xl font-extrabold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-green-400 via-yellow-400 to-white bg-clip-text text-transparent drop-shadow-2xl">
              Coupons On The Go
            </span>
          </h1>
          
          {/* Tagline */}
          <p className="text-xl sm:text-2xl lg:text-3xl mb-16 text-white max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            All your favorite restaurant deals in one app. 
            <span className="text-yellow-300 font-bold"> No paper clutter, no expiration worries</span> — 
            just instant savings wherever you go.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Button 
              onClick={scrollToWaitlist}
              size="lg"
              className="bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 transform hover:scale-110 transition-all text-2xl px-16 py-8 rounded-full shadow-2xl font-bold border border-green-400"
              data-testid="button-join-waitlist"
            >
              Join the Waitlist
            </Button>
            <Button 
              onClick={scrollToHowItWorks}
              variant="outline"
              size="lg"
              className="border-3 border-white text-white hover:bg-white hover:text-gray-900 text-2xl px-16 py-8 rounded-full transform hover:scale-110 transition-all bg-white/10 backdrop-blur-sm font-bold shadow-2xl"
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
