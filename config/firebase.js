const admin = require("firebase-admin");
const serviceAccount = require("../serviceAccountKey.json"); // Replace with your key

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
   databaseURL: "https://langdp-database.firebaseio.com"
});

const db = admin.firestore();
module.exports = { admin, db };