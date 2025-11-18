import { Button } from "@/components/ui/button";

export const Videos = () => {
  return (
    <section
      id="videos"
      className="py-20 bg-gradient-to-br from-secondary/30 to-background"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Video Gallery
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />

          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            Watch all the session videos and final reflections in one place.
          </p>

          {/* ⭐ NEW CLEAN VIDEO CARD / BUTTON */}
          <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-10 rounded-2xl shadow-lg hover:shadow-xl transition cursor-pointer">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              All Session Videos
            </h3>

            <p className="text-muted-foreground mb-6">
              Click below to view the complete video gallery.
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
