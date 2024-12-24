const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true, // Yeni URL ayrıştırıcıyı kullan
      useUnifiedTopology: true, // Yeni bir sunucu keşif ve izleme motoru kullan
    });
    console.log('MongoDB connected...');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1); // Hata durumunda uygulamayı sonlandır
  }
};

module.exports = connectDB;
