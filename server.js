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
  origin: (origin, callback) => {
    if (process.env.NODE_ENV === 'development') {
      callback(null, true); // Allow all origins during development
    } else {
      const allowedOrigins = ['http://your-production-domain.com', 'http://another-allowed-domain.com'];
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

// Import routes
const emailRoutes = require('./routes/emailRoute');

// Use routes
app.use('/api', emailRoutes);

// Start the server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on http://10.5.163.171:${port}`);
});
