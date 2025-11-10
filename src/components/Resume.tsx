import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Printer } from "lucide-react";
import { toast } from "sonner";

export const Resume = () => {
  const handleDownload = () => {
    window.print();
    toast.success("Resume ready to save as PDF! Use your browser's print dialog to save.");
  };

  return (
    <section id="resume" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Resume
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
            <div className="flex justify-center gap-4 mt-6 print:hidden">
              <Button onClick={handleDownload} size="lg">
                <Download className="mr-2" size={20} />
                Download PDF
              </Button>
            </div>
          </div>

          {/* Resume Content */}
          <Card className="p-8 md:p-12 shadow-lg resume-content">
            {/* Header */}
            <div className="text-center mb-8 pb-6 border-b-2 border-primary">
              <h1 className="text-3xl font-bold text-foreground mb-2">DEVANSH RAWAT</h1>
              <p className="text-muted-foreground">B.Tech (Computer Science & Engineering)</p>
              <p className="text-muted-foreground">Graphic Era Hill University</p>
              <div className="flex flex-wrap justify-center gap-4 mt-3 text-sm">
                <span className="text-muted-foreground">📧 devansh.rawat@example.com</span>
                <span className="text-muted-foreground">📱 +91-XXXXX-XXXXX</span>
                <a href="https://linkedin.com" className="text-primary hover:underline">LinkedIn</a>
                <a href="https://github.com" className="text-primary hover:underline">GitHub</a>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-foreground mb-3 pb-2 border-b border-muted">
                PROFESSIONAL SUMMARY
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Results-driven Computer Science Engineering student with demonstrated excellence in employability skills, 
                technical problem-solving, and professional communication. Completed intensive training in resume optimization, 
                group discussions, psychometric assessments (TAT, SRT), and structured essay writing under Dr. Anubha Pundir. 
                Proven ability to articulate complex ideas, collaborate effectively in team settings, and adapt quickly to 
                high-pressure situations. Seeking opportunities to leverage technical expertise and refined soft skills in 
                dynamic software development or IT consulting roles.
              </p>
            </div>

            {/* Education */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-foreground mb-3 pb-2 border-b border-muted">
                EDUCATION
              </h2>
              <div className="mb-3">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-foreground">Bachelor of Technology (B.Tech)</h3>
                  <span className="text-muted-foreground text-sm">Expected 2026</span>
                </div>
                <p className="text-muted-foreground">Computer Science & Engineering</p>
                <p className="text-muted-foreground">Graphic Era Hill University</p>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-foreground mb-3 pb-2 border-b border-muted">
                CORE COMPETENCIES
              </h2>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Technical Skills</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>• Programming: Python, Java, C++, JavaScript</li>
                    <li>• Web Development: HTML, CSS, React.js, Node.js</li>
                    <li>• Database: MySQL, MongoDB</li>
                    <li>• Tools: Git, VS Code, IntelliJ IDEA</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Professional Skills</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>• Advanced Communication & Presentation</li>
                    <li>• Group Discussion & Debate Facilitation</li>
                    <li>• Structured Essay & Report Writing</li>
                    <li>• Time Management & Decision Making</li>
                    <li>• Critical Thinking & Problem Analysis</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-foreground mb-3 pb-2 border-b border-muted">
                ACADEMIC PROJECTS
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground">E-Commerce Platform Development</h3>
                  <p className="text-muted-foreground text-sm mb-2">Technologies: React.js, Node.js, MongoDB</p>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>• Developed full-stack e-commerce application with user authentication and payment integration</li>
                    <li>• Implemented responsive UI/UX design serving 500+ test users with 95% satisfaction rate</li>
                    <li>• Optimized database queries reducing load time by 40%</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">AI-Based Chatbot for Student Queries</h3>
                  <p className="text-muted-foreground text-sm mb-2">Technologies: Python, NLP, TensorFlow</p>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>• Built intelligent chatbot using natural language processing to answer student queries</li>
                    <li>• Achieved 85% accuracy in intent classification across 200+ query types</li>
                    <li>• Collaborated with team of 4 using Agile methodology, delivering project 2 weeks ahead of schedule</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Employability Training */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-foreground mb-3 pb-2 border-b border-muted">
                EMPLOYABILITY SKILL ENHANCEMENT
              </h2>
              <p className="text-muted-foreground text-sm mb-2">
                <strong>Practical for Employability Skill Enhancement</strong> | Dr. Anubha Pundir | 2024-2025
              </p>
              <ul className="space-y-1 text-muted-foreground text-sm">
                <li>• Completed 9-session intensive training covering career planning, resume optimization, and professional communication</li>
                <li>• Excelled in group discussions on topics including cashless economy and digital privacy, demonstrating leadership and analytical thinking</li>
                <li>• Mastered psychometric assessments (TAT, SRT) used in corporate and defense recruitment processes</li>
                <li>• Developed structured essay writing and creative storytelling skills under timed conditions</li>
              </ul>
            </div>

            {/* Certifications */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-foreground mb-3 pb-2 border-b border-muted">
                CERTIFICATIONS & TRAINING
              </h2>
              <ul className="space-y-1 text-muted-foreground text-sm">
                <li>• Employability Skills Certification - Graphic Era Hill University</li>
                <li>• [Add other relevant certifications, MOOCs, or workshops]</li>
              </ul>
            </div>

            {/* Interests */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3 pb-2 border-b border-muted">
                INTERESTS & ACTIVITIES
              </h2>
              <p className="text-muted-foreground text-sm">
                Technology blogging, competitive programming, open-source contribution, debate competitions, 
                volunteering for educational initiatives
              </p>
            </div>
          </Card>

          {/* Print Instructions */}
          <div className="mt-6 p-4 bg-muted/50 rounded-lg text-center text-sm text-muted-foreground print:hidden">
            <strong>💡 To save as PDF:</strong> Click "Download PDF" button above, then in the print dialog, 
            select "Save as PDF" as your destination, adjust margins if needed, and save.
          </div>
        </div>
      </div>
    </section>
  );
};
