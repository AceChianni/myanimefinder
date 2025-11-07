// src/components/Footer.js
export default function Footer() {
  return (
    <footer
      className="w-full py-8 text-center mt-16
      bg-white/40 dark:bg-white/5 backdrop-blur-xl
      border-t border-roseShadow/40 dark:border-nightShadow
      text-rosewood dark:text-lilystem"
    >
      <p className="text-sm font-serif opacity-80">
        © {new Date().getFullYear()} AnimeFinder — made with stardust ✧
      </p>

      <div className="flex justify-center gap-6 mt-3 text-sm opacity-70 hover:opacity-100 transition-all">
        <a href="/anime" className="hover:underline">Explore</a>
        <a href="/about" className="hover:underline">About</a>
        <a href="/contact" className="hover:underline">Contact</a>
      </div>
    </footer>
  );
}
