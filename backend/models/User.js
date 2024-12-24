const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true, // Username must be unique
  },
  email: {
    type: String,
    required: true,
    unique: true, // Email must be unique
  },
  password: {
    type: String,
    required: true,
  },
  isNewsletterSubscribed: {
    type: Boolean,
    default: false,
  },
});

// Remove redundant index definitions
// UserSchema.index({ email: 1 }, { unique: true });
// UserSchema.index({ username: 1 }, { unique: true });

module.exports = mongoose.model('User', UserSchema);