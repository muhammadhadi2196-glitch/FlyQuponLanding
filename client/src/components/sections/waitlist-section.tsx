import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertWaitlistEmailSchema, type InsertWaitlistEmail } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function WaitlistSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<InsertWaitlistEmail>({
    resolver: zodResolver(insertWaitlistEmailSchema),
    defaultValues: {
      email: "",
    },
  });

  const waitlistMutation = useMutation({
    mutationFn: async (data: InsertWaitlistEmail) => {
      const response = await apiRequest("POST", "/api/waitlist", data);
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      form.reset();
      toast({
        title: "Success!",
        description: "You've been added to the waitlist. Check your email for confirmation.",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to join waitlist. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertWaitlistEmail) => {
    waitlistMutation.mutate(data);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "FlyQupon - Coupon on the Go",
        text: "Check out FlyQupon - all your favorite coupons in one app!",
        url: window.location.href,
      });
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied!",
        description: "Share this link with your friends",
      });
    }
  };

  if (isSubmitted) {
    return (
      <section id="waitlist" className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="bg-primary text-primary-foreground border-0">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold mb-4">You're In! 🎉</h3>
              <p className="text-xl mb-6">
                Thanks for joining the FlyQupon waitlist. You'll be the first to know when we launch.
                Keep an eye on your inbox — exclusive early perks are coming.
              </p>
              <Button 
                onClick={handleShare}
                variant="secondary"
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
                data-testid="button-share"
              >
                Share with Friends
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="py-20 bg-accent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent-foreground mb-6">
          Be the First to Try FlyQupon
        </h2>
        <p className="text-xl text-accent-foreground/80 mb-8 max-w-2xl mx-auto">
          Join our waitlist and unlock early access before anyone else. Plus, get exclusive launch perks!
        </p>
        
        <Form {...form}>
          <form 
            onSubmit={form.handleSubmit(onSubmit)} 
            className="max-w-lg mx-auto"
            data-testid="waitlist-form"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input 
                        type="email" 
                        placeholder="Enter your email address"
                        className="px-6 py-4 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring h-auto"
                        data-testid="input-email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button 
                type="submit"
                disabled={waitlistMutation.isPending}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 h-auto font-semibold transform hover:scale-105 transition-all whitespace-nowrap"
                data-testid="button-submit-waitlist"
              >
                {waitlistMutation.isPending ? "Signing Up..." : "Sign Me Up"}
              </Button>
            </div>
            <p className="text-accent-foreground/70 text-sm mt-4">
              No spam, just savings. Unsubscribe anytime.
            </p>
          </form>
        </Form>
      </div>
    </section>
  );
}
