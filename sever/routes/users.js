const express = require("express");
const router = express.Router();
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage });

const { CreateUser, LoginUser } = require("../controller/users");

// Use the multer middleware to handle file uploads for the "/users" route
router.post("/add_user", CreateUser);
router.post("/login", LoginUser);

module.exports = router;
