// pages/api/poll.js
export default async function handler(req, res) {
  if (req.method === "POST") {
    // Handle the vote submission
    const { votes } = req.body;

    if (!votes || votes.length === 0) {
      return res.status(400).json({ error: "Votes data is missing or empty." });
    }

    // Here, you can handle saving the votes to a database, for example:
    // await saveVotesToDatabase(votes);

    return res.status(200).json({ message: "Votes submitted successfully" });
  } else {
    // If the request method is not POST, return a 405 (Method Not Allowed)
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
