import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Settings } from "lucide-react";

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'journal', label: 'Journal' },
  { id: 'videos', label: 'Videos' },
  { id: 'mentor', label: 'Meet My Mentor' },
  { id: 'resume', label: 'Resume' },
  { id: 'reflection', label: 'Final Reflection' },
];

interface NavigationProps {
  onScrollToSection: (section: string) => void;
  onOpenPreferences: () => void;
}

export const Navigation = ({ onScrollToSection, onOpenPreferences }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = NAV_ITEMS.map(item => item.id);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    onScrollToSection(sectionId);
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <button 
            onClick={() => handleNavClick('home')}
            className={`text-xl font-bold transition-colors ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}
          >
            Devansh Rawat
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeSection === item.id
                    ? 'bg-primary text-white'
                    : isScrolled
                    ? 'text-foreground hover:bg-primary/10'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={onOpenPreferences}
              className={isScrolled ? 'text-foreground' : 'text-white'}
            >
              <Settings size={20} />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={onOpenPreferences}
              className={isScrolled ? 'text-foreground' : 'text-white'}
            >
              <Settings size={20} />
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 ${isScrolled ? 'text-foreground' : 'text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 bg-white rounded-b-lg shadow-lg">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 transition-colors ${
                  activeSection === item.id
                    ? 'bg-primary text-white'
                    : 'text-foreground hover:bg-primary/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
