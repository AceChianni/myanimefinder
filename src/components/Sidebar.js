// src/components/Sidebar.js
"use client";

export default function Sidebar() {
  const links = [
    { label: "Watch Anime on Crunchyroll", href: "https://www.crunchyroll.com/" },
    { label: "Latest Anime News", href: "https://www.animenewsnetwork.com/" },
    { label: "Explore Cosplay Ideas", href: "https://www.cosplay.com/" },
    { label: "Anime Community Forums", href: "https://myanimelist.net/forum/" },
    { label: "Cosplay Tutorials (YouTube)", href: "https://www.youtube.com/results?search_query=cosplay+tutorials" },
    { label: "Collect Merch (GoodSmile)", href: "https://www.goodsmile.info/" },
  ];

  return (
    <>
      <h3 className="text-lg font-serif text-center mb-4 opacity-90">Helpful Links</h3>

      <ul className="space-y-3">
        {links.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center px-4 py-2 rounded-organic
              bg-white/70 dark:bg-white/5
              border border-[var(--shadow)] dark:border-[var(--nightshadow)]
              hover:bg-[var(--rosewood)] hover:text-white
              dark:hover:bg-[var(--spiderlily)] dark:hover:text-white
              shadow-sm hover:shadow-[0_0_12px_rgba(200,160,170,0.45)]
              transition-all duration-300"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}


// "use client";

// export default function Sidebar() {
//   const links = [
//     { label: "Watch Anime on Crunchyroll", href: "https://www.crunchyroll.com/" },
//     { label: "Latest Anime News", href: "https://www.animenewsnetwork.com/" },
//     { label: "Explore Cosplay Ideas", href: "https://www.cosplay.com/" },
//     { label: "Anime Community Forums", href: "https://myanimelist.net/forum/" },
//     { label: "Cosplay Tutorials (YouTube)", href: "https://www.youtube.com/results?search_query=cosplay+tutorials" },
//     { label: "Collect Merch (GoodSmile)", href: "https://www.goodsmile.info/" },
//   ];

//   return (
//     <div className="rounded-organic p-6 backdrop-blur-xl
//       bg-petal/70 dark:bg-ink/60 
//       border border-mist/50 dark:border-emberleaf/40 
//       shadow-soft">
//       <h3 className="text-lg font-serif text-center mb-4 opacity-90">Helpful Links</h3>
//       <ul className="space-y-3">
//         {links.map(({ label, href }) => (
//           <li key={href}>
//             <a
//               href={href} target="_blank" rel="noopener noreferrer"
//               className="block text-center px-4 py-2 rounded-organic
//               bg-white/60 dark:bg-white/5
//               hover:bg-white/80 dark:hover:bg-white/10
//               transition"
//             >
//               {label}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
