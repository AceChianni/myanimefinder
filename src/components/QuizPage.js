"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { RECS } from "@/constants/recommendations";

const QUESTIONS = [
  {
    id: 1,
    question: "Which genre are you usually drawn to?",
    options: ["Drama", "Romance", "Comedy", "Fantasy", "Action"],
  },
  {
    id: 2,
    question: "Which vibe feels most like you?",
    options: [
      "Intense + psychological (Euphoria)",
      "Real-world romance + identity growth (Insecure)",
      "Smart, morally grey character study (House MD)",
      "Heartfelt emotional ensemble (This Is Us / Greys)",
      "Cozy slice-of-life humor (Bob's Burgers)",
      "Magical destiny & emotional bonds (Charmed)",
      "Beautiful, dramatic friend dynamics (Gossip Girl)",
    ],
  },
  {
    id: 3,
    question: "How emotionally deep do you want the anime to be?",
    options: [
      "Very raw & deep",
      "Emotional but hopeful",
      "Balanced emotion & humor",
      "Light & comforting",
      "Dark & psychological",
    ],
  },
  {
    id: 4,
    question: "What pacing do you enjoy?",
    options: ["Slow & emotional", "Balanced", "Fast-paced"],
  },
  {
    id: 5,
    question: "Which art energy do you gravitate toward?",
    options: [
      "Soft + warm + natural",
      "Dreamy + surreal + aesthetic",
      "Sharp + stylish + bold",
      "Realistic emotional atmosphere",
    ],
  },
];

const INITIAL_BATCH = 3;

export default function QuizPage() {
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState(Array(QUESTIONS.length).fill(null));
  const [cards, setCards] = useState([]);
  const [visibleCount, setVisibleCount] = useState(INITIAL_BATCH);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const selected = answers[current];
  const vibe = answers[1]?.trim() ?? null;

  const choose = (opt) => {
    const next = [...answers];
    next[current] = opt;
    setAnswers(next);
  };

  const nextQ = () => {
    if (!answers[current]) return;
    if (current < QUESTIONS.length - 1) setCurrent((c) => c + 1);
    else submit();
  };

  const backQ = () => current > 0 && setCurrent((c) => c - 1);

  const retake = () => {
    setStarted(false);
    setShowResults(false);
    setCurrent(0);
    setCards([]);
    setVisibleCount(INITIAL_BATCH);
    setAnswers(Array(QUESTIONS.length).fill(null));
  };

  async function fetchOne(title) {
    const url = new URL("https://api.jikan.moe/v4/anime");
    url.searchParams.set("q", title);
    url.searchParams.set("limit", "1");

    const res = await fetch(url.toString());
    const json = await res.json();
    const a = json?.data?.[0];
    if (!a) return null;

    return {
      id: a.mal_id,
      title: a.title,
      synopsis: a.synopsis || "No description available.",
      img: a.images?.jpg?.large_image_url || a.images?.jpg?.image_url,
      url: a.url,
    };
  }

  async function submit() {
    setLoading(true);
    const list = RECS[vibe] || [];
    const pulled = await Promise.all(list.slice(0, 10).map(fetchOne));
    setCards(pulled.filter(Boolean));
    setShowResults(true);
    setLoading(false);
  }

  const loadMore = () => {
    setVisibleCount((prev) =>
      prev < 6 ? prev + 3 : Math.min(prev + 4, cards.length)
    );
  };

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (!started || showResults) return;
      const opts = QUESTIONS[current].options;
      const idx = opts.indexOf(selected);
      if (e.key === "ArrowDown" && idx < opts.length - 1) choose(opts[idx + 1]);
      if (e.key === "ArrowUp" && idx > 0) choose(opts[idx - 1]);
      if (e.key === "Enter") nextQ();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selected, current, started, showResults]);

  return (
    <div className="w-full flex flex-col items-center px-4 py-10">

      {/* Start Screen */}
      {!started && !showResults && (
        <div className="bg-panel-light dark:bg-panel-dark rounded-organic p-6 max-w-md w-full text-center shadow-soft">
          <h2 className="text-2xl font-semibold mb-3">Find Your Anime Vibe</h2>
          <p className="opacity-80 mb-6">5 questions. Personalized picks.</p>
          <button
            onClick={() => setStarted(true)}
            className="px-5 py-2 rounded-full font-semibold bg-[var(--accent)] text-[var(--surface)] hover:opacity-90"
          >
            Start Quiz
          </button>
        </div>
      )}

      {/* Quiz Card */}
      {started && !showResults && (
        <div className="bg-panel-light dark:bg-panel-dark rounded-organic p-6 w-full max-w-md shadow-soft">
          <h3 className="text-lg font-semibold mb-4">
            {QUESTIONS[current].question}
          </h3>

          <div className="flex flex-col gap-3">
            {QUESTIONS[current].options.map((opt) => (
              <button
                key={opt}
                onClick={() => choose(opt)}
                className={`px-4 py-3 text-left rounded-xl border transition
                bg-[var(--surface)]/70 dark:bg-white/5
                focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/60
                ${
                  selected === opt
                    ? "border-[var(--accent)] ring-2 ring-[var(--accent)]/40 shadow-md scale-[1.03]"
                    : "border-[var(--neutral)]/40 hover:border-[var(--accent)] hover:shadow-sm hover:scale-[1.02]"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          <div className="flex gap-3 mt-6">
            <button
              onClick={backQ}
              disabled={current === 0}
              className="px-4 py-2 rounded-full border border-[var(--neutral)] disabled:opacity-40"
            >
              Back
            </button>
            <button
              onClick={nextQ}
              className="ml-auto px-5 py-2 rounded-full font-semibold bg-[var(--accent)] text-[var(--surface)] hover:opacity-90"
            >
              {current < QUESTIONS.length - 1 ? "Next" : "Get Results"}
            </button>
          </div>
        </div>
      )}

      {/* Results */}
      {showResults && (
        <div className="w-full max-w-5xl mt-8">

          <div className="bg-panel-light dark:bg-panel-dark p-5 rounded-organic shadow-soft mb-6">
            <h3 className="text-2xl font-semibold text-center">Your Results</h3>
          </div>

          {!loading && (
            <>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
                {cards.slice(0, visibleCount).map((a) => (
                  <div
                    key={a.id}
                    className="bg-panel-light dark:bg-panel-dark p-3 rounded-xl shadow-soft hover:shadow-[0_0_16px_var(--accent)/35] transition"
                  >
                    <div className="relative w-full aspect-[2/3] overflow-hidden rounded-lg">
                      <Image
                        src={a.img}
                        alt={a.title}
                        fill
                        className="object-cover object-center"
                      />
                    </div>

                    <h4 className="mt-3 font-semibold text-sm md:text-base line-clamp-2">
                      {a.title}
                    </h4>

                    <p className="text-xs md:text-sm max-h-24 overflow-y-auto custom-scrollbar mt-1 opacity-90 leading-snug">
                      {a.synopsis}
                    </p>
                  </div>
                ))}
              </div>

              {visibleCount < cards.length && (
                <div className="flex justify-center mt-8">
                  <button
                    onClick={loadMore}
                    className="px-6 py-2 rounded-full font-semibold bg-[var(--accent)] text-[var(--surface)] hover:opacity-90 transition"
                  >
                    Load More
                  </button>
                </div>
              )}

              <div className="flex justify-center mt-10">
                <button
                  onClick={retake}
                  className="px-6 py-2 rounded-full border border-[var(--neutral)] hover:opacity-90"
                >
                  Retake Quiz
                </button>
              </div>
            </>
          )}
        </div>
      )}

    </div>
  );
}

