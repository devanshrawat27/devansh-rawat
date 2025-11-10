import { Card } from "@/components/ui/card";
import { Award, TrendingUp, Target } from "lucide-react";

export const FinalReflection = () => {
  return (
    <section id="reflection" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Final Reflection
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
            <p className="text-muted-foreground italic">
              Synthesizing Growth, Celebrating Progress, Planning Forward
            </p>
          </div>

          {/* Main Reflection */}
          <Card className="p-8 mb-8 shadow-lg">
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                As I reflect on this transformative journey through the Employability Skill Enhancement course, 
                I am struck by the profound evolution I've undergone—not just as a student of computer science, 
                but as a communicator, critical thinker, and emerging professional. When I began this course, 
                I viewed soft skills as secondary to technical prowess. <strong>I was wrong.</strong>
              </p>

              <p>
                Through nine intensive sessions, I discovered that the ability to articulate ideas clearly, 
                think critically under pressure, collaborate effectively, and reflect honestly on my performance 
                are not just complementary skills—they are <em>foundational</em> to meaningful career success. 
                The psychometric assessments (TAT, SRT) taught me to think on my feet while maintaining composure. 
                Group discussions revealed that listening is as powerful as speaking, and that leadership often 
                means empowering others rather than dominating conversations. Resume writing sessions transformed 
                my self-presentation from passive to compelling, and essay exercises honed my ability to structure 
                arguments logically and persuasively.
              </p>

              <p>
                <strong className="text-foreground">Measurable Outcomes:</strong> I've documented my progress through this 
                portfolio, but the real evidence lies in my changed approach to challenges. I now enter interviews 
                with confidence, having rehearsed structured responses through SRT. I approach team projects as 
                opportunities for collaborative problem-solving, informed by GD experiences. Most importantly, 
                I've internalized the habit of reflective practice—regularly assessing what worked, what didn't, 
                and how to improve.
              </p>

              <p>
                Dr. Anubha Pundir's mentorship has been instrumental in this transformation. Her constructive 
                feedback, encouragement during setbacks, and high expectations pushed me beyond my comfort zone 
                in ways I'm grateful for. The safe yet challenging learning environment she cultivated allowed 
                me to experiment, fail, learn, and ultimately succeed.
              </p>
            </div>
          </Card>

          {/* Key Achievements Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="font-bold text-foreground mb-2">Skills Mastered</h3>
              <p className="text-2xl font-bold text-primary mb-1">12+</p>
              <p className="text-sm text-muted-foreground">
                Professional competencies acquired across communication, writing, and assessment
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h3 className="font-bold text-foreground mb-2">Confidence Growth</h3>
              <p className="text-2xl font-bold text-accent mb-1">150%</p>
              <p className="text-sm text-muted-foreground">
                Self-reported increase in public speaking and presentation confidence
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="font-bold text-foreground mb-2">Career Readiness</h3>
              <p className="text-2xl font-bold text-primary mb-1">High</p>
              <p className="text-sm text-muted-foreground">
                Ready for internships and entry-level roles with industry-aligned skills
              </p>
            </Card>
          </div>

          {/* Next Steps */}
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5">
            <h3 className="text-2xl font-bold text-foreground mb-4">Next Steps & Commitments</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">1.</span>
                <span><strong>Apply Learning:</strong> Actively seek internship opportunities where I can apply both technical and employability skills, targeting roles that value communication and collaboration.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">2.</span>
                <span><strong>Continuous Practice:</strong> Participate in weekly mock GDs and presentations with peers to maintain and refine my communication skills.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">3.</span>
                <span><strong>Mentor Others:</strong> Share my learnings with juniors, conducting workshops on resume writing and group discussions to reinforce my knowledge while helping others.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">4.</span>
                <span><strong>Reflective Journaling:</strong> Continue documenting my professional experiences, challenges, and learnings to maintain the habit of self-assessment and growth tracking.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">5.</span>
                <span><strong>Advanced Certifications:</strong> Pursue additional certifications in public speaking, leadership, and project management to complement my technical credentials.</span>
              </li>
            </ul>
          </Card>

          {/* Closing Quote */}
          <div className="mt-8 text-center">
            <blockquote className="text-xl italic text-muted-foreground border-l-4 border-primary pl-6 py-4">
              "The journey of employability skill enhancement isn't a destination—it's a continuous process 
              of learning, adapting, and growing. I'm no longer the student who walked into that first session; 
              I'm a professional-in-training, equipped, confident, and ready to make my mark."
            </blockquote>
            <p className="text-foreground font-semibold mt-4">— Devansh Rawat</p>
          </div>
        </div>
      </div>
    </section>
  );
};
