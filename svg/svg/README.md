# svg

> 根元素，定义画图区域

## 基本属性

- 元素的渲染顺序，越后面的元素越可见
- svg文件使用
  
  - 如果HTML是HTML5并且浏览器支持HTML5，同样可以直接嵌入SVG
  - 可以通过 object 元素引用SVG文件 `<object data="image.svg" type="image/svg+xml" />`
  - 使用 iframe 元素引用SVG文件 `<iframe src="image.svg"></iframe>`
  - 最后SVG可以通过JavaScript动态创建并注入到HTML DOM中。 这样具有一个优点，可以对浏览器使用替代技术，在不能解析SVG的情况下，可以替换创建的内容
  
## 参考

- [svg MDN](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial)
