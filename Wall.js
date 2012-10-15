/*
 *@depend Tool.js
 *
 *
 *墙壁模型类
 *
 */
var Wall = function(config){
	this.position = config.position||Vector2.zero;
	this.size = 5;
	this.id = config.id;
}
Wall.prototype = {
	destroy:function(){
		MOUSE_SHOW_DATA[this.id]=null;
	}
	view:function(){
	
	}
}