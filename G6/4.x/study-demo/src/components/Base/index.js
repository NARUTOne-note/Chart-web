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
        default: ['drag-canvas', 'zoom-canvas']
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
          stroke: "#e2e2e2"
        }
      }
    });
    
    graph.data(data);
    graph.render();
  }, []);

  return (
    <div>
      <h2>Base 示例</h2>
      <div ref={ref} className="demo-box-ref"></div>
    </div>
  );
};

export default Base;