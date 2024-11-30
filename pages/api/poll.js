// pages/api/poll.js
import { Redis } from "@upstash/redis"; // Use Upstash Redis client

// Initialize Redis client
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_URL,
  token: process.env.UPSTASH_REDIS_TOKEN,
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { votes } = req.body;

    if (!votes || votes.length === 0) {
      return res.status(400).json({ error: "Votes data is missing or empty." });
    }

    try {
      // Store votes in Redis
      await redis.set("pollVotes", JSON.stringify(votes));

      return res.status(200).json({ message: "Votes submitted successfully" });
    } catch (error) {
      console.error("Error saving votes to Redis:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else if (req.method === "GET") {
    try {
      // Retrieve votes from Redis
      const storedVotes = await redis.get("pollVotes");

      if (!storedVotes) {
        return res.status(404).json({ error: "Votes not found" });
      }

      return res.status(200).json({ votes: JSON.parse(storedVotes) });
    } catch (error) {
      console.error("Error retrieving votes from Redis:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
