// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var http = require("http");
var fs = require("fs");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));

// Set our port to 8080
var PORT = process.env.PORT || 8080;

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

var mysql = require('mysql');
var sql = {
    con: mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "rootpassword",
        database: "restaurant_db"
    })
}

sql.con.connect(function(err) {
    if (err) { throw err; }
    console.log("Connected to Database!");
});