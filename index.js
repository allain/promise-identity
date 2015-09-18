var Promise = require('bluebird');

module.exports = function(val) {
  return Promise.resolve(val);
};
