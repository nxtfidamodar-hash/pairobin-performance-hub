import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Heart, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Target,
    title: "Quality Focus",
    description: "Every shoe is designed with attention to detail and quality control.",
  },
  {
    icon: Heart,
    title: "Comfort First",
    description: "We prioritize comfort in every design for everyday wear.",
  },
  {
    icon: Shield,
    title: "Durability",
    description: "Built to last with quality materials and construction.",
  },
  {
    icon: CheckCircle,
    title: "Direct to You",
    description: "We sell directly to customers through our official website.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(255,107,53,0.3),_transparent_50%)]" />
        </div>
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 animate-fade-in">
              About Us
            </p>
            <h1 className="font-heading font-black text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-[1.1] mb-6 animate-slide-up">
              Quality Footwear for Everyday Wear
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed animate-slide-up stagger-1">
              Pairobin is a footwear brand focused on designing and developing quality 
              shoes for everyday wear. Our products are designed in-house and produced 
              through our own and partner manufacturing facilities, with an emphasis on 
              comfort, durability, and quality control.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                Our Approach
              </p>
              <h2 className="section-title mb-6">
                Designed In-House, Built for Quality
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We sell directly to customers through our official website and serve 
                customers in the United States. Our focus is on creating footwear that 
                combines comfort, durability, and quality at accessible prices.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Every pair of Pairobin shoes goes through quality control processes 
                to ensure consistency and reliability. We believe in delivering products 
                that meet our customers' expectations for everyday wear.
              </p>
              <Button variant="default" size="lg" asChild>
                <Link to="/shop">
                  Shop Collection
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className={`bg-secondary rounded-2xl p-6 ${index % 2 === 1 ? 'mt-8' : ''}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 bg-secondary">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-6">What We Offer</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <Target className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-2">In-House Design</h3>
                <p className="text-muted-foreground">
                  Products designed by our team with focus on everyday functionality.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-2">Quality Control</h3>
                <p className="text-muted-foreground">
                  Rigorous quality checks through our manufacturing process.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-2">Direct Sales</h3>
                <p className="text-muted-foreground">
                  We sell directly to customers through our official website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-accent text-accent-foreground">
        <div className="container-wide text-center">
          <h2 className="font-heading font-black text-4xl md:text-5xl mb-6">
            Ready to Shop?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-10">
            Browse our collection of quality footwear designed for everyday wear.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="default" size="xl" asChild>
              <Link to="/shop">
                Shop Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="outlineLight" size="xl" asChild>
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
