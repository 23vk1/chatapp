const MessageModel = require('../models/MessageModel');
const MessageRepository = {}

MessageRepository.findByConversationId = async (id) => {
    return await MessageModel.query()
        .where({ conversation_id })
        .orderBy('created_at, DESC')
}

MessageRepository.create = async (conversation_id, sender_id, content) => {
    return await MessageModel.query().insert({ conversation_id, sender_id, content });
}

MessageRepository.markAsRead = async (id) => {
    return await MessageModel.query().patchAndFetchById(id, { 'read_at': new Date() });
}




module.exports = MessageRepository; 