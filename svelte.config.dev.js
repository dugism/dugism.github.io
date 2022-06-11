"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _adapterStatic = _interopRequireDefault(require("@sveltejs/adapter-static"));

var _sveltePreprocess = _interopRequireDefault(require("svelte-preprocess"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** @type {import('@sveltejs/kit').Config} */
var config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: (0, _sveltePreprocess["default"])(),
  kit: {
    adapter: (0, _adapterStatic["default"])(),
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte' // vite: {
    //     ssr: {
    //         external: ['@xstate/svelte', 'whatwg-url'],
    //     },
    // },

  }
};
var _default = config;
exports["default"] = _default;