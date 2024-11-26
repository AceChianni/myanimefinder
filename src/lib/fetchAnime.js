// src/lib/fetchAnime.js
export async function fetchTopAnime() {
  const res = await fetch("https://api.jikan.moe/v4/top/anime");
  const data = await res.json();
  return data.data;
}
