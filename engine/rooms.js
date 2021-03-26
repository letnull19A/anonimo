exports.RoomManager = class 
{
    constructor(socket) 
    {
        this.socket = socket;
    }

    Join(message) 
    {
        this.socket.join(message);
        console.log("[**CONSOLE**] User joined in room with message: " + message);
    }

    Left() 
    {
        this.socket.leave();
        console.log("[**CONSOLE**] User left in room");
    }

    // Kick() {}
    // Ban() {}
    // Pardon() {}
}