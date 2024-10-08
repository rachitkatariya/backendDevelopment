const mongoose = require('mongoose');

// Define the MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/hotels';

// Set up MongoDB Connection URL (removed deprecated option)
mongoose.connect(mongoURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});


// Get the default connection
const db = mongoose.connection;

// Event listeners for connection events
db.on('connected', () => {
    console.log('Connected to MongoDB server');
});

db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});

db.on('disconnected', () => {
    console.log('MongoDB server disconnected');
});

module.exports = db;

