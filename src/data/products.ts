// Product images from Pairobin catalog
import cyclingArmyGreen from "@/assets/products/cycling-army-green.jpg";
import cyclingBeigeGreen from "@/assets/products/cycling-beige-green.jpg";
import cyclingBeigePink from "@/assets/products/cycling-beige-pink.jpg";
import cyclingBlackGreen from "@/assets/products/cycling-black-green.jpg";
import cyclingGreen from "@/assets/products/cycling-green.jpg";
import cyclingPink from "@/assets/products/cycling-pink.jpg";
import rollerBlack from "@/assets/products/roller-black.jpg";
import rollerPink from "@/assets/products/roller-pink.jpg";
import rollerKids4Wheel from "@/assets/products/roller-kids-4wheel.jpg";
import rollerKidsPink from "@/assets/products/roller-kids-pink.jpg";
import rollerKids2Wheel from "@/assets/products/roller-kids-2wheel.jpg";

// Placeholder images using existing assets for additional products
import productRunning from "@/assets/product-running-1.jpg";
import productWalking from "@/assets/product-walking-1.jpg";
import productKids from "@/assets/product-kids-1.jpg";
import productOutdoor from "@/assets/product-outdoor-1.jpg";

export type ProductBadge = "bestseller" | "new" | "sale";

export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  badge?: ProductBadge;
  colors: string[];
  sizes: string[];
  description: string;
  features: string[];
  isNew?: boolean;
}

