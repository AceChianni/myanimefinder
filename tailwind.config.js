/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/styles/**/*.{css}"
  ],
  theme: {
    extend: {
      colors: {
        // Light Mode — Moonlight Rose
        roseCream: "#F8EFEA",
        rosePetal: "#F2D3D0",
        roseBrown: "#8A5B55",
        roseShadow: "rgba(167, 116, 104, 0.3)",

        // Dark Mode — Starry Twilight
        twilight: "#0B0A10",
        starlight: "#EDEAFF",
        moonLavender: "#C3B6FF",
        nightShadow: "rgba(255, 255, 255, 0.15)",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
