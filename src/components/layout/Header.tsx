import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartDrawer } from "@/components/shop/CartDrawer";
import pairobinLogo from "@/assets/pairobin-logo.png";

const navigation = [
  { name: "Shop", href: "/shop" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  { name: "Shipping", href: "/shipping" },
  { name: "Returns", href: "/returns" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      {/* Top announcement bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container-wide text-center text-xs font-medium tracking-wide">
          FREE SHIPPING TO THE UNITED STATES ON ALL ORDERS
        </div>
      </div>

      <div className="container-wide">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={pairobinLogo} 
              alt="Pairobin" 
              className="h-8 lg:h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="nav-link link-underline"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <CartDrawer />

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-secondary transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-slide-up">
          <nav className="container-wide py-6 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block text-lg font-medium text-foreground hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
