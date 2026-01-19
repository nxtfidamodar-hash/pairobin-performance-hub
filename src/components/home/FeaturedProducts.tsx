import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Loader2, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShopifyProductCard } from "@/components/shop/ShopifyProductCard";
import { fetchShopifyProducts, ShopifyProduct } from "@/lib/shopify";

export function FeaturedProducts() {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      setIsLoading(true);
      try {
        const fetchedProducts = await fetchShopifyProducts(6);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Failed to load featured products:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadProducts();
  }, []);

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

        {/* Loading State */}
        {isLoading && (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-accent" />
          </div>
        )}

        {/* Empty State */}
        {!isLoading && products.length === 0 && (
          <div className="text-center py-20 bg-background/50 rounded-xl">
            <Package className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="font-heading text-xl font-bold mb-2">Coming Soon</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              New products are being added to our collection. Check back soon!
            </p>
          </div>
        )}

        {/* Products Grid */}
        {!isLoading && products.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {products.map((product) => (
              <ShopifyProductCard key={product.node.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
