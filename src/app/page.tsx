"use client";
import VoiceInput from "@/components/VoiceInput";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold text-purple-200 mb-8">नमस्ते Jons भाई!</h1>
      <VoiceInput />
    </div>
  );
}