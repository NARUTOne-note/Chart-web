import React from 'react';
import RegisterG6 from './Register';

const GrowthLine = () => {
  const lineConfig = {
    draw(cfg, group) {
      const { startPoint, endPoint } = cfg;
      const keyShape = group.addShape('path', {
        attrs: {
          path: [
            ['M', startPoint.x, startPoint.y],
            ['L', endPoint.x, endPoint.y],
          ],
          stroke: 'steelblue',
          lineWidth: 3,
          startArrow: true,
          endArrow: {
            // 自定义箭头指向(0, 0)，尾部朝向 x 轴正方向的 path
            path: 'M 0,-5 L 0,5 L 10,0 Z',
            // 箭头的偏移量，负值代表向 x 轴正方向移动
            d: 20,
            // v3.4.1 后支持各样式属性
            fill: '#333',
            stroke: '#666',
            opacity: 0.8,
            // ...
          },
        },
        // must be assigned in G6 3.3 and later versions. it can be any value you want
        name: 'path-shape',
      });
      return keyShape;
    },
    afterDraw(cfg, group) {
      const shape = group.get('children')[0];
      const length = shape.getTotalLength();

      // 获取路径图形的中点坐标
      const midPoint = shape.getPoint(0.5);
      // 在中点增加一个矩形，注意矩形的原点在其左上角
      group.addShape('rect', {
        attrs: {
          width: 10,
          height: 10,
          fill: '#f00',
          // x 和 y 分别减去 width / 2 与 height / 2，使矩形中心在 midPoint 上
          x: midPoint.x - 5,
          y: midPoint.y - 5,
        },
      });

      // 加动画
      shape.animate(
        (ratio) => {
          const startLen = ratio * length;
          const cfg = {
            lineDash: [startLen, length - startLen],
          };
          return cfg;
        },
        {
          repeat: true,
          duration: 2000,
        },
      );
    },
  };

  return (
    <RegisterG6 type="edge" name="growth-line" extend="cubic" config={lineConfig}/>
  );
};

export default GrowthLine;