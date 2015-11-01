(function() {
    "use strict";

    // Defined the getter to the common.services main service module
    // This is custom service requires to use $resource and call the
    // web server
    angular
        .module("common.services")
        .factory("bookmarkResource", ["$resource", productResource]);

    function productResource ($resource) {
        return $resource("/api/bookmarks/:bookmarkId",
            {bookmarkId: "@bookmarkId"}
        );
    };
}());