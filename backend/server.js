const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const winston = require('winston');
const cors = require('cors'); // Import the cors middleware

// Load environment variables
dotenv.config({ path: 'file.env' });

// Create Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Set up winston logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
  ],
});

// Use the cors middleware
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Middleware
app.use(express.json());

// Logger middleware
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

// Error handling middleware
app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).json({ success: false, message: 'Internal server error' });
});

// Use the authentication middleware for a protected route
app.use('/api/protected-route', require('./middleware/auth').authenticateToken);

// Routes
app.use('/api/auth', require('./routes/auth'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
