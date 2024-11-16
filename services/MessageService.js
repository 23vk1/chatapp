const MessageRepository = require('../repositories/MessageRepository');
const ConversationRepository = require('../repositories/ConversationRepository');

const MessageService = {}

MessageService.sendMessage = async (conversation_id, sender_id, content) =>{
    const conversation = await ConversationRepository.findById(conversation_id);

    if(!conversation) throw new Error('Conversation not found');

    return await MessageRepository.create(conversation_id, sender_id, content);
}

MessageService.getMessage = async (conversation_id) =>{
    return await MessageRepository.findByConversationId(conversation_id);
}

MessageService.markMessageAsRead = async (id) =>{
    return await MessageRepository.markAsRead(id);
}



module.exports = MessageService;