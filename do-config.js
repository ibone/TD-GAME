/*
 *
 *模块加载配置
 *
 */
var timestamp = Math.random();
var timestamp1 = 20;
Do.add('Mouse', {path: 'Mouse.js?'+timestamp1, type: 'js', requires: ['Vector2','Tool','Appearance']});
Do.add('Vector2', {path: 'Vector2.js', type: 'js'});
Do.add('Tool', {path: 'Tool.js', type: 'js'});
Do.add('Appearance', {path: 'Appearance.js?'+timestamp1, type: 'js'});
Do.add('Main', {path: 'Main.js?'+timestamp, type: 'js', requires: ['Mouse','Vector2','Tool','Appearance']});