const axios = require('axios');

async function fetchYouTubeAnalytics(accessToken, channelId) {
  try {
    const response = await axios.get(`https://www.googleapis.com/youtube/v3/channels`, {
      params: {
        part: 'statistics,snippet',
        id: channelId,
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data.items[0];
  } catch (error) {
    console.error('Ошибка при получении YouTube аналитики:', error.message);
    return null;
  }
}

async function fetchInstagramAnalytics(accessToken, igUserId) {
  try {
    const fields = 'followers_count,follows_count,media_count,username';
    const url = `https://graph.instagram.com/${igUserId}?fields=${fields}&access_token=${accessToken}`;

    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Ошибка при получении Instagram аналитики:', error.message);
    return null;
  }
}

async function fetchTikTokAnalytics(accessToken, userId) {
  console.warn('TikTok аналитика пока не реализована');
  return {
    followers: 0,
    videos: 0,
    views: 0,
    username: 'demo_tiktok',
  };
}

module.exports = {
  fetchYouTubeAnalytics,
  fetchInstagramAnalytics,
  fetchTikTokAnalytics,
};