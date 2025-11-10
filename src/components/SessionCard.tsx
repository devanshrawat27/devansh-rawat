import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown, ChevronUp, Link as LinkIcon, FileText, X, Check } from "lucide-react";
import { SessionData } from "@/data/sessionsData";

interface SessionCardProps {
  session: SessionData;
}

export const SessionCard = ({ session }: SessionCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [videoLink, setVideoLink] = useState("");
  const [fileLink, setFileLink] = useState("");
  const [showVideoInput, setShowVideoInput] = useState(false);
  const [showFileInput, setShowFileInput] = useState(false);
  const [tempVideoLink, setTempVideoLink] = useState("");
  const [tempFileLink, setTempFileLink] = useState("");

  // Load saved links
  useEffect(() => {
    const savedVideoLink = localStorage.getItem(`session_${session.id}_video`);
    const savedFileLink = localStorage.getItem(`session_${session.id}_file`);
    if (savedVideoLink) setVideoLink(savedVideoLink);
    if (savedFileLink) setFileLink(savedFileLink);
  }, [session.id]);

  const handleSaveVideoLink = () => {
    if (tempVideoLink.trim()) {
      localStorage.setItem(`session_${session.id}_video`, tempVideoLink);
      setVideoLink(tempVideoLink);
      setShowVideoInput(false);
      setTempVideoLink("");
    }
  };

  const handleSaveFileLink = () => {
    if (tempFileLink.trim()) {
      localStorage.setItem(`session_${session.id}_file`, tempFileLink);
      setFileLink(tempFileLink);
      setShowFileInput(false);
      setTempFileLink("");
    }
  };

  const handleRemoveVideoLink = () => {
    localStorage.removeItem(`session_${session.id}_video`);
    setVideoLink("");
  };

  const handleRemoveFileLink = () => {
    localStorage.removeItem(`session_${session.id}_file`);
    setFileLink("");
  };

  const isValidUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-primary/5 to-accent/5 hover:from-primary/10 hover:to-accent/10 transition-colors"
      >
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
            {session.id}
          </div>
          <h3 className="text-lg font-semibold text-foreground text-left">
            {session.title}
          </h3>
        </div>
        {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="p-6 space-y-4">
          {/* Summary */}
          <div>
            <h4 className="font-semibold text-foreground mb-2">Summary</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {session.summary}
            </p>
          </div>

          {/* Key Learnings */}
          <div>
            <h4 className="font-semibold text-foreground mb-2">Key Learnings</h4>
            <ul className="space-y-2">
              {session.learnings.map((learning, index) => (
                <li key={index} className="flex items-start space-x-2 text-sm">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">{learning}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Personal Reflection */}
          <div>
            <h4 className="font-semibold text-foreground mb-2">Personal Reflection</h4>
            <p className="text-muted-foreground text-sm italic border-l-4 border-primary pl-4">
              {session.reflection}
            </p>
          </div>

          {/* Links Section */}
          <div className="pt-4 border-t space-y-3">
            {/* Video Link */}
            <div>
              {videoLink ? (
                <div className="flex items-center justify-between bg-primary/5 p-3 rounded-lg">
                  <div className="flex items-center space-x-2 flex-1 min-w-0">
                    <LinkIcon size={16} className="text-primary flex-shrink-0" />
                    <a
                      href={videoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm truncate"
                    >
                      Video Link
                    </a>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleRemoveVideoLink}
                    className="flex-shrink-0"
                  >
                    <X size={16} />
                  </Button>
                </div>
              ) : showVideoInput ? (
                <div className="flex gap-2">
                  <Input
                    placeholder="Paste video link (YouTube/Drive)"
                    value={tempVideoLink}
                    onChange={(e) => setTempVideoLink(e.target.value)}
                    className="text-sm"
                  />
                  <Button size="sm" onClick={handleSaveVideoLink}>
                    <Check size={16} />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => {
                      setShowVideoInput(false);
                      setTempVideoLink("");
                    }}
                  >
                    <X size={16} />
                  </Button>
                </div>
              ) : (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowVideoInput(true)}
                  className="w-full"
                >
                  <LinkIcon size={16} className="mr-2" />
                  Add Video Link
                </Button>
              )}
            </div>

            {/* File Link */}
            <div>
              {fileLink ? (
                <div className="flex items-center justify-between bg-accent/5 p-3 rounded-lg">
                  <div className="flex items-center space-x-2 flex-1 min-w-0">
                    <FileText size={16} className="text-accent flex-shrink-0" />
                    <a
                      href={fileLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline text-sm truncate"
                    >
                      File Link
                    </a>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleRemoveFileLink}
                    className="flex-shrink-0"
                  >
                    <X size={16} />
                  </Button>
                </div>
              ) : showFileInput ? (
                <div className="flex gap-2">
                  <Input
                    placeholder="Paste file link (Drive/Dropbox)"
                    value={tempFileLink}
                    onChange={(e) => setTempFileLink(e.target.value)}
                    className="text-sm"
                  />
                  <Button size="sm" onClick={handleSaveFileLink}>
                    <Check size={16} />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => {
                      setShowFileInput(false);
                      setTempFileLink("");
                    }}
                  >
                    <X size={16} />
                  </Button>
                </div>
              ) : (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowFileInput(true)}
                  className="w-full"
                >
                  <FileText size={16} className="mr-2" />
                  Add File Link
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};
