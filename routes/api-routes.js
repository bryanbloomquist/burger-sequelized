var db = require("../models");

module.exports = function(app) {

    // adds all burgers
    app.get("/", function (req, res) {
        var query = {};
        if (req.query.customer_id) {
            query.CustomerId = req.query.customer_id;
        }
        db.Burger.findAll({
            order: [
                ["burger_name"]
            ]
            // where: query,
            // include: [db.Customer]
        }).then(function(dbBurger) {
            var burgerArray = [];
            for (var i=0; i < dbBurger.length; i++) {
                burgerArray.push(dbBurger[i].dataValues);
            }
            var burgerObject = {burgers: burgerArray}
            res.render("index", burgerObject)
        });
    });

    // app.get("/api/burgers", function (req, res) {
    //     var query = {};
    //     if (req.query.customer_id) {
    //         query.CustomerId = req.query.customer_id;
    //     }
    //     db.Burger.findAll({
    //         where: query,
    //         include: [db.Customer]
    //     }).then(function(dbBurger) {
    //         res.json(dbBurger)
    //     });
    // });

    // get a single burger
    app.get("/api/burgers/:id", function(req,res) {
        db.Burger.findOne({
            where: {
                id: req.params.id
            }
            // include: [db.Customer]
        }).then(function(dbBurger) {
            res.json(dbBurger);
        });
    });

    // adds a burger to the database
    app.post("/api/burgers", function (req, res) {
        db.Burger.create(req.body).then(function(dbBurger) {
            res.json(dbBurger);
        });
    });

    // change the devoured status
    app.put("/api/burgers/:id", function(req, res) {
        db.Burger.update({
            devoured: req.body.devoured
        },{
            where: {
                id: req.params.id
            }
        }).then(function(dbBurger) {
            res.json(dbBurger);
        });
    });

    // delete a burger
    app.delete("/api/burgers/:id", function(req, res) {
        db.Burger.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbTodo) {
            res.json(dbTodo);
        });
    });

};