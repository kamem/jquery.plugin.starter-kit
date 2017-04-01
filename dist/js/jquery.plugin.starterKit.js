/*!
 * jquery.plugin.starterKit (2017-4-1)
 * test
 * https://github.com/kamem/jquery.plugin.starter-kit.git
 * (c) 2017 kamem (@kamem)
 *
 * @version 0.1.0
 * @license Released under the MIT license
 * @author kamem
 */
(function (global, factory) {
	if (typeof exports !== 'undefined') {
		module.exports = factory(require('jquery'), global);
	}	else if (typeof define === 'function' && define.amd) {
			define(['jquery'], function() {factory($, global)});
	}  else {
		factory($, global);
	}
} (typeof window !== "undefined" ? window : this, function ($, global) {
;(function() {
var jquerypluginstarterKitjs;
jquerypluginstarterKitjs = function () {
  $.fn.test = function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var ops = $['extend']({}, options);
  };
}();
}());
}));