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
    description: "Engineered for serious cyclists who demand performance and comfort on every ride.\n\n🎯 Ideal For: Road cycling, indoor spinning, bike commuting\n\n✅ Key Benefits:\n• Recessed SPD cleats allow seamless walking off the bike\n• Engineered mesh upper delivers superior breathability during intense sessions\n• Built-in nylon bracket maximizes pedal-to-shoe power transfer\n• Anti-odor lining keeps shoes fresh ride after ride\n• Secure Velcro strap ensures a locked-in, adjustable fit\n\n📏 Available Sizes: Unisex 5.5–10",
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
    description: "A versatile cycling shoe built for riders who value lightweight comfort and reliable cleat performance.\n\n🎯 Ideal For: Spin class enthusiasts, recreational cyclists, fitness riders\n\n✅ Key Benefits:\n• Breathable mesh upper keeps feet cool during long rides\n• Recessed SPD cleats included — walk naturally off the bike\n• Lightweight rubber sole reduces fatigue on extended sessions\n• Velcro closure provides quick, adjustable fit adjustments\n\n📏 Available Sizes: Unisex 5.5–10",
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
    description: "Designed specifically for women who want performance cycling gear with a refined aesthetic.\n\n🎯 Ideal For: Women cyclists, indoor spinning, outdoor rides\n\n✅ Key Benefits:\n• SPD-compatible recessed cleats for easy on-and-off-bike transitions\n• Engineered mesh upper provides targeted ventilation\n• Rubber sole delivers reliable grip and pedal stability\n• Secure Velcro closure adapts to your foot shape\n\n📏 Available Sizes: Women's 5.5–10",
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
    description: "Built for riders who push hard and need gear that keeps up with high-intensity training.\n\n🎯 Ideal For: Competitive cyclists, high-intensity spin sessions, daily bike commuters\n\n✅ Key Benefits:\n• Anti-odor lining ensures freshness even after sweaty rides\n• Recessed SPD cleats for natural walking when off the bike\n• Durable rubber sole withstands daily cycling wear\n• Secure fit system locks your foot in place during sprints\n\n📏 Available Sizes: Unisex 5.5–10",
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
    description: "An everyday cycling shoe that combines lightweight construction with dependable SPD compatibility.\n\n🎯 Ideal For: Road cyclists, spin class participants, casual weekend riders\n\n✅ Key Benefits:\n• Breathable mesh design promotes airflow and reduces heat build-up\n• Lightweight build minimizes pedaling fatigue\n• Rubber sole provides reliable grip on and off the bike\n• Recessed SPD cleats included for immediate ride-ready use\n\n📏 Available Sizes: Unisex 5.5–10",
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
    description: "A stylish performance cycling shoe designed for women who refuse to compromise on aesthetics or function.\n\n🎯 Ideal For: Women cyclists, boutique spin studios, outdoor cycling\n\n✅ Key Benefits:\n• Premium mesh upper offers maximum ventilation and comfort\n• SPD-compatible recessed cleats for walk-friendly design\n• Velcro strap closure ensures a snug, customizable fit\n• Rubber sole delivers dependable traction on any surface\n\n📏 Available Sizes: Women's 5.5–10",
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
    description: "The ultimate indoor cycling shoe for studio riders and Peloton enthusiasts who want maximum power output.\n\n🎯 Ideal For: Indoor cycling studios, Peloton/spin bike riders, competitive indoor cyclists\n\n✅ Key Benefits:\n• Dual Delta/SPD cleat compatibility works with all major bike brands\n• Carbon-reinforced rigid sole delivers elite-level power transfer\n• Breathable mesh panels prevent overheating during intense classes\n• Ratchet closure system provides micro-adjustable, secure lockdown\n• OEM/ODM customization available for studios and brands\n\n📏 Available Sizes: Unisex 5–10.5",
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
    description: "A fun, exciting shoe that transforms everyday walking into a rolling adventure for active kids.\n\n🎯 Ideal For: Kids aged 5–12, birthday gifts, outdoor play, after-school fun\n\n✅ Key Benefits:\n• Retractable single wheel stows flush — switch from rolling to walking instantly\n• USB-rechargeable LED lights flash for 4–5 hours on a 1–2 hour charge\n• Velcro closure lets kids put them on and take them off independently\n• Helps develop balance, coordination, and confidence\n\n📏 Available Sizes: Kids' 12.5–7",
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
    description: "The perfect gift for active girls who love combining style with adventurous play.\n\n🎯 Ideal For: Girls aged 5–12, birthday & holiday gifts, outdoor activities\n\n✅ Key Benefits:\n• Hidden retractable wheel converts from sneaker to roller shoe in seconds\n• USB-rechargeable LED lights create a dazzling light show\n• Breathable upper keeps feet cool during energetic play\n• Easy Velcro closure — kids can wear them independently\n\n📏 Available Sizes: Kids' 12.5–7",
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
    description: "A 2-in-1 sneaker that doubles as a roller skate — the ultimate everyday shoe for adventurous kids.\n\n🎯 Ideal For: Kids aged 6–14, school-age children, outdoor play, beginner skaters\n\n✅ Key Benefits:\n• Four concealed wheels retract fully into the sole for normal walking\n• Instant walk-to-roll transition with a simple button mechanism\n• Breathable upper and lightweight build for all-day comfort\n• Available in 5 vibrant color options to match any style\n\n📏 Available Sizes: Kids' 1–6.5",
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
    description: "A bestselling girls' roller skate sneaker that combines trendy design with smooth-gliding performance.\n\n🎯 Ideal For: Girls aged 6–14, everyday wear, skating with friends, birthday gifts\n\n✅ Key Benefits:\n• Easy retract mechanism — wheels fold away for seamless walking\n• Smooth-gliding wheels provide stable, fun rolling experience\n• Breathable material keeps feet comfortable during active play\n• Stylish sneaker design looks great even without skating\n\n📏 Available Sizes: Girls' 1–6.5",
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
    description: "A beginner-friendly roller skate sneaker with dual wheels for easy learning and confident rolling.\n\n🎯 Ideal For: Beginner skaters, kids & teens, casual outdoor fun\n\n✅ Key Benefits:\n• 2-wheel design offers balanced stability for new skaters\n• Retractable wheels transition smoothly between walking and rolling\n• Breathable mesh upper and lightweight EVA sole for all-day wear\n• Great entry point for kids learning to balance and skate\n\n📏 Available Sizes: EU 31–40",
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
    description: "Engineered for runners chasing personal bests with cutting-edge carbon fiber plate technology.\n\n🎯 Ideal For: Competitive runners, race day athletes, 5K to marathon distance runners\n\n✅ Key Benefits:\n• Embedded carbon fiber plate propels you forward with every stride\n• Responsive foam midsole delivers exceptional energy return\n• Breathable mesh upper keeps feet ventilated during long runs\n• High-traction rubber outsole grips roads and tracks confidently\n• Lightweight construction reduces fatigue over long distances\n\n📏 Available Sizes: Men's 6–13",
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
    description: "Our flagship marathon shoe built for elite endurance runners who demand the best performance technology.\n\n🎯 Ideal For: Marathon & ultra-marathon runners, elite training, long-distance road running\n\n✅ Key Benefits:\n• Ultra-responsive cushioning absorbs impact over 26.2+ miles\n• Carbon fiber energy plate reduces muscle fatigue and boosts efficiency\n• Seamless engineered knit eliminates friction and hot spots\n• Strategic flex zones allow natural foot movement\n• Reflective details enhance visibility during early morning and evening runs\n\n📏 Available Sizes: Men's 6–13",
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
    description: "A high-value training shoe designed for runners who want race-day features at a training-shoe price.\n\n🎯 Ideal For: Daily training runs, tempo sessions, race day 5K–half marathon\n\n✅ Key Benefits:\n• Speed lacing system enables fast transitions in training and racing\n• Propulsion plate enhances forward momentum for faster paces\n• Lightweight mesh upper provides breathability without added weight\n• Durable rubber outsole withstands high-mileage training schedules\n\n📏 Available Sizes: Men's 6–12",
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
    description: "Premium walking shoe with therapeutic-grade support for people who spend long hours on their feet.\n\n🎯 Ideal For: Healthcare workers, teachers, daily commuters, people with plantar fasciitis\n\n✅ Key Benefits:\n• Memory foam insole molds to your foot for personalized cushioning\n• Integrated arch support technology reduces fatigue and foot pain\n• Shock-absorbing midsole protects joints on hard surfaces\n• Slip-resistant outsole provides confident grip on any terrain\n• Breathable mesh lining wicks moisture to keep feet dry\n\n📏 Available Sizes: Unisex 6–12",
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
    description: "An affordable, comfortable walking shoe built for everyday reliability and all-day wear.\n\n🎯 Ideal For: Daily walkers, casual wear, errands, light exercise\n\n✅ Key Benefits:\n• Cushioned footbed absorbs impact with every step\n• Flexible sole moves naturally with your foot\n• Breathable upper provides ventilation during extended walks\n• Durable construction holds up to daily use\n\n📏 Available Sizes: Unisex 6–12",
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
    description: "A premium walking shoe that bridges the gap between performance footwear and sophisticated style.\n\n🎯 Ideal For: Urban commuters, business casual environments, travel, all-day city walking\n\n✅ Key Benefits:\n• Premium leather upper delivers durability and polished appearance\n• Gel cushioning technology absorbs shock step after step\n• Anatomical footbed conforms to your unique foot shape\n• Versatile design transitions from office to weekend seamlessly\n\n📏 Available Sizes: Unisex 6–12",
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
    description: "An ultra-lightweight walking sneaker at an unbeatable value — perfect for everyday casual comfort.\n\n🎯 Ideal For: Casual daily wear, light walks, travel, seniors seeking easy-on footwear\n\n✅ Key Benefits:\n• EVA midsole delivers soft cushioning at a featherlight weight\n• Slip-on design means no laces to tie — just step in and go\n• Breathable mesh upper keeps feet cool in warm weather\n• Flexible rubber outsole adapts to natural foot movement\n\n📏 Available Sizes: Unisex 5–10.5",
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
    description: "A sock-style sneaker that wraps your foot like a second skin for the most natural walking experience.\n\n🎯 Ideal For: Minimalist footwear fans, travel, light gym workouts, casual everyday wear\n\n✅ Key Benefits:\n• Knit upper stretches and moves with your foot for a sock-like fit\n• Lightweight cushioned sole absorbs impact without added bulk\n• Slip-on design makes them the fastest shoes to put on\n• Versatile style pairs with casual and athletic outfits\n\n📏 Available Sizes: Unisex 5–10.5",
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
    description: "A durable, machine-washable kids' shoe designed to keep up with the most active children.\n\n🎯 Ideal For: Active kids aged 5–12, school sports, playground play, PE class\n\n✅ Key Benefits:\n• Easy Velcro strap lets kids put on shoes independently\n• Cushioned midsole protects growing feet during high-impact activities\n• Breathable mesh keeps feet cool even during intense play\n• Machine washable — toss them in and they come out fresh\n• Durable rubber outsole stands up to daily playground use\n\n📏 Available Sizes: Kids' 1–7",
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
    description: "A tough, lightweight trainer built to handle the rough-and-tumble life of active kids.\n\n🎯 Ideal For: Toddlers & children aged 3–10, everyday play, daycare, school\n\n✅ Key Benefits:\n• Reinforced toe cap protects against scuffs and bumps\n• Flexible sole supports natural foot development\n• Velcro closure encourages independence — kids can wear them solo\n• Lightweight design won't slow down energetic play\n\n📏 Available Sizes: Kids' 1–7",
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
    description: "A rugged, waterproof hiking shoe engineered for adventurers who tackle demanding trails.\n\n🎯 Ideal For: Trail hikers, mountain trekkers, outdoor enthusiasts, weekend backpackers\n\n✅ Key Benefits:\n• Waterproof membrane keeps feet dry in rain, mud, and stream crossings\n• Vibram outsole delivers superior grip on wet rocks and loose terrain\n• Reinforced toe cap protects against trail hazards\n• Ankle support system reduces fatigue and injury risk on uneven ground\n• Aggressive tread pattern handles mud, gravel, and rocky surfaces\n\n📏 Available Sizes: Men's 7–13",
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
    description: "Our premium hiking shoe combining Gore-Tex waterproofing with full leather durability for serious mountain expeditions.\n\n🎯 Ideal For: Multi-day hikers, alpine trekkers, professional guides, all-weather trail use\n\n✅ Key Benefits:\n• Gore-Tex waterproof lining keeps feet bone-dry in any weather\n• Premium leather upper resists abrasion and ages beautifully\n• Rock plate protection shields feet from sharp terrain underfoot\n• Cushioned midsole reduces fatigue on long summit pushes\n\n📏 Available Sizes: Men's 7–13",
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
    description: "A lightweight, quick-drying trail shoe for warm-weather hikers and outdoor explorers.\n\n🎯 Ideal For: Summer hikers, trail runners, warm-climate outdoor activities\n\n✅ Key Benefits:\n• Quick-dry upper handles stream crossings and surprise rain\n• Multi-terrain traction outsole grips dirt, rock, and gravel\n• Breathable lining wicks moisture to keep feet cool and dry\n• Lightweight construction reduces foot fatigue on long trails\n\n📏 Available Sizes: Men's 7–12",
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
    description: "A versatile water-ready hiking shoe built for adventurers who don't let rivers and streams slow them down.\n\n🎯 Ideal For: River hikers, kayakers, beach explorers, water sports enthusiasts\n\n✅ Key Benefits:\n• Quick-dry technology and drainage holes expel water rapidly\n• Non-slip rubber outsole grips wet rocks, docks, and slippery surfaces\n• Breathable mesh upper dries fast for immediate comfort\n• Lightweight construction makes them ideal for packing on trips\n• OEM/ODM customization available for brands and retailers\n\n📏 Available Sizes: Unisex 6–11",
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
    description: "An affordable, breathable tennis shoe for recreational players and beginners building their court game.\n\n🎯 Ideal For: Recreational tennis players, beginners, school/club tennis, court practice\n\n✅ Key Benefits:\n• Non-marking rubber outsole safe for indoor and outdoor courts\n• Cushioned insole absorbs impact during serves and rallies\n• Lightweight mesh upper provides ventilation during intense play\n• Court-ready traction keeps you stable during quick movements\n\n📏 Available Sizes: Unisex 4–10.5",
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
    description: "A performance-grade tennis shoe with enhanced lateral support for aggressive baseliners and all-court players.\n\n🎯 Ideal For: Intermediate to advanced tennis players, league matches, all-court play\n\n✅ Key Benefits:\n• Enhanced lateral support prevents ankle roll during side-to-side movement\n• Durable rubber sole withstands hard court abrasion\n• Breathable construction keeps feet cool during long matches\n• Designed for all court surfaces — hard, clay, and indoor\n\n📏 Available Sizes: Unisex 4–10.5",
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
    description: "Engineered for competitive players who rely on explosive lateral movement and rapid direction changes.\n\n🎯 Ideal For: Competitive tennis players, tournament athletes, coaches, intense training sessions\n\n✅ Key Benefits:\n• Reinforced sidewalls provide structural support during aggressive lateral play\n• Quick-pivot outsole design enables faster direction changes\n• Superior ankle support reduces injury risk during competition\n• Court-grip traction pattern ensures stability on any surface\n• Breathable upper keeps feet comfortable during 3-set matches\n\n📏 Available Sizes: Unisex 4–10.5",
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
    description: "Purpose-built for the fastest-growing sport in America — engineered for quick volleys and explosive court coverage.\n\n🎯 Ideal For: Pickleball players of all levels, indoor & outdoor court play, recreational and competitive matches\n\n✅ Key Benefits:\n• Non-marking sole is safe for all indoor and outdoor court surfaces\n• Lateral stability support prevents ankle roll during quick direction changes\n• Cushioned insole reduces impact stress during fast-paced rallies\n• Breathable upper keeps feet cool during tournament play\n• OEM/ODM customization available for clubs and brands\n\n📏 Available Sizes: Unisex 5–11",
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
    description: "A lightweight, flexible cheerleading shoe built for stunts, jumps, and tumbling — available for teams with custom branding.\n\n🎯 Ideal For: Cheerleading squads, dance teams, gymnastics, cheer competitions\n\n✅ Key Benefits:\n• Flexible sole enables full-range stunts, jumps, and tumbling passes\n• Lightweight construction minimizes fatigue during routines\n• Secure fit keeps feet stable during high-impact landings\n• Breathable upper maintains comfort during practice and performance\n• Team customization options available for bulk/wholesale orders\n\n📏 Available Sizes: Unisex 4–10.5",
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
