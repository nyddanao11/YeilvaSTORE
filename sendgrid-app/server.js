const express = require('express');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Handle POST requests to '/send-email'
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;
  const msg = {
    to: 'recipient@example.com',
    from: email,
    subject: 'New message from contact form',
    text: `${name} (${email}) says: ${message}`,
  };
  sgMail.send(msg);
  res.send('Email sent successfully');
});

// Start the server
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});
