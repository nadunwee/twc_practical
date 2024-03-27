const express = require("express");

const {
  loginUser,
  registerUser,
} = require("../controllers/userController.jsx");

const router = express.Router();

// login route
router.post("/login", loginUser);

// register route
router.post("/register", registerUser);

module.exports = router;
