import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { 
  ShoppingBag, 
  Minus, 
  Plus, 
  Truck, 
  Shield, 
  RotateCcw,
  Loader2,
  ChevronRight,
  Package,
  Clock,
  CheckCircle2
} from "lucide-react";
import { fetchProductByHandle, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

// Generate Product JSON-LD for Google Merchant Centre
function generateProductJsonLd(product: ShopifyProduct['node'], selectedVariant: { price: { amount: string; currencyCode: string }; availableForSale: boolean } | null) {
  const price = selectedVariant?.price || product.priceRange.minVariantPrice;
  const image = product.images.edges[0]?.node?.url;
  
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.title,
    "description": product.description,
    "image": image ? [image] : [],
    "brand": {
      "@type": "Brand",
      "name": "Pairobin"
    },
    "sku": product.handle,
    "mpn": product.handle.toUpperCase(),
    "offers": {
      "@type": "Offer",
      "url": `https://pairobin.com/product/${product.handle}`,
      "priceCurrency": price.currencyCode,
      "price": parseFloat(price.amount).toFixed(2),
      "priceValidUntil": new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      "availability": selectedVariant?.availableForSale !== false 
        ? "https://schema.org/InStock" 
        : "https://schema.org/OutOfStock",
      "itemCondition": "https://schema.org/NewCondition",
      "seller": {
        "@type": "Organization",
        "name": "Pairobin"
      },
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": {
          "@type": "MonetaryAmount",
          "value": "0",
          "currency": "USD"
        },
        "shippingDestination": {
          "@type": "DefinedRegion",
          "addressCountry": "US"
        },
        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "handlingTime": {
            "@type": "QuantitativeValue",
            "minValue": 1,
            "maxValue": 2,
            "unitCode": "DAY"
          },
          "transitTime": {
            "@type": "QuantitativeValue",
            "minValue": 3,
            "maxValue": 7,
            "unitCode": "DAY"
          }
        }
      },
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "applicableCountry": "US",
        "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
        "merchantReturnDays": 30,
        "returnMethod": "https://schema.org/ReturnByMail",
        "returnFees": "https://schema.org/FreeReturn"
      }
    }
  };
}

