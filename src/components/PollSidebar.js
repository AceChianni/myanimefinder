// src/components/PollSidebar.js
"use client";

import { useEffect, useState } from "react";

const OPTIONS = [
  { id: "dbz", label: "Dragon Ball Z" },
  { id: "pokemon", label: "Pokemon" },
  { id: "naruto", label: "Naruto" },
  { id: "onepiece", label: "One Piece" },
  { id: "deathnote", label: "Death Note" },
  { id: "other", label: "Other" },
];

export default function PollSidebar() {
  const [results, setResults] = useState(null);
  const [selected, setSelected] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);

  async function load() {
    const res = await fetch("/api/poll", { cache: "no-store" });
    const data = await res.json();
    setResults(data);
  }

  useEffect(() => {
    load();

    // Check if user already voted in this browser
    const voted = localStorage.getItem("poll_voted");
    if (voted === "true") setHasVoted(true);
  }, []);

  async function vote() {
    if (!selected) return;
    const res = await fetch("/api/poll", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ optionId: selected }),
    });
    const data = await res.json();
    setResults(data);
    setHasVoted(true);
    localStorage.setItem("poll_voted", "true");
  }

  if (!results) return <div className="opacity-70 text-center">Loading poll…</div>;

  const total = Object.values(results).reduce((a, b) => a + b, 0);

  return (
    <div>
      <h3 className="text-center font-serif text-lg mb-4">Choose Your Starter Anime</h3>

      {/* BEFORE VOTE — SHOW OPTIONS */}
      {!hasVoted && (
        <div className="space-y-3">
          {OPTIONS.map((opt) => (
            <label key={opt.id} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                checked={selected === opt.id}
                onChange={() => setSelected(opt.id)}
                className="accent-[var(--accent)]"
              />
              {opt.label}
            </label>
          ))}

          <button
            onClick={vote}
            disabled={!selected}
            className="mt-4 w-full py-2 rounded-organic bg-[var(--accent)] text-[var(--surface)] hover:opacity-90 transition"
          >
            Submit
          </button>
        </div>
      )}

      {/* AFTER VOTE — SHOW RESULTS */}
      {hasVoted && (
        <div className="mt-2 space-y-3">
          {OPTIONS.map((opt) => {
            const count = results[opt.id] || 0;
            const pct = total ? Math.round((count / total) * 100) : 0;
            return (
              <div key={opt.id}>
                <div className="flex justify-between text-sm opacity-80">
                  <span>{opt.label}</span>
                  <span>{pct}%</span>
                </div>
                <div className="w-full h-3 bg-[var(--surface)] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[var(--accent)] transition-all duration-700"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
          <p className="text-center text-xs opacity-60 mt-3">{total} votes total</p>
        </div>
      )}
    </div>
  );
}
