import { Layout } from "@/components/layout";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Heart, ShoppingBag, Truck, Shield, RefreshCw, Minus, Plus, ChevronRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { fetchProductByHandle, fetchProducts, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { ShopifyProductCard } from "@/components/product/ShopifyProductCard";
import { ProductJsonLd } from "@/components/product/ProductJsonLd";

const ProductDetail = () => {
  const { id: handle } = useParams();
  const [product, setProduct] = useState<ShopifyProduct['node'] | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<ShopifyProduct[]>([]);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<ShopifyProduct['node']['variants']['edges'][0]['node'] | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const addItem = useCartStore((state) => state.addItem);
  const isAddingToCart = useCartStore((state) => state.isLoading);

  useEffect(() => {
    const loadProduct = async () => {
      if (!handle) return;
      
      setIsLoading(true);
      try {
        const [fetchedProduct, fetchedRelated] = await Promise.all([
          fetchProductByHandle(handle),
          fetchProducts(4)
        ]);
        
        setProduct(fetchedProduct);
        // Filter out current product from related
        setRelatedProducts(fetchedRelated.filter(p => p.node.handle !== handle).slice(0, 3));
        
        // Reset selections
        setSelectedSize(null);
        setSelectedVariant(null);
        setSelectedImage(0);
        setQuantity(1);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProduct();
  }, [handle]);

  // Update selected variant when size changes
  useEffect(() => {
    if (product && selectedSize) {
      const variant = product.variants.edges.find(
        v => v.node.selectedOptions.some(opt => opt.value === selectedSize)
      )?.node;
      setSelectedVariant(variant || null);
    }
  }, [selectedSize, product]);

  const handleAddToCart = async () => {
    if (!product || !selectedVariant) {
      toast.error("Please select a size");
      return;
    }

    await addItem({
      product: { node: product },
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity,
      selectedOptions: selectedVariant.selectedOptions,
    });

    toast.success("Added to cart!", {
      description: `${product.title} (${selectedSize}) x ${quantity}`,
    });
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
        </div>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <h1 className="font-heading font-bold text-2xl mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/shop">Continue Shopping</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const images = product.images.edges;
  const sizes = product.options.find(opt => opt.name.toLowerCase() === 'size')?.values || [];
  const price = selectedVariant ? parseFloat(selectedVariant.price.amount) : parseFloat(product.priceRange.minVariantPrice.amount);
  const currency = product.priceRange.minVariantPrice.currencyCode;

  return (
    <Layout>
      <ProductJsonLd product={product} />
      {/* Breadcrumb */}
      <div className="bg-secondary py-4">
        <div className="container-wide">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <Link to="/shop" className="text-muted-foreground hover:text-foreground">Shop</Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-foreground font-medium line-clamp-1">{product.title}</span>
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
                {images[selectedImage]?.node ? (
                  <img
                    src={images[selectedImage].node.url}
                    alt={images[selectedImage].node.altText || product.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-muted-foreground">No image</span>
                  </div>
                )}
              </div>
              {images.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {images.slice(0, 4).map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-square rounded-xl overflow-hidden border-2 transition-colors ${
                        selectedImage === index ? 'border-accent' : 'border-transparent hover:border-border'
                      }`}
                    >
                      <img src={image.node.url} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Details */}
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">
                Pairobin
              </p>
              <h1 className="font-heading font-black text-3xl md:text-4xl mb-6">
                {product.title}
              </h1>

              {/* Price */}
              <div className="flex items-center gap-4 mb-8">
                <span className="font-heading font-black text-4xl text-foreground">
                  ${price.toFixed(2)}
                </span>
                <span className="text-lg text-muted-foreground">{currency}</span>
              </div>

              {/* Size Selection */}
              {sizes.length > 0 && (
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-medium">Select Size</p>
                  </div>
                  <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                    {sizes.map((size) => {
                      const variant = product.variants.edges.find(
                        v => v.node.selectedOptions.some(opt => opt.value === size)
                      )?.node;
                      const isAvailable = variant?.availableForSale;
                      
                      return (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          disabled={!isAvailable}
                          className={`py-3 rounded-lg font-medium text-xs sm:text-sm transition-colors ${
                            selectedSize === size
                              ? 'bg-primary text-primary-foreground'
                              : isAvailable
                                ? 'bg-secondary hover:bg-secondary/80'
                                : 'bg-secondary/50 text-muted-foreground cursor-not-allowed line-through'
                          }`}
                        >
                          {size}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

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
                <Button 
                  variant="accent" 
                  size="lg" 
                  className="flex-1" 
                  onClick={handleAddToCart}
                  disabled={isAddingToCart || (sizes.length > 0 && !selectedSize)}
                >
                  {isAddingToCart ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      <ShoppingBag className="w-5 h-5 mr-2" />
                      Add to Cart
                    </>
                  )}
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
              {product.description && (
                <div className="border-t border-border pt-8">
                  <h3 className="font-heading font-bold text-xl mb-4">About This Product</h3>
                  <p className="text-muted-foreground whitespace-pre-line">{product.description}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section-padding bg-secondary">
          <div className="container-wide">
            <h2 className="section-title mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((product) => (
                <ShopifyProductCard key={product.node.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ProductDetail;
