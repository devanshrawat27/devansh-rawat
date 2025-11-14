import { Card } from "@/components/ui/card";
import { Upload, FileText, Briefcase } from "lucide-react";

export const Assignments = () => {
  return (
    <section id="assignments" className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Assignments
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
          </div>

          {/* Flash Card Activity */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="text-primary" size={32} />
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Flash Card Activity
              </h3>
            </div>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              In this activity, we created 5 flash cards based on Group Discussion topics. These cards helped us practice structuring our thoughts quickly and speaking with confidence.
            </p>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[1, 2, 3, 4, 5].map((num) => (
                <Card 
                  key={num}
                  className="p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer border-2 border-dashed border-border hover:border-primary"
                >
                  <div className="flex flex-col items-center justify-center h-40">
                    <Upload className="text-muted-foreground group-hover:text-primary transition-colors mb-3" size={40} />
                    <p className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      Flash Card {num}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Click to upload
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Corporate Assignment */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="text-accent" size={32} />
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Corporate Assignment
              </h3>
            </div>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We selected a real company, researched its background, culture, and business model, and created a presentation based on our findings.
            </p>
            
            <Card className="p-8 hover:shadow-xl transition-all duration-300 group cursor-pointer border-2 border-dashed border-border hover:border-accent max-w-md mx-auto">
              <div className="flex flex-col items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="text-white" size={40} />
                </div>
                <p className="text-lg font-semibold text-foreground mb-2">
                  Upload PPT
                </p>
                <p className="text-sm text-muted-foreground">
                  Click to upload your presentation
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
