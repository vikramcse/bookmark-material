var express = require("express");
var routes = function (Bookmark) {
    var bookmarkRouter = express.Router();
    var bookmarkController = require("../controllers/bookmarkController.js")(Bookmark);

    bookmarkRouter
        .route("/")
        .post(bookmarkController.post)
        .get(bookmarkController.get);

    bookmarkRouter
        .route("/:bookmarkId")
        .get(function (req, res) {
            var id = req.params.bookmarkId;
            Bookmark.findById(id, function (err, bookmark) {
                if (err) res.status(500).send(err);

                // object of all the users
                res.json(bookmark);
            });
        })
        .put(function (req, res) {
            var id = req.params.bookmarkId;
            Bookmark.findById(id, function (err, bookmark) {
                if (err)
                    res.status(500).send(err);
                else {
                    bookmark.url = req.body.url;
                    bookmark.save(function (err) {
                        if
                        (err) res.status(500).send(err);
                        else
                            res.json(req.bookmark);
                    });
                }
            });
        })
        .patch(function (req, res) {
            var id = req.params.bookmarkId;
            Bookmark.findById(id, function (err, bookmark) {
                if (req.body._id)
                    delete req.body._id;

                for (var p in req.body) {
                    bookmark[p] = req.body[p];
                }
                bookmark.save(function (err) {
                    if
                    (err) res.status(500).send(err);
                    else
                        res.json(req.bookmark);
                });
            })
        })
        .delete(function (req, res) {
            var id = req.params.bookmarkId;
            Bookmark.findById(id, function (err, bookmark) {
                bookmark.remove(function (err) {
                    if
                    (err) res.status(500).send(err);
                    else
                        res.status(204).send("Removed"); //204 removed
                });
            })
        });

    return bookmarkRouter;
};

module.exports = routes;