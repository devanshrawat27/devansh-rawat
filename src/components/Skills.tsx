import { Code2, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Skills = () => {
  const technicalSkills = [
    "HTML", "CSS", "JavaScript", "Node.js", "Express.js", 
    "MongoDB", "Git", "C++", "Java"
  ];

  const softSkills = [
    "Communication", "Teamwork", "Problem Solving", 
    "Adaptability", "Consistency"
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Skills & Strengths
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A blend of technical skills and personal qualities that define how I learn, work, and grow.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Code2 className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Technical Skills</h3>
              </div>
              
              {/* Horizontal line */}
              <div className="h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 mb-6 group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300" />
              
              <div className="flex flex-wrap gap-3">
                {technicalSkills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-foreground rounded-full text-sm font-medium hover:shadow-md hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 cursor-default border border-blue-200/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>

            {/* Soft Skills */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Soft Skills</h3>
              </div>
              
              {/* Horizontal line */}
              <div className="h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 mb-6 group-hover:shadow-lg group-hover:shadow-yellow-500/30 transition-all duration-300" />
              
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-yellow-50 to-orange-50 text-foreground rounded-full text-sm font-medium hover:shadow-md hover:shadow-yellow-500/20 transition-all duration-300 hover:scale-105 cursor-default border border-yellow-200/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};