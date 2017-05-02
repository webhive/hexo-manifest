'use strict';

module.exports = function(asset) {
  var config = this.config;
  return config.manifest[asset];
};
