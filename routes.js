const express = require('express');
const UserController = require('./controllers/UserController');
const ConversationController = require('./controllers/ConversationController');
const MessageController = require('./controllers/MessageController');

const router = express.Router();

// User routes
router.post('/users', UserController.register);
router.get('/users/:id', UserController.getUserProfile);
router.delete('/users/:id', UserController.deleteUser);

// Conversation routes
router.post('/conversations', ConversationController.startConversation);
router.get('/conversations/:id', ConversationController.getConversation);
router.delete('/conversations/:id', ConversationController.deleteConversation);

// Message routes
router.post('/messages', MessageController.sendMessage);
router.get('/messages/:conversation_id', MessageController.getMessages);
router.patch('/messages/:messageId/read', MessageController.markMessageAsRead);

module.exports = router;
