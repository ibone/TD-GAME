/*
 *
 *模块加载配置
 *
 */
 
Do.add('Mouse', {path: 'Mouse.js', type: 'js', requires: ['Vector2','Tool','Appearance']});
Do.add('Vector2', {path: 'Vector2.js', type: 'js'});
Do.add('Tool', {path: 'Tool.js', type: 'js'});
Do.add('Appearance', {path: 'Appearance.js', type: 'js'});
Do.add('Main', {path: 'Main.js', type: 'js', requires: ['Mouse','Vector2','Tool','Appearance']});