import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

export const Resume = () => {
  const handleView = () => {
    window.open('/devansh-rawat-resume.pdf', '_blank');
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/devansh-rawat-resume.pdf';
    link.download = 'Devansh-Rawat-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Professional Resume
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              A snapshot of my academic journey, skills, and projects — showcasing my growth as a Computer Science student.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleView}
              size="lg"
              className="group min-w-[200px]"
            >
              <FileText className="mr-2 group-hover:scale-110 transition-transform" size={20} />
              View Resume
            </Button>
            <Button 
              onClick={handleDownload}
              variant="outline"
              size="lg"
              className="group min-w-[200px]"
            >
              <Download className="mr-2 group-hover:scale-110 transition-transform" size={20} />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
