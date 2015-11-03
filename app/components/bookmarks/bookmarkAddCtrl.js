(function () {
    "use strict";

    angular
        .module("bookmarkApp")
        .controller("bookmarkAddCtrl", ["bookmarkResource", "$state", bookmarkAddCtrl]);

    function bookmarkAddCtrl(bookmarkResource, $state) {
        var vm = this;
        vm.tags = [];


        vm.addBookmark = function () {
            var data = {
                url: vm.url
            };

            var bookmark = new bookmarkResource(data);

            bookmark.$save(function () {
                console.log("created");
                $state.go("bookmarkList");
            });
        };

        vm.newTag = function (tag) {
            vm.tags.push(tag);
            return tag;
        };
    };

}());