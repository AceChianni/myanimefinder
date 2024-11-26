// src/components/PollSidebar.js
"use client";
import { useEffect, useState } from "react";

const PollSidebar = () => {
  return (
    <div className="w-1/4 bg-gray-200 p-4">
      <h2 className="font-semibold text-xl">Anime Poll</h2>
      {/* Replace with actual poll functionality */}
      <div className="space-y-2">
        <p className="text-sm">Which anime is your favorite?</p>
        <div>
          <button className="w-full bg-blue-500 text-white py-2 rounded mb-2 hover:bg-blue-700">
            Naruto
          </button>
          <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700">
            One Piece
          </button>
        </div>
      </div>
    </div>
  );
};

export default PollSidebar;
