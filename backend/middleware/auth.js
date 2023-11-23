const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const User = require('../models/User');

dotenv.config();

// Middleware to check if the request has a valid JWT
const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token)
    return res.status(401).json({ success: false, message: 'Access denied' });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err)
      return res.status(403).json({ success: false, message: 'Invalid token' });
    req.user = user;
    next();
  });
};

module.exports = { authenticateToken };
