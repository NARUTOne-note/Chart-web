import React, { useEffect } from 'react';
import { Graph, Shape } from '@antv/x6';
import { baseData } from '../../mock/';
import './index.css';

const BaseDemo = () => {

  useEffect(() => {
    const rect1 = new Shape.Rect({
      id: 'r1',
      x: 340,
      y: 140,
      width: 100,
      height: 40,
      label: 'rect', 
      zIndex: 2,
      ports: { // 连接锚点
        groups: {
          in: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 6,
                magnet: true,
                stroke: '#31d0c6',
                strokeWidth: 2,
                fill: '#fff',
              },
            },
          },
          out: {
            position: 'top',
            attrs: {
              circle: {
                r: 6,
                magnet: true,
                stroke: '#31d0c6',
                strokeWidth: 2,
                fill: '#fff',
              },
            },
          },
        },
        items: [
          {
            id: 'port1',
            group: 'in',
          },
          {
            id: 'port2',
            group: 'in',
          },
          {
            id: 'port3',
            group: 'in',
          },
          {
            id: 'port4',
            group: 'out',
          },
          {
            id: 'port5',
            group: 'out',
          },
        ],
      },
    })
    
    const circle1 = new Shape.Circle({
      id: 'c1',
      x: 380,
      y: 300,
      width: 60,
      height: 60,
      label: 'circle', 
      zIndex: 2,
    })
    
    const edge1 = new Shape.Edge({
      id: 'e1',
      source: {
        cell: rect1,
        port: 'port1'
      },
      target: circle1,
      zIndex: 1,
      vertices: [ // 途径点
        { x: 260, y: 200 }, 
        { x: 300, y: 260 },
      ],
      router: 'orth', // 路由处理
      connector: { // 圆弧修饰
        name: 'rounded',
        args: {},
      },
    })

    edge1.attr({
      line: {
        stroke: '#fff',
        sourceMarker: {
          name: 'ellipse', // 椭圆
          rx: 10, // 椭圆箭头的 x 半径
          ry: 6,  // 椭圆箭头的 y 半径
        },
        targetMarker: {
          tagName: 'path',
          fill: 'yellow',  // 使用自定义填充色
          stroke: 'green', // 使用自定义边框色
          strokeWidth: 2,
          d: 'M 20 -10 0 0 20 10 Z',
        },
      },
    })

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
      minimap: {
        width: 200,
        height: 200,
        enabled: true,
        container: document.getElementById('mini-map'),
      },
      embedding: { // 通过交互创建嵌套
        enabled: true,
        findParent({ node }) {
          const bbox = node.getBBox()
          return this.getNodes().filter((node) => {
            // 只有 data.parent 为 true 的节点才是父节点
            const data = node.getData()
            if (data && data.parent) {
              const targetBBox = node.getBBox()
              return bbox.isIntersectWithRect(targetBBox)
            }
            return false
          })
        }
      }
    });
    graph.fromJSON(baseData)
    graph.addNode(rect1)
    graph.addNode(circle1)
    graph.addEdge(edge1)

    // 父子群组
    const child = graph.addNode({
      x: 80,
      y: 400,
      width: 60,
      height: 40,
      zIndex: 10,
      label: 'Child',
      attrs: {
        body: {
          fill: 'green',
        },
        label: {
          fill: '#fff',
        },
      },
    })
    const parent = graph.addNode({
      x: 168,
      y: 380,
      width: 200,
      height: 100,
      zIndex: 1,
      label: 'Parent',
      data: {
        parent: true,
      },
    })    
    // parent.addChild(child)
  }, [])

  return (
    <div className="graph-box">
      <h3>基础示例</h3>
      <div id="base-graph"></div>
      <div id="mini-map"></div>
    </div>
  );
};

export default BaseDemo;
