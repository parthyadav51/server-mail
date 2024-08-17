// server.js
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const port = process.env.PORT || 8001;

// Middleware
app.use(bodyParser.json());

// CORS configuration
const corsOptions = {
  origin: "*"
}
app.use(cors(corsOptions));

// Import routes
const emailRoutes = require('./routes/emailRoute');

// Use routes
app.use('/api', emailRoutes);

// Start the server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${port}`);
});
