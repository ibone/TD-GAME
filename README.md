TD-GAME
=======

一个塔防游戏

功能包括：
---------
  1. 路径寻址
  2. 碰撞事件
  3. 构图事件
  4. 单位生成

思考：
---------
> 一直使用像素点来做移动最小单位，在碰撞系统中，每颗像素附带的信息只有颜色信息，不能附带对象索引等其他附加信息,
> 如果新建一个二维数组，以该数组每个对象为最小单位，比如新建一个围墙，占据5个单位，对应到像素上是（5px*5px）*5,那么当
> 老鼠在移动的过程中，扫描到该围墙，则可以获取到围墙ID，优化计算效率