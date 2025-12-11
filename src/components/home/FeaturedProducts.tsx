import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product";
import productRunning from "@/assets/product-running-1.jpg";
import productWalking from "@/assets/product-walking-1.jpg";
import productCycling from "@/assets/product-cycling-1.jpg";
import productKids from "@/assets/product-kids-1.jpg";
import productOutdoor from "@/assets/product-outdoor-1.jpg";
import productRoller from "@/assets/product-roller-1.jpg";

const featuredProducts = [
  {
    id: "velocity-pro-x",
    name: "Velocity Pro X",
    category: "Running",
    price: 159.99,
    originalPrice: 189.99,
    rating: 4.8,
    reviewCount: 245,
    image: productRunning,
    badge: "bestseller" as const,
    colors: ["#FF6B35", "#1a1a2e", "#ffffff"],
  },
  {
    id: "comfort-stride-elite",
    name: "Comfort Stride Elite",
    category: "Walking",
    price: 129.99,
    rating: 4.9,
    reviewCount: 189,
    image: productWalking,
    badge: "new" as const,
    colors: ["#1e3a5f", "#333333", "#f5f5f5"],
  },
  {
    id: "aero-cycle-pro",
    name: "Aero Cycle Pro",
    category: "Cycling",
    price: 199.99,
    rating: 4.7,
    reviewCount: 132,
    image: productCycling,
    colors: ["#000000", "#FF6B35"],
  },
  {
    id: "kids-active-runner",
    name: "Kids Active Runner",
    category: "Kids",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.9,
    reviewCount: 312,
    image: productKids,
    badge: "sale" as const,
    colors: ["#ff6b6b", "#4ecdc4", "#ffe66d"],
  },
  {
    id: "trail-blazer-xt",
    name: "Trail Blazer XT",
    category: "Outdoor",
    price: 179.99,
    rating: 4.6,
    reviewCount: 98,
    image: productOutdoor,
    colors: ["#8b4513", "#2f4f4f", "#333333"],
  },
  {
    id: "roller-dash-pro",
    name: "Roller Dash Pro",
    category: "Roller",
    price: 89.99,
    rating: 4.8,
    reviewCount: 156,
    image: productRoller,
    badge: "new" as const,
    colors: ["#000000", "#ff0066", "#00ff00"],
  },
];

export function FeaturedProducts() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Featured Products
            </p>
            <h2 className="section-title">
              Best Sellers
            </h2>
          </div>
          <Button variant="outline" asChild>
            <Link to="/shop">
              View All Products
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
