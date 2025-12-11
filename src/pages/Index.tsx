import { Layout } from "@/components/layout";
import {
  HeroSection,
  CategoriesSection,
  FeaturedProducts,
  TrustBadges,
  B2BSection,
  TestimonialsSection,
} from "@/components/home";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TrustBadges />
      <CategoriesSection />
      <FeaturedProducts />
      <TestimonialsSection />
      <B2BSection />
    </Layout>
  );
};

export default Index;
