module.exports = function (controllerAction) {
  var controllerAction = controllerAction
  return function(req,res){
    Mugi.logger.info(`Started ${req.method} "${req.path}" for ${req.connection.remoteAddress} at ${(new Date).toISOString("en-us")}`)
    controllerResults = controllerAction(req, res)
  	res.render(`d/show`, controllerResults)
  }
}
