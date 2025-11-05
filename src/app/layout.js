// src/app/layout.js
"use client";

import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="transition-colors duration-500 bg-roseCream text-roseBrown dark:bg-twilight dark:text-starlight">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />

          {/* Page Content */}
          <main className={isHomePage ? "pt-32" : "pt-28"}>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

// "use client";
// import { ThemeProvider } from "next-themes";
// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";
// import Slideshow from "../components/Slideshow";
// import PollSidebar from "../components/PollSidebar";
// import "../styles/globals.css";
// import { usePathname } from "next/navigation";

// export default function Layout({ children }) {
//   const pathname = usePathname();
//   const isHomePage = pathname === "/";

//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className="transition-colors duration-300 bg-roseCream text-roseBrown dark:bg-twilight dark:text-starlight font-sans">
//         <ThemeProvider attribute="class">
//           <Navbar />

//           {isHomePage ? (
//             <main className="pt-28 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">

//               <aside className="lg:col-span-1 bg-rosePetal/50 dark:bg-nightShadow backdrop-blur-md rounded-xl shadow-md p-4">
//                 <Sidebar />
//               </aside>

//               <section className="lg:col-span-2 bg-roseCream/60 dark:bg-nightShadow backdrop-blur-md rounded-xl shadow-md p-4 flex justify-center items-center">
//                 <Slideshow />
//               </section>

//               <aside className="lg:col-span-1 bg-rosePetal/50 dark:bg-nightShadow backdrop-blur-md rounded-xl shadow-md p-4">
//                 <PollSidebar />
//               </aside>

//             </main>
//           ) : (
//             <main className="pt-28 px-6 max-w-6xl mx-auto">{children}</main>
//           )}
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }
