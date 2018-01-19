function Middiji() {
	Diji.call(this)	 
	
	this.speed = 30
	this.hp = 5			
	this.ele.removeClass().addClass("middiji")  
}

Middiji.prototype = Diji.prototype  