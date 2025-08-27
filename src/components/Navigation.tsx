import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  onHireMeClick: () => void;
}

const Navigation = ({ onHireMeClick }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Team", href: "#teams" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    let lastScroll = 0;

    const heroSection = document.querySelector("#home");
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setShowNavbar(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(heroSection);

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > 50); // show blur after scrolling down a bit
      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } ${isScrolled ? "glass-card border-b border-glass-border backdrop-blur-lg" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-gradient font-dancing">Nees...</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-muted-foreground hover:text-primary transition-colors relative group font-poppins"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </button>
          ))}
          {/* <Button
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary font-poppins"
            onClick={onHireMeClick}
          >
            Hire Me
          </Button> */}
        </div>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4 space-y-4 glass-card border border-glass-border rounded-lg p-4">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="block w-full text-left text-muted-foreground hover:text-primary transition-colors py-2 font-poppins"
            >
              {item.name}
            </button>
          ))}
          <Button
            size="sm"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={onHireMeClick}
          >
            Hire Me
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
