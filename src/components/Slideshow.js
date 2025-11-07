
// src/components/Slideshow.js
"use client";
import { useState, useEffect } from "react";
import { fetchTopAnime } from "@/lib/fetchAnime";
import Image from "next/image";

export default function Slideshow() {
  const [anime, setAnime] = useState([]);
  const [i, setI] = useState(0);

  useEffect(() => { fetchTopAnime().then(setAnime); }, []);
  useEffect(() => {
    if (!anime.length) return;
    const cycle = setInterval(() => setI(n => (n+1)%anime.length), 4000);
    return () => clearInterval(cycle);
  }, [anime]);

  if (!anime.length) return <div className="opacity-60 text-center">Loading…</div>;

  return (
    <div className="relative w-full aspect-[3/4] rounded-organic overflow-hidden shadow-soft">
      <Image
        src={anime[i].images.jpg.large_image_url}
        alt={anime[i].title}
        fill
        className="object-cover transition duration-700 ease-dreamy"
      />
      {/* Light beam */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(255,255,230,0.45),transparent_70%)]" />
      <div className="absolute bottom-3 left-3 text-xs px-3 py-1 rounded-organic
      bg-rosewood/50 dark:bg-ink/70 text-blossom dark:text-lilystem">
        {anime[i].title}
      </div>
    </div>
  );
}
