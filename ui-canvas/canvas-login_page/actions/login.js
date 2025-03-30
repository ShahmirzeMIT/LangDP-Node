

const { getAuth } = require('firebase-admin/auth');
const axios = require('axios');

// Replace with your Firebase Web API Key (from Project Settings > General)
const FIREBASE_API_KEY = 'AIzaSyCqNWIR1k7m25_QnE3RqTwU1oC3OVFtblo';

// Login Route
const login =  async (req, res) => {
  const { email, password } = req.body;

  try {
    // Use Firebase Auth REST API to sign in and get ID token
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`,
      {
        email,
        password,
        returnSecureToken: true,
      }
    );

    const { idToken, refreshToken, localId } = response.data;

    // Optionally get the user info from Firebase Admin
    const userRecord = await getAuth().getUser(localId);

    res.status(200).json({
      message: 'Login successful',
      token: idToken,
      refreshToken,
      user: {
        uid: userRecord.uid,
        email: userRecord.email,
        displayName: userRecord.displayName,
      },
    });
  } catch (error) {
    console.error('Login failed:', error.message);
    res.status(401).json({ error: 'Invalid email or password' });
  }
}

module.exports = login;