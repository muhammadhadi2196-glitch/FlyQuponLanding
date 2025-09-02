import { Check } from "lucide-react";
import BeeLogo from "@/components/bee-logo";

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
                  <div className="bg-primary px-6 py-4">
                    <div className="flex items-center mb-2">
                      <BeeLogo size="sm" />
                    </div>
                    <h3 className="text-primary-foreground text-lg font-semibold">All Coupons in One Place</h3>
                  </div>
                  
                  {/* Categories */}
                  <div className="p-4 space-y-3">
                    <div className="flex space-x-3 overflow-x-auto">
                      <div className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">🍔 Fast Food</div>
                      <div className="bg-muted text-muted-foreground px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">☕ Coffee</div>
                      <div className="bg-muted text-muted-foreground px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">🍕 Pizza</div>
                    </div>
                    
                    {/* Coupon Cards */}
                    <div className="space-y-3">
                      <div className="bg-card border border-border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-sm font-bold text-primary">McDonald's</span>
                          <span className="bg-accent text-accent-foreground px-2 py-1 rounded text-xs font-bold">25% OFF</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Big Mac Combo</p>
                      </div>
                      
                      <div className="bg-card border border-border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-sm font-bold text-primary">Tim Hortons</span>
                          <span className="bg-accent text-accent-foreground px-2 py-1 rounded text-xs font-bold">$2 OFF</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Double Double</p>
                      </div>
                      
                      <div className="bg-primary text-primary-foreground rounded-lg p-4 text-center">
                        <span className="text-sm font-bold">Never Miss a Deal Again</span>
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
