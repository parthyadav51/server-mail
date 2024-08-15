// controllers/emailController.js
const nodemailer = require('nodemailer');

const sendBookingConfirmation = async (req, res) => {
  const { email, subject, message } = req.body;

  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail', // You can use any email service
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false, // Ignore self-signed certificate issues
    },
  });

  // Email options
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: subject,
    text: message,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send email', error: error.message });
  }
};




module.exports = { sendBookingConfirmation };
