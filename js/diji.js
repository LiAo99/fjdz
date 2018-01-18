function Diji(){
	this.ele=$("<div></div>")
	this.ele.addClass("diji")
	this.ele.appendTo("#box")
	var x = $("body").width() * Math.random()
	var a = Math.random()
	if(a < 0.3){
		this.ele.css({"width":59,"height":36,"background":"url(img/plain1.png)",left:x-30})
	}else if(a < 0.6){
		this.ele.css({"width":70,"height":92,"background":"url(img/plain2.png)",left:x-30})
	}else if(a < 0.9){
		this.ele.css({"width":165,"height":256,"background":"url(img/plain3.png)",left:x-30,top:-256})
	}

	this.move()
}
Diji.prototype.move=function(){
	var y=  $("body").height();
	this.ele.animate({top:y},3000,function(){
		this.remove();
	})
}
