function Bullet(x,y){
	this.ele=$("<div></div>")
	this.ele.addClass("bullet")
	this.ele.appendTo("#box")
	this.ele.css({
		left:parseInt($("#fly").css("left"))+50,
		top:parseInt($("#fly").css("top"))-18
	})
	
}

Bullet.prototype.move=function(){
	this.ele.animate({"top": -600}, 1500,function(){	
		
		this.remove()
		
	})
}