export default function ShopifyProductDetail() {
  const { handle } = useParams<{ handle: string }>();
  const [product, setProduct] = useState<ShopifyProduct['node'] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  
  const addItem = useCartStore(state => state.addItem);

  useEffect(() => {
    async function loadProduct() {
      if (!handle) return;
      setIsLoading(true);
      try {
        const fetchedProduct = await fetchProductByHandle(handle);
        setProduct(fetchedProduct);
        
        if (fetchedProduct?.variants.edges[0]) {
          const firstVariant = fetchedProduct.variants.edges[0].node;
          setSelectedVariant(firstVariant.id);
          
          // Set initial selected options
          const initialOptions: Record<string, string> = {};
          firstVariant.selectedOptions.forEach(opt => {
            initialOptions[opt.name] = opt.value;
          });
          setSelectedOptions(initialOptions);
        }

        // Update page title and meta for SEO
        if (fetchedProduct) {
          document.title = `${fetchedProduct.title} | Pairobin`;
          const metaDescription = document.querySelector('meta[name="description"]');
          if (metaDescription) {
            metaDescription.setAttribute('content', fetchedProduct.description.slice(0, 160));
          }
        }
      } catch (error) {
        console.error("Failed to load product:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadProduct();
  }, [handle]);

  // Inject JSON-LD structured data
  useEffect(() => {
    if (!product) return;

    const currentVariant = getCurrentVariant();
    const jsonLd = generateProductJsonLd(product, currentVariant || null);
    
    // Remove existing product schema if any
    const existingScript = document.querySelector('script[data-product-jsonld]');
    if (existingScript) {
      existingScript.remove();
    }
    
    // Add new product schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-product-jsonld', 'true');
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.querySelector('script[data-product-jsonld]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [product, selectedVariant]);

  const handleOptionChange = (optionName: string, value: string) => {
    const newOptions = { ...selectedOptions, [optionName]: value };
    setSelectedOptions(newOptions);
    
    // Find matching variant
    const matchingVariant = product?.variants.edges.find(v => 
      v.node.selectedOptions.every(opt => newOptions[opt.name] === opt.value)
    );
    
    if (matchingVariant) {
      setSelectedVariant(matchingVariant.node.id);
    }
  };

  const getCurrentVariant = () => {
    return product?.variants.edges.find(v => v.node.id === selectedVariant)?.node;
  };

  const handleAddToCart = () => {
    if (!product || !selectedVariant) return;
    
    const variant = getCurrentVariant();
    if (!variant) {
      toast.error("Please select a variant");
      return;
    }

    if (!variant.availableForSale) {
      toast.error("This variant is out of stock");
      return;
    }

    addItem({
      product: { node: product },
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity,
      selectedOptions: variant.selectedOptions,
    });

    toast.success(`${product.title} added to cart!`, {
      position: "top-center",
    });
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <Loader2 className="w-10 h-10 animate-spin text-accent" />
        </div>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <div className="container-wide py-20 text-center">
          <h1 className="font-heading text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist.</p>
          <Link to="/shop">
            <Button>Back to Shop</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const currentVariant = getCurrentVariant();
  const price = currentVariant?.price || product.priceRange.minVariantPrice;
  const images = product.images.edges;

  // Parse description for structured display
  const descriptionParts = product.description.split('\n\n');
  const mainDescription = descriptionParts[0] || product.description;

  return (
    <Layout>
      <div className="container-wide py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm mb-8" aria-label="Breadcrumb">
          <Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link>
          <ChevronRight className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
          <Link to="/shop" className="text-muted-foreground hover:text-foreground">Shop</Link>
          <ChevronRight className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
          <span className="text-foreground font-medium">{product.title}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-xl bg-secondary">
              {images[selectedImage]?.node ? (
                <img
                  src={images[selectedImage].node.url}
                  alt={images[selectedImage].node.altText || product.title}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  No image available
                </div>
              )}
            </div>
            
            {images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === i ? 'border-accent' : 'border-transparent hover:border-muted'
                    }`}
                    aria-label={`View image ${i + 1}`}
                  >
                    <img
                      src={img.node.url}
                      alt={img.node.altText || `${product.title} ${i + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-accent font-medium mb-2">Pairobin</p>
              <h1 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
                {product.title}
              </h1>
              {mainDescription && (
                <p className="text-muted-foreground leading-relaxed">{mainDescription}</p>
              )}
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="font-heading text-3xl font-bold">
                {price.currencyCode} ${parseFloat(price.amount).toFixed(2)}
              </span>
              <span className="text-sm text-muted-foreground">Tax included</span>
            </div>

            {/* Availability Badge */}
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-green-600">
                {currentVariant?.availableForSale !== false ? 'In Stock - Ready to Ship' : 'Out of Stock'}
              </span>
            </div>

            {/* Options */}
            {product.options.map((option) => (
              option.values.length > 1 && (
                <div key={option.name} className="space-y-3">
                  <label className="font-medium">{option.name}: <span className="text-muted-foreground">{selectedOptions[option.name]}</span></label>
                  <div className="flex flex-wrap gap-2">
                    {option.values.map((value) => (
                      <button
                        key={value}
                        onClick={() => handleOptionChange(option.name, value)}
                        className={`px-4 py-2 rounded-lg border transition-colors ${
                          selectedOptions[option.name] === value
                            ? 'border-accent bg-accent text-accent-foreground'
                            : 'border-border hover:border-accent'
                        }`}
                        aria-pressed={selectedOptions[option.name] === value}
                      >
                        {value}
                      </button>
                    ))}
                  </div>
                </div>
              )
            ))}

            {/* Quantity */}
            <div className="space-y-3">
              <label className="font-medium">Quantity</label>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Add to Cart */}
            <Button 
              size="lg" 
              className="w-full" 
              onClick={handleAddToCart}
              disabled={!currentVariant?.availableForSale}
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              {currentVariant?.availableForSale ? 'Add to Cart' : 'Out of Stock'}
            </Button>

            {/* Shipping & Returns Info - Google Merchant Centre Required */}
            <div className="space-y-4 pt-6 border-t">
              <div className="flex items-start gap-4">
                <Truck className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Free Shipping to US</p>
                  <p className="text-sm text-muted-foreground">Standard delivery 3-7 business days. Express options available at checkout.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Package className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Handling Time</p>
                  <p className="text-sm text-muted-foreground">Orders processed within 1-2 business days.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <RotateCcw className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">30-Day Free Returns</p>
                  <p className="text-sm text-muted-foreground">Return or exchange within 30 days. Free return shipping in the US. <Link to="/returns" className="text-accent hover:underline">View return policy</Link></p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Secure Payment</p>
                  <p className="text-sm text-muted-foreground">All transactions are encrypted and secure. We accept all major credit cards.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Customer Support</p>
                  <p className="text-sm text-muted-foreground">Questions? <Link to="/contact" className="text-accent hover:underline">Contact us</Link> - we respond within 24 hours.</p>
                </div>
              </div>
            </div>

            {/* Product Details Accordion */}
            <div className="space-y-4 pt-6 border-t">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer py-2 font-medium">
                  Product Details
                  <ChevronRight className="w-5 h-5 transform group-open:rotate-90 transition-transform" />
                </summary>
                <div className="pt-2 pb-4 text-sm text-muted-foreground whitespace-pre-line">
                  {product.description}
                </div>
              </details>
              
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer py-2 font-medium">
                  Shipping Information
                  <ChevronRight className="w-5 h-5 transform group-open:rotate-90 transition-transform" />
                </summary>
                <div className="pt-2 pb-4 text-sm text-muted-foreground space-y-2">
                  <p><strong>Domestic Shipping (US):</strong></p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Free standard shipping on all orders</li>
                    <li>Standard delivery: 3-7 business days</li>
                    <li>Express delivery: 1-3 business days (additional cost)</li>
                  </ul>
                  <p className="mt-4"><strong>International Shipping:</strong></p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Available to select countries</li>
                    <li>Delivery times vary by location (7-21 business days)</li>
                    <li>Customer responsible for customs duties and taxes</li>
                  </ul>
                </div>
              </details>
              
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer py-2 font-medium">
                  Returns & Exchanges
                  <ChevronRight className="w-5 h-5 transform group-open:rotate-90 transition-transform" />
                </summary>
                <div className="pt-2 pb-4 text-sm text-muted-foreground space-y-2">
                  <p>We want you to love your Pairobin products. If you're not completely satisfied:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>30-day return window from delivery date</li>
                    <li>Free return shipping within the US</li>
                    <li>Items must be unworn with original tags</li>
                    <li>Full refund to original payment method</li>
                    <li>Exchanges available for different sizes</li>
                  </ul>
                  <p className="mt-2">
                    <Link to="/returns" className="text-accent hover:underline">View full return policy →</Link>
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
