import express from 'express';
const router = express.Router();

router.post('/', async (req, res) => {
  const { question, context } = req.body;

  if (!question) {
    return res.status(400).json({ error: 'Missing question' });
  }

  // Dummy logic for now — we'll improve later
  const sampleResponse = {
    dharmic_verse: 'You have the right to perform your prescribed duties...',
    source: 'Bhagavad Gita 2.47',
    interpretation: 'Focus on your duty, not the results. If your job no longer aligns with your dharma, you may need to detach and act accordingly.'
  };

  res.json({
    input: { question, context },
    guidance: sampleResponse
  });
});

export default router;