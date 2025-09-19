import { useState } from "react";
import { Button } from "@/components/ui/button";
import BeeLogo from "@/components/bee-logo";
import couponBackground from "@assets/generated_images/Fast_food_coupon_collage_background_3dab3dc1.png";
import { Menu, X, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function HeroSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToWaitlist = () => scrollToSection("waitlist");
  const scrollToHowItWorks = () => scrollToSection("how-it-works");

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await apiRequest("POST", "/api/waitlist", { email: email.trim() });

      toast({
        title: "Welcome to the waitlist! 🚀",
        description: "You'll be the first to know when FlyQupon launches!",
      });
      
      setEmail(""); // Clear the form
    } catch (error: any) {
      toast({
        title: "Oops!",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50" style={{ paddingTop: 'env(safe-area-inset-top)' }}>
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
                className="text-muted-foreground hover:text-primary transition-colors py-3 px-4 min-h-[44px]"
                data-testid="nav-how-it-works"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection("features")}
                className="text-muted-foreground hover:text-primary transition-colors py-3 px-4 min-h-[44px]"
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
              className="md:hidden w-11 h-11"
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
                    className="text-xl text-foreground font-medium w-full text-left py-3 min-h-[44px]"
                    data-testid="mobile-nav-how-it-works"
                  >
                    How It Works
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection("features")}
                    className="text-xl text-foreground font-medium w-full text-left py-3 min-h-[44px]"
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
          <h1 className="font-bold mb-8 sm:mb-12 leading-tight tracking-tight" style={{ fontSize: 'clamp(2rem, 8vw, 5rem)' }}>
            <span className="bg-white px-4 sm:px-8 py-3 sm:py-4 rounded-2xl shadow-xl text-gray-900 inline-block">
              FlyQupon
            </span>
          </h1>
          
          {/* Main Description */}
          <div className="mb-8">
            <p className="leading-relaxed font-medium bg-white/90 backdrop-blur-sm rounded-2xl px-4 sm:px-8 py-4 sm:py-6 shadow-lg text-gray-700" style={{ fontSize: 'clamp(1rem, 4vw, 1.5rem)' }}>
              <span className="text-green-600 font-semibold">No paper, no need to wait for flyers to come in and no forgetting coupons.</span><br className="mb-2"/>
              We have it all in one app ready for whenever you need it.
            </p>
          </div>
          
          {/* Email Input Form */}
          <form onSubmit={handleEmailSubmit} className="mb-16 max-w-lg mx-auto">
            <div className="flex flex-col gap-3 sm:flex-row sm:relative sm:items-center">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email to join the waitlist 🚀"
                className="w-full px-6 sm:px-8 py-4 sm:py-5 sm:pr-24 rounded-full bg-white/95 backdrop-blur-sm border-2 border-white/50 text-gray-800 text-base sm:text-lg placeholder-gray-500 shadow-2xl focus:outline-none focus:ring-4 focus:ring-green-500/30 focus:border-green-400 focus:bg-white transition-all duration-300 hover:shadow-xl hover:bg-white"
                disabled={isSubmitting}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:absolute sm:right-2 sm:w-auto bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white px-6 sm:px-4 py-4 sm:py-3 rounded-full font-semibold transition-all hover:shadow-lg disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  "Join"
                )}
              </button>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400/10 to-blue-400/10 pointer-events-none hidden sm:block"></div>
            </div>
          </form>
          
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