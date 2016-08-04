exports.show = new Mugi.Controller ((req,res)=>{
	return {
		test: "hola!"
	}
})
exports.index = new Mugi.Controller ((req,res)=>{
  res.send("test")
})
