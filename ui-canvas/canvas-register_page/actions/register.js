const { db, admin } = require("../../../config/firebase");  

const register = async (req, res) => {
  const { email, password, displayName } = req.body;

  if (!email || !password || !displayName) {
    return res.status(400).json({ error: "Email, password, and displayName are required." });
  }

  try {
    const userRecord = await admin.auth().createUser({
      email,
      password,
      displayName,
    });

    res.status(201).json({
      message: "User registered successfully",
      uid: userRecord.uid,
      email: userRecord.email,
      displayName: userRecord.displayName,
    });
  } catch (error) {
    console.error("Firebase Auth Error:", error.message);
    res.status(400).json({ 
      error: "Registration failed",
      details: error.message 
    });
  }
};

module.exports = register;