const express = require("express");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
// router.post('/get-user-by-token',)
// router.post("/google-auth", googleAuth);
// router.post("/forgot-password", forgotPassword);
// router.post("/reset-password", resetPassword); 

module.exports = router;
