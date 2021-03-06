/*
 *
 *主函数
 *
 */
var TD = {}//全局变量；
TD.module = [];
//画布全局对象
TD.ctx = null;
//实例添加
TD.add = function(module){
	var length = this.module.length;
	module.id = length;
	this.module.push(module);
};

(function(){
var Draw = function(canvasName) {
    var canvas = document.getElementById(canvasName);
    var ctx = canvas.getContext("2d");
	ctx.width = canvas.width;
	ctx.height = canvas.height;
	TD.ctx = ctx;
	var STOP = {val:true};
    var loop = function() {
		if(!STOP.val)return;
		//重置画布
		ctx.fillStyle="rgba(255, 255, 255, 1)";
		ctx.fillRect(0,0,ctx.width,ctx.height);
		if(TD.module.length){
			Tool.each(TD.module,function(i,module){
				if(!module)return;
				module.view();
			})
		}
		//showFPS(ctx,starTime);
		setTimeout(loop, 10);
    }
	loop();
	this.stop = function(){
		STOP.val = false;
	}
	this.action = function(){
		STOP.val = true;
		loop();
	}
}
var showFPS = function(starTime){
	var ctx = TD.ctx;
	var endTime = new Date();
	var time = endTime - starTime + 10;
	ctx.fillStyle = "#000";
	ctx.font = "normal 12px Arial";
	ctx.textBaseline = "top";
	ctx.fillText(Math.floor(1000/time), 300, 0);
}
var Main = function(){
	//剧情设定开始
	//例子：一个老鼠 几个墙 让老鼠绕过几个墙
	TD.add(new Mouse({
		position:new Vector2(50,50)
	}));
	for(var i=0;i<20;i++){
		TD.add(new Wall({
			position:{
				x:Math.floor(Math.random()*300),
				y:Math.floor(Math.random()*300)
			}
		}));
	}
	return new Draw('TD_Canvas');
};
Tool.extend(TD,Main())
}())