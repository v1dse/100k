import express from 'express';
import { getAnalytics } from '../controllers/analyticsController.js';

const router = express.Router();

router.post('/', getAnalytics); // POST: { type: 'youtube' | 'instagram' | 'tiktok', accessToken, channelId/userId }

export default router;
