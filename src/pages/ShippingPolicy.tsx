import { Layout } from "@/components/layout";
import { Truck, Globe, Package, AlertCircle, Clock } from "lucide-react";

const shippingTimes = [
  { region: "United States", time: "2-6 business days", icon: "🇺🇸" },
  { region: "Canada", time: "6-10 business days", icon: "🇨🇦" },
  { region: "United Kingdom", time: "4-8 business days", icon: "🇬🇧" },
  { region: "European Union", time: "6-10 business days", icon: "🇪🇺" },
  { region: "Australia", time: "6-9 business days", icon: "🇦🇺" },
  { region: "Mexico, Central/South America", time: "14 business days", icon: "🌎" },
  { region: "Asian Countries", time: "14 business days", icon: "🌏" },
  { region: "Other Countries", time: "14-24 business days", icon: "🌍" },
];

const ShippingPolicy = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Truck className="w-8 h-8 text-accent" />
              <p className="text-accent font-semibold text-sm uppercase tracking-wider">
                Delivery Info
              </p>
            </div>
            <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Shipping & Delivery
            </h1>
            <p className="text-xl text-primary-foreground/80">
              We deliver to hundreds of customers across the world every day, and we strive to provide you with services of the highest level.
            </p>
          </div>
        </div>
      </section>

      {/* Processing Time Banner */}
      <section className="py-8 bg-accent text-accent-foreground">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6" />
              <span className="font-heading font-bold text-lg">Processing Time:</span>
            </div>
            <span className="text-lg">6-10 Days</span>
            <span className="hidden md:block">|</span>
            <span className="text-sm opacity-90">
              New collections may take a bit longer due to warehouse updates
            </span>
          </div>
        </div>
      </section>

      {/* Shipping Times Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl mb-4">Shipping Times by Region</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our goal is to offer you the best shipping options, no matter where you live. Shipping times vary depending on your location.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {shippingTimes.map((item) => (
              <div key={item.region} className="bg-secondary rounded-2xl p-6 text-center hover:shadow-card transition-shadow">
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="font-heading font-bold text-lg mb-2">{item.region}</h3>
                <p className="text-accent font-semibold">{item.time}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-accent/10 rounded-2xl p-6 max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <Package className="w-6 h-6 text-accent shrink-0 mt-1" />
              <div>
                <h3 className="font-heading font-bold text-lg mb-2">📦 USA & Canada Special Notice</h3>
                <p className="text-muted-foreground">
                  Delivery to USA & Canada is typically 7–15 business days. This is a temporary adjustment, and we're doing everything possible to speed up processing and delivery while keeping our quality high. Thank you for your patience!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-3xl mb-8 text-center">Important Information</h2>
            
            <div className="space-y-6">
              <div className="bg-background rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <AlertCircle className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg mb-2">Wrong Address on Order</h3>
                    <p className="text-muted-foreground">
                      Our store is not responsible for incorrectly filled information about the address of the recipient. In such cases, please contact us as soon as possible. We do our best to avoid such situations, but if you notice an error, reach out to us immediately.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-background rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Package className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg mb-2">Package Marked as Delivered But Not Received</h3>
                    <p className="text-muted-foreground">
                      In cases when you see information on the carrier's website that your order has already been delivered, but you have not received it, please contact the local post office. You can do this via email or visit the post office. Unfortunately, we cannot influence the delivery process once it's with the carrier.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-background rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg mb-2">Customs Fees & Import Duties</h3>
                    <p className="text-muted-foreground">
                      We are not responsible for any duties, taxes, or customs fees under any circumstances. These charges are determined by your country's customs office and are the responsibility of the customer. Please check your local customs regulations before ordering.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-background rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Truck className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg mb-2">Refused or Undeliverable Packages</h3>
                    <p className="text-muted-foreground">
                      If you refuse to accept a parcel, or the local carrier refuses to deliver a parcel, we have the right to return the package and not refund its cost. Please ensure someone is available to receive your package.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Shipping Banner */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <h2 className="font-heading font-bold text-3xl mb-4">Free Shipping on Orders Over $100</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Enjoy free standard shipping on all orders over $100 within the United States. International shipping rates are calculated at checkout.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center gap-3">
              <Truck className="w-8 h-8" />
              <span>Fast Delivery</span>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="w-8 h-8" />
              <span>Global Shipping</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="container-wide text-center">
          <h2 className="font-heading font-bold text-2xl mb-4">Have Questions About Your Order?</h2>
          <p className="text-muted-foreground mb-6">
            Contact our customer support team for any shipping-related inquiries.
          </p>
          <a 
            href="mailto:info@pairobin.com" 
            className="inline-flex items-center gap-2 text-accent hover:underline font-semibold text-lg"
          >
            info@pairobin.com
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default ShippingPolicy;
