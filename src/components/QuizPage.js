// /components/QuizPage.js
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
          <h3 className="text-lg font-semibold mb-4">{QUESTIONS[current].question}</h3>

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
        <div className="w-full max-w-5xl flex flex-col items-center">
          <div className="bg-panel-light dark:bg-panel-dark p-5 rounded-organic shadow-soft mb-6 w-full text-center">
            <h3 className="text-xl font-semibold">Your Results</h3>
          </div>

          {!loading && (
            <>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full">
                {cards.slice(0, visibleCount).map((a) => (
                  <div key={a.id} className="bg-panel-light dark:bg-panel-dark p-3 rounded-xl shadow-soft">
                    <div className="relative w-full aspect-[2/3] overflow-hidden rounded-lg">
                      <Image src={a.img} alt={a.title} fill className="object-cover" />
                    </div>
                    <h4 className="mt-3 font-semibold line-clamp-2">{a.title}</h4>
                    <p className="text-sm max-h-28 overflow-y-auto custom-scrollbar mt-2 opacity-90">
                      {a.synopsis}
                    </p>
                  </div>
                ))}
              </div>

              {visibleCount < cards.length && (
                <div className="flex justify-center mt-7 w-full">
                  <button
                    onClick={loadMore}
                    className="px-5 py-2 rounded-full font-semibold bg-[var(--accent)] text-[var(--surface)] hover:opacity-90"
                  >
                    Load More
                  </button>
                </div>
              )}

              <button
                onClick={retake}
                className="mt-8 px-5 py-2 rounded-full border border-[var(--neutral)] hover:opacity-90"
              >
                Retake Quiz
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

// // src/components/QuizPage.js
// "use client";

// import { useEffect, useMemo, useRef, useState } from "react";
// import Image from "next/image";
// import { RECS } from "@/constants/recommendations";

// const QUESTIONS = [
//   {
//     id: 1,
//     question: "Which genre are you usually drawn to?",
//     options: ["Drama", "Romance", "Comedy", "Fantasy", "Action"],
//   },
//   {
//     id: 2,
//     question: "Which vibe feels most like you?",
//     options: [
//       "Intense + psychological (Euphoria)",
//       "Real-world romance + identity growth (Insecure)",
//       "Smart, morally grey character study (House MD)",
//       "Heartfelt emotional ensemble (This Is Us / Greys)",
//       "Cozy slice-of-life humor (Bob's Burgers)",
//       "Magical destiny & emotional bonds (Charmed)",
//       "Beautiful, dramatic friend dynamics (Gossip Girl)",
//     ],
//   },
//   {
//     id: 3,
//     question: "How emotionally deep do you want the anime to be?",
//     options: [
//       "Very raw & deep",
//       "Emotional but hopeful",
//       "Balanced emotion & humor",
//       "Light & comforting",
//       "Dark & psychological",
//     ],
//   },
//   {
//     id: 4,
//     question: "What pacing do you enjoy?",
//     options: ["Slow & emotional", "Balanced", "Fast-paced"],
//   },
//   {
//     id: 5,
//     question: "Which art energy do you gravitate toward?",
//     options: [
//       "Soft + warm + natural",
//       "Dreamy + surreal + aesthetic",
//       "Sharp + stylish + bold",
//       "Realistic emotional atmosphere",
//     ],
//   },
// ];

// const GENRE_PULL = {
//   Drama: ["Drama", "Psychological", "Seinen", "Slice of Life"],
//   Romance: ["Romance", "Drama", "Josei", "Shoujo"],
//   Comedy: ["Comedy", "Slice of Life"],
//   Fantasy: ["Fantasy", "Supernatural", "Adventure"],
//   Action: ["Action", "Suspense", "Thriller", "Adventure"],
// };

// const INITIAL_BATCH = 3;
// const NEXT_CHUNK = 3;
// const FINAL_CHUNK = 4;

// export default function QuizPage() {
//   const [started, setStarted] = useState(false);
//   const [current, setCurrent] = useState(0);
//   const [answers, setAnswers] = useState(Array(QUESTIONS.length).fill(null));
//   const [cards, setCards] = useState([]);
//   const [visibleCount, setVisibleCount] = useState(INITIAL_BATCH);
//   const [loading, setLoading] = useState(false);
//   const [showResults, setShowResults] = useState(false);

//   const selectedOption = answers[current];

//   const onChoose = (opt) => {
//     const next = [...answers];
//     next[current] = opt;
//     setAnswers(next);
//   };

//   const onNext = () => {
//     if (!answers[current]) return;
//     if (current < QUESTIONS.length - 1) setCurrent((c) => c + 1);
//     else handleSubmit();
//   };

//   const onBack = () => current > 0 && setCurrent((c) => c - 1);
//   const onRetake = () => {
//     setStarted(false);
//     setShowResults(false);
//     setCurrent(0);
//     setCards([]);
//     setVisibleCount(INITIAL_BATCH);
//   };

//   const vibe = answers[1] || null;

//   async function fetchOne(title) {
//     const url = new URL("https://api.jikan.moe/v4/anime");
//     url.searchParams.set("q", title);
//     url.searchParams.set("limit", "1");
//     const res = await fetch(url.toString());
//     const json = await res.json();
//     const a = json?.data?.[0];
//     if (!a) return null;
//     return {
//       id: a.mal_id,
//       title: a.title,
//       synopsis: a.synopsis || "No description available.",
//       img: a.images?.jpg?.large_image_url || a.images?.jpg?.image_url,
//       url: a.url,
//       genres: a.genres?.map((g) => g.name) || [],
//     };
//   }

//   async function handleSubmit() {
//     setLoading(true);
//     const titles = RECS[vibe] || [];
//     const result = await Promise.all(titles.slice(0, 10).map(fetchOne));
//     setCards(result.filter(Boolean));
//     setShowResults(true);
//     setLoading(false);
//   }

//   const loadMore = () => {
//     if (visibleCount < 6) setVisibleCount(visibleCount + NEXT_CHUNK);
//     else setVisibleCount(Math.min(visibleCount + FINAL_CHUNK, cards.length));
//   };

//   return (
//     <div className="w-full flex justify-center px-4 py-10">

//       {/* Start Screen */}
//       {!started && !showResults && (
//         <div className="bg-panel-light dark:bg-panel-dark rounded-organic p-6 max-w-lg w-full text-center shadow-soft">
//           <h2 className="text-2xl font-semibold mb-3">Find Your Anime Vibe</h2>
//           <p className="opacity-80 mb-6">5 questions. Personalized recommendations.</p>
//           <button
//             onClick={() => setStarted(true)}
//             className="px-5 py-2 rounded-full font-semibold bg-[var(--accent)] text-[var(--surface)] hover:opacity-90"
//           >
//             Start Quiz
//           </button>
//         </div>
//       )}

//       {/* Quiz Card */}
//       {started && !showResults && (
//         <div className="bg-panel-light dark:bg-panel-dark rounded-organic p-6 max-w-lg w-full shadow-soft">
//           <h3 className="text-xl font-semibold mb-4">{QUESTIONS[current].question}</h3>

//           <div className="flex flex-col gap-3">
//             {QUESTIONS[current].options.map((opt) => (
//               <button
//                 key={opt}
//                 className={`px-4 py-3 text-left rounded-xl border transition
//                   ${selectedOption === opt
//                     ? "border-[var(--accent)] ring-2 ring-[var(--accent)]/30"
//                     : "border-[var(--neutral)]/40 hover:border-[var(--accent)] hover:scale-[1.02]"}
//                   bg-white/60 dark:bg-white/10`}
//                 onClick={() => onChoose(opt)}
//               >
//                 {opt}
//               </button>
//             ))}
//           </div>

//           <div className="flex gap-3 mt-6">
//             <button onClick={onBack} disabled={current === 0}
//               className="px-4 py-2 rounded-full border border-[var(--neutral)] disabled:opacity-40">
//               Back
//             </button>
//             <button
//               onClick={onNext}
//               className="ml-auto px-5 py-2 rounded-full font-semibold bg-[var(--accent)] text-[var(--surface)] hover:opacity-90">
//               {current < QUESTIONS.length - 1 ? "Next" : "Get Results"}
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Results */}
//       {showResults && (
//         <div className="w-full max-w-5xl">
//           <div className="bg-panel-light dark:bg-panel-dark p-5 rounded-organic shadow-soft mb-6">
//             <h3 className="text-xl font-semibold">Your Results</h3>
//           </div>

//           {!loading && (
//             <>
//               {/* RESULTS GRID */}
// <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//   {cards.slice(0, visibleCount).map((a) => (
//     <div key={a.id} className="bg-panel-light dark:bg-panel-dark p-3 rounded-xl shadow-soft">
//       <div className="relative w-full aspect-[2/3] overflow-hidden rounded-lg">
//         <Image src={a.img} alt={a.title} fill className="object-cover" />
//       </div>
//       <h4 className="mt-3 font-semibold line-clamp-2">{a.title}</h4>
//       <p className="text-sm max-h-28 overflow-y-auto custom-scrollbar mt-2 opacity-90">
//         {a.synopsis}
//       </p>
//     </div>
//   ))}
// </div>


//               {/* LOAD MORE BUTTON */}
// {visibleCount < cards.length && (
//   <div className="flex justify-center mt-7">
//     <button
//       onClick={() =>
//         setVisibleCount((prev) =>
//           prev < 6 ? prev + 3 : Math.min(prev + 4, cards.length)
//         )
//       }
//       className="px-5 py-2 rounded-full font-semibold bg-[var(--accent)] text-[var(--surface)] hover:opacity-90 transition"
//     >
//       Load More
//     </button>
//   </div>
// )}


//               <div className="flex justify-center mt-8">
//                 <button
//                   onClick={onRetake}
//                   className="px-5 py-2 rounded-full border border-[var(--neutral)] hover:opacity-90">
//                   Retake Quiz
//                 </button>
//               </div>
//             </>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// // src/components/QuizPage.js
// "use client";

// import { useEffect, useMemo, useRef, useState } from "react";
// import Image from "next/image";
// import { RECS } from "@/constants/recommendations";

// // === QUESTIONS (your preferred wording) ===
// const QUESTIONS = [
//   {
//     id: 1,
//     question: "Which genre are you usually drawn to?",
//     options: ["Drama", "Romance", "Comedy", "Fantasy", "Action"],
//   },
//   {
//     id: 2,
//     question: "Which vibe feels most like you?",
//     options: [
//       "Intense + psychological (Euphoria)",
//       "Real-world romance + identity growth (Insecure)",
//       "Smart, morally grey character study (House MD)",
//       "Heartfelt emotional ensemble (This Is Us / Greys)",
//       "Cozy slice-of-life humor (Bob's Burgers)",
//       "Magical destiny & emotional bonds (Charmed)",
//       "Beautiful, dramatic friend dynamics (Gossip Girl)",
//     ],
//   },
//   {
//     id: 3,
//     question: "How emotionally deep do you want the anime to be?",
//     options: [
//       "Very raw & deep",
//       "Emotional but hopeful",
//       "Balanced emotion & humor",
//       "Light & comforting",
//       "Dark & psychological",
//     ],
//   },
//   {
//     id: 4,
//     question: "What pacing do you enjoy?",
//     options: ["Slow & emotional", "Balanced", "Fast-paced"],
//   },
//   {
//     id: 5,
//     question: "Which art energy do you gravitate toward?",
//     options: [
//       "Soft + warm + natural",
//       "Dreamy + surreal + aesthetic",
//       "Sharp + stylish + bold",
//       "Realistic emotional atmosphere",
//     ],
//   },
// ];

// // Simple map to gently bias order (not a strict filter)
// const GENRE_PULL = {
//   Drama: ["Drama", "Psychological", "Seinen", "Slice of Life"],
//   Romance: ["Romance", "Drama", "Josei", "Shoujo"],
//   Comedy: ["Comedy", "Slice of Life"],
//   Fantasy: ["Fantasy", "Supernatural", "Adventure"],
//   Action: ["Action", "Suspense", "Thriller", "Adventure"],
// };

// const INITIAL_BATCH = 3;
// const SECOND_BATCH = 3;
// const FINAL_BATCH = 4;

// export default function QuizPage() {
//   const [started, setStarted] = useState(false);
//   const [current, setCurrent] = useState(0);
//   const [answers, setAnswers] = useState(Array(QUESTIONS.length).fill(null));

//   const [loading, setLoading] = useState(false);
//   const [cards, setCards] = useState([]); // fetched anime objects
//   const [visibleCount, setVisibleCount] = useState(INITIAL_BATCH);
//   const [showResults, setShowResults] = useState(false);

//   // accessibility & keyboard nav
//   const listRef = useRef(null);
//   const [focusedIndex, setFocusedIndex] = useState(0);

//   const selectedOption = answers[current];

//   const onChoose = (opt) => {
//     const next = [...answers];
//     next[current] = opt;
//     setAnswers(next);
//   };

//   const onNext = () => {
//     if (!answers[current]) return; // require answer
//     if (current < QUESTIONS.length - 1) {
//       setCurrent((c) => c + 1);
//       setFocusedIndex(0);
//     } else {
//       handleSubmit();
//     }
//   };

//   const onBack = () => {
//     if (current === 0) return;
//     setCurrent((c) => c - 1);
//     setFocusedIndex(0);
//   };

//   const onRetake = () => {
//     setStarted(false);
//     setCurrent(0);
//     setAnswers(Array(QUESTIONS.length).fill(null));
//     setCards([]);
//     setVisibleCount(INITIAL_BATCH);
//     setShowResults(false);
//   };

//   const onKeyDown = (e) => {
//     const opts = QUESTIONS[current].options;
//     if (e.key === "ArrowDown") {
//       e.preventDefault();
//       setFocusedIndex((i) => Math.min(i + 1, opts.length - 1));
//     } else if (e.key === "ArrowUp") {
//       e.preventDefault();
//       setFocusedIndex((i) => Math.max(i - 1, 0));
//     } else if (e.key === "Enter") {
//       e.preventDefault();
//       onChoose(opts[focusedIndex]);
//       // small delay then next to feel snappy
//       setTimeout(onNext, 80);
//     }
//   };

//   useEffect(() => {
//     // when question changes, focus list container for keyboard nav
//     listRef.current?.focus();
//   }, [current]);

//   const vibe = useMemo(() => answers[1] || null, [answers]);
//   const genreBias = useMemo(() => {
//     const first = answers[0];
//     return GENRE_PULL[first] || null;
//   }, [answers]);

//   async function fetchOneByTitle(title) {
//     // simple title search (sfw), pick first result
//     const url = new URL("https://api.jikan.moe/v4/anime");
//     url.searchParams.set("q", title);
//     url.searchParams.set("limit", "1");
//     url.searchParams.set("sfw", "true");
//     const res = await fetch(url.toString());
//     const json = await res.json();
//     const item = json?.data?.[0];
//     if (!item) return null;
//     return {
//       mal_id: item.mal_id,
//       title: item.title,
//       synopsis:
//         item.synopsis ||
//         "No synopsis available for this title yet. Check MAL for more details.",
//       image:
//         item.images?.jpg?.large_image_url ||
//         item.images?.jpg?.image_url ||
//         "",
//       url: item.url,
//       genres: item.genres?.map((g) => g.name) || [],
//     };
//   }

//   async function handleSubmit() {
//     try {
//       setLoading(true);
//       setShowResults(false);
//       setVisibleCount(INITIAL_BATCH);

//       // choose titles by vibe
//       const titles = RECS[vibe] || [];

//       // fetch first 10 details (we’ll progressively reveal them)
//       const detail = await Promise.all(
//         titles.slice(0, 10).map((t) => fetchOneByTitle(t))
//       );

//       // light “genre bias” sort: if user picked a genre, bump matches up
//       const sorted = genreBias
//         ? [...detail.filter(Boolean)].sort((a, b) => {
//             const aScore = a.genres?.some((g) => genreBias.includes(g)) ? 1 : 0;
//             const bScore = b.genres?.some((g) => genreBias.includes(g)) ? 1 : 0;
//             return bScore - aScore;
//           })
//         : detail.filter(Boolean);

//       setCards(sorted);
//       setShowResults(true);
//     } catch (e) {
//       console.error(e);
//     } finally {
//       setLoading(false);
//     }
//   }

//   const loadMore = () => {
//     if (visibleCount < 3) {
//       setVisibleCount(3);
//     } else if (visibleCount < 6) {
//       setVisibleCount(visibleCount + SECOND_BATCH);
//     } else {
//       setVisibleCount(Math.min(visibleCount + FINAL_BATCH, cards.length));
//     }
//   };

//   return (
//     <div className="w-full flex justify-center px-4">
//       {/* START SCREEN */}
//       {!started && !showResults && (
//         <div className="bg-panel-light dark:bg-panel-dark rounded-organic shadow-soft w-full max-w-xl p-6 text-center">
//           <h2 className="text-2xl font-semibold mb-2">Find Your Anime Vibe</h2>
//           <p className="opacity-80 mb-6">
//             Answer 5 quick questions and get a curated set of anime that match your taste.
//           </p>
//           <button
//             onClick={() => setStarted(true)}
//             className="px-5 py-2 rounded-full font-semibold bg-[var(--accent)] text-[var(--surface)] hover:opacity-90 transition"
//           >
//             Start Quiz
//           </button>
//         </div>
//       )}

//       {/* QUESTION CARD */}
//       {started && !showResults && (
//         <div
//           className="bg-panel-light dark:bg-panel-dark rounded-organic shadow-soft w-full max-w-xl p-6 outline-none"
//           tabIndex={0}
//           onKeyDown={onKeyDown}
//           ref={listRef}
//         >
//           <div className="flex items-center justify-between mb-4">
//             <button
//               onClick={onBack}
//               disabled={current === 0}
//               className="px-4 py-1.5 rounded-full border border-[var(--neutral)] hover:opacity-90 disabled:opacity-40"
//             >
//               Back
//             </button>
//             <span className="text-sm opacity-75">
//               Question {current + 1} / {QUESTIONS.length}
//             </span>
//           </div>

//           <h3 className="text-xl font-semibold mb-4">{QUESTIONS[current].question}</h3>

//           <div className="flex flex-col gap-2">
//             {QUESTIONS[current].options.map((opt, idx) => {
//               const isSelected = selectedOption === opt;
//               const isFocused = focusedIndex === idx;
//               return (
//                 <button
//                   key={opt}
//                   type="button"
//                   onClick={() => onChoose(opt)}
//                   className={[
//                     "text-left w-full px-4 py-3 rounded-xl border transition",
//                     "bg-white/60 dark:bg-white/5",
//                     "hover:border-[var(--accent)] hover:shadow-soft",
//                     isSelected
//                       ? "border-[var(--accent)] ring-2 ring-[var(--accent)]/40"
//                       : "border-[var(--neutral)]/40",
//                     isFocused ? "outline outline-2 outline-[var(--accent)]/60" : ""
//                   ].join(" ")}
//                 >
//                   {opt}
//                 </button>
//               );
//             })}
//           </div>

//           <div className="flex gap-3 mt-6">
//             <button
//               onClick={onRetake}
//               className="px-4 py-2 rounded-full border border-[var(--neutral)] hover:opacity-90"
//             >
//               Retake
//             </button>
//             <button
//               onClick={onNext}
//               className="ml-auto px-5 py-2 rounded-full font-semibold bg-[var(--accent)] text-[var(--surface)] hover:opacity-90 transition"
//             >
//               {current < QUESTIONS.length - 1 ? "Next" : "Get Results"}
//             </button>
//           </div>
//         </div>
//       )}

//       {/* RESULTS */}
//       {showResults && (
//         <div className="w-full max-w-5xl">
//           <div className="bg-panel-light dark:bg-panel-dark rounded-organic shadow-soft p-6 mb-6">
//             <div className="flex items-center justify-between">
//               <h3 className="text-xl font-semibold">Your Results</h3>
//               <div className="flex gap-2">
//                 <button
//                   onClick={onRetake}
//                   className="px-4 py-2 rounded-full border border-[var(--neutral)] hover:opacity-90"
//                 >
//                   Retake
//                 </button>
//               </div>
//             </div>
//             {loading && <p className="mt-3 opacity-75">Fetching picks…</p>}
//             {!loading && cards.length === 0 && (
//               <p className="mt-3 opacity-75">No results found. Try different answers.</p>
//             )}
//           </div>

//           {/* Poster Grid */}
//           {!loading && cards.length > 0 && (
//             <>
//               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
//                 {cards.slice(0, visibleCount).map((a) => (
//                   <div
//                     key={a.mal_id}
//                     className="group bg-panel-light dark:bg-panel-dark rounded-xl p-3 shadow-soft hover:shadow-lg transition"
//                   >
//                     <div className="relative w-full aspect-[2/3] rounded-md overflow-hidden">
//                       {a.image ? (
//                         <Image
//                           src={a.image}
//                           alt={a.title}
//                           fill
//                           className="object-cover"
//                           sizes="(max-width: 768px) 50vw, 25vw"
//                         />
//                       ) : (
//                         <div className="w-full h-full bg-black/10 dark:bg-white/10" />
//                       )}
//                     </div>
//                     <h4 className="mt-3 font-semibold line-clamp-2">{a.title}</h4>
//                     <div className="mt-2 text-sm opacity-90 max-h-28 overflow-y-auto custom-scrollbar">
//                       {a.synopsis}
//                     </div>
//                     <a
//                       href={a.url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="inline-block mt-3 text-sm font-semibold text-[var(--accent)] hover:underline"
//                     >
//                       More info
//                     </a>
//                   </div>
//                 ))}
//               </div>

//               {visibleCount < cards.length && (
//                 <div className="flex justify-center mt-8">
//                   <button
//                     onClick={loadMore}
//                     className="px-5 py-2 rounded-full font-semibold bg-[var(--accent)] text-[var(--surface)] hover:opacity-90 transition"
//                   >
//                     Load more
//                   </button>
//                 </div>
//               )}
//             </>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }
