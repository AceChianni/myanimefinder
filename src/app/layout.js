// src/app/layout.js
"use client";

import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PetalGenerator from "@/components/PetalsGenerator";
import Fireflies from "@/components/Fireflies";
import "@/styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text)] transition-colors duration-700">

  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>

    {/* Floating BG Layers */}
    <div className="falling-layer"></div>
    <PetalGenerator />

    <div className="firefly-layer"></div>
    <Fireflies />

    {/* Actual UI */}
    <Navbar />
    <main className="flex-grow pt-32 content-layer">{children}</main>
    <Footer />

  </ThemeProvider>
</body>

    </html>
  );
}


// "use client";

// import { ThemeProvider } from "next-themes";
// import { usePathname } from "next/navigation";
// import Navbar from "@/components/Navbar";
// import "@/styles/globals.css";

// export default function RootLayout({ children }) {
//   const pathname = usePathname();
//   const isHomePage = pathname === "/";

//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className="transition-colors duration-500 bg-roseCream text-roseBrown dark:bg-twilight dark:text-starlight">
//         <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
//           <Navbar />

//           {/* Page Content */}
//           <main className={isHomePage ? "pt-32" : "pt-28"}>
//             {children}
//           </main>
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }

