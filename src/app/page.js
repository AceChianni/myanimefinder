// src/app/page.js
"use client";

import Sidebar from "@/components/Sidebar";
import Slideshow from "@/components/Slideshow";
import PollSidebar from "@/components/PollSidebar";
import Fireflies from "@/components/Fireflies";

export default function HomePage() {
  return (
    <main className="relative min-h-screen">

      <Fireflies />

      {/* HERO Section */}
      <section className="relative w-full h-[420px] md:h-[520px] lg:h-[620px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--surface)]/40 to-[var(--bg)]"></div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-serif font-bold drop-shadow-lg">
            Fall into a new world.
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg opacity-90">
            Discover anime that matches your mood, your story, and your imagination.
          </p>
        </div>
      </section>

      {/* 3 Columns */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-panel-light dark:bg-panel-dark rounded-organic p-6 shadow-soft">
          <Sidebar />
        </div>

        <div className="bg-panel-light dark:bg-panel-dark rounded-organic p-6 shadow-soft flex justify-center">
          <Slideshow />
        </div>

        <div className="bg-panel-light dark:bg-panel-dark rounded-organic p-6 shadow-soft">
          <PollSidebar />
        </div>
      </section>

    </main>
  );
}
