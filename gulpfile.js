'use strict';

var gulp = require('gulp');

var browserify = require('browserify');
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
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');

gulp.task('clean', function (callback) {
  return del(['./dist'], callback);
});

gulp.task('sass', function () {
  return gulp.src('./client/**/*.scss')
    .pipe(sass())
    .on('error', function(err) {
      // don't crash, just log the error!
      console.log('Error when processing CSS!');
      console.log(err);
      browserSync.notify('Error when processing CSS!');
      this.emit('end');
    })
    .pipe(autoprefixer({ browsers: ['last 2 version'] }))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(reload({stream: true}));
});

gulp.task('vendor', function() {
  return browserify()
    .require('lodash')
    .require('moment')
    .require('angular')
    .require('angular-route')
    .require('angular-animate')
    .require('angular-bootstrap')
    .require('angular-messages')
    .bundle()
    .pipe(source('vendor.js'))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('watch', function () {
  var bundler = watchify(browserify({ cache: {}, packageCache: {}, fullPaths: true, debug: true}));

  browserSync({
    proxy: 'localhost:8888',
    port: 8080,
    open: false
  });

  gulp.watch('client/**/*.scss', ['sass']);
  gulp.watch(['client/**/*.html', 'client/**/*.css', 'client/img/*.*'], ['copy-static-files']);
  gulp.watch('server/**/*.js', ['mocha']);

  bundler
    .add('./client/js/main.js')
    .external('lodash')
    .external('moment')
    .external('angular')
    .external('angular-route')
    .external('angular-animate')
    .external('angular-bootstrap')
    .external('angular-messages')
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
// Currently unused, but not everything is available on NPM!
gulp.task('copy-bower-components', function () {
  return gulp.src('./bower_components/**')
    .pipe(gulp.dest('dist/bower_components'));
});
gulp.task('copy-static-files', function () {
  return gulp.src(['./client/**/*.html', './client/**/*.css', 'client/**/*.png', 'client/**/*.jpg'])
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
    .pipe(mocha())
    .on('error', function() {
      this.emit('end'); // without this, can't start watching tests if one is broken
    });
});

gulp.task('karma', function() {
  var root = path.resolve('./');
  return karma.server.start({
    basePath: root,
    configFile: path.join(root, './karma.conf.js')
  });
});

gulp.task('default', function() {
  runSequence('clean', 'build', 'mocha', 'karma');
});

gulp.task('build',
  ['vendor', 'watch', 'sass', 'copy-static-files', 'connect-dist']
);