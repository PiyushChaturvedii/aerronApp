
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative">
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-2xl mx-auto text-center backdrop-blur-sm bg-dark/20 p-8 rounded-lg">
         
          <a target="blank" href="/" className="hover:text-primary transition-colors">
              <img src="/images/smile.gif" alt="portfolio" className="w-24 h-24 mx-auto mb-12 hover:scale-110 transition-transform" />
              </a>

          <h1 className="text-4xl font-bold text-light mb-4">
            Thank You!
          </h1>
          <p className="text-lg text-light/80 mb-8">
            Your submission has been received. <br />We appreciate your interest and will get back to you soon.
          </p>
          <Button onClick={() => navigate("/")} className="mx-auto bg-primary hover:bg-secondary">
            Return to Home
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ThankYou;
