const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const router = express.Router();

// Kullanıcı Kaydı
router.post('/register', registerUser);

// Kullanıcı Girişi
router.post('/login', loginUser);

module.exports = router;
