var should = require("should");
var sinon = require("sinon");

describe("Book Controller Tests", function() {
    describe("Post", function() {
        it("should not allow empty title in post request", function() {
            // a dummy Bookmark object with save method same as defined in
            // post method in bookmark controller
            var Bookmark = function(bookmark){this.save = function(){}};

            var req = {
                body: {
                    title:""
                }
            };

            var res = {
                status: sinon.spy(),
                send: sinon.spy()
            };

            var bookController = require("../controllers/bookmarkController.js")(Bookmark);
            bookController.post(req, res);

            res.status.calledWith(400).should.equal(true, "Bad Status " + res.status.args[0][0]);
            res.send.calledWith("Title is required").should.equal(true);
        });
    });
});