const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        enum: ['individual', 'tier', 'tier_listing'],  // Different levels of notifications
    },
    message: {
        type: String,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',  // Reference to the User model
        required: function() { return this.type === 'individual'; }
    },
    tierId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tier',  // Reference to the Tier model
        required: function() { return this.type === 'tier'; }
    },
    tierListingId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TierListing',  // Reference to the Tier Listing model
        required: function() { return this.type === 'tier_listing'; }
    },
    read: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;