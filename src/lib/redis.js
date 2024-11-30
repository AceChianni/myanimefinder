// src/lib/redis.js

import { Redis } from "@upstash/redis";

// Ensure environment variables are set
if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
  throw new Error("Redis URL or Token is missing in environment variables.");
}

// Initialize Redis client from environment
const redis = Redis.fromEnv(); // Reads `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`

// Helper function to store poll data in Redis
export const setPollData = async (pollId, data) => {
  try {
    if (!pollId || typeof data === "undefined") {
      throw new Error("Poll ID and data are required for setPollData.");
    }

    await redis.set(pollId, JSON.stringify(data)); // Save as JSON string
  } catch (error) {
    console.error("Error setting poll data:", error.message);
    throw new Error("Failed to set poll data."); // Rethrow for higher-level handling
  }
};

// Helper function to get poll data from Redis
export const getPollData = async (pollId) => {
  try {
    if (!pollId) {
      throw new Error("Poll ID is required for getPollData.");
    }

    const data = await redis.get(pollId); // Retrieve stored data
    return data ? JSON.parse(data) : null; // Parse JSON if available
  } catch (error) {
    console.error("Error getting poll data:", error.message);
    throw new Error("Failed to get poll data."); // Rethrow for higher-level handling
  }
};

// Helper function to increment a poll option count
export const incrementVote = async (optionKey) => {
  try {
    if (!optionKey) {
      throw new Error("Option key is required for incrementVote.");
    }

    const newCount = await redis.incr(optionKey); // Increment vote count
    return newCount;
  } catch (error) {
    console.error("Error incrementing vote count:", error.message);
    throw new Error("Failed to increment vote count."); // Rethrow for higher-level handling
  }
};

export default redis;
