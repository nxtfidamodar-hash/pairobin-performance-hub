import { Link } from "react-router-dom";
import { Star, ShoppingBag, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  badge?: "new" | "sale" | "bestseller";
  colors?: string[];
}

export function ProductCard({
  id,
  name,
  category,
  price,
  originalPrice,
  rating,
  reviewCount,
  image,
  badge,
  colors = [],
}: ProductCardProps) {
  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <div className="card-product">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={image}
          alt={name}
          className="card-product-image"
        />
        
        {/* Badges */}
        {badge && (
          <div className="absolute top-4 left-4">
            {badge === "new" && <span className="badge-new">New</span>}
            {badge === "sale" && <span className="badge-sale">-{discount}%</span>}
            {badge === "bestseller" && (
              <span className="inline-flex items-center px-3 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-full">
                Bestseller
              </span>
            )}
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
          <Button variant="default" className="w-full" size="default">
            <ShoppingBag className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 lg:p-6">
        {/* Category */}
        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
          {category}
        </p>

        {/* Name */}
        <Link to={`/product/${id}`}>
          <h3 className="font-heading font-bold text-lg text-foreground mb-2 hover:text-accent transition-colors line-clamp-1">
            {name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating)
                    ? "fill-accent text-accent"
                    : "fill-muted text-muted"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            ({reviewCount})
          </span>
        </div>

        {/* Colors */}
        {colors.length > 0 && (
          <div className="flex items-center gap-1.5 mb-3">
            {colors.slice(0, 4).map((color, i) => (
              <div
                key={i}
                className="w-4 h-4 rounded-full border border-border"
                style={{ backgroundColor: color }}
              />
            ))}
            {colors.length > 4 && (
              <span className="text-xs text-muted-foreground">
                +{colors.length - 4}
              </span>
            )}
          </div>
        )}

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="font-heading font-bold text-xl text-foreground">
            ${price.toFixed(2)}
          </span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
