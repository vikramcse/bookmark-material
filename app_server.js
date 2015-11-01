var port = process.env.port || 7777;
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var mongoose = require("mongoose");
var db = mongoose.connect("mongodb://localhost/bookmarkData");

// external scripts
var Bookmark = require("./server/models/bookmarkModel.js");
var bookmarkRouter = require("./server/routes/bookmarkRouter.js")(Bookmark);

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.use(express.static(__dirname + '/app'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.use('/api/bookmarks', bookmarkRouter);

app.get("/", function (req, res) {
    res.sendfile("index.html");
});

app.listen(port, function () {
    console.log("gulp is running on " + port);
});
