import express from "express";
import { CohereClient } from "cohere-ai";

const router = express.Router();

const cohere = new CohereClient({
  token: process.env.CO_API_KEY,   // ✅ must match .env
});

router.post("/", async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await cohere.generate({
      model: "command",
      prompt: `Write a detailed, structured, ~1000 word blog on: ${prompt}`,
      maxTokens: 1200,
      temperature: 0.7,
    });

    if (!response.generations || response.generations.length === 0) {
      return res.status(500).json({ error: "No blog generated" });
    }

    const blog = response.generations[0].text.trim();
    res.json({ blog });
  } catch (error) {
    console.error("❌ Cohere error:", error);
    res.status(500).json({ error: error.message || "Failed to generate blog" });
  }
});

export default router;
