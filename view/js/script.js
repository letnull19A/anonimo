var socket = io("http://127.0.0.1:2379");

if (socket != null) 
{

    console.log("%cSocket is created!", "color: green");

    

} else console.error("Socket is not created!");