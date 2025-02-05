const mongoose = require('mongoose');

async function connectDB(uri) {
    try {
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB Connected');
    } catch (err) {
        console.error('MongoDB Connection Error:', err);
        process.exit(1);
    }
}

async function closeDB() {
    await mongoose.connection.close();
}

module.exports = { connectDB, closeDB };
