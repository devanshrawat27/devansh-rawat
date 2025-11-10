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
    <section id="mentor" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Meet My Mentor
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
          </div>

          {/* Mentor Card */}
          <Card className="overflow-hidden shadow-xl">
            <div className="md:flex">
              {/* Image Side */}
              <div className="md:w-1/3 bg-gradient-to-br from-primary/20 to-accent/20">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={mentorImg} 
                    alt="Dr. Anubha Pundir" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </div>

              {/* Content Side */}
              <div className="md:w-2/3 p-8">
                <h3 className="text-3xl font-bold text-foreground mb-2">
                  Dr. Anubha Pundir
                </h3>
                <p className="text-primary font-semibold mb-6">
                  Course Mentor | Employability Skill Enhancement
                </p>

                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Dr. Anubha Pundir is a distinguished educator and mentor at Graphic Era Hill University, 
                    specializing in employability skills development and student career readiness. With extensive 
                    experience in soft skills training, communication coaching, and professional development programs, 
                    she has guided hundreds of students toward successful careers in technology and beyond.
                  </p>
                  
                  <p>
                    Her teaching philosophy emphasizes holistic development—balancing technical competence with 
                    essential interpersonal skills, critical thinking, and self-awareness. Through innovative 
                    pedagogical approaches including psychometric assessments, group discussions, and reflective 
                    journaling, Dr. Pundir creates transformative learning experiences that prepare students for 
                    the complexities of modern workplaces.
                  </p>

                  <p>
                    Under her mentorship, I discovered the power of structured communication, the importance of 
                    continuous self-improvement, and the confidence to articulate my ideas persuasively. Her 
                    unwavering support and constructive feedback have been instrumental in my professional growth.
                  </p>
                </div>

                {/* Links */}
                <div className="mt-6 space-y-3">
                  {mentorLink ? (
                    <div className="flex items-center justify-between bg-primary/5 p-3 rounded-lg">
                      <a
                        href={mentorLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline flex items-center space-x-2"
                      >
                        <LinkIcon size={18} />
                        <span>View Profile / Meeting Link</span>
                      </a>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleRemoveLink}
                      >
                        <X size={16} />
                      </Button>
                    </div>
                  ) : isEditingLink ? (
                    <div className="flex gap-2">
                      <Input
                        placeholder="Paste mentor profile or meeting link"
                        value={tempLink}
                        onChange={(e) => setTempLink(e.target.value)}
                      />
                      <Button onClick={handleSaveLink}>
                        <Check size={18} />
                      </Button>
                      <Button
                        variant="ghost"
                        onClick={() => {
                          setIsEditingLink(false);
                          setTempLink("");
                        }}
                      >
                        <X size={18} />
                      </Button>
                    </div>
                  ) : (
                    <Button
                      variant="outline"
                      onClick={() => setIsEditingLink(true)}
                      className="w-full"
                    >
                      <LinkIcon size={18} className="mr-2" />
                      Add Profile / Meeting Link
                    </Button>
                  )}
                </div>

                {/* Gratitude Message */}
                <div className="mt-6 p-4 bg-accent/10 rounded-lg border-l-4 border-accent">
                  <p className="text-foreground italic">
                    "I am profoundly grateful to Dr. Anubha Pundir for her guidance, patience, and dedication. 
                    Her mentorship has been transformative, equipping me not just with skills, but with the 
                    confidence and mindset to excel in my career journey."
                  </p>
                  <p className="text-right text-muted-foreground mt-2">— Devansh Rawat</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
