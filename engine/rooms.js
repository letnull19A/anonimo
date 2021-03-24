exports.join = (socket, message) => 
{
    socket.join(message);
    console.log("[**CONSOLE**] User joined in room with message: " + message);
}