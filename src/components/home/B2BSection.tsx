import { Link } from "react-router-dom";
import { ArrowRight, Building2, Package, Palette, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Package,
    title: "Low MOQ",
    description: "Flexible minimum order quantities for businesses of all sizes.",
  },
  {
    icon: Palette,
    title: "OEM/ODM",
    description: "Custom branding, colors, and designs for your unique needs.",
  },
  {
    icon: Building2,
    title: "Private Label",
    description: "Complete white-label solutions for your retail brand.",
  },
  {
    icon: Globe,
    title: "Global Shipping",
    description: "Reliable logistics to 30+ countries worldwide.",
  },
];

export function B2BSection() {
  return (
    <section className="section-padding bg-primary text-primary-foreground overflow-hidden">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Business Partners
            </p>
            <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Partner with Pairobin for Your Business
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
              Join our global network of retailers, distributors, and brands. 
              We offer competitive wholesale pricing, flexible MOQs, and complete 
              OEM/ODM manufacturing capabilities for athletic footwear.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                    <benefit.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-primary-foreground/70">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="accent" size="lg" asChild>
                <Link to="/b2b">
                  Become a Partner
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outlineLight" size="lg" asChild>
                <Link to="/contact">
                  Request Catalog
                </Link>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-3xl p-8 text-center">
                <p className="font-heading font-black text-5xl md:text-6xl text-accent mb-2">
                  500+
                </p>
                <p className="text-primary-foreground/70 font-medium">
                  Retail Partners
                </p>
              </div>
              <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-3xl p-8 text-center mt-8">
                <p className="font-heading font-black text-5xl md:text-6xl text-accent mb-2">
                  15+
                </p>
                <p className="text-primary-foreground/70 font-medium">
                  Years Experience
                </p>
              </div>
              <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-3xl p-8 text-center">
                <p className="font-heading font-black text-5xl md:text-6xl text-accent mb-2">
                  1M+
                </p>
                <p className="text-primary-foreground/70 font-medium">
                  Pairs Annually
                </p>
              </div>
              <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-3xl p-8 text-center mt-8">
                <p className="font-heading font-black text-5xl md:text-6xl text-accent mb-2">
                  30+
                </p>
                <p className="text-primary-foreground/70 font-medium">
                  Countries Served
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
