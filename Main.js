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
}

var showAll = function(ctx,STOP){
	showMouse(ctx);
	showWall(ctx);
	showDefender(ctx);
}
var showMouse = function(ctx){
	if(MOUSE_SHOW_DATA.length){
		Tool.each(MOUSE_SHOW_DATA,function(i,mouse){
            ctx.fillStyle = mouse.appearance.color;
            ctx.beginPath();
            ctx.arc(mouse.position.x, mouse.position.y, mouse.appearance.size, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fill();
		})
	}
}
var showWall = function(ctx){
	
}
var showDefender = function(ctx){
	
}
var Main = function(){
	MOUSE_SHOW_DATA.push(new Mouse({position:Vector2(10,10)}));
	new Draw('TD_Canvas',showAll);
};
Main()