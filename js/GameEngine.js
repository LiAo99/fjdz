
var gameEngine = {
	
	ele:$("#box"),
	
	start:function(){
		
		this.movebg(),
		
		new Flyer("#fly").start();
		
		new Flyer().fire();
		
		setInterval(function(){new Diji();},800)

	},
	
	movebg: function() {

		var self = this
		this.ele.animate({"background-position-y": "-230%"}, 10000, "linear", function() {

			self.ele.css({"background-position-y": "0%"})

			self.movebg()
		})
	}
}

