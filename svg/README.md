# svg

> 可缩放矢量图形，即SVG，是W3C XML的分支语言之一，用于标记可缩放的矢量图形；

加载慢是SVG的一个缺点。但是SVG也有自身的优点，比如它实现了DOM接口（比Canvas方便）。

```js
<svg version="1.1"
     baseProfile="full"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="red" />

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>
```

## 特性

- 元素的渲染顺序，越后面的元素越可见
- svg文件使用
  
  - 如果HTML是HTML5并且浏览器支持HTML5，同样可以直接嵌入SVG
  - 可以通过 object 元素引用SVG文件 `<object data="image.svg" type="image/svg+xml" />`
  - 使用 iframe 元素引用SVG文件 `<iframe src="image.svg"></iframe>`
  - 最后SVG可以通过JavaScript动态创建并注入到HTML DOM中。 这样具有一个优点，可以对浏览器使用替代技术，在不能解析SVG的情况下，可以替换创建的内容

## 坐标定位

> 以页面的左上角为(0,0)坐标点，坐标以像素为单位，x轴正方向是向右，y轴正方向是向下

```html
<!--[x, y] -->
<rect x="0" y="0" width="100" height="100" />
```

## 参考

- [SVG元素参考](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element)
- [SVG 属性参考](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute)
