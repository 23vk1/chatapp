
const ConversationRepository = require('../repositories/ConversationRepository');
const UserRepository = require('../repositories/UserRepository');

const ConversationService = {}

ConversationService.startConversation = async (user1_id, user2_id) => {

    const user1 = await UserRepository.findById(user1_id);
    const user2 = await UserRepository.findById(user2_id);

    if (!user1 || !user2) throw new Error('One or both user do not exists');

    return await ConversationRepository.findOrCreate(user1_id, user2_id);
}

ConversationService.getConversation = async (id) => {
    return await ConversationRepository.findById(id);
}

ConversationService.deleteConversation = async (id) =>{
    return await ConversationRepository.deletConversation(id);
}




module.exports = ConversationService;