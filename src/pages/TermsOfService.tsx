import { Layout } from "@/components/layout";
import { FileText } from "lucide-react";

const TermsOfService = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-8 h-8 text-accent" />
              <p className="text-accent font-semibold text-sm uppercase tracking-wider">
                Legal
              </p>
            </div>
            <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Last updated: January 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-secondary rounded-2xl p-8 mb-12">
              <h2 className="font-heading font-bold text-2xl mb-4 mt-0">Overview</h2>
              <p className="text-muted-foreground mb-0">
                This website is operated by PAIROBIN. Throughout the site, the terms "we", "us" and "our" refer to PAIROBIN. PAIROBIN offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.
              </p>
            </div>

            <p className="text-muted-foreground mb-6">
              By visiting our site and/or purchasing something from us, you engage in our "Service" and agree to be bound by the following terms and conditions ("Terms of Service", "Terms"), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/or contributors of content.
            </p>

            <p className="text-muted-foreground mb-8">
              Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services.
            </p>

            <h2 className="font-heading font-bold text-2xl mb-6">Section 1 - Online Store Terms</h2>
            <p className="text-muted-foreground mb-4">
              By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.
            </p>
            <p className="text-muted-foreground mb-4">
              You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).
            </p>
            <p className="text-muted-foreground mb-8">
              You must not transmit any worms or viruses or any code of a destructive nature. A breach or violation of any of the Terms will result in an immediate termination of your Services.
            </p>

            <h2 className="font-heading font-bold text-2xl mb-6">Section 2 - General Conditions</h2>
            <p className="text-muted-foreground mb-4">
              We reserve the right to refuse service to anyone for any reason at any time.
            </p>
            <p className="text-muted-foreground mb-4">
              You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks.
            </p>
            <p className="text-muted-foreground mb-8">
              You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us.
            </p>

            <h2 className="font-heading font-bold text-2xl mb-6">Section 3 - Accuracy, Completeness and Timeliness of Information</h2>
            <p className="text-muted-foreground mb-4">
              We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this site is at your own risk.
            </p>
            <p className="text-muted-foreground mb-8">
              This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site. You agree that it is your responsibility to monitor changes to our site.
            </p>

            <h2 className="font-heading font-bold text-2xl mb-6">Section 4 - Modifications to the Service and Prices</h2>
            <p className="text-muted-foreground mb-4">
              Prices for our products are subject to change without notice.
            </p>
            <p className="text-muted-foreground mb-8">
              We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time. We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.
            </p>

            <h2 className="font-heading font-bold text-2xl mb-6">Section 5 - Products or Services</h2>
            <p className="text-muted-foreground mb-4">
              Certain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to return or exchange only according to our Return Policy.
            </p>
            <p className="text-muted-foreground mb-4">
              We have made every effort to display as accurately as possible the colors and images of our products that appear at the store. We cannot guarantee that your computer monitor's display of any color will be accurate.
            </p>
            <p className="text-muted-foreground mb-8">
              We reserve the right, but are not obligated, to limit the sales of our products or Services to any person, geographic region or jurisdiction. We may exercise this right on a case-by-case basis. We reserve the right to limit the quantities of any products or services that we offer. All descriptions of products or product pricing are subject to change at anytime without notice, at the sole discretion of us. We reserve the right to discontinue any product at any time. Any offer for any product or service made on this site is void where prohibited.
            </p>

            <h2 className="font-heading font-bold text-2xl mb-6">Section 6 - Accuracy of Billing and Account Information</h2>
            <p className="text-muted-foreground mb-4">
              We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. These restrictions may include orders placed by or under the same customer account, the same credit card, and/or orders that use the same billing and/or shipping address.
            </p>
            <p className="text-muted-foreground mb-8">
              You agree to provide current, complete and accurate purchase and account information for all purchases made at our store. You agree to promptly update your account and other information, including your email address and credit card numbers and expiration dates, so that we can complete your transactions and contact you as needed.
            </p>

            <h2 className="font-heading font-bold text-2xl mb-6">Section 7 - Optional Tools</h2>
            <p className="text-muted-foreground mb-4">
              We may provide you with access to third-party tools over which we neither monitor nor have any control nor input.
            </p>
            <p className="text-muted-foreground mb-8">
              You acknowledge and agree that we provide access to such tools "as is" and "as available" without any warranties, representations or conditions of any kind and without any endorsement. We shall have no liability whatsoever arising from or relating to your use of optional third-party tools.
            </p>

            <h2 className="font-heading font-bold text-2xl mb-6">Section 8 - Third-Party Links</h2>
            <p className="text-muted-foreground mb-4">
              Certain content, products and services available via our Service may include materials from third-parties.
            </p>
            <p className="text-muted-foreground mb-8">
              Third-party links on this site may direct you to third-party websites that are not affiliated with us. We are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability or responsibility for any third-party materials or websites, or for any other materials, products, or services of third-parties.
            </p>

            <h2 className="font-heading font-bold text-2xl mb-6">Section 9 - User Comments, Feedback and Other Submissions</h2>
            <p className="text-muted-foreground mb-4">
              If, at our request, you send certain specific submissions (for example contest entries) or without a request from us you send creative ideas, suggestions, proposals, plans, or other materials, whether online, by email, by postal mail, or otherwise (collectively, 'comments'), you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any comments that you forward to us.
            </p>
            <p className="text-muted-foreground mb-8">
              We are and shall be under no obligation (1) to maintain any comments in confidence; (2) to pay compensation for any comments; or (3) to respond to any comments.
            </p>

            <h2 className="font-heading font-bold text-2xl mb-6">Section 10 - Personal Information</h2>
            <p className="text-muted-foreground mb-8">
              Your submission of personal information through the store is governed by our Privacy Policy.
            </p>

            <h2 className="font-heading font-bold text-2xl mb-6">Section 11 - Errors, Inaccuracies and Omissions</h2>
            <p className="text-muted-foreground mb-8">
              Occasionally there may be information on our site or in the Service that contains typographical errors, inaccuracies or omissions that may relate to product descriptions, pricing, promotions, offers, product shipping charges, transit times and availability. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders if any information in the Service or on any related website is inaccurate at any time without prior notice (including after you have submitted your order).
            </p>

            <h2 className="font-heading font-bold text-2xl mb-6">Section 12 - Prohibited Uses</h2>
            <p className="text-muted-foreground mb-8">
              In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code; (h) to collect or track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service.
            </p>

            <h2 className="font-heading font-bold text-2xl mb-6">Section 13 - Disclaimer of Warranties; Limitation of Liability</h2>
            <p className="text-muted-foreground mb-4">
              We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free.
            </p>
            <p className="text-muted-foreground mb-8">
              We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable. You expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all products and services delivered to you through the service are (except as expressly stated by us) provided 'as is' and 'as available' for your use, without any representation, warranties or conditions of any kind, either express or implied.
            </p>

            <h2 className="font-heading font-bold text-2xl mb-6">Section 14 - Indemnification</h2>
            <p className="text-muted-foreground mb-8">
              You agree to indemnify, defend and hold harmless PAIROBIN and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand, including reasonable attorneys' fees, made by any third-party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference, or your violation of any law or the rights of a third-party.
            </p>

            <h2 className="font-heading font-bold text-2xl mb-6">Section 15 - Severability</h2>
            <p className="text-muted-foreground mb-8">
              In the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and enforceability of any other remaining provisions.
            </p>

            <h2 className="font-heading font-bold text-2xl mb-6">Section 16 - Termination</h2>
            <p className="text-muted-foreground mb-8">
              The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes. These Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of Service at any time by notifying us that you no longer wish to use our Services, or when you cease using our site.
            </p>

            <h2 className="font-heading font-bold text-2xl mb-6">Section 17 - Entire Agreement</h2>
            <p className="text-muted-foreground mb-8">
              The failure of us to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision. These Terms of Service and any policies or operating rules posted by us on this site or in respect to The Service constitutes the entire agreement and understanding between you and us and govern your use of the Service, superseding any prior or contemporaneous agreements, communications and proposals, whether oral or written, between you and us.
            </p>

            <h2 className="font-heading font-bold text-2xl mb-6">Section 18 - Governing Law</h2>
            <p className="text-muted-foreground mb-8">
              These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with applicable laws.
            </p>

            <h2 className="font-heading font-bold text-2xl mb-6">Section 19 - Changes to Terms of Service</h2>
            <p className="text-muted-foreground mb-8">
              You can review the most current version of the Terms of Service at any time at this page. We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes to these Terms of Service constitutes acceptance of those changes.
            </p>

            <div className="bg-secondary rounded-2xl p-8 mt-12">
              <h3 className="font-heading font-bold text-xl mb-4 mt-0">Contact Information</h3>
              <p className="text-muted-foreground mb-0">
                Questions about the Terms of Service should be sent to us at{" "}
                <a href="mailto:info@pairobin.com" className="text-accent hover:underline">
                  info@pairobin.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsOfService;
