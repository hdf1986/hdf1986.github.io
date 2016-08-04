module.exports = function () {
  var _app = Express()
  var _routes = require('../routes')(Mugi.router)
  var routes = _routes.list;
  Mugi.logger.info(routes)
}
