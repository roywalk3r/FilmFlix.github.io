
// netlify/functions/send-verification-mail.js

const fetch = require('node-fetch');
const crypto = require('crypto');

exports.handler = async (event) => {
  try {
    const { name, email } = JSON.parse(event.body);

    const API_KEY = 'AA3292E987AE1E34BA64C420977E8F29256A88F3ECAFBA522EAB9124AE7FAFC9E983F8437267581953EEB61D1B82C901';
    const API_URL = 'https://api.elasticemail.com/v2/email/send';

    const verificationCode = generateVerificationCode();

    const emailContent = `Hi ${name}, <br>
    
    Welcome to FilmFLix. Your verification code is ${verificationCode}`;

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        apiKey: API_KEY,
        to: email,
        subject: 'Account Verification - Complete Your Registration',
        bodyText: emailContent,
        from: 'testpjmail@gmail.com', // Replace with your sending email
      }),
    });

    const responseData = await response.json();

    if (response.ok && responseData.success) {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Verification email sent successfully' }),
      };
    } else {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed to send verification email' }),
      };
    }
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'An error occurred' }),
    };
  }
};

function generateVerificationCode() {
  return Math.floor(1000 + Math.random() * 9000);
}
