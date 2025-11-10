import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Link as LinkIcon, X, Check } from "lucide-react";
import mentorImg from "@/assets/mentor-placeholder.jpg";

export const Mentor = () => {
  const [mentorLink, setMentorLink] = useState("");
  const [isEditingLink, setIsEditingLink] = useState(false);
  const [tempLink, setTempLink] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("mentor_profile_link");
    if (saved) setMentorLink(saved);
  }, []);

  const handleSaveLink = () => {
    if (tempLink.trim()) {
      localStorage.setItem("mentor_profile_link", tempLink);
      setMentorLink(tempLink);
      setIsEditingLink(false);
      setTempLink("");
    }
  };

  const handleRemoveLink = () => {
    localStorage.removeItem("mentor_profile_link");
    setMentorLink("");
  };

  return (
    <section id="mentor" className="py-20 bg-gradient-to-br from-background via-accent/5 to-background relative overflow-hidden">
      {/* Peaceful Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--accent)/0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--primary)/0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
              Meet My Mentor
            </h2>
            <p className="text-muted-foreground text-lg mb-4">
              A Guide to Professional Excellence & Inner Peace
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-accent/50 via-primary to-accent/50 mx-auto rounded-full shadow-[0_0_15px_hsl(var(--accent)/0.3)]" />
          </div>

          {/* Mentor Card */}
          <Card className="overflow-hidden shadow-[0_8px_30px_hsl(var(--primary)/0.12)] border-accent/20 bg-card/80 backdrop-blur-sm hover:shadow-[0_8px_40px_hsl(var(--accent)/0.2)] transition-all duration-700">
            <div className="md:flex">
              {/* Image Side */}
              <div className="md:w-2/5 bg-gradient-to-br from-accent/10 via-primary/5 to-accent/10 relative overflow-hidden">
                <div className="aspect-[4/5] relative">
                  <img 
                    src={mentorImg} 
                    alt="Dr. Anubha Pundir - Associate Professor at GEHU" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  
                  {/* Peaceful Glow Effect */}
                  <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-1000 bg-gradient-to-t from-accent/20 to-transparent" />
                </div>
              </div>

              {/* Content Side */}
              <div className="md:w-3/5 p-8 md:p-10">
                <h3 className="text-3xl font-bold text-foreground mb-1">
                  Dr. Anubha Pundir
                </h3>
                <p className="text-primary font-semibold text-lg mb-2">
                  Associate Professor
                </p>
                <p className="text-muted-foreground mb-6 text-sm">
                  Practical for Employability Skill Enhancement (PESE)
                </p>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Dr. Anubha Pundir is an accomplished academic and mindfulness practitioner at Graphic Era Hill University. 
                    With a Ph.D. in Environmental Studies and ongoing research in Vedic Yoga techniques, she brings a unique 
                    holistic approach to professional development education. Her academic credentials span multiple Masters 
                    degrees in International Human Resource Management (Australia), Environmental Studies, Yoga, and Human Rights.
                  </p>
                  
                  <p>
                    Her teaching philosophy transcends traditional academics — she nurtures not just professional skills but 
                    also emotional intelligence, mindfulness, and self-awareness. Her research areas include Yog-IKS 
                    (Vedic Techniques & Psychology), HR Management, and Leadership Development.
                  </p>

                  <div className="bg-accent/5 p-5 rounded-xl border-l-4 border-accent/40 my-5 shadow-sm">
                    <p className="text-foreground font-medium mb-2 flex items-center gap-2">
                      <span className="text-accent text-xl">✦</span>
                      A Practice of Peace & Focus
                    </p>
                    <p className="text-sm">
                      At the end of every lecture, Dr. Pundir conducts a 15-minute meditation or mental relaxation therapy 
                      session. This mindful practice helps students release stress, enhance concentration, and build confidence — 
                      qualities essential for both professional success and personal well-being.
                    </p>
                  </div>

                  <p>
                    Honored with numerous prestigious awards including the Rex Karamveer Platinum Chakra Award (UN, 2024), 
                    Dr. Sarvepalli Radhakrishnan Award (2024), and Asia's 1000 Women Innovator Award (2021), she exemplifies 
                    excellence in education and social contribution. Her guidance extends beyond syllabi — she cultivates 
                    discipline, inner calm, and purposeful growth in every student.
                  </p>
                </div>

                {/* Official Profile Link */}
                <div className="mt-6 space-y-3">
                  <a
                    href="https://gehu.ac.in/dehradun/pdp/faculty/dr-anubha-pundir/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-accent transition-colors duration-300 text-sm font-medium group"
                  >
                    <LinkIcon size={16} className="group-hover:scale-110 transition-transform" />
                    <span className="border-b border-primary/30 group-hover:border-accent">
                      View Official GEHU Profile
                    </span>
                  </a>
                  
                  {mentorLink ? (
                    <div className="flex items-center justify-between bg-accent/5 p-3 rounded-lg border border-accent/20 hover:border-accent/40 transition-colors duration-300">
                      <a
                        href={mentorLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-accent transition-colors flex items-center space-x-2"
                      >
                        <Mail size={16} />
                        <span className="text-sm">Personal Meeting Link</span>
                      </a>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleRemoveLink}
                        className="hover:bg-destructive/10 hover:text-destructive"
                      >
                        <X size={16} />
                      </Button>
                    </div>
                  ) : isEditingLink ? (
                    <div className="flex gap-2">
                      <Input
                        placeholder="Paste meeting link (optional)"
                        value={tempLink}
                        onChange={(e) => setTempLink(e.target.value)}
                        className="text-sm"
                      />
                      <Button onClick={handleSaveLink} size="sm">
                        <Check size={16} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setIsEditingLink(false);
                          setTempLink("");
                        }}
                      >
                        <X size={16} />
                      </Button>
                    </div>
                  ) : (
                    <Button
                      variant="outline"
                      onClick={() => setIsEditingLink(true)}
                      className="w-full text-sm hover:bg-accent/10 hover:border-accent/40 transition-all duration-300"
                    >
                      <Mail size={16} className="mr-2" />
                      Add Personal Meeting Link
                    </Button>
                  )}
                </div>

                {/* Gratitude Message */}
                <div className="mt-8 p-6 bg-gradient-to-br from-accent/10 via-primary/5 to-accent/10 rounded-xl border border-accent/20 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
                  
                  <p className="text-foreground italic leading-relaxed relative z-10 text-sm md:text-base">
                    "I am profoundly grateful to Dr. Anubha Pundir for her guidance, patience, and dedication. 
                    Her mentorship transcends academics — she has nurtured my professional competencies while 
                    teaching me mindfulness, emotional balance, and the art of purposeful growth. The meditation 
                    sessions at the end of each class have been transformative, helping me develop focus, resilience, 
                    and inner confidence."
                  </p>
                  <p className="text-right text-muted-foreground mt-4 font-medium relative z-10">— Devansh Rawat</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
