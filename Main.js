/*
 *
 *主函数
 *
 */
var MOUSE_SHOW_DATA = [];
var WALL_SHOW_DATA = [];
var DEFENDER_SHOW_DATA = [];

var Draw = function(canvasName, func) {
    var canvas = document.getElementById(canvasName);
    var ctx = canvas.getContext("2d");
	ctx.width = canvas.width;
	ctx.height = canvas.height;
	var STOP = {val:true};
    var loop = function() {
		if(STOP.val){
			func(ctx,STOP);
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
var nextFrame = function(ctx){
	if(MOUSE_SHOW_DATA.length){
		Tool.each(MOUSE_SHOW_DATA,function(i,mouse){
			if(!mouse)return;
			if(mouse.isSurpass(ctx.width,ctx.height)){
				mouse.kill();
			}
			mouse.move();
		})
	}
}
var showAll = function(ctx,STOP){
	var starTime = new Date();
	ctx.fillStyle="rgba(255, 255, 255, 1)";
	ctx.fillRect(0,0,ctx.width,ctx.height);
	nextFrame(ctx);
	showMouse(ctx);
	showWall(ctx);
	showDefender(ctx);
	showFPS(ctx,starTime);
}
var showMouse = function(ctx){
	if(MOUSE_SHOW_DATA.length){
		Tool.each(MOUSE_SHOW_DATA,function(i,mouse){
			if(!mouse)return;
			ctx.fillStyle = mouse.appearance.color;
			ctx.beginPath();
			ctx.arc(mouse.position.x, mouse.position.y, 3, 0, Math.PI * 2, true);
			ctx.closePath();
			ctx.fill();
			ctx.fillStyle = "#ffffff";
			ctx.font = "normal 12px Arial";
			ctx.textBaseline = "center";
			//ctx.fillText(this.id+'', mouse.position.x-3, mouse.position.y+5);
		})
	}
}
var showWall = function(ctx){
	
}
var showDefender = function(ctx){
	
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
	for(var i=0;i<10;i++){
		MOUSE_SHOW_DATA.push(new Mouse({id:MOUSE_SHOW_DATA.length,position:new Vector2(Math.random()*200,Math.random()*200)}));
	}
	return new Draw('TD_Canvas',showAll);
};
var a = Main();