const ConversationService = require('../services/ConversationService');
const Helper = require('../helpers/helper');

const ConversationController = {}

ConversationController.startConversation = async(req, res) =>{
    try{
        const {user1_id, user2_id} = req.body;
        const conversation = await ConversationService.startConversation(user1_id, user2_id);
        return Helper.handleResponse({
            status :200,
            message: 'Conversation started successfully',
            data: conversation
        })
    } catch(error){
        Helper.handleError({
            status: 400,
            message: 'Failed to start conversation',
            error: error.message
        })
    }
}


ConversationController.getConversation = async(req, res) =>{
    try{
        const conversationId = req.params.id;
        const conversation = await  ConversationService.getConversation(conversationId);
        if(!conversation){
            return Helper.handleResponse({
                status: 404,
                message: 'Conversation not found'
            })       
        }
        return Helper.handleResponse({
            status :200,
            message: 'Conversation retrieved successfully',
            data: conversation
        })
    }
    catch(error){
        Helper.handleError({
            status: 400,
            message: 'Failed to get conversation',
            error: error.message
        })
    }
}


ConversationController.deleteConversation = async(req, res) =>{
    try{
        const conversationId = req.params.id;
        const deletedConversation = await ConversationService.deleteConversation(conversationId);
        if(!deletedConversation){
            return Helper.handleResponse({
                status: 404,
                message: 'Conversation not found'
            })       
        }
        return Helper.handleResponse({
            status :200,
            message: 'Conversation deleted successfully',
            data: deletedConversation
        })
    }
    catch(error){
        Helper.handleError({
            status: 400,
            message: 'Failed to delete conversation',
            error: error.message
        })
    }
}









module.exports = ConversationController;