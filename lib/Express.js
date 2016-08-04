module.exports = (function () {
  var self = {
    express: require('express'),
    app: (function () {
      return require('express')()
    })(),
    parseRoutes: function (routes) {
      routes.forEach(route=>{
        self.app.get(route.path, route.controller);
      })
    },
    static: function (path) {
      self.app.use(self.express.static(path))
    },
    listen: function (port) {
      self.app.listen(port, function () {
        console.log(`Example app listening on port ${port}!`);
      });
    }
  }
  return self
})()
