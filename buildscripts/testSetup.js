// This file isn't transpiled, so must use CommonJS and ES5

// Register babel to transpile before out tests run.
//require('babel-register')();
const register = require('babel-register');

register({
    ignore: /node_modules\/(?!ptz-core-domain)/,
});

// Disable webpack feature that Mocha doesn't understand.
require.extensions['.css'] = function() {};
