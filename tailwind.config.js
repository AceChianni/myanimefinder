// tailwind.config.js
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* LIGHT MODE — Hydrangea Morning */
        blossom: "#E8E6F2",    // main background (soft lavender-blue)
        cloudpetal: "#F7F4FB", // card surface
        inkberry: "#3F3351",   // text (soft purple-gray)
        lilacmist: "#D9D3E8",  // borders / UI wash
        morninggold: "#F3E8C9",// highlight glow

        /* DARK MODE — Temple + Spider Lily */
        twilight: "#1C1B1F",   // page background (deep stone)
        bark: "#2C2A2F",       // card surface (brown-tinted gray)
        starlight: "#E5DDE0",  // text (dusty rose-beige)
        spiderlily: "#C0394A", // accent (vivid red)
        emberroot: "#5F4A4E",  // border warmth
      },
      boxShadow: {
        soft: "0 4px 12px rgba(0,0,0,0.18)",
        glow: "0 0 18px rgba(240,210,255,0.55)", // light mode dreamy glow
        shrine: "0 0 18px rgba(192,57,74,0.45)", // dark mode spider lily glow
      },
      borderRadius: {
        organic: "1.6rem 1.85rem 1.45rem 2rem",
      },
    },
  },
  plugins: [],
};
