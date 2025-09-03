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
        
        {/* Realistic Coupon Collage Background */}
        <div className="absolute inset-0 opacity-8 blur-md">
          {/* McDonald's Coupon */}
          <div className="absolute top-16 left-12 w-56 h-36 bg-gradient-to-r from-red-600 to-yellow-500 rounded-lg transform rotate-12 shadow-2xl border border-yellow-300">
            <div className="p-4 text-white">
              <div className="text-sm font-black mb-2 text-yellow-300">McDONALD'S</div>
              <div className="text-3xl font-black text-yellow-400">25% OFF</div>
              <div className="text-sm font-bold">Big Mac Combo Meal</div>
              <div className="text-xs mt-2 text-yellow-200">Valid until Dec 31, 2025</div>
              <div className="text-xs text-yellow-200">In-store & app only</div>
            </div>
          </div>
          
          {/* Tim Hortons Coupon */}
          <div className="absolute top-40 right-20 w-52 h-32 bg-gradient-to-r from-red-800 to-red-600 rounded-lg transform -rotate-8 shadow-2xl border border-white">
            <div className="p-4 text-white">
              <div className="text-sm font-black mb-2">TIM HORTONS</div>
              <div className="text-2xl font-black text-yellow-300">$2 OFF</div>
              <div className="text-sm font-bold">Any Large Coffee</div>
              <div className="text-xs mt-2">Limited time offer</div>
            </div>
          </div>
          
          {/* Popeyes Coupon */}
          <div className="absolute bottom-36 left-24 w-48 h-34 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg transform rotate-6 shadow-2xl border border-orange-300">
            <div className="p-4 text-white">
              <div className="text-sm font-black mb-2 text-orange-200">POPEYES</div>
              <div className="text-2xl font-black text-orange-300">$5 OFF</div>
              <div className="text-sm font-bold">Family Feast</div>
              <div className="text-xs mt-2 text-orange-200">Dine-in only</div>
            </div>
          </div>
          
          {/* Pizza Hut Coupon */}
          <div className="absolute top-56 right-16 w-50 h-36 bg-gradient-to-r from-red-700 to-green-600 rounded-lg transform -rotate-15 shadow-2xl border border-green-300">
            <div className="p-4 text-white">
              <div className="text-sm font-black mb-2 text-green-200">PIZZA HUT</div>
              <div className="text-3xl font-black text-green-300">30% OFF</div>
              <div className="text-sm font-bold">Large Pizza</div>
              <div className="text-xs mt-2 text-green-200">Online orders only</div>
            </div>
          </div>
          
          {/* A&W Coupon */}
          <div className="absolute bottom-24 right-28 w-46 h-32 bg-gradient-to-r from-orange-600 to-amber-500 rounded-lg transform rotate-18 shadow-2xl border border-amber-300">
            <div className="p-4 text-white">
              <div className="text-sm font-black mb-2 text-amber-200">A&W</div>
              <div className="text-xl font-black text-amber-300">BUY 1 GET 1</div>
              <div className="text-sm font-bold">Teen Burger</div>
              <div className="text-xs mt-1 text-amber-200">Valid today</div>
            </div>
          </div>
        </div>
        
        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></div>
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-orange-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        {/* Hero Content with iPhone Mockup */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
            
            {/* Left Side - Content */}
            <div className="text-left lg:text-left">
              {/* Logo */}
              <div className="flex justify-start mb-8">
                <div className="animate-float">
                  <BeeLogo size="lg" className="w-32 h-32" />
                </div>
              </div>
              
              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-green-400 via-yellow-400 to-white bg-clip-text text-transparent">
                  Coupon on the Go
                </span>
              </h1>
              
              {/* Tagline */}
              <p className="text-xl sm:text-2xl mb-8 text-gray-300 leading-relaxed">
                All your favorite coupons in one sleek app. 
                <span className="text-yellow-400 font-semibold"> No flyers, no hassle</span> — 
                just instant savings at your fingertips.
              </p>
              
              {/* Stats Row */}
              <div className="flex gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">1000+</div>
                  <div className="text-sm text-gray-400">Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">50+</div>
                  <div className="text-sm text-gray-400">Partners</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400">$500K+</div>
                  <div className="text-sm text-gray-400">Saved</div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={scrollToWaitlist}
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all text-lg px-8 py-4 rounded-full shadow-2xl font-semibold"
                  data-testid="button-join-waitlist"
                >
                  Join the Waitlist
                </Button>
                <Button 
                  onClick={scrollToHowItWorks}
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/40 text-white hover:bg-white/10 backdrop-blur-md text-lg px-8 py-4 rounded-full transform hover:scale-105 transition-all"
                  data-testid="button-see-how-it-works"
                >
                  See How It Works
                </Button>
              </div>
            </div>
            
            {/* Right Side - iPhone Mockup */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative mx-auto w-80 h-[600px] bg-gray-900 rounded-[3rem] p-2 animate-float shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Phone Screen Content */}
                  <div className="relative h-full bg-gradient-to-b from-green-50 to-white">
                    {/* Status Bar */}
                    <div className="bg-green-600 h-12 flex items-center justify-between px-6 text-white">
                      <span className="text-sm font-medium">9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-white rounded-full" />
                        <div className="w-1 h-1 bg-white rounded-full" />
                        <div className="w-1 h-1 bg-white rounded-full" />
                      </div>
                    </div>
                    
                    {/* App Header with Large Logo */}
                    <div className="bg-white px-6 py-8 text-center border-b border-gray-200">
                      <div className="flex justify-center mb-4">
                        <BeeLogo size="lg" className="w-24 h-24" />
                      </div>
                      <h3 className="text-green-800 text-xl font-bold">Welcome to FlyQupon</h3>
                      <p className="text-gray-600 text-sm mt-2">Your savings start here</p>
                    </div>
                    
                    {/* Categories */}
                    <div className="p-6 space-y-4">
                      <h4 className="text-gray-800 font-bold text-lg">Popular Categories</h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-red-100 border border-red-200 rounded-lg p-3 text-center">
                          <div className="text-2xl mb-1">🍔</div>
                          <div className="text-xs font-semibold text-red-800">Fast Food</div>
                        </div>
                        <div className="bg-amber-100 border border-amber-200 rounded-lg p-3 text-center">
                          <div className="text-2xl mb-1">☕</div>
                          <div className="text-xs font-semibold text-amber-800">Coffee</div>
                        </div>
                        <div className="bg-orange-100 border border-orange-200 rounded-lg p-3 text-center">
                          <div className="text-2xl mb-1">🍕</div>
                          <div className="text-xs font-semibold text-orange-800">Pizza</div>
                        </div>
                        <div className="bg-green-100 border border-green-200 rounded-lg p-3 text-center">
                          <div className="text-2xl mb-1">🥪</div>
                          <div className="text-xs font-semibold text-green-800">Subs</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
