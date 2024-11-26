// src/components/Sidebar.js
"use client";
import { useEffect, useState } from "react";

const Sidebar = () => {
  return (
    <div className="w-1/4 bg-gray-200 p-4">
      <h2 className="font-semibold text-xl">Information Links</h2>
      <ul className="space-y-2">
        <li>
          <a href="/about" className="text-blue-500 hover:underline">
            About Us
          </a>
        </li>
        <li>
          <a href="/faq" className="text-blue-500 hover:underline">
            FAQ
          </a>
        </li>
        <li>
          <a href="/contact" className="text-blue-500 hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
