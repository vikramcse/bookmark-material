var gulp = require("gulp");
var nodemon = require("gulp-nodemon");
var gulpMocha = require("gulp-mocha")

gulp.task("default", function() {
    nodemon({
        script:"app_server.js",
        ext:"js",
        ignore:["./node_modules/**"]
    }).on("restart", function() {
        console.log("restarting...");
    });
});

gulp.task("test", function() {
    gulp.src("./server/tests/*.js")
        .pipe(gulpMocha({
            reporter:"nyan"
        }));
});