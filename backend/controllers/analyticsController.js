export const getAnalytics = async (req, res) => {
  try {
    res.json({
      youtube: { views: 12000, subscribers: 500 },
      instagram: { followers: 800, posts: 100 },
      tiktok: { views: 9000, followers: 700 }
    });
  } catch (err) {
    res.status(500).json({ message: 'Error loading analytics' });
  }
};
