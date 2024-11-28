"use client";
import { useEffect, useState } from "react";
import { fetchTopAnime } from "../lib/fetchAnime";
import styles from "../styles/slideshow.module.css";
import Image from "next/image"; // Import Image component

const Slideshow = () => {
  const [animeList, setAnimeList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchTopAnime().then((animeData) => {
      setAnimeList(animeData);
    });
  }, []);

  useEffect(() => {
    if (animeList.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % animeList.length);
      }, 5000); // Change slide every 5 seconds
      return () => clearInterval(interval);
    }
  }, [animeList]);

  if (animeList.length === 0) return <div>Loading...</div>;

  return (
    <div className={styles.slideshowContainer}>
      <Image
        src={animeList[currentIndex].images.webp.large_image_url}
        alt={animeList[currentIndex].title}
        className={styles.slideshowImage}
        width={800} // Set appropriate width and height
        height={400}
      />
      <div className={styles.slideshowCaption}>
        {animeList[currentIndex].title}
      </div>
    </div>
  );
};

export default Slideshow;
