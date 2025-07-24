import {
  fetchYouTubeAnalytics,
  fetchInstagramAnalytics,
  fetchTikTokAnalytics,
} from '../utils/socialAnalytics.js';

export const getSocialAnalytics = async (req, res) => {
  const { type, accessToken, channelId, igUserId, userId } = req.body;

  try {
    let data = null;

    switch (type) {
      case 'youtube':
        data = await fetchYouTubeAnalytics(accessToken, channelId);
        break;
      case 'instagram':
        data = await fetchInstagramAnalytics(accessToken, igUserId);
        break;
      case 'tiktok':
        data = await fetchTikTokAnalytics(accessToken, userId);
        break;
      default:
        return res.status(400).json({ message: 'Invalid social media type' });
    }

    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ message: 'Ошибка получения аналитики', error: err.message });
  }
};
