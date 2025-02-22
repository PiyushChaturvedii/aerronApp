import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    ref: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // आपकी ईमेल आईडी के लिए फॉर्म सबमिट एंडपॉइंट
    form.action = "https://formsubmit.co/mailtoaeeron@gmail.com";
    form.method = "POST";

    try {
      // फॉर्म को मैन्युअली सबमिट करें
      form.submit();
      
      // फॉर्म सबमिट होने के बाद थैंक यू पेज पर जाएं
      navigate('/thank-you');
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in backdrop-blur-sm bg-transparent/10 p-8 rounded-lg">
          <h2 className="text-4xl font-bold text-light mb-4">Contact Us</h2>
          <p className="text-light/80 max-w-2xl mx-auto">
            Get in touch with us for any questions about our courses
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form 
            onSubmit={handleSubmit} 
            className="space-y-6"
          >
            {/* Hidden fields for FormSubmit configuration */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="New Contact Form Submission" />
            <input type="hidden" name="_next" value="https://www.aeeron.in/thank-you" />

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-light mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-transparent border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-light hover:border-primary transition-colors backdrop-blur-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-light mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-transparent border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-light hover:border-primary transition-colors backdrop-blur-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-light mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-transparent border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-light hover:border-primary transition-colors backdrop-blur-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="city" className="block text-sm font-medium text-light mb-2">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-transparent border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-light hover:border-primary transition-colors backdrop-blur-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="ref" className="block text-sm font-medium text-light mb-2">
                Reference
              </label>
              <input
                type="text"
                id="ref"
                name="ref"
                value={formData.ref}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-transparent border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-light hover:border-primary transition-colors backdrop-blur-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-light mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 bg-transparent border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-light hover:border-primary transition-colors backdrop-blur-sm"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-transparent border border-primary text-light px-6 py-3 rounded-lg hover:bg-primary/20 hover:scale-105 transform transition-all duration-300 disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default Contact;
