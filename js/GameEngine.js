

// 游戏引擎        游戏背景			
//开始， 结束


//  仅此1份的对象，我们一般采用 字面量的形式  会更好

// 游戏引擎
var gameEngine = {
	
	ele:$("#box"),		// 属性： 找到背景
	
	start:function(){
		
		this.movebg(),
		
		new Flyer("#fly").start();
		
		setInterval(function() {
	
			new Bullet().fire();
	
		}, 100)
	},
	
	movebg: function() {	// 方法1： 启动游戏
		// 定时移动背景图片: 改变定位
		var self = this
		this.ele.animate({"background-position-y": "-230%"}, 10000, "linear", function() {
			// 先让图片回到 100% 的位置
			self.ele.css({"background-position-y": "0%"})
			// 继续滚动
			self.movebg()
		})
	}
}



function Flyer(boxId){
	this.ele= $(boxId)
	
}
Flyer.prototype.start = function() {
	
	var self = this   // 先保存当前 拖拽对象！
	
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
	
	
//	this.ele.keydown(function(e){
//		  var k = e.keyCode || e.which;
//		  switch(k){
//	        case 37:
//	           this.ele.left =x;
//	        break;
//	        case 38:
//	            this.ele.top = t.top - 10;
//	        break;
//	        case 39:
//	            this.ele.left = t.left + 10;
//	        break;
//	        case 40:
//	            this.ele.top = t.top + 10;
//	        break;
// 		} 
//	})
	
	
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

function Bullet(){
	this.ele=$("<div></div>")
	this.ele.addClass("bullet")
	this.ele.appendTo("#fly")
}
Bullet.prototype.fire=function(){
	this.ele.animate({"top": -600}, 500,function(){		
		this.remove();
	})
}
//function GameEngin(){
//	this.ele=$("#box");
//}
//GameEngin.prototype.start=function(){
//	var self = this;
//	this.ele.animate({"background-position-y":"-230%"},10000,"linear",function(){
//		self.ele.css({"background-position-y":"0%"})
//		self.start();
//	})
//}
