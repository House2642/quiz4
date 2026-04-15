"use client";

import { useState } from "react";
import SpellingMode from "@/components/SpellingMode";
import FlashcardMode from "@/components/FlashcardMode";
import CompareMode from "@/components/CompareMode";
import { TERMS } from "@/lib/terms";

type Mode = "home" | "spell" | "flashcard" | "compare";

const MODES = [
  {
    id: "spell" as Mode,
    title: "Spelling Drill",
    icon: "✏️",
    description:
      "Read the definition, type the term. Character-by-character feedback shows exactly where you mis-spelled.",
    badge: `${TERMS.length} terms`,
    color: "border-indigo-700 hover:border-indigo-500",
    accent: "bg-indigo-900/30",
  },
  {
    id: "flashcard" as Mode,
    title: "Flashcards",
    icon: "🃏",
    description:
      "See term → recall definition (or flip it). Self-rate each card. Missed cards are drilled again at the end.",
    badge: `${TERMS.length} cards`,
    color: "border-violet-700 hover:border-violet-500",
    accent: "bg-violet-900/20",
  },
  {
    id: "compare" as Mode,
    title: "Compare & Connect",
    icon: "⚖️",
    description:
      "Cave 1 vs Cave 19. Nagara vs Dravida. Gupta vs Kushana. Write before you reveal.",
    badge: "7 compare + 6 connect",
    color: "border-amber-700 hover:border-amber-500",
    accent: "bg-amber-900/20",
  },
];

export default function Home() {
  const [mode, setMode] = useState<Mode>("home");

  if (mode !== "home") {
    return (
      <div className="min-h-screen bg-zinc-950">
        <header className="sticky top-0 z-10 bg-zinc-950/90 backdrop-blur border-b border-zinc-800 px-4 py-3 flex items-center justify-between">
          <button
            onClick={() => setMode("home")}
            className="text-zinc-400 hover:text-white transition-colors text-sm"
          >
            ← Back
          </button>
          <h1 className="text-sm font-semibold text-zinc-200">
            {mode === "spell"
              ? "Spelling Drill"
              : mode === "flashcard"
              ? "Flashcards"
              : "Compare & Connect"}
          </h1>
          <div className="w-10" />
        </header>
        <main className="px-4 py-8">
          {mode === "spell" && <SpellingMode />}
          {mode === "flashcard" && <FlashcardMode />}
          {mode === "compare" && <CompareMode />}
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col">
      <header className="px-6 pt-14 pb-10 text-center max-w-2xl mx-auto w-full">
        <p className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-2">
          ARTH 105
        </p>
        <h1 className="text-4xl font-bold text-white mb-3">Quiz 4 Study Tool</h1>
        <p className="text-zinc-400 text-base">{TERMS.length} terms</p>
      </header>

      <main className="max-w-2xl mx-auto w-full px-6 flex flex-col gap-4 pb-14">
        {MODES.map((m) => (
          <button
            key={m.id}
            onClick={() => setMode(m.id)}
            className={`w-full text-left border rounded-2xl p-5 transition-colors ${m.color} ${m.accent}`}
          >
            <div className="flex items-start gap-4">
              <span className="text-3xl mt-0.5 select-none">{m.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-white font-bold text-lg">{m.title}</span>
                  <span className="px-2 py-0.5 bg-zinc-800 text-zinc-400 text-xs rounded-full">
                    {m.badge}
                  </span>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">{m.description}</p>
              </div>
              <span className="text-zinc-500 text-xl mt-1">→</span>
            </div>
          </button>
        ))}
      </main>
    </div>
  );
}
