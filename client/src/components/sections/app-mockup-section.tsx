import { Check, Search, Home, Search as SearchIcon, Heart, User } from "lucide-react";
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
                <div className="relative h-full bg-gray-50">
                  {/* Status Bar */}
                  <div className="bg-white h-12 flex items-center justify-between px-4 text-black">
                    <span className="text-sm font-medium">9:41</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-2 border border-black rounded-sm" />
                      <div className="w-1 h-1 bg-black rounded-full" />
                      <div className="w-1 h-1 bg-black rounded-full" />
                    </div>
                  </div>
                  
                  {/* Search Bar */}
                  <div className="bg-white p-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input 
                        type="text" 
                        placeholder="Search restaurants, items, or brands"
                        className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-lg text-sm text-gray-600"
                        disabled
                      />
                    </div>
                  </div>
                  
                  {/* Navigation Tabs */}
                  <div className="bg-white px-4 pb-4">
                    <div className="flex space-x-2">
                      <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                        <span className="mr-1">📍</span> Nearby
                      </div>
                      <div className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm font-medium flex items-center">
                        <span className="mr-1">🔥</span> Trending
                      </div>
                      <div className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm font-medium flex items-center">
                        <span className="mr-1">⏰</span> Expiring Soon
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto">
                    {/* Hot Deals Section */}
                    <div className="px-4 py-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                        <span className="mr-2">🔥</span> Hot Deals Near You
                      </h3>
                      
                      {/* McDonald's Deal */}
                      <div className="bg-white rounded-lg p-4 mb-4 shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                              <img src={mcdonaldsLogo} alt="McDonald's" className="w-8 h-6 object-contain" />
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900 text-sm">McDonald's - 17th Ave</h4>
                              <p className="text-gray-600 text-xs">Buy 1 Get 1 Free Burgers</p>
                              <p className="text-gray-400 text-xs">1235 17 Ave SW, Calgary, AB</p>
                              <p className="text-gray-400 text-xs">Expires: Dec 30</p>
                            </div>
                          </div>
                          <div className="flex flex-col items-end">
                            <div className="bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold mb-2">50% OFF</div>
                            <Heart className="w-5 h-5 text-gray-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Browse by Category */}
                    <div className="px-4 py-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">Browse by Category</h3>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                          <div className="text-2xl mb-2">🍔</div>
                          <div className="font-semibold text-gray-900 text-sm">Fast Food</div>
                          <div className="text-gray-500 text-xs">5 deals</div>
                        </div>
                        <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                          <div className="text-2xl mb-2">☕</div>
                          <div className="font-semibold text-gray-900 text-sm">Coffee & Café</div>
                          <div className="text-gray-500 text-xs">2 deals</div>
                        </div>
                        <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                          <div className="text-2xl mb-2">🍽️</div>
                          <div className="font-semibold text-gray-900 text-sm">Fine Dining</div>
                          <div className="text-gray-500 text-xs">0 deals</div>
                        </div>
                        <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                          <div className="text-2xl mb-2">🍰</div>
                          <div className="font-semibold text-gray-900 text-sm">Desserts</div>
                          <div className="text-gray-500 text-xs">1 deals</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold text-gray-900">All Deals</h3>
                        <button className="text-blue-500 text-sm font-medium">Sort</button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom Navigation */}
                  <div className="bg-white border-t border-gray-200 px-4 py-2">
                    <div className="flex justify-around items-center">
                      <div className="flex flex-col items-center py-1">
                        <Home className="w-6 h-6 text-orange-500" />
                        <span className="text-xs text-orange-500 font-medium mt-1">Home</span>
                      </div>
                      <div className="flex flex-col items-center py-1">
                        <SearchIcon className="w-6 h-6 text-gray-400" />
                        <span className="text-xs text-gray-400 mt-1">Search</span>
                      </div>
                      <div className="flex flex-col items-center py-1">
                        <Heart className="w-6 h-6 text-gray-400" />
                        <span className="text-xs text-gray-400 mt-1">Saved</span>
                      </div>
                      <div className="flex flex-col items-center py-1">
                        <User className="w-6 h-6 text-gray-400" />
                        <span className="text-xs text-gray-400 mt-1">Profile</span>
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
