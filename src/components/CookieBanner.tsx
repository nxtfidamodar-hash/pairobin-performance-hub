import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Cookie } from "lucide-react";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("pairobin-cookie-consent");
    if (!consent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("pairobin-cookie-consent", JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString()
    }));
    setIsVisible(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem("pairobin-cookie-consent", JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString()
    }));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-slide-up">
      <div className="container-wide">
        <div className="bg-card border border-border rounded-2xl shadow-xl p-6 md:p-8">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center">
            {/* Icon & Content */}
            <div className="flex items-start gap-4 flex-1">
              <div className="shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Cookie className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg mb-2">We Value Your Privacy</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
                  By clicking "Accept All", you consent to our use of cookies. You can manage your preferences 
                  or learn more in our{" "}
                  <a href="/privacy" className="text-accent hover:underline">Privacy Policy</a>.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
              <Button
                variant="outline"
                onClick={acceptNecessary}
                className="w-full sm:w-auto"
              >
                Necessary Only
              </Button>
              <Button
                onClick={acceptAll}
                className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Accept All
              </Button>
            </div>

            {/* Close Button */}
            <button
              onClick={acceptNecessary}
              className="absolute top-4 right-4 lg:static p-2 hover:bg-secondary rounded-lg transition-colors"
              aria-label="Close cookie banner"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
