import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-primary to-accent text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Devansh Rawat</h3>
            <p className="text-white/80 mb-4">
              B.Tech (CSE) | Graphic Era Hill University
            </p>
            <p className="text-sm text-white/70 max-w-2xl mx-auto">
              This e-portfolio documents my journey through the Employability Skill Enhancement course 
              under the mentorship of Dr. Anubha Pundir. Every session, reflection, and achievement 
              represents a step toward becoming a well-rounded, industry-ready professional.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href={localStorage.getItem("linkedin_link") || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-foreground transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={localStorage.getItem("github_link") || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-foreground transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:devanshdevr@gmail.com"
              className="hover:text-accent-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Divider */}
          <div className="border-t border-white/20 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/70">
              <p>© {currentYear} Devansh Rawat. All rights reserved.</p>
              <p className="mt-2 md:mt-0">
                Crafted with dedication for Employability Skill Enhancement
              </p>
            </div>
          </div>

          {/* Note to Mentor */}
          <div className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-lg text-center text-sm">
            <p className="text-white/90">
              <strong>Note to Dr. Anubha Pundir:</strong> This portfolio represents not just coursework, 
              but a transformative personal and professional journey. Thank you for your guidance, patience, 
              and unwavering belief in your students' potential.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
