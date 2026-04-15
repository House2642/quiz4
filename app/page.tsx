"use client";

import { useState } from "react";
import SpellingMode from "@/components/SpellingMode";
import FlashcardMode from "@/components/FlashcardMode";
import CompareMode from "@/components/CompareMode";
import PomodoroTimer from "@/components/PomodoroTimer";
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
      "Cave 1 vs Cave 19. Nagara vs Dravida. Padmapani vs Vajrapani. Write before you reveal — that's where learning happens.",
    badge: "7 compare + 6 connect",
    color: "border-amber-700 hover:border-amber-500",
    accent: "bg-amber-900/20",
  },
];

export default function Home() {
  const [mode, setMode] = useState<Mode>("home");
  const [showTimer, setShowTimer] = useState(false);

  if (mode !== "home") {
    return (
      <div className="min-h-screen bg-zinc-950">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-zinc-950/90 backdrop-blur border-b border-zinc-800 px-4 py-3 flex items-center justify-between">
          <button
            onClick={() => setMode("home")}
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm"
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
          <button
            onClick={() => setShowTimer((t) => !t)}
            className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
            title="Toggle Pomodoro timer"
          >
            ⏱ Timer
          </button>
        </header>

        {/* Timer panel */}
        {showTimer && (
          <div className="border-b border-zinc-800 py-6 px-4 bg-zinc-900/50">
            <PomodoroTimer />
          </div>
        )}

        {/* Mode content */}
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
      {/* Hero */}
      <header className="px-6 pt-14 pb-10 text-center max-w-2xl mx-auto w-full">
        <p className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-2">
          Art History — Quiz 4
        </p>
        <h1 className="text-4xl font-bold text-white mb-3">Study Tool</h1>
        <p className="text-zinc-400 text-base leading-relaxed">
          {TERMS.length} terms · Lobdell method · Active recall first, passive review never
        </p>
      </header>

      {/* Lobdell reminder */}
      <div className="max-w-2xl mx-auto w-full px-6 mb-8">
        <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-5 text-sm text-zinc-400 leading-relaxed">
          <p className="text-zinc-200 font-semibold mb-2">The Lobdell method, in three lines:</p>
          <ul className="space-y-1 list-none">
            <li>
              <span className="text-indigo-400 font-semibold">1. Focus in 25-min sprints.</span>{" "}
              After ~25 min your efficiency collapses — stop and take a 5-min break.
            </li>
            <li>
              <span className="text-amber-400 font-semibold">2. Connect to meaning.</span>{" "}
              Your brain stores meaning, not repetition. Link every new term to something you already know.
            </li>
            <li>
              <span className="text-emerald-400 font-semibold">3. Recite — don&apos;t re-read.</span>{" "}
              80% of your time should be active recall (typing, speaking, writing). Reading your notes is someone else doing the work.
            </li>
          </ul>
        </div>
      </div>

      {/* Mode cards */}
      <main className="max-w-2xl mx-auto w-full px-6 flex flex-col gap-4 flex-1">
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

        {/* Quick-access timer on home screen */}
        <div className="border border-zinc-800 rounded-2xl p-5 mt-2 mb-8">
          <p className="text-zinc-500 text-xs uppercase tracking-widest font-semibold text-center mb-4">
            Pomodoro Timer
          </p>
          <PomodoroTimer />
        </div>
      </main>
    </div>
  );
}
