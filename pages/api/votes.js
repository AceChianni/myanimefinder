import { createClient } from '@upstash/redis';  

// Initialize the Redis client
const redis = createClient({
  url: process.env.REDIS_URL,  
  token: process.env.REDIS_TOKEN  
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Handle the vote submission
    const { votes } = req.body;

    if (!votes || !Array.isArray(votes)) {
      return res.status(400).json({ error: 'Votes data is missing or invalid.' });
    }

    try {
      // Save the votes to Redis using the poll option ID as the key
      await Promise.all(votes.map((vote, index) => {
        return redis.set(`vote:${index + 1}`, vote);  // Store each vote with a unique key
      }));

      return res.status(200).json({ message: 'Votes submitted successfully' });
    } catch (error) {
      console.error('Error saving votes to Redis:', error);
      return res.status(500).json({ error: 'Failed to save votes' });
    }
  } else if (req.method === 'GET') {
    // Handle retrieving the votes from Redis
    try {
      // Retrieve the votes for each option
      const votes = await Promise.all([1, 2, 3, 4, 5, 6].map(async (id) => {
        const voteCount = await redis.get(`vote:${id}`);
        return parseInt(voteCount) || 0;  // Default to 0 if no vote is found
      }));

      return res.status(200).json({ votes });
    } catch (error) {
      console.error('Error fetching votes from Redis:', error);
      return res.status(500).json({ error: 'Failed to fetch votes' });
    }
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
