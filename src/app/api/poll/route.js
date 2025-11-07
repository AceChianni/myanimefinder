// src/app/api/poll/route.js
import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";

const POLL_KEY = "poll:starter-anime";

const DEFAULT_POLL = {
  dbz: 0,
  pokemon: 0,
  naruto: 0,
  onepiece: 0,
  deathnote: 0,
  other: 0,
};

// GET poll results
export async function GET() {
  let poll = await redis.get(POLL_KEY);

  if (!poll) {
    poll = DEFAULT_POLL;
    await redis.set(POLL_KEY, poll);
  }

  return NextResponse.json(poll);
}

// POST submit vote
export async function POST(req) {
  const { optionId } = await req.json();

  if (!optionId || !DEFAULT_POLL.hasOwnProperty(optionId)) {
    return NextResponse.json({ error: "Invalid option" }, { status: 400 });
  }

  let poll = await redis.get(POLL_KEY);

  if (!poll) poll = { ...DEFAULT_POLL };

  poll[optionId] += 1;

  await redis.set(POLL_KEY, poll);

  return NextResponse.json(poll);
}
