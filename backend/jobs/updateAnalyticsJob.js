const cron = require('node-cron');
const User = require('../models/User');
const SocialAccount = require('../models/SocialAccount');
const Analytics = require('../models/Analytics');
const {
  fetchYouTubeAnalytics,
  fetchInstagramAnalytics,
  fetchTikTokAnalytics,
} = require('../utils/fetchAnalytics');

async function updateAllAnalytics() {
  const users = await User.find({});

  for (const user of users) {
    const socials = await SocialAccount.find({ user: user._id });

    for (const social of socials) {
      let analyticsData = null;

      if (social.platform === 'youtube') {
        analyticsData = await fetchYouTubeAnalytics(social.accessToken, social.accountId);
      } else if (social.platform === 'instagram') {
        analyticsData = await fetchInstagramAnalytics(social.accessToken, social.accountId);
      } else if (social.platform === 'tiktok') {
        analyticsData = await fetchTikTokAnalytics(social.accessToken, social.accountId);
      }

      if (analyticsData) {
        await Analytics.findOneAndUpdate(
          { user: user._id, platform: social.platform },
          { data: analyticsData, updatedAt: new Date() },
          { upsert: true, new: true }
        );
      }
    }
  }

  console.log('Аналитика успешно обновлена');
}

// Планировщик: каждый день в 03:00 по серверному времени
cron.schedule('0 3 * * *', async () => {
  console.log('Запуск обновления аналитики...');
  await updateAllAnalytics();
});

module.exports = updateAllAnalytics;