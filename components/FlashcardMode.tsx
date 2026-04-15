"use client";

import { useState } from "react";
import { TERMS, CATEGORIES, Term } from "@/lib/terms";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

type Side = "term" | "definition";
type Rating = "know" | "unsure" | "dont-know";

interface CardState {
  term: Term;
  rating?: Rating;
}

export default function FlashcardMode() {
  const [showDefinition, setShowDefinition] = useState(false);
  const [front, setFront] = useState<Side>("term");
  const [cards, setCards] = useState<CardState[]>(() =>
    shuffle(TERMS).map((t) => ({ term: t }))
  );
  const [index, setIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [filterCategory, setFilterCategory] = useState<string>("all");

  const filteredCards =
    filterCategory === "all"
      ? cards
      : cards.filter((c) => c.term.category === filterCategory);

  const current = filteredCards[index % Math.max(filteredCards.length, 1)];

  const rate = (r: Rating) => {
    setCards((prev) =>
      prev.map((c) => (c.term.id === current.term.id ? { ...c, rating: r } : c))
    );
    advance();
  };

  const advance = () => {
    setShowDefinition(false);
    if (index + 1 >= filteredCards.length) {
      setShowResults(true);
    } else {
      setIndex((i) => i + 1);
    }
  };

  const restart = (onlyWeak = false) => {
    const source = onlyWeak
      ? cards.filter((c) => c.rating === "dont-know" || c.rating === "unsure")
      : cards;
    setCards(
      shuffle(source.map((c) => ({ term: c.term })))
    );
    setIndex(0);
    setShowDefinition(false);
    setShowResults(false);
  };

  const known = cards.filter((c) => c.rating === "know").length;
  const unsure = cards.filter((c) => c.rating === "unsure").length;
  const dontKnow = cards.filter((c) => c.rating === "dont-know").length;
  const total = filteredCards.length;
  const rated = filteredCards.filter((c) => c.rating).length;

  if (showResults) {
    return (
      <div className="flex flex-col gap-6 max-w-2xl mx-auto">
        <h3 className="text-xl font-bold text-white text-center">Round Complete</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-emerald-900/30 border border-emerald-700 rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-emerald-400">{known}</p>
            <p className="text-sm text-emerald-300 mt-1">Know it</p>
          </div>
          <div className="bg-amber-900/30 border border-amber-700 rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-amber-400">{unsure}</p>
            <p className="text-sm text-amber-300 mt-1">Unsure</p>
          </div>
          <div className="bg-red-900/30 border border-red-700 rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-red-400">{dontKnow}</p>
            <p className="text-sm text-red-300 mt-1">Don&apos;t know</p>
          </div>
        </div>

        {(unsure > 0 || dontKnow > 0) && (
          <button
            onClick={() => restart(true)}
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-semibold transition-colors"
          >
            Drill Weak Cards ({unsure + dontKnow})
          </button>
        )}
        <button
          onClick={() => restart(false)}
          className="w-full py-3 bg-zinc-700 hover:bg-zinc-600 text-white rounded-lg font-semibold transition-colors"
        >
          Restart All
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 max-w-2xl mx-auto">
      {/* Controls */}
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-zinc-400">Start with:</span>
          <button
            onClick={() => setFront("term")}
            className={`px-3 py-1 rounded-lg text-sm font-semibold transition-colors ${
              front === "term"
                ? "bg-indigo-600 text-white"
                : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
            }`}
          >
            Term
          </button>
          <button
            onClick={() => setFront("definition")}
            className={`px-3 py-1 rounded-lg text-sm font-semibold transition-colors ${
              front === "definition"
                ? "bg-indigo-600 text-white"
                : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
            }`}
          >
            Definition
          </button>
        </div>
        <select
          value={filterCategory}
          onChange={(e) => {
            setFilterCategory(e.target.value);
            setIndex(0);
            setShowDefinition(false);
          }}
          className="bg-zinc-800 border border-zinc-600 text-zinc-300 rounded-lg px-3 py-1 text-sm"
        >
          <option value="all">All categories</option>
          {CATEGORIES.map((c) => (
            <option key={c.id} value={c.id}>
              {c.label}
            </option>
          ))}
        </select>
      </div>

      {/* Progress */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-2 bg-zinc-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-indigo-500 transition-all duration-300"
            style={{ width: `${(rated / Math.max(total, 1)) * 100}%` }}
          />
        </div>
        <span className="text-sm text-zinc-400 whitespace-nowrap">
          {index + 1} / {total}
        </span>
      </div>

      {/* Card */}
      <div
        onClick={() => setShowDefinition((d) => !d)}
        className="cursor-pointer bg-zinc-900 border border-zinc-700 hover:border-zinc-500 rounded-2xl p-8 min-h-[240px] flex flex-col justify-center gap-4 transition-colors select-none"
      >
        <div className="text-xs uppercase tracking-widest text-zinc-500 font-semibold text-center">
          {showDefinition
            ? front === "term"
              ? "Definition"
              : "Term"
            : front === "term"
            ? "Term"
            : "Definition"}
        </div>

        {!showDefinition ? (
          <p className="text-center text-2xl font-bold text-white leading-snug">
            {front === "term" ? current.term.term : current.term.definition}
          </p>
        ) : (
          <p className="text-center text-lg text-zinc-200 leading-relaxed">
            {front === "term" ? current.term.definition : current.term.term}
          </p>
        )}

        {!showDefinition && (
          <p className="text-center text-sm text-zinc-500 mt-2">
            Tap to reveal {front === "term" ? "definition" : "term"}
          </p>
        )}

        {showDefinition && current.term.tags && (
          <div className="flex flex-wrap gap-2 justify-center mt-2">
            {current.term.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 bg-zinc-800 text-zinc-400 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Rating buttons (only shown after reveal) */}
      {showDefinition && (
        <div className="grid grid-cols-3 gap-3">
          <button
            onClick={() => rate("dont-know")}
            className="py-3 bg-red-900/40 hover:bg-red-900/70 border border-red-800 text-red-300 rounded-xl font-semibold transition-colors"
          >
            Still learning
          </button>
          <button
            onClick={() => rate("unsure")}
            className="py-3 bg-amber-900/30 hover:bg-amber-900/60 border border-amber-800 text-amber-300 rounded-xl font-semibold transition-colors"
          >
            Getting there
          </button>
          <button
            onClick={() => rate("know")}
            className="py-3 bg-emerald-900/30 hover:bg-emerald-900/60 border border-emerald-800 text-emerald-300 rounded-xl font-semibold transition-colors"
          >
            Know it
          </button>
        </div>
      )}

      {!showDefinition && (
        <button
          onClick={advance}
          className="w-full py-2 border border-zinc-700 text-zinc-500 hover:bg-zinc-800 rounded-lg text-sm transition-colors"
        >
          Skip →
        </button>
      )}
    </div>
  );
}
