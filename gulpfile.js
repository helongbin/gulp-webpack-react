
/**
 * Created by Robin on 2017/1/30.
 */
var gulp = require("gulp"),
    less = require("gulp-less"),
    cssmin = require("gulp-cssmin"),
    webpack = require("webpack");

//html task
gulp.task("html", function () {
    gulp.src("./src/html/*.html")
        .pipe(gulp.dest("./dist/html"));
});

//less task
gulp.task("less", function () {
    gulp.src("./src/less/*.less")
        .pipe(less())
        .pipe(cssmin())
        .pipe(gulp.dest("./dist/css"));
});

//js task
gulp.task("js", function () {
    var config = require("./webpack.config.js");
    config.watch = true;
    webpack(config).watch(200, function () {
        console.log(555)
    });
});

//dev
gulp.task("default", ["html", "less", "js"]);
