import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "SkillSync – Smart Team & Project Buddy Finder",
    description: "A full-stack web app enabling students to discover and collaborate on projects and hackathons through skill-based matching.",
    highlights: [
      "Built real-time collaboration dashboards with authentication and mentor directory",
      "Used a modern UI for a responsive, team-oriented experience",
      "Achieved increased collaboration efficiency among 100+ student users"
    ],
    gradient: "from-blue-500 to-purple-600",
    glowColor: "hover:shadow-blue-500/50"
  },
  {
    id: 2,
    title: "Custom Task Manager with Security & ML-Based Process Monitoring",
    description: "A smart task manager that detects and classifies processes using ML-based anomaly detection.",
    highlights: [
      "Integrated TensorFlow and scikit-learn models for identifying suspicious processes",
      "Reduced manual inspection time by 40% with automated response features",
      "Achieved 92% detection accuracy in simulations"
    ],
    gradient: "from-gray-800 to-gray-900",
    glowColor: "hover:shadow-green-500/50",
    borderGlow: "shadow-green-500/30"
  },
  {
    id: 3,
    title: "Homigo – Full-Stack Rental Listing Platform",
    description: "A responsive platform where users can list, explore, and book stays — with integrated authentication and image uploads.",
    highlights: [
      "Built secure CRUD features with middleware validation",
      "Integrated MongoDB + Mongoose for structured user data storage",
      "Improved UX metrics by 35% through responsive design"
    ],
    gradient: "from-yellow-400 to-orange-500",
    glowColor: "hover:shadow-yellow-500/50"
  }
];

export const Projects = () => {
  console.log("Projects component is rendering");
  console.log("Projects data:", projects);
  
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Highlighted Projects
              <div className="w-32 h-1 bg-gradient-to-r from-accent to-primary mx-auto mt-4 rounded-full shadow-lg shadow-accent/50" />
            </h2>
            <p className="text-lg text-muted-foreground mt-4">
              Building solutions that solve real problems and create meaningful impact
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.id}
                className={`group relative overflow-hidden border-2 hover:border-accent transition-all duration-500 hover:scale-105 ${project.glowColor} hover:shadow-2xl animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Glow Effect for ML Project */}
                {project.borderGlow && (
                  <div className={`absolute inset-0 rounded-lg shadow-lg ${project.borderGlow} opacity-50`} />
                )}

                <CardHeader>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base mt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Key Highlights */}
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-foreground">Key Highlights:</p>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* GitHub Button */}
                  <Button 
                    className="w-full bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 group/btn"
                    asChild
                  >
                    <a 
                      href="https://github.com/devanshrawat27" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      View on GitHub
                      <ExternalLink size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
