
/**
 * Created by Robin on 2017/1/30.
 */
var gulp = require("gulp"),
    less = require("gulp-less"),
    cssmin = require("gulp-cssmin"),
    cached = require("gulp-cached"),
    remember = require("gulp-remember"),
    webpack = require("webpack");

//html task
gulp.task("html", function () {
    gulp.src("./src/html/*.html")
        .pipe(gulp.dest("./dist/html"));
});

/*//less task
gulp.task("less", function () {
    gulp.src("./src/less/!**!/!*.less")
        .pipe(less())
        .pipe(cssmin())
        .pipe(gulp.dest("./dist/css"));
});*/


//watch task
/*gulp.task("watch", function () {
    //watch less
    var lessSrc = "./src/less/!**!/!*.less",
        lessWatch = "watchLess";
    gulp.task(lessWatch, function () {
        gulp.src("./src/less/!*.less")
            .pipe(cached(lessWatch))
            .pipe(remember(lessWatch))
            .pipe(less())
            .pipe(cssmin())
            .pipe(gulp.dest("./dist/css"));
    });
    var lessWatcher = gulp.watch(lessSrc, [lessWatch]); // 监视与 watchLess 任务中同样的文件
    lessWatcher.on("change", function (event) {
        if (event.type === "deleted") {                   // 如果一个文件被删除了，则将其忘记
            delete cached.caches[lessWatch][event.path];       // gulp-cached 的删除 api
            remember.forget(lessWatch, event.path);         // gulp-remember 的删除 api
        }
    });
});*/

/*//js task and watch js
gulp.task("js", function () {
    var config = require("./webpack.config.js");
    config.watch = true;
    webpack(config).watch(200, function (error, stats) {
        console.log(error);
    });
});*/

//dev
gulp.task("default", ["html", "less", "js"]);
