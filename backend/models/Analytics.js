const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  platform: String,
  data: Object,
  updatedAt: Date,
});

module.exports = mongoose.model('Analytics', analyticsSchema);