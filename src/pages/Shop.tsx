import { Layout } from "@/components/layout";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Filter, X, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShopifyProductCard } from "@/components/product/ShopifyProductCard";
import { fetchProducts, ShopifyProduct } from "@/lib/shopify";

const categories = [
  { name: "All", slug: "all" },
  { name: "Cycling", slug: "cycling" },
  { name: "Walking", slug: "walking" },
  { name: "Tennis", slug: "tennis" },
  { name: "Roller Skates", slug: "roller" },
  { name: "Kids", slug: "kids" },
  { name: "Hiking", slug: "hiking" },
  { name: "Pickleball", slug: "pickleball" },
  { name: "Cheerleading", slug: "cheerleading" },
];

const Shop = () => {
  const { category: urlCategory } = useParams();
  const [activeCategory, setActiveCategory] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Sync URL category param with state
  useEffect(() => {
    if (urlCategory) {
      const match = categories.find(c => c.slug === urlCategory);
      if (match) setActiveCategory(match.slug);
    }
  }, [urlCategory]);

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      try {
        // Build query based on category
        let query: string | undefined;
        if (activeCategory !== "all") {
          // Search in product type or title
          query = `product_type:*${activeCategory}* OR title:*${activeCategory}*`;
        }
        const fetchedProducts = await fetchProducts(50, query);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, [activeCategory]);

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
                  {isLoading ? (
                    "Loading products..."
                  ) : (
                    <>
                      Showing <span className="font-semibold text-foreground">{products.length}</span> products
                    </>
                  )}
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
              {isLoading ? (
                <div className="flex items-center justify-center py-20">
                  <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
                </div>
              ) : products.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-lg text-muted-foreground">No products found</p>
                  <p className="text-sm text-muted-foreground mt-2">Try a different category</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {products.map((product) => (
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
