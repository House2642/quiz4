"use client";

import { useState } from "react";
import { COMPARE_QUESTIONS, CONNECTION_QUESTIONS } from "@/lib/comparisons";

type Tab = "compare" | "connect";
type CardStatus = "thinking" | "revealed";

function CompareCard({ q }: { q: (typeof COMPARE_QUESTIONS)[number] }) {
  const [status, setStatus] = useState<CardStatus>("thinking");
  const [hintIndex, setHintIndex] = useState(-1);

  return (
    <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 flex flex-col gap-4">
      {/* Question */}
      <p className="text-zinc-100 text-lg font-medium leading-relaxed">{q.question}</p>

      {/* Side labels */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-indigo-900/30 border border-indigo-800 rounded-lg px-4 py-2 text-center">
          <span className="text-indigo-300 text-sm font-semibold">{q.itemA}</span>
        </div>
        <div className="bg-violet-900/30 border border-violet-800 rounded-lg px-4 py-2 text-center">
          <span className="text-violet-300 text-sm font-semibold">{q.itemB}</span>
        </div>
      </div>

      {/* Hint ladder */}
      {status === "thinking" && q.hints.length > 0 && (
        <div className="flex flex-col gap-2">
          {q.hints.slice(0, hintIndex + 1).map((hint, i) => (
            <div
              key={i}
              className="bg-amber-900/20 border border-amber-800/50 rounded-lg px-3 py-2 text-amber-300 text-sm"
            >
              <span className="text-amber-500 font-semibold mr-2">Hint {i + 1}:</span>
              {hint}
            </div>
          ))}
          {hintIndex < q.hints.length - 1 && (
            <button
              onClick={() => setHintIndex((h) => h + 1)}
              className="text-sm text-amber-500 hover:text-amber-400 underline text-left"
            >
              Get hint {hintIndex + 2} of {q.hints.length}
            </button>
          )}
        </div>
      )}

      {/* Answer */}
      {status === "revealed" ? (
        <div className="bg-zinc-800 border border-zinc-600 rounded-xl p-4">
          <p className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-2">
            Model Answer
          </p>
          <p className="text-zinc-200 leading-relaxed">{q.answer}</p>
        </div>
      ) : (
        <div className="flex gap-3">
          <div className="flex-1 bg-zinc-800/50 border border-zinc-700 rounded-lg p-3 text-zinc-500 text-sm italic min-h-[80px]">
            Think through it first, then reveal…
          </div>
        </div>
      )}

      <div className="flex gap-3">
        {status === "thinking" && (
          <button
            onClick={() => setStatus("revealed")}
            className="flex-1 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-semibold text-sm transition-colors"
          >
            Reveal Answer
          </button>
        )}
        {status === "revealed" && (
          <button
            onClick={() => {
              setStatus("thinking");
              setHintIndex(-1);
            }}
            className="flex-1 py-2 bg-zinc-700 hover:bg-zinc-600 text-zinc-300 rounded-lg font-semibold text-sm transition-colors"
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
}

function ConnectionCard({ q }: { q: (typeof CONNECTION_QUESTIONS)[number] }) {
  const [status, setStatus] = useState<CardStatus>("thinking");
  const [typed, setTyped] = useState("");

  return (
    <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 flex flex-col gap-4">
      <p className="text-zinc-100 text-lg font-medium leading-relaxed">{q.prompt}</p>

      {/* Related terms badge list */}
      <div className="flex flex-wrap gap-2">
        {q.relatedTermIds.map((id) => (
          <span
            key={id}
            className="px-2 py-0.5 bg-zinc-800 border border-zinc-700 text-zinc-400 text-xs rounded-full font-mono"
          >
            {id.replace(/-/g, " ")}
          </span>
        ))}
      </div>

      {status === "thinking" ? (
        <>
          <textarea
            value={typed}
            onChange={(e) => setTyped(e.target.value)}
            rows={4}
            placeholder="Write your answer here (active recall — don't peek!)…"
            className="w-full bg-zinc-800 border border-zinc-600 rounded-lg px-4 py-3 text-zinc-200 text-sm focus:outline-none focus:border-indigo-500 placeholder:text-zinc-600 resize-none"
          />
          <button
            onClick={() => setStatus("revealed")}
            className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-semibold text-sm transition-colors"
          >
            Check Answer
          </button>
        </>
      ) : (
        <>
          {typed && (
            <div className="bg-zinc-800/70 border border-zinc-700 rounded-lg p-3">
              <p className="text-xs text-zinc-500 uppercase tracking-wide font-semibold mb-1">
                Your answer
              </p>
              <p className="text-zinc-300 text-sm leading-relaxed">{typed}</p>
            </div>
          )}
          <div className="bg-emerald-900/20 border border-emerald-800 rounded-xl p-4">
            <p className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-2">
              Model Answer
            </p>
            <p className="text-zinc-200 leading-relaxed text-sm">{q.answer}</p>
          </div>
          <button
            onClick={() => {
              setStatus("thinking");
              setTyped("");
            }}
            className="w-full py-2 bg-zinc-700 hover:bg-zinc-600 text-zinc-300 rounded-lg font-semibold text-sm transition-colors"
          >
            Try Again
          </button>
        </>
      )}
    </div>
  );
}

export default function CompareMode() {
  const [tab, setTab] = useState<Tab>("compare");

  return (
    <div className="flex flex-col gap-6 max-w-2xl mx-auto">
      {/* Tab switcher */}
      <div className="flex gap-2 bg-zinc-900 border border-zinc-700 rounded-xl p-1">
        <button
          onClick={() => setTab("compare")}
          className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-colors ${
            tab === "compare"
              ? "bg-indigo-600 text-white"
              : "text-zinc-400 hover:text-zinc-200"
          }`}
        >
          Compare & Contrast ({COMPARE_QUESTIONS.length})
        </button>
        <button
          onClick={() => setTab("connect")}
          className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-colors ${
            tab === "connect"
              ? "bg-indigo-600 text-white"
              : "text-zinc-400 hover:text-zinc-200"
          }`}
        >
          Connections ({CONNECTION_QUESTIONS.length})
        </button>
      </div>

      <p className="text-zinc-500 text-sm leading-relaxed">
        {tab === "compare"
          ? "These are the compare-and-contrast questions most likely to appear on your quiz. Use the hint ladder if stuck. Write or think through your answer before revealing."
          : "Connection questions link multiple terms together. Write your answer first — active recall is where the real learning happens."}
      </p>

      <div className="flex flex-col gap-5">
        {tab === "compare"
          ? COMPARE_QUESTIONS.map((q) => <CompareCard key={q.id} q={q} />)
          : CONNECTION_QUESTIONS.map((q) => <ConnectionCard key={q.id} q={q} />)}
      </div>
    </div>
  );
}
