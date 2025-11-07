// // /components/HoverCard.js

// "use client";

// import Image from "next/image";

// export default function HoverCard({ anime }) {
//   const img =
//     anime?.images?.jpg?.large_image_url ||
//     anime?.images?.jpg?.image_url ||
//     "";

//   // Some Jikan entries have empty or null synopsis — add a safe fallback:
//   const synopsis =
//     anime?.synopsis?.trim?.() ||
//     "No synopsis available for this title yet. Try the MAL page for more details.";

//   return (
//     <div
//       className="
//         absolute left-1/2 -translate-x-1/2 top-[105%]
//         w-80 max-h-[360px] p-4 rounded-2xl backdrop-blur-xl
//         bg-[rgba(255,245,225,0.97)] dark:bg-[rgba(18,18,22,0.95)]
//         border border-amber-300/40 shadow-[0_0_36px_rgba(255,200,80,0.55)]
//         flex flex-col gap-2
//         opacity-0 scale-95 invisible
//         transition-all duration-150 ease-out
//         group-hover:opacity-100 group-hover:visible group-hover:scale-100
//         overflow-visible z-50
//       "
//       role="dialog"
//       aria-label={`${anime?.title || "Title"} details`}
//     >
//       {/* Smaller image so description is always visible */}
//       {img ? (
//         <div className="relative mx-auto w-[180px] h-[240px] rounded-lg overflow-hidden shadow">
//           <Image
//             src={img}
//             alt={anime?.title || "Poster"}
//             fill
//             className="object-cover"
//           />
//         </div>
//       ) : null}

//       {/* Title */}
//       <h3 className="font-semibold text-base text-center text-black dark:text-white">
//         {anime?.title || "Untitled"}
//       </h3>

//       {/* Scrollable description */}
//       <div className="text-sm leading-snug text-neutral-900 dark:text-neutral-100 opacity-95 overflow-y-auto pr-2 custom-scrollbar max-h-[120px]">
//         {synopsis}
//       </div>
//     </div>
//   );
// }
// /components/HoverCard.js
"use client";

import Image from "next/image";

export default function HoverCard({ anime }) {
  const img =
    anime?.images?.jpg?.large_image_url ||
    anime?.images?.jpg?.image_url ||
    "";

  const synopsis =
    anime?.synopsis?.trim?.() ||
    "No synopsis available for this title yet. Try the MAL page for more details.";

  return (
    <div
      className="
        absolute left-1/2 -translate-x-1/2 
        top-0 -translate-y-[100%] 
        w-80 max-h-[360px] p-4 rounded-2xl backdrop-blur-xl
        bg-[rgba(255,245,225,0.97)] dark:bg-[rgba(18,18,22,0.95)]
        border border-amber-300/40 shadow-[0_0_36px_rgba(255,200,80,0.55)]
        flex flex-col gap-2
        opacity-0 scale-95 invisible
        transition-all duration-200 ease-out
        group-hover:opacity-100 group-hover:visible group-hover:scale-100
        overflow-hidden z-50
      "
      role="dialog"
      aria-label={`${anime?.title || "Title"} details`}
    >
      {/* Image */}
      {img && (
        <div className="relative mx-auto w-[160px] h-[220px] rounded-lg overflow-hidden shadow">
          <Image
            src={img}
            alt={anime?.title || "Poster"}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Title */}
      <h3 className="font-semibold text-base text-center text-black dark:text-white">
        {anime?.title || "Untitled"}
      </h3>

      {/* Description */}
      <div className="text-sm leading-snug text-neutral-900 dark:text-neutral-100 opacity-95 overflow-y-auto pr-2 custom-scrollbar max-h-[120px]">
        {synopsis}
      </div>
    </div>
  );
}
