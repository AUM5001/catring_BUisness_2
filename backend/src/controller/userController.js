// const { startMemoryDB, stopMemoryDB } = require('../config/memory-db');
// const { createUser, getUsers } = require("../service/userService");


const testing = async (req, res, next) => {
    try {
        res.status(200).json({page:"Auth", response:'This is working'})
     } catch (err) {
        next(err)
    }
}

module.exports = {
    testing
}