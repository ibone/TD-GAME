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
	this.angle = Math.PI*1.5;
	this.size = 5;
}
Mouse.prototype = {
	kill:function(){
		TD.module[this.id]=null;
	},
	move:function(){
		var x = Math.cos(this.angle).toFixed(2);
		var y = Math.sin(this.angle).toFixed(2);
		var vector2 = new Vector2(this.velocity*x,this.velocity*y);
		this.position = this.position.add(vector2);
	},
	turn:function(){
		this.angle = 1;
	},
	//行为驱动（怪物会思考）
	think:function(){
		
	},
	//查看周围是否有Wall
	scan:function(){
		//以怪物为轴心的位置
		var scanPositon = new Vector2(this.visibleRange*Math.cos(this.angle),-this.visibleRange*Math.sin(this.angle));
		//以canvas节点左上角为轴心的位置
		scanPositon = this.position.add(scanPositon);
		var findWall = function(){
			var scanLine = [];
			TD.ctx.getImageData(scanPositon.x,scanPositon.y,1,1)
		}
		if(findWall){
			
		}
	},
	view:function(){
		if(!TD.ctx)return;
		this.think();
		var ctx = TD.ctx;
		ctx.fillStyle = 'rgba(0,0,0,1)';
		ctx.beginPath();
		ctx.arc(this.position.x, this.position.y, this.size, 0, Math.PI * 2, true);
		ctx.closePath();
		ctx.fill();
	}
}