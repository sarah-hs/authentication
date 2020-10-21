const http = require('http');
const { env, mongo, port, ip, apiRoot } = require('./config');
const mongoose = require('./services/mongoose');
const express = require("./services/express");

const api = require('./api');

// >> Here is where the app
// is initializated and the
// server start running
const app = express(apiRoot, api);
const server = http.createServer(app);


// >> Here will be the connection
// to mongodb.
if(mongo.uri) {
  mongoose.connect(mongo.uri).then(() => console.log('Ready'));
}


setImmediate(() => {
  server.listen(port, ip, () => {
    console.log('Express server listening on http://%s:%d, in %s mode', ip, port, env)
  })
})

module.exports = app;