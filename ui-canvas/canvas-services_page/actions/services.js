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

    // Fetch user from Firestore (users-tabel)
    const usersCollection = db.collection("users-tabel");
    console.log(usersCollection,'usersCollection');

    const snapshot = await usersCollection.where("uid", "==", userUid).get();

    if (snapshot.empty) {
      return res.status(404).json({ error: "User not found in Firestore" });
    }

    let userData = null;
    snapshot.forEach((doc) => {
      userData = { id: doc.id, ...doc.data() };
    });

    return res.json({ success: true, user: userData });
  } catch (error) {
    console.error("Error verifying token:", error);
    return res.status(401).json({ error: "Invalid or expired token" });
  }
}

// ✅ Correctly export the function directly
module.exports = services;
