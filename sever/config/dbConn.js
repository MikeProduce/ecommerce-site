const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI, {
            useNewUrlParser: true, // to parse the URI
            useUnifiedTopology: true // to use the new Server Discover and Monitoring engine
        });
        console.log('MongoDB connection SUCCESS');
    } catch (error) {
        console.error('MongoDB connection FAIL', error);
    }
}

module.exports = connectDB;