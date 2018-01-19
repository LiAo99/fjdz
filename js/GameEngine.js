
var gameEngine = {
	
	ele:$("#box"),
	
	start:function(){
		
		this.movebg(),
		
		new Flyer("#fly").start();
		
		new Flyer().fire();
		
		setInterval(function(){
			if(Math.random()<0.2){
				new Bigdiji().move();
			}
			if(Math.random()<0.5){
				new Middiji().move();
			}
			if(Math.random()<0.9){
				new Smalldiji().move();
			}
		},800)

	},
	
	movebg: function() {

		var self = this
		this.ele.animate({"background-position-y": "-230%"}, 10000, "linear", function() {

			self.ele.css({"background-position-y": "0%"})

			self.movebg()
		})
	}
}

