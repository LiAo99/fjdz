function Flyer(boxId){
	this.ele= $(boxId)
	
}
Flyer.prototype.start = function() {
	
	var self = this 
	
	this.ele.mousedown(function(e) {  
		
		e.preventDefault()  
			
		var detaX = e.offsetX 
		var detaY = e.offsetY
		
		$(document).mousemove(function(e) { 
			
			e.preventDefault()  
			
			var x = e.clientX - detaX 
			var y = e.clientY - detaY
			self.move(x, y)        
		})
		
		$(document).mouseup(function() { 
			self.stop()
		})
	})
}

Flyer.prototype.move = function(x, y) {
	if (x < 0) {  // 如果x小于0
		x = 0     // 那么，强制设置它为 0
	}
	if (y < 0) {  // 如果y小于0
		y = 0     // 那么，强制设置它为 0
	}
	var maxX =$("body").width()-this.ele.width()
	if(x>maxX){
		x=maxX;
	}
	this.ele.css({
		left: x,
		top: y
	})
}

Flyer.prototype.stop = function() {
	$(document).off("mouseup mousemove")
}

Flyer.prototype.fire = function() {
	
	var self = this
	
	this.timer = setInterval(function() {
		new Bullet().move();
	}, 100);
}