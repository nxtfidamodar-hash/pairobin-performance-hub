import { Truck, Shield, RefreshCw, Headphones, Award, Globe } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Global Shipping",
    description: "Free delivery on orders over $99. Express shipping available worldwide.",
  },
  {
    icon: Shield,
    title: "Secure Checkout",
    description: "256-bit SSL encryption. Your payment information is always protected.",
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    description: "30-day hassle-free returns. No questions asked money-back guarantee.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Expert customer service available around the clock via chat or phone.",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description: "Every pair is crafted with premium materials and rigorous quality control.",
  },
  {
    icon: Globe,
    title: "Global Delivery",
    description: "We ship to 30+ countries. Track your order in real-time.",
  },
];

export function TrustBadges() {
  return (
    <section className="py-12 md:py-16 bg-background border-y border-border">
      <div className="container-wide">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center group">
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-sm mb-2">
                {feature.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
