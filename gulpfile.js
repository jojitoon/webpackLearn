const gulp = require('gulp');
const gutil = require('gulp-util');
const webpack = require('webpack');
const del = require('del');
const vinylPaths = require('vinyl-paths');
const webpackStream = require('webpack-stream');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config.js');


const paths = {
  src: './src/',
  build: './dist/',
};

gulp.task('clean', () => gulp.src(`${paths.build}*`)
  .pipe(vinylPaths(del)));

gulp.task('webpack', ['clean'], () => webpackStream(webpackConfig, webpack)
  .pipe(gulp.dest(`${paths.build}`)));
gulp.task('webpack-dev-server', () => {
  // Start a webpack-dev-server
  new WebpackDevServer(webpack(webpackConfig))
    .listen(8080, 'localhost', (err) => {
      if (err) throw new gutil.PluginError('webpack-dev-server', err);
      gutil.log('[webpack-dev-server]', 'http://localhost:8080/webpack-dev-server/index.html');
    });
});
gulp.task('watch', () => {
  gulp.watch(paths.ALL, ['webpack']);
});

gulp.task('default', ['webpack-dev-server', 'watch']);
