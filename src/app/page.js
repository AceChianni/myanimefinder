// // src/app/page.js
// "use client";

// import Fireflies from "@/components/Fireflies";
// import PetalGenerator from "@/components/PetalsGenerator";
// import Sidebar from "@/components/Sidebar";
// import Slideshow from "@/components/Slideshow";
// import PollSidebar from "@/components/PollSidebar";

// export default function HomePage() {
//   return (
//     <main className="relative min-h-screen overflow-hidden">

//       {/* 🌸 Petals & Fireflies only on Landing */}
//       <div className="falling-layer"></div>
//       <PetalGenerator />
//       <div className="firefly-layer"></div>
//       <Fireflies />
//       {/* HERO IMAGE Section */}
//       <section className="relative w-full h-[420px] md:h-[520px] lg:h-[620px] flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-b from-rose-50 to-blossom/70 
//         dark:from-[#2a1b2f]/60 dark:to-twilight/80"></div>

//         <div className="relative z-10 text-center px-6">
//           <h1 className="text-5xl md:text-6xl font-serif font-bold drop-shadow-[0_0_20px_rgba(255,255,255,0.6)] dark:drop-shadow-[0_0_18px_rgba(193,63,85,0.45)]">
//             Fall into a new world.
//           </h1>
//           <p className="mt-4 max-w-2xl mx-auto text-lg opacity-90">
//             Discover anime that matches your mood, your story, and your imagination.
//           </p>
//         </div>
//       </section>

//       {/* Intro Section */}
//       <section className="relative z-[5] max-w-7xl mx-auto px-4 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

//           <div className="bg-panel-light dark:bg-panel-dark rounded-organic shadow-soft p-6">
//             <Sidebar />
//           </div>

//           <div className="bg-panel-light dark:bg-panel-dark rounded-organic shadow-soft p-6 flex justify-center">
//             <Slideshow />
//           </div>

//           <div className="bg-panel-light dark:bg-panel-dark rounded-organic shadow-soft p-6">
//             <PollSidebar />
//           </div>

//         </div>
//       </section>

//     </main>
//   );
// }
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
