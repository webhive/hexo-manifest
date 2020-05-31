'use strict';

const fs = require('hexo-fs');
const resolve = require('path').resolve;

module.exports = async function () {
  console.log('after init')

  var config = this.config;
  var manifestFile = resolve(__dirname + '/../../../themes/' + config.theme + '/source/manifest.json');

  const exist = await fs.exists(manifestFile);
  config.manifest = exist ? require(manifestFile) : {};
};
