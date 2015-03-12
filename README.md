# karmangulpify-template
Template for a full-stack Javascript project, with automatic reload, browser sync, and test watching for both frontend
and backend.

# Getting Started
Clone this repo:

    git clone git@github.com:threehams/karmangulpify

Install all dependencies

    npm install

**node.js**: Run gulp through NPM. This ensures the --harmony-generators flag is set.

    npm run gulp

**io.js**: Generators are enabled by default, so you can probably just run gulp (untested).

    ./node_modules/.bin/gulp

You'll see some passing tests and some intentionally failing tests, as well as "Access URLs."
Open any number of web browsers at one of these URLs, and watch them all magically track sync scrolling and
interactions!

# Client/Server Docs
Explore the repo to see README.md files in each folder (and subfolders).

# jshint
There are multiple .jshintrc files, which help keep consistent code and warn about mistakes.
Client and server can have different rules, which is why there's more than one. Tests tend to have their own globals.
[Read more](http://jshint.com/)

# Tests
Testing is no fun, so I make a computer do it for me.

This is a broad topic. Links coming eventually...

## Client
Frontend tests are run through the Karma test runner, with the Mocha framework and Chai assertion library.

## Server
Backend tests use Mocha, Chai/expect, and Dirty Chai.
This last one just makes jshint-friendly statements - you can use it, or pretend it doesn't exist.

# Scaling
This template works well for small projects, and is probably fine for something medium-sized. Over time, you may notice
some problems, however.

## Gulp
Having all tasks in one file is very, very nice when starting out. Eventually, the file will grow to the point where
it's difficult to work with.

I would not recommend splitting the gulpfile until it becomes painful. In the early stages, it can be hard to know
how the tasks should be grouped.

The [gulp-starter](https://github.com/greypants/gulp-starter) project shows a typical structure.

## Backend
The backend is set up to use Koa and the Bluebird promise library. Any promise library should work, but you need
some kind of future to work with koa/co.

This template has no real attachment to the backend. If you want to use a different server, just wipe out everything in
the server folder and drop in something else, with an index.js to start the server. You'll probably need to rework the
'mocha' Gulp task if you do this.

### Server
The Koa server is fantastic to work with for a small system, but it's not in as wide use as Express or Hapi, so
middleware and support may not be as easy to find.

### Structure
The backend is organized into routes, controllers and models. You may want to play with a component
structure, like the frontend.

These components can eventually be split out into microservices, if you go that route. Don't do that until you run
into problems - it increases complexity very quickly.

## Frontend
This template, gulp setup, and tests are fairly tightly coupled to Angular 1, with gradual transition to Angular 2 as
migration details become available. If you are interested in a different front-end framework, you may want to use a
different template.

### Forms
If you use a lot of forms, consider learning [Formly](https://github.com/formly-js/angular-formly).
It can cut down on a lot of the directive work needed to get a lot of forms done, without duplicating a ton
of template logic.

### Components
Gradually, the Components directory will get larger and larger. If a component is truly self-contained, it
should be possible to move it to an NPM package, and include it through Browserify.

This has the added benefit of speeding up reloads once JS grows to a certain size (it will be included in vendor.js),
but maintaining multiple repositories can cause extra headaches during deployment. If you use a component across three
or more projects, that's probably a good time to package it into an external dependency.
