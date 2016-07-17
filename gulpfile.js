var gulp = require('gulp');
var surge = require('gulp-surge');
var webpack = require('webpack-stream');

gulp.task('copy-index', function() {
  return gulp.src('index.html')
    .pipe(gulp.dest('build/'));
});

gulp.task('scripts', function() {
  return gulp.src('src/entry.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('build/scripts/'));
});

gulp.task('deploy', ['scripts', 'copy-index'], function () {
  return surge({
    project: './build',
    domain: 'curious-class.surge.sh'
  })
})
