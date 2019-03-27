// dependencies
var express = require("express");

// sets up the express app
var app = express();
var PORT = process.env.PORT || 8080;

// require our models for syncing
var db = require("./models");

// set up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static directory
app.use(express.static("public"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main",
    partialsDir : [ __dirname + "/views/partials"]
}));

app.set("view engine", "handlebars");

// routess
var routes = require("./routes/api-routes.js")(app);
// var routes = require("./routes/customer-api-routes.js")(app);

db.sequelize.sync({}).then(function() {
    app.listen(PORT, function() {
        console.log("app listening at http://localhost:"+PORT);
    });
});