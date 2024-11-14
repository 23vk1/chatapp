// routes/userRoutes.js
const express = require('express');
const UserService = require('../services/UserService');
const router = express.Router();

// const validateUserInput = [
//     body('username').isString().withMessage('Username is required').isLength({ min: 3 }).withMessage('Username must be at least 3 characters long'),
//     body('email').isEmail().withMessage('Email must be valid'),
//     body('password').isString().withMessage('Password is required').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
// ]; 


// Register a new user
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
  try {
    // const userData = req.body;
    // const existingUser = await UserService.getUserProfile(username);
    // if (existingUser) {
    //     return res.status(400).json({ error: 'Username already taken' });
    // }
    const userData = {username, email, password_hash: password }
    const user = await UserService.register(userData);
    res.status(201).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get user profile by ID
router.get('/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await UserService.getUserProfile(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Delete user by ID
router.delete('/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const deleted = await UserService.deleteUser(userId);
    if (!deleted) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    res.status(200).json({ success: true, message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
