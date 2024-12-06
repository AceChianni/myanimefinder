// pages/api/poll.js

// import { incrementVote, getPollData } from "@/lib/redis";

// export default async function handler(req, res) {
//   try {
//     if (req.method === "POST") {
//       const { optionIndex } = req.body;

//       if (typeof optionIndex !== "number") {
//         throw new Error("Invalid or missing optionIndex in request body.");
//       }

//       const optionKey = `poll:option:${optionIndex}`;
//       const newCount = await incrementVote(optionKey); // Increment vote count
//       res.status(200).json({ success: true, newCount });
//     } else if (req.method === "GET") {
//       // Fetch all poll options and their counts
//       const options = [1, 2, 3, 4, 5, 6]; // Option IDs: 1 to 6
//       const votes = await Promise.all(
//         options.map(async (option) => {
//           const count = await getPollData(`poll:option:${option}`);
//           return parseInt(count || "0", 10); // Default to 0 if null
//         })
//       );

//       res.status(200).json({ votes });
//     } else {
//       res.setHeader("Allow", ["POST", "GET"]);
//       res.status(405).json({ error: `Method ${req.method} not allowed.` });
//     }
//   } catch (error) {
//     console.error("API error:", error.message); // Log error details
//     res.status(500).json({ error: "Internal server error." });
//   }
// }

import { incrementVote, getPollData } from "@/lib/redis";

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const { optionIndex } = req.body;

      if (typeof optionIndex !== "number" || optionIndex < 1 || optionIndex > 6) {
        throw new Error("Invalid or missing optionIndex in request body.");
      }

      const optionKey = `poll:option:${optionIndex}`;
      const newCount = await incrementVote(optionKey); // Increment vote count
      console.log(`Vote incremented for option ${optionIndex}: new count is ${newCount}`);
      res.status(200).json({ success: true, newCount });
    } else if (req.method === "GET") {
      // Fetch all poll options and their counts
      const options = [1, 2, 3, 4, 5, 6];
      const votes = await Promise.all(
        options.map(async (option) => {
          const count = await getPollData(`poll:option:${option}`);
          console.log(`Option ${option}: count is ${count || 0}`);
          return parseInt(count || "0", 10); // Default to 0 if null
        })
      );

      console.log("Votes fetched successfully:", votes);
      res.status(200).json({ votes });
    } else {
      res.setHeader("Allow", ["POST", "GET"]);
      res.status(405).json({ error: `Method ${req.method} not allowed.` });
    }
  } catch (error) {
    console.error("API error:", error.message); // Log error details
    res.status(500).json({
      error: "Internal server error",
      details: error.message,
    });
  }
}

