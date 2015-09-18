// allow users of this module to define their own Promise implementation
var Promise = global.Promise;
if (!Promise) {
  throw new Error('no global Promise impelementation found, please define one global.Promise = require(\'promise\')');
}

module.exports = function(val) {
  return Promise.resolve(val);
};
