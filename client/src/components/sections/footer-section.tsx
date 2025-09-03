import BeeLogo from "@/components/bee-logo";

const socialLinks = [
  { icon: "tiktok", href: "#", label: "TikTok" },
  { icon: "instagram", href: "#", label: "Instagram" }, 
  { icon: "twitter", href: "#", label: "Twitter" },
  { icon: "facebook", href: "#", label: "Facebook" }
];

const quickLinks = [
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" }
];

export default function FooterSection() {
  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Slogan */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4" data-testid="footer-logo">
              <div className="bg-white rounded-lg px-4 py-2 shadow-md">
                <BeeLogo size="xl" />
              </div>
            </div>
            <p className="text-lg font-medium text-accent mb-4">Coupon on the Go.</p>
            <p className="text-primary-foreground/70 leading-relaxed max-w-md">
              The smartest way to discover, save, and redeem coupons from your favorite restaurants and stores.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                    data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Social Media */}
          <div>
            <h4 className="font-bold text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.icon}
                  href={social.href} 
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all"
                  aria-label={social.label}
                  data-testid={`social-${social.icon}`}
                >
                  <span className="text-sm">
                    {social.icon === 'tiktok' && '🎵'}
                    {social.icon === 'instagram' && '📷'}
                    {social.icon === 'twitter' && '🐦'}
                    {social.icon === 'facebook' && '👥'}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/70" data-testid="copyright">
            © 2025 FlyQupon. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
