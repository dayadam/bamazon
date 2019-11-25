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

  app.get("/api/products/:id", function(req, res) {
    db.Product.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(ans) {
      res.json(ans);
    });
  });

  app.put("/api/products", function(req, res) {
    db.Product.update(
      {
        stock_quantity: req.body.stock_quantity - req.body.purchase_quantity,
        updatedAt: moment().format() //"YYYY-MM-DD HH:mm:ss"
      },
      {
        where: {
          id: req.body.id
        }
      }
    );
  });
};
