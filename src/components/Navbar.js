// src/components/Navbar.js

// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { usePathname } from "next/navigation";
// import { motion, AnimatePresence } from "framer-motion";
// import { useTheme } from "next-themes";

// export default function Navbar() {
//   const pathname = usePathname();
//   const { theme, setTheme } = useTheme();
//   const [open, setOpen] = useState(false);

//   const links = [
//     { href: "/", label: "Home" },
//     { href: "/about", label: "About" },
//     { href: "/quiz", label: "Quiz" },
//     { href: "/anime", label: "Top Anime" },
//     { href: "/contact", label: "Contact" },
//   ];

//   return (
//     <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-roseCream/70 border-b border-roseShadow shadow-md dark:bg-twilight/60 dark:border-nightShadow transition-colors duration-300">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

//         {/* Logo */}
//         <Link href="/" className="text-2xl font-serif font-semibold">
//           AnimeFinder
//         </Link>

//         {/* Desktop Nav */}
//         <div className="hidden md:flex items-center gap-8">
//           {links.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               className={`hover:opacity-80 transition ${
//                 pathname === link.href ? "font-semibold underline underline-offset-4" : ""
//               }`}
//             >
//               {link.label}
//             </Link>
//           ))}

//           {/* Theme Toggle */}
//           <button
//             onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//             className="text-xl hover:scale-110 transition"
//           >
//             {theme === "dark" ? "🌞" : "🌙"}
//           </button>
//         </div>

//         {/* Mobile Toggle */}
//         <button
//           className="md:hidden text-3xl select-none"
//           onClick={() => setOpen(!open)}
//         >
//           <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.4 }}>
//             {open ? "✦" : "☆"}
//           </motion.span>
//         </button>
//       </div>

//       {/* Mobile Dropdown */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.35 }}
//             className="md:hidden flex flex-col items-center gap-4 py-6 backdrop-blur-xl bg-roseCream/80 dark:bg-twilight/80 border-b border-roseShadow dark:border-nightShadow"
//           >
//             {links.map((link) => (
//               <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
//                 {link.label}
//               </Link>
//             ))}

//             <button
//               onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//               className="text-xl"
//             >
//               {theme === "dark" ? "🌞" : "🌙"}
//             </button>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  // ✅ Prevent hydration mismatch by waiting for client
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/quiz", label: "Quiz" },
    { href: "/anime", label: "Search" },
    { href: "/contact", label: "Contact" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/40 dark:bg-black/30 border-b border-white/20 shadow-lg transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide text-rose-400 dark:text-moonLavender">
          AnniiMeFinder
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative hover:text-pink-400 transition ${
                pathname === link.href ? "font-bold underline underline-offset-4" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* ✅ Theme Toggle (hydration-safe) */}
        {mounted && (
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="hidden md:block text-xl hover:scale-110 transition"
          >
            {theme === "light" ? "🌙" : "🌞"}
          </button>
        )}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-purple-800 dark:text-moonLavender select-none"
          onClick={() => setOpen(!open)}
        >
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {open ? "✦" : "☆"}
          </motion.span>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="md:hidden backdrop-blur-xl bg-white/50 dark:bg-black/50 border-b border-white/30 shadow-xl"
          >
            <div className="flex flex-col items-center py-6 gap-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`text-lg transition ${
                    pathname === link.href ? "font-bold" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Theme toggle in mobile */}
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                  className="mt-3 text-xl hover:scale-110 transition"
                >
                  {theme === "light" ? "🌙" : "🌞"}
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
