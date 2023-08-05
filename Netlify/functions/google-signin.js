// netlify-functions/google-signin/google-signin.js

import { OAuth2Client } from 'google-auth-library';

export async function handler(event) {
  try {
    const { id_token } = JSON.parse(event.body);

    // Replace with your Google Client ID
    const CLIENT_ID = '60176433158-p6ggkfslnahh8tkccv7330n4bitk152o.apps.googleusercontent.com';

    const client = new OAuth2Client(CLIENT_ID);
    const ticket = await client.verifyIdToken({
      idToken: id_token,
      audience: CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const userId = payload['sub'];
    const userEmail = payload['email'];

    return {
      statusCode: 200,
      body: JSON.stringify({ userId, userEmail }),
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'An error occurred' }),
    };
  }
}
