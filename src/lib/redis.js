// lib/redis.js
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv(); // Automatically reads from environment variables

// Helper function to store poll data in Redis
export const setPollData = async (pollId, data) => {
  try {
    await redis.set(pollId, JSON.stringify(data)); // Save as a JSON string
  } catch (error) {
    console.error("Error setting poll data:", error);
  }
};

// Helper function to get poll data from Redis
export const getPollData = async (pollId) => {
  try {
    const data = await redis.get(pollId); // Retrieve stored data
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("Error getting poll data:", error);
    return null;
  }
};
