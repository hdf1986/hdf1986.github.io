module.exports = function (func) {
  var func = func
  return function(req,res){
    var timeOptions = {
        weekday: "long", year: "numeric", month: "short",
        day: "numeric", hour: "2-digit", minute: "2-digit"
    };
    Mugi.logger.info(`Started ${req.method} "${req.path}" for ${req.connection.remoteAddress} at ${(new Date).toISOString("en-us", timeOptions)}`)
    func(req, res)
  }
}
