// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Hash the password before saving to the database
userSchema.pre('save', async function (next) {
  try {
    const user = this;

    // Check if the password is modified, if not, move to the next middleware
    if (!user.isModified('password')) return next();

    // Generate a salt
    const salt = await bcrypt.genSalt(10);

    // Hash the password with the generated salt
    const hashedPassword = await bcrypt.hash(user.password, salt);

    // Replace the plaintext password with the hashed one
    user.password = hashedPassword;

    next();
  } catch (error) {
    next(error);
  }
});

// Static method to create a new user
userSchema.statics.createUser = async function (username, password) {
  try {
    const User = this;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    return newUser;
  } catch (error) {
    throw error;
  }
};

const User = mongoose.model('User', userSchema);

module.exports = User;
