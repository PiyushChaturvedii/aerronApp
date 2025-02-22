
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import About from "../components/About";
import Resources from "../components/Resources";
import Plans from "../components/Plans";
import Team from "../components/Team";
import Contact from "../components/Contact";
import ScrollToTop from "../components/ScrollToTop";
import Spinner from "../components/Spinner";
import Footer from "../components/Footer";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Resources />
      <Plans />
      <Team />
      <Contact />
      <Footer />
      <ScrollToTop />
      <Spinner loading={isLoading} />
    </div>
  );
};

export default Index;
