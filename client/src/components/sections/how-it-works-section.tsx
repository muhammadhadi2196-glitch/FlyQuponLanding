import { Search, HandMetal, Smartphone } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Browse",
    description: "Discover coupons from McDonald's, Tim Hortons, A&W, and more. All your favorites in one place.",
    bgColor: "bg-primary",
    textColor: "text-primary-foreground"
  },
  {
    icon: HandMetal,
    title: "Grab",
    description: "Save coupons instantly with one tap. No screenshots, no printing — just grab and go.",
    bgColor: "bg-accent",
    textColor: "text-accent-foreground"
  },
  {
    icon: Smartphone,
    title: "Redeem",
    description: "Show in-store or online, enjoy the savings. Your wallet will thank you later.",
    bgColor: "bg-primary",
    textColor: "text-primary-foreground"
  }
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            It's that simple — save more every day.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={step.title} className="text-center group" data-testid={`step-${index + 1}`}>
                <div className={`w-20 h-20 ${step.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform animate-float`}>
                  <IconComponent className={`${step.textColor} w-8 h-8`} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
