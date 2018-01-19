function Diji(){
	this.hp = 1;
	this.speed = 100;
	this.ele=$("<div></div>");
	this.ele.addClass("diji");
	this.ele.appendTo("#box");
	var x = $("body").width() * Math.random()
	
	this.ele.css({left:x,top:-250})

}
Diji.prototype.move=function(){
	var y = $("body").height();
	var t = 100000 /this.speed;
	this.ele.animate({top:y},t,function(){
		this.remove();
	})
}
