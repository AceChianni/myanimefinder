// // src/components/PollSidebar.js
"use client";
import { useState, useEffect } from "react";

const OPTIONS = [
  "Dragon Ball Z",
  "Pokemon",
  "Naruto",
  "One Piece",
  "Death Note",
  "Other",
];

export default function PollSidebar() {
  const [votes, setVotes] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/poll")
      .then(res => res.json())
      .then(data => {
        setVotes(data.votes || Array(OPTIONS.length).fill(0));
        setSelected(data.userChoice ?? null);
        setLoading(false);
      });
  }, []);

  const submitVote = async (index) => {
    const response = await fetch("/api/poll", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ index }),
    });
    const data = await response.json();
    setVotes(data.votes);
    setSelected(index);
  };

  if (loading) return <p>Loading poll...</p>;

  const total = votes.reduce((a, b) => a + b, 0);

  return (
    <div className="space-y-6">
      <h3 className="text-center text-lg font-serif opacity-85">Favorite Starter Anime?</h3>

      {OPTIONS.map((label, i) => {
        const pct = total ? votes[i] / total : 0;
        return (
          <button
            key={i}
            onClick={() => submitVote(i)}
            className={`w-full flex items-center justify-between px-4 py-2 rounded-full transition text-sm
              ${selected === i 
                ? "bg-spiderlily text-white shadow-soft" 
                : "bg-white/50 dark:bg-white/10 hover:bg-rosepetal/40 dark:hover:bg-spiderlily/40"}`}
          >
            <span>{label}</span>

            {/* Animated Petal Growth */}
            <span className="relative w-10 h-10">
              <div
                className="absolute inset-0 bg-spiderlily/70 dark:bg-spiderlily rounded-full transition-all"
                style={{ transform: `scale(${0.4 + pct * 0.9})` }}
              />
            </span>
          </button>
        );
      })}
    </div>
  );
}
