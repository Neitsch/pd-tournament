var gulp = require('gulp');
var surge = require('gulp-surge');
var webpack = require('webpack-stream');

gulp.task('scripts', function() {
  return gulp.src('src/entry.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('build/scripts/'));
});

gulp.task('deploy', [], function () {
  return surge({
    project: './build',
    domain: 'curious-class.surge.sh'
  })
})
