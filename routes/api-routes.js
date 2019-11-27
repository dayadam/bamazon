const db = require("../models");
const moment = require("moment");

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
    let stockQuantity;
    db.Product.findOne({
      where: {
        id: req.body.id
      }
    }).then(function(ans) {
      //console.log(ans);
      console.log(ans.dataValues.stock_quantity);
      stockQuantity = ans.dataValues.stock_quantity;
      console.log(req.body);
      console.log(parseInt(req.body.orderQuantity));
      console.log(stockQuantity);
      console.log(parseInt(stockQuantity));
      console.log(parseInt(req.body.orderQuantity) <= stockQuantity);

      if (parseInt(req.body.orderQuantity) <= stockQuantity) {
        db.Product.update(
          {
            stock_quantity: stockQuantity - parseInt(req.body.orderQuantity),
            updatedAt: moment().format() //"YYYY-MM-DD HH:mm:ss"
          },
          {
            where: {
              id: req.body.id
            }
          }
        ).then(ans => res.json(ans));
      } else {
        res.json(false);
      }
    });
  });
};
