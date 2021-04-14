import React, {useEffect} from 'react';
import G6 from "@antv/g6";

const data = {
  nodes: [
    {
      id: "node1",
      label: "Circle1",
      x: 150,
      y: 150
    },
    {
      id: "node2",
      label: "Circle2",
      x: 400,
      y: 150
    }
  ],
  edges: [
    {
      source: "node1",
      target: "node2"
    }
  ]
};

const Base = () => {
  const ref = React.useRef(null);
  useEffect(() => {
    // 实例化 Minimap
    const minimap = new G6.Minimap();
    const graph = new G6.Graph({
      container: ref.current,
      width: 800,
      height: 500,
      plugins: [minimap],
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
        shape: "circle",
        size: [100],
        color: "#5B8FF9",
        style: {
          fill: "#9EC9FF",
          lineWidth: 3
        },
        labelCfg: {
          style: {
            fill: "#fff",
            fontSize: 20
          }
        }
      },
      defaultEdge: {
        style: {
          stroke: "#e2e2e2",
          lineWidth: 2
        }
      },
      // 节点在各状态下的样式
      nodeStateStyles: {
        // hover 状态为 true 时的样式
        hover: {
          fill: '#6efb61',
        },
        // click 状态为 true 时的样式
        click: {
          stroke: '#6efb61',
          lineWidth: 3,
        },
      },
      // 边在各状态下的样式
      edgeStateStyles: {
        // click 状态为 true 时的样式
        click: {
          stroke: 'red',
        },
      },
    });
    
    graph.data(data);
    graph.render();

    // 监听鼠标进入节点
    graph.on('node:mouseenter', (e) => {
      const nodeItem = e.item;
      // 设置目标节点的 hover 状态 为 true
      graph.setItemState(nodeItem, 'hover', true);
    });
    // 监听鼠标离开节点
    graph.on('node:mouseleave', (e) => {
      const nodeItem = e.item;
      // 设置目标节点的 hover 状态 false
      graph.setItemState(nodeItem, 'hover', false);
    });
    // 监听鼠标点击节点
    graph.on('node:click', (e) => {
      // 先将所有当前有 click 状态的节点的 click 状态置为 false
      const clickNodes = graph.findAllByState('node', 'click');
      clickNodes.forEach((cn) => {
        graph.setItemState(cn, 'click', false);
      });
      const nodeItem = e.item;
      // 设置目标节点的 click 状态 为 true
      graph.setItemState(nodeItem, 'click', true);
    });
    // 监听鼠标点击节点
    graph.on('edge:click', (e) => {
      // 先将所有当前有 click 状态的边的 click 状态置为 false
      const clickEdges = graph.findAllByState('edge', 'click');
      clickEdges.forEach((ce) => {
        graph.setItemState(ce, 'click', false);
      });
      const edgeItem = e.item;
      // 设置目标边的 click 状态 为 true
      graph.setItemState(edgeItem, 'click', true);
    });

    // 监听画板点击
    graph.on('canvas:click', (e) => {
      // 将所有当前有 click 状态的节点的 click 状态置为 false
      const clickNodes = graph.findAllByState('node', 'click');
      clickNodes.forEach((cn) => {
        graph.setItemState(cn, 'click', false);
      });

      // 将所有当前有 click 状态的边的 click 状态置为 false
      const clickEdges = graph.findAllByState('edge', 'click');
      clickEdges.forEach((ce) => {
        graph.setItemState(ce, 'click', false);
      });
    })
  }, []);

  return (
    <div>
      <h3>Base 示例</h3>
      <div ref={ref} className="demo-box-ref"></div>
    </div>
  );
};

export default Base;