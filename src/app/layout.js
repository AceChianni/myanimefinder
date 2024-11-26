// src/app/layout.js
import Navbar from "../components/Navbar";
import "../styles/globals.css"; // Global styles

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Your Site Title</title>
      </head>
      <body className="bg-gray-50 text-gray-800">
        <Navbar />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
