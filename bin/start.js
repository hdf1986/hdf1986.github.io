var requireDirectory = require('require-directory')
var libs = requireDirectory(module, '../lib')
global.Logger = libs.logger;
(function () {
  require('../config/boot')
})()
