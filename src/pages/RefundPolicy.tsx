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
              Return & Refund Policy
            </h1>
            <p className="text-xl text-primary-foreground/80">
              We want you to be completely satisfied with your purchase. Here's everything you need to know about returns and refunds.
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
              <p className="text-muted-foreground text-sm">Easy Return/Exchange Window</p>
            </div>
            <div className="bg-background rounded-2xl p-6 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <Package className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">New Condition</h3>
              <p className="text-muted-foreground text-sm">Items Must Be Unworn & Undamaged</p>
            </div>
            <div className="bg-background rounded-2xl p-6 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <Mail className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">Quick Processing</h3>
              <p className="text-muted-foreground text-sm">Refunds Within 1-2 Business Days</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="bg-accent/10 rounded-2xl p-8 mb-12">
              <h2 className="font-heading font-bold text-2xl mb-4">30 Days Easy Return/Exchange</h2>
              <p className="text-muted-foreground">
                If you are not 100% satisfied with the items you received, we gladly accept returns and exchanges within 30 days of receipt. Please make sure items are in new condition. Note that overdue requests may not be accepted.
              </p>
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="font-heading font-bold text-2xl mb-6">Am I Allowed to Return or Exchange?</h2>
                <p className="text-muted-foreground mb-4">
                  You can return or exchange within 30 days of receipt for most items in new condition.
                </p>
                <p className="text-muted-foreground">
                  If you want to replace the goods quickly, you can place a new order at the same time. We will refund the original order after we receive the returned items.
                </p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl mb-6">Return & Exchange Requirements</h2>
                <div className="space-y-4">
                  {[
                    "You have 30 days from receipt to decide if an item is right for you",
                    "Return items must be in new condition: unworn, unwashed, unstained, and undamaged",
                    "Please keep the original packaging with PAIROBIN branding",
                    "Buyer is responsible for return shipping costs",
                    "PAIROBIN is not responsible for lost or damaged return packages",
                    "Once your return is received, please allow up to 1 week for processing"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 bg-secondary rounded-xl p-4">
                      <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                        <span className="text-accent font-bold text-sm">{index + 1}</span>
                      </div>
                      <p className="text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl mb-6">Refund Timeline</h2>
                <div className="bg-secondary rounded-2xl p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-3">Refund Processing</h3>
                      <p className="text-muted-foreground">
                        Refunds are resolved within <strong className="text-foreground">1-2 business days</strong> after we receive and inspect your return.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-3">Return Shipping</h3>
                      <p className="text-muted-foreground">
                        Returns are processed within <strong className="text-foreground">1-14 working days</strong> without any handling fees. Buyer bears the return shipping cost.
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
                      <Button variant="accent" size="default" asChild>
                        <a href="mailto:info@pairobin.com">Start Return Request</a>
                      </Button>
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
                      <h4 className="font-semibold mb-1">Wrong Address</h4>
                      <p className="text-sm text-muted-foreground">
                        If you provided the wrong address, please contact us immediately before we ship your order. PAIROBIN is not responsible for wrong addresses provided by customers.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-secondary rounded-xl">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Lost or Damaged Packages</h4>
                      <p className="text-sm text-muted-foreground">
                        PAIROBIN is not responsible for packages lost or damaged during return shipping. We recommend using tracked shipping methods.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-secondary rounded-xl">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Original Packaging</h4>
                      <p className="text-sm text-muted-foreground">
                        Please keep the original plastic bag with PAIROBIN LOGO and seal the bag when returning items.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <p className="text-lg text-muted-foreground mb-6">
                All of our products are made to perfection. We want to ensure your satisfaction!
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
