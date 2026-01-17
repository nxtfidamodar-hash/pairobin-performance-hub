import { Layout } from "@/components/layout";
import {
  HeroSection,
  CategoriesSection,
  FeaturedProducts,
  TrustBadges,
} from "@/components/home";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TrustBadges />
      <CategoriesSection />
      <FeaturedProducts />
    </Layout>
  );
};

export default Index;
