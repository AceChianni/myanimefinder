// pages/api/poll.js
// import { incrementVote, getPollData, setPollData } from "@/lib/redis";

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
//       const options = [0, 1, 2, 3, 4, 5];
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

// pages/api/poll.js
import { incrementVote, getPollData } from "@/lib/redis";

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const { optionIndex } = req.body;

      if (typeof optionIndex !== "number") {
        throw new Error("Invalid or missing optionIndex in request body.");
      }

      const optionKey = `poll:option:${optionIndex}`;
      const newCount = await incrementVote(optionKey); // Increment vote count
      res.status(200).json({ success: true, newCount });
    } else if (req.method === "GET") {
      // Fetch all poll options and their counts
      const options = [1, 2, 3, 4, 5, 6]; // Option IDs: 1 to 6
      const votes = await Promise.all(
        options.map(async (option) => {
          const count = await getPollData(`poll:option:${option}`);
          return parseInt(count || "0", 10); // Default to 0 if null
        })
      );

      res.status(200).json({ votes });
    } else {
      res.setHeader("Allow", ["POST", "GET"]);
      res.status(405).json({ error: `Method ${req.method} not allowed.` });
    }
  } catch (error) {
    console.error("API error:", error.message); // Log error details
    res.status(500).json({ error: "Internal server error." });
  }
}
