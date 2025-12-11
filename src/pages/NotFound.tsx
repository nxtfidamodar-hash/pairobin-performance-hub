import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <Layout>
      <section className="min-h-[60vh] flex items-center justify-center bg-background">
        <div className="container-wide text-center">
          <h1 className="font-heading font-black text-8xl md:text-9xl text-accent mb-4">404</h1>
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Page Not Found</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="default" size="lg" asChild>
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/shop">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Browse Shop
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
