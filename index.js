const app = require('express')();
const express = require('express');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');
const session = require('express-session');

var route = require('./engine/router');

app.use(express.static(__dirname));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(session({secret: '734e987accf23', saveUninitialized: true,}));


/*
 * ROUTING 
 */

route.Route(app);

/*
 * SOCKET.IO LISTEN EVENTS
 */

io.on('connection', (socket) => {
  console.log('User connected');

  io.on('disconnetion', (socket) => {
    console.log('User is disconnected!');
  });

});

/*
 * APPLICATION LISTENER
 */

http.listen(2379, () => {
  console.log('listening on :2379');
});