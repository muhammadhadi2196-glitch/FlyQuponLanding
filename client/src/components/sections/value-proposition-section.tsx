import { Tags, Zap, Smartphone, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Tags,
    title: "Save Daily",
    description: "Exclusive coupons from your favorite spots, updated every day.",
    bgColor: "bg-primary",
    textColor: "text-primary-foreground"
  },
  {
    icon: Zap,
    title: "Fast & Easy",
    description: "Grab deals in seconds. One tap to save, one tap to redeem.",
    bgColor: "bg-accent",
    textColor: "text-accent-foreground"
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Carry all your coupons in your pocket. No more lost paper deals.",
    bgColor: "bg-primary",
    textColor: "text-primary-foreground"
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Built by students, for everyone. Real savings for real people.",
    bgColor: "bg-accent",
    textColor: "text-accent-foreground"
  }
];

export default function ValuePropositionSection() {
  return (
    <section id="features" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose FlyQupon?
          </h2>
          <p className="text-xl text-muted-foreground">
            The smartest way to save on your favorite foods
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={feature.title} className="text-center hover:shadow-xl transition-all group" data-testid={`value-prop-${index}`}>
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    <IconComponent className={`${feature.textColor} w-8 h-8`} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
