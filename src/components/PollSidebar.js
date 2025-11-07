"use client";

import { useState, useEffect } from "react";

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
  const [userVote, setUserVote] = useState(null);

  async function load() {
    const res = await fetch("/api/poll", { cache: "no-store" });
    const data = await res.json();
    setResults(data);
  }

  useEffect(() => { load(); }, []);

  async function submit() {
    if (!selected) return;

    const res = await fetch("/api/poll", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prev: userVote, next: selected })
    });

    const data = await res.json();
    setResults(data);
    setUserVote(selected); // save user’s choice
  }

  if (!results) return <div className="opacity-70 text-center">Loading poll…</div>;

  const total = Object.values(results).reduce((a, b) => a + b, 0);

  return (
    <div className="space-y-5">
      <h3 className="text-center font-serif text-lg">Choose Your Starter Anime</h3>

      {/* Show OPTIONS only before first submit or while changing vote */}
      {!userVote && (
        <div className="space-y-3">
          {OPTIONS.map(opt => (
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
            onClick={submit}
            disabled={!selected}
            className="mt-3 w-full py-2 rounded-organic bg-[var(--accent)] text-[var(--surface)] hover:opacity-90 transition"
          >
            Submit
          </button>
        </div>
      )}

      {/* RESULTS UI */}
      {userVote && (
        <div className="space-y-4">
          {OPTIONS.map(opt => {
            const count = results[opt.id] || 0;
            const pct = total ? Math.round((count / total) * 100) : 0;

            return (
              <div key={opt.id}>
                <div className="flex justify-between text-sm opacity-80 mb-1">
                  <span>{opt.label}</span>
                  <span>{pct}%</span>
                </div>

                <div className="w-full h-3 bg-[var(--surface)] rounded-full overflow-hidden">
                  <div
                    className="h-full transition-all duration-700"
                    style={{
                      width: `${pct}%`,
                      background: `linear-gradient(90deg, var(--accent), var(--neutral))`,
                    }}
                  />
                </div>
              </div>
            );
          })}

          <button
            onClick={() => setUserVote(null)}
            className="mt-2 w-full text-xs opacity-70 hover:opacity-100 underline"
          >
            Change Vote
          </button>

          <p className="text-center text-xs opacity-60">{total} votes total</p>
        </div>
      )}
    </div>
  );
}


// // src/components/PollSidebar.js
// "use client";

// import { useState, useEffect } from "react";

// const OPTIONS = [
//   { id: "dbz", label: "Dragon Ball Z" },
//   { id: "pokemon", label: "Pokemon" },
//   { id: "naruto", label: "Naruto" },
//   { id: "onepiece", label: "One Piece" },
//   { id: "deathnote", label: "Death Note" },
//   { id: "other", label: "Other" },
// ];

// export default function PollSidebar() {
//   const [results, setResults] = useState(null);
//   const [selected, setSelected] = useState(null);
//   const [lastVote, setLastVote] = useState(null);
//   const [showResults, setShowResults] = useState(false);

//   // Load poll + previous vote
//   useEffect(() => {
//     const stored = localStorage.getItem("starterVote");
//     if (stored) setLastVote(stored);
//     load();
//   }, []);

//   async function load() {
//     const res = await fetch("/api/poll", { cache: "no-store" });
//     const data = await res.json();
//     setResults(data);
//   }

//   async function vote() {
//     if (!selected) return;

//     const res = await fetch("/api/poll", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ previousId: lastVote, optionId: selected }),
//     });

//     const data = await res.json();
//     setResults(data);
//     localStorage.setItem("starterVote", selected);
//     setLastVote(selected);
//     setShowResults(true);
//   }

//   if (!results) return <div className="opacity-70 text-center">Loading poll…</div>;

//   const total = Object.values(results).reduce((a, b) => a + b, 0);

//   return (
//     <div className="space-y-6">
//       <h3 className="text-center font-serif text-lg mb-4">Choose Your Starter Anime</h3>

//       {!showResults && (
//         <div className="space-y-3">
//           {OPTIONS.map((opt) => (
//             <label key={opt.id} className="flex items-center gap-2 cursor-pointer">
//               <input
//                 type="radio"
//                 checked={selected === opt.id}
//                 onChange={() => setSelected(opt.id)}
//                 className="accent-[var(--accent)]"
//               />
//               {opt.label}
//             </label>
//           ))}

//           <button
//             onClick={vote}
//             disabled={!selected}
//             className="mt-4 w-full py-2 rounded-organic bg-[var(--accent)] text-[var(--surface)] hover:opacity-90 transition"
//           >
//             Submit
//           </button>
//         </div>
//       )}

//       {showResults && (
//         <div className="space-y-4">
//           {OPTIONS.map((opt) => {
//             const count = results[opt.id] || 0;
//             const pct = total ? Math.round((count / total) * 100) : 0;
//             return (
//               <div key={opt.id}>
//                 <div className="flex justify-between text-sm opacity-80">
//                   <span>{opt.label}</span>
//                   <span>{pct}%</span>
//                 </div>
//                 <div className="w-full h-3 bg-[var(--surface)] rounded-full overflow-hidden">
//                   <div
//                     className="h-full bg-[var(--accent)] transition-all duration-700"
//                     style={{ width: `${pct}%` }}
//                   />
//                 </div>
//               </div>
//             );
//           })}

//           <p className="text-center text-xs opacity-60">{total} votes total</p>

//           <button
//             onClick={() => setShowResults(false)}
//             className="w-full text-xs underline opacity-70 hover:opacity-100"
//           >
//             Change Vote
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }
