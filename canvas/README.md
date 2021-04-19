# Canvas

> `HTML5`规范中支持的画布`位图技术`: `<canvas />`

```html
<!doctype html>
<html lang="zh">
<head>
<meta charset="UTF-8">
<title>基础的HTML5页面</title> 
</head>

<body>
  <canvas id="canvas" style="border: 1px solid #aaaaaa; display: block; margin: 50px auto;" width="800" height="600">
  你的浏览器居然不支持Canvas？！赶快换一个吧！！
  </canvas>
  <script>
    window.onload = function(){
      // 获得canvas对象
      var canvas = document.getElementById("canvas");
      // 获得画笔(2D环境)
      var context = canvas.getContext("2d");
    }
  </script> 
</body> 

</html>
```

canvas中定义width、height跟在style中定义width和height是不同的，canvas标签的width和height是画布实际宽度和高度，绘制的图形都是在这个上面。
而style的width和height是canvas在浏览器中被渲染的高度和宽度。如果canvas的width和height没指定或值不正确，就被设置成默认值`(width:300px，height:150px)`。

## 参考

[canvas 截图](https://juejin.im/post/593f7df4ac502e006b587b44)
