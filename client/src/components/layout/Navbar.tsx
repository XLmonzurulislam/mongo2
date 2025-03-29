import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Resume-Gilbert-Hutapea.pdf';
    link.download = 'Gilbert_Hutapea_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
    { href: "/blog", label: "Blog" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // For page-based navigation, we'll set the active section based on the current path
    // Use the location from wouter instead of window.location
    const path = location;
    
    // Remove the leading slash to get just the path name
    const currentPath = path === '/' ? 'home' : path.substring(1);
    
    setActiveSection(currentPath);
  }, [location]);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-[#1c1c1c] py-2 shadow-lg" : "bg-[#1c1c1c] py-4"
    }`}>
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white flex items-center">
            <span className="text-[#ff5722]">Gilbert</span>
            <span className="ml-1 text-[#ff5722]">Hutapea</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                className={`font-medium relative ${
                  activeSection === (link.href === '/' ? 'home' : link.href.substring(1)) 
                    ? "text-[#ff5722]" 
                    : "text-gray-300 hover:text-[#ff5722]"
                } transition-all duration-300 ease-in-out`}
                onClick={closeMenu}
              >
                {link.label}
                {activeSection === (link.href === '/' ? 'home' : link.href.substring(1)) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"></span>
                )}
              </Link>
            ))}
            <Button 
              onClick={handleDownloadResume} 
              className="bg-[#ff5722] hover:bg-[#ff5722]/80 text-white transform transition duration-300 hover:-translate-y-1"
            >
              Resume
            </Button>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-[#0F172A] absolute top-16 left-0 w-full shadow-lg py-4 px-6 z-50">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href}
                  className={`text-lg py-2 font-medium ${
                    activeSection === (link.href === '/' ? 'home' : link.href.substring(1)) 
                      ? "text-primary" 
                      : "text-gray-300"
                  }`}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}
              <Button 
                onClick={handleDownloadResume} 
                className="bg-primary hover:bg-primary/80 text-white mt-2 w-full"
              >
                Resume
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
