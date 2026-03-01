"use client";
import { useState } from "react";

export default function VoiceInput() {
  const [isListening, setIsListening] = useState(false);

  const startListening = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "hi-IN";
    recognition.onresult = (e) => {
      const transcript = e.results[0][0].transcript;
      alert(`Jons भाई ने कहा: ${transcript}`);
    };
    recognition.start();
    setIsListening(true);
  };

  return (
    <button
      onClick={startListening}
      className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-full transition-all"
    >
      {isListening ? "🎤 सुन रहा हूँ..." : "🎤 बोलो Jons भाई"}
    </button>
  );
}