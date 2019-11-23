var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/posts", function(req, res) {
    db.Product.findAll({}).then(function(dbPost) {
      res.json(dbPost);
    });
  });

};
