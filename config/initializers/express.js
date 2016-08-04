module.exports = function () {
  var _routes = require('../routes')(Mugi.router)
  var routes = _routes.list;
  Express.parseRoutes(routes)
  Express.listen(3000)
}
