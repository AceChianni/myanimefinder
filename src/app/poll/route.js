// src/app/poll/route.js
import { setPollData, getPollData } from "../../lib/redis";

export async function GET(request) {
  const pollId = "poll123"; // You can dynamically get poll ID if needed
  const data = await getPollData(pollId);

  if (data) {
    return new Response(JSON.stringify(data), { status: 200 });
  } else {
    return new Response("Poll not found", { status: 404 });
  }
}

export async function POST(request) {
  const pollId = "poll123"; // Same dynamic poll ID
  const { votes } = await request.json(); // The data sent from the client

  // Format the poll data structure
  const pollData = {
    options: votes,
    totalVotes: votes.reduce((acc, vote) => acc + vote, 0),
  };

  await setPollData(pollId, pollData); // Store poll data in Redis
  return new Response("Poll data saved successfully", { status: 200 });
}
