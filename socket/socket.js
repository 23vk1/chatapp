const { Server } = require("socket.io")
const MessageService = require('../services/MessageService');

const setupSocketIO = async (server) => {
    const io = new Server(server);

    io.on('connection', (socket) => {
        console.log('A user connected', socket.id);

        socket.on('joinRoom', ({ conversationId }) => {
            socket.join(conversationId);
            console.log(`User joing room ${conversationId}`);
        });

        socket.on('sendMessage', async ({ conversationId, senderId, content }) => {
            try {
                const message = await MessageService.sendMessage(conversationId, senderId, content);
                io.to(conversationId).emit('sendMessage', message);
            }catch(error){
                console.log("error sending message", error.message);
            }
        });

        socket.on('typing', ({conversationId, userId})=>{
            socket.to(conversationId).emit('typing', {userId});
        });

        socket.on('disconnect', ()=>{
            console.log("user Disconnected", socket.id);
        });
    });

    return io;
}
module.exports = setupSocketIO;





