/*
 *
 *主函数
 *
 */
var TD = {}//全局变量；
TD.module = [];
TD.ctx = null;
TD.add = function(module){
	var length = this.module.length;
	module.id = length;
	this.module.push(module);
}

(function(){
var Draw = function(canvasName) {
    var canvas = document.getElementById(canvasName);
    var ctx = canvas.getContext("2d");
	ctx.width = canvas.width;
	ctx.height = canvas.height;
	TD.ctx = ctx;
	var STOP = {val:true};
    var loop = function() {
		if(STOP.val){
			if(TD.module.length){
				Tool.each(TD.module,function(i,module){
					if(!module)return;
					module.view();
				})
			}
			showFPS(ctx,starTime);
			setTimeout(loop, 10);
		}
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
var showFPS = function(ctx,starTime){
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
	Mouse.add();
	new Wall({});
	return new Draw('TD_Canvas',showAll);
};
var a = Main();
}())