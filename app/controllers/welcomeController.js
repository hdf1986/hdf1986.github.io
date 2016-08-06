module.exports = new Mugi.Controller("welcome", {
  show: function(req, res){
    var self = this
    return {
      test: this.controllerName
    }
  },
  index: function(req, res){
    var self = this
    return {
      test: "d"
    }
  }
})
