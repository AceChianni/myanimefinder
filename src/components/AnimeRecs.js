import React, { useState, useEffect } from "react";

const AnimeRecommendations = () => {
  const [animeList, setAnimeList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const response = await fetch("https://api.jikan.moe/v4/top/anime");
        const data = await response.json();
        setAnimeList(data.data.slice(0, 10)); // Fetch top 10 anime
      } catch (err) {
        setError("Failed to load anime recommendations.");
      }
    };
    fetchAnime();
  }, []);

  return (
    <div className="results-card">
      <h3>Anime Recommendations</h3>
      {error && <p>{error}</p>}
      <div className="anime-container">
        {animeList.map((anime) => (
          <div key={anime.mal_id} className="anime-item">
            <h3>{anime.title}</h3>
            <img src={anime.images.jpg.large_image_url} alt={anime.title} />
            <p>{anime.synopsis || "No description available."}</p>
            <a href={anime.url} target="_blank" rel="noopener noreferrer">
              More Info
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimeRecommendations;
