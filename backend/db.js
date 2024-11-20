const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb://localhost:27017/bookstore');
        console.log("mongoDB connected");
    }
    catch (error) {
        console.error(error);
        process.exit(1);
    }
};

module.exports = connectDB;