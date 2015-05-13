'use strict';
var deploy = process.env.DEPLOY;

if (!deploy) {
  process.exit(0);
}

var gulp = require('child_process').spawn('node', ['./node_modules/gulp/bin/gulp', 'deploy']);

gulp.stdout.on('data', function(data) {
  console.log(data.toString());
});
gulp.stderr.on('data', function(data) {
  console.log('ERR', data.toString());
});
gulp.on('error', function(err) {
  console.log(err);
  process.exit(1);
});
gulp.on('exit', function() {
  process.exit(0);
});