const express = require('express');
const connectDB = require('./db.js');
const authRoutes = require('./routes/auth.js');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config({ path: './.env' }); // Path doğru ayarlandı

// Initialize the app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('MongoDB URI:', process.env.MONGO_URI);
    console.log(`Server started on port ${PORT}`);
});
