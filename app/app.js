(function() {
    "use strict";

    var app = angular.module("bookmarkApp",
        ["ui.router", "ngMaterial", "ngMdIcons", "ngMessages", "common.services"]);

    app.config(["$stateProvider",
        "$urlRouterProvider", "$mdThemingProvider", "$mdIconProvider",
        function($stateProvider, $urlRouterProvider, $mdThemingProvider, $mdIconProvider) {

            $urlRouterProvider.otherwise("/new");

            $stateProvider
                .state("home", {
                    url:"/",
                    templateUrl:"home.html"
                })
                .state("add", {
                    url:"/new",
                    templateUrl:"components/bookmarks/view/bookmarkAddView.html",
                    controller:"bookmarkAddCtrl as vm"
                })
                .state("bookmarkList", {
                    url:"/bookmarks",
                    templateUrl:"components/bookmarks/view/bookmarksListView.html",
                    controller:"bookmarkListCtrl as vm"
                });

            $mdIconProvider
                .defaultIconSet("app/assets/svg/avatars.svg", 128)
                .icon("menu"       , "app/assets/svg/menu.svg"        , 24)
                .icon("share"      , "app/assets/svg/share.svg"       , 24)
                .icon("google_plus", "app/assets/svg/google_plus.svg" , 512)
                .icon("hangouts"   , "app/assets/svg/hangouts.svg"    , 512)
                .icon("twitter"    , "app/assets/svg/twitter.svg"     , 512)
                .icon("phone"      , "app/assets/svg/phone.svg"       , 512);

            var customBlueMap = $mdThemingProvider.extendPalette('light-blue', {
                'contrastDefaultColor': 'light',
                'contrastDarkColors': ['50'],
                '50': 'ffffff'
            });
            $mdThemingProvider.definePalette('customBlue', customBlueMap);
            $mdThemingProvider.theme('default')
                .primaryPalette('customBlue', {
                    'default': '500',
                    'hue-1': '50'
                })
                .accentPalette('pink');
            $mdThemingProvider.theme('input', 'default')
                .primaryPalette('grey')
    }]);
}());