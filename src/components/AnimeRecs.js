import React, { useState, useEffect } from "react";
import styles from "../styles/animecard.module.css";

const AnimeRecs = () => {
  const [animeList, setAnimeList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const response = await fetch("https://api.jikan.moe/v4/top/anime");
        if (!response.ok) throw new Error("Failed to fetch anime.");
        const data = await response.json();
        setAnimeList(data.data.slice(0, 10)); // Fetch top 10 anime
      } catch (err) {
        setError("Failed to load anime recommendations.");
      } finally {
        setLoading(false);
      }
    };

    fetchAnime();
  }, []);

  if (loading) {
    return <p className="loading">Loading anime recommendations...</p>;
  }

  return (
    <div className={styles.cardContainer}>
      {error && <p className="error">{error}</p>}
      {animeList.length === 0 && !error && <p>No anime found.</p>}
      {animeList.map((anime) => (
        <div key={anime.mal_id} className={styles.card}>
          {/* Front of the card (image and title) */}
          <div
            className={styles.cardFront}
            style={{
              backgroundImage: `url(${anime.images.jpg.large_image_url})`,
            }}
            role="img"
            aria-label={`Image of ${anime.title}`}
          >
            <h3>{anime.title}</h3>
          </div>

          {/* Back of the card (description) */}
          <div className={styles.cardBack}>
            <p>{anime.synopsis || "No description available."}</p>
            <a href={anime.url} target="_blank" rel="noopener noreferrer">
              More Info
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnimeRecs;
