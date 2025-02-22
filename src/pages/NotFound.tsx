
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="text-center backdrop-blur-sm bg-dark/20 p-12 rounded-lg border border-primary/20">
        <h1 className="text-8xl font-bold mb-4 text-primary">404</h1>
        <p className="text-2xl text-light mb-8">Oops! Page not found</p>
        <Button asChild className="bg-primary hover:bg-secondary">
          <a href="/">Return to Home</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
