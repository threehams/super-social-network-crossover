'use strict';

var Promise = require('bluebird');
Promise.longStackTraces();
var koa = require('koa');
var serve = require('koa-static');
var router = require('koa-router')();

var app = module.exports = koa();

app.use(function *handleErrors(next) {
  try {
    yield next;
  } catch(err) {
    this.status = err.status || 500;
    this.body = err.message;
    this.app.emit('error', err, this);
  }
});

app.use(serve('dist', {defer: true}));
//app.use(function *logRequest(next) {
//  var start = new Date();
//  yield next;
//  var ms = new Date() - start;
//  console.log('%s %s - %s', this.method, this.url, ms, 'ms');
//});

require('./routes/resources-routes')(router);

app.use(router.routes());
app.use(router.allowedMethods());

