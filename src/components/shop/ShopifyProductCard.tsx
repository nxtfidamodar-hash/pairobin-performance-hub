import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

interface ShopifyProductCardProps {
  product: ShopifyProduct;
}

export function ShopifyProductCard({ product }: ShopifyProductCardProps) {
  const addItem = useCartStore(state => state.addItem);
  const { node } = product;
  
  const price = parseFloat(node.priceRange.minVariantPrice.amount);
  const currencyCode = node.priceRange.minVariantPrice.currencyCode;
  const image = node.images.edges[0]?.node;
  const firstVariant = node.variants.edges[0]?.node;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!firstVariant) {
      toast.error("Product not available");
      return;
    }

    addItem({
      product,
      variantId: firstVariant.id,
      variantTitle: firstVariant.title,
      price: firstVariant.price,
      quantity: 1,
      selectedOptions: firstVariant.selectedOptions || [],
    });

    toast.success(`${node.title} added to cart`, {
      position: "top-center",
    });
  };

  return (
    <div className="card-product group">
      {/* Image Container */}
      <Link to={`/product/${node.handle}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-secondary">
          {image ? (
            <img
              src={image.url}
              alt={image.altText || node.title}
              className="card-product-image w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-muted">
              <span className="text-muted-foreground">No image</span>
            </div>
          )}

          {/* Add to Cart Overlay */}
          <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <Button 
              variant="default" 
              className="w-full" 
              size="default"
              onClick={handleAddToCart}
            >
              <ShoppingBag className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-4 lg:p-6">
        {/* Name */}
        <Link to={`/product/${node.handle}`}>
          <h3 className="font-heading font-bold text-lg text-foreground mb-2 hover:text-accent transition-colors line-clamp-2">
            {node.title}
          </h3>
        </Link>

        {/* Description */}
        {node.description && (
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {node.description}
          </p>
        )}

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="font-heading font-bold text-xl text-foreground">
            {currencyCode} ${price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
