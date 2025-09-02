import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

const testimonials = [
  {
    quote: "Finally, all my coupons in one place! No more digging through my wallet.",
    author: "Sarah M.",
    role: "University Student"
  },
  {
    quote: "This will save me so much time. Love the simple interface!",
    author: "Mike R.",
    role: "Working Parent"
  },
  {
    quote: "Can't wait for the full launch! The beta is already amazing.",
    author: "Emma L.",
    role: "Food Enthusiast"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What Early Users Say
          </h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of satisfied savers
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all" data-testid={`testimonial-${index}`}>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User className="text-muted-foreground w-8 h-8" />
                </div>
                <p className="text-foreground font-medium mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="text-sm text-muted-foreground">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p>{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
