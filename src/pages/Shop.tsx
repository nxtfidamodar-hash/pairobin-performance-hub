import { Layout } from "@/components/layout";
import { useState, useEffect } from "react";
import { Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShopifyProductCard } from "@/components/shop/ShopifyProductCard";
import { ShopifyProduct, fetchShopifyProducts } from "@/lib/shopify";
import { Loader2, Package } from "lucide-react";

// Categories with Shopify product type filters
const categories = [
  { name: "All", slug: "all", count: 31 },
  { name: "Running", slug: "running", count: 3 },
  { name: "Walking", slug: "walking", count: 5 },
  { name: "Cycling", slug: "cycling", count: 7 },
  { name: "Kids", slug: "kids", count: 5 },
  { name: "Outdoor", slug: "outdoor", count: 4 },
  { name: "Roller", slug: "roller", count: 2 },
  { name: "Tennis", slug: "tennis", count: 3 },
  { name: "Pickleball", slug: "pickleball", count: 1 },
  { name: "Cheerleading", slug: "cheerleading", count: 1 },
];

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortOption, setSortOption] = useState("featured");

  useEffect(() => {
    async function loadProducts() {
      setIsLoading(true);
      try {
        const fetchedProducts = await fetchShopifyProducts(50);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Failed to load products:", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadProducts();
  }, []);

  // Filter products by category
  const filteredProducts = activeCategory === "all"
    ? products
    : products.filter(p => {
        const title = p.node.title.toLowerCase();
        const category = activeCategory.toLowerCase();
        
        // Match by title keywords for better filtering
        if (category === "cycling") return title.includes("cycling");
        if (category === "walking") return title.includes("walking");
        if (category === "running") return title.includes("running");
        if (category === "kids") return title.includes("kids");
        if (category === "outdoor" || category === "hiking") return title.includes("hiking") || title.includes("outdoor");
        if (category === "roller") return title.includes("roller") || title.includes("skate");
        if (category === "tennis") return title.includes("tennis");
        if (category === "pickleball") return title.includes("pickleball");
        if (category === "cheerleading") return title.includes("cheerleading");
        return true;
      });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const priceA = parseFloat(a.node.priceRange.minVariantPrice.amount);
    const priceB = parseFloat(b.node.priceRange.minVariantPrice.amount);
    
    switch (sortOption) {
      case "price-low":
        return priceA - priceB;
      case "price-high":
        return priceB - priceA;
      case "newest":
        return 0; // Keep original order (newest from API)
      default:
        return 0; // Featured - keep original order
    }
  });

  // Update category counts based on actual products
  const categoriesWithCounts = categories.map(cat => {
    if (cat.slug === "all") {
      return { ...cat, count: products.length };
    }
    const count = products.filter(p => {
      const title = p.node.title.toLowerCase();
      if (cat.slug === "cycling") return title.includes("cycling");
      if (cat.slug === "walking") return title.includes("walking");
      if (cat.slug === "running") return title.includes("running");
      if (cat.slug === "kids") return title.includes("kids");
      if (cat.slug === "outdoor") return title.includes("hiking") || title.includes("outdoor");
      if (cat.slug === "roller") return title.includes("roller") || title.includes("skate");
      if (cat.slug === "tennis") return title.includes("tennis");
      if (cat.slug === "pickleball") return title.includes("pickleball");
      if (cat.slug === "cheerleading") return title.includes("cheerleading");
      return false;
    }).length;
    return { ...cat, count };
  });

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
                    {categoriesWithCounts.filter(c => c.count > 0 || c.slug === "all").map((category) => (
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
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-border">
                <p className="text-muted-foreground">
                  Showing <span className="font-semibold text-foreground">{sortedProducts.length}</span> products
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
                  <select 
                    className="px-4 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                  >
                    <option value="featured">Sort: Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="newest">Newest</option>
                  </select>
                </div>
              </div>

              {/* Mobile Category Pills */}
              <div className="flex gap-2 overflow-x-auto pb-4 mb-6 lg:hidden scrollbar-hide">
                {categoriesWithCounts.filter(c => c.count > 0 || c.slug === "all").map((category) => (
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
              {isLoading ? (
                <div className="flex items-center justify-center py-20">
                  <Loader2 className="w-8 h-8 animate-spin text-accent" />
                </div>
              ) : sortedProducts.length === 0 ? (
                <div className="text-center py-20 bg-secondary/20 rounded-xl">
                  <Package className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                  <h3 className="font-heading text-xl font-bold mb-2">No Products Found</h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    {activeCategory !== "all" 
                      ? "No products in this category. Try selecting a different category."
                      : "Products will appear here once they are added to the store."}
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {sortedProducts.map((product) => (
                    <ShopifyProductCard key={product.node.id} product={product} />
                  ))}
                </div>
              )}
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
            {/* Mobile filter content */}
            <div className="space-y-8">
              <div>
                <h3 className="font-heading font-bold text-lg mb-4">Categories</h3>
                <div className="space-y-2">
                  {categoriesWithCounts.filter(c => c.count > 0 || c.slug === "all").map((category) => (
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
