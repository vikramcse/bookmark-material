var url = require('url');

var bookmarkController = function (Bookmark) {
    var post = function (req, res) {
        var newBookmark = new Bookmark(req.body);

        if (!req.body.url) {
            res.status(400);
            res.send("url is required");
        } else {
            var Description = require("./crawlController.js");

            // extract host name form url
            var parser = url.parse(req.body.url);
            var title = parser.hostname;

            Description(req.body.url, function (description) {
                //console.log(description + " " + title);
                newBookmark.description = description;
                newBookmark.title = title;
                newBookmark.save();
                res.status(201);
                res.send(newBookmark); //201 created
            });
        }

    };

    var get = function (req, res) {
        var query = req.query;
        Bookmark.find(query, function (err, bookmarks) {
            if (err)
                res.status(500).send(err);
            else {
                var returnBookmark = [];
                bookmarks.forEach(function (element, index, array) {
                    // HATEOAS Stuff
                    var newBookmark = element.toJSON();
                    newBookmark.links = {};
                    newBookmark.links.self =
                        "http://" + req.headers.host + "/api/bookmarks/" + newBookmark._id;
                    returnBookmark.push(newBookmark);
                });
            }

            // object of all the users
            res.json(returnBookmark);
        });
    };

    return {
        get: get,
        post: post
    }
};


module.exports = bookmarkController;