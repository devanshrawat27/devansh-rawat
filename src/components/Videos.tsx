import { Button } from "@/components/ui/button";

export const Videos = () => {
  return (
    <section
      id="videos"
      className="py-20 bg-gradient-to-br from-secondary/30 to-background"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Video Gallery
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />

          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            Click the button below to view all session videos and the final reflection video.
          </p>

          {/* ⭐ Clean Single Video Section (REPLACES ALL CARDS) */}
          <div className="bg-white/40 backdrop-blur-md p-10 rounded-2xl shadow-md hover:shadow-xl transition-all border border-white/30">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              All Session Videos
            </h3>

            <p className="text-muted-foreground mb-6">
              View the complete video gallery recorded throughout this semester.
            </p>

            <Button
              onClick={() =>
                window.open("https://learniverse-gallery.lovable.app", "_blank")
              }
              className="px-6 py-3 text-lg bg-primary text-white hover:bg-primary/80"
            >
              View Videos
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};
