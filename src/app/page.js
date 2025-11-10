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
      {/* HERO Section */}
<section className="relative w-full h-[420px] md:h-[520px] lg:h-[620px] flex items-center justify-center overflow-hidden">

  {/* Background Image */}
  <div 
    className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-[1.12]"
    style={{ backgroundImage: `url('/studiog.jpg')` }}
  />

  {/* Soft Cinematic Blur + Depth Fade */}
  <div className="absolute inset-0 backdrop-blur-[6px] bg-gradient-to-b from-[var(--surface)]/45 to-[var(--bg)]/92"></div>

  {/* Text Content */}
  <div className="relative z-10 text-center px-6 animate-[fadeUpSoft_1.1s_ease-out]">
    
    <h1
      className="
        text-5xl md:text-6xl font-serif font-bold select-none
        text-white
        drop-shadow-[0_4px_28px_rgba(0,0,0,0.45)]
        transition-all duration-500
        hover:animate-[ghibliGlow_1.8s_ease-in-out_infinite_alternate]
      "
    >
      Fall into a new world.
    </h1>

    <p
      className="
        mt-4 max-w-2xl mx-auto text-lg select-none
        text-white/90
        drop-shadow-[0_2px_14px_rgba(0,0,0,0.45)]
        animate-[fadeUpSoft_1.4s_ease-out]
      "
    >
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