export const products: Product[] = [
  // CYCLING SHOES
  {
    id: "army-green-cycling-shoe",
    name: "Army-Green Cycling Shoe",
    category: "Cycling",
    price: 80.00,
    originalPrice: 89.00,
    rating: 4.8,
    reviewCount: 145,
    image: cyclingArmyGreen,
    badge: "bestseller",
    colors: ["#556B2F", "#FF6B35", "#000000"],
    sizes: ["5.5", "6.5", "7", "8", "8.5", "9.5", "10"],
    description: "Premium cycling shoe with recessed SPD cleats and engineered mesh upper for superior performance and comfort.",
    features: [
      "Rubber sole",
      "Recessed SPD cleats included",
      "Anti-odor technology",
      "Engineered mesh upper",
      "Velcro strap for secure fit",
      "Built-in nylon bracket for power transmission"
    ]
  },
  {
    id: "beige-green-cycling-shoe",
    name: "Beige-Green Cycling Shoes",
    category: "Cycling",
    price: 79.00,
    originalPrice: 89.00,
    rating: 4.7,
    reviewCount: 98,
    image: cyclingBeigeGreen,
    badge: "sale",
    colors: ["#F5F5DC", "#90EE90", "#FF6B35"],
    sizes: ["5.5", "6.5", "7", "8", "8.5", "9.5", "10"],
    description: "Stylish cycling shoe with breathable mesh design and recessed SPD cleats for versatile indoor/outdoor use.",
    features: [
      "Rubber sole",
      "Recessed SPD cleats included",
      "Breathable mesh upper",
      "Velcro secure closure",
      "Lightweight design"
    ]
  },
  {
    id: "beige-pink-cycling-shoe",
    name: "Beige-Pink Cycling Shoes",
    category: "Cycling",
    price: 79.00,
    originalPrice: 89.00,
    rating: 4.9,
    reviewCount: 156,
    image: cyclingBeigePink,
    badge: "new",
    colors: ["#F5F5DC", "#FF69B4", "#FFFFFF"],
    sizes: ["5.5", "6.5", "7", "8", "8.5", "9.5", "10"],
    description: "Elegant women's cycling shoe with performance features and stylish color combination.",
    features: [
      "Rubber sole",
      "Recessed SPD cleats included",
      "Engineered mesh for breathability",
      "Secure Velcro closure",
      "Perfect for indoor and outdoor cycling"
    ]
  },
  {
    id: "black-green-cycling-shoe",
    name: "Black-Green Cycling Shoes",
    category: "Cycling",
    price: 79.00,
    originalPrice: 89.00,
    rating: 4.6,
    reviewCount: 87,
    image: cyclingBlackGreen,
    colors: ["#000000", "#00FF00", "#333333"],
    sizes: ["5.5", "6.5", "7", "8", "8.5", "9.5", "10"],
    description: "Bold black and green cycling shoe built for performance and style.",
    features: [
      "Rubber sole",
      "Recessed SPD cleats included",
      "Anti-odor technology",
      "Secure fit system"
    ]
  },
  {
    id: "green-cycling-shoe",
    name: "Green Cycling Shoes",
    category: "Cycling",
    price: 79.00,
    originalPrice: 89.00,
    rating: 4.7,
    reviewCount: 112,
    image: cyclingGreen,
    colors: ["#228B22", "#000000", "#FFFFFF"],
    sizes: ["5.5", "6.5", "7", "8", "8.5", "9.5", "10"],
    description: "Vibrant green cycling shoe with professional-grade features for serious cyclists.",
    features: [
      "Rubber sole",
      "Recessed SPD cleats included",
      "Breathable mesh design",
      "Lightweight construction"
    ]
  },
  {
    id: "pink-cycling-shoe",
    name: "Pink Cycling Shoes",
    category: "Cycling",
    price: 79.00,
    originalPrice: 89.00,
    rating: 4.8,
    reviewCount: 134,
    image: cyclingPink,
    badge: "new",
    colors: ["#FF69B4", "#FFFFFF", "#FF1493"],
    sizes: ["5.5", "6.5", "7", "8", "8.5", "9.5", "10"],
    description: "Eye-catching pink cycling shoes designed for women who demand both style and performance.",
    features: [
      "Rubber sole",
      "Recessed SPD cleats included",
      "Premium mesh upper",
      "Velcro strap closure"
    ]
  },

  // ROLLER SHOES
  {
    id: "black-roller-shoes",
    name: "Black Roller Shoes",
    category: "Roller",
    price: 51.90,
    rating: 4.8,
    reviewCount: 245,
    image: rollerBlack,
    badge: "new",
    colors: ["#000000", "#00FF00", "#00FFFF"],
    sizes: ["12.5", "13.5", "1", "1.5", "2.5", "3", "3.5", "4.5", "5.5", "6", "7"],
    description: "LED light-up roller shoes with retractable wheels. The wheels can be stowed for walking mode.",
    features: [
      "Retractable wheel system",
      "LED lights with USB charging",
      "1-2 hours charging, 4-5 hours of flashing",
      "Convenient Velcro closure",
      "Helps develop balance and coordination"
    ]
  },
  {
    id: "pink-roller-shoes",
    name: "Pink Roller Shoes",
    category: "Roller",
    price: 51.90,
    rating: 4.9,
    reviewCount: 189,
    image: rollerPink,
    badge: "new",
    colors: ["#FF69B4", "#FFB6C1", "#FFFFFF"],
    sizes: ["12.5", "13.5", "1", "1.5", "2.5", "3", "3.5", "4.5", "5.5", "6", "7"],
    description: "Stylish pink LED roller shoes with hidden retractable wheels for kids.",
    features: [
      "Retractable wheel system",
      "LED lights with USB charging",
      "Breathable upper material",
      "Easy on/off Velcro",
      "Great gift for kids"
    ]
  },
  {
    id: "kids-roller-skate-4wheel-black",
    name: "Black Hidden-Wheel Roller Skate Shoes – 4-Wheel",
    category: "Kids",
    subcategory: "Roller",
    price: 39.90,
    rating: 4.8,
    reviewCount: 312,
    image: rollerKids4Wheel,
    badge: "new",
    colors: ["#000000", "#9370DB", "#FF69B4", "#FFD700", "#00FF00"],
    sizes: ["1", "1.5", "3", "3.5", "4", "4.5", "5.5", "6", "6.5"],
    description: "4-wheel hidden roller skate sneakers for kids. Walk or roll with trendy 2-in-1 design.",
    features: [
      "4-wheel hidden design",
      "2-in-1 walk or roll function",
      "Breathable upper",
      "Lightweight comfort",
      "Perfect gift for kids"
    ],
    isNew: true
  },
  {
    id: "kids-roller-skate-4wheel-pink",
    name: "Girls' Pink Hidden-Wheel Roller Skate Shoes – 4-Wheel",
    category: "Kids",
    subcategory: "Roller",
    price: 39.90,
    rating: 4.9,
    reviewCount: 287,
    image: rollerKidsPink,
    badge: "bestseller",
    colors: ["#FF69B4", "#000000", "#FFD700", "#00FF00"],
    sizes: ["1", "1.5", "3", "3.5", "4", "4.5", "5.5", "6", "6.5"],
    description: "Fun and colorful 4-wheel roller sneakers for girls. Hidden wheels for easy walking or skating.",
    features: [
      "4-wheel hidden design",
      "Smooth gliding wheels",
      "Breathable comfort",
      "Easy retract mechanism",
      "Trendy sneaker style"
    ]
  },
  {
    id: "kids-roller-skate-2wheel",
    name: "Black Hidden-Wheel Roller Skate Shoes – 2-Wheel",
    category: "Kids",
    subcategory: "Roller",
    price: 39.90,
    rating: 4.7,
    reviewCount: 156,
    image: rollerKids2Wheel,
    badge: "new",
    colors: ["#000000", "#FFD700", "#00FF00"],
    sizes: ["31", "32", "33", "34", "35", "36", "37", "38", "39", "40"],
    description: "2-wheel hidden roller sneakers for kids. Perfect balance of skating fun and everyday wear.",
    features: [
      "2-wheel hidden design",
      "Walk or roll function",
      "Breathable mesh upper",
      "Lightweight EVA sole",
      "Great for beginners"
    ],
    isNew: true
  },

  // RUNNING SHOES
  {
    id: "velocity-pro-x",
    name: "Velocity Pro X",
    category: "Running",
    price: 159.99,
    originalPrice: 189.99,
    rating: 4.8,
    reviewCount: 445,
    image: productRunning,
    badge: "bestseller",
    colors: ["#FF6B35", "#1a1a2e", "#ffffff"],
    sizes: ["6", "7", "8", "9", "10", "11", "12", "13"],
    description: "High-performance running shoe engineered for speed and endurance. Features advanced cushioning technology.",
    features: [
      "Responsive foam midsole",
      "Breathable mesh upper",
      "Carbon fiber plate",
      "Lightweight construction",
      "High-traction rubber outsole"
    ]
  },
  {
    id: "marathon-elite-2",
    name: "Marathon Elite 2.0",
    category: "Running",
    price: 189.99,
    rating: 4.9,
    reviewCount: 521,
    image: productRunning,
    badge: "bestseller",
    colors: ["#FF6B35", "#000000"],
    sizes: ["6", "7", "8", "9", "10", "11", "12", "13"],
    description: "Elite-level marathon shoe for serious runners. Maximum cushioning meets race-day performance.",
    features: [
      "Ultra-responsive cushioning",
      "Carbon fiber energy plate",
      "Seamless engineered knit",
      "Strategic flex zones",
      "Reflective details"
    ]
  },
  {
    id: "sprint-pro-3",
    name: "Sprint Pro 3.0",
    category: "Running",
    price: 139.99,
    originalPrice: 169.99,
    rating: 4.7,
    reviewCount: 312,
    image: productRunning,
    badge: "sale",
    colors: ["#1e3a5f", "#FF6B35", "#ffffff"],
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    description: "Speed-focused running shoe for training and racing. Lightweight and responsive.",
    features: [
      "Lightweight mesh",
      "Speed lacing system",
      "Propulsion plate",
      "Durable rubber outsole"
    ]
  },

  // WALKING SHOES
  {
    id: "comfort-stride-elite",
    name: "Comfort Stride Elite",
    category: "Walking",
    price: 129.99,
    rating: 4.9,
    reviewCount: 389,
    image: productWalking,
    badge: "new",
    colors: ["#1e3a5f", "#333333", "#f5f5f5"],
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    description: "Premium walking shoe with ultimate comfort technology. Perfect for all-day wear.",
    features: [
      "Memory foam insole",
      "Arch support technology",
      "Breathable mesh lining",
      "Shock-absorbing midsole",
      "Slip-resistant outsole"
    ]
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
    badge: "sale",
    colors: ["#1e3a5f", "#ffffff"],
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    description: "Everyday walking shoe designed for comfort and durability.",
    features: [
      "Cushioned footbed",
      "Breathable upper",
      "Flexible sole",
      "All-day comfort"
    ]
  },
  {
    id: "urban-walk-pro",
    name: "Urban Walk Pro",
    category: "Walking",
    price: 119.99,
    rating: 4.8,
    reviewCount: 167,
    image: productWalking,
    colors: ["#333333", "#1e3a5f", "#8B4513"],
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    description: "Stylish urban walking shoe that combines comfort with modern aesthetics.",
    features: [
      "Premium leather upper",
      "Gel cushioning",
      "Anatomical footbed",
      "Durable construction"
    ]
  },

  // KIDS SHOES
  {
    id: "kids-active-runner",
    name: "Kids Active Runner",
    category: "Kids",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.9,
    reviewCount: 412,
    image: productKids,
    badge: "sale",
    colors: ["#ff6b6b", "#4ecdc4", "#ffe66d"],
    sizes: ["1", "2", "3", "4", "5", "6", "7"],
    description: "Colorful and durable running shoes for active kids. Designed for play and sport.",
    features: [
      "Easy-on velcro strap",
      "Breathable mesh",
      "Cushioned midsole",
      "Durable rubber outsole",
      "Machine washable"
    ]
  },
  {
    id: "kids-play-trainer",
    name: "Kids Play Trainer",
    category: "Kids",
    price: 69.99,
    rating: 4.8,
    reviewCount: 278,
    image: productKids,
    badge: "new",
    colors: ["#FF69B4", "#00CED1", "#FFD700"],
    sizes: ["1", "2", "3", "4", "5", "6", "7"],
    description: "Versatile training shoe for kids who love to play. Comfortable and supportive.",
    features: [
      "Velcro closure",
      "Lightweight design",
      "Flexible sole",
      "Reinforced toe cap"
    ]
  },

  // OUTDOOR SHOES
  {
    id: "trail-blazer-xt",
    name: "Trail Blazer XT",
    category: "Outdoor",
    price: 179.99,
    rating: 4.6,
    reviewCount: 198,
    image: productOutdoor,
    colors: ["#8b4513", "#2f4f4f", "#333333"],
    sizes: ["7", "8", "9", "10", "11", "12", "13"],
    description: "Rugged trail shoe built for serious outdoor adventures. Superior grip and durability.",
    features: [
      "Waterproof membrane",
      "Aggressive tread pattern",
      "Reinforced toe cap",
      "Ankle support system",
      "Vibram outsole"
    ]
  },
  {
    id: "mountain-grip-pro",
    name: "Mountain Grip Pro",
    category: "Outdoor",
    price: 199.99,
    originalPrice: 229.99,
    rating: 4.8,
    reviewCount: 156,
    image: productOutdoor,
    badge: "sale",
    colors: ["#2f4f4f", "#8b4513", "#000000"],
    sizes: ["7", "8", "9", "10", "11", "12", "13"],
    description: "Premium hiking shoe for mountain terrain. Maximum protection and comfort.",
    features: [
      "Gore-Tex lining",
      "Rock plate protection",
      "Cushioned midsole",
      "Premium leather upper"
    ]
  },
  {
    id: "trail-explorer",
    name: "Trail Explorer",
    category: "Outdoor",
    price: 149.99,
    rating: 4.7,
    reviewCount: 134,
    image: productOutdoor,
    badge: "new",
    colors: ["#228B22", "#8b4513", "#333333"],
    sizes: ["7", "8", "9", "10", "11", "12"],
    description: "Versatile trail shoe for hiking and light outdoor activities.",
    features: [
      "Quick-dry upper",
      "Multi-terrain traction",
      "Breathable lining",
      "Lightweight design"
    ]
  }
];

