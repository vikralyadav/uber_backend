const mongoose = require('mongoose');

// Define the schema for blacklisted tokens
const blacklistedTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique : true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 86400 // TTL in seconds (24 hours = 86400 seconds)
  }
});

// Create the model
const BlacklistToken = mongoose.model('BlacklistToken', blacklistedTokenSchema);

module.exports = BlacklistToken;