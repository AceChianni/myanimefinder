// import { fetchAnimeList } from "../../lib/api";

// export default async function AnimePage() {
//   const animeList = await fetchAnimeList();

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Top Anime</h1>
//       <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {animeList.map((anime) => (
//           <li key={anime.mal_id} className="bg-gray-200 p-4 rounded">
//             <h2 className="text-lg font-semibold">{anime.title}</h2>
//             <p>Episodes: {anime.episodes}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// NEXT ONE
// import { fetchAnimeList } from "../../lib/api";

// export default async function AnimePage() {
//   const animeList = await fetchAnimeList();

//   return (
//     <div className="p-6">
//       <h1 className="text-4xl font-bold mb-8 text-center">Top Anime</h1>
//       <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {animeList.map((anime) => (
//           <li key={anime.mal_id} className="relative group">
//             {/* Front of the card */}
//             <div className="h-80 w-full bg-cover bg-center rounded-lg shadow-lg transform transition-transform duration-300 group-hover:rotate-y-180"
//               style={{ backgroundImage: `url(${anime.images.jpg.image_url})` }}>
//               <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-2 text-center font-semibold">
//                 {anime.title}
//               </div>
//             </div>
//             {/* Back of the card */}
//             <div className="absolute h-80 w-full bg-white rounded-lg shadow-lg backface-hidden transform rotate-y-180 group-hover:rotate-y-0 transition-transform duration-300 overflow-y-auto">
//               <div className="p-4">
//                 <h2 className="text-lg font-semibold mb-2">{anime.title}</h2>
//                 <p className="text-sm">{anime.synopsis || "No description available."}</p>
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// src/app/anime/page.js

"use client"
// src/app/anime/page.js
import { useEffect, useState } from "react";
import styles from "../../styles/animecard.module.css"; // Ensure this is the correct path to your styles

export default function AnimePage() {
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch anime data from Jikan API
  useEffect(() => {
    const fetchAnimeList = async () => {
      try {
        const response = await fetch("https://api.jikan.moe/v4/top/anime");
        const data = await response.json();
        setAnimeList(data.data); // Store the anime data
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching anime data:", error);
        setLoading(false);
      }
    };

    fetchAnimeList();
  }, []);

  if (loading) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-3xl font-bold mb-6">Loading Top Anime...</h1>
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Top Anime</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {animeList.map((anime) => (
          <li
            key={anime.mal_id}
            className={`${styles.cardContainer} w-full h-full rounded-lg shadow-lg`}
          >
            <div className={`${styles.card}`}>
              {/* Front of the Card */}
              <div
                className={`${styles.cardFront}`}
                style={{
                  backgroundImage: `url(${anime.images.jpg.large_image_url})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '100%', // Ensures the card takes the full height
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4">
                  <h2 className="text-lg font-semibold text-white">{anime.title}</h2>
                </div>
              </div>
              {/* Back of the Card */}
              <div className={`${styles.cardBack}`}>
                <h2 className="text-lg font-bold mb-2">{anime.title}</h2>
                <p className="text-sm">{anime.synopsis}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
