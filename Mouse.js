/*
 *@depend Tool.js
 *@depend Vector2.js
 *
 *怪物模型类
 *
 */
var Mouse = function(config){
	if(!config){
		config = {};
	}
	this.position = config.position||Vector2.zero;
	this.velocity = config.velocity||0.1;
	this.acceleration = config.acceleration||Vector2.zero;
	this.age = config.age||0;
	this.life = config.life||1000;
	this.visibleRange = 20;
}
Mouse.prototype = {
	kill:function(){
		TD.module[this.id]=null;
	},
	move:function(angle){
		var x = Math.cos(angle).toFixed(2);
		var y = Math.sin(angle).toFixed(2);
		var vector2 = new Vector2(this.velocity*x,this.velocity*y);
		this.position = this.position.add(vector2);
	},
	turn:function(){
		var angle = Math.PI*1.5;
		return angle;
	},
	think:function(){
		if(this.position.)
	},
	view:function(){
		if(!TD.ctx)return;
		this.think();
		var ctx = TD.ctx;
		ctx.fillStyle = 'rgba(0,0,0,1)';
		ctx.beginPath();
		ctx.arc(this.position.x, this.position.y, 5, 0, Math.PI * 2, true);
		ctx.closePath();
		ctx.fill();
	}
}