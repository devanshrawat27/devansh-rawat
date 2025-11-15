import { useState } from "react";
import { Card } from "@/components/ui/card";
import { FileText, ChevronDown } from "lucide-react";

const flashcardsData = [
  {
    id: 1,
    topic: "AI Replacing Human Creativity: Boon or Threat?",
    points: [
      "AI tools like ChatGPT, Midjourney, and DALL·E create outputs faster, but emotions and originality still come from humans.",
      "AI has increased efficiency in repetitive design, content, and idea generation tasks.",
      "Over-dependence on AI may weaken imagination and critical thinking.",
      "'Human + AI collaboration' represents the best model for the creative future.",
      "Ethical question: Who is the true creator of AI-generated art — the machine or the human prompter?"
    ]
  },
  {
    id: 2,
    topic: "The Yamuna River Crisis: Development vs Environment",
    points: [
      "Yamuna is one of India's most polluted rivers — 80% pollution from sewage and industries.",
      "Government initiatives like Yamuna Action Plan and Namami Gange are slow and partial.",
      "Urbanization and encroachments have shrunk the river ecosystem.",
      "Public participation (plastic-free habits, segregation, cleanups) is crucial.",
      "Sustainable development must balance progress with ecological protection."
    ]
  },
  {
    id: 3,
    topic: "Permaculture: The Future of Sustainable Agriculture",
    points: [
      "Permaculture preserves soil, water, and biodiversity.",
      "A sustainable alternative to monoculture and chemical-based farming.",
      "Long-term low-cost, high-resilience system for farmers.",
      "Limited adoption due to low awareness and lack of support.",
      "Helps ensure food security + ecological balance."
    ]
  },
  {
    id: 4,
    topic: "Smart Cities: Are They Really Smart for the Environment?",
    points: [
      "Smart cities aim for sustainability, but urbanization reduces green spaces.",
      "Tech helps monitor pollution but prevention remains weak.",
      "Infrastructure growth leads to deforestation and concrete expansion.",
      "True smart cities balance innovation with nature.",
      "Urban planning must include green infrastructure."
    ]
  },
  {
    id: 5,
    topic: "Technology Makes Us Connected but Emotionally Disconnected",
    points: [
      "Social media increases connectivity but reduces real interactions.",
      "Digital actions replace real emotions (likes, emojis).",
      "Overuse increases loneliness and anxiety.",
      "Digital detox and mindful tech use is important.",
      "Real connection = balancing online + offline life."
    ]
  }
];

export const Assignments = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

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
          <div>
            <div className="flex items-center gap-3 mb-6">
              <FileText className="text-primary" size={32} />
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Flash Card Activity
              </h3>
            </div>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              In this activity, we created 5 flash cards based on Group Discussion topics. These cards helped us practice structuring our thoughts quickly and speaking with confidence.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {flashcardsData.map((flashcard) => (
                <Card 
                  key={flashcard.id}
                  className={`p-6 transition-all duration-300 cursor-pointer border-2 hover:shadow-xl ${
                    expandedCard === flashcard.id 
                      ? 'border-primary shadow-lg scale-[1.02]' 
                      : 'border-border hover:border-primary/50'
                  }`}
                  onClick={() => toggleCard(flashcard.id)}
                >
                  <div className="flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-primary mb-2">
                          Topic {flashcard.id}
                        </div>
                        <h4 className="text-base font-bold text-foreground leading-snug">
                          {flashcard.topic}
                        </h4>
                      </div>
                      <ChevronDown 
                        className={`text-primary transition-transform duration-300 flex-shrink-0 ml-2 ${
                          expandedCard === flashcard.id ? 'rotate-180' : ''
                        }`}
                        size={20}
                      />
                    </div>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-300 ${
                        expandedCard === flashcard.id 
                          ? 'max-h-96 opacity-100' 
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <ul className="space-y-3 mt-4 pt-4 border-t border-border">
                        {flashcard.points.map((point, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-primary font-bold flex-shrink-0 mt-0.5">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
