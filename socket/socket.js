const { Server } = require("socket.io")
const MessageService = require('../services/MessageService');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;


const setupSocketIO = async (server) => {
    const io = new Server(server);

    io.use((socket, next) => {
        const token = socket.handshake.auth?.token;
        if(!token){
            return next(new Error('Authantication error'));
        }

        try{
            const user = jwt.varify(token, JWT_SECRET);
            socket.user = user;
            next();
        }catch(error){
            next(new Error('Invalid Token'));
        }
    })

    io.on('connection', (socket) => {
        console.log('A user connected', socket.user);

        socket.on('joinRoom', ({ conversationId }) => {
            socket.join(conversationId);
            console.log(`User joing room ${conversationId}`);
        });

        socket.on('sendMessage', async ({ conversationId, content }) => {
            try {
                const message = await MessageService.sendMessage(conversationId, socket.user.id, content);
                io.to(conversationId).emit('sendMessage', message);
            }catch(error){
                console.log("error sending message", error.message);
            }
        });

        socket.on('typing', ({conversationId, userId})=>{
            socket.to(conversationId).emit('typing', {userId : socket.user.id});
        });

        socket.on('disconnect', ()=>{
            console.log("user Disconnected", socket.user.id);
        });
    });

    return io;
}
module.exports = setupSocketIO;





