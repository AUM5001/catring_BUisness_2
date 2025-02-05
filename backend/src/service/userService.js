const User = require('../model/User');

async function createUser(name, email) {
    return await User.create({ name, email });
}

async function getUsers() {
    return await User.find();
}

module.exports = { createUser, getUsers };
