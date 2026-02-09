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

import productRunning from "@/assets/product-running-1.jpg";
import productWalking from "@/assets/product-walking-1.jpg";
import productKids from "@/assets/product-kids-1.jpg";
import productOutdoor from "@/assets/product-outdoor-1.jpg";

import cheerleadingBlack from "@/assets/products/cheerleading-black.jpg";
import tennisWhite from "@/assets/products/tennis-white.png";
import tennisPerformance from "@/assets/products/tennis-performance.png";
import walkingCushioned from "@/assets/products/walking-cushioned.jpg";
import hikingAqua from "@/assets/products/hiking-aqua.jpg";
import pickleballCourt from "@/assets/products/pickleball-court.jpg";
import cyclingIndoorPro from "@/assets/products/cycling-indoor-pro.jpg";
import tennisLateral from "@/assets/products/tennis-lateral.png";
import walkingSock from "@/assets/products/walking-sock.jpg";

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
    name: "Pairobin SPD Cycling Shoes – Army Green, Mesh Upper, Recessed Cleats",
    category: "Cycling",
    price: 80.00,
    originalPrice: 89.00,
    rating: 4.8,
    reviewCount: 145,
    image: cyclingArmyGreen,
    badge: "bestseller",
    colors: ["#556B2F", "#FF6B35", "#000000"],
    sizes: ["5.5", "6.5", "7", "8", "8.5", "9.5", "10"],
    description: "Pairobin army green cycling shoes with recessed SPD cleats and engineered mesh upper. Features a durable rubber sole, built-in nylon bracket for efficient power transfer, anti-odor lining, and a secure Velcro strap. Suitable for indoor spinning and outdoor road cycling. Available in men's and women's sizes 5.5–10.",
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
    name: "Pairobin SPD Cycling Shoes – Beige Green, Breathable Mesh, Unisex",
    category: "Cycling",
    price: 79.00,
    originalPrice: 89.00,
    rating: 4.7,
    reviewCount: 98,
    image: cyclingBeigeGreen,
    badge: "sale",
    colors: ["#F5F5DC", "#90EE90", "#FF6B35"],
    sizes: ["5.5", "6.5", "7", "8", "8.5", "9.5", "10"],
    description: "Pairobin beige green cycling shoes featuring breathable mesh upper and recessed SPD cleats. Lightweight rubber sole with Velcro closure for a secure, adjustable fit. Designed for both indoor cycling classes and outdoor rides. Unisex sizing from 5.5 to 10.",
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
    name: "Pairobin Women's SPD Cycling Shoes – Beige Pink, Mesh Upper",
    category: "Cycling",
    price: 79.00,
    originalPrice: 89.00,
    rating: 4.9,
    reviewCount: 156,
    image: cyclingBeigePink,
    badge: "new",
    colors: ["#F5F5DC", "#FF69B4", "#FFFFFF"],
    sizes: ["5.5", "6.5", "7", "8", "8.5", "9.5", "10"],
    description: "Pairobin women's beige pink cycling shoes with recessed SPD cleats and engineered mesh for breathability. Rubber sole and secure Velcro closure provide stability during indoor and outdoor cycling sessions. Sizes 5.5–10.",
    features: [
      "Rubber sole",
      "Recessed SPD cleats included",
      "Engineered mesh for breathability",
      "Secure Velcro closure",
      "Suitable for indoor and outdoor cycling"
    ]
  },
  {
    id: "black-green-cycling-shoe",
    name: "Pairobin SPD Cycling Shoes – Black Green, Anti-Odor, Rubber Sole",
    category: "Cycling",
    price: 79.00,
    originalPrice: 89.00,
    rating: 4.6,
    reviewCount: 87,
    image: cyclingBlackGreen,
    colors: ["#000000", "#00FF00", "#333333"],
    sizes: ["5.5", "6.5", "7", "8", "8.5", "9.5", "10"],
    description: "Pairobin black and green cycling shoes with recessed SPD cleats, anti-odor lining, and durable rubber sole. Secure fit system keeps feet stable during high-intensity rides. Compatible with standard SPD pedals. Unisex sizes 5.5–10.",
    features: [
      "Rubber sole",
      "Recessed SPD cleats included",
      "Anti-odor technology",
      "Secure fit system"
    ]
  },
  {
    id: "green-cycling-shoe",
    name: "Pairobin SPD Cycling Shoes – Green, Lightweight Mesh, Unisex",
    category: "Cycling",
    price: 79.00,
    originalPrice: 89.00,
    rating: 4.7,
    reviewCount: 112,
    image: cyclingGreen,
    colors: ["#228B22", "#000000", "#FFFFFF"],
    sizes: ["5.5", "6.5", "7", "8", "8.5", "9.5", "10"],
    description: "Pairobin green cycling shoes featuring breathable mesh upper and recessed SPD cleats. Lightweight construction with rubber sole for reliable grip. Ideal for road cycling and spin classes. Available in unisex sizes 5.5–10.",
    features: [
      "Rubber sole",
      "Recessed SPD cleats included",
      "Breathable mesh design",
      "Lightweight construction"
    ]
  },
  {
    id: "pink-cycling-shoe",
    name: "Pairobin Women's SPD Cycling Shoes – Pink, Premium Mesh Upper",
    category: "Cycling",
    price: 79.00,
    originalPrice: 89.00,
    rating: 4.8,
    reviewCount: 134,
    image: cyclingPink,
    badge: "new",
    colors: ["#FF69B4", "#FFFFFF", "#FF1493"],
    sizes: ["5.5", "6.5", "7", "8", "8.5", "9.5", "10"],
    description: "Pairobin women's pink cycling shoes with premium mesh upper and recessed SPD cleats. Velcro strap closure ensures a snug, adjustable fit. Rubber sole provides traction on and off the bike. Women's sizes 5.5–10.",
    features: [
      "Rubber sole",
      "Recessed SPD cleats included",
      "Premium mesh upper",
      "Velcro strap closure"
    ]
  },
  {
    id: "indoor-cycling-pro",
    name: "Pairobin Professional Indoor Cycling Shoes – Delta/SPD Compatible, Carbon-Reinforced Sole",
    category: "Cycling",
    price: 69.00,
    rating: 4.8,
    reviewCount: 203,
    image: cyclingIndoorPro,
    badge: "new",
    colors: ["#000000", "#FFFFFF", "#FF6B35"],
    sizes: ["5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5"],
    description: "Pairobin professional indoor cycling shoes compatible with both Delta and SPD cleat systems. Carbon-reinforced rigid sole maximizes power transfer during spinning sessions. Breathable mesh panels and ratchet closure for a secure, ventilated fit. Unisex sizes 5–10.5.",
    features: [
      "Delta/SPD compatible cleats",
      "Rigid carbon-reinforced sole",
      "Maximum power transfer",
      "Breathable mesh panels",
      "Secure ratchet closure",
      "OEM/ODM customization available"
    ]
  },

  // ROLLER SHOES
  {
    id: "black-roller-shoes",
    name: "Pairobin Kids LED Roller Shoes – Black, Retractable Wheels, USB Rechargeable",
    category: "Roller",
    price: 51.90,
    rating: 4.8,
    reviewCount: 245,
    image: rollerBlack,
    badge: "new",
    colors: ["#000000", "#00FF00", "#00FFFF"],
    sizes: ["12.5", "13.5", "1", "1.5", "2.5", "3", "3.5", "4.5", "5.5", "6", "7"],
    description: "Pairobin kids' black LED roller shoes with retractable single wheel and USB-rechargeable lights. Wheels stow flush for normal walking mode. Velcro closure for easy on/off. 1–2 hour charge provides 4–5 hours of LED flashing. Kids' sizes 12.5–7.",
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
    name: "Pairobin Kids LED Roller Shoes – Pink, Retractable Wheels, USB Rechargeable",
    category: "Roller",
    price: 51.90,
    rating: 4.9,
    reviewCount: 189,
    image: rollerPink,
    badge: "new",
    colors: ["#FF69B4", "#FFB6C1", "#FFFFFF"],
    sizes: ["12.5", "13.5", "1", "1.5", "2.5", "3", "3.5", "4.5", "5.5", "6", "7"],
    description: "Pairobin kids' pink LED roller shoes with hidden retractable wheel and USB-rechargeable lights. Breathable upper keeps feet cool during active play. Easy Velcro closure for independent wear. Kids' sizes 12.5–7.",
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
    name: "Pairobin Kids 4-Wheel Hidden Roller Skate Sneakers – Black, Walk & Roll",
    category: "Kids",
    subcategory: "Roller",
    price: 39.90,
    rating: 4.8,
    reviewCount: 312,
    image: rollerKids4Wheel,
    badge: "new",
    colors: ["#000000", "#9370DB", "#FF69B4", "#FFD700", "#00FF00"],
    sizes: ["1", "1.5", "3", "3.5", "4", "4.5", "5.5", "6", "6.5"],
    description: "Pairobin kids' black 4-wheel hidden roller skate sneakers with 2-in-1 walk or roll functionality. Four concealed wheels retract into the sole for regular walking. Breathable upper and lightweight construction for all-day comfort. Kids' sizes 1–6.5.",
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
    name: "Pairobin Girls' 4-Wheel Hidden Roller Skate Sneakers – Pink, Walk & Roll",
    category: "Kids",
    subcategory: "Roller",
    price: 39.90,
    rating: 4.9,
    reviewCount: 287,
    image: rollerKidsPink,
    badge: "bestseller",
    colors: ["#FF69B4", "#000000", "#FFD700", "#00FF00"],
    sizes: ["1", "1.5", "3", "3.5", "4", "4.5", "5.5", "6", "6.5"],
    description: "Pairobin girls' pink 4-wheel hidden roller skate sneakers with easy retract mechanism. Smooth-gliding wheels fold into the sole when not in use. Breathable material and trendy sneaker design for everyday wear and skating. Girls' sizes 1–6.5.",
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
    name: "Pairobin Kids 2-Wheel Hidden Roller Skate Sneakers – Black, Mesh Upper",
    category: "Kids",
    subcategory: "Roller",
    price: 39.90,
    rating: 4.7,
    reviewCount: 156,
    image: rollerKids2Wheel,
    badge: "new",
    colors: ["#000000", "#FFD700", "#00FF00"],
    sizes: ["31", "32", "33", "34", "35", "36", "37", "38", "39", "40"],
    description: "Pairobin kids' black 2-wheel hidden roller skate sneakers with breathable mesh upper and lightweight EVA sole. Dual wheels retract for seamless transition between walking and rolling. Suitable for beginners. EU sizes 31–40.",
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
    name: "Pairobin Velocity Pro X Running Shoes – Carbon Fiber Plate, Responsive Foam",
    category: "Running",
    price: 159.99,
    originalPrice: 189.99,
    rating: 4.8,
    reviewCount: 445,
    image: productRunning,
    badge: "bestseller",
    colors: ["#FF6B35", "#1a1a2e", "#ffffff"],
    sizes: ["6", "7", "8", "9", "10", "11", "12", "13"],
    description: "Pairobin Velocity Pro X running shoes engineered for speed and endurance. Responsive foam midsole with embedded carbon fiber plate delivers energy return on every stride. Breathable mesh upper and high-traction rubber outsole. Men's sizes 6–13.",
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
    name: "Pairobin Marathon Elite 2.0 Running Shoes – Ultra Cushioning, Engineered Knit",
    category: "Running",
    price: 189.99,
    rating: 4.9,
    reviewCount: 521,
    image: productRunning,
    badge: "bestseller",
    colors: ["#FF6B35", "#000000"],
    sizes: ["6", "7", "8", "9", "10", "11", "12", "13"],
    description: "Pairobin Marathon Elite 2.0 running shoes built for long-distance performance. Ultra-responsive cushioning paired with a carbon fiber energy plate reduces fatigue over marathon distances. Seamless engineered knit upper with reflective details for low-light visibility. Men's sizes 6–13.",
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
    name: "Pairobin Sprint Pro 3.0 Running Shoes – Speed Lacing, Propulsion Plate",
    category: "Running",
    price: 139.99,
    originalPrice: 169.99,
    rating: 4.7,
    reviewCount: 312,
    image: productRunning,
    badge: "sale",
    colors: ["#1e3a5f", "#FF6B35", "#ffffff"],
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    description: "Pairobin Sprint Pro 3.0 running shoes designed for training and race day. Speed lacing system and propulsion plate work together for quick transitions. Lightweight mesh upper with durable rubber outsole. Men's sizes 6–12.",
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
    name: "Pairobin Comfort Stride Elite Walking Shoes – Memory Foam, Arch Support",
    category: "Walking",
    price: 129.99,
    rating: 4.9,
    reviewCount: 389,
    image: productWalking,
    badge: "new",
    colors: ["#1e3a5f", "#333333", "#f5f5f5"],
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    description: "Pairobin Comfort Stride Elite walking shoes with memory foam insole and integrated arch support technology. Shock-absorbing midsole and slip-resistant outsole provide all-day comfort on any surface. Breathable mesh lining keeps feet dry. Unisex sizes 6–12.",
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
    name: "Pairobin Daily Walker Comfort Shoes – Cushioned Footbed, Flexible Sole",
    category: "Walking",
    price: 99.99,
    originalPrice: 119.99,
    rating: 4.7,
    reviewCount: 234,
    image: productWalking,
    badge: "sale",
    colors: ["#1e3a5f", "#ffffff"],
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    description: "Pairobin Daily Walker Comfort shoes with cushioned footbed and flexible sole for everyday use. Breathable upper material provides ventilation during extended walks. Durable construction built for daily wear. Unisex sizes 6–12.",
    features: [
      "Cushioned footbed",
      "Breathable upper",
      "Flexible sole",
      "All-day comfort"
    ]
  },
  {
    id: "urban-walk-pro",
    name: "Pairobin Urban Walk Pro Shoes – Premium Leather Upper, Gel Cushioning",
    category: "Walking",
    price: 119.99,
    rating: 4.8,
    reviewCount: 167,
    image: productWalking,
    colors: ["#333333", "#1e3a5f", "#8B4513"],
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    description: "Pairobin Urban Walk Pro shoes combining premium leather upper with gel cushioning technology. Anatomical footbed conforms to foot shape for personalized support. Durable construction for urban commuting and casual wear. Unisex sizes 6–12.",
    features: [
      "Premium leather upper",
      "Gel cushioning",
      "Anatomical footbed",
      "Durable construction"
    ]
  },
  {
    id: "lightweight-cushioned-walking",
    name: "Pairobin Lightweight Cushioned Walking Sneakers – EVA Sole, Slip-On",
    category: "Walking",
    price: 29.00,
    rating: 4.6,
    reviewCount: 178,
    image: walkingCushioned,
    badge: "bestseller",
    colors: ["#1e3a5f", "#FF6B35", "#000000"],
    sizes: ["5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5"],
    description: "Pairobin lightweight cushioned walking sneakers with EVA midsole and breathable mesh upper. Slip-on design with flexible rubber outsole for effortless all-day wear. Ideal for casual walks and light activity. Unisex sizes 5–10.5.",
    features: [
      "Lightweight EVA cushioning",
      "Breathable mesh upper",
      "Flexible rubber outsole",
      "Slip-on convenience",
      "All-day comfort support"
    ]
  },
  {
    id: "walking-sock-sneakers",
    name: "Pairobin Sock-Style Walking Sneakers – Knit Upper, Lightweight Cushioned Sole",
    category: "Walking",
    price: 29.00,
    rating: 4.7,
    reviewCount: 143,
    image: walkingSock,
    badge: "new",
    colors: ["#000000", "#1e3a5f", "#FF6B35"],
    sizes: ["5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5"],
    description: "Pairobin sock-style walking sneakers with breathable knit upper that moves with your foot. Lightweight cushioned sole absorbs impact during long walks. Slip-on design for quick, hassle-free wear. Unisex sizes 5–10.5.",
    features: [
      "Sock-like fit design",
      "Breathable knit upper",
      "Lightweight cushioned sole",
      "Slip-on style",
      "Flexible comfort"
    ]
  },

  // KIDS SHOES
  {
    id: "kids-active-runner",
    name: "Pairobin Kids Active Runner Shoes – Velcro Strap, Machine Washable",
    category: "Kids",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.9,
    reviewCount: 412,
    image: productKids,
    badge: "sale",
    colors: ["#ff6b6b", "#4ecdc4", "#ffe66d"],
    sizes: ["1", "2", "3", "4", "5", "6", "7"],
    description: "Pairobin Kids Active Runner shoes with easy-on Velcro strap and cushioned midsole. Breathable mesh keeps feet cool during play and sport. Durable rubber outsole withstands daily wear. Machine washable for easy care. Kids' sizes 1–7.",
    features: [
      "Easy-on Velcro strap",
      "Breathable mesh",
      "Cushioned midsole",
      "Durable rubber outsole",
      "Machine washable"
    ]
  },
  {
    id: "kids-play-trainer",
    name: "Pairobin Kids Play Trainer Shoes – Reinforced Toe, Lightweight, Velcro",
    category: "Kids",
    price: 69.99,
    rating: 4.8,
    reviewCount: 278,
    image: productKids,
    badge: "new",
    colors: ["#FF69B4", "#00CED1", "#FFD700"],
    sizes: ["1", "2", "3", "4", "5", "6", "7"],
    description: "Pairobin Kids Play Trainer shoes with reinforced toe cap and flexible sole for active play. Velcro closure allows kids to put on shoes independently. Lightweight design supports natural foot movement. Kids' sizes 1–7.",
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
    name: "Pairobin Trail Blazer XT Hiking Shoes – Waterproof, Vibram Outsole",
    category: "Outdoor",
    price: 179.99,
    rating: 4.6,
    reviewCount: 198,
    image: productOutdoor,
    colors: ["#8b4513", "#2f4f4f", "#333333"],
    sizes: ["7", "8", "9", "10", "11", "12", "13"],
    description: "Pairobin Trail Blazer XT hiking shoes with waterproof membrane and Vibram outsole for superior trail grip. Reinforced toe cap and ankle support system protect against rough terrain. Aggressive tread pattern handles mud, rock, and loose gravel. Men's sizes 7–13.",
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
    name: "Pairobin Mountain Grip Pro Hiking Shoes – Gore-Tex, Premium Leather",
    category: "Outdoor",
    price: 199.99,
    originalPrice: 229.99,
    rating: 4.8,
    reviewCount: 156,
    image: productOutdoor,
    badge: "sale",
    colors: ["#2f4f4f", "#8b4513", "#000000"],
    sizes: ["7", "8", "9", "10", "11", "12", "13"],
    description: "Pairobin Mountain Grip Pro hiking shoes with Gore-Tex waterproof lining and premium leather upper. Rock plate protection shields feet from sharp terrain underfoot. Cushioned midsole reduces fatigue on long hikes. Men's sizes 7–13.",
    features: [
      "Gore-Tex lining",
      "Rock plate protection",
      "Cushioned midsole",
      "Premium leather upper"
    ]
  },
  {
    id: "trail-explorer",
    name: "Pairobin Trail Explorer Outdoor Shoes – Quick-Dry, Multi-Terrain Traction",
    category: "Outdoor",
    price: 149.99,
    rating: 4.7,
    reviewCount: 134,
    image: productOutdoor,
    badge: "new",
    colors: ["#228B22", "#8b4513", "#333333"],
    sizes: ["7", "8", "9", "10", "11", "12"],
    description: "Pairobin Trail Explorer outdoor shoes with quick-dry upper and multi-terrain traction outsole. Breathable lining wicks moisture during warm-weather hikes. Lightweight construction reduces foot fatigue on long trails. Men's sizes 7–12.",
    features: [
      "Quick-dry upper",
      "Multi-terrain traction",
      "Breathable lining",
      "Lightweight design"
    ]
  },
  {
    id: "water-hiking-aqua",
    name: "Pairobin Water Hiking Shoes – Quick-Dry Aqua, Non-Slip Rubber Sole",
    category: "Outdoor",
    price: 39.00,
    rating: 4.7,
    reviewCount: 89,
    image: hikingAqua,
    badge: "new",
    colors: ["#2f4f4f", "#000000", "#1e3a5f"],
    sizes: ["6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11"],
    description: "Pairobin water hiking shoes with quick-dry technology and built-in drainage holes for river crossings and water activities. Non-slip rubber outsole grips wet surfaces. Breathable mesh upper and lightweight construction for comfort on and off trails. Unisex sizes 6–11.",
    features: [
      "Quick-dry technology",
      "Drainage holes for water activities",
      "Non-slip rubber outsole",
      "Breathable mesh upper",
      "Lightweight construction",
      "OEM/ODM available"
    ]
  },

  // TENNIS SHOES
  {
    id: "tennis-breathable-training",
    name: "Pairobin Breathable Tennis Shoes – Non-Marking Sole, Court Traction, Unisex",
    category: "Tennis",
    price: 15.00,
    rating: 4.5,
    reviewCount: 67,
    image: tennisWhite,
    colors: ["#FFFFFF", "#000000", "#1e3a5f"],
    sizes: ["4", "4.5", "5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5"],
    description: "Pairobin breathable tennis shoes with non-marking rubber outsole for indoor and outdoor courts. Cushioned insole absorbs impact during training and match play. Lightweight mesh upper provides ventilation. Unisex sizes 4–10.5.",
    features: [
      "Breathable mesh upper",
      "Non-marking rubber outsole",
      "Cushioned insole",
      "Lightweight design",
      "Court-ready traction"
    ]
  },
  {
    id: "tennis-high-performance",
    name: "Pairobin High-Performance Tennis Shoes – Lateral Support, Durable Rubber Sole",
    category: "Tennis",
    price: 15.00,
    rating: 4.6,
    reviewCount: 94,
    image: tennisPerformance,
    badge: "new",
    colors: ["#FFFFFF", "#FF6B35", "#000000"],
    sizes: ["4", "4.5", "5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5"],
    description: "Pairobin high-performance tennis shoes with enhanced lateral support and durable rubber sole for all court surfaces. Breathable construction keeps feet cool during intense rallies. Unisex fit in sizes 4–10.5.",
    features: [
      "Performance-focused design",
      "Enhanced lateral support",
      "Breathable construction",
      "Durable rubber sole",
      "Unisex fit"
    ]
  },
  {
    id: "tennis-lateral-moves",
    name: "Pairobin Tennis Shoes for Quick Lateral Movement – Reinforced Sidewalls, Pivot Outsole",
    category: "Tennis",
    price: 15.00,
    rating: 4.7,
    reviewCount: 112,
    image: tennisLateral,
    badge: "bestseller",
    colors: ["#FFFFFF", "#1e3a5f", "#FF6B35"],
    sizes: ["4", "4.5", "5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5"],
    description: "Pairobin tennis shoes engineered for quick lateral movement with reinforced sidewalls and quick-pivot outsole design. Superior ankle support and court-grip traction for competitive play. Breathable upper keeps feet comfortable. Unisex sizes 4–10.5.",
    features: [
      "Lateral support technology",
      "Quick-pivot outsole design",
      "Reinforced sidewalls",
      "Breathable upper",
      "Court-grip traction"
    ]
  },

  // PICKLEBALL SHOES
  {
    id: "pickleball-court-shoes",
    name: "Pairobin Pickleball Court Shoes – Non-Marking Sole, Indoor & Outdoor, Unisex",
    category: "Pickleball",
    price: 69.00,
    rating: 4.8,
    reviewCount: 156,
    image: pickleballCourt,
    badge: "new",
    colors: ["#FFFFFF", "#000000", "#FF6B35"],
    sizes: ["5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11"],
    description: "Pairobin pickleball court shoes with non-marking sole designed for both indoor and outdoor court surfaces. Lateral stability support prevents ankle roll during quick direction changes. Cushioned insole and breathable upper for match-day comfort. Unisex sizes 5–11.",
    features: [
      "Multi-court versatility",
      "Non-marking sole",
      "Lateral stability support",
      "Breathable upper",
      "Cushioned comfort",
      "OEM/ODM customization available"
    ]
  },

  // CHEERLEADING SHOES
  {
    id: "cheerleading-black-customizable",
    name: "Pairobin Black Cheerleading Shoes – Lightweight, Flexible Sole, Team Customizable",
    category: "Cheerleading",
    price: 39.00,
    rating: 4.7,
    reviewCount: 89,
    image: cheerleadingBlack,
    badge: "new",
    colors: ["#000000", "#FFFFFF"],
    sizes: ["4", "4.5", "5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5"],
    description: "Pairobin black cheerleading shoes with lightweight construction and flexible sole for stunts, jumps, and tumbling. Breathable upper and secure fit keep feet stable during routines. Available for retail and wholesale with team customization options. Unisex sizes 4–10.5.",
    features: [
      "Lightweight design",
      "Flexible sole for stunts",
      "Breathable upper",
      "Secure fit",
      "Retail & wholesale available",
      "Customizable for teams"
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
  { name: "Tennis", slug: "tennis", count: products.filter(p => p.category === "Tennis").length },
  { name: "Pickleball", slug: "pickleball", count: products.filter(p => p.category === "Pickleball").length },
  { name: "Cheerleading", slug: "cheerleading", count: products.filter(p => p.category === "Cheerleading").length },
];

export const getFeaturedProducts = () => {
  return products.filter(p => p.badge === "bestseller" || p.badge === "new").slice(0, 8);
};

export const getProductsByCategory = (category: string) => {
  if (category === "all") return products;
  return products.filter(p => p.category.toLowerCase() === category.toLowerCase());
};

export const getProductById = (id: string) => {
  return products.find(p => p.id === id);
};

export const getRelatedProducts = (productId: string, limit = 4) => {
  const product = getProductById(productId);
  if (!product) return [];
  return products
    .filter(p => p.category === product.category && p.id !== productId)
    .slice(0, limit);
};
