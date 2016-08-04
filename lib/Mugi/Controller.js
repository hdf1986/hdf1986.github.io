module.exports = function (func) {
  var func = func
  return function(req,res){
    Mugi.logger.info(`Started ${req.method} "${req.path}" for ${req.connection.remoteAddress} at ${(new Date).toISOString("en-us")}`)
    func(req, res)
  }
}
