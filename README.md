# karmangulpify-template
Boilerplate full-stack Javascript project.

Client:
- Angular 1.4 with directive-as-component structure
- Sass
- Jade
- Mocha / Karma

Server:
- Koa
- Rails-style structure (this may change over time)
- Mocha / Supertest (generators + promises)
- Seriously, generators and promises for everything

Build:
- Gulp to support all of the above
- BrowserSync
- Default task starts server, runs all tests, watches for changes, and rebuilds / reloads / re-runs tests

Future:
- Joi validation
- Multiple bundles for faster reloads (currently 2 seconds)
- Gradual transition to Angular 2. Traceur? TypeScript?
