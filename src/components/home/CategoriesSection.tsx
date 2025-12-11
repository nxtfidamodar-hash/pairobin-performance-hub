import { CategoryCard } from "@/components/product";
import categoryRunning from "@/assets/category-running.jpg";
import categoryWalking from "@/assets/category-walking.jpg";
import categoryCycling from "@/assets/category-cycling.jpg";
import categoryKids from "@/assets/category-kids.jpg";

const categories = [
  {
    name: "Running",
    description: "High-performance running shoes engineered for speed, comfort, and endurance on any terrain.",
    image: categoryRunning,
    href: "/shop/running",
    productCount: 48,
  },
  {
    name: "Walking",
    description: "Premium walking shoes designed for all-day comfort and support during your daily activities.",
    image: categoryWalking,
    href: "/shop/walking",
    productCount: 36,
  },
  {
    name: "Cycling",
    description: "Professional cycling shoes with superior power transfer and aerodynamic performance.",
    image: categoryCycling,
    href: "/shop/cycling",
    productCount: 24,
  },
  {
    name: "Kids Active",
    description: "Colorful, durable, and comfortable footwear designed for active kids on the move.",
    image: categoryKids,
    href: "/shop/kids",
    productCount: 32,
  },
];

export function CategoriesSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Shop by Activity
          </p>
          <h2 className="section-title mb-4">
            Find Your Perfect Fit
          </h2>
          <p className="section-subtitle mx-auto">
            Whether you're chasing personal records or enjoying a family adventure, 
            we have the perfect footwear for every activity.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.name} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}
