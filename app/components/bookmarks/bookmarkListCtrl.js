(function () {
    "use strict";

    angular
        .module("bookmarkApp")
        .controller("bookmarkListCtrl", ["bookmarkResource","$state", bookmarkListCtrl]);

    function bookmarkListCtrl(bookmarkResource, $state) {
        var vm = this;
        var bookmarks = bookmarkResource;

        bookmarks.query(function (data) {
            vm.users = data;
        });

        vm.delete = function (user) {
            user.$remove({"bookmarkId" : user._id}, function() {
                console.log("deleted");
            });
        }

    }
}());