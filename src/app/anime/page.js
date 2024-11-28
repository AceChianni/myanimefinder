"use client";

import AnimeRecs from "../../components/AnimeRecs.js";

export default function AnimePage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Top Anime</h1>
      <AnimeRecs />
    </div>
  );
}
