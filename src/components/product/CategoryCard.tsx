import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  name: string;
  description: string;
  image: string;
  href: string;
  productCount?: number;
}

export function CategoryCard({
  name,
  description,
  image,
  href,
  productCount,
}: CategoryCardProps) {
  return (
    <Link
      to={href}
      className="group relative aspect-[4/5] overflow-hidden rounded-2xl"
    >
      {/* Background Image */}
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
        <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
          {productCount && (
            <p className="text-primary-foreground/70 text-sm uppercase tracking-wider mb-2">
              {productCount} Products
            </p>
          )}
          <h3 className="font-heading font-bold text-2xl lg:text-3xl text-primary-foreground mb-2">
            {name}
          </h3>
          <p className="text-primary-foreground/80 text-sm mb-4 line-clamp-2">
            {description}
          </p>
          <div className="flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider">
            <span>Shop Now</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
          </div>
        </div>
      </div>
    </Link>
  );
}
