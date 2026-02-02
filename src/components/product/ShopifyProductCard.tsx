import { Link } from "react-router-dom";
import { ShoppingBag, Heart, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

interface ShopifyProductCardProps {
  product: ShopifyProduct;
}

export function ShopifyProductCard({ product }: ShopifyProductCardProps) {
  const { node } = product;
  const addItem = useCartStore((state) => state.addItem);
  const isLoading = useCartStore((state) => state.isLoading);

  const price = parseFloat(node.priceRange.minVariantPrice.amount);
  const currency = node.priceRange.minVariantPrice.currencyCode;
  const image = node.images.edges[0]?.node;
  const firstVariant = node.variants.edges[0]?.node;

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!firstVariant) {
      toast.error("This product is not available");
      return;
    }

    await addItem({
      product,
      variantId: firstVariant.id,
      variantTitle: firstVariant.title,
      price: firstVariant.price,
      quantity: 1,
      selectedOptions: firstVariant.selectedOptions || [],
    });

    toast.success("Added to cart!", {
      description: node.title,
    });
  };

  return (
    <div className="card-product">
      {/* Image Container */}
      <Link to={`/product/${node.handle}`}>
        <div className="relative aspect-square overflow-hidden bg-secondary">
          {image ? (
            <img
              src={image.url}
              alt={image.altText || node.title}
              className="card-product-image"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-secondary">
              <span className="text-muted-foreground text-sm">No image</span>
            </div>
          )}

          {/* Quick Actions */}
          <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="w-10 h-10 rounded-full bg-background shadow-md flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
              <Heart className="w-5 h-5" />
            </button>
          </div>

          {/* Add to Cart Overlay */}
          <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <Button 
              variant="default" 
              className="w-full" 
              size="default"
              onClick={handleAddToCart}
              disabled={isLoading || !firstVariant?.availableForSale}
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Add to Cart
                </>
              )}
            </Button>
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-4 lg:p-6">
        {/* Category from product type */}
        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
          Pairobin
        </p>

        {/* Name */}
        <Link to={`/product/${node.handle}`}>
          <h3 className="font-heading font-bold text-lg text-foreground mb-2 hover:text-accent transition-colors line-clamp-2">
            {node.title}
          </h3>
        </Link>

        {/* Variants indicator */}
        {node.variants.edges.length > 1 && (
          <p className="text-xs text-muted-foreground mb-3">
            {node.variants.edges.length} sizes available
          </p>
        )}

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="font-heading font-bold text-xl text-foreground">
            ${price.toFixed(2)}
          </span>
          <span className="text-sm text-muted-foreground">
            {currency}
          </span>
        </div>
      </div>
    </div>
  );
}
