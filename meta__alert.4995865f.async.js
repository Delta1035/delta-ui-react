(self.webpackChunkdelta_ui_react=self.webpackChunkdelta_ui_react||[]).push([[761],{86658:function(n,t,e){"use strict";e.r(t),e.d(t,{demos:function(){return y}});var o={};e.r(o);var s={};e.r(s);var r=e(90228),a=e.n(r),i=e(87999),d=e.n(i),l=e(52136),p=e.t(l,2),f=e(13638),h=e(40507),y={"alert-demo-basic":{component:l.memo(l.lazy(function(){return e.e(819).then(e.bind(e,57198))})),asset:{type:"BLOCK",id:"alert-demo-basic",refAtomIds:["alert"],dependencies:{"index.tsx":{type:"FILE",value:e(76833).Z},react:{type:"NPM",value:"19.1.1"},"...tsx":{type:"FILE",value:e(96797).Z},"../style.ts":{type:"FILE",value:e(33568).Z},"prop-types":{type:"NPM",value:"15.8.1"},"./index.less":{type:"FILE",value:e(29339).Z}},entry:"index.tsx"},context:{"...tsx":f,"../style.ts":s,"./index.less":o,react:p,"/home/runner/work/delta-ui-react/delta-ui-react/src/alert/index.tsx":f,"/home/runner/work/delta-ui-react/delta-ui-react/src/alert/style/index.ts":s,"prop-types":h,"/home/runner/work/delta-ui-react/delta-ui-react/src/alert/style/index.less":o},renderOpts:{compile:function(){var m=d()(a()().mark(function c(){var v,_=arguments;return a()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(413).then(e.bind(e,85413));case 2:return u.abrupt("return",(v=u.sent).default.apply(v,_));case 3:case"end":return u.stop()}},c)}));function x(){return m.apply(this,arguments)}return x}()}}}},13638:function(n,t,e){"use strict";e.r(t);var o=e(26068),s=e.n(o),r=e(67825),a=e.n(r),i=e(52136),d=e(40507),l=e.n(d),p=e(69979),f=["children","kind"],h="hp-alert",y={info:"#5352ED",positive:"#2ED573",negative:"#FF4757",warning:"#FFA502"},m=function(c){var v=c.children,_=c.kind,E=_===void 0?"info":_,u=a()(c,f);return(0,p.jsx)("div",s()(s()({className:h,style:{background:y[E]}},u),{},{children:v}))};m.propTypes={kind:l().oneOf(["info","positive","negative","warning"])},t.default=m},59899:function(n,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return o}});const o=[{value:"\u8B66\u544A\u63D0\u793A\uFF0C\u5C55\u73B0\u9700\u8981\u5173\u6CE8\u7684\u4FE1\u606F\u3002",paraId:0,tocIndex:0},{value:" ",paraId:1}]},76833:function(n,t){"use strict";t.Z=`import React from 'react';
import '../style';
import Alert from '..';

export default () => <Alert kind="warning">\u8FD9\u662F\u4E00\u6761\u8B66\u544A\u63D0\u793A</Alert>;`},96797:function(n,t){"use strict";t.Z=`import React,{ PropsWithChildren } from 'react';
import t from 'prop-types';
export interface AlertProps {
  /**
   * @description Alert \u7C7B\u578B
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
export default Alert;`},29339:function(n,t){"use strict";t.Z=`@popupPrefix: hp-alert;

.@{popupPrefix} {
    padding: 20px;
    background: white;
    border-radius: 3px;
    color: white;
}`},33568:function(n,t){"use strict";t.Z=`// \u7528\u4E8E\u6309\u9700\u52A0\u8F7D\u6837\u5F0F\uFF0C\u7BA1\u7406\u6837\u5F0F\u4F9D\u8D56

import './index.less';
`},67825:function(n,t,e){var o=e(64382);function s(r,a){if(r==null)return{};var i=o(r,a),d,l;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(r);for(l=0;l<p.length;l++)d=p[l],!(a.indexOf(d)>=0)&&Object.prototype.propertyIsEnumerable.call(r,d)&&(i[d]=r[d])}return i}n.exports=s,n.exports.__esModule=!0,n.exports.default=n.exports},64382:function(n){function t(e,o){if(e==null)return{};var s={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(o.indexOf(a)>=0)&&(s[a]=e[a]);return s}n.exports=t,n.exports.__esModule=!0,n.exports.default=n.exports}}]);
