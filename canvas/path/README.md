# path

> 线条绘画

- 移动画笔，使画笔移动至绘画的开始处
- 确定第一笔的停止点
- 规划好之后，选择画笔（包括画笔的粗细和颜色等）
- 确定绘制

```html
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <title>从线条开始</title>
</head>
<body>
<div id="canvas-warp">
    <canvas id="canvas" style="border: 1px solid #aaaaaa; display: block; margin: 50px auto;">
        当前浏览器不支持Canvas！
    </canvas>
</div>

<script>
    window.onload = function(){
        var canvas = document.getElementById("canvas");
        canvas.width = 800;
        canvas.height = 600;
        var context = canvas.getContext("2d");

        context.moveTo(100,100);
        context.lineTo(300,300);
        context.lineTo(100,500);
        context.lineTo(600,600);
        context.lineWidth = 5;
        context.strokeStyle = "#AA394C";
        context.stroke();
    }
</script>
</body>
</html>
```

## API

> `var context = canvas.getContext("2d");` 获取画笔 context

计划如何画：规划状态

`moveTo()`, `lineTo()`都只是状态而已，是规划，还没有开始画

- moveTo() 移动画笔: `context.moveTo(100,100)`
- lineTo() 笔画停点: `context.lineTo(100,100)`

选择画笔：粗细，颜色等; 当前也是状态，还没开始画

- lineWidth 画笔粗细：`context.lineWidth = 5`
- strokeStyle 画笔样式：`context.strokeStyle = "#AA394C"`

开始绘制

> 先配置状态设置，最后执行绘制

- fill() 填充：`context.fill()`
- stroke() 描边: `context.stroke()`

绘制状态起始点

> 开始绘制前都务必要使用`beginPath()`，为了代码的完整性，建议大家在每次绘制结束后使用`closePath()`

- beginPath()：`context.beginPath()` 是绘制设置状态的起始点，它之后代码设置的绘制状态的作用域结束于绘制方法`stroke()`、`fill()`或者`closePath()`
- closePath(): `context.closePath()` 绘制设置状态的结束点，自动闭合

内置形状shape

> 线条形状

- react(): 矩形 `context.rect(x,y,width,height)`
