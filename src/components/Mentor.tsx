import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Mail, Link as LinkIcon, X, Check, ChevronDown, Heart } from "lucide-react";
import mentorImg from "@/assets/mentor-anubha-pundir.webp";

export const Mentor = () => {
  const [mentorLink, setMentorLink] = useState("");
  const [isEditingLink, setIsEditingLink] = useState(false);
  const [tempLink, setTempLink] = useState("");
  const [isMessageOpen, setIsMessageOpen] = useState(false);

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
    <section id="mentor" className="py-20 bg-gradient-to-br from-amber-50/30 via-background to-amber-50/20 dark:from-background dark:via-amber-950/10 dark:to-background relative overflow-hidden">
      {/* Peaceful Golden Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(45_100%_70%/0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(40_100%_85%/0.06),transparent_50%)]" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-amber-200/20 dark:bg-amber-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-yellow-200/20 dark:bg-yellow-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
              Meet My Mentor
            </h2>
            <p className="text-amber-800 dark:text-amber-200 text-lg mb-4 font-medium">
              A Guide to Professional Excellence & Inner Peace
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 mx-auto rounded-full shadow-[0_0_20px_hsl(45_100%_60%/0.4)]" />
          </div>

          {/* Mentor Card */}
          <Card className="overflow-hidden shadow-[0_8px_30px_hsl(45_80%_60%/0.15)] border-amber-200/40 dark:border-amber-800/40 bg-white/90 dark:bg-card/90 backdrop-blur-sm hover:shadow-[0_8px_40px_hsl(45_90%_65%/0.25)] transition-all duration-700 animate-fade-in-up">
            <div className="md:flex">
              {/* Image Side with Golden Divider */}
              <div className="md:w-[30%] bg-gradient-to-br from-amber-100/40 via-yellow-50/30 to-amber-50/40 dark:from-amber-950/20 dark:via-yellow-950/10 dark:to-amber-900/20 relative">
                <div className="p-6 md:p-8 flex items-center justify-center">
                  <div className="relative max-w-[280px] w-full">
                    <img 
                      src={mentorImg} 
                      alt="Dr. Anubha Pundir - Assistant Professor at GEHU" 
                      className="w-full h-auto object-cover rounded-[22px] shadow-[0_12px_40px_hsl(45_70%_50%/0.3)] dark:shadow-[0_12px_40px_hsl(45_70%_30%/0.4)] relative z-10"
                    />
                    
                    {/* Warm gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-amber-50/30 via-transparent to-amber-100/40 dark:from-amber-900/20 dark:to-amber-800/30 rounded-[22px] pointer-events-none" />
                    
                    {/* Golden glow effect on hover */}
                    <div className="absolute -inset-2 bg-gradient-to-br from-amber-300/40 to-yellow-200/40 dark:from-amber-600/30 dark:to-yellow-500/30 rounded-[26px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />
                  </div>
                </div>

                {/* Golden Vertical Divider Line */}
                <div className="hidden md:block absolute right-0 top-[10%] bottom-[10%] w-[2px] bg-gradient-to-b from-transparent via-amber-400/60 to-transparent" />
              </div>

              {/* Content Side */}
              <div className="md:w-[70%] p-8 md:p-10 md:pl-12">
                <h3 className="text-3xl font-bold text-foreground mb-1">
                  Dr. Anubha Pundir
                </h3>
                <p className="text-amber-700 dark:text-amber-300 font-semibold text-lg mb-2">
                  Assistant Professor
                </p>
                <p className="text-muted-foreground mb-6 text-sm">
                  Practical for Employability Skill Enhancement (PESE)
                </p>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Dr. Anubha Pundir is not just a teacher — she is a true guide, motivator, and source of inspiration. 
                    Her way of teaching goes far beyond textbooks and assignments. Every lecture with her feels like a 
                    step toward personal growth, confidence, and emotional balance.
                  </p>
                  
                  <p>
                    What truly makes her sessions special is the <span className="text-amber-700 dark:text-amber-300 font-semibold">15-minute meditation and therapy practice</span> she 
                    conducts at the end of each class. In those calm moments, she shares beautiful mantras to succeed in life, 
                    encouraging us to focus on peace, gratitude, and determination.
                  </p>

                  <div className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/30 p-5 rounded-xl border-l-4 border-amber-400 dark:border-amber-600 my-5 shadow-[0_4px_20px_hsl(45_80%_60%/0.15)]">
                    <p className="text-foreground font-medium mb-2 flex items-center gap-2">
                      <span className="text-amber-500 text-xl">✦</span>
                      Mantras for Success & Inner Peace
                    </p>
                    <p className="text-sm text-muted-foreground">
                      These sessions are more than just relaxation — they are a reflection of her belief that success is 
                      not only built by skills, but also by self-awareness and inner calm. She teaches us that mindfulness 
                      and discipline are the real foundations of success.
                    </p>
                  </div>

                  <p>
                    Through her guidance, I have learned how to stay composed under pressure, trust my journey, and believe 
                    in steady progress. She has taught me that <span className="text-amber-700 dark:text-amber-300 font-medium">peace of mind is the real power</span> behind 
                    every achievement.
                  </p>
                </div>

                {/* Official Profile Link */}
                <div className="mt-6 space-y-3">
                  <a
                    href="https://gehu.ac.in/dehradun/pdp/faculty/dr-anubha-pundir/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-amber-700 dark:text-amber-300 hover:text-amber-600 dark:hover:text-amber-200 transition-colors duration-300 text-sm font-medium group"
                  >
                    <LinkIcon size={16} className="group-hover:scale-110 transition-transform" />
                    <span className="border-b border-amber-700/30 dark:border-amber-300/30 group-hover:border-amber-600 dark:group-hover:border-amber-200">
                      View Official GEHU Profile
                    </span>
                  </a>
                  
                  {mentorLink ? (
                    <div className="flex items-center justify-between bg-amber-50/50 dark:bg-amber-950/20 p-3 rounded-lg border border-amber-200/40 dark:border-amber-800/40 hover:border-amber-300 dark:hover:border-amber-700 transition-colors duration-300">
                      <a
                        href={mentorLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-700 dark:text-amber-300 hover:text-amber-600 dark:hover:text-amber-200 transition-colors flex items-center space-x-2"
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
                      className="w-full text-sm hover:bg-amber-50 dark:hover:bg-amber-950/30 hover:border-amber-300 dark:hover:border-amber-700 transition-all duration-300"
                    >
                      <Mail size={16} className="mr-2" />
                      Add Personal Meeting Link
                    </Button>
                  )}
                </div>

                {/* Hidden Message for Ma'am */}
                <div className="mt-8">
                  <Collapsible open={isMessageOpen} onOpenChange={setIsMessageOpen}>
                    <CollapsibleTrigger className="w-full">
                      <div className="flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-amber-100 via-yellow-100 to-amber-100 dark:from-amber-950/40 dark:via-yellow-950/40 dark:to-amber-950/40 rounded-xl border border-amber-300/50 dark:border-amber-700/50 hover:border-amber-400 dark:hover:border-amber-600 transition-all duration-300 cursor-pointer group shadow-[0_2px_15px_hsl(45_80%_60%/0.15)]">
                        <Heart className="text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform" size={20} />
                        <span className="text-amber-800 dark:text-amber-200 font-semibold">
                          💌 Hidden Message for Ma'am (Click to Reveal)
                        </span>
                        <ChevronDown 
                          className={`text-amber-600 dark:text-amber-400 transition-transform duration-300 ${isMessageOpen ? 'rotate-180' : ''}`} 
                          size={20} 
                        />
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-4">
                      <div className="p-6 bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-50 dark:from-amber-950/30 dark:via-yellow-950/30 dark:to-amber-950/30 rounded-xl border border-amber-300/60 dark:border-amber-700/60 shadow-[0_4px_25px_hsl(45_80%_60%/0.2)] relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-amber-300/20 dark:bg-amber-400/10 rounded-full blur-3xl animate-pulse" />
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-yellow-300/20 dark:bg-yellow-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                        
                        <p className="text-amber-900 dark:text-amber-100 font-semibold mb-3 relative z-10">
                          Dear Ma'am,
                        </p>
                        <div className="space-y-3 text-foreground leading-relaxed relative z-10">
                          <p>
                            Thank you for being more than a teacher — for being a mentor who guided us to believe in ourselves.
                            Your meditation sessions and success mantras have taught me that peace of mind is the real power behind every achievement.
                          </p>
                          <p>
                            I've learned from you that success is not just about skill, but also about self-awareness and gratitude.
                          </p>
                        </div>
                        <p className="text-right text-amber-800 dark:text-amber-300 mt-4 font-semibold relative z-10">
                          With respect and gratitude,<br />
                          — Devansh Rawat
                        </p>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
