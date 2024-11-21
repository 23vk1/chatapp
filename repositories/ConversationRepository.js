const ConversationModel = require('../models/ConversationModel');
const ConversationRepository = {}

ConversationRepository.findById = async (id) => {
    return await ConversationModel.query().findById(id).withGraphFetched('[user1, user2, messages]');
}

ConversationRepository.findOrCreate = async (user1_id, user2_id) => {
    let conversation = await ConversationModel.query()
        .where({ user1_id, user2_id })
        .orWhere({ user1_id: user2_id, user2_id: user1_id })
        .first();

    if (!conversation) {
        conversation = await ConversationModel.query().insert({ user1_id, user2_id });
    }
    return conversation
}

ConversationRepository.deletConversation = async (id) => {
    return await ConversationModel.query().patchAndFetchById(id, { 'deleted_at': new Date() });
}



module.exports = ConversationRepository;