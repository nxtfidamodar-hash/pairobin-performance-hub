import { Layout } from "@/components/layout";
import { Factory, Microscope, Shield, Leaf, Cog, FlaskConical, Footprints, Award, CheckCircle } from "lucide-react";

const processes = [
  {
    icon: Microscope,
    title: "Material Research",
    description: "Our R&D team continuously researches and tests new materials to find the perfect balance of performance, comfort, and durability. We source premium materials from certified suppliers worldwide.",
  },
  {
    icon: FlaskConical,
    title: "Design Engineering",
    description: "Every shoe starts with extensive biomechanical research. Our engineers use advanced 3D modeling and stress analysis to optimize every component for peak performance.",
  },
  {
    icon: Factory,
    title: "Precision Manufacturing",
    description: "State-of-the-art automated production lines ensure consistent quality across every pair. Our facilities meet international standards for safety and environmental responsibility.",
  },
  {
    icon: Shield,
    title: "Quality Control",
    description: "Multi-point inspection process including stress testing, wear simulation, and visual inspection. Every pair must pass our rigorous 12-point quality checklist.",
  },
];

const technologies = [
  {
    name: "FlowFoam™ Cushioning",
    description: "Proprietary midsole technology that provides 30% more energy return than standard EVA foam, reducing fatigue during extended activity.",
  },
  {
    name: "AirMesh™ Upper",
    description: "Engineered mesh construction with strategic ventilation zones for optimal breathability and a seamless, irritation-free fit.",
  },
  {
    name: "GripTech™ Outsole",
    description: "Advanced rubber compound with multi-directional traction patterns for superior grip on any surface, wet or dry.",
  },
  {
    name: "StabiliFit™ Support",
    description: "Integrated heel counter and midfoot shank provide stability and support without adding weight or restricting natural movement.",
  },
];

const certifications = [
  "ISO 9001:2015 Quality Management",
  "ISO 14001 Environmental Management",
  "BSCI Social Compliance",
  "Oeko-Tex Standard 100 Materials",
  "SGS Product Testing",
  "REACH Compliance",
];

const Manufacturing = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Manufacturing Excellence
            </p>
            <h1 className="font-heading font-black text-5xl md:text-6xl leading-tight mb-6">
              Built to Perform, Engineered to Last
            </h1>
            <p className="text-xl text-primary-foreground/80">
              From material selection to final inspection, every step of our manufacturing 
              process is designed to deliver exceptional quality and performance.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Our Process
            </p>
            <h2 className="section-title">
              From Concept to Creation
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {processes.map((process, index) => (
              <div key={process.title} className="flex gap-6 bg-secondary rounded-2xl p-8">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                  <process.icon className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-accent font-heading font-black text-2xl">0{index + 1}</span>
                    <h3 className="font-heading font-bold text-xl">{process.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Innovation
            </p>
            <h2 className="font-heading font-black text-4xl md:text-5xl">
              Our Technology
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech) => (
              <div key={tech.name} className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-8">
                <h3 className="font-heading font-bold text-xl text-accent mb-3">{tech.name}</h3>
                <p className="text-primary-foreground/70">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                Quality Assurance
              </p>
              <h2 className="section-title mb-6">
                Uncompromising Standards
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Every pair of Pairobin shoes undergoes rigorous testing and inspection 
                to ensure it meets our exacting standards for quality, durability, and performance.
              </p>
              <div className="space-y-4">
                {["Flex testing: 100,000+ cycles", "Abrasion resistance testing", "Waterproofing verification", "Adhesion strength testing", "Color fastness assessment", "Dimensional accuracy check"].map((test) => (
                  <div key={test} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>{test}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-background rounded-3xl p-8">
              <h3 className="font-heading font-bold text-xl mb-6 flex items-center gap-3">
                <Award className="w-6 h-6 text-accent" />
                Certifications & Standards
              </h3>
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div key={cert} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Sustainability
            </p>
            <h2 className="section-title mb-4">
              Committed to a Better Future
            </h2>
            <p className="section-subtitle mx-auto">
              We're dedicated to reducing our environmental impact while maintaining the 
              highest standards of quality and performance.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                <Leaf className="w-10 h-10 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3">Recycled Materials</h3>
              <p className="text-muted-foreground">
                35% of our materials come from recycled sources, including ocean plastics and post-consumer waste.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                <Cog className="w-10 h-10 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3">Energy Efficient</h3>
              <p className="text-muted-foreground">
                Our facilities use 50% renewable energy and continue to invest in solar and wind power.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                <Footprints className="w-10 h-10 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3">Carbon Neutral Goal</h3>
              <p className="text-muted-foreground">
                We're on track to achieve carbon neutrality across our operations by 2030.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Manufacturing;
