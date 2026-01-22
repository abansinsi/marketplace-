const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    businessName: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /.+\@.+\..+/,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: false,
    },
    address: {
        type: String,
        required: false,
    },
    state: {
        type: String,
        required: false,
    },
    localGovernment: {
        type: String,
        required: false,
    },
    tier: {
        type: String,
        enum: ['Bronze', 'Silver', 'Gold'],
        default: 'Bronze',
    },
    emailVerified: {
        type: Boolean,
        default: false,
    },
    displaySettings: {
        type: Object,
        required: false,
    },
    listingLimits: {
        type: Number,
        default: 10,
    },
    logo: {
        type: String,
        required: false,
    },
    supportPhones: {
        type: [String],
        required: false,
    },
    impressionTracking: {
        type: Boolean,
        default: false,
    },
    adminFlag: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });

// Password hashing
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Password comparison method
userSchema.methods.comparePassword = function(candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);
module.exports = User;
