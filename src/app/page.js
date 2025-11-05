// src/app/page.js
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Fireflies from "../components/Fireflies";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/anime?search=${query}`);
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden
      bg-roseCream text-roseBrown dark:bg-twilight dark:text-starlight 
      transition-colors duration-700 ease-out pt-32 px-6">

      {/* Ambient Animation */}
      <Fireflies />

      {/* Title */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-5xl font-serif font-bold drop-shadow-sm"
      >
        Fall into a new world.
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.8 }}
        className="relative z-10 mt-4 max-w-xl text-lg opacity-90"
      >
        Discover anime that matches your mood, your story, and your imagination.
      </motion.p>

      {/* Search Bar */}
      <motion.form
        onSubmit={handleSearch}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="relative z-10 mt-8 w-full max-w-xl flex items-center
          bg-white/70 dark:bg-white/10 
          border border-roseShadow dark:border-nightShadow 
          backdrop-blur-xl shadow-md rounded-full 
          px-5 py-3 transition focus-within:shadow-roseShadow dark:focus-within:shadow-nightShadow/50"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by title, theme, vibe..."
          className="flex-grow bg-transparent outline-none text-roseBrown dark:text-starlight 
            placeholder:text-roseBrown/60 dark:placeholder:text-starlight/50"
        />

        <button 
          type="submit"
          className="ml-3 px-5 py-2 rounded-full text-sm font-semibold 
            bg-rosePetal text-roseBrown hover:bg-rosePetal/80 
            dark:bg-moonLavender dark:text-twilight dark:hover:bg-moonLavender/80 
            transition-all duration-300 shadow-sm"
        >
          Search
        </button>
      </motion.form>

    </main>
  );
}

