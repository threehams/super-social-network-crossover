'use strict';

var gulp = require('gulp');

var minifyCSS = require('gulp-minify-css');
var browserify = require('browserify');
var partialify = require('partialify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var browserSync = require('browser-sync');
var del = require('del');
var karma = require('karma');
var path = require('path');
var runSequence = require('run-sequence');
var jadeify = require('jadeify');
var nodemon = require('nodemon');
var mocha = require('gulp-mocha-co');
var sass = require('gulp-sass');
var reload = browserSync.reload;

gulp.task('clean', function (callback) {
  return del(['./dist'], callback);
});

gulp.task('sass', function () {
  return gulp.src('./client/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/'))
    .pipe(reload({stream: true}));
});

gulp.task('watch', function () {
  var bundler = watchify(browserify({ cache: {}, packageCache: {}, fullPaths: true, debug: true}));

  browserSync({
    proxy: 'localhost:8888',
    port: 8080
  });

  gulp.watch('client/**/*.scss', ['sass']);
  gulp.watch('client/**/*.html', ['copy-html-files']);
  gulp.watch('server/**/*.js', ['mocha']);

  bundler
    .add('./client/js/main.js')
    .transform(partialify)
    .transform(jadeify)
    .on('update', rebundle);
  return rebundle();

  function rebundle() {
    return bundler.bundle()
      .on('error', function(err) {
        console.log('Browserify Error');
        console.log(err.message);
        console.log(err.stack);
      })
      .pipe(source('main.js'))
      .pipe(gulp.dest('./dist/js'))
      .pipe(reload({stream: true}));
  }
});
gulp.task('copy-bower-components', function () {
  return gulp.src('./bower_components/**')
    .pipe(gulp.dest('dist/bower_components'));
});
gulp.task('copy-html-files', function () {
  return gulp.src('./client/**/*.html')
    .pipe(gulp.dest('dist/'));
});
gulp.task('connect-dist', function () {
  nodemon({
    script: 'server/index.js',
    env: {
      'PORT': 8888
    },
    nodeArgs: ['--harmony-generators']
  });
});

gulp.task('mocha', function() {
  return gulp.src(['./server/test/**/*_test.js'])
    .pipe(mocha());
});

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
  ['watch', 'sass', 'copy-html-files', 'connect-dist']
);