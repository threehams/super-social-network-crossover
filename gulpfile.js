'use strict';

var gulp = require('gulp');
var _ = require('lodash');

var connect = require('gulp-connect');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var browserify = require('browserify');
var partialify = require('partialify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
//var browserSync = require('browser-sync');
var del = require('del');
var karma = require('karma');
var path = require('path');
var runSequence = require('run-sequence');
var jadeify = require('jadeify');

gulp.task('clean', function (callback) {
  return del(['./dist'], callback);
});

gulp.task('minify-css', function () {
  var opts = { comments: true, spare: true };
  return gulp.src(['./app/**/*.css', '!./app/bower_components/**'])
    .pipe(minifyCSS(opts))
    .pipe(gulp.dest('./dist/'));
});
//gulp.task('minify-js', function () {
//  return gulp.src(['./app/**/*.js', '!./app/bower_components/**'])
//    .pipe(uglify({
//      // inSourceMap:
//      // outSourceMap: 'app.js.map'
//    }))
//    .pipe(gulp.dest('./dist/'));
//});

gulp.task('watch', function () {
  var bundler = watchify(browserify({ cache: {}, packageCache: {}, fullPaths: true, debug: true}));

  bundler
    .add('./app/js/main.js')
    .transform(partialify)
    .transform(jadeify)
    .on('update', rebundle);
  rebundle();

  function rebundle() {
    return bundler.bundle()
      .on('error', function (err) {
        console.log('Browserify Error');
        console.log(err.message);
        console.log(err.stack);
      })
      .pipe(source('main.js'))
      .pipe(gulp.dest('./dist/js'));
  }

  gulp.watch('app/**/*.css', ['minify-css']);
  gulp.watch('app/**/*.html', ['copy-html-files']);
});
gulp.task('copy-bower-components', function () {
  return gulp.src('./app/bower_components/**')
    .pipe(gulp.dest('dist/bower_components'));
});
gulp.task('copy-html-files', function () {
  return gulp.src('./app/**/*.html')
    .pipe(gulp.dest('dist/'));
});
gulp.task('connect-dist', function () {
  connect.server({
    root: 'dist/',
    port: 8888
  });
});
//gulp.task('browser-sync', function () {
//  browserSync({
//    server: {
//      baseDir: './'
//    }
//  })
//});

gulp.task('karma', function() {
  var root = path.resolve('./');
  return karma.server.start({
    basePath: root,
    configFile: path.join(root, './karma.conf.js')
  });
});

gulp.task('default', function() {
  runSequence('clean', 'build', 'karma');
});

gulp.task('build',
  ['watch', 'minify-css', 'copy-html-files', 'copy-bower-components', 'connect-dist']
);