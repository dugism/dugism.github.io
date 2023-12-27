"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _rollupPluginSvelte = _interopRequireDefault(require("rollup-plugin-svelte"));

var _pluginNodeResolve = _interopRequireDefault(require("@rollup/plugin-node-resolve"));

var _rollupPluginLivereload = _interopRequireDefault(require("rollup-plugin-livereload"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function serve() {
  // Keep a reference to a spawned server process
  var server;

  function toExit() {
    // Kill the server if it exists
    if (server) server.kill(0);
  }

  return {
    writeBundle: function writeBundle() {
      if (server) return; // Spawn a child server process

      server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
        stdio: ['ignore', 'inherit', 'inherit'],
        shell: true
      }); // Kill the server on process termination or exit

      process.on('SIGTERM', toExit);
      process.on('exit', toExit);
    }
  };
}

var _default = {
  input: 'src/main.js',
  output: {
    file: 'public/build/bundle.js',
    format: 'iife',
    name: 'app'
  },
  plugins: [(0, _rollupPluginSvelte["default"])({
    include: 'src/**/*.svelte'
  }), (0, _pluginNodeResolve["default"])({
    browser: true
  }), serve(), (0, _rollupPluginLivereload["default"])('public')]
};
exports["default"] = _default;