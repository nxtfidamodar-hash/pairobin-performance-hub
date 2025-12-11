import { Layout } from "@/components/layout";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Filter, Grid3X3, LayoutList, ChevronDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product";
import productRunning from "@/assets/product-running-1.jpg";
import productWalking from "@/assets/product-walking-1.jpg";
import productCycling from "@/assets/product-cycling-1.jpg";
import productKids from "@/assets/product-kids-1.jpg";
import productOutdoor from "@/assets/product-outdoor-1.jpg";
import productRoller from "@/assets/product-roller-1.jpg";

const categories = [
  { name: "All", slug: "all", count: 120 },
  { name: "Running", slug: "running", count: 48 },
  { name: "Walking", slug: "walking", count: 36 },
  { name: "Cycling", slug: "cycling", count: 24 },
  { name: "Kids", slug: "kids", count: 32 },
  { name: "Outdoor", slug: "outdoor", count: 18 },
  { name: "Roller", slug: "roller", count: 12 },
];

const products = [
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
  {
    id: "marathon-elite-2",
    name: "Marathon Elite 2.0",
    category: "Running",
    price: 189.99,
    rating: 4.9,
    reviewCount: 421,
    image: productRunning,
    badge: "bestseller" as const,
    colors: ["#FF6B35", "#000000"],
  },
  {
    id: "daily-walker-comfort",
    name: "Daily Walker Comfort",
    category: "Walking",
    price: 99.99,
    originalPrice: 119.99,
    rating: 4.7,
    reviewCount: 234,
    image: productWalking,
    badge: "sale" as const,
    colors: ["#1e3a5f", "#ffffff"],
  },
  {
    id: "speed-cycle-x",
    name: "Speed Cycle X",
    category: "Cycling",
    price: 229.99,
    rating: 4.8,
    reviewCount: 89,
    image: productCycling,
    colors: ["#FF6B35", "#000000"],
  },
];

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(p => p.category.toLowerCase() === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="max-w-2xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Shop All
            </p>
            <h1 className="font-heading font-black text-5xl md:text-6xl leading-tight mb-4">
              Performance Footwear
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Discover our complete collection of athletic shoes designed for every activity.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters - Desktop */}
            <aside className="hidden lg:block w-64 shrink-0">
              <div className="sticky top-32 space-y-8">
                {/* Categories */}
                <div>
                  <h3 className="font-heading font-bold text-lg mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.slug}
                        onClick={() => setActiveCategory(category.slug)}
                        className={`flex items-center justify-between w-full px-4 py-2 rounded-lg text-sm transition-colors ${
                          activeCategory === category.slug
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-secondary"
                        }`}
                      >
                        <span>{category.name}</span>
                        <span className="text-xs opacity-60">({category.count})</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="font-heading font-bold text-lg mb-4">Price Range</h3>
                  <div className="space-y-2">
                    {["Under $100", "$100 - $150", "$150 - $200", "Over $200"].map((range) => (
                      <label key={range} className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 rounded border-border text-accent focus:ring-accent" />
                        <span className="text-sm">{range}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Gender */}
                <div>
                  <h3 className="font-heading font-bold text-lg mb-4">Gender</h3>
                  <div className="space-y-2">
                    {["Men", "Women", "Unisex", "Kids"].map((gender) => (
                      <label key={gender} className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 rounded border-border text-accent focus:ring-accent" />
                        <span className="text-sm">{gender}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-border">
                <p className="text-muted-foreground">
                  Showing <span className="font-semibold text-foreground">{filteredProducts.length}</span> products
                </p>
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="lg:hidden"
                    onClick={() => setShowFilters(true)}
                  >
                    <Filter className="w-4 h-4 mr-2" />
                    Filters
                  </Button>
                  <select className="px-4 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent">
                    <option>Sort: Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest</option>
                    <option>Best Selling</option>
                  </select>
                </div>
              </div>

              {/* Mobile Category Pills */}
              <div className="flex gap-2 overflow-x-auto pb-4 mb-6 lg:hidden scrollbar-hide">
                {categories.map((category) => (
                  <button
                    key={category.slug}
                    onClick={() => setActiveCategory(category.slug)}
                    className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeCategory === category.slug
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary hover:bg-secondary/80"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>

              {/* Load More */}
              <div className="mt-12 text-center">
                <Button variant="outline" size="lg">
                  Load More Products
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Filters Modal */}
      {showFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-primary/50 backdrop-blur-sm" onClick={() => setShowFilters(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-80 max-w-full bg-background p-6 overflow-y-auto animate-slide-in-right">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-heading font-bold text-xl">Filters</h2>
              <button onClick={() => setShowFilters(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            {/* Mobile filter content - same as sidebar */}
            <div className="space-y-8">
              <div>
                <h3 className="font-heading font-bold text-lg mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.slug}
                      onClick={() => {
                        setActiveCategory(category.slug);
                        setShowFilters(false);
                      }}
                      className={`flex items-center justify-between w-full px-4 py-2 rounded-lg text-sm transition-colors ${
                        activeCategory === category.slug
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-secondary"
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className="text-xs opacity-60">({category.count})</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Shop;
