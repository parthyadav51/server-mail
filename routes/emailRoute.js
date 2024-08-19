// routes/emailRoute.js
const express = require("express");
const router = express.Router();

const { sendBookingConfirmation } = require("../controllers/emailController");

router.post("/sendBookingConfirmation", sendBookingConfirmation);

module.exports = router;
