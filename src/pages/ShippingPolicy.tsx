import { Layout } from "@/components/layout";
import { Truck, Package, Clock, Mail } from "lucide-react";
import { Link } from "react-router-dom";

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
                Policy
              </p>
            </div>
            <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Shipping Policy
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Information about our shipping and delivery process.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            
            {/* Shipping Info */}
            <div className="bg-secondary rounded-2xl p-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Package className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h2 className="font-heading font-bold text-2xl mb-4">Shipping to the United States</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    We currently ship to customers in the United States. Orders are typically 
                    processed within 2–3 business days. Delivery times vary depending on 
                    destination and shipping method selected at checkout. Shipping costs are 
                    calculated at checkout.
                  </p>
                </div>
              </div>
            </div>

            {/* Processing Time */}
            <div className="bg-accent/10 rounded-2xl p-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl mb-3">Processing Time</h3>
                  <p className="text-muted-foreground">
                    Orders are typically processed within <strong className="text-foreground">2–3 business days</strong>. 
                    Once your order ships, you will receive a confirmation email with tracking information.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Points */}
            <div className="space-y-6 mb-12">
              <h2 className="font-heading font-bold text-2xl">Key Information</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-secondary rounded-xl p-6">
                  <h3 className="font-heading font-bold text-lg mb-3">Shipping Destination</h3>
                  <p className="text-muted-foreground">
                    We currently ship to customers in the United States only.
                  </p>
                </div>
                <div className="bg-secondary rounded-xl p-6">
                  <h3 className="font-heading font-bold text-lg mb-3">Shipping Costs</h3>
                  <p className="text-muted-foreground">
                    Shipping costs are calculated at checkout based on your location and selected shipping method.
                  </p>
                </div>
                <div className="bg-secondary rounded-xl p-6">
                  <h3 className="font-heading font-bold text-lg mb-3">Order Tracking</h3>
                  <p className="text-muted-foreground">
                    Once your order ships, you'll receive an email with tracking information.
                  </p>
                </div>
                <div className="bg-secondary rounded-xl p-6">
                  <h3 className="font-heading font-bold text-lg mb-3">Delivery Times</h3>
                  <p className="text-muted-foreground">
                    Delivery times vary depending on your location and the shipping method selected.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                <Mail className="w-7 h-7 text-accent" />
              </div>
              <h2 className="font-heading font-bold text-2xl mb-4">Have Questions About Shipping?</h2>
              <p className="text-primary-foreground/80 mb-6">
                Contact our customer support team for any shipping-related inquiries.
              </p>
              <a 
                href="mailto:support@pairobin.com" 
                className="inline-flex items-center gap-2 text-accent hover:underline font-semibold text-lg"
              >
                support@pairobin.com
              </a>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ShippingPolicy;
