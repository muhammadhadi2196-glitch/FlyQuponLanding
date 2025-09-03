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
        
        {/* Sharp Coupon Collage Background */}
        <div className="absolute inset-0 opacity-20">
          {/* McDonald's Coupon */}
          <div className="absolute top-16 left-12 w-64 h-40 bg-gradient-to-r from-red-600 to-yellow-500 rounded-lg transform rotate-12 shadow-2xl border-2 border-yellow-400">
            <div className="p-5 text-white">
              <div className="text-lg font-black mb-3 text-yellow-300">McDONALD'S</div>
              <div className="text-4xl font-black text-yellow-400">25% OFF</div>
              <div className="text-base font-bold">Big Mac Combo Meal</div>
              <div className="text-sm mt-2 text-yellow-200">Valid until Dec 31, 2025</div>
              <div className="text-sm text-yellow-200">In-store & app only</div>
            </div>
          </div>
          
          {/* Tim Hortons Coupon */}
          <div className="absolute top-32 right-16 w-60 h-36 bg-gradient-to-r from-red-800 to-red-600 rounded-lg transform -rotate-8 shadow-2xl border-2 border-white">
            <div className="p-5 text-white">
              <div className="text-lg font-black mb-3">TIM HORTONS</div>
              <div className="text-3xl font-black text-yellow-300">$2 OFF</div>
              <div className="text-base font-bold">Any Large Coffee</div>
              <div className="text-sm mt-2">Limited time offer</div>
            </div>
          </div>
          
          {/* Popeyes Coupon */}
          <div className="absolute bottom-32 left-20 w-56 h-38 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg transform rotate-6 shadow-2xl border-2 border-orange-300">
            <div className="p-5 text-white">
              <div className="text-lg font-black mb-3 text-orange-200">POPEYES</div>
              <div className="text-3xl font-black text-orange-300">$5 OFF</div>
              <div className="text-base font-bold">Family Feast</div>
              <div className="text-sm mt-2 text-orange-200">Dine-in only</div>
            </div>
          </div>
          
          {/* Pizza Hut Coupon */}
          <div className="absolute top-48 right-12 w-58 h-40 bg-gradient-to-r from-red-700 to-green-600 rounded-lg transform -rotate-15 shadow-2xl border-2 border-green-300">
            <div className="p-5 text-white">
              <div className="text-lg font-black mb-3 text-green-200">PIZZA HUT</div>
              <div className="text-4xl font-black text-green-300">30% OFF</div>
              <div className="text-base font-bold">Large Pizza</div>
              <div className="text-sm mt-2 text-green-200">Online orders only</div>
            </div>
          </div>
          
          {/* A&W Coupon */}
          <div className="absolute bottom-20 right-24 w-52 h-36 bg-gradient-to-r from-orange-600 to-amber-500 rounded-lg transform rotate-18 shadow-2xl border-2 border-amber-300">
            <div className="p-5 text-white">
              <div className="text-lg font-black mb-3 text-amber-200">A&W</div>
              <div className="text-2xl font-black text-amber-300">BUY 1 GET 1</div>
              <div className="text-base font-bold">Teen Burger</div>
              <div className="text-sm mt-2 text-amber-200">Valid today</div>
            </div>
          </div>
          
          {/* Subway Coupon */}
          <div className="absolute top-72 left-28 w-54 h-34 bg-gradient-to-r from-green-600 to-yellow-500 rounded-lg transform -rotate-10 shadow-2xl border-2 border-yellow-300">
            <div className="p-4 text-white">
              <div className="text-lg font-black mb-2 text-yellow-200">SUBWAY</div>
              <div className="text-2xl font-black text-yellow-300">FREE</div>
              <div className="text-base font-bold">Cookie w/ Sub</div>
              <div className="text-sm mt-2 text-yellow-200">Any footlong</div>
            </div>
          </div>
        </div>
        
        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></div>
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-orange-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        {/* Clean Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          {/* Large Logo */}
          <div className="flex justify-center mb-12">
            <div className="animate-float bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/30">
              <BeeLogo size="lg" className="w-40 h-40" />
            </div>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-green-400 via-yellow-400 to-white bg-clip-text text-transparent drop-shadow-lg">
              Coupons On The Go
            </span>
          </h1>
          
          {/* Tagline */}
          <p className="text-xl sm:text-2xl mb-12 text-white max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            All your favorite coupons in one sleek app. 
            <span className="text-yellow-300 font-bold"> No flyers, no hassle</span> — 
            just instant savings at your fingertips.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={scrollToWaitlist}
              size="lg"
              className="bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 transform hover:scale-110 transition-all text-xl px-12 py-6 rounded-full shadow-2xl font-bold"
              data-testid="button-join-waitlist"
            >
              Join the Waitlist
            </Button>
            <Button 
              onClick={scrollToHowItWorks}
              variant="outline"
              size="lg"
              className="border-3 border-white text-white hover:bg-white hover:text-gray-900 text-xl px-12 py-6 rounded-full transform hover:scale-110 transition-all bg-white/10 backdrop-blur-sm font-bold"
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
