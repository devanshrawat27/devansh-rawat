import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import profileImg from "@/assets/devansh-profile.jpg";
import heroBg from "@/assets/hero-background.jpg";

const TAGLINES = [
  { 
    text: "Transforming Challenges into Career-Ready Competencies", 
    reason: "Action-oriented and shows measurable professional growth" 
  },
  { 
    text: "From Communication Skills to Career Confidence", 
    reason: "Clear progression narrative that resonates with recruiters" 
  },
  { 
    text: "Engineering Tomorrow's Solutions, Mastering Today's Skills", 
    reason: "Balances technical ambition with immediate skill development" 
  },
  { 
    text: "Building Professional Excellence Through Reflective Practice", 
    reason: "Demonstrates self-awareness and commitment to continuous improvement" 
  },
];

interface HeroProps {
  onScrollToSection: (section: string) => void;
}

export const Hero = ({ onScrollToSection }: HeroProps) => {
  const [selectedTagline, setSelectedTagline] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const savedTagline = localStorage.getItem("selectedTagline");
    if (savedTagline !== null) {
      setSelectedTagline(parseInt(savedTagline));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedTagline", selectedTagline.toString());
  }, [selectedTagline]);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(8, 47, 73, 0.9), rgba(0, 128, 128, 0.8)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-accent/30 animate-pulse" />
      </div>

      <div className={`container mx-auto px-4 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-5xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-2xl hover:scale-105 transition-transform duration-300">
              <img 
                src={profileImg} 
                alt="Devansh Rawat" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
            Devansh Rawat
          </h1>
          
          <div className="space-y-2 mb-6">
            <p className="text-xl md:text-2xl text-white/90 font-medium">
              B.Tech (Computer Science & Engineering)
            </p>
            <p className="text-lg md:text-xl text-white/80">
              Graphic Era Hill University
            </p>
            <p className="text-base md:text-lg text-white/70 italic">
              Practical for Employability Skill Enhancement
            </p>
            <p className="text-base md:text-lg text-white/70">
              Mentored by <span className="font-semibold text-accent">Dr. Anubha Pundir</span>
            </p>
          </div>

          {/* Tagline */}
          <div className="mb-8 bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <p className="text-2xl md:text-3xl font-semibold text-white mb-4">
              {TAGLINES[selectedTagline].text}
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {TAGLINES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedTagline(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === selectedTagline 
                      ? 'bg-accent w-8' 
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Select tagline ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button 
              size="lg"
              onClick={() => onScrollToSection('journal')}
              className="bg-white text-primary hover:bg-white/90 shadow-lg text-lg px-8 py-6"
            >
              Explore My Journey
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => onScrollToSection('resume')}
              className="border-white text-white hover:bg-white/10 shadow-lg text-lg px-8 py-6"
            >
              View Resume
            </Button>
          </div>

          {/* Scroll Indicator */}
          <button 
            onClick={() => onScrollToSection('about')}
            className="animate-bounce text-white hover:text-accent transition-colors"
            aria-label="Scroll to about section"
          >
            <ChevronDown size={48} />
          </button>
        </div>
      </div>
    </section>
  );
};

export { TAGLINES };
