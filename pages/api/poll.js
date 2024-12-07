// pages/api/poll.js

import { incrementVote, getPollData } from "@/lib/redis";

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const { optionIndex } = req.body;

      if (typeof optionIndex !== "number") {
        return res.status(400).json({ error: "Invalid or missing optionIndex." });
      }

      const optionKey = `poll:option:${optionIndex}`;
      console.log(`Incrementing vote for: ${optionKey}`); // Debug log

      const newCount = await incrementVote(optionKey);
      console.log(`New vote count for ${optionKey}: ${newCount}`); // Debug log

      return res.status(200).json({ success: true, newCount });
    } 
    
    if (req.method === "GET") {
      console.log("Fetching poll data..."); // Debug log

      const options = [1, 2, 3, 4, 5, 6];
      const votes = await Promise.all(
        options.map(async (option) => {
          const key = `poll:option:${option}`;
          try {
            const count = await getPollData(key);
            console.log(`Vote count for ${key}: ${count || 0}`); // Debug log
            return count || 0; // Default to 0 if null
          } catch (error) {
            console.error(`Failed to fetch data for ${key}:`, error.message);
            return 0; // Default to 0 on failure
          }
        })
      );

      console.log("Fetched poll data successfully:", votes); // Debug log
      return res.status(200).json({ votes });
    }

    res.setHeader("Allow", ["POST", "GET"]);
    return res.status(405).json({ error: `Method ${req.method} not allowed.` });
  } catch (error) {
    console.error("API error:", error.message, error.stack); // Enhanced error logging
    res.status(500).json({ error: "Internal server error." });
  }
}
