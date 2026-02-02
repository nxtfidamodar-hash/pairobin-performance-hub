import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartDrawer } from "@/components/cart/CartDrawer";

const navigation = [
  { name: "Shop", href: "/shop" },
  { name: "Running", href: "/shop/running" },
  { name: "Walking", href: "/shop/walking" },
  { name: "Cycling", href: "/shop/cycling" },
  { name: "Kids", href: "/shop/kids" },
  { name: "B2B", href: "/b2b" },
  { name: "About", href: "/about" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      {/* Top announcement bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container-wide text-center text-xs font-medium tracking-wide">
          FREE SHIPPING ON ORDERS OVER $99 | GLOBAL DELIVERY AVAILABLE
        </div>
      </div>

      <div className="container-wide">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="font-heading font-black text-2xl lg:text-3xl text-primary tracking-tight">
              PAIROBIN
            </span>
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
            <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-secondary transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-secondary transition-colors">
              <User className="w-5 h-5" />
            </button>
            
            {/* Cart Drawer */}
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
            <div className="pt-4 border-t border-border flex gap-4">
              <Button variant="outline" size="sm" className="flex-1">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                <User className="w-4 h-4 mr-2" />
                Account
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
