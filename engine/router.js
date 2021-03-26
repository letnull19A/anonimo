exports.Route = function(app, auth, room)
{
    app.get(["/main", "/", "/m"], (req, res) => {
        res.render('index', { title: "Anonimo main page" });
    });
    
    app.post(["/main", "/", "/m"], (req, res) => {
      console.log("[**CONSOLE**] User is join as: " + req.body.user.name);
      auth.CreateSession(req, res, {nickname: req.body.user.name, temp_id: "fe9472074890aac4576970979ee4754"});
      res.redirect('/list');
    });
    
    app.get(["/list", "/l"], (req, res) => {
      if (req.session.nickname != null)
      {
        res.render('list', 
          { 
            title: "Anonimo chat list", 
            nickname: req.session.nickname 
          });
      } else res.redirect("/m");
    });

    app.get(["/c:token", "/chat:token", "/:token"], (req, res) => {
      if (req.session.nickname != null)
      {

        res.render('chat', { title: "Anonimo Chat page", room_token: req.params.token, room_name: "Some name this..." });
      } else res.redirect("/m");
    });
}