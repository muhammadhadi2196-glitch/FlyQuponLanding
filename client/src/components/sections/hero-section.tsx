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
        
        {/* Restaurant Photo Background Collage */}
        <div className="absolute inset-0 opacity-25">
          {/* McDonald's Restaurant */}
          <div 
            className="absolute top-12 left-8 w-72 h-48 rounded-xl shadow-2xl transform rotate-12 overflow-hidden border-2 border-yellow-400"
            style={{
              backgroundImage: `linear-gradient(135deg, #dc2626 0%, #fbbf24 100%)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/80 to-yellow-500/80"></div>
            <div className="relative p-6 text-white h-full flex flex-col justify-center">
              <div className="text-2xl font-black mb-4 text-yellow-300">McDONALD'S</div>
              <div className="text-5xl font-black text-yellow-400">25% OFF</div>
              <div className="text-lg font-bold mt-2">Big Mac Combo</div>
            </div>
          </div>
          
          {/* Tim Hortons Restaurant */}
          <div 
            className="absolute top-24 right-12 w-68 h-44 rounded-xl shadow-2xl transform -rotate-8 overflow-hidden border-2 border-red-400"
            style={{
              backgroundImage: `linear-gradient(135deg, #b91c1c 0%, #dc2626 100%)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-800/80 to-red-600/80"></div>
            <div className="relative p-6 text-white h-full flex flex-col justify-center">
              <div className="text-2xl font-black mb-4">TIM HORTONS</div>
              <div className="text-4xl font-black text-yellow-300">$2 OFF</div>
              <div className="text-lg font-bold mt-2">Large Coffee</div>
            </div>
          </div>
          
          {/* Popeyes Restaurant */}
          <div 
            className="absolute bottom-28 left-16 w-64 h-46 rounded-xl shadow-2xl transform rotate-6 overflow-hidden border-2 border-orange-400"
            style={{
              backgroundImage: `linear-gradient(135deg, #ea580c 0%, #dc2626 100%)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/80 to-red-600/80"></div>
            <div className="relative p-6 text-white h-full flex flex-col justify-center">
              <div className="text-2xl font-black mb-4 text-orange-200">POPEYES</div>
              <div className="text-4xl font-black text-orange-300">$5 OFF</div>
              <div className="text-lg font-bold mt-2">Family Meal</div>
            </div>
          </div>
          
          {/* Pizza Hut Restaurant */}
          <div 
            className="absolute top-40 right-8 w-70 h-48 rounded-xl shadow-2xl transform -rotate-15 overflow-hidden border-2 border-green-400"
            style={{
              backgroundImage: `linear-gradient(135deg, #b91c1c 0%, #16a34a 100%)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-700/80 to-green-600/80"></div>
            <div className="relative p-6 text-white h-full flex flex-col justify-center">
              <div className="text-2xl font-black mb-4 text-green-200">PIZZA HUT</div>
              <div className="text-5xl font-black text-green-300">30% OFF</div>
              <div className="text-lg font-bold mt-2">Large Pizza</div>
            </div>
          </div>
          
          {/* A&W Restaurant */}
          <div 
            className="absolute bottom-16 right-20 w-60 h-42 rounded-xl shadow-2xl transform rotate-18 overflow-hidden border-2 border-amber-400"
            style={{
              backgroundImage: `linear-gradient(135deg, #ea580c 0%, #f59e0b 100%)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/80 to-amber-500/80"></div>
            <div className="relative p-6 text-white h-full flex flex-col justify-center">
              <div className="text-2xl font-black mb-4 text-amber-200">A&W</div>
              <div className="text-3xl font-black text-amber-300">BUY 1 GET 1</div>
              <div className="text-lg font-bold mt-2">Teen Burger</div>
            </div>
          </div>
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
