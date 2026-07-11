
import { useRef, useCallback } from "react";

export function Sound(src: string, volume = 0.4) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const play = useCallback(() => {
    // On recrée l'instance à chaque clic pour permettre les clics rapides successifs
    const audio = new Audio(src);
    audio.volume = volume;
    audio.play().catch(() => {}); // catch au cas où le navigateur bloque l'autoplay
  }, [src, volume]);

  return play;
}