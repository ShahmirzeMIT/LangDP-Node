const { getAuth } = require("firebase/auth");
const { db, admin } = require("../../../config/firebase"); 

async function services(req, res) {
  const token = req.headers.authorization?.split("Bearer ")[1]; // Extract token
  if (!token) {
    return res.status(401).json({ error: "Authorization token is required" });
  }

  try {
    // Verify Firebase ID token
    const decodedToken = await admin.auth().verifyIdToken(token);
    const userUid = decodedToken.uid; // Extract UID from token

    // Fetch users from Firestore (users-tabel)
    const usersCollection = db.collection("users-tabel");
    const snapshot = await usersCollection.where("uid", "==", userUid).get();

    if (snapshot.empty) {
      return res.status(404).json({ error: "User  not found in Firestore" });
    }

    const usersData = []; // Array to hold all user data
    snapshot.forEach((doc) => {
      usersData.push({ id: doc.id, ...doc.data() }); // Push each user data into the array
    });

    return res.json({ success: true, users: usersData }); // Return all users
  } catch (error) {
    console.error("Error verifying token:", error);
    return res.status(401).json({ error: "Invalid or expired token" });
  }
}

// ✅ Correctly export the function directly
module.exports = services;