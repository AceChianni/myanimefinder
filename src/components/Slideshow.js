// src/components/Slideshow.js
"use client";
import { useEffect, useState } from "react";
import { fetchTopAnime } from "../lib/fetchAnime";

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
    <div className="w-full max-w-4xl mx-auto relative">
      <img
        src={animeList[currentIndex].images.webp.large_image_url}
        alt={animeList[currentIndex].title}
        className="w-full h-96 object-cover rounded-lg"
      />
      <div className="absolute bottom-4 left-4 text-white font-semibold bg-black bg-opacity-50 p-2 rounded-md">
        {animeList[currentIndex].title}
      </div>
    </div>
  );
};

export default Slideshow;
