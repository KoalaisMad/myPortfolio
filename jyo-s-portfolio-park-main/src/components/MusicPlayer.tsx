import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";
import { Music2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const MusicPlayer = () => {
    const [minimized, setMinimized] = useState(true);
    const handleMinimize = () => setMinimized(true);
    const handleRestore = () => setMinimized(false);
  const tracks = [
    "https://soundcloud.com/lofifruitsmusic/heat-waves-instrumental",
    "https://soundcloud.com/bennymartinpianist/ed-sheeran-happier-piano-instrumental-cover"
  ];
  const [trackIndex, setTrackIndex] = useState(1);
  const toggleTrack = () => setTrackIndex((prev) => (prev === 0 ? 1 : 0));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-6 right-6 z-50"
    >
      {minimized ? (
        <button
          onClick={handleRestore}
          className="bg-primary text-white rounded-full p-3 shadow-lg flex items-center justify-center hover:bg-primary/80 transition"
          aria-label="Restore Music Player"
        >
          <Music2 className="w-6 h-6" />
        </button>
      ) : (
        <div className="bg-card/90 backdrop-blur-md border border-border rounded-2xl px-2 py-2 shadow-lg flex flex-col items-center gap-2">
          <div className="w-full flex justify-end">
            <button
              onClick={handleMinimize}
              className="text-xs text-muted-foreground hover:text-primary px-2 py-1 rounded-full"
              aria-label="Minimize Music Player"
            >
              Minimize
            </button>
          </div>
          <iframe
            key={trackIndex}
            width="250"
            height="80"
            allow="autoplay"
            title="SoundCloud Player"
            style={{ borderRadius: '1rem', border: 'none' }}
            src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(tracks[trackIndex])}&color=%23ff6699&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}
          />
          <button
            onClick={toggleTrack}
            className="mt-1 px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold shadow hover:bg-primary/80 transition"
          >
            {trackIndex === 0 ? "Play Happier (Piano)" : "Play Heat Waves (LoFi)"}
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default MusicPlayer;
