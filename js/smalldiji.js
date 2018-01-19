function Smalldiji() {
	Diji.call(this)  
	
	this.speed = 50	
	this.hp = 1			
	this.ele.removeClass().addClass("smalldiji") 	
}

Smalldiji.prototype = Diji.prototype 