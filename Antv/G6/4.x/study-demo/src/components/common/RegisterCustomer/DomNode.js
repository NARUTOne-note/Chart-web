import React from 'react';
import RegisterG6 from './Register';

const DomNode = () => {
  const nodeConfig = {
    draw(cfg, group){
      cfg.size = cfg.size || [100, 40];
      return group.addShape('dom', {
        attrs: {
          width: cfg.size[0],
          height: cfg.size[1],
          // 传入 DOM 的 html
          html: `
        <div style="background-color: #fff; border: 2px solid #5B8FF9; border-radius: 5px; width: ${
          cfg.size[0] - 5
        }px; height: ${cfg.size[1] - 5}px; display: flex;">
          <div style="height: 100%; width: 33%; background-color: #CDDDFD">
            <img alt="img" style="line-height: 100%; padding-top: 6px; padding-left: 8px;" src="https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Q_FQT6nwEC8AAAAAAAAAAABkARQnAQ" width="20" height="20" />  
          </div>
          <span style="margin:auto; padding:auto; color: #5B8FF9">${cfg.label}</span>
        </div>
          `,
        },
        draggable: true,
      });
    }
  };

  return (
    <RegisterG6 type="node" name="dom-node" config={nodeConfig} extend="single-node"/>
  );
};

export default DomNode;