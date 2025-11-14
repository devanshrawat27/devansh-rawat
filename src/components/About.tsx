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
          <Card className="p-8 mb-12 shadow-lg border-primary/10 bg-gradient-to-br from-card to-card/50">
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Hi, I'm <span className="font-semibold text-foreground bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Devansh Rawat</span>, a B.Tech Computer Science & Engineering student at Graphic Era Hill University, Dehradun.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm someone who loves learning new things and improving a little every day. Over time, I've realized that growth isn't just about academics — it's also about discipline, patience, and how we handle challenges.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                I believe in doing everything with sincerity, whether it's a small task or a big goal. I like to stay curious, try new ideas, and keep learning from experiences — both successes and mistakes.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                I enjoy working with people, sharing thoughts, and understanding different perspectives. For me, confidence and calmness are as important as knowledge.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                My goal is simple — to keep learning, stay humble, and become someone who adds value wherever I go.
              </p>
              
              <p className="text-lg font-medium text-foreground italic mt-6 flex items-center justify-center gap-2">
                <span className="text-primary">🌿</span>
                Learning. Growing. Becoming better — one step at a time.
              </p>
            </div>
          </Card>

        </div>
      </div>
    </section>
  );
};
