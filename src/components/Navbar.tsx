
import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/#features" },
    { label: "About", href: "/#about" },
    { label: "Resources", href: "/#resources" },
    { label: "Plans", href: "/#plans" },
    { label: "Team", href: "/#team" },
    { label: "Contact", href: "/#contact" },
    { label: "Privacy", href: "/privacy" },
    { label: "FAQ", href: "/faq" },
  ];

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleNavigation = (href: string) => {
    if (href.startsWith('/#')) {
      // If we're not on the home page and trying to access a section
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation to complete before scrolling
        setTimeout(() => {
          const element = document.querySelector(href.substring(1));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // If we're already on home page, just scroll
        const element = document.querySelector(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // For non-section links (like /faq, /login)
      navigate(href);
      window.scrollTo(0, 0); // Scroll to top for new pages
    }
    setIsOpen(false);
  };

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-dark/50 backdrop-blur-md z-50 border-b border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="./images/favico.png" alt="imglogo"/>
              <a 
                href="/"
                className="text-2xl font-bold text-primary hover:text-light transition-colors"
                onClick={handleHomeClick}
              >
                Aeeron Academy
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-light hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    if (item.href === '/') {
                      handleHomeClick(e);
                    } else {
                      handleNavigation(item.href);
                    }
                  }}
                >
                  {item.label}
                </a>
              ))}
              {/* <Button
                onClick={toggleDarkMode}
                variant="ghost"
                size="icon"
                className="mr-2 text-light hover:text-primary"
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button> */}
              <Button 
                variant="default" 
                onClick={() => handleNavigation('/login')}
                className="bg-primary hover:bg-secondary text-white"
              >
                Login
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              {/* <Button
                onClick={toggleDarkMode}
                variant="ghost"
                size="icon"
                className="text-light hover:text-primary"
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button> */}
              <Button
                onClick={() => setIsOpen(!isOpen)}
                variant="ghost"
                size="icon"
                className="text-light hover:text-primary"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden bg-dark/80 backdrop-blur-md">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-3 py-2 text-light hover:text-primary transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      if (item.href === '/') {
                        handleHomeClick(e);
                      } else {
                        handleNavigation(item.href);
                      }
                    }}
                  >
                    {item.label}
                  </a>
                ))}
                <Button 
                  variant="default" 
                  className="w-full mt-4 bg-primary hover:bg-secondary text-white"
                  onClick={() => handleNavigation('/login')}
                >
                  Login
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
