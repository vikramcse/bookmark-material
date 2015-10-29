(function() {
    "use strict";

    angular
        .module("bookmarkApp")
        .controller("bookmarkListCtrl", bookmarkListCtrl);

    function bookmarkListCtrl() {
        var vm = this;
        vm.users = [
            {
                name:"vikram",
                description:"vikram jadhav is good boy"
            },
            {
                name:"Amey",
                description:"vikram jadhav is good boy"
            },
            {
                name:"chakroo",
                description:"vikram jadhav is good boy"
            },
            {
                name:"kaushik",
                description:"vikram jadhav is good boy"
            }
        ];
    };
}());