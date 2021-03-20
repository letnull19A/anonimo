exports.Route = function(app) {
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
}