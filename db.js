// backend/db.js

const mongoose = require('mongoose');

// Paste your full connection string from Atlas here, with your real password.
const MONGO_URI = 'mongodb+srv://pushkarpant2_db_user:h5G5xFmHaQ9sQ9S9@yesmywheelzproject.5lvblg0.mongodb.net/?retryWrites=true&w=majority&appName=YesMyWheelzProject';



const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('MongoDB connected successfully!');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;