import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Package, Palette, Globe, CheckCircle, FileText, Headphones, Truck, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const benefits = [
  {
    icon: Package,
    title: "Flexible MOQ",
    description: "Low minimum order quantities starting from 100 pairs, perfect for testing new markets or launching new styles.",
  },
  {
    icon: Palette,
    title: "OEM/ODM Services",
    description: "Full customization capabilities including colors, materials, branding, and complete custom designs.",
  },
  {
    icon: Building2,
    title: "Private Label",
    description: "White-label solutions to launch your own footwear brand with our manufacturing expertise.",
  },
  {
    icon: Globe,
    title: "Global Logistics",
    description: "Reliable worldwide shipping with dedicated logistics partners and real-time tracking.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Rigorous quality control at every production stage with detailed inspection reports.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Personal account manager and 24/7 support for all your business needs.",
  },
];

const process = [
  { step: 1, title: "Inquiry", description: "Submit your requirements through our form or contact us directly." },
  { step: 2, title: "Consultation", description: "Our team reviews your needs and provides tailored solutions." },
  { step: 3, title: "Sampling", description: "We create samples for your approval before bulk production." },
  { step: 4, title: "Production", description: "Your order enters our state-of-the-art manufacturing process." },
  { step: 5, title: "Quality Check", description: "Comprehensive quality inspection of all finished products." },
  { step: 6, title: "Delivery", description: "Safe and timely delivery to your specified destination." },
];

const B2B = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    country: "",
    businessType: "",
    productInterest: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Submitted!",
      description: "Our B2B team will contact you within 24 hours.",
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                Business Solutions
              </p>
              <h1 className="font-heading font-black text-5xl md:text-6xl leading-tight mb-6">
                Partner with Pairobin for Your Business
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-8">
                Join our global network of retailers, distributors, and brands. 
                We offer competitive wholesale pricing, OEM/ODM manufacturing, 
                and dedicated business support.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="accent" size="lg" asChild>
                  <a href="#inquiry-form">
                    Request Quote
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button variant="outlineLight" size="lg">
                  <FileText className="w-4 h-4 mr-2" />
                  Download Catalog
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-3xl p-8 text-center">
                <p className="font-heading font-black text-5xl text-accent mb-2">100+</p>
                <p className="text-primary-foreground/70">Min. Order Qty</p>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-3xl p-8 text-center mt-8">
                <p className="font-heading font-black text-5xl text-accent mb-2">15+</p>
                <p className="text-primary-foreground/70">Years Experience</p>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-3xl p-8 text-center">
                <p className="font-heading font-black text-5xl text-accent mb-2">500+</p>
                <p className="text-primary-foreground/70">Partners</p>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-3xl p-8 text-center mt-8">
                <p className="font-heading font-black text-5xl text-accent mb-2">30+</p>
                <p className="text-primary-foreground/70">Countries</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Why Partner With Us
            </p>
            <h2 className="section-title">
              Business Benefits
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-secondary rounded-2xl p-8 group hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center mb-6 transition-colors">
                  <benefit.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-primary-foreground/70 transition-colors">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              How It Works
            </p>
            <h2 className="section-title">
              Our Partnership Process
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item) => (
              <div key={item.step} className="relative bg-background rounded-2xl p-8">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-accent text-accent-foreground font-heading font-black text-xl flex items-center justify-center">
                  {item.step}
                </div>
                <h3 className="font-heading font-bold text-xl mb-3 mt-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry-form" className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                Get Started
              </p>
              <h2 className="section-title mb-4">
                Request a Quote
              </h2>
              <p className="section-subtitle mx-auto">
                Fill out the form below and our B2B team will contact you within 24 hours.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="bg-secondary rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Company Name *</label>
                  <input
                    type="text"
                    required
                    className="input-field"
                    value={formData.companyName}
                    onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Contact Name *</label>
                  <input
                    type="text"
                    required
                    className="input-field"
                    value={formData.contactName}
                    onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    className="input-field"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    className="input-field"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Country *</label>
                  <input
                    type="text"
                    required
                    className="input-field"
                    value={formData.country}
                    onChange={(e) => setFormData({...formData, country: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Business Type *</label>
                  <select
                    required
                    className="input-field"
                    value={formData.businessType}
                    onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                  >
                    <option value="">Select...</option>
                    <option value="retailer">Retailer</option>
                    <option value="distributor">Distributor</option>
                    <option value="brand">Brand Owner</option>
                    <option value="importer">Importer</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2">Product Interest</label>
                  <select
                    className="input-field"
                    value={formData.productInterest}
                    onChange={(e) => setFormData({...formData, productInterest: e.target.value})}
                  >
                    <option value="">Select category...</option>
                    <option value="running">Running Shoes</option>
                    <option value="walking">Walking Shoes</option>
                    <option value="cycling">Cycling Shoes</option>
                    <option value="kids">Kids Footwear</option>
                    <option value="outdoor">Outdoor/Hiking</option>
                    <option value="all">All Categories</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="input-field resize-none"
                    placeholder="Tell us about your requirements, quantities, and any specific needs..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
              </div>
              <Button type="submit" variant="accent" size="lg" className="w-full mt-8">
                Submit Inquiry
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default B2B;
