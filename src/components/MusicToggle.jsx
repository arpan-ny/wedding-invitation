import { useRef, useState, useEffect } from "react";
import { asset } from "../lib/asset";
import { Icon } from "./Icon";

export function MusicToggle({ site }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const { music } = site;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.1;

    audio.play().then(
      () => setPlaying(true),
      () => setPlaying(false),
    );
  }, []);

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }

    audio.play().then(
      () => setPlaying(true),
      () => setPlaying(false),
    );
  }

  return (
    <div className="fixed right-4 bottom-24 z-40">
      <audio
        ref={audioRef}
        src={asset(music.src)}
        preload="auto"
        loop
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />

      <button
        type="button"
        onClick={toggle}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-page text-accent-deep shadow-md"
        aria-pressed={playing}
        aria-label={playing ? music.labelPause : music.labelPlay}
      >
        <Icon name={playing ? "pause" : "music"} />
      </button>
    </div>
  );
}
