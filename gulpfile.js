var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');

gulp.task('copy-html', function() {
    gulp.src('app/index.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['copy-html'], function() {
    gulp.watch('app/index.html', ['copy-html']);
});
