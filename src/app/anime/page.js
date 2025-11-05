// /app/anime/page.js

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import HoverCard from "@/components/HoverCard";
import AnimeRecs from "@/components/AnimeRecs";

const MOODS = [
  { label: "Cozy", emoji: "🍵", id: 36 },
  { label: "Romantic", emoji: "💘", id: 22 },
  { label: "Epic", emoji: "⚔️", id: 1 },
  { label: "Dark", emoji: "🌑", id: 40 },
  { label: "Dreamy", emoji: "🌙", id: 37 },
  { label: "Chaotic", emoji: "🔥", id: 4 },
];

async function fetchAnime({ mode, query, genreId, page }) {
  const u = new URL("https://api.jikan.moe/v4/anime");
  u.searchParams.set("limit", "20");
  u.searchParams.set("page", String(page || 1));
  if (mode === "search" && query?.trim()) u.searchParams.set("q", query.trim());
  if (mode === "mood" && genreId) u.searchParams.set("genres", String(genreId));
  const r = await fetch(u.toString());
  const j = await r.json();
  return j?.data ?? [];
}

export default function AnimePage() {
  // mode / results
  const [mode, setMode] = useState("default"); // default | search | mood
  const [results, setResults] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  // search
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const searchWrapRef = useRef(null);

  // mood
  const [selectedMood, setSelectedMood] = useState(null);

  // infinite scroll
  const sentinelRef = useRef(null);

  /** Live search & suggestions */
  useEffect(() => {
    let ignore = false;

    const run = async () => {
      const q = query.trim();
      if (!q) {
        setSuggestions([]);
        setActiveIndex(-1);
        if (mode === "search") {
          setMode("default");
          setResults(null);
          setPage(1);
          setHasMore(true);
        }
        return;
      }

      setMode("search");
      setSelectedMood(null);
      setPage(1);
      setHasMore(true);

      // suggestions (8)
      const sUrl = new URL("https://api.jikan.moe/v4/anime");
      sUrl.searchParams.set("q", q);
      sUrl.searchParams.set("limit", "8");
      const sRes = await fetch(sUrl.toString());
      const sJson = await sRes.json();
      if (!ignore) setSuggestions(sJson?.data ?? []);

      // results page 1
      const data = await fetchAnime({ mode: "search", query: q, page: 1 });
      if (!ignore) {
        setResults(data);
        setHasMore(data.length === 20);
      }
    };

    run();
    return () => {
      ignore = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  /** Click outside to close suggestions */
  useEffect(() => {
    const onDocDown = (e) => {
      if (!searchWrapRef.current) return;
      if (!searchWrapRef.current.contains(e.target)) {
        setSuggestions([]);
        setActiveIndex(-1);
      }
    };
    document.addEventListener("mousedown", onDocDown);
    return () => document.removeEventListener("mousedown", onDocDown);
  }, []);

  /** Mood click (toggle/deselect) */
  const onMood = async (m) => {
    // if clicking the same mood → deselect & go back to Top Anime
    if (selectedMood?.id === m.id) {
      setSelectedMood(null);
      setMode("default");
      setResults(null);
      setQuery("");
      setSuggestions([]);
      setActiveIndex(-1);
      setPage(1);
      setHasMore(true);
      return;
    }

    setQuery("");
    setSuggestions([]);
    setActiveIndex(-1);
    setMode("mood");
    setSelectedMood(m);
    setPage(1);
    const data = await fetchAnime({ mode: "mood", genreId: m.id, page: 1 });
    setResults(data);
    setHasMore(data.length === 20);
  };

  /** Infinite scroll */
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el || !results || !hasMore) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !loadingMore) {
          setLoadingMore(true);
          const next = page + 1;
          fetchAnime({
            mode,
            query,
            genreId: selectedMood?.id,
            page: next,
          })
            .then((data) => {
              setResults((prev) => [...prev, ...data]);
              setPage(next);
              setHasMore(data.length === 20);
            })
            .finally(() => setLoadingMore(false));
        }
      },
      { rootMargin: "300px 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [results, hasMore, loadingMore, mode, query, selectedMood, page]);

  /** Refresh → full reset to Top Anime */
  const onRefresh = () => {
    setQuery("");
    setSuggestions([]);
    setActiveIndex(-1);
    setSelectedMood(null);
    setMode("default");
    setResults(null);
    setPage(1);
    setHasMore(true);
  };

  /** Keyboard navigation for suggestions */
  const onKeyDown = (e) => {
    if (!suggestions.length) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % suggestions.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => (i - 1 + suggestions.length) % suggestions.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      const pick =
        activeIndex >= 0 ? suggestions[activeIndex]?.title : query.trim();
      if (pick) {
        setQuery(pick);
        setSuggestions([]);
        setActiveIndex(-1);
      }
    } else if (e.key === "Escape") {
      e.preventDefault();
      setSuggestions([]);
      setActiveIndex(-1);
    }
  };

  /** Poster Card (hover shows HoverCard) */
  const ResultCard = ({ anime }) => (
    <div className="relative group overflow-visible cursor-pointer">
      <div className="relative w-[150px] h-[230px] rounded-xl overflow-hidden shadow-md hover:shadow-amber-300/50 transition-all">
        <Image
          src={anime.images?.jpg?.large_image_url || anime.images?.jpg?.image_url}
          alt={anime.title}
          fill
          className="object-cover rounded-xl"
        />
      </div>
      <p className="mt-2 text-center text-sm font-medium opacity-90 max-w-[150px] truncate">
        {anime.title}
      </p>
      {/* Hover description */}
      <HoverCard anime={anime} />
    </div>
  );

  const showSuggestions = query.trim().length > 0 && suggestions.length > 0;

  return (
    <main className="pt-32 px-6 min-h-screen">
      {/* Search */}
      <div ref={searchWrapRef} className="relative w-full max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="Search anime by title…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={onKeyDown}
          className="w-full px-5 py-3 rounded-full bg-white/70 dark:bg-white/10
            backdrop-blur-lg border border-white/30 dark:border-white/15 outline-none
            focus:ring-2 ring-amber-300 dark:ring-violet-300 transition
            text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-500 dark:placeholder:text-neutral-400"
        />

        {/* Titles-only suggestions w/ keyboard highlight */}
        {showSuggestions && (
          <div className="absolute left-0 right-0 mt-2 rounded-xl overflow-hidden
              bg-white/95 dark:bg-black/85 backdrop-blur-xl
              border border-white/30 dark:border-white/15 shadow-xl z-30">
            {suggestions.map((sug, i) => (
              <button
                key={sug.mal_id}
                type="button"
                onClick={() => {
                  setQuery(sug.title);
                  setSuggestions([]);
                  setActiveIndex(-1);
                }}
                className={`w-full text-left px-4 py-2 transition
                  ${i === activeIndex ? "bg-amber-200/40 dark:bg-violet-500/20" : "hover:bg-amber-100/40 dark:hover:bg-white/10"}`}
              >
                {sug.title}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Moods (toggleable) */}
      <div className="flex flex-wrap justify-center gap-3 mt-6 mb-6">
        {MOODS.map((m) => (
          <button
            key={m.id}
            onClick={() => onMood(m)}
            className={`px-4 py-2 rounded-full border
              bg-white/60 dark:bg-white/10 backdrop-blur-lg
              border-white/40 dark:border-white/15
              hover:shadow-md hover:scale-105 transition
              flex items-center gap-2 text-sm
              ${selectedMood?.id === m.id ? "ring-2 ring-amber-300 dark:ring-violet-300" : ""}`}
            aria-pressed={selectedMood?.id === m.id}
          >
            <span>{m.emoji}</span> {m.label}
          </button>
        ))}
      </div>

      {/* Context line + Refresh */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <p className="text-lg md:text-xl font-medium opacity-85">
          {mode === "mood" && selectedMood
            ? <>Explore: <span className="italic">{selectedMood.label}</span></>
            : mode === "search" && query.trim()
            ? <>Searching for: <span className="italic">{query}</span></>
            : "Top Anime"}
        </p>
        <button
          onClick={onRefresh}
          className="px-3 py-1.5 rounded-full text-sm font-semibold
            bg-amber-200/70 text-amber-900 border border-amber-300/70 shadow hover:bg-amber-200
            dark:bg-violet-500/20 dark:text-violet-100 dark:border-violet-300/30 dark:hover:bg-violet-500/30
            backdrop-blur-md transition"
          title="Clear search and filters"
        >
          Refresh
        </button>
      </div>

      {/* Content */}
      {results === null ? (
        <AnimeRecs />
      ) : results.length === 0 ? (
        <p className="text-center opacity-70">No results found.</p>
      ) : (
        <div className="relative w-full max-w-6xl mx-auto p-6 rounded-2xl
            bg-white/50 dark:bg-white/5 backdrop-blur-xl
            border border-white/30 dark:border-white/10 shadow-lg overflow-visible">
          <div className="relative z-10 flex flex-wrap gap-6 justify-center overflow-visible">
            {results.map((a) => (
              <ResultCard key={a.mal_id} anime={a} />
            ))}
          </div>
          {/* infinite scroll sentinel */}
          <div ref={sentinelRef} className="h-10" />
        </div>
      )}

      {loadingMore && (
        <p className="text-center mt-6 opacity-70">Loading more…</p>
      )}
    </main>
  );
}
