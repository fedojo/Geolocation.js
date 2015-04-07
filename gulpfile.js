var gulp = require('gulp'),
	uglify = require("gulp-uglify");

gulp.task('minify', function () {
    gulp.src('source/src/*.js') // path to your files
    .pipe(uglify())
    .pipe(gulp.dest('build/'));
});

gulp.task('default', ['minify']);

