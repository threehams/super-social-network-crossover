# Server tech

Koa is a server designed around EcmaScript 6 generators and the 'co' package, which makes JS read much more closely to a
synchronous language, and almost entirely removes Callback Hell / Pyramid of Doom problems.



Generator support is hidden behind the '--harmony' flag in Node, although the spec has been stable for a long time.
The Io.js fork of Node.js enables them by default, if you go that direction.

The backend is completely detached from the frontend, so this whole directory can be replaced with an Express or Hapi
server, or Rails/Go/whatever you want. If you run a non-JS server, you'll have to do some fiddling with with the Gulp
file, and you'll lose the test watch and auto-reload, but you'll keep the front-end test watching, browser sync, and
asset pipeline.

To start the server outside of gulp (default port: 8888), run:

    node --harmony-generators server

For a specific port, set the PORT variable.

    PORT=80 node --harmony-generators server