import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, Phone, MapPin, MessageCircle, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "We'll respond within 24 hours",
    value: "support@pairobin.com",
    link: "mailto:support@pairobin.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Mon-Fri from 8am to 6pm EST",
    value: "+1 (555) 123-4567",
    link: "tel:+15551234567",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Quick response guaranteed",
    value: "+1 (555) 987-6543",
    link: "https://wa.me/15559876543",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Our global headquarters",
    value: "Los Angeles, CA, USA",
    link: "#",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    orderNumber: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", subject: "", orderNumber: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="max-w-2xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Contact Us
            </p>
            <h1 className="font-heading font-black text-5xl md:text-6xl leading-tight mb-6">
              We're Here to Help
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Have a question about your order, our products, or want to become a partner? 
              We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method) => (
              <a
                key={method.title}
                href={method.link}
                className="bg-secondary rounded-2xl p-6 group hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center mb-4 transition-colors">
                  <method.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-1">
                  {method.title}
                </h3>
                <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/60 mb-2">
                  {method.description}
                </p>
                <p className="font-medium group-hover:text-accent transition-colors">
                  {method.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="section-title mb-4">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Name *</label>
                    <input
                      type="text"
                      required
                      className="input-field"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      className="input-field"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject *</label>
                    <select
                      required
                      className="input-field"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    >
                      <option value="">Select a topic...</option>
                      <option value="order">Order Inquiry</option>
                      <option value="product">Product Question</option>
                      <option value="return">Returns & Exchanges</option>
                      <option value="wholesale">Wholesale/B2B</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Order Number</label>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="If applicable"
                      value={formData.orderNumber}
                      onChange={(e) => setFormData({...formData, orderNumber: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <textarea
                    required
                    rows={6}
                    className="input-field resize-none"
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                <Button type="submit" variant="accent" size="lg">
                  Send Message
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>

            {/* FAQ Sidebar */}
            <div>
              <div className="bg-secondary rounded-3xl p-8 md:p-10 sticky top-32">
                <h3 className="font-heading font-bold text-2xl mb-6">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">How long does shipping take?</h4>
                    <p className="text-sm text-muted-foreground">
                      Standard shipping takes 5-7 business days within the US. Express shipping (2-3 days) is available at checkout.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">What's your return policy?</h4>
                    <p className="text-sm text-muted-foreground">
                      We offer 30-day hassle-free returns. Items must be unworn and in original packaging.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Do you ship internationally?</h4>
                    <p className="text-sm text-muted-foreground">
                      Yes! We ship to 30+ countries. International shipping takes 7-14 business days.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">How can I track my order?</h4>
                    <p className="text-sm text-muted-foreground">
                      You'll receive a tracking number via email once your order ships. You can also track orders in your account.
                    </p>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-border">
                  <Link to="/faq" className="text-accent font-semibold hover:underline inline-flex items-center">
                    View All FAQs
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B2B CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <h2 className="font-heading font-bold text-3xl mb-4">
            Looking for Wholesale or B2B Solutions?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Our dedicated B2B team is ready to help with bulk orders, custom manufacturing, and partnership opportunities.
          </p>
          <Button variant="accent" size="lg" asChild>
            <Link to="/b2b">
              Visit B2B Page
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
