import videosData from "@/data/videos.json";

export const saveVideoToJson = (sessionId: number, url: string) => {
  const index = videosData.sessions.findIndex((s) => s.id === sessionId);
  if (index !== -1) {
    videosData.sessions[index].url = url;
  }
};

export const saveFinalVideoToJson = (url: string) => {
  videosData.finalVideo = url;
};
