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
import { fetchAnimeList } from "../../lib/api";
import styles from "../../styles/animecard.module.css"

export default async function AnimePage() {
  const animeList = await fetchAnimeList();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Top Anime</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {animeList.map((anime) => (
          <li
            key={anime.mal_id}
            className={`${styles.cardContainer} w-full h-80 rounded-lg shadow-lg`}
          >
            <div className={`${styles.card}`}>
              {/* Front of the Card */}
              <div
                className={`${styles.cardFront}`}
                style={{
                  backgroundImage: `url(${anime.images.jpg.large_image_url})`,
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4">
                  <h2 className="text-lg font-semibold text-white">
                    {anime.title}
                  </h2>
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