import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-shoes.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-primary">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Pairobin athletic shoes"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-wide relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              New Collection 2024
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-heading font-black text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-[1.1] mb-6 animate-slide-up">
            Engineered for{" "}
            <span className="text-gradient">Performance</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-10 leading-relaxed animate-slide-up stagger-1">
            Premium athletic footwear designed for runners, walkers, cyclists, 
            and active families worldwide. Experience the perfect blend of 
            comfort, style, and innovation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 animate-slide-up stagger-2">
            <Button variant="hero" size="xl" asChild>
              <Link to="/shop">
                Shop Collection
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/about">
                <Play className="w-5 h-5 mr-2" />
                Our Story
              </Link>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-8 mt-12 pt-8 border-t border-primary-foreground/20 animate-fade-in stagger-3">
            <div className="text-center">
              <p className="font-heading font-bold text-3xl text-primary-foreground">50K+</p>
              <p className="text-sm text-primary-foreground/60 uppercase tracking-wider">Happy Customers</p>
            </div>
            <div className="text-center">
              <p className="font-heading font-bold text-3xl text-primary-foreground">4.9★</p>
              <p className="text-sm text-primary-foreground/60 uppercase tracking-wider">Average Rating</p>
            </div>
            <div className="text-center">
              <p className="font-heading font-bold text-3xl text-primary-foreground">30+</p>
              <p className="text-sm text-primary-foreground/60 uppercase tracking-wider">Countries</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
