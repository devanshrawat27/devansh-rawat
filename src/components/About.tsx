import { Card } from "@/components/ui/card";
import { MessageSquare, Briefcase, BookOpen } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: MessageSquare,
    title: "Communication Growth",
    description: "Transformed from hesitant speaker to confident presenter through structured group discussions, TAT presentations, and timed storytelling exercises."
  },
  {
    icon: Briefcase,
    title: "Professional Readiness",
    description: "Mastered resume writing, career planning, and interview techniques. Developed ATS-optimized documentation and strategic career objectives."
  },
  {
    icon: BookOpen,
    title: "Reflective Learning",
    description: "Cultivated meta-cognitive skills through journaling, essay writing, and continuous self-assessment, creating a robust foundation for lifelong learning."
  }
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
          </div>

          {/* Bio */}
          <Card className="p-8 mb-12 shadow-lg">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I am <span className="font-semibold text-foreground">Devansh Rawat</span>, a Computer Science & Engineering student at Graphic Era Hill University, 
              passionate about leveraging technology to solve real-world problems. Through the Employability Skill Enhancement 
              course under the expert guidance of <span className="font-semibold text-foreground">Dr. Anubha Pundir</span>, I embarked on a transformative 
              journey that sharpened not only my technical capabilities but also my communication, analytical thinking, 
              and professional presence. This portfolio documents my progression through nine intensive sessions covering 
              career planning, resume optimization, psychometric assessments (TAT, SRT), group discussions, creative writing, 
              and structured essay composition. Each experience has been a stepping stone toward becoming a well-rounded, 
              industry-ready professional prepared to contribute meaningfully in dynamic work environments.
            </p>
          </Card>

          {/* Highlight Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {HIGHLIGHTS.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-xl transition-shadow duration-300 group"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {highlight.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
