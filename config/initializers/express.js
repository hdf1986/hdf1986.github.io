module.exports = function () {
  var _routes = require('../routes')(Mugi.router)
  var routes = _routes.list;
  Express.parseRoutes(routes)
  Express.static(`${Mugi.projectPath}/public`)
  Express.static(`${Mugi.projectPath}/vendor/assets`, "/assets")
  Express.app.set('view engine', 'pug');
  Express.app.set('views',`${Mugi.projectPath}/app/views`);
  Express.listen(3000)
}
