"use client";

import { useState, useEffect, useRef } from "react";

type Phase = "study" | "break";

const STUDY_MINS = 25;
const BREAK_MINS = 5;

function fmtTime(secs: number) {
  const m = Math.floor(secs / 60)
    .toString()
    .padStart(2, "0");
  const s = (secs % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

export default function PomodoroTimer() {
  const [phase, setPhase] = useState<Phase>("study");
  const [remaining, setRemaining] = useState(STUDY_MINS * 60);
  const [running, setRunning] = useState(false);
  const [cycles, setCycles] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = phase === "study" ? STUDY_MINS * 60 : BREAK_MINS * 60;
  const pct = ((total - remaining) / total) * 100;

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setRemaining((r) => {
          if (r <= 1) {
            // Phase transition
            setRunning(false);
            if (phase === "study") {
              setCycles((c) => c + 1);
              setPhase("break");
              setRemaining(BREAK_MINS * 60);
            } else {
              setPhase("study");
              setRemaining(STUDY_MINS * 60);
            }
            return 0;
          }
          return r - 1;
        });
      }, 1000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [running, phase]);

  const toggle = () => setRunning((r) => !r);

  const reset = () => {
    setRunning(false);
    setPhase("study");
    setRemaining(STUDY_MINS * 60);
    setCycles(0);
  };

  const skipToBreak = () => {
    setRunning(false);
    setPhase("break");
    setRemaining(BREAK_MINS * 60);
  };

  const circumference = 2 * Math.PI * 54;

  return (
    <div className="flex flex-col items-center gap-5 select-none">
      {/* Phase label */}
      <div className="flex gap-2">
        <span
          className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest transition-colors ${
            phase === "study"
              ? "bg-indigo-600 text-white"
              : "bg-zinc-800 text-zinc-500"
          }`}
        >
          Study
        </span>
        <span
          className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest transition-colors ${
            phase === "break"
              ? "bg-emerald-600 text-white"
              : "bg-zinc-800 text-zinc-500"
          }`}
        >
          Break
        </span>
      </div>

      {/* SVG ring */}
      <div className="relative w-32 h-32">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke="#27272a"
            strokeWidth="8"
          />
          <circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke={phase === "study" ? "#6366f1" : "#10b981"}
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - pct / 100)}
            strokeLinecap="round"
            className="transition-all duration-1000"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-mono font-bold text-white tabular-nums">
            {fmtTime(remaining)}
          </span>
          <span className="text-xs text-zinc-400 capitalize">{phase}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-3">
        <button
          onClick={toggle}
          className={`px-6 py-2 rounded-lg font-semibold text-sm transition-colors ${
            running
              ? "bg-zinc-700 hover:bg-zinc-600 text-white"
              : "bg-indigo-600 hover:bg-indigo-500 text-white"
          }`}
        >
          {running ? "Pause" : "Start"}
        </button>
        {phase === "study" && running && (
          <button
            onClick={skipToBreak}
            className="px-4 py-2 rounded-lg font-semibold text-sm bg-zinc-800 hover:bg-zinc-700 text-zinc-400 transition-colors"
          >
            Take break
          </button>
        )}
        <button
          onClick={reset}
          className="px-4 py-2 rounded-lg font-semibold text-sm bg-zinc-800 hover:bg-zinc-700 text-zinc-400 transition-colors"
        >
          Reset
        </button>
      </div>

      {cycles > 0 && (
        <p className="text-xs text-zinc-500">
          Cycles completed:{" "}
          <strong className="text-indigo-400">{cycles}</strong>
        </p>
      )}

      <p className="text-xs text-zinc-600 text-center max-w-[200px] leading-relaxed">
        After 25 min your focus collapses — take the break, then come back
        sharper.
      </p>
    </div>
  );
}
