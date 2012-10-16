/*
 *
 *模块加载配置
 *
 */
var timestamp = Math.random();
var timestamp1 = 55;
Do.add('Mouse', {path: 'Mouse.js?'+timestamp1, type: 'js', requires: ['Vector2','Tool']});
Do.add('Wall', {path: 'Wall.js?'+timestamp1, type: 'js', requires: ['Tool']});
Do.add('Vector2', {path: 'Vector2.js', type: 'js'});
Do.add('Tool', {path: 'Tool.js', type: 'js'});
Do.add('Main', {path: 'Main.js?'+timestamp1, type: 'js', requires: ['Wall','Mouse','Vector2','Tool']});