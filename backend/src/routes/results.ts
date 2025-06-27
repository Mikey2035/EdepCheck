import { Router } from 'express';
import { saveResultToDB } from '../services/result.service';

export const router = Router();

router.post('/results', async (req, res) => {
  const { score, severity, user_id } = req.body;
  try {
    await saveResultToDB(score, severity, user_id);
    res.json({ success: true });
  } catch (err) {
    console.error('Error saving result:', err);
    res.status(500).json({ error: 'Failed to save result' });
  }
});

export default router;
