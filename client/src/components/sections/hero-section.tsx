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
        
        {/* Authentic Coupon Collage */}
        <div className="absolute inset-0 opacity-15 blur-sm">
          {/* McDonald's Coupon */}
          <div className="absolute top-16 left-12 w-48 h-32 bg-red-600 rounded-lg transform rotate-12 shadow-lg">
            <div className="p-3 text-white">
              <div className="text-xs font-bold mb-1">McDonald's</div>
              <div className="text-2xl font-black">25% OFF</div>
              <div className="text-xs">Big Mac Combo</div>
              <div className="text-xs mt-2">Valid until 12/31</div>
            </div>
          </div>
          
          {/* Tim Hortons Coupon */}
          <div className="absolute top-40 right-20 w-44 h-28 bg-red-800 rounded-lg transform -rotate-6 shadow-lg">
            <div className="p-3 text-white">
              <div className="text-xs font-bold mb-1">Tim Hortons</div>
              <div className="text-xl font-black">$2 OFF</div>
              <div className="text-xs">Any Large Coffee</div>
              <div className="text-xs mt-1">Limited time</div>
            </div>
          </div>
          
          {/* A&W Coupon */}
          <div className="absolute bottom-36 left-24 w-40 h-30 bg-orange-600 rounded-lg transform rotate-8 shadow-lg">
            <div className="p-3 text-white">
              <div className="text-xs font-bold mb-1">A&W</div>
              <div className="text-xl font-black">BUY 1</div>
              <div className="text-xl font-black">GET 1</div>
              <div className="text-xs">Teen Burger</div>
            </div>
          </div>
          
          {/* Pizza Hut Coupon */}
          <div className="absolute top-56 right-16 w-46 h-32 bg-red-700 rounded-lg transform -rotate-12 shadow-lg">
            <div className="p-3 text-white">
              <div className="text-xs font-bold mb-1">Pizza Hut</div>
              <div className="text-2xl font-black">30% OFF</div>
              <div className="text-xs">Large Pizza</div>
              <div className="text-xs mt-2">Online orders only</div>
            </div>
          </div>
          
          {/* Popeyes Coupon */}
          <div className="absolute bottom-24 right-28 w-42 h-30 bg-orange-500 rounded-lg transform rotate-15 shadow-lg">
            <div className="p-3 text-white">
              <div className="text-xs font-bold mb-1">Popeyes</div>
              <div className="text-xl font-black">$5 OFF</div>
              <div className="text-xs">Family Meal</div>
              <div className="text-xs mt-1">Dine-in only</div>
            </div>
          </div>
          
          {/* Subway Coupon */}
          <div className="absolute top-72 left-32 w-40 h-28 bg-green-600 rounded-lg transform -rotate-8 shadow-lg">
            <div className="p-3 text-white">
              <div className="text-xs font-bold mb-1">Subway</div>
              <div className="text-xl font-black">FREE</div>
              <div className="text-xs">Cookie w/ Sub</div>
              <div className="text-xs mt-1">Any footlong</div>
            </div>
          </div>
        </div>
        
        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></div>
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-orange-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-12">
            <div className="animate-float bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20">
              <BeeLogo size="lg" className="w-40 h-40" />
            </div>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-green-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Coupon on the Go
            </span>
          </h1>
          
          {/* Tagline */}
          <p className="text-xl sm:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            All your favorite coupons in one sleek app. 
            <span className="text-yellow-400 font-semibold"> No flyers, no hassle</span> — 
            just instant savings at your fingertips.
          </p>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
              <div className="text-2xl sm:text-3xl font-bold text-green-400">1000+</div>
              <div className="text-xs sm:text-sm text-gray-300">Users Saved</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
              <div className="text-2xl sm:text-3xl font-bold text-yellow-400">50+</div>
              <div className="text-xs sm:text-sm text-gray-300">Restaurant Partners</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
              <div className="text-2xl sm:text-3xl font-bold text-orange-400">$500K+</div>
              <div className="text-xs sm:text-sm text-gray-300">Total Savings</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={scrollToWaitlist}
              size="lg"
              className="bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all w-full sm:w-auto text-lg px-10 py-4 rounded-full shadow-2xl font-semibold"
              data-testid="button-join-waitlist"
            >
              Join the Waitlist
            </Button>
            <Button 
              onClick={scrollToHowItWorks}
              variant="outline"
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-md w-full sm:w-auto text-lg px-10 py-4 rounded-full transform hover:scale-105 transition-all"
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
