
import { Facebook, MessageCircle, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Aeeron Academy</h3>
            <p className="text-gray-300">
            Your journey to a high-paying tech career starts here.
            Master coding with structured learning and real-world projects.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#courses" className="hover:text-primary transition-colors">Courses</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Location: Jaipur, Rajasthan</li>
              <li>Mobile No.:<a className="ram" href="https://api.whatsapp.com/send?phone=917976161649&text=Hello,%20I%20want%20to%20become%20MERN%20Stack%20Developer.">+91 7976-161649</a> </li>
              <li>Email: <a className="ram" href="mailto:hello@aeeron.in" title="Email Us">hello@aeeron.in</a></li>
              <li>Zoom Meeting: <a className="ram" href="https://us06web.zoom.us/j/7976161649?pwd=bXhWQUF2ZVFVbGRsQTlPY0lPSTVvZz09" title="Zoom">7976161649</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/aeeronacademy" className="hover:text-primary transition-colors">
              <img src="/images/facebook.gif" alt="facebook" className="w-8 h-8 mx-auto mb-6 hover:scale-110 transition-transform" />
              </a>
              <a href="https://api.whatsapp.com/send?phone=917976161649&text=Hello,%20I%20want%20to%20become%20MERN%20Stack%20Developer." className="hover:text-primary transition-colors">
              <img src="/images/whatsapp.gif" alt="whatsapp" className="w-8 h-8 mx-auto mb-6 hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.instagram.com/aeeronacademy/" className="hover:text-primary transition-colors">
              <img src="/images/instagram.gif" alt="Instagram" className="w-8 h-8 mx-auto mb-6 hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.linkedin.com/company/91341751/admin/feed/posts/" className="hover:text-primary transition-colors">
              <img src="/images/linkdin.gif" alt="LinkedIn" className="w-8 h-8 mx-auto mb-6 hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} </p><p> <a className="ram" href="https://www.aeeron.in">Aeeron Academy (A Unit of Aeeron OM)</a>.</p><p> All rights reserved.</p>
          <a href="https://lordicon.com/">Icons by Lordicon.com</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
