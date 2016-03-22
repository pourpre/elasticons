// Requis
var gulp = require('gulp');

// Include plugins
var plugins = require('gulp-load-plugins')(); // tous les plugins de package.json



gulp.task('sass', function () {
  return gulp.src('src/sass/**/*.scss')
    .pipe(plugins.sass().on('error', plugins.sass.logError))
    .pipe(plugins.csscomb())
    .pipe(plugins.cssbeautify({indent: '  '}))
    .pipe(plugins.autoprefixer())
    .pipe(plugins.csso())
    .pipe(plugins.rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('dist/css/'));
});


gulp.task('watch', function () {
    gulp.watch('src/**/*', ['sass']);
});
