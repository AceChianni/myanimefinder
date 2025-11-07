// src/app/page.js
"use client";

import Sidebar from "@/components/Sidebar";
import Slideshow from "@/components/Slideshow";
import PollSidebar from "@/components/PollSidebar";

export default function HomePage() {
  return (
    <main className="relative min-h-screen transition-colors duration-700">

      {/* HERO IMAGE Section */}
      <section className="relative w-full h-[420px] md:h-[520px] lg:h-[620px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-50 to-blossom/70 
        dark:from-[#2a1b2f]/60 dark:to-twilight/80"></div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-serif font-bold drop-shadow-[0_0_20px_rgba(255,255,255,0.6)] dark:drop-shadow-[0_0_18px_rgba(193,63,85,0.45)]">
            Fall into a new world.
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg opacity-90">
            Discover anime that matches your mood, your story, and your imagination.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="relative z-[5] max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-panel-light dark:bg-panel-dark rounded-organic shadow-soft p-6">
            <Sidebar />
          </div>

          <div className="bg-panel-light dark:bg-panel-dark rounded-organic shadow-soft p-6 flex justify-center">
            <Slideshow />
          </div>

          <div className="bg-panel-light dark:bg-panel-dark rounded-organic shadow-soft p-6">
            <PollSidebar />
          </div>

        </div>
      </section>

    </main>
  );
}

// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// import Fireflies from "@/components/Fireflies";
// import Sidebar from "@/components/Sidebar";
// import Slideshow from "@/components/Slideshow";
// import PollSidebar from "@/components/PollSidebar";

// export default function HomePage() {
//   const [query, setQuery] = useState("");
//   const router = useRouter();

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (!query.trim()) return;
//     router.push(`/anime?search=${query}`);
//   };

//   return (
//     <main className="relative min-h-screen overflow-hidden transition-colors duration-700 
//       bg-roseCream text-roseBrown dark:bg-twilight dark:text-starlight">

//       {/* Falling Petals + Lily Layer */}
// <div className="falling-layer">
//   {Array.from({ length: 18 }).map((_, i) => (
//     <div
//       key={i}
//       className={`${
//         Math.random() > 0.5 ? "falling-petal" : "falling-lily"
//       }`}
//       style={{
//         left: `${Math.random() * 100}%`,
//         animationDelay: `${Math.random() * 6}s`,
//         animationDuration: `${6 + Math.random() * 6}s`,
//       }}
//     />
//   ))}
// </div>


//       <Fireflies />

//       {/* HERO */}
//       <section className="pt-36 pb-12 text-center relative z-10">
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-5xl font-serif font-bold drop-shadow-[0_0_15px_rgba(255,235,240,0.45)] dark:drop-shadow-[0_0_12px_rgba(193,63,85,0.45)]"
//         >
//           Fall into a new world.
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.15, duration: 0.8 }}
//           className="mt-4 max-w-xl mx-auto opacity-90"
//         >
//           Discover anime that matches your mood, your story, and your imagination.
//         </motion.p>

//         {/* SEARCH */}
//         <motion.form
//           onSubmit={handleSearch}
//           initial={{ opacity: 0, y: 15 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.7 }}
//           className="mt-8 w-full max-w-xl mx-auto flex items-center
//             bg-white/70 dark:bg-white/10 backdrop-blur-xl border border-roseShadow dark:border-nightShadow
//             shadow-md rounded-full px-5 py-3 focus-within:shadow-roseShadow/50"
//         >
//           <input
//             type="text"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             placeholder="Search by title, theme, vibe..."
//             className="flex-grow bg-transparent outline-none"
//           />
//           <button
//             type="submit"
//             className="ml-3 px-5 py-2 rounded-full bg-rosePetal text-roseBrown dark:bg-moonLavender dark:text-twilight 
//             hover:opacity-90 transition-all"
//           >
//             Search
//           </button>
//         </motion.form>
//       </section>

//       {/* 3-COLUMN WORLD INTRO SECTION */}
//       <section className="relative z-10 max-w-7xl mx-auto px-4 pb-24
//         grid grid-cols-1 md:grid-cols-3 gap-6">

//         {/* Links */}
//         <div className="bg-white/70 dark:bg-white/5 backdrop-blur-xl rounded-xl shadow-lg p-6 border border-roseShadow/40 dark:border-white/10">
//           <Sidebar />
//         </div>

//         {/* Slideshow */}
//         <div className="bg-white/70 dark:bg-white/5 backdrop-blur-xl rounded-xl shadow-lg p-6 border border-roseShadow/40 dark:border-white/10 flex justify-center">
//           <Slideshow />
//         </div>

//         {/* Poll */}
//         <div className="bg-white/70 dark:bg-white/5 backdrop-blur-xl rounded-xl shadow-lg p-6 border border-roseShadow/40 dark:border-white/10">
//           <PollSidebar />
//         </div>

//       </section>
//     </main>
//   );
// }
