import { Layout } from "@/components/layout";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Star, Heart, ShoppingBag, Truck, Shield, RefreshCw, Minus, Plus, ChevronRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product";
import { toast } from "@/hooks/use-toast";
import productRunning from "@/assets/product-running-1.jpg";
import productWalking from "@/assets/product-walking-1.jpg";
import productCycling from "@/assets/product-cycling-1.jpg";

const product = {
  id: "velocity-pro-x",
  name: "Velocity Pro X",
  category: "Running",
  price: 159.99,
  originalPrice: 189.99,
  rating: 4.8,
  reviewCount: 245,
  images: [productRunning, productRunning, productRunning, productRunning],
  colors: [
    { name: "Coral Blaze", hex: "#FF6B35" },
    { name: "Midnight Navy", hex: "#1a1a2e" },
    { name: "Pure White", hex: "#ffffff" },
  ],
  sizes: ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
  description: "The Velocity Pro X is our flagship running shoe, designed for serious runners who demand the best. Featuring our proprietary FlowFoam cushioning technology, this shoe delivers exceptional energy return and comfort mile after mile.",
  features: [
    "FlowFoam midsole for superior cushioning and energy return",
    "Breathable engineered mesh upper for optimal airflow",
    "Strategic rubber outsole for maximum traction",
    "Lightweight construction at just 8.5 oz",
    "Reflective details for low-light visibility",
    "Ortholite sockliner for moisture management",
  ],
};

const relatedProducts = [
  {
    id: "comfort-stride-elite",
    name: "Comfort Stride Elite",
    category: "Walking",
    price: 129.99,
    rating: 4.9,
    reviewCount: 189,
    image: productWalking,
    badge: "new" as const,
    colors: ["#1e3a5f", "#333333"],
  },
  {
    id: "aero-cycle-pro",
    name: "Aero Cycle Pro",
    category: "Cycling",
    price: 199.99,
    rating: 4.7,
    reviewCount: 132,
    image: productCycling,
    colors: ["#000000", "#FF6B35"],
  },
  {
    id: "marathon-elite",
    name: "Marathon Elite 2.0",
    category: "Running",
    price: 189.99,
    rating: 4.9,
    reviewCount: 421,
    image: productRunning,
    badge: "bestseller" as const,
    colors: ["#FF6B35", "#000000"],
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        description: "Choose your size before adding to cart.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Added to Cart!",
      description: `${product.name} (Size ${selectedSize}) x ${quantity}`,
    });
  };

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-secondary py-4">
        <div className="container-wide">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <Link to="/shop" className="text-muted-foreground hover:text-foreground">Shop</Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <Link to="/shop/running" className="text-muted-foreground hover:text-foreground">{product.category}</Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-foreground font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Images */}
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden bg-secondary">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-xl overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-accent' : 'border-transparent hover:border-border'
                    }`}
                  >
                    <img src={image} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details */}
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">
                {product.category}
              </p>
              <h1 className="font-heading font-black text-4xl md:text-5xl mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'fill-muted text-muted'}`}
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4 mb-8">
                <span className="font-heading font-black text-4xl text-foreground">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-muted-foreground line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                    <span className="badge-sale">
                      Save ${(product.originalPrice - product.price).toFixed(0)}
                    </span>
                  </>
                )}
              </div>

              {/* Color Selection */}
              <div className="mb-6">
                <p className="font-medium mb-3">
                  Color: <span className="text-muted-foreground">{product.colors[selectedColor].name}</span>
                </p>
                <div className="flex gap-3">
                  {product.colors.map((color, index) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(index)}
                      className={`w-10 h-10 rounded-full border-2 transition-all ${
                        selectedColor === index ? 'border-accent ring-2 ring-accent ring-offset-2' : 'border-border'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <p className="font-medium">Select Size</p>
                  <Link to="/size-guide" className="text-sm text-accent hover:underline">Size Guide</Link>
                </div>
                <div className="grid grid-cols-6 gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 rounded-lg font-medium text-sm transition-colors ${
                        selectedSize === size
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary hover:bg-secondary/80'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="flex gap-4 mb-8">
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-secondary transition-colors"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-secondary transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                <Button variant="accent" size="lg" className="flex-1" onClick={handleAddToCart}>
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="w-5 h-5" />
                </Button>
              </div>

              {/* B2B Button */}
              <div className="mb-8 p-4 bg-secondary rounded-xl">
                <p className="text-sm text-muted-foreground mb-2">Interested in bulk orders?</p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/b2b">Request B2B Quote</Link>
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 py-6 border-t border-border">
                <div className="text-center">
                  <Truck className="w-6 h-6 mx-auto mb-2 text-accent" />
                  <p className="text-xs font-medium">Free Shipping</p>
                </div>
                <div className="text-center">
                  <Shield className="w-6 h-6 mx-auto mb-2 text-accent" />
                  <p className="text-xs font-medium">Secure Checkout</p>
                </div>
                <div className="text-center">
                  <RefreshCw className="w-6 h-6 mx-auto mb-2 text-accent" />
                  <p className="text-xs font-medium">30-Day Returns</p>
                </div>
              </div>

              {/* Description */}
              <div className="border-t border-border pt-8">
                <h3 className="font-heading font-bold text-xl mb-4">About This Product</h3>
                <p className="text-muted-foreground mb-6">{product.description}</p>
                <h4 className="font-semibold mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <h2 className="section-title mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
