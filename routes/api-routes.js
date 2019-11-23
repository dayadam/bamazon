var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/products", function(req, res) {
    db.Product.findAll({}).then(function(ans) {
      res.json(ans);
    });
  });

};
