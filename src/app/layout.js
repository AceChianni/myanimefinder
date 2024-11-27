// src/app/layout.js
"use client";
import { usePathname } from "next/navigation";
import Navbar from "../components/Navbar";
import LeftSidebar from "../components/Sidebar";
import Slideshow from "../components/Slideshow";
import RightSidebar from "../components/PollSidebar";
import "../styles/globals.css";
import "../styles/Sidebars.module.css";
import "../styles/Slideshow.module.css";

export default function Layout({ children }) {
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Anime Finder</title>
      </head>
      <body className="bg-sky-blue text-gray-800 font-serif">
        {/* Navbar */}
        <Navbar />

        {/* Grid layout for the home page */}
        {isHomePage ? (
          <main className="grid grid-cols-1 lg:grid-cols-4 gap-4 min-h-screen p-4">
            {/* Left Sidebar */}
            <aside className="bg-sage-green rounded-lg shadow-md p-4 lg:col-span-1">
              <LeftSidebar />
            </aside>

            {/* Slideshow in the center */}
            <section className="bg-white rounded-lg shadow-md p-4 lg:col-span-2 flex justify-center items-center">
              <Slideshow />
            </section>

            {/* Right Sidebar */}
            <aside className="bg-peach rounded-lg shadow-md p-4 lg:col-span-1">
              <RightSidebar />
            </aside>

            {/* Children content */}
            <div className="bg-gray-100 rounded-lg shadow-md p-4 lg:col-span-4">
              {children}
            </div>
          </main>
        ) : (
          // Basic layout for other pages
          <main className="p-4 min-h-screen">{children}</main>
        )}
      </body>
    </html>
  );
}
