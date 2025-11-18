import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Play, Plus, X, Check } from "lucide-react";
import { SESSIONS_DATA } from "@/data/sessionsData";
import videosJson from "@/data/videos.json";
import { saveVideoToJson, saveFinalVideoToJson } from "@/utils/saveVideos";

export const Videos = () => {
  const [videos, setVideos] = useState<{ [key: number]: string }>({});
  const [finalVideo, setFinalVideo] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [tempLink, setTempLink] = useState("");

  useEffect(() => {
    const loadedVideos: any = {};
    videosJson.sessions.forEach((s: any) => {
      if (s.url) loadedVideos[s.id] = s.url;
    });
    setVideos(loadedVideos);
    setFinalVideo(videosJson.finalVideo);
  }, []);

  const extractVideoId = (url: string) => {
    const youtubeMatch = url.match(
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
    );
    if (youtubeMatch) return `https://www.youtube.com/embed/${youtubeMatch[1]}`;

    const driveMatch = url.match(/\/file\/d\/([^\/]+)/);
    if (driveMatch)
      return `https://drive.google.com/file/d/${driveMatch[1]}/preview`;

    return url;
  };

  const handleSaveVideo = (sessionId: number) => {
    if (!tempLink.trim()) return;
    const embedUrl = extractVideoId(tempLink);

    saveVideoToJson(sessionId, embedUrl);

    setVideos({ ...videos, [sessionId]: embedUrl });
    setEditingId(null);
    setTempLink("");
  };

  const handleSaveFinal = () => {
    if (!tempLink.trim()) return;
    const embedUrl = extractVideoId(tempLink);

    saveFinalVideoToJson(embedUrl);

    setFinalVideo(embedUrl);
    setEditingId(null);
    setTempLink("");
  };

  const handleRemoveVideo = (sessionId: number) => {
    saveVideoToJson(sessionId, "");
    const copy = { ...videos };
    delete copy[sessionId];
    setVideos(copy);
  };

  const handleRemoveFinalVideo = () => {
    saveFinalVideoToJson("");
    setFinalVideo("");
  };

  return (
    <section id="videos" className="py-20 bg-gradient-to-br from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Video Gallery
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Visual documentation of my journey through each session and final reflection
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {SESSIONS_DATA.map((s) => (
              <Card key={s.id} className="overflow-hidden group">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative">
                  {videos[s.id] ? (
                    <>
                      <iframe src={videos[s.id]} className="w-full h-full" allowFullScreen />
                      <Button
                        variant="destructive"
                        size="sm"
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => handleRemoveVideo(s.id)}
                      >
                        <X size={16} />
                      </Button>
                    </>
                  ) : editingId === s.id ? (
                    <div className="absolute inset-0 p-4 bg-white flex flex-col justify-center gap-2">
                      <Input
                        placeholder="Paste video URL"
                        value={tempLink}
                        onChange={(e) => setTempLink(e.target.value)}
                      />
                      <div className="flex gap-2">
                        <Button size="sm" onClick={() => handleSaveVideo(s.id)} className="flex-1">
                          <Check size={16} /> Save
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => { setEditingId(null); setTempLink(""); }}>
                          <X size={16} />
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => setEditingId(s.id)}
                      className="absolute inset-0 flex flex-col items-center justify-center text-primary"
                    >
                      <Plus size={48} />
                      <span className="mt-2 font-medium">Add Video</span>
                    </button>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground">
                    Session {s.id}: {s.title}
                  </h3>
                </div>
              </Card>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-center text-foreground mb-6">
              Final Reflection Video
            </h3>

            <Card className="overflow-hidden group">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative">
                {finalVideo ? (
                  <>
                    <iframe src={finalVideo} className="w-full h-full" allowFullScreen />
                    <Button
                      variant="destructive"
                      size="sm"
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100"
                      onClick={handleRemoveFinalVideo}
                    >
                      <X size={16} />
                    </Button>
                  </>
                ) : editingId === 0 ? (
                  <div className="absolute inset-0 p-6 bg-white flex flex-col gap-3">
                    <Input
                      placeholder="Paste final video URL"
                      value={tempLink}
                      onChange={(e) => setTempLink(e.target.value)}
                    />
                    <div className="flex gap-2">
                      <Button size="lg" onClick={handleSaveFinal} className="flex-1">
                        <Check size={20} /> Save Video
                      </Button>
                      <Button variant="ghost" size="lg" onClick={() => { setEditingId(null); setTempLink(""); }}>
                        <X size={20} />
                      </Button>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => setEditingId(0)}
                    className="absolute inset-0 flex flex-col items-center justify-center text-primary"
                  >
                    <Play size={64} />
                    <span className="mt-4 text-xl font-medium">Add Final Reflection Video</span>
                  </button>
                )}
              </div>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};
