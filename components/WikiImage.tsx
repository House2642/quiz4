"use client";

import { useEffect, useState } from "react";

interface Props {
  wikiTitle: string;
  alt: string;
  className?: string;
}

type State = "loading" | "loaded" | "error";

// Module-level cache so repeated renders don't re-fetch
const cache: Record<string, string | null> = {};

export default function WikiImage({ wikiTitle, alt, className = "" }: Props) {
  const [src, setSrc] = useState<string | null>(cache[wikiTitle] ?? null);
  const [state, setState] = useState<State>(cache[wikiTitle] !== undefined ? (cache[wikiTitle] ? "loaded" : "error") : "loading");

  useEffect(() => {
    if (cache[wikiTitle] !== undefined) {
      setSrc(cache[wikiTitle]);
      setState(cache[wikiTitle] ? "loaded" : "error");
      return;
    }

    const controller = new AbortController();
    const encoded = encodeURIComponent(wikiTitle);

    fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encoded}`, {
      signal: controller.signal,
      headers: { Accept: "application/json" },
    })
      .then((r) => r.json())
      .then((data) => {
        const url: string | null = data?.thumbnail?.source ?? data?.originalimage?.source ?? null;
        cache[wikiTitle] = url;
        setSrc(url);
        setState(url ? "loaded" : "error");
      })
      .catch(() => {
        if (!controller.signal.aborted) {
          cache[wikiTitle] = null;
          setState("error");
        }
      });

    return () => controller.abort();
  }, [wikiTitle]);

  if (state === "loading") {
    return (
      <div className={`bg-zinc-800 animate-pulse rounded-lg ${className}`} />
    );
  }

  if (state === "error" || !src) {
    return null;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={`rounded-lg object-cover ${className}`}
      loading="lazy"
    />
  );
}
