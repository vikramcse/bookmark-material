(function() {
    "use strict";

    angular
        .module("bookmarkApp")
        .controller("bookmarkAddCtrl", bookmarkAddCtrl);

    function bookmarkAddCtrl() {
        var vm = this;
        vm.tags = [];

        vm.addBookmark = function() {
            console.log(vm.url);
            console.log(vm.tags);


        };

        vm.newTag = function(tag) {
            return tag;
        };
    };

}());