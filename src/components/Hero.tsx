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
              </div>

              <p className="text-sm text-white/70 italic pt-2">
                Currently exploring AI, backend systems, and scalable applications.
              </p>
            </div>

            {/* Right side - Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative group max-w-md lg:max-w-sm">
                {/* Layered 3D background gradient glow */}
                <div className="absolute -inset-8 bg-gradient-to-br from-cyan-400/20 via-accent/20 to-yellow-300/20 rounded-3xl blur-3xl group-hover:blur-[50px] transition-all duration-700 animate-pulse" />
                <div className="absolute -inset-4 bg-gradient-to-tr from-accent/30 to-primary/30 rounded-2xl blur-2xl group-hover:scale-110 transition-all duration-700" />
                
                {/* Image container with soft frame */}
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)] ring-2 ring-white/20 group-hover:shadow-[0_25px_80px_rgba(255,215,0,0.4)] group-hover:ring-accent/30 transition-all duration-700 group-hover:scale-[1.02] backdrop-blur-sm">
                  <img 
                    src={profileImg} 
                    alt="Devansh Rawat - Computer Science Student" 
                    className="w-full h-auto object-cover relative z-10"
                  />
                  
                  {/* Subtle overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-cyan-300/10 opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                </div>

                {/* Floating accent elements for 3D effect */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-cyan-400/15 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
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
