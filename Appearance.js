/*
 *@depend Tool.js
 *@depend Vector2.js
 *
 *模型外表类
 *
 */
var Appearance = function(){
	var r = Math.floor(Math.random()*255),
		g = Math.floor(Math.random()*255),
		b = Math.floor(Math.random()*255);
	this.color = 'rgba('+r+','+g+','+b+',1)';
	this.size = 10
}
