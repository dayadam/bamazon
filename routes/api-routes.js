const db = require("../models");
//const moment = require("moment");

// Routes
// =============================================================
module.exports = function(app) {
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
    let stockQuantity;
    const orderQuantity = parseInt(req.body.orderQuantity);
    db.Product.findOne({
      where: {
        id: req.body.id
      }
    }).then(function(ans) {
      stockQuantity = ans.dataValues.stock_quantity;
      if (orderQuantity <= stockQuantity) {
        db.Product.update(
          {
            stock_quantity: stockQuantity - orderQuantity
          },
          {
            where: {
              id: req.body.id
            }
          }
        ).then(function(response) {
          res.json(stockQuantity - orderQuantity);
        });
      } else {
        res.json(false);
      }
    });
  });
};
