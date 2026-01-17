import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Heart, Zap, Shield, Award, Users, Globe, Factory, Microscope, Leaf, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Target,
    title: "Performance First",
    description: "Every shoe is engineered to maximize athletic performance and help you achieve your goals.",
  },
  {
    icon: Heart,
    title: "Comfort Always",
    description: "We never compromise on comfort. Your feet deserve the best cushioning and support.",
  },
  {
    icon: Zap,
    title: "Innovation Driven",
    description: "Constantly pushing boundaries with new materials, technologies, and designs.",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Rigorous testing ensures every pair meets our exacting standards for durability.",
  },
];

const milestones = [
  { year: "2008", title: "Founded", description: "Pairobin started with a vision to create better athletic footwear." },
  { year: "2012", title: "First Collection", description: "Launched our inaugural running shoe collection to rave reviews." },
  { year: "2016", title: "Global Expansion", description: "Expanded distribution to 15+ countries across 4 continents." },
  { year: "2020", title: "Sustainability", description: "Launched eco-friendly line with recycled materials." },
  { year: "2024", title: "Innovation Lab", description: "Opened state-of-the-art R&D facility for next-gen footwear." },
];

const capabilities = [
  {
    icon: Factory,
    title: "Advanced Manufacturing",
    description: "State-of-the-art production facilities with automated quality control systems ensuring consistent excellence in every pair.",
  },
  {
    icon: Microscope,
    title: "Material Innovation",
    description: "Our R&D team sources and develops proprietary materials for superior breathability, cushioning, and durability.",
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description: "Committed to reducing our environmental footprint through recycled materials and responsible manufacturing.",
  },
  {
    icon: Sparkles,
    title: "Custom Design",
    description: "Full OEM/ODM capabilities to bring your unique footwear vision to life with our expert design team.",
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
              Our Story
            </p>
            <h1 className="font-heading font-black text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-[1.1] mb-6 animate-slide-up">
              Engineered for Excellence
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed animate-slide-up stagger-1">
              For over 15 years, Pairobin has been at the forefront of athletic footwear 
              innovation. We combine cutting-edge technology with timeless craftsmanship 
              to create shoes that help athletes of all levels perform at their best.
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
                Our Mission
              </p>
              <h2 className="section-title mb-6">
                Empowering Every Step
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At Pairobin, we believe that great footwear can transform the way you move, 
                train, and live. Our mission is to design and manufacture athletic shoes that 
                combine performance, comfort, and style – making premium footwear accessible 
                to athletes and active individuals worldwide.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                From professional marathoners to weekend joggers, from competitive cyclists 
                to families exploring the outdoors – we're committed to supporting every 
                journey with footwear that performs as hard as you do.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="default" size="lg" asChild>
                  <Link to="/shop">
                    Shop Collection
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/b2b">
                    Partner With Us
                  </Link>
                </Button>
              </div>
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

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="font-heading font-black text-5xl md:text-6xl text-accent mb-2">15+</p>
              <p className="text-primary-foreground/70">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="font-heading font-black text-5xl md:text-6xl text-accent mb-2">500+</p>
              <p className="text-primary-foreground/70">Retail Partners</p>
            </div>
            <div className="text-center">
              <p className="font-heading font-black text-5xl md:text-6xl text-accent mb-2">1M+</p>
              <p className="text-primary-foreground/70">Pairs Sold</p>
            </div>
            <div className="text-center">
              <p className="font-heading font-black text-5xl md:text-6xl text-accent mb-2">30+</p>
              <p className="text-primary-foreground/70">Countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Our Journey
            </p>
            <h2 className="section-title">
              Milestones That Define Us
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-background rounded-2xl p-6 shadow-card inline-block">
                      <p className="font-heading font-black text-4xl text-accent mb-2">
                        {milestone.year}
                      </p>
                      <h3 className="font-heading font-bold text-xl mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div className="relative z-10 w-4 h-4 rounded-full bg-accent border-4 border-background shadow-lg hidden md:block" />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Manufacturing Excellence
            </p>
            <h2 className="section-title mb-4">
              Built to Perform
            </h2>
            <p className="section-subtitle mx-auto">
              Our world-class manufacturing capabilities combine precision engineering 
              with artisan craftsmanship.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability) => (
              <div
                key={capability.title}
                className="group bg-secondary rounded-2xl p-8 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center mb-6 transition-colors">
                  <capability.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3">
                  {capability.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-primary-foreground/70 transition-colors">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-accent text-accent-foreground">
        <div className="container-wide text-center">
          <h2 className="font-heading font-black text-4xl md:text-5xl mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-10">
            Join thousands of athletes who trust Pairobin for their performance footwear needs.
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
