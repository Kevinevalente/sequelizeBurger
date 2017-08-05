var db = require("../models");

module.exports = function(app) {
  app.get("/api/authors", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.burger_name.findAll({
      include: [db.Post]
    }).then(function(dbBurger_name) {
      res.json(dbBurger_name);
    });
  });

  app.get("/:id", function(req, res) {

};
