import { Layout } from "@/components/layout";
import { Truck, Package, AlertCircle, Clock, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
              Shipping Policy
            </h1>
            <p className="text-xl text-primary-foreground/80">
              We currently ship to customers in the United States. Learn about our shipping process and delivery times.
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
            <span className="text-lg">2–3 Business Days</span>
            <span className="hidden md:block">|</span>
            <span className="text-sm opacity-90">
              After payment confirmation
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            {/* Shipping Overview */}
            <div className="bg-secondary rounded-2xl p-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Truck className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h2 className="font-heading font-bold text-2xl mb-4">Shipping to the United States</h2>
                  <p className="text-muted-foreground mb-4">
                    We currently ship to customers in the United States. Orders are processed within 2–3 business days after payment confirmation.
                  </p>
                  <p className="text-muted-foreground">
                    Delivery times vary based on destination and the shipping method selected at checkout. Shipping costs are calculated and displayed during checkout before payment is completed.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Information Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-background border border-border rounded-2xl p-6">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">Processing Time</h3>
                <p className="text-muted-foreground text-sm">
                  Orders are processed within 2–3 business days after payment confirmation. You will receive a confirmation email once your order ships.
                </p>
              </div>
              <div className="bg-background border border-border rounded-2xl p-6">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Package className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">Delivery Times</h3>
                <p className="text-muted-foreground text-sm">
                  Delivery times vary based on your location and the shipping method you select at checkout. Tracking information will be provided via email.
                </p>
              </div>
            </div>

            {/* Important Information */}
            <h2 className="font-heading font-bold text-3xl mb-8 text-center">Important Information</h2>
            
            <div className="space-y-6">
              <div className="bg-secondary rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <AlertCircle className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg mb-2">Wrong Address on Order</h3>
                    <p className="text-muted-foreground">
                      Our store is not responsible for incorrectly filled information about the address of the recipient. If you notice an error in your shipping address, please contact us immediately at info@pairobin.com.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Package className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg mb-2">Package Marked as Delivered But Not Received</h3>
                    <p className="text-muted-foreground">
                      If the carrier's website shows your order as delivered but you haven't received it, please contact your local post office. Unfortunately, we cannot influence the delivery process once it's with the carrier.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Truck className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg mb-2">Shipping Costs</h3>
                    <p className="text-muted-foreground">
                      Shipping costs are calculated based on your location and selected shipping method. All costs are displayed during checkout before you complete your payment.
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
          <h2 className="font-heading font-bold text-3xl mb-4">Free Shipping on Orders Over $99</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Enjoy free standard shipping on all orders over $99 within the United States.
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
              <Package className="w-8 h-8" />
              <span>Quality Packaging</span>
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <a 
              href="mailto:info@pairobin.com" 
              className="inline-flex items-center gap-2 text-accent hover:underline font-semibold"
            >
              <Mail className="w-5 h-5" />
              info@pairobin.com
            </a>
            <a 
              href="tel:+8618060061837" 
              className="inline-flex items-center gap-2 text-accent hover:underline font-semibold"
            >
              <Phone className="w-5 h-5" />
              +86 180 6006 1837
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            Business Hours: Monday – Friday, 9:00 AM – 6:00 PM
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default ShippingPolicy;
