import { Leaf } from "lucide-react";

export default function EcoImpactSection() {
  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Leaf className="w-8 h-8 text-green-600" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Digital Savings, Real Impact
            </h2>
          </div>
          <p className="text-xl text-gray-700 leading-relaxed">
            By digitizing coupons, we not only save money and make sure we never forget our deals at home — we also help our planet by reducing paper waste, leading to a cleaner and greener Calgary.
          </p>
        </div>
      </div>
    </section>
  );
}
