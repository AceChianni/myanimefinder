// src/app/layout.js

"use client";
import { usePathname } from "next/navigation";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar"; 
import Slideshow from "../components/Slideshow";
import PollSidebar from "../components/PollSidebar";
import "../styles/globals.css";

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
        <Navbar />

        {isHomePage ? (
          <main className="grid grid-cols-1 lg:grid-cols-4 gap-4 min-h-screen p-4">
            <aside className="bg-sage-green rounded-lg shadow-md p-4 lg:col-span-1">
              <Sidebar />
            </aside>
            <section className="bg-white rounded-lg shadow-md p-4 lg:col-span-2 flex justify-center items-center">
              <Slideshow />
            </section>
            <aside className="bg-peach rounded-lg shadow-md p-4 lg:col-span-1">
              <PollSidebar />
            </aside>
          </main>
        ) : (
          <main className="p-4 min-h-screen">{children}</main>
        )}
      </body>
    </html>
  );
}
