/*
 *@depend Tool.js
 *@depend Vector2.js
 *@depend Appearance.js
 *怪物模型类
 *
 */
var Mouse = function(config){
	this.position = config.position||Vector2.zero;
	this.velocity = config.velocity||new Vector2(0,1/10);
	this.acceleration = config.acceleration||Vector2.zero;
	this.age = config.age||0;
	this.life = config.life||1000;
	this.appearance = new Appearance();
	this.id = config.id;
}
Mouse.prototype = {
	kill:function(){
		MOUSE_SHOW_DATA[this.id]=null;
	},
	move:function(){
		this.position = this.position.add(this.velocity)
	},
	isSurpass:function(w,h){
		if(this.position.x>w||this.position.y>h){
			return true;
		}else{
			return false;
		}
	}
}