const mongoose = require('mongoose');

const tierListingSchema = new mongoose.Schema({
    tier: {
        type: String,
        required: true
    },
    categoryName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    videoOptions: {
        type: Array,
        default: []
    },
    bannerVideo: {
        type: String,
        required: false
    }
}, { timestamps: true });

module.exports = mongoose.model('TierListing', tierListingSchema);