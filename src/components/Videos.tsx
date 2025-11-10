import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Play, Plus, X, Check } from "lucide-react";
import { SESSIONS_DATA } from "@/data/sessionsData";

export const Videos = () => {
  const [videos, setVideos] = useState<{ [key: number]: string }>({});
  const [finalVideo, setFinalVideo] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [tempLink, setTempLink] = useState("");

  useEffect(() => {
    // Load saved videos
    const savedVideos: { [key: number]: string } = {};
    SESSIONS_DATA.forEach((session) => {
      const saved = localStorage.getItem(`video_embed_${session.id}`);
      if (saved) savedVideos[session.id] = saved;
    });
    setVideos(savedVideos);

    const savedFinal = localStorage.getItem("video_embed_final");
    if (savedFinal) setFinalVideo(savedFinal);
  }, []);

  const extractVideoId = (url: string) => {
    // YouTube
    const youtubeMatch = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    if (youtubeMatch) return `https://www.youtube.com/embed/${youtubeMatch[1]}`;

    // Google Drive
    const driveMatch = url.match(/\/file\/d\/([^\/]+)/);
    if (driveMatch) return `https://drive.google.com/file/d/${driveMatch[1]}/preview`;

    return url;
  };

  const handleSaveVideo = (sessionId: number) => {
    if (tempLink.trim()) {
      const embedUrl = extractVideoId(tempLink);
      localStorage.setItem(`video_embed_${sessionId}`, embedUrl);
      setVideos({ ...videos, [sessionId]: embedUrl });
      setEditingId(null);
      setTempLink("");
    }
  };

  const handleSaveFinalVideo = () => {
    if (tempLink.trim()) {
      const embedUrl = extractVideoId(tempLink);
      localStorage.setItem("video_embed_final", embedUrl);
      setFinalVideo(embedUrl);
      setEditingId(null);
      setTempLink("");
    }
  };

  const handleRemoveVideo = (sessionId: number) => {
    localStorage.removeItem(`video_embed_${sessionId}`);
    const newVideos = { ...videos };
    delete newVideos[sessionId];
    setVideos(newVideos);
  };

  const handleRemoveFinalVideo = () => {
    localStorage.removeItem("video_embed_final");
    setFinalVideo("");
  };

  return (
    <section id="videos" className="py-20 bg-gradient-to-br from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Video Gallery
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Visual documentation of my journey through each session and final reflection
            </p>
          </div>

          {/* Session Videos Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {SESSIONS_DATA.map((session) => (
              <Card key={session.id} className="overflow-hidden group">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative">
                  {videos[session.id] ? (
                    <>
                      <iframe
                        src={videos[session.id]}
                        className="w-full h-full"
                        allowFullScreen
                        title={`Session ${session.id} Video`}
                      />
                      <Button
                        variant="destructive"
                        size="sm"
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => handleRemoveVideo(session.id)}
                      >
                        <X size={16} />
                      </Button>
                    </>
                  ) : editingId === session.id ? (
                    <div className="absolute inset-0 p-4 flex flex-col justify-center gap-2 bg-white">
                      <Input
                        placeholder="Paste video URL"
                        value={tempLink}
                        onChange={(e) => setTempLink(e.target.value)}
                        className="text-sm"
                      />
                      <div className="flex gap-2">
                        <Button size="sm" onClick={() => handleSaveVideo(session.id)} className="flex-1">
                          <Check size={16} className="mr-1" /> Save
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => {
                            setEditingId(null);
                            setTempLink("");
                          }}
                        >
                          <X size={16} />
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => setEditingId(session.id)}
                      className="absolute inset-0 flex flex-col items-center justify-center text-primary hover:text-accent transition-colors"
                    >
                      <Plus size={48} />
                      <span className="mt-2 font-medium">Add Video</span>
                    </button>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground">
                    Session {session.id}: {session.title}
                  </h3>
                </div>
              </Card>
            ))}
          </div>

          {/* Final Reflection Video */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-center text-foreground mb-6">
              Final Reflection Video
            </h3>
            <Card className="overflow-hidden group">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative">
                {finalVideo ? (
                  <>
                    <iframe
                      src={finalVideo}
                      className="w-full h-full"
                      allowFullScreen
                      title="Final Reflection Video"
                    />
                    <Button
                      variant="destructive"
                      size="sm"
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={handleRemoveFinalVideo}
                    >
                      <X size={16} />
                    </Button>
                  </>
                ) : editingId === 0 ? (
                  <div className="absolute inset-0 p-6 flex flex-col justify-center gap-3 bg-white">
                    <Input
                      placeholder="Paste final reflection video URL"
                      value={tempLink}
                      onChange={(e) => setTempLink(e.target.value)}
                    />
                    <div className="flex gap-2">
                      <Button size="lg" onClick={handleSaveFinalVideo} className="flex-1">
                        <Check size={20} className="mr-2" /> Save Video
                      </Button>
                      <Button
                        size="lg"
                        variant="ghost"
                        onClick={() => {
                          setEditingId(null);
                          setTempLink("");
                        }}
                      >
                        <X size={20} />
                      </Button>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => setEditingId(0)}
                    className="absolute inset-0 flex flex-col items-center justify-center text-primary hover:text-accent transition-colors"
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
