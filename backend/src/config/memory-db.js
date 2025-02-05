const { MongoMemoryServer } = require('mongodb-memory-server');
const { connectDB } = require('./db');

let mongoServer;

async function startMemoryDB() {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    await connectDB(uri);
}

async function stopMemoryDB() {
    if (mongoServer) {
        await mongoServer.stop();
    }
}

module.exports = { startMemoryDB, stopMemoryDB };
