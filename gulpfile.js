var gulp = require('gulp');

gulp.task('copy-html', function() {
    gulp.src('app/index.html')
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['copy-html'], function() {
    gulp.watch('app/index.html', ['copy-html']);
});
