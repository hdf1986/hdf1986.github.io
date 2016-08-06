module.exports = function (controllerName, _methods) {
  var self = this
  var methods = {}
  Object.keys(_methods).forEach(function (actionName) {
    var current = this
    current.actionName = actionName
    console.log(_methods[actionName]("","pobreeee"))

    methods[actionName] = function (req, res){
      this.actionName = current.actionName
      controllerResults = _methods[current.actionName](req, res)
      res.render(`${self.controllerName}/${current.actionName}`, controllerResults)
    }
  })
  this.methods = methods
  return self
}
// module.exports = function (controllerAction) {
//   var controllerName = controllerName
//   var controllerAction = controllerAction
//   return function(req,res){
//     Mugi.logger.info(`Started ${req.method} "${req.path}" for ${req.connection.remoteAddress} at ${(new Date).toISOString("en-us")}`)
//     controllerResults = controllerAction(req, res)
//   	res.render(`${controllerName}/${controllerAction}`, controllerResults)
//   }
// }
