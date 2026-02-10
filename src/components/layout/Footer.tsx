import { useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Mail, MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const paymentMethods = [
  { name: "Visa", icon: "💳" },
  { name: "Mastercard", icon: "💳" },
  { name: "Maestro", icon: "💳" },
  { name: "American Express", icon: "💳" },
  { name: "Diners Club", icon: "💳" },
  { name: "Discover", icon: "💳" },
  { name: "JCB", icon: "💳" },
];

const footerLinks = {
  shop: [
    { name: "Running Shoes", href: "/shop/running" },
    { name: "Walking Shoes", href: "/shop/walking" },
    { name: "Cycling Shoes", href: "/shop/cycling" },
    { name: "Kids Active", href: "/shop/kids" },
    { name: "Outdoor Footwear", href: "/shop/outdoor" },
    { name: "All Products", href: "/shop" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Manufacturing", href: "/manufacturing" },
    { name: "B2B Wholesale", href: "/b2b" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
  ],
  support: [
    { name: "FAQ", href: "/faq" },
    { name: "Shipping Policy", href: "/shipping" },
    { name: "Returns & Exchanges", href: "/returns" },
    { name: "Contact Us", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Refund Policy", href: "/returns" },
  ],
};

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.73a8.19 8.19 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.16z"/>
  </svg>
);

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/pairobinshoe/" },
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/61583632801176/" },
  { name: "YouTube", icon: Youtube, href: "https://m.youtube.com/@pairobin/shorts" },
  { name: "TikTok", icon: TikTokIcon, href: "https://www.tiktok.com/@pairobin" },
];

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
    // Simulate submission
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
              <h3 className="font-heading text-2xl font-bold italic mb-2">
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
              <span className="font-heading font-black text-3xl tracking-tight">
                PAIROBIN
              </span>
            </Link>
            <p className="text-primary-foreground/70 mb-6 max-w-sm">
              Engineered for performance. Designed for life. Premium athletic footwear for runners, walkers, cyclists, and active families worldwide.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
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
                <span>info@pairobin.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                <span>+86 180 6006 1837</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>ROOM 122, 12/F, TUNG LEE INDUSTRIAL BUILDING<br />9 LAI YIP STREET, KWUN TONG<br />KOWLOON, HONG KONG</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Mon – Fri: 9:00 AM – 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-wide py-8">
          <div className="flex flex-col items-center gap-6">
            <p className="text-sm text-primary-foreground/70 text-center">
              © 2026 <span className="font-bold text-primary-foreground">Pairobin.</span> All Rights Reserved.
              <br />
              <span className="text-primary-foreground/50 text-xs mt-1 inline-block">Operated by 石狮市派罗宾运动科技有限公司 (Pairobin)</span>
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
              {/* Maestro */}
              <div className="bg-white rounded-md px-3 py-2 flex items-center justify-center min-w-[60px]">
                <div className="flex">
                  <div className="w-5 h-5 rounded-full bg-[#0066CC]"></div>
                  <div className="w-5 h-5 rounded-full bg-[#CC0000] -ml-2"></div>
                </div>
              </div>
              {/* Amex */}
              <div className="bg-[#006FCF] rounded-md px-3 py-2 flex items-center justify-center min-w-[60px]">
                <span className="text-white font-bold text-xs">AMEX</span>
              </div>
              {/* Diners Club */}
              <div className="bg-white rounded-md px-3 py-2 flex items-center justify-center min-w-[60px]">
                <span className="text-[#004A97] font-bold text-lg">D</span>
              </div>
              {/* Discover */}
              <div className="bg-white rounded-md px-3 py-2 flex items-center justify-center min-w-[60px]">
                <span className="text-[#FF6600] font-bold text-xs">DISCOVER</span>
              </div>
              {/* JCB */}
              <div className="bg-white rounded-md px-3 py-2 flex items-center justify-center min-w-[60px]">
                <span className="text-[#0066CC] font-bold text-sm">JCB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
