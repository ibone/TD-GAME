/*
 *@depend Tool.js
 *@depend Vector2.js
 *@depend Appearance.js
 *怪物模型类
 *
 */
var Mouse = function(config){
	if(config){
		this.position = config.position||Vector2.zero;
		this.velocity = config.velocity||Vector2.zero;
		this.acceleration = config.acceleration||Vector2.zero;
		this.age = config.age||0;
		this.life = config.life||1000;
		this.appearance = new Appearance();
	}else{
		this.position = Vector2.zero;
		this.velocity = Vector2.zero;
		this.acceleration = Vector2.zero;
		this.age = 0;
		this.life = 1000;
		this.appearance = new Appearance();
	}
}
Mouse.prototype = {
	kill:function(){
		
	}
}