// /app/api/poll/route.js

import { cookies } from "next/headers";

let votes = [5, 3, 8, 4, 6, 1]; // Default seed to avoid empty look

export async function GET() {
  const userChoice = cookies().get("poll-choice")?.value ?? null;
  return Response.json({ votes, userChoice });
}

export async function POST(req) {
  const { index } = await req.json();

  const userChoice = cookies().get("poll-choice")?.value;

  // If they already voted → remove old vote
  if (userChoice !== undefined) {
    votes[userChoice]--;
  }

  // Add new vote
  votes[index]++;
  cookies().set("poll-choice", index);

  return Response.json({ votes, userChoice: index });
}
