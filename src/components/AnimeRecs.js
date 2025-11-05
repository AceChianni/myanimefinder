// /components/AnimeRecs.js
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import HoverCard from "./HoverCard";

export default function AnimeRecs() {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/top/anime?limit=12")
      .then((res) => res.json())
      .then((data) => setAnimeList(data?.data ?? []));
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-6 overflow-visible">
      {animeList.map((anime) => (
        <div
          key={anime.mal_id}
          className="relative group overflow-visible cursor-pointer"
        >
          <div className="relative w-[150px] h-[230px] rounded-xl shadow-md hover:shadow-yellow-300/60 transition-all overflow-hidden">
            <Image
              src={anime.images?.jpg?.large_image_url}
              alt={anime.title}
              fill
              className="object-cover rounded-xl"
            />
          </div>

          <p className="mt-2 text-center text-sm font-medium opacity-90 max-w-[150px] truncate">
            {anime.title}
          </p>

          <HoverCard anime={anime} />
        </div>
      ))}
    </div>
  );
}
