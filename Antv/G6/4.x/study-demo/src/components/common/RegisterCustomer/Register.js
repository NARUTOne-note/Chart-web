import React, {useEffect} from 'react';
import G6 from "@antv/g6";

const RegisterG6 = (props) => {
  useEffect(() => {
    if (props.type === 'node') {
      G6.registerNode(props.name, props.config, props.extend);
    } else if (props.type === 'edge') {
      G6.registerEdge(props.name, props.config, props.extend);
    } else if (props.type === 'combo') {
      G6.registerCombo(props.name, props.config, props.extend);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
};

export default RegisterG6
