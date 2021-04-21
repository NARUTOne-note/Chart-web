# svg

> 根容器元素，定义画图区域，拥有独立的视口和坐标系统。

```html
<!-- 一个100*100px的SVG画布, 200*200的画布上显示, 相当于放大2倍 -->
<svg width="200" height="200" viewBox="0 0 100 100"></svg>
```

## 属性

> [svg属性](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/svg#%E5%B1%9E%E6%80%A7): 全局属性 + 专属属性

- `version`: SVG 文档遵循规范版本，只有1.0 和 1.1.这两个有效的选择
- `baseProfile`: none(默认) | full | basic | tiny ，SVG 语言概述
- `x`: 该属性在用户坐标系统中标识了一个x轴坐标。本坐标的确切效果依赖于每个元素
  如果没有指定这个属性，效果相当于值被设置为0，除了`<filter>`元素以及`<mask>`元素；这两个元素的x默认值为-10%。
- `y`: 同`x`
- `width`: 引用元素的矩形区域的宽度，`<svg>`的宽度默认是100%，而`<filter>`元素以及`<mask>`元素的默认宽度是120%。
    `length ::= number ("em" | "ex" | "px" | "in" | "cm" | "mm" | "pt" | "pc" | "%")?`
- `height`: 同 `width`
- `viewBox`: 允许指定一个给定的一组图形伸展以适应特定的容器元素; viewBox属性的值是一个包含4个参数的列表 min-x, min-y, width and height， 以空格或者逗号分隔开
- `preserveAspectRatio`: none(默认) 是否强制进行统一缩放

## 参考

- [svg MDN](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial)
