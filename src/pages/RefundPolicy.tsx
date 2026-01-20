import { Layout } from "@/components/layout";
import { RotateCcw, CheckCircle, Package, Clock, Mail, Phone } from "lucide-react";
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
              We want you to be completely satisfied with your purchase. Here's everything you need to know about our returns and refunds process.
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
              <p className="text-muted-foreground text-sm">Return Window from Delivery</p>
            </div>
            <div className="bg-background rounded-2xl p-6 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <Package className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">Original Condition</h3>
              <p className="text-muted-foreground text-sm">Unused & Original Packaging Required</p>
            </div>
            <div className="bg-background rounded-2xl p-6 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <CheckCircle className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">Original Payment</h3>
              <p className="text-muted-foreground text-sm">Refund to Original Method</p>
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
              <h2 className="font-heading font-bold text-2xl mb-4">30-Day Return Policy</h2>
              <p className="text-muted-foreground">
                We accept returns within 30 days of delivery. Items must be unused, in original condition, and returned in their original packaging. Once the returned item is received and inspected, refunds will be issued to the original payment method within a reasonable processing timeframe.
              </p>
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="font-heading font-bold text-2xl mb-6">Return Requirements</h2>
                <div className="space-y-4">
                  {[
                    "Returns are accepted within 30 days of delivery",
                    "Items must be unused and in original condition",
                    "Items must be returned in their original packaging",
                    "Return shipping costs may apply unless the item is defective or incorrect",
                    "Pairobin is not responsible for lost or damaged return packages"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 bg-secondary rounded-xl p-4">
                      <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                        <CheckCircle className="w-4 h-4 text-accent" />
                      </div>
                      <p className="text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl mb-6">Refund Process</h2>
                <div className="bg-secondary rounded-2xl p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-3">Inspection & Processing</h3>
                      <p className="text-muted-foreground">
                        Once your return is received, we will inspect the item. If approved, your refund will be processed within a reasonable timeframe.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-3">Refund Method</h3>
                      <p className="text-muted-foreground">
                        Refunds will be issued to the original payment method used for the purchase. Please allow time for your bank to process the refund.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl mb-6">How to Initiate a Return</h2>
                <div className="bg-primary text-primary-foreground rounded-2xl p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                      <Mail className="w-7 h-7 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl mb-3">Contact Us to Start Your Return</h3>
                      <p className="text-primary-foreground/80 mb-4">
                        Email us at <a href="mailto:info@pairobin.com" className="text-accent hover:underline font-semibold">info@pairobin.com</a> with your order number and reason for return. We'll provide you with return instructions and the shipping address.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Button variant="accent" size="default" asChild>
                          <a href="mailto:info@pairobin.com">Email Us</a>
                        </Button>
                        <Button variant="outlineLight" size="default" asChild>
                          <a href="https://wa.me/8618060061837">WhatsApp</a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl mb-6">Important Notes</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-secondary rounded-xl">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Defective or Incorrect Items</h4>
                      <p className="text-sm text-muted-foreground">
                        If you received a defective or incorrect item, please contact us immediately. Return shipping costs will be covered for these cases.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-secondary rounded-xl">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Return Shipping</h4>
                      <p className="text-sm text-muted-foreground">
                        Unless the item is defective or we made an error, return shipping costs are the responsibility of the customer. We recommend using tracked shipping.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-secondary rounded-xl">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Original Packaging</h4>
                      <p className="text-sm text-muted-foreground">
                        Please keep and use the original packaging when returning items. This helps ensure your return arrives safely.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <p className="text-lg text-muted-foreground mb-6">
                Have questions about our return policy? We're here to help.
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
