import React, { useEffect } from 'react';
import { Graph, Interp } from '@antv/x6';

Graph.registerNode('custom-rect', {
  inherit: 'rect', // 继承自 Shape.Rect
  width: 300, // 默认宽度
  height: 40, // 默认高度
  attrs: {
    body: {
      rx: 10, // 圆角矩形
      ry: 10,
      strokeWidth: 1,
      fill: '#5755a1',
      stroke: '#5755a1',
    },
    label: {
      fill: '#fff',
      fontSize: 18,
      refX: 10, // x 轴偏移，类似 css 中的 margin-left
      textAnchor: 'left', // 左对齐
    }
  },
});
Graph.registerEdge(
  'custom-edge', // 边名称
  {
    // 基类
    inherit: 'edge',
    // 属性样式
    attrs: {
      line: {
        stroke: '#5755a1',
      },
    },
    // 默认标签
    defaultLabel: {
      markup: [
        {
          tagName: 'rect',
          selector: 'body',
        },
        {
          tagName: 'text',
          selector: 'label',
        },
      ],
      attrs: {
        label: {
          fill: 'black',
          fontSize: 14,
          textAnchor: 'middle',
          textVerticalAnchor: 'middle',
          pointerEvents: 'none',
        },
        body: {
          ref: 'label',
          fill: 'white',
          stroke: '#5755a1',
          strokeWidth: 2,
          rx: 4,
          ry: 4,
          refWidth: '140%',
          refHeight: '140%',
          refX: '-20%',
          refY: '-20%',
        },
      },
      position: {
        distance: 100, // 绝对定位
        options: {
          absoluteDistance: true,
        },
      },
    },
  },
);

const RegisterDemo = () => {

  useEffect(() => {
    const graph = new Graph({
      container: document.getElementById('base-graph'),
      width: 900,
      height: 620,
      panning: { // 画布平移
        enabled: true,
        eventTypes: ['leftMouseDown']
      },
      mousewheel: true, // 画布缩放
      background: {
        color: '#282c34', // 设置画布背景颜色
      },
      selecting: { // 支持选中
        enabled: true,
        showNodeSelectionBox: true,
      },
      snapline: { // 对齐线
        enabled: true,
      },
      grid: {
        type: 'dot',
        size: 10,      // 网格大小 10px
        visible: true, // 渲染网格背景
        args: { 
          color: '#e43', // 网格线/点颜色
          thickness: 1,     // 网格线宽度/网格点大小
        },
      },
    });
    graph.addNode({
      x: 100,
      y: 60,
      shape: 'custom-rect',
      label: 'My Custom Rect', // label 继承于基类的自定义选项
      tools: [
        { name: 'boundary' },
        {
          name: 'button-remove',  // 工具名称
          args: { x: 10, y: 10 }, // 工具对应的参数
        },
      ],
    });
    graph.addEdge({
      shape: 'custom-edge',
      labels: [
        {
          attrs: { text: { text: 'Custom Edge' } },
        },
      ],
      source: [40, 40],
      target: [320, 40],
    })

    const edge = graph.addEdge({
      attrs: {
        line: {
          stroke: '#e43'
        }
      },
      source: { x: 30, y: 80 },
      target: { x: 430, y: 80 },
      vertices: [{ x: 230, y: 160 }],
    })

    edge.appendLabel({
      attrs: {
        text: {
          text: '0.25',
        },
      },
      position: {
        distance: 0.25,
      },
    })

    edge.appendLabel({
      attrs: {
        text: {
          text: '150',
        },
      },
      position: {
        distance: 150,
      },
    })

    edge.appendLabel({
      attrs: {
        text: {
          text: '-100',
        },
      },
      position: {
        distance: -100,
      },
    })

    let currentTransitions = 0
    let oscillateToggle = false

    function contract() {
      edge.transition(
        'source',
        { x: 130, y: 80 },
        {
          delay: 1000,
          duration: 4000,
          timing: (time) => {
            return time <= 0.5 ? 2 * time : 2 * (1 - time)
          },
          interp: Interp.object,
        },
      )

      edge.transition(
        'target',
        { x: 330, y: 80 },
        {
          delay: 1000,
          duration: 4000,
          timing: (time) => {
            return time <= 0.5 ? 2 * time : 2 * (1 - time)
          },
          interp: Interp.object,
        },
      )

      oscillateToggle = true
    }

    function oscillate() {
      edge.transition(
        'source',
        { x: 30, y: 160 },
        {
          delay: 1000,
          duration: 4000,
          timing: (time) => {
            return time <= 0.5 ? 2 * time : 2 * (1 - time)
          },
          interp: Interp.object,
        },
      )

      edge.transition(
        'vertices/0',
        { x: 230, y: 80 },
        {
          delay: 1000,
          duration: 4000,
          timing: (time) => {
            return time <= 0.5 ? 2 * time : 2 * (1 - time)
          },
          interp: Interp.object,
        },
      )

      edge.transition(
        'target',
        { x: 430, y: 160 },
        {
          delay: 1000,
          duration: 4000,
          timing: (time) => {
            return time <= 0.5 ? 2 * time : 2 * (1 - time)
          },
          interp: Interp.object,
        },
      )

      oscillateToggle = false
    }

    edge.on('transition:start', () => {
      currentTransitions += 1
    })

    edge.on('transition:complete', () => {
      currentTransitions -= 1

      if (currentTransitions === 0) {
        if (oscillateToggle) {
          oscillate()
        } else {
          contract()
        }
      }
    })

    contract()
  }, [])

  return (
    <div>
      <h3>基础示例</h3>
      <div id="base-graph"></div>
    </div>
  );
};

export default RegisterDemo;