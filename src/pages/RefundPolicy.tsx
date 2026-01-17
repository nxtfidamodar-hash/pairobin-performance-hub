import { Layout } from "@/components/layout";
import { RotateCcw, CheckCircle, Package, Clock, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const RefundPolicy = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <RotateCcw className="w-8 h-8 text-accent" />
              <p className="text-accent font-semibold text-sm uppercase tracking-wider">
                Policy
              </p>
            </div>
            <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Returns & Refunds Policy
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Information about our return and refund process.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-12 bg-secondary">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-background rounded-2xl p-6 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <Clock className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">30 Days</h3>
              <p className="text-muted-foreground text-sm">Return Window</p>
            </div>
            <div className="bg-background rounded-2xl p-6 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <Package className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">Original Condition</h3>
              <p className="text-muted-foreground text-sm">Items Must Be Unused</p>
            </div>
            <div className="bg-background rounded-2xl p-6 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <Mail className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">Quick Processing</h3>
              <p className="text-muted-foreground text-sm">Refunds Processed Promptly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            
            {/* Main Policy */}
            <div className="bg-accent/10 rounded-2xl p-8 mb-12">
              <h2 className="font-heading font-bold text-2xl mb-4">Our Return Policy</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We accept returns within 30 days of delivery. Items must be unused, in original 
                condition, and returned in original packaging. Once the returned item is received 
                and inspected, refunds will be processed to the original payment method within a 
                reasonable timeframe. Return shipping costs may apply unless the item is defective 
                or incorrect.
              </p>
            </div>

            {/* Requirements */}
            <div className="mb-12">
              <h2 className="font-heading font-bold text-2xl mb-6">Return Requirements</h2>
              <div className="space-y-4">
                {[
                  "Returns must be initiated within 30 days of delivery",
                  "Items must be unused and in original condition",
                  "Items must be returned in original packaging",
                  "Return shipping costs may apply (unless item is defective or incorrect)",
                  "Refunds are processed to the original payment method"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 bg-secondary rounded-xl p-4">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-5 h-5 text-accent" />
                    </div>
                    <p className="text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Refund Timeline */}
            <div className="mb-12">
              <h2 className="font-heading font-bold text-2xl mb-6">Refund Process</h2>
              <div className="bg-secondary rounded-2xl p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-heading font-bold text-lg mb-3">Inspection</h3>
                    <p className="text-muted-foreground">
                      Once we receive your return, we will inspect the item to ensure it meets 
                      our return requirements.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg mb-3">Refund Processing</h3>
                    <p className="text-muted-foreground">
                      After inspection, refunds will be processed to your original payment 
                      method within a reasonable timeframe.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* How to Initiate */}
            <div className="mb-12">
              <h2 className="font-heading font-bold text-2xl mb-6">How to Initiate a Return</h2>
              <div className="bg-primary text-primary-foreground rounded-2xl p-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <Mail className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl mb-3">Contact Us to Start Your Return</h3>
                    <p className="text-primary-foreground/80 mb-4">
                      Email us at <a href="mailto:support@pairobin.com" className="text-accent hover:underline font-semibold">support@pairobin.com</a> with 
                      your order number and reason for return. We'll provide you with return instructions.
                    </p>
                    <Button variant="accent" size="default" asChild>
                      <a href="mailto:support@pairobin.com">Start Return Request</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-6">
                Have questions about returns or refunds?
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="default" size="lg" asChild>
                  <Link to="/contact">Contact Support</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/faq">View FAQ</Link>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RefundPolicy;
