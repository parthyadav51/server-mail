// routes/emailRoute.js
const express = require('express');
const router = express.Router();
const { sendBookingConfirmation } = require('../controllers/emailController');

// POST route to send booking confirmation email
router.post('/sendBookingConfirmation', sendBookingConfirmation);
router.get('/test',(req,res)=>{
    return res.json({
        msg: "hello baby"
    })
})



module.exports = router;
