async function sendEmail(to, subject, text) {
    const response = await fetch('/.Netlify/functions/send-email', {
      method: 'POST',
      body: JSON.stringify({ to, subject, text }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      const data = await response.json();
      console.log(data.message);
    } else {
      console.error('Error sending email:', response.statusText);
    }
  }
  
  // Example usage
  sendEmail('recipient@example.com', 'Hello', 'This is the email content.');
  