// Category configuration
export const categories = [
  { name: "All", slug: "all", count: products.length },
  { name: "Running", slug: "running", count: products.filter(p => p.category === "Running").length },
  { name: "Walking", slug: "walking", count: products.filter(p => p.category === "Walking").length },
  { name: "Cycling", slug: "cycling", count: products.filter(p => p.category === "Cycling").length },
  { name: "Kids", slug: "kids", count: products.filter(p => p.category === "Kids").length },
  { name: "Outdoor", slug: "outdoor", count: products.filter(p => p.category === "Outdoor").length },
  { name: "Roller", slug: "roller", count: products.filter(p => p.category === "Roller").length },
];

// Get featured products
export const getFeaturedProducts = () => {
  return products.filter(p => p.badge === "bestseller" || p.badge === "new").slice(0, 6);
};

// Get products by category
export const getProductsByCategory = (category: string) => {
  if (category === "all") return products;
  return products.filter(p => p.category.toLowerCase() === category.toLowerCase());
};

// Get product by ID
export const getProductById = (id: string) => {
  return products.find(p => p.id === id);
};

// Get related products
export const getRelatedProducts = (productId: string, limit = 4) => {
  const product = getProductById(productId);
  if (!product) return [];
  return products
    .filter(p => p.category === product.category && p.id !== productId)
    .slice(0, limit);
};
