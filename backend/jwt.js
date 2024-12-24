const jwt = require('jsonwebtoken');

// Generate JWT
const generateToken = (payload, secret, expiresIn = '1h') => {
  return jwt.sign(payload, secret, { expiresIn });
};

// Verify JWT
const verifyToken = (token, secret) => {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    console.error('JWT verification error:', error.message);
    throw new Error('Invalid or expired token');
  }
};

module.exports = { generateToken, verifyToken };
