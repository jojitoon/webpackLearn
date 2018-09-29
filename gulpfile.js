const gulp = require('gulp');
const gutil = require("gulp-util");
const webpack = require('webpack');
const del = require('del');
const vinylPaths = require('vinyl-paths');
const webpack_stream = require('webpack-stream');
const webpack_config = require('./webpack.config.js');
var WebpackDevServer = require("webpack-dev-server");


const paths = {
    src: './src/',
    build: './dist/'
};

gulp.task('clean', () => {
    return gulp.src(`${paths.build}*`)
        .pipe(vinylPaths(del));
});

gulp.task('webpack', ['clean'] ,() => {
    return webpack_stream(webpack_config, webpack)
        .pipe(gulp.dest(`${paths.build}`));
});
gulp.task("webpack-dev-server", function(callback) {
    // Start a webpack-dev-server
    new WebpackDevServer(webpack(webpack_config))
    .listen(8080, "localhost", function(err) {
    if (err) throw new gutil.PluginError("webpack-dev-server", err);
    gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
    });
    });
    gulp.task('watch', function() {
        gulp.watch(paths.ALL, ['webpack']);
        });

    gulp.task('default', ['webpack-dev-server', 'watch']);