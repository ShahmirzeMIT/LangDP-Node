const express = require("express");
const login = require("./actions/login");

const router = express.Router();
router.post("/login", login);

module.exports = router;
