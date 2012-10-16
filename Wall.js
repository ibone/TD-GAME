/*
 *@depend Tool.js
 *
 *
 *墙壁模型类
 *
 */
var Wall = function(config){
	if(!config){
		config = {};
	}
	this.position = config.position||Vector2.zero;
}
Wall.prototype = {
	remove:function(){
		TD.module[this.id]=null;
	},
	view:function(){
		if(!TD.ctx)return;
		var ctx = TD.ctx;
		ctx.fillStyle = "rgb(0,0,0,0,1)";
        ctx.fillRect (this.position.x, this.position.y, 20, 5);
	}
}