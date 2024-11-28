// src/components/AnimeRecs.js

import React, { useState, useEffect } from "react";
import styles from "../styles/animecard.module.css"; 

const AnimeRecs = () => {  
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
    <div className={styles.cardContainer}> {/* Apply card container style */}
      {error && <p>{error}</p>}
      {animeList.map((anime) => (
        <div key={anime.mal_id} className={styles.card}>
          {/* Front of the card (image and title) */}
          <div
            className={styles.cardFront}
            style={{
              backgroundImage: `url(${anime.images.jpg.large_image_url})`,
            }}
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
