// This file isn't transpiled, so must use CommonJS and ES5

// Register babel to transpile before out tests run.
require('babel-register')();

// Disable webpack feature that Mochae doesn't understand.
require.extensions['.css'] = function() {};
