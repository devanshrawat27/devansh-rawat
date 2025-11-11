import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Linkedin, Github, Mail } from "lucide-react";
import profileImg from "@/assets/devansh-profile.jpg";
import heroBg from "@/assets/hero-background.jpg";

interface HeroProps {
  onScrollToSection: (section: string) => void;
}

export const Hero = ({ onScrollToSection }: HeroProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(8, 47, 73, 0.95), rgba(0, 128, 128, 0.85)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-accent/30 animate-pulse" />
      </div>

      <div className={`container mx-auto px-4 py-20 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto">
          {/* Two-column layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text Content */}
            <div className="text-white space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold">
                Hi, I'm <span className="bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent">Devansh Rawat</span> 👋
              </h1>
              
              <div className="space-y-2 text-lg md:text-xl text-white/90">
                <p className="font-semibold">B.Tech (Computer Science & Engineering)</p>
                <p>Graphic Era Hill University, Dehradun</p>
                <p className="text-base text-white/80">Practical for Employability Skill Enhancement (PESE)</p>
                <p className="text-base text-white/80">Mentored by <span className="text-accent font-semibold">Dr. Anubha Pundir</span></p>
              </div>

              <div className="pt-4">
                <p className="text-2xl md:text-3xl font-bold text-yellow-300 mb-4">
                  💡 "Transforming technical learning into real-world innovation."
                </p>
                <p className="text-lg text-white/90 leading-relaxed">
                  A passionate Computer Science student specializing in full-stack development, problem-solving, and building digital products that make an impact. Always curious, always learning.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  size="lg"
                  onClick={() => onScrollToSection('about')}
                  className="bg-gradient-to-r from-accent to-primary text-white hover:shadow-lg hover:shadow-accent/50 transition-all duration-300"
                >
                  About Me
                </Button>
                <Button 
                  size="lg"
                  onClick={() => onScrollToSection('projects')}
                  className="bg-white text-primary hover:bg-white/90 hover:shadow-lg transition-all duration-300"
                >
                  View Projects
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => onScrollToSection('footer')}
                  className="border-2 border-white text-white hover:bg-white/10 hover:shadow-lg transition-all duration-300"
                >
                  Contact
                </Button>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 pt-4">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="https://github.com/devanshrawat27" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="mailto:contact@example.com"
                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-110"
                  aria-label="Email"
                >
                  <Mail size={24} />
                </a>
              </div>

              <p className="text-sm text-white/70 italic pt-2">
                Currently exploring AI, backend systems, and scalable applications.
              </p>
            </div>

            {/* Right side - Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/40 to-yellow-300/40 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
                <div className="relative overflow-hidden rounded-2xl border-4 border-white/20 shadow-2xl hover:shadow-accent/50 transition-all duration-500 group-hover:scale-105">
                  <img 
                    src={profileImg} 
                    alt="Devansh Rawat - Professional Photo" 
                    className="w-full h-auto max-w-md object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-16">
            <button 
              onClick={() => onScrollToSection('about')}
              className="animate-bounce text-white hover:text-accent transition-colors"
              aria-label="Scroll to about section"
            >
              <ChevronDown size={48} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
