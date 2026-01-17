import { Layout } from "@/components/layout";
import { Shield } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-accent" />
              <p className="text-accent font-semibold text-sm uppercase tracking-wider">
                Legal
              </p>
            </div>
            <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Privacy Policy
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
              <h2 className="font-heading font-bold text-2xl mb-4 mt-0">Privacy Statement</h2>
              <p className="text-muted-foreground mb-0">
                We take your privacy seriously and this privacy statement explains how PAIROBIN (collectively, "we," "us," or "our") collect, use, share and process your information.
              </p>
            </div>

            <h2 className="font-heading font-bold text-2xl mb-6">Collection and Use of Personal Data</h2>
            <p className="text-muted-foreground mb-6">
              Personal data is information that can be used to directly or indirectly identify you. Personal data also includes anonymous data that is linked to information that can be used to directly or indirectly identify you. Personal data does not include data that has been irreversibly anonymized or aggregated so that it can no longer enable us, whether in combination with other information or otherwise, to identify you.
            </p>

            <h3 className="font-heading font-bold text-xl mb-4">Promoting Safety and Security</h3>
            <p className="text-muted-foreground mb-6">
              We abide by the principles of legality, legitimacy, and transparency, use, and process the least data within a limited scope of purpose, and take technical and administrative measures to protect the security of the data. We use personal data to help verify accounts and user activity, as well as to promote safety and security, such as by monitoring fraud and investigating suspicious or potentially illegal activity or violations of our terms or policies. Such processing is based on our legitimate interest in helping ensure the safety of our products and services.
            </p>

            <h2 className="font-heading font-bold text-2xl mb-6">What Personal Data We Collect</h2>
            
            <h3 className="font-heading font-bold text-xl mb-4">Data You Provide</h3>
            <p className="text-muted-foreground mb-6">
              We collect the personal data you provide when you use our products and services or otherwise interact with us, such as when you create an account, contact us, participate in an online survey, use our online help or online chat tool. If you make a purchase, we collect personal data in connection with the purchase. This data includes your payment data, such as your credit or debit card number and other card information, and other account and authentication information, as well as billing, shipping, and contact details.
            </p>

            <h3 className="font-heading font-bold text-xl mb-4">Data About Use of Our Services and Products</h3>
            <p className="text-muted-foreground mb-6">
              When you visit our website/application, we may collect data about the type of device you use, your device's unique identifier, the IP address of your device, your operating system, the type of Internet browser that you use, usage information, diagnostic information, and location information from or about the computers, phones, or other devices on which you install or access our products or services. Where available, our services may use GPS, your IP address, and other technologies to determine a device's approximate location to allow us to improve our products and services.
            </p>

            <h2 className="font-heading font-bold text-2xl mb-6">How We Use Your Personal Data</h2>
            <p className="text-muted-foreground mb-4">
              Generally speaking, we use personal data to provide, improve, and develop our products and services, to communicate with you, to offer you targeted advertisements and services, and to protect us and our customers.
            </p>

            <h3 className="font-heading font-bold text-xl mb-4">Providing, Improving, and Developing Our Products and Services</h3>
            <p className="text-muted-foreground mb-6">
              We use personal data to help us provide, improve, and develop our products, services, and advertising. This includes using personal data for purposes such as data analysis, research, and audits. Such processing is based on our legitimate interest in offering you products and services and for business continuity. If you enter a contest, or other promotion, we may use the personal data you provide to administer those programs.
            </p>

            <h3 className="font-heading font-bold text-xl mb-4">Communicating With You</h3>
            <p className="text-muted-foreground mb-6">
              Subject to your prior express consent, we may use personal data to send you marketing communications in relation to our own products and services, communicate with you about your account or transactions, and inform you about our policies and terms. If you no longer wish to receive email communications for marketing purposes, please contact us to opt-out.
            </p>

            <div className="bg-accent/10 rounded-xl p-6 mb-8">
              <p className="text-sm text-muted-foreground mb-0">
                <strong>NOTE:</strong> For any of the uses of your data described above that require your prior express consent, note that you may withdraw your consent by contacting us.
              </p>
            </div>

            <h2 className="font-heading font-bold text-2xl mb-6">Definition of "Cookies"</h2>
            <p className="text-muted-foreground mb-6">
              Cookies are small pieces of text used to store information on web browsers. Cookies are widely used to store and receive identifiers and other information on computers, phones, and other devices. We also use other technologies, including data we store on your web browser or device, identifiers associated with your device, and other software, for similar purposes. In this Cookie Statement, we refer to all of these technologies as "cookies."
            </p>

            <h2 className="font-heading font-bold text-2xl mb-6">Use of Cookies</h2>
            <p className="text-muted-foreground mb-6">
              We use cookies to provide, protect, and improve our products and services, such as by personalizing content, offering and measuring advertisements, understanding user behavior, and providing a safer experience. Please note that the specific cookies we may use vary depending on the specific websites and services you use.
            </p>

            <h2 className="font-heading font-bold text-2xl mb-6">Disclosure of Personal Data</h2>
            <p className="text-muted-foreground mb-6">
              We make certain personal data available to strategic partners that work with us to provide our products and services or help us market to customers. Personal data will only be shared by us with these companies in order to provide or improve our products, services, and advertising; it will not be shared with third parties for their own marketing purposes without your prior express consent.
            </p>

            <h2 className="font-heading font-bold text-2xl mb-6">Data Security, Integrity, and Retention</h2>
            <p className="text-muted-foreground mb-6">
              We use reasonable technical, administrative, and physical security measures designed to safeguard and help prevent unauthorized access to your data, and to correctly use the data we collect. We will retain your personal data for as long as it is necessary to fulfill the purposes outlined in this Privacy Statement, unless a longer retention period is required or permitted by law.
            </p>

            <h2 className="font-heading font-bold text-2xl mb-6">Your Rights</h2>
            <p className="text-muted-foreground mb-6">
              We take reasonable steps to ensure that your personal data is accurate, complete, and up to date. You have the right to access, correct, or delete the personal data that we collect. You are also entitled to restrict or object, at any time, to the further processing of your personal data. You have the right to receive your personal data in a structured and standard format. You may lodge a complaint with the competent data protection authority regarding the processing of your personal data. To protect the privacy and the security of your personal data, we may request data from you to enable us to confirm your identity and right to access such data, as well as to search for and provide you with the personal data we maintain.
            </p>

            <h2 className="font-heading font-bold text-2xl mb-6">Third-Party Websites and Services</h2>
            <p className="text-muted-foreground mb-6">
              When a customer operates a link to a third-party website that has a relationship with us, we do not assume any obligation or responsibility for such policy because of the third party's privacy policy. Our website, products, and services may contain links to or the ability for you to access third-party websites, products, and services. We are not responsible for the privacy practices employed by those third parties, nor are we responsible for the information or content their products and services contain. This Privacy Statement applies solely to data collected by us through our products and services. We encourage you to read the privacy policies of any third party before proceeding to use their websites, products, or services.
            </p>

            <h2 className="font-heading font-bold text-2xl mb-6">Changes to This Privacy Statement</h2>
            <p className="text-muted-foreground mb-6">
              We may periodically change this Privacy Statement to keep pace with new technologies, industry practices, and regulatory requirements, among other reasons. Your continued use of our products and services after the effective date of the Privacy Statement means that you accept the revised Privacy Statement. If you do not agree to the revised Privacy Statement, please refrain from using our products or services and contact us to close any account you may have created.
            </p>

            <div className="bg-secondary rounded-2xl p-8 mt-12">
              <h3 className="font-heading font-bold text-xl mb-4 mt-0">Contact Us</h3>
              <p className="text-muted-foreground mb-0">
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:support@pairobin.com" className="text-accent hover:underline">
                  support@pairobin.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
