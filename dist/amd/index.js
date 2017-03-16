define(['exports', 'aurelia-framework', './options', './dragula', './move-before'], function (exports, _aureliaFramework, _options, _dragula, _moveBefore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.moveBefore = exports.DIRECTION = exports.Options = exports.Dragula = undefined;
  exports.configure = configure;
  exports.Dragula = _dragula.Dragula;
  exports.Options = _options.Options;
  exports.DIRECTION = _options.DIRECTION;
  exports.moveBefore = _moveBefore.moveBefore;
  function configure(config, callback) {
    var defaults = new _options.Options();
    config.container.registerInstance(_options.GLOBAL_OPTIONS, defaults);

    if (callback !== undefined && typeof callback === 'function') {
      callback(defaults);
    }

    config.globalResources([_aureliaFramework.PLATFORM.moduleName('./dragula-and-drop')]);
  }
});