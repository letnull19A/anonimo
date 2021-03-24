const app = require('express')(),
      express = require('express'),
      http = require('http').Server(app),
      io = require('socket.io')(http),
      bodyParser = require('body-parser'),
      session = require('express-session'),
      route = require('./engine/router'),
      socket = require('./engine/socket'),
      auth = require('./engine/auth');

app.use(express.static(__dirname));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(session({secret: '734e987accf23', saveUninitialized: true,}));

var authSession = new auth.Auth();

route.Route(app, authSession);
socket.Socket(io);

http.listen(2379, () => {
  console.log('[**CONSOLE**] Listening on port : ' + http.address().port);
});