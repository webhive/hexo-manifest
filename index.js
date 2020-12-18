'use strict';

hexo.extend.filter.register('after_init', require('./lib/after_init'));
hexo.extend.helper.register('manifest_asset_path', require('./lib/manifest_asset_path'));

