import { Check } from "lucide-react";
import BeeLogo from "@/components/bee-logo";
import mcdonaldsLogo from "@assets/dnaks logo_1756874415179.png";
import timHortonsLogo from "@assets/Tim-Hortons-logo_1756874415180.png";
import popeyesLogo from "@assets/pops logo_1756874415180.png";

const features = [
  "Real-time coupon updates",
  "Location-based deals", 
  "Student-exclusive discounts"
];

export default function AppMockupSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* App Mockup */}
          <div className="relative" data-testid="app-mockup">
            {/* Phone mockup container */}
            <div className="relative mx-auto w-80 h-[600px] bg-gray-900 rounded-[3rem] p-2 animate-float">
              <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden border border-border">
                {/* App Screen Content */}
                <div className="relative h-full">
                  {/* Status Bar */}
                  <div className="bg-primary h-12 flex items-center justify-between px-6 text-primary-foreground">
                    <span className="text-sm font-medium">9:41</span>
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-primary-foreground rounded-full" />
                      <div className="w-1 h-1 bg-primary-foreground rounded-full" />
                      <div className="w-1 h-1 bg-primary-foreground rounded-full" />
                    </div>
                  </div>
                  
                  {/* App Header */}
                  <div className="bg-white px-6 py-6 border-b border-gray-200">
                    <div className="flex justify-center mb-3">
                      <BeeLogo size="md" className="w-20 h-20" />
                    </div>
                    <h3 className="text-gray-800 text-lg font-bold text-center">Your Favorite Deals</h3>
                  </div>
                  
                  {/* Restaurant Partners */}
                  <div className="p-4 space-y-4">
                    <h4 className="text-sm font-bold text-gray-800 mb-4">Partner Restaurants</h4>
                    
                    {/* Brand Logos Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center justify-center h-16">
                        <img 
                          src={mcdonaldsLogo}
                          alt="McDonald's"
                          className="w-12 h-8 object-contain"
                        />
                      </div>
                      <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center justify-center h-16">
                        <img 
                          src={timHortonsLogo}
                          alt="Tim Hortons"
                          className="w-16 h-6 object-contain"
                        />
                      </div>
                      <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 flex items-center justify-center h-16">
                        <img 
                          src={popeyesLogo}
                          alt="Popeyes"
                          className="w-14 h-10 object-contain"
                        />
                      </div>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-center justify-center h-16">
                        <div className="text-sm font-black text-green-800">A&W</div>
                      </div>
                    </div>
                    
                    {/* Active Deals */}
                    <div className="space-y-2">
                      <div className="bg-green-100 border border-green-300 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <div className="text-xs font-bold text-green-800">25% OFF Big Mac</div>
                          <div className="bg-green-600 text-white px-2 py-1 rounded text-xs font-bold">LIVE</div>
                        </div>
                      </div>
                      
                      <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <div className="text-xs font-bold text-yellow-800">$2 OFF Coffee</div>
                          <div className="bg-yellow-600 text-white px-2 py-1 rounded text-xs font-bold">NEW</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="lg:pl-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Built for Students & Families
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              FlyQupon brings all your favorite restaurant coupons into one beautiful, easy-to-use app. 
              Say goodbye to cluttered wallets and expired paper coupons.
            </p>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={feature} className="flex items-center space-x-3" data-testid={`feature-${index}`}>
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <Check className="text-primary-foreground w-3 h-3" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
