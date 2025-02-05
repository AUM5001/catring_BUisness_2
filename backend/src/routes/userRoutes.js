const settings = require("../config/settings");
const mainController = require("../controller/mainController");
const express = require("express");
const router = express.Router();

router.get("/", mainController.userController.testing);

module.exports = {
    router,
}