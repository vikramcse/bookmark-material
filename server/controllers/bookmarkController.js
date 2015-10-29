var bookmarkController = function (Bookmark) {
    var post = function (req, res) {
        var newBookmark = new Bookmark(req.body);
        newBookmark.save();
        res.status(201).send(newBookmark); //201 created
    };

    var get = function (req, res) {
        var query = req.query;
        Bookmark.find(query, function (err, bookmarks) {
            if (err) res.status(500).send(err);

            // object of all the users
            res.json(bookmarks);
        });
    };

    return {
        get: get,
        post: post
    }
};


module.exports = bookmarkController;