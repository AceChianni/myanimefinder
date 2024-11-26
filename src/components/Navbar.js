"use client";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Once the component is mounted, update the state
  }, []);

  // Render nothing during SSR, or a loading state
  if (!mounted) return null;

  return (
    <nav className="bg-blue-600 text-white p-4">
      <ul className="flex space-x-6">
        <li>
          <a href="/" className="hover:text-yellow-300">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="hover:text-yellow-300">
            About
          </a>
        </li>
        <li>
          <a href="/contact" className="hover:text-yellow-300">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
