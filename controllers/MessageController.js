const MessageService = require('../services/MessageService')
const Helper = require('../helpers/helper');

const MessageController = {}

MessageController.sendMessage = async(req, res) =>{
    try{
        const {conversation_id, sender_id, content} = req.body;
        const message = await MessageService.sendMessage(conversation_id, sender_id, content);
        return Helper.handleResponse({
            message: 'Message sent successfully',
            status: 200,
            data: message
        })
    }catch(error){
        Helper.handleError({
            status: 400,
            message: 'Failed to send message',
            error: error.message
        })
    }
}


MessageController.getMessages = async(req, res) =>{
    try{
        const conversationId = req.params.id;
        const messages = await MessageService.getMessages(conversationId);
        return Helper.handleResponse({
            status: 200,
            message: 'Messages retrieved successfully',
            data: messages
        })
    }catch(error){
        Helper.handleError({
            status: 400,
            message: 'Failed to get messages',
            error: error.message
        })
    }
}

MessageController.markMessageAsRead = async (req, res) =>{
    try{
        const {message_id} = req.body;
        const updatedMessage = await MessageService.markMessageAsRead(message_id);
        if(!updatedMessage){
            return Helper.handleResponse({
                status: 404,
                message: 'Message not found'
            })
        }
        return Helper.handleResponse({
            status: 200,
            message: 'Message marked as read successfully',
            data: updatedMessage
        })
    }catch(error){
        Helper.handleError({
            status: 400,
            message: 'Failed to mark message as read',
            error: error.message
        })
    }
}




module.exports = MessageController;

