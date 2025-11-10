// import React from "react";
// // import "../../styles/globals.css";
// import styles from "../../styles/aboutstyles.module.css";

// export default function AboutPage() {
//   return (
//     <div className={styles.aboutContainer}>
//       <div className={styles.contentContainer}>
//         <h1 className={styles.heading1}>Introducing Me</h1>
//         <h2 className={styles.heading2}>About Me</h2>
//         <section>
//           <p className={styles.paragraph}>
//             Hi there! I&apos;m{" "}
//             <span className={styles.boldText}>Ace Chianní</span> (she/her), a
//             New Orleans-based creative with a love for art, anime, gaming, and
//             all things nerdy. I&apos;m driven by a passion for crafting
//             meaningful, engaging experiences that merge creativity with
//             technology. Whether it&apos;s through design, storytelling, or
//             exploration, my goal is to create impactful, immersive works that
//             inspire and connect. As I transition into the tech space, I&apos;m
//             excited to bring fresh, innovative ideas to life and share my
//             journey of discovery and creation with the world.
//           </p>
//         </section>
//         <hr className={styles.sectionDivider} />
//         <h2 className={styles.heading2}>About This Project</h2>
//         <section>
//           <p className={styles.paragraph}>
//             Welcome to{" "}
//             <span className={styles.boldText}>Anniime Recommendations</span>, a
//             project created to combine my passion for anime and technology. This
//             web app helps users discover anime tailored to their preferences
//             through a fun and interactive quiz. The recommendations page allows
//             you to explore popular and curated anime lists, while other features
//             like the contact form and polls keep the experience engaging.
//           </p>
//         </section>
//         <hr className={styles.sectionDivider} />
//         <h2 className={styles.heading2}>How It Works</h2>
//         <section>
//           <ul className={styles.list}>
//             <li>
//               <span className={styles.boldText}>Quiz:</span> Answer questions to
//               find anime tailored to your tastes.
//             </li>
//             <li>
//               <span className={styles.boldText}>Recommendations:</span> Browse
//               curated anime lists based on genres and popularity.
//             </li>
//             <li>
//               <span className={styles.boldText}>Contact Us:</span> Reach out via
//               the contact form for feedback or queries.
//             </li>
//             <li>
//               <span className={styles.boldText}>Interactive Polls:</span> Vote
//               for your favorite anime in fun, dynamic polls.
//             </li>
//           </ul>
//         </section>
//         <hr className={styles.sectionDivider} />
//         <h2 className={styles.heading2}>Tools and Technologies</h2>
//         <section>
//           <ul className={styles.list}>
//             <li>
//               <span className={styles.boldText}>Languages:</span> JavaScript,
//               HTML5, CSS3
//             </li>
//             <li>
//               <span className={styles.boldText}>Frameworks:</span> React,
//               Next.js
//             </li>
//             <li>
//               <span className={styles.boldText}>UI Libraries:</span> Tailwind
//               CSS
//             </li>
//             <li>
//               <span className={styles.boldText}>AI Integration:</span> Used to
//               generate anime recommendations and streamline development.
//             </li>
//             <li>
//               <span className={styles.boldText}>API Integration:</span> REST
//               APIs for anime data
//             </li>
//             <li>
//               <span className={styles.boldText}>Version Control:</span> GitHub
//               for collaboration and versioning
//             </li>
//             <li>
//               <span className={styles.boldText}>Deployment:</span> Hosted on
//               Vercel
//             </li>
//           </ul>
//         </section>
//         <hr className={styles.sectionDivider} />
//         <h2 className={styles.heading2}>Why I Built This</h2>
//         <section>
//           <p className={styles.paragraph}>
//             <span className={styles.boldText}>Anniime Recommendations</span>{" "}
//             represents my passion for creativity and technology. It&apos;s a
//             space where I can showcase my design and development skills while
//             sharing my love for anime with the world. This project is a step
//             toward my dream of becoming a freelance artist and entrepreneur,
//             traveling the world, and inspiring others through my work.
//           </p>
//         </section>
//       </div>
//     </div>
//   );
// }
// src/app/about/page.js
"use client";

import Image from "next/image";
import "@/styles/globals.css";

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20 space-y-20">

      {/* Section 1 — Intro */}
      <section className="flex flex-col md:flex-row items-center gap-10">
        
        {/* Portrait */}
        <div className="relative w-40 h-40 rounded-full overflow-hidden ring-2 ring-[var(--accent)]/40 shadow-soft">
          <Image
            src="/acechianni.jpg"
            alt="Ace Chianní"
            fill
            className="object-cover"
          />
        </div>

        {/* Text */}
        <div className="space-y-4 max-w-2xl">
          <h1 className="text-4xl font-serif font-bold">
            Ace Chianní
          </h1>
          <p className="opacity-90 leading-relaxed text-[1.05rem]">
            I’m a <span className="font-semibold">creative technologist, artist, and UX designer</span> from New Orleans. 
            My work blends emotional storytelling, interactive design, and soft world-building —
            shaping digital spaces that feel alive, warm, and meaningful.
          </p>
        </div>
      </section>


      {/* Section 2 — Botanical, Mythic Tone */}
      <section className="bg-panel-light dark:bg-panel-dark rounded-organic shadow-soft p-8 prose prose-neutral dark:prose-invert max-w-none">
        <h2 className="font-serif text-2xl">The Heart of My Work</h2>
        <p>
          I’m inspired by emotion, need, color, and connection — all of the things that make us human.
          I believe design should feel like a place you can breathe in. A place you can return to. A place of comfort and ease.
        </p>
        <p>
          Art, anime, and world-building shaped the way I see storytelling.  
          I create with softness, with intention, with curiosity.. 
          and I’m always exploring how technology can hold feeling instead of replacing it.
        </p>
      </section>


      {/* Section 3 — About This Project */}
      <section className="space-y-4">
        <h2 className="font-serif text-2xl">About This Project</h2>
        <p className="max-w-3xl leading-relaxed opacity-90">
          <span className="font-semibold">AnniiMe Finder</span> is a curated anime discovery space. It's
          a place to explore stories by *feeling*, not just by a category or genre.
        </p>

        <ul className="list-disc pl-6 space-y-2 opacity-90">
          <li>A vibe-based quiz that reads emotional preference</li>
          <li>Anime recommendations based on character, tone, and world energy</li>
          <li>A growing space for polls, playlists, visual seasons, and community</li>
        </ul>
      </section>


      {/* Section 4 — Tools & Craft */}
      <section className="bg-panel-light dark:bg-panel-dark rounded-organic shadow-soft p-8 space-y-4">
        <h2 className="font-serif text-2xl">Tools I Create With</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm opacity-90">
          <p>・React / Next.js</p>
          <p>・Tailwind CSS</p>
          <p>・Figma / Procreate</p>
          <p>・REST APIs</p>
          <p>・Upstash Redis (state & persistence)</p>
          <p>・GitHub / Vercel</p>
        </div>
      </section>

      {/* Section 5 — Purpose */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <h2 className="font-serif text-2xl">Why I Built This</h2>
        <p className="leading-relaxed opacity-90">
          This is more than a website — it’s a living garden of story, identity, and self-expression.  
          A place where softness and curiosity are allowed.  
          A place to *feel seen*.
        </p>
      </section>
    </div>
  );
}
