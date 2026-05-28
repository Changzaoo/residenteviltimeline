"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

function splitNarrationText(text: string) {
  const clean = text.replace(/\s+/g, " ").trim();
  if (!clean) return [];

  const sentences = clean.match(/[^.!?;:]+[.!?;:]?/g) ?? [clean];
  const chunks: string[] = [];
  let current = "";

  for (const sentence of sentences) {
    const next = `${current} ${sentence}`.trim();
    if (next.length > 230 && current) {
      chunks.push(current);
      current = sentence.trim();
    } else {
      current = next;
    }
  }

  if (current) chunks.push(current);
  return chunks;
}

function pickPtBrVoice(voices: SpeechSynthesisVoice[]) {
  const preferredNames = [/maria/i, /francisca/i, /heloisa/i, /luciana/i, /brasil/i, /brazil/i];
  return (
    voices.find((voice) => voice.lang.toLowerCase() === "pt-br" && preferredNames.some((pattern) => pattern.test(voice.name))) ??
    voices.find((voice) => voice.lang.toLowerCase() === "pt-br") ??
    voices.find((voice) => voice.lang.toLowerCase().startsWith("pt")) ??
    voices[0]
  );
}

export function NarrationControls({
  text,
  title = "Narrar texto"
}: {
  text: string;
  title?: string;
}) {
  const chunks = useMemo(() => splitNarrationText(text), [text]);
  const [supported] = useState(() => typeof window !== "undefined" && "speechSynthesis" in window);
  const [speaking, setSpeaking] = useState(false);
  const [paused, setPaused] = useState(false);
  const [voiceName, setVoiceName] = useState("voz PT-BR");
  const chunksRef = useRef<string[]>([]);
  const indexRef = useRef(0);
  const cancelledRef = useRef(false);

  const stop = useCallback(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    cancelledRef.current = true;
    window.speechSynthesis.cancel();
    setSpeaking(false);
    setPaused(false);
  }, []);

  const speakNext = useCallback(function runNext() {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    const chunk = chunksRef.current[indexRef.current];
    if (!chunk) {
      setSpeaking(false);
      setPaused(false);
      return;
    }

    const voices = window.speechSynthesis.getVoices();
    const utterance = new SpeechSynthesisUtterance(chunk);
    utterance.lang = "pt-BR";
    utterance.voice = pickPtBrVoice(voices);
    utterance.rate = 0.88;
    utterance.pitch = 0.96;
    utterance.volume = 0.92;
    utterance.onend = () => {
      if (cancelledRef.current) return;
      indexRef.current += 1;
      if (indexRef.current < chunksRef.current.length) {
        runNext();
      } else {
        setSpeaking(false);
        setPaused(false);
      }
    };
    utterance.onerror = () => {
      setSpeaking(false);
      setPaused(false);
    };

    window.speechSynthesis.speak(utterance);
  }, []);

  const play = useCallback(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window) || chunks.length === 0) return;
    if (paused) {
      window.speechSynthesis.resume();
      setPaused(false);
      setSpeaking(true);
      return;
    }

    window.speechSynthesis.cancel();
    cancelledRef.current = false;
    chunksRef.current = chunks;
    indexRef.current = 0;
    setSpeaking(true);
    setPaused(false);
    speakNext();
  }, [chunks, paused, speakNext]);

  const pause = useCallback(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.pause();
    setPaused(true);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    const syncVoice = () => {
      const voice = pickPtBrVoice(window.speechSynthesis.getVoices());
      if (voice) setVoiceName(voice.name);
    };

    const frame = window.requestAnimationFrame(syncVoice);
    window.speechSynthesis.addEventListener("voiceschanged", syncVoice);
    return () => {
      window.cancelAnimationFrame(frame);
      window.speechSynthesis.removeEventListener("voiceschanged", syncVoice);
      stop();
    };
  }, [stop]);

  useEffect(() => stop, [text, stop]);

  if (!supported || chunks.length === 0) {
    return (
      <div className="narration-controls muted" aria-label="Narracao indisponivel">
        <span>Narrador PT-BR indisponível neste navegador</span>
      </div>
    );
  }

  return (
    <div className="narration-controls" aria-label={title}>
      <div>
        <strong>Narrador IA</strong>
        <span>{voiceName} · PT-BR suave</span>
      </div>
      <div className="narration-actions">
        <button onClick={play} type="button">
          {paused ? "Continuar" : speaking ? "Reiniciar" : "Ouvir"}
        </button>
        <button disabled={!speaking || paused} onClick={pause} type="button">
          Pausar
        </button>
        <button disabled={!speaking && !paused} onClick={stop} type="button">
          Parar
        </button>
      </div>
    </div>
  );
}
