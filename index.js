'use strict';

// https://github.com/hexojs/hexo-fs
var fs = require('hexo-fs');

hexo.extend.filter.register('after_init', require('./lib/after_init'));
hexo.extend.helper.register('manifest_asset_path', require('./lib/manifest_asset_path'));
