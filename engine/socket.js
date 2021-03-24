var rooms = require('./rooms');

exports.Socket = function(io) 
{
    io.on('connection', (socket) => {
        console.log('[**CONSOLE**] User connected');

        socket.on("disconnect", () => {
            console.log("[**CONSOLE**] User disconnected");
        });

        rooms.join(socket, "Some room");

    });
}