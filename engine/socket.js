var rooms = require('./rooms');

exports.Socket = function(io) 
{
    io.on('connection', (socket) => {
        console.log('[**CONSOLE**] User connected');

        manager = new rooms.RoomManager(socket);


        socket.on("disconnect", () => {
            manager.Left();
            console.log("[**CONSOLE**] User disconnected");
        });

        manager.Join("Hello world");


    });
}