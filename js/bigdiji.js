function Bigdiji() {
	
	Diji.call(this)   
	
	this.speed = 25		
	this.hp = 10		
	this.ele.removeClass().addClass("bigdiji"); 
}

Bigdiji.prototype = {}  
for (var k in Diji.prototype) { 
	Bigdiji.prototype[k] = Diji.prototype[k]
}