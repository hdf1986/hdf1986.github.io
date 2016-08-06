(function () {
  var self = this;
  var Route = function (path, method, controllerName, controllerAction) {
    return {
      path: "/" + path,
      method: method,
      controllerName: controllerName,
      controllerAction: controllerAction,
      controller: require(`${Mugi.projectPath}/app/controllers/${controllerName}Controller`).methods[controllerAction]
    }
  }
  var router =  {
    list: [],
    get: function (path, controllerName, controllerAction) {
      router.match(path, "GET", controllerName, controllerAction)
      return true
    },
    post: function (path, controllerName, controllerAction) {
      router.match(path, "POST", controllerName, controllerAction)
      return true
    },
    put: function (path, controllerName, controllerAction) {
      router.match(path, "PUT", controllerName, controllerAction)
      return true
    },
    delete: function (path, controllerName, controllerAction) {
      router.match(path, "DELETE", controllerName, controllerAction)
      return true
    },
    match: function (path, method, controllerName, controllerAction) {
      path = path || "/"
      method = method || "GET"
      var route = new Route(path, method, controllerName, controllerAction)
      router.list.push(route)
      return true
    }
  }
  module.exports = router
})()
