var gulp = require('gulp'),
	uglify = require("gulp-uglify"),
	babel = require("gulp-babel");


gulp.task('minify', function () {
    gulp.src('src/src/*.js') // path to your files
    .pipe(uglify())
    .pipe(gulp.dest('build/'));
});

gulp.task("babel", function () {
  return gulp.src("src/src/Geolocation.es6.js")
    .pipe(babel())
    .pipe(gulp.dest("build"));
});

gulp.task('default', ['babel']);


