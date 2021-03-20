const app = require('express')();
const express = require('express');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');
const session = require('express-session');

app.use(express.static(__dirname));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(session({secret: '734e987accf23', saveUninitialized: true,}));


/*
 * ROUTING 
 */

app.get(["/main", "/", "/m"], (req, res) => {
    res.render('index', { title: "Anonimo main page" });
});

app.post(["/main", "/", "/m"], (req, res) => {
  console.log("User is log as: " + req.body.user.name);
  req.session.nickname = req.body.user.name;
  res.redirect('/list');
});

app.get(["/list", "/l"], (req, res) => {
  if (req.session.nickname != null)
  {
    res.render('list', { title: "Anonimo chat list", nickname: req.session.nickname});
  } else res.redirect("/m");
});

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