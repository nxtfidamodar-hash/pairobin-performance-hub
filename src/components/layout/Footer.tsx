import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import pairobinLogo from "@/assets/pairobin-logo.png";

const footerLinks = {
  shop: [
    { name: "All Products", href: "/shop" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ],
  support: [
    { name: "Shipping Policy", href: "/shipping" },
    { name: "Returns & Refunds", href: "/returns" },
    { name: "FAQ", href: "/faq" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast({
        title: "Please enter your email",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Successfully subscribed!",
      description: "Thank you for joining the Pairobin community.",
    });
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container-wide py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="font-heading text-2xl font-bold mb-2">
                Newsletter Sign Up
              </h3>
              <p className="text-primary-foreground/70 max-w-md">
                Receive our latest updates about our products & promotions.
              </p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="px-6 py-4 rounded-full bg-primary-foreground text-primary placeholder:text-primary/50 focus:outline-none focus:ring-2 focus:ring-accent min-w-[320px]"
                required
              />
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="rounded-full px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-wide py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img 
                src={pairobinLogo} 
                alt="Pairobin" 
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-primary-foreground/70 mb-6 max-w-sm">
              Pairobin is a footwear brand focused on designing and developing quality shoes for everyday wear. We sell directly to customers in the United States.
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4">
              Shop
            </h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                <a href="mailto:support@pairobin.com" className="hover:text-accent transition-colors">
                  support@pairobin.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                <a href="tel:+8618060061837" className="hover:text-accent transition-colors">
                  +86 180 6006 1837
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Mon-Fri: 9:00 – 18:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Links Row */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-wide py-8">
          <div className="flex flex-col items-center gap-6">
            <p className="text-sm text-primary-foreground/70 text-center">
              © 2026 <span className="font-bold text-primary-foreground">Pairobin.</span> All Rights Reserved.
            </p>
            
            {/* Payment Methods */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {/* Visa */}
              <div className="bg-white rounded-md px-3 py-2 flex items-center justify-center min-w-[60px]">
                <span className="text-[#1A1F71] font-bold text-lg italic">VISA</span>
              </div>
              {/* Mastercard */}
              <div className="bg-white rounded-md px-3 py-2 flex items-center justify-center min-w-[60px]">
                <div className="flex">
                  <div className="w-5 h-5 rounded-full bg-[#EB001B]"></div>
                  <div className="w-5 h-5 rounded-full bg-[#F79E1B] -ml-2"></div>
                </div>
              </div>
              {/* Amex */}
              <div className="bg-[#006FCF] rounded-md px-3 py-2 flex items-center justify-center min-w-[60px]">
                <span className="text-white font-bold text-xs">AMEX</span>
              </div>
              {/* Discover */}
              <div className="bg-white rounded-md px-3 py-2 flex items-center justify-center min-w-[60px]">
                <span className="text-[#FF6600] font-bold text-xs">DISCOVER</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
