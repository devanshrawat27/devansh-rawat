import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Download, Upload, Trash2 } from "lucide-react";
import { toast } from "sonner";

interface PreferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Preferences {
  linkedIn: string;
  github: string;
  mentorLink: string;
}

export const PreferencesModal = ({ isOpen, onClose }: PreferencesModalProps) => {
  const [prefs, setPrefs] = useState<Preferences>({
    linkedIn: "",
    github: "",
    mentorLink: "",
  });

  useEffect(() => {
    if (isOpen) {
      const linkedIn = localStorage.getItem("linkedin_link") || "https://linkedin.com/in/devansh-rawat-170649268";
      const github = localStorage.getItem("github_link") || "https://github.com/devanshrawat";
      const mentorLink = localStorage.getItem("mentor_profile_link") || "";
      setPrefs({ linkedIn, github, mentorLink });
    }
  }, [isOpen]);

  const handleSave = () => {
    localStorage.setItem("linkedin_link", prefs.linkedIn);
    localStorage.setItem("github_link", prefs.github);
    localStorage.setItem("mentor_profile_link", prefs.mentorLink);
    toast.success("Preferences saved successfully!");
    window.location.reload();
  };

  const handleExportLinks = () => {
    const allLinks: any = { preferences: prefs };
    // Export all session links
    for (let i = 1; i <= 9; i++) {
      const video = localStorage.getItem(`session_${i}_video`);
      const file = localStorage.getItem(`session_${i}_file`);
      const videoEmbed = localStorage.getItem(`video_embed_${i}`);
      if (video || file || videoEmbed) {
        allLinks[`session_${i}`] = { video, file, videoEmbed };
      }
    }
    const finalVideo = localStorage.getItem("video_embed_final");
    if (finalVideo) allLinks.finalReflectionVideo = finalVideo;

    const blob = new Blob([JSON.stringify(allLinks, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "portfolio_links.json";
    a.click();
    toast.success("Links exported successfully!");
  };

  const handleImportLinks = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const data = JSON.parse(event.target?.result as string);
          Object.keys(data).forEach((key) => {
            if (key === "preferences") {
              // Handle preferences separately
              return;
            }
            if (key === "finalReflectionVideo") {
              localStorage.setItem("video_embed_final", data[key]);
            } else if (key.startsWith("session_")) {
              const sessionData = data[key];
              if (sessionData.video) localStorage.setItem(`${key}_video`, sessionData.video);
              if (sessionData.file) localStorage.setItem(`${key}_file`, sessionData.file);
              if (sessionData.videoEmbed) localStorage.setItem(`video_embed_${key.split("_")[1]}`, sessionData.videoEmbed);
            }
          });
          toast.success("Links imported successfully! Reload to see changes.");
        } catch (error) {
          toast.error("Failed to import links. Check file format.");
        }
      };
      reader.readAsText(file);
    }
  };

  const handleClearAll = () => {
    if (confirm("Are you sure you want to clear all saved links and preferences? This cannot be undone.")) {
      localStorage.clear();
      toast.success("All data cleared!");
      window.location.reload();
    }
  };

  const countLinks = () => {
    let count = 0;
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.includes("session_") || key?.includes("video_embed") || key?.includes("mentor")) {
        count++;
      }
    }
    return count;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Your Preferences</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Contact Links */}
          <div className="space-y-4">
            <Label className="text-base font-semibold">Contact & Profile Links</Label>
            <div className="space-y-3">
              <div>
                <Label htmlFor="linkedin" className="text-sm">LinkedIn Profile</Label>
                <Input
                  id="linkedin"
                  placeholder="https://linkedin.com/in/yourprofile"
                  value={prefs.linkedIn}
                  onChange={(e) => setPrefs({ ...prefs, linkedIn: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="github" className="text-sm">GitHub Profile</Label>
                <Input
                  id="github"
                  placeholder="https://github.com/yourusername"
                  value={prefs.github}
                  onChange={(e) => setPrefs({ ...prefs, github: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="mentor" className="text-sm">Mentor Profile / Meeting Link</Label>
                <Input
                  id="mentor"
                  placeholder="https://example.com/mentor-profile"
                  value={prefs.mentorLink}
                  onChange={(e) => setPrefs({ ...prefs, mentorLink: e.target.value })}
                />
              </div>
            </div>
          </div>

          {/* Link Management */}
          <Card className="p-4 bg-muted/50">
            <h3 className="font-semibold mb-3">Manage All Links</h3>
            <div className="text-sm text-muted-foreground mb-4">
              Total saved links: <strong>{countLinks()}</strong>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" onClick={handleExportLinks}>
                <Download size={16} className="mr-2" />
                Export JSON
              </Button>
              <Button variant="outline" size="sm" asChild>
                <label>
                  <Upload size={16} className="mr-2" />
                  Import JSON
                  <input
                    type="file"
                    accept=".json"
                    className="hidden"
                    onChange={handleImportLinks}
                  />
                </label>
              </Button>
              <Button variant="destructive" size="sm" onClick={handleClearAll}>
                <Trash2 size={16} className="mr-2" />
                Clear All
              </Button>
            </div>
          </Card>

          {/* Save Button */}
          <div className="flex justify-end gap-2 pt-4">
            <Button variant="outline" onClick={onClose}>Cancel</Button>
            <Button onClick={handleSave}>Save Preferences</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
