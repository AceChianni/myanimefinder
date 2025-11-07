// src/app/layout.js
"use client";

import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PetalsGenerator from "@/components/PetalsGenerator";
import Fireflies from "@/components/Fireflies";
import "@/styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text)] transition-colors duration-700">

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>

          {/* 🌸 Floating Environment Layers */}
          <PetalsGenerator />
          <Fireflies />

          {/* UI Layout */}
          <Navbar />
          <main className="flex-grow pt-32">{children}</main>
          <Footer />

        </ThemeProvider>

      </body>
    </html>
  );
}

// src/app/layout.js
// "use client";

// import { ThemeProvider } from "next-themes";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import "@/styles/globals.css";

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text)] transition-colors duration-700">
//         <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          
//           <Navbar />

//           <main className="flex-grow pt-32">
//             {children}
//           </main>

//           <Footer />

//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }


