const admin = require('firebase-admin');

admin.initializeApp();

exports.handler = async (event) => {
  try {
    const { name, email } = JSON.parse(event.body);

    const db = admin.firestore();
    const userRef = db.collection('users').doc();
    await userRef.set({
      name,
      email,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'User details stored successfully' }),
    };
  } catch (error) {
    console.error('Error storing user details:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'An error occurred while storing user details' }),
    };
  }
};
