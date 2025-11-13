import { Lightbulb, Book, Mic, Brain } from "lucide-react";

export const FinalReflection = () => {
  const learningMilestones = [
    { icon: Lightbulb, label: "Confidence", color: "from-yellow-400 to-orange-500" },
    { icon: Book, label: "Communication", color: "from-blue-400 to-cyan-500" },
    { icon: Mic, label: "Teamwork", color: "from-purple-400 to-pink-500" },
    { icon: Brain, label: "Self-Reflection", color: "from-green-400 to-emerald-500" },
  ];

  return (
    <section id="reflection" className="py-20 bg-gradient-to-br from-[#f5f1e8] via-white to-[#fef9f1]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Final Reflection
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
          </div>

          {/* Main Reflection - Short and Human */}
          <div className="text-center mb-16 space-y-4 max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Looking back at this journey, I've realized how much I've grown — not just in skills, but in mindset.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Each session taught me something new about confidence, clarity, and communication.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              I learned to express myself better, think calmly, and approach every challenge with a positive attitude.
            </p>
            <p className="text-lg md:text-xl text-foreground font-semibold leading-relaxed">
              This experience wasn't just about learning — it was about becoming a better version of myself.
            </p>
          </div>

          {/* Learning Journey Map */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
              🌱 My Learning Journey — From Awareness to Growth
            </h3>
            
            {/* Horizontal Timeline */}
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary hidden md:block" 
                   style={{ 
                     top: '4rem',
                     left: '10%',
                     right: '10%',
                     boxShadow: '0 0 20px rgba(245, 182, 66, 0.5)'
                   }} 
              />
              
              {/* Milestones Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 relative z-10">
                {learningMilestones.map((milestone, index) => {
                  const Icon = milestone.icon;
                  return (
                    <div 
                      key={index}
                      className="flex flex-col items-center text-center group animate-fade-in"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      {/* Icon Circle */}
                      <div className={`
                        w-20 h-20 md:w-24 md:h-24 rounded-full 
                        bg-gradient-to-br ${milestone.color}
                        flex items-center justify-center
                        shadow-lg
                        transform transition-all duration-300
                        group-hover:scale-110 group-hover:shadow-2xl
                        mb-4
                      `}
                      style={{
                        boxShadow: '0 8px 25px rgba(245, 182, 66, 0.3)'
                      }}
                      >
                        <Icon className="text-white" size={32} strokeWidth={2.5} />
                      </div>
                      
                      {/* Label */}
                      <p className="text-sm md:text-base font-semibold text-foreground">
                        {milestone.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Optional: Add a subtle closing quote or note */}
          <div className="text-center mt-12 p-6 bg-white/60 backdrop-blur-sm rounded-lg border border-primary/20">
            <p className="text-muted-foreground italic">
              "Growth happens when you step out of your comfort zone and embrace the journey with an open mind."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
