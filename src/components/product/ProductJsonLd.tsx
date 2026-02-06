import { useEffect } from "react";
import { ShopifyProduct } from "@/lib/shopify";

interface ProductJsonLdProps {
  product: ShopifyProduct['node'];
}

export function ProductJsonLd({ product }: ProductJsonLdProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "product-jsonld";

    const price = parseFloat(product.priceRange.minVariantPrice.amount);
    const currency = product.priceRange.minVariantPrice.currencyCode;
    const image = product.images.edges[0]?.node?.url;
    const availability = product.variants.edges.some(v => v.node.availableForSale)
      ? "https://schema.org/InStock"
      : "https://schema.org/OutOfStock";

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: product.title,
      description: product.description,
      image: product.images.edges.map(img => img.node.url),
      brand: {
        "@type": "Brand",
        name: "Pairobin",
      },
      sku: product.variants.edges[0]?.node?.id || product.handle,
      url: `https://pairobin.com/product/${product.handle}`,
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: currency,
        lowPrice: price.toFixed(2),
        highPrice: price.toFixed(2),
        offerCount: product.variants.edges.length,
        availability,
        seller: {
          "@type": "Organization",
          name: "Pairobin",
        },
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: "0",
          currency: "USD",
        },
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "US",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: 6,
            maxValue: 10,
            unitCode: "DAY",
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 2,
            maxValue: 6,
            unitCode: "DAY",
          },
        },
      },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "US",
        returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: 30,
        returnMethod: "https://schema.org/ReturnByMail",
        returnFees: "https://schema.org/ReturnShippingFees",
      },
    };

    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById("product-jsonld");
      if (existing) existing.remove();
    };
  }, [product]);

  return null;
}
