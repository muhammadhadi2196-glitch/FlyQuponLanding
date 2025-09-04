import { Check, Search, Home, Search as SearchIcon, Heart, User } from "lucide-react";
import BeeLogo from "@/components/bee-logo";
import mcdonaldsLogo from "@assets/dnaks logo_1756874415179.png";
import timHortonsLogo from "@assets/Tim-Hortons-logo_1756874415180.png";
import popeyesLogo from "@assets/pops logo_1756874415180.png";
import burgerImage from "@assets/generated_images/McDonald's_Big_Mac_burger_photo_387f8f12.png";

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
            <div className="relative mx-auto w-80 h-[650px] bg-gray-900 rounded-[3rem] p-2 animate-float shadow-2xl">
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
                  <div className="bg-white px-4 pt-4 pb-3">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input 
                        type="text" 
                        placeholder="Search restaurants, items, or brands"
                        className="w-full pl-10 pr-4 py-3.5 bg-gray-100 rounded-xl text-sm text-gray-500 font-medium"
                        disabled
                      />
                    </div>
                  </div>
                  
                  {/* Navigation Tabs */}
                  <div className="bg-white px-4 pb-5">
                    <div className="flex space-x-3">
                      <div className="bg-orange-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold flex items-center shadow-sm">
                        <span className="mr-2">📍</span> Nearby
                      </div>
                      <div className="bg-gray-100 text-gray-600 px-5 py-2.5 rounded-full text-sm font-semibold flex items-center">
                        <span className="mr-2">🔥</span> Trending
                      </div>
                      <div className="bg-gray-100 text-gray-500 px-4 py-2.5 rounded-full text-sm font-semibold flex items-center">
                        <span className="mr-2">⏰</span> Expiring Soon
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
                      <div className="bg-white rounded-xl p-4 mb-4 shadow-sm border border-gray-100">
                        <div className="flex items-start space-x-3">
                          <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                            <img 
                              src={burgerImage} 
                              alt="Big Mac" 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between mb-1">
                              <h4 className="font-bold text-gray-900 text-sm leading-tight">McDonald's - 17th Ave</h4>
                              <div className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold ml-2">50% OFF</div>
                            </div>
                            <p className="text-gray-700 text-sm font-medium mb-1">Buy 1 Get 1 Free Burgers</p>
                            <p className="text-gray-500 text-xs mb-1">1235 17 Ave SW, Calgary, AB</p>
                            <p className="text-gray-500 text-xs">Expires: Dec 30</p>
                          </div>
                          <Heart className="w-6 h-6 text-gray-300 flex-shrink-0 mt-1" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Browse by Category */}
                    <div className="px-4 py-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">Browse by Category</h3>
                      
                      <div className="grid grid-cols-2 gap-4 mb-5">
                        <div className="bg-white rounded-xl p-5 border border-gray-100 text-center shadow-sm">
                          <div className="text-3xl mb-3">🍔</div>
                          <div className="font-bold text-gray-900 text-sm mb-1">Fast Food</div>
                          <div className="text-gray-500 text-xs">5 deals</div>
                        </div>
                        <div className="bg-white rounded-xl p-5 border border-gray-100 text-center shadow-sm">
                          <div className="text-3xl mb-3">☕</div>
                          <div className="font-bold text-gray-900 text-sm mb-1">Coffee & Café</div>
                          <div className="text-gray-500 text-xs">2 deals</div>
                        </div>
                        <div className="bg-white rounded-xl p-5 border border-gray-100 text-center shadow-sm">
                          <div className="text-3xl mb-3">🍽️</div>
                          <div className="font-bold text-gray-900 text-sm mb-1">Fine Dining</div>
                          <div className="text-gray-500 text-xs">0 deals</div>
                        </div>
                        <div className="bg-white rounded-xl p-5 border border-gray-100 text-center shadow-sm">
                          <div className="text-3xl mb-3">🍰</div>
                          <div className="font-bold text-gray-900 text-sm mb-1">Desserts</div>
                          <div className="text-gray-500 text-xs">1 deals</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold text-gray-900">All Deals</h3>
                        <button className="text-blue-500 text-sm font-semibold flex items-center">
                          <span className="mr-1">—</span> Sort
                        </button>
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
