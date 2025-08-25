(self.webpackChunkdelta_ui_react=self.webpackChunkdelta_ui_react||[]).push([[761],{86658:function(n,e,t){"use strict";t.r(e),t.d(e,{demos:function(){return y}});var s={};t.r(s);var a={};t.r(a);var r=t(90228),o=t.n(r),p=t(87999),l=t.n(p),i=t(52136),d=t.t(i,2),f=t(13638),_=t(40507),y={"alert-demo-basic":{component:i.memo(i.lazy(function(){return t.e(819).then(t.bind(t,57198))})),asset:{type:"BLOCK",id:"alert-demo-basic",refAtomIds:["alert"],dependencies:{"index.tsx":{type:"FILE",value:t(76833).Z},react:{type:"NPM",value:"19.1.1"},"../style.ts":{type:"FILE",value:t(33568).Z},"...tsx":{type:"FILE",value:t(96797).Z},"prop-types":{type:"NPM",value:"15.8.1"},"./index.less":{type:"FILE",value:t(29339).Z}},entry:"index.tsx"},context:{"../style.ts":a,"...tsx":f,"./index.less":s,react:d,"/home/ubuntu/Desktop/delta/op-projects/react-projects/happy-ui/src/alert/style/index.ts":a,"/home/ubuntu/Desktop/delta/op-projects/react-projects/happy-ui/src/alert/index.tsx":f,"prop-types":_,"/home/ubuntu/Desktop/delta/op-projects/react-projects/happy-ui/src/alert/style/index.less":s},renderOpts:{compile:function(){var m=l()(o()().mark(function c(){var v,h=arguments;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,t.e(413).then(t.bind(t,85413));case 2:return u.abrupt("return",(v=u.sent).default.apply(v,h));case 3:case"end":return u.stop()}},c)}));function x(){return m.apply(this,arguments)}return x}()}}}},13638:function(n,e,t){"use strict";t.r(e);var s=t(26068),a=t.n(s),r=t(67825),o=t.n(r),p=t(52136),l=t(40507),i=t.n(l),d=t(69979),f=["children","kind"],_="hp-alert",y={info:"#5352ED",positive:"#2ED573",negative:"#FF4757",warning:"#FFA502"},m=function(c){var v=c.children,h=c.kind,j=h===void 0?"info":h,u=o()(c,f);return(0,d.jsx)("div",a()(a()({className:_,style:{background:y[j]}},u),{},{children:v}))};m.propTypes={kind:i().oneOf(["info","positive","negative","warning"])},e.default=m},59899:function(n,e,t){"use strict";t.r(e),t.d(e,{texts:function(){return s}});const s=[{value:"\u8B66\u544A\u63D0\u793A\uFF0C\u5C55\u73B0\u9700\u8981\u5173\u6CE8\u7684\u4FE1\u606F\u3002",paraId:0,tocIndex:0},{value:" ",paraId:1}]},76833:function(n,e){"use strict";e.Z=`import React from 'react';
import '../style';
import Alert from '..';

export default () => <Alert kind="warning">\u8FD9\u662F\u4E00\u6761\u8B66\u544A\u63D0\u793A</Alert>;`},96797:function(n,e){"use strict";e.Z=`import React,{ PropsWithChildren } from 'react';
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
export default Alert;`},29339:function(n,e){"use strict";e.Z=`@popupPrefix: hp-alert;

.@{popupPrefix} {
    padding: 20px;
    background: white;
    border-radius: 3px;
    color: white;
}`},33568:function(n,e){"use strict";e.Z=`// \u7528\u4E8E\u6309\u9700\u52A0\u8F7D\u6837\u5F0F\uFF0C\u7BA1\u7406\u6837\u5F0F\u4F9D\u8D56

import './index.less';
`},67825:function(n,e,t){var s=t(64382);function a(r,o){if(r==null)return{};var p=s(r,o),l,i;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(r);for(i=0;i<d.length;i++)l=d[i],!(o.indexOf(l)>=0)&&Object.prototype.propertyIsEnumerable.call(r,l)&&(p[l]=r[l])}return p}n.exports=a,n.exports.__esModule=!0,n.exports.default=n.exports},64382:function(n){function e(t,s){if(t==null)return{};var a={},r=Object.keys(t),o,p;for(p=0;p<r.length;p++)o=r[p],!(s.indexOf(o)>=0)&&(a[o]=t[o]);return a}n.exports=e,n.exports.__esModule=!0,n.exports.default=n.exports}}]);
