/*
 *@depend Tool.js
 *@depend Vector2.js
 *
 *怪物模型类
 *
 */
var Mouse = function(config){
	this.position = config.position||Vector2.zero;
	this.velocity = config.velocity||new Vector2(0,1/10);
	this.acceleration = config.acceleration||Vector2.zero;
	this.age = config.age||0;
	this.life = config.life||1000;
	this.id = config.id;
	this.view();
}
Mouse.prototype = {
	kill:function(){
		TD.module[this.id]=null;
	},
	move:function(){
		this.position = this.position.add(this.velocity);
		this.view();
	},
	isSurpass:function(w,h){
		if(this.position.x>w||this.position.y>h){
			return true;
		}else{
			return false;
		}
	},
	view:function(){
		if(!TD.ctx)return;
		var ctx = TD.ctx;
		ctx.fillStyle = mouse.appearance.color;
		ctx.beginPath();
		ctx.arc(this.position.x, this.position.y, 10, 0, Math.PI * 2, true);
		ctx.closePath();
		ctx.fill();
	}
}