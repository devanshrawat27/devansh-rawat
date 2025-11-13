import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Journal } from "@/components/Journal";
import { Videos } from "@/components/Videos";
import { Resume } from "@/components/Resume";
import { Mentor } from "@/components/Mentor";
import { Skills } from "@/components/Skills";
import { FinalReflection } from "@/components/FinalReflection";
import { Footer } from "@/components/Footer";
import { PreferencesModal } from "@/components/PreferencesModal";

const Index = () => {
  const [preferencesOpen, setPreferencesOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed nav
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation 
        onScrollToSection={scrollToSection}
        onOpenPreferences={() => setPreferencesOpen(true)}
      />
      <Hero onScrollToSection={scrollToSection} />
      <About />
      <Projects />
      <Journal />
      <Videos />
      <Mentor />
      <Resume />
      <Skills />
      <FinalReflection />
      <Footer />
      <PreferencesModal 
        isOpen={preferencesOpen}
        onClose={() => setPreferencesOpen(false)}
      />
    </div>
  );
};

export default Index;
