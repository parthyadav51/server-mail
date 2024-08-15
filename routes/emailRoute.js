// routes/emailRoute.js
const express = require('express');
const router = express.Router();
const { sendBookingConfirmation } = require('../controllers/emailController');

// POST route to send booking confirmation email
router.post('/sendBookingConfirmation', sendBookingConfirmation);



module.exports = router;
