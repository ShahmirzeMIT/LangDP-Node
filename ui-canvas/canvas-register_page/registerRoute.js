const express = require("express");
const register = require("./actions/register");

const router = express.Router();
router.post("/register", register);

module.exports = router;
