
///Request to netlify 
// Assuming you have a function to handle the Google Sign-In process
async function handleGoogleSignIn(idToken) {
    const response = await fetch('/.netlify/functions/google-signin', {
      method: 'POST',
      body: JSON.stringify({ id_token: idToken }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      const data = await response.json();
      // Handle successful authentication, e.g., set user session, redirect, etc.
      console.log('Authenticated user:', data.userId, data.userEmail);
    } else {
      // Handle error during authentication
      console.error('Authentication error:', response.statusText);
    }
  }
  
  // Example usage when a user clicks the Google Sign-In button
  document.getElementById('google-signin-button').addEventListener('click', async () => {
    try {
      // Use Google Sign-In API to get the user's ID token
      const googleUser = await gapi.auth2.getAuthInstance().signIn();
      const idToken = googleUser.getAuthResponse().id_token;
  
      // Call your Netlify function to handle the authentication
      await handleGoogleSignIn(idToken);
    } catch (error) {
      console.error('Google Sign-In error:', error);
    }
  });
  