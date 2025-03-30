const express = require("express");
const services = require("./actions/services");

const router = express.Router();
router.post("/get-user-by-token", services);

module.exports = router;
