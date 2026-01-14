import { useEffect, useState } from "react";
import { ShopifyProduct, fetchShopifyProducts } from "@/lib/shopify";
import { ShopifyProductCard } from "./ShopifyProductCard";
import { Loader2, Package } from "lucide-react";

interface ShopifyProductGridProps {
  limit?: number;
  query?: string;
}

export function ShopifyProductGrid({ limit = 50, query }: ShopifyProductGridProps) {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProducts() {
      setIsLoading(true);
      setError(null);
      try {
        const fetchedProducts = await fetchShopifyProducts(limit, query);
        setProducts(fetchedProducts);
      } catch (err) {
        setError("Failed to load products");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    loadProducts();
  }, [limit, query]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-8 h-8 animate-spin text-accent" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <p className="text-destructive">{error}</p>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-20 bg-secondary/20 rounded-xl">
        <Package className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
        <h3 className="font-heading text-xl font-bold mb-2">No Products Found</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Products will appear here once they are added to the Shopify store. 
          Ask me to create products for your store!
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ShopifyProductCard key={product.node.id} product={product} />
      ))}
    </div>
  );
}
