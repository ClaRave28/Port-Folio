import { useRef, useEffect, useCallback } from "react";

// Un seul AudioContext partagé pour toute l'app (évite d'en recréer un par hook)
let sharedContext: AudioContext | null = null;
function getAudioContext() {
  if (!sharedContext) {
    sharedContext = new (window.AudioContext ||
      (window as any).webkitAudioContext)();
  }
  return sharedContext;
}

export function Sound(src: string, volume = 0.4) {
  const bufferRef = useRef<AudioBuffer | null>(null);

  useEffect(() => {
    let cancelled = false;
    const ctx = getAudioContext();

    fetch(src)
      .then((res) => res.arrayBuffer())
      .then((arrayBuffer) => ctx.decodeAudioData(arrayBuffer))
      .then((decoded) => {
        if (!cancelled) bufferRef.current = decoded;
      })
      .catch((err) => console.error("Erreur chargement audio:", err));

    return () => {
      cancelled = true;
    };
  }, [src]);

  const play = useCallback(() => {
    const ctx = getAudioContext();
    const buffer = bufferRef.current;
    if (!buffer) return;

   
    if (ctx.state === "suspended") {
      ctx.resume();
    }

    const source = ctx.createBufferSource();
    source.buffer = buffer;

    const gainNode = ctx.createGain();
    gainNode.gain.value = volume;

    source.connect(gainNode).connect(ctx.destination);
    source.start(0);
  }, [volume]);

  return play;
}