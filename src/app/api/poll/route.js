// // /src/app/api/poll/route.js
// import { NextResponse } from "next/server";
// import { redis } from "@/lib/redis";

// const POLL_KEY = "poll:starter-anime";
// const OPTIONS = ["dbz", "pokemon", "naruto", "onepiece", "deathnote", "other"];

// async function getPoll() {
//   let poll = await redis.get(POLL_KEY);

//   if (!poll) {
//     poll = Object.fromEntries(OPTIONS.map(o => [o, 0]));
//     await redis.set(POLL_KEY, poll);
//   }
//   return poll;
// }

// export async function GET() {
//   const poll = await getPoll();
//   return NextResponse.json(poll);
// }

// export async function POST(request) {
//   const { previousId, optionId } = await request.json();

//   if (!optionId || !OPTIONS.includes(optionId)) {
//     return NextResponse.json({ error: "Invalid option" }, { status: 400 });
//   }

//   const poll = await getPoll();

//   // Remove previous vote if exists
//   if (previousId && poll[previousId] > 0) {
//     poll[previousId] -= 1;
//   }

//   // Add new vote
//   poll[optionId] = (poll[optionId] || 0) + 1;

//   await redis.set(POLL_KEY, poll);
//   return NextResponse.json(poll);
// }
// /app/api/poll/route.js
import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";

const POLL_KEY = "poll:starter-anime";

export async function GET() {
  let poll = await redis.get(POLL_KEY);
  if (!poll) {
    poll = {
      dbz: 0,
      pokemon: 0,
      naruto: 0,
      onepiece: 0,
      deathnote: 0,
      other: 0,
    };
    await redis.set(POLL_KEY, poll);
  }
  return NextResponse.json(poll);
}

export async function POST(req) {
  const { prev, next } = await req.json();
  if (!next) return NextResponse.json({ error: "No option selected" }, { status: 400 });

  let poll = await redis.get(POLL_KEY);
  if (!poll) return NextResponse.json({ error: "Poll not initialized" }, { status: 500 });

  // Remove previous vote
  if (prev && poll[prev] > 0) poll[prev]--;

  // Add new vote
  poll[next]++;

  await redis.set(POLL_KEY, poll);
  return NextResponse.json(poll);
}
