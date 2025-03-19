const mongoose = require('mongoose');

const connectDB = async function () {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}`);
        console.log('Database is connected');
    } catch (error) {
        console.log('Failed database connection');
        process.exit(1);
    }
}

module.exports = connectDB