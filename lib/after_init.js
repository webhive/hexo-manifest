'use strict';

const fs = require('hexo-fs');
const resolve = require('path').resolve;

module.exports = function () {
  var config = this.config;
  var manifestFile = resolve(__dirname + '/../../../themes/' + config.theme + '/source/manifest.json');

  fs.exists(manifestFile, (exists) => {
    config.manifest = exists ? require(manifestFile) : {};
  });
};
