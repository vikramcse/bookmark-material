var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var bookmarkModel = new Schema({
    title: String,
    url: String
});

var Bookmark = mongoose.model("Bookmark", bookmarkModel);

module.exports = Bookmark;