import React, {useRef, useEffect} from 'react';
import G6 from "@antv/g6";

const data = {
  nodes: [
    { id: '0', label: '0' },
    { id: '1', label: '1' },
    { id: '2', label: '2' },
    { id: '3', label: '3' },
    { id: '4', label: '4' },
  ],
  edges: [
    { source: '0', target: '1' },
    { source: '0', target: '2' },
    { source: '0', target: '3' },
    { source: '0', target: '4' },
    { source: '1', target: '2' },
    { source: '1', target: '3' },
  ],
};

const data2 = {
  nodes: [
    { id: '0', label: '0' },
    { id: '1', label: '1' },
    { id: '2', label: '2' },
  ],
  edges: [
    { source: '0', target: '1' },
    { source: '0', target: '2' },
  ],
};

const LayoutGraph = () => {
  const ref = useRef(null);
  useEffect(() => {
    const graph = new G6.Graph({
      container: ref.current, // String | HTMLElement，必须，容器 id 或容器本身
      width: 300, // Number，必须，图的宽度
      height: 300, // Number，必须，图的高度
      animate: true, // Boolean，可选，切换布局时是否使用动画过度
    });

    // 读取数据和渲染
    graph.data(data);
    graph.render();

    // 2000 ms 后切换为允许节点重叠的 force 布局
    setTimeout(() => {
      graph.updateLayout('force'); // 参数为 String 代表布局名称
    }, 5000);

    // 4000 ms 后切换为不允许节点重叠且边长为 100 的 force 布局。
    setTimeout(() => {
      graph.updateLayout({
        type: 'force', // 布局名称
        preventOverlap: true, // 布局参数，是否允许重叠
        nodeSize: 40, // 布局参数，节点大小，用于判断节点是否重叠
        linkDistance: 100, // 布局参数，边长
      });
    }, 8000);

    // 6000 ms 后切换数据为 data2
    setTimeout(() => {
      graph.changeData(data2);
    }, 12000);
  }, [])
  return (
    <div>
      <h3>布局 示例</h3>
      <div ref={ref} className="demo-box-ref"></div>
    </div>
  );
};

export default LayoutGraph;