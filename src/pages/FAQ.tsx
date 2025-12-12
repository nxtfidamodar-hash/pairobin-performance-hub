import { Layout } from "@/components/layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, Package, CreditCard, RotateCcw, Truck, Ruler, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const faqCategories = [
  {
    id: "orders",
    icon: Package,
    title: "Orders & Payments",
    questions: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, Google Pay, and Shop Pay. All transactions are secured with industry-standard SSL encryption."
      },
      {
        question: "Can I modify or cancel my order?",
        answer: "Orders can be modified or canceled within 2 hours of placement. After this window, orders enter processing and cannot be changed. Please contact us immediately at info@pairobin.com if you need to make changes."
      },
      {
        question: "How do I track my order?",
        answer: "Once your order ships, you'll receive an email with tracking information. You can also track your order by logging into your account on our website and viewing your order history."
      },
      {
        question: "Is it safe to shop on your website?",
        answer: "Absolutely! We use industry-standard SSL encryption to protect your personal and payment information. We never store your complete credit card details on our servers."
      },
    ]
  },
  {
    id: "shipping",
    icon: Truck,
    title: "Shipping & Delivery",
    questions: [
      {
        question: "What are your shipping times?",
        answer: "Processing time is 6-10 days. Shipping times vary by location: USA (2-6 business days), Canada (6-10 business days), UK (4-8 business days), EU (6-10 business days), Australia (6-9 business days), and other countries (14-24 business days)."
      },
      {
        question: "Do you offer free shipping?",
        answer: "We offer free standard shipping on all orders over $100 within the United States. International shipping rates are calculated at checkout based on your location and order weight."
      },
      {
        question: "Do you ship internationally?",
        answer: "Yes! We ship to over 100 countries worldwide. International shipping times and rates vary by destination. All applicable customs duties and taxes are the responsibility of the customer."
      },
      {
        question: "What if my package is marked as delivered but I didn't receive it?",
        answer: "Please contact your local post office first as packages are sometimes held there. If you still can't locate your package, contact us within 7 days and we'll help investigate with the carrier."
      },
    ]
  },
  {
    id: "returns",
    icon: RotateCcw,
    title: "Returns & Exchanges",
    questions: [
      {
        question: "What is your return policy?",
        answer: "We offer a 30-day return/exchange policy. Items must be in new condition, unworn, and in original packaging. The buyer is responsible for return shipping costs. Refunds are processed within 1-2 days of receiving the return."
      },
      {
        question: "How do I initiate a return?",
        answer: "Contact us at info@pairobin.com with your order number and reason for return. We'll provide you with return instructions and address. Please keep your original packaging for returns."
      },
      {
        question: "How long does it take to process a refund?",
        answer: "Once we receive your return, refunds are processed within 1-2 business days. The refund will appear on your original payment method within 5-10 business days depending on your bank."
      },
      {
        question: "Can I exchange for a different size?",
        answer: "Yes! If you need a different size, you can place a new order immediately and return the original item for a full refund. This ensures you get your new size as quickly as possible."
      },
    ]
  },
  {
    id: "sizing",
    icon: Ruler,
    title: "Sizing & Fit",
    questions: [
      {
        question: "How do I find my correct size?",
        answer: "We recommend measuring your foot length in centimeters and referring to our size chart on each product page. If you're between sizes, we recommend sizing up for a comfortable fit."
      },
      {
        question: "Do your shoes run true to size?",
        answer: "Our shoes generally run true to size. However, some styles may fit slightly differently. Check individual product descriptions for specific sizing recommendations."
      },
      {
        question: "What if the shoes don't fit?",
        answer: "No problem! We offer free exchanges within 30 days. Simply contact us and we'll help you get the right size. For fastest service, order your new size and return the original pair."
      },
    ]
  },
  {
    id: "products",
    icon: HelpCircle,
    title: "Products & Care",
    questions: [
      {
        question: "How should I care for my shoes?",
        answer: "For best results, clean your shoes with a damp cloth and mild soap. Air dry away from direct heat or sunlight. Avoid machine washing unless specifically noted as machine-washable."
      },
      {
        question: "Are your products suitable for wide feet?",
        answer: "Many of our styles accommodate wider feet. Look for products labeled 'Wide Fit' or check the product description. Running and walking shoes typically offer more room in the toe box."
      },
      {
        question: "What materials do you use?",
        answer: "We use premium materials including breathable mesh uppers, cushioned EVA midsoles, durable rubber outsoles, and moisture-wicking linings. Many products feature our proprietary FlowFoam™ and AirMesh™ technologies."
      },
    ]
  },
];

const FAQ = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Help Center
            </p>
            <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Find answers to common questions about orders, shipping, returns, and more.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 bg-secondary rounded-2xl p-6">
                <h3 className="font-heading font-bold text-lg mb-4">Categories</h3>
                <nav className="space-y-2">
                  {faqCategories.map((category) => (
                    <a
                      key={category.id}
                      href={`#${category.id}`}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-background transition-colors group"
                    >
                      <category.icon className="w-5 h-5 text-accent" />
                      <span className="group-hover:text-accent transition-colors">{category.title}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* FAQ Content */}
            <div className="lg:col-span-2 space-y-12">
              {faqCategories.map((category) => (
                <div key={category.id} id={category.id} className="scroll-mt-32">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h2 className="font-heading font-bold text-2xl">{category.title}</h2>
                  </div>
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((item, index) => (
                      <AccordionItem
                        key={index}
                        value={`${category.id}-${index}`}
                        className="bg-secondary rounded-xl border-0 px-6"
                      >
                        <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-5">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 bg-secondary">
        <div className="container-wide">
          <div className="bg-primary rounded-3xl p-8 md:p-12 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center">
              <MessageCircle className="w-8 h-8 text-accent" />
            </div>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary-foreground mb-4">
              Still Have Questions?
            </h2>
            <p className="text-primary-foreground/70 max-w-md mx-auto mb-8">
              Our customer support team is here to help. Reach out and we'll get back to you within 24 hours.
            </p>
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
