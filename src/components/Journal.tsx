import { SessionCard } from "./SessionCard";
import { SESSIONS_DATA } from "@/data/sessionsData";

export const Journal = () => {
  return (
    <section id="journal" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Journal of Sessions
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive chronicle of my learning journey through nine transformative sessions, 
              documenting growth in communication, professional skills, and reflective practice.
            </p>
          </div>

          {/* Session Cards */}
          <div className="space-y-4">
            {SESSIONS_DATA.map((session) => (
              <SessionCard key={session.id} session={session} />
            ))}
          </div>

          {/* Help Text */}
          <div className="mt-8 p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>📹 How to add videos:</strong> Record or upload your session videos to YouTube or Google Drive, 
              then paste the shareable link in the "Add Video Link" field. Recommended format: session01_intro.mp4. 
              Maximum recommended file size: 100MB for smooth playback.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
