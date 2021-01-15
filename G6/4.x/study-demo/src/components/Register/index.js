import React, {useEffect, useRef} from 'react';
import G6 from "@antv/g6";
import {
  DiamondNode, 
  CircleAnimateNode, 
  DomNode,
  GrowthLine
} from '../common/RegisterCustomer';

const data = {
  nodes: [
    { id: 'node1', x: 50, y: 80, type: 'diamond-node' }, // 最简单的
    { id: 'node2', x: 150, y: 80, type: 'diamond-node', size: [50, 100] }, // 添加宽高
    { id: 'node3', x: 250, y: 80, color: 'red', type: 'diamond-node' }, // 添加颜色
    { id: 'node4', x: 350, y: 80, label: '菱形', type: 'diamond-node' }, // 附加文本
    { id: 'node5', x: 450, y: 80, type: 'circle-animate-node' }, // 动画
    { id: 'node6', x: 550, y: 80, type: 'dom-node', label: '节点' }, // dom
    { id: 'c1', x: 50, y: 280, type: 'circle', size: 20, comboId: 'combo1' }, // dom
    { id: 'c2', x: 250, y: 280, type: 'circle', size: 30, comboId: 'combo1' }, // dom
  ],
  edges: [
    {
      id: 'e1',
      type: "growth-line",
      // type: 'line',
      source: 'c1',
      target: 'c2',
    }
  ],
  combos: [
    {
      id: 'combo1',
      label: 'combo name',
      padding: 16,
    }
  ]
}

const Register = () => {
  const ref = useRef(null);
  useEffect(() => {
    const graph = new G6.Graph({
      container: ref.current,
      width: 800,
      height: 500,
      plugins: [],
      // renderer: 'canvas',
      renderer: 'svg', // 存在dom 节点渲染使用
      modes: {
        default: ['drag-canvas', 'zoom-canvas', 'drag-node',
          {
            type: 'tooltip', // 提示框
            formatText(model) {
              // 提示框文本内容
              const text = 'label: ' + model.label;
              return text;
            },
          }
        ]
      },
      defaultNode: {
        type: "circle",
        style: {
          fill: '#61dafb',
          stroke: '#eaff8f',
          lineWidth: 2,
        }
      },
      defaultEdge: {
        type: 'line',
        style: {
          stroke: "#e2e2e2",
          lineWidth: 2
        }
      },
      defaultCombo: {
        style: {
          fill: '#steelblue',
          stroke: '#eaff8f',
          lineWidth: 5,
        }
      }
    });

    graph.data(data);
    graph.render();
  }, []);
  return (
    <div>
      <h3>自定义 节点、边 示例</h3>
      <DiamondNode />
      <CircleAnimateNode />
      <DomNode />
      <GrowthLine />
      <div ref={ref} className="demo-box-ref"></div>
    </div>
  );
};

export default Register;