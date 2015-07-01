'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _coolAsciiFaces = require('cool-ascii-faces');

var _coolAsciiFaces2 = _interopRequireDefault(_coolAsciiFaces);

var errorHandling = function errorHandling() {
  return regeneratorRuntime.mark(function errorHandling(next) {
    return regeneratorRuntime.wrap(function errorHandling$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.prev = 0;
          context$2$0.next = 3;
          return next;

        case 3:
          context$2$0.next = 9;
          break;

        case 5:
          context$2$0.prev = 5;
          context$2$0.t0 = context$2$0['catch'](0);

          this.status = context$2$0.t0.status ? context$2$0.t0.status : 500;
          this.body = {
            error: {
              status: this.status,
              name: context$2$0.t0.name,
              path: this.request.originalUrl,
              reaction: (0, _coolAsciiFaces2['default'])()
            }
          };

        case 9:
        case 'end':
          return context$2$0.stop();
      }
    }, errorHandling, this, [[0, 5]]);
  });
};

exports['default'] = errorHandling;
module.exports = exports['default'];