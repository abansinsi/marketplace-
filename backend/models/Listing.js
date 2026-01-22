const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    tier: { type: String, required: true },
    tierCategory: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    pictures: { type: [String], default: [] },
    youtubeVideoUrl: { type: String },
    videoEnabled: { type: Boolean, default: false },
    impressions: { type: Number, default: 0 },
    active: { type: Boolean, default: true },
    timestamps: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Listing', listingSchema);