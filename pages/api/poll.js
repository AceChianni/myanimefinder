// pages/api/poll.js
import { createClient } from "redis";

// Create Redis client
const redisClient = createClient({
  url: process.env.UPSTASH_REDIS_URL,
  password: process.env.UPSTASH_REDIS_PASSWORD,
});

redisClient.on("error", (err) => {
  console.log("Redis Client Error", err);
});

await redisClient.connect(); // Make sure to connect to Redis

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { votes } = req.body;

    if (!votes || votes.length === 0) {
      return res.status(400).json({ error: "Votes data is missing or empty." });
    }

    try {
      // Store votes in Redis (you can store them as a string or JSON)
      await redisClient.set("pollVotes", JSON.stringify(votes));

      // Respond to the client
      return res.status(200).json({ message: "Votes submitted successfully" });
    } catch (error) {
      console.error("Error saving votes to Redis:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else if (req.method === "GET") {
    try {
      // Retrieve the votes from Redis
      const storedVotes = await redisClient.get("pollVotes");

      if (!storedVotes) {
        return res.status(404).json({ error: "Votes not found" });
      }

      // Parse and return the stored votes
      return res.status(200).json({ votes: JSON.parse(storedVotes) });
    } catch (error) {
      console.error("Error retrieving votes from Redis:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    // If the request method is not POST or GET, return 405 (Method Not Allowed)
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
