'use strict';

const fs = require('hexo-fs');
const resolve = require('path').resolve;

module.exports = async function () {
  var config = this.config;
  var manifestFile = resolve(this.theme.base + '/source/manifest.json');

  const exist = await fs.exists(manifestFile);
  config.manifest = exist ? require(manifestFile) : {};
};
