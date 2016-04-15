var gulp = require("gulp")
    , rename = require("gulp-rename")
    , uglify = require("gulp-uglify")
    , babel = require("gulp-babel")
    , notify = require("gulp-notify")
gulp.task("default", function () {
    gulp.src("./js/**.js")
        .pipe(uglify())
        .pipe(rename(function (path) {
                // take existing path and add .min to it
                // before .js extension
                path.basename += ".min"
            })
            .pipe(gulp.dest("./dist"))
            .pipe(
                notify({
                    message: "Build has been completed"
                    , onLast: true
                })
            ))

})
gulp.task("js", function () {
    gulp.src("./js/**.js")
        .pipe(babel({
            presets: ["es2015"]
        }))
        .pipe(uglify())
        .pipe(
            rename(function (path) {
                path.basename += ".min"
            })
        )
        .pipe(gulp.dest("./dist"))
})
gulp.task("watch", function () {
    gulp.watch("./js/**.js", function () {
        gulp.run("js")
    })
})