import { useState } from "react";
import { Button } from "@/components/ui/button";
import BeeLogo from "@/components/bee-logo";
import pizzaImage from "@assets/generated_images/Gourmet_pizza_professional_photography_50c093cf.png";
import burgerImage from "@assets/generated_images/Juicy_burger_professional_photography_90a9eacd.png";
import shawarmaImage from "@assets/generated_images/Shawarma_wrap_professional_photography_467892fe.png";
import friesImage from "@assets/generated_images/Crispy_french_fries_photography_a75b7100.png";
import tacosImage from "@assets/generated_images/Mexican_tacos_professional_photography_966d3c21.png";
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
        
        {/* Real Food Photography Background */}
        <div className="absolute inset-0">
          {/* Pizza - Top Left */}
          <div 
            className="absolute top-0 left-0 w-96 h-80 transform rotate-12 overflow-hidden opacity-70"
            style={{
              backgroundImage: `url(${pizzaImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          
          {/* Burger - Top Right */}
          <div 
            className="absolute top-16 right-0 w-88 h-72 rounded-2xl transform -rotate-8 overflow-hidden opacity-75"
            style={{
              backgroundImage: `url(${burgerImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          
          {/* Shawarma - Middle Left */}
          <div 
            className="absolute top-1/3 left-8 w-80 h-64 rounded-2xl transform rotate-6 overflow-hidden opacity-70"
            style={{
              backgroundImage: `url(${shawarmaImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          
          {/* French Fries - Right Side */}
          <div 
            className="absolute top-2/3 right-8 w-76 h-88 rounded-2xl transform -rotate-15 overflow-hidden opacity-80"
            style={{
              backgroundImage: `url(${friesImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          
          {/* Tacos - Bottom Center */}
          <div 
            className="absolute bottom-8 left-1/4 w-84 h-64 rounded-2xl transform rotate-8 overflow-hidden opacity-75"
            style={{
              backgroundImage: `url(${tacosImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          
          {/* Additional Scattered Food Items */}
          {/* Small Pizza - Top Center */}
          <div 
            className="absolute top-20 left-1/2 w-48 h-48 rounded-full transform -rotate-20 overflow-hidden opacity-45"
            style={{
              backgroundImage: `url(${pizzaImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          
          {/* Small Burger - Middle Right */}
          <div 
            className="absolute top-1/2 right-16 w-56 h-56 rounded-full transform rotate-30 overflow-hidden opacity-40"
            style={{
              backgroundImage: `url(${burgerImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          
          {/* Small Fries - Bottom Left */}
          <div 
            className="absolute bottom-20 left-16 w-52 h-52 rounded-2xl transform -rotate-25 overflow-hidden opacity-50"
            style={{
              backgroundImage: `url(${friesImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          
          {/* Small Tacos - Top Right Corner */}
          <div 
            className="absolute top-8 right-32 w-60 h-44 rounded-2xl transform rotate-35 overflow-hidden opacity-35"
            style={{
              backgroundImage: `url(${tacosImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          
          {/* Small Shawarma - Bottom Right */}
          <div 
            className="absolute bottom-16 right-0 w-64 h-48 rounded-2xl transform -rotate-12 overflow-hidden opacity-45"
            style={{
              backgroundImage: `url(${shawarmaImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          
          {/* Tiny Food Accents */}
          <div 
            className="absolute top-72 left-72 w-36 h-36 rounded-full transform rotate-60 overflow-hidden opacity-30"
            style={{
              backgroundImage: `url(${burgerImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          
          <div 
            className="absolute bottom-32 left-1/2 w-40 h-40 rounded-full transform -rotate-45 overflow-hidden opacity-35"
            style={{
              backgroundImage: `url(${pizzaImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/50"></div>
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
          <p className="text-xl sm:text-2xl lg:text-3xl mb-16 text-white max-w-5xl mx-auto leading-relaxed drop-shadow-lg">
            <span className="text-yellow-300 font-bold">No paper, no need to wait for flyers to come in and no forgetting coupons.</span><br className="hidden sm:block"/>
            We have it all in one app ready for whenever you need it.
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
