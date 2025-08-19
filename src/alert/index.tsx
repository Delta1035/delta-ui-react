import React,{ PropsWithChildren } from 'react';
import t from 'prop-types';
export interface AlertProps {
  /**
   * @description Alert 类型
   * @default 'info'
   */
  kind?: 'info' | 'positive' | 'negative' | 'warning';
}

export type KindMap = Record<Required<AlertProps>['kind'],string>;

const prefixClass = 'hp-alert';

const kinds: KindMap = {
  info: '#5352ED',
  positive: '#2ED573',
  negative: '#FF4757',
  warning: '#FFA502',
};

const Alert: React.FC<PropsWithChildren<AlertProps>> = ({ children,kind = 'info',...rest }) => {
  return <div className={prefixClass} style={{ background: kinds[kind] }} {...rest}>
    {children}
  </div>;
};

Alert.propTypes = {
  kind: t.oneOf(['info','positive','negative','warning']),
};
export default Alert;