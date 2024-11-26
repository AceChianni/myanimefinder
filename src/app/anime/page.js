import { fetchAnimeList } from "../../lib/api";

export default async function AnimePage() {
  const animeList = await fetchAnimeList();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Top Anime</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {animeList.map((anime) => (
          <li key={anime.mal_id} className="bg-gray-200 p-4 rounded">
            <h2 className="text-lg font-semibold">{anime.title}</h2>
            <p>Episodes: {anime.episodes}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
