
import { Shield } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <div className="backdrop-blur-sm bg-dark/20 p-8 rounded-lg max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Shield className="w-12 h-12 text-primary mr-4" />
            <h1 className="text-4xl font-bold text-light">Privacy Policy</h1>
          </div>
          <div className="prose prose-invert max-w-none">
            <p className="mb-4 text-light/80">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-light">Information We Collect</h2>
            <p className="text-light/80">We collect information you provide directly to us when you:</p>
            <ul className="list-disc pl-6 mb-4 text-light/80">
              <li>Create an account</li>
              <li>Enroll in courses</li>
              <li>Participate in forums</li>
              <li>Contact support</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-light">How We Use Your Information</h2>
            <p className="text-light/80">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-4 text-light/80">
              <li>Provide and improve our services</li>
              <li>Send you technical notices and updates</li>
              <li>Respond to your comments and questions</li>
              <li>Prevent fraud and abuse</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-light">Data Security</h2>
            <p className="text-light/80">We implement appropriate security measures to protect your personal information.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
