"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { TERMS, Term } from "@/lib/terms";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

type Status = "idle" | "correct" | "wrong" | "revealed";

export default function SpellingMode() {
  const [queue, setQueue] = useState<Term[]>(() => shuffle(TERMS));
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [streak, setStreak] = useState(0);
  const [mastered, setMastered] = useState<Set<string>>(new Set());
  const [wrongIds, setWrongIds] = useState<Set<string>>(new Set());
  const [showHint, setShowHint] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const current = queue[index % queue.length];

  useEffect(() => {
    inputRef.current?.focus();
  }, [index]);

  const normalize = (s: string) => s.trim().toLowerCase();

  const checkAnswer = useCallback(() => {
    if (!input.trim()) return;
    const correct = normalize(current.term);
    const given = normalize(input);

    if (given === correct) {
      setStatus("correct");
      setStreak((s) => s + 1);
      setMastered((m) => new Set([...m, current.id]));
      setWrongIds((w) => {
        const next = new Set(w);
        next.delete(current.id);
        return next;
      });
    } else {
      setStatus("wrong");
      setStreak(0);
      setWrongIds((w) => new Set([...w, current.id]));
    }
  }, [input, current]);

  const next = () => {
    setInput("");
    setStatus("idle");
    setShowHint(false);
    setIndex((i) => i + 1);
  };

  const reveal = () => {
    setStatus("revealed");
    setWrongIds((w) => new Set([...w, current.id]));
    setStreak(0);
  };

  const restartWrong = () => {
    if (wrongIds.size === 0) return;
    const wrongTerms = TERMS.filter((t) => wrongIds.has(t.id));
    setQueue(shuffle(wrongTerms));
    setIndex(0);
    setInput("");
    setStatus("idle");
    setShowHint(false);
    setWrongIds(new Set());
    setStreak(0);
  };

  const restartAll = () => {
    setQueue(shuffle(TERMS));
    setIndex(0);
    setInput("");
    setStatus("idle");
    setShowHint(false);
    setWrongIds(new Set());
    setMastered(new Set());
    setStreak(0);
  };

  // Highlight character-by-character diff
  const renderDiff = () => {
    const answer = current.term;
    const given = input;
    return (
      <div className="flex flex-wrap gap-0.5 justify-center text-2xl font-mono mt-2">
        {answer.split("").map((char, i) => {
          const typed = given[i];
          let cls = "px-0.5";
          if (typed === undefined) cls += " text-zinc-500";
          else if (typed.toLowerCase() === char.toLowerCase()) cls += " text-emerald-400";
          else cls += " text-red-400 underline";
          return (
            <span key={i} className={cls}>
              {char}
            </span>
          );
        })}
      </div>
    );
  };

  const progressPct = Math.round((mastered.size / TERMS.length) * 100);

  return (
    <div className="flex flex-col gap-6 max-w-2xl mx-auto">
      {/* Stats bar */}
      <div className="flex items-center justify-between text-sm text-zinc-400">
        <span>
          Mastered:{" "}
          <strong className="text-emerald-400">
            {mastered.size}/{TERMS.length}
          </strong>
        </span>
        <span>
          Streak: <strong className="text-amber-400">{streak}</strong>
        </span>
        <span>
          Needs work: <strong className="text-red-400">{wrongIds.size}</strong>
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-emerald-500 transition-all duration-500"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      {/* Card */}
      <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">
            {current.category}
          </span>
          <button
            onClick={() => setShowHint((h) => !h)}
            className="text-xs text-zinc-500 hover:text-zinc-300 underline"
          >
            {showHint ? "Hide hint" : "Show hint"}
          </button>
        </div>

        {/* Definition */}
        <p className="text-zinc-200 text-lg leading-relaxed">{current.definition}</p>

        {showHint && current.tags && (
          <div className="flex flex-wrap gap-2">
            {current.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 bg-zinc-800 text-zinc-400 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Input */}
        {status === "idle" && (
          <div className="flex gap-2">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && checkAnswer()}
              placeholder="Type the term…"
              className="flex-1 bg-zinc-800 border border-zinc-600 rounded-lg px-4 py-3 text-white text-lg focus:outline-none focus:border-indigo-500 placeholder:text-zinc-600"
              spellCheck={false}
              autoComplete="off"
            />
            <button
              onClick={checkAnswer}
              className="px-4 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-semibold transition-colors"
            >
              Check
            </button>
          </div>
        )}

        {status === "correct" && (
          <div className="flex flex-col gap-3">
            <div className="bg-emerald-900/40 border border-emerald-700 rounded-lg p-4 flex items-center gap-3">
              <span className="text-2xl">✓</span>
              <div>
                <p className="text-emerald-400 font-semibold">Correct!</p>
                <p className="text-emerald-300 font-mono text-lg">{current.term}</p>
              </div>
            </div>
            <button
              onClick={next}
              className="w-full py-3 bg-zinc-700 hover:bg-zinc-600 text-white rounded-lg font-semibold transition-colors"
            >
              Next →
            </button>
          </div>
        )}

        {status === "wrong" && (
          <div className="flex flex-col gap-3">
            <div className="bg-red-900/30 border border-red-800 rounded-lg p-4">
              <p className="text-red-400 font-semibold mb-1">Not quite. You typed:</p>
              <p className="font-mono text-lg text-red-300">{input}</p>
              <p className="text-zinc-400 text-sm mt-1">Correct answer (character diff):</p>
              {renderDiff()}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setInput("");
                  setStatus("idle");
                  inputRef.current?.focus();
                }}
                className="flex-1 py-3 bg-indigo-700 hover:bg-indigo-600 text-white rounded-lg font-semibold transition-colors"
              >
                Try Again
              </button>
              <button
                onClick={next}
                className="flex-1 py-3 bg-zinc-700 hover:bg-zinc-600 text-white rounded-lg font-semibold transition-colors"
              >
                Skip →
              </button>
            </div>
          </div>
        )}

        {status === "revealed" && (
          <div className="flex flex-col gap-3">
            <div className="bg-zinc-800 border border-zinc-600 rounded-lg p-4">
              <p className="text-zinc-400 text-sm mb-1">Answer:</p>
              <p className="font-mono text-2xl text-white">{current.term}</p>
            </div>
            <button
              onClick={next}
              className="w-full py-3 bg-zinc-700 hover:bg-zinc-600 text-white rounded-lg font-semibold transition-colors"
            >
              Next →
            </button>
          </div>
        )}

        {status === "idle" && (
          <button
            onClick={reveal}
            className="text-sm text-zinc-500 hover:text-zinc-300 underline text-center"
          >
            I don&apos;t know — reveal answer
          </button>
        )}
      </div>

      {/* Action buttons */}
      <div className="flex gap-3">
        {wrongIds.size > 0 && (
          <button
            onClick={restartWrong}
            className="flex-1 py-2 border border-red-700 text-red-400 hover:bg-red-900/20 rounded-lg text-sm font-semibold transition-colors"
          >
            Drill {wrongIds.size} Missed Terms
          </button>
        )}
        <button
          onClick={restartAll}
          className="flex-1 py-2 border border-zinc-700 text-zinc-400 hover:bg-zinc-800 rounded-lg text-sm font-semibold transition-colors"
        >
          Restart All
        </button>
      </div>
    </div>
  );
}
