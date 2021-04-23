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

- fill() 填充：`context.fill()`
- stroke() 描边: `context.stroke()`
