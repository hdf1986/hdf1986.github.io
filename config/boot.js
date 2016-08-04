module.exports = function () {
  var requireDirectory = require('require-directory')
  var initializers = requireDirectory(module, './initializers')
  var libs = requireDirectory(module, '../lib')
  global.Mugi = libs.Mugi;
  global.Express = libs.Express;
  Object.keys(initializers).forEach(function (prop) {
    var initializer = initializers[prop]
    Mugi.logger.info(`Booting ${prop}`)
    initializer()
  })
}
