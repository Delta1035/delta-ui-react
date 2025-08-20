(self.webpackChunkhappy_ui=self.webpackChunkhappy_ui||[]).push([[761],{89295:function(n,t,e){"use strict";var o;e.r(t),e.d(t,{demos:function(){return E}});var a=e(90228),_=e.n(a),r=e(87999),p=e.n(r),s=e(52136),u=e(27507),i=e(96974),m=e(40507),D=e.n(m),h=e(47890),E={"alert-demo-basic":{component:s.memo(s.lazy(function(){return e.e(819).then(e.bind(e,53004))})),asset:{type:"BLOCK",id:"alert-demo-basic",refAtomIds:["alert"],dependencies:{"index.tsx":{type:"FILE",value:e(33896).Z},react:{type:"NPM",value:"19.1.1"},"...tsx":{type:"FILE",value:e(9339).Z},"../style.ts":{type:"FILE",value:e(17835).Z},"prop-types":{type:"NPM",value:"15.8.1"},"./index.less":{type:"FILE",value:e(24272).Z}},entry:"index.tsx"},context:{"...tsx":u,"../style.ts":i,"./index.less":h,react:o||(o=e.t(s,2)),"/home/ubuntu/Desktop/delta/op-projects/react-projects/happy-ui/src/alert/index.tsx":u,"/home/ubuntu/Desktop/delta/op-projects/react-projects/happy-ui/src/alert/style/index.ts":i,"prop-types":m,"/home/ubuntu/Desktop/delta/op-projects/react-projects/happy-ui/src/alert/style/index.less":h},renderOpts:{compile:function(){var y=p()(_()().mark(function f(){var c,v=arguments;return _()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(804).then(e.bind(e,804));case 2:return l.abrupt("return",(c=l.sent).default.apply(c,v));case 3:case"end":return l.stop()}},f)}));function d(){return y.apply(this,arguments)}return d}()}}}},27507:function(n,t,e){"use strict";e.r(t);var o=e(26068),a=e.n(o),_=e(67825),r=e.n(_),p=e(52136),s=e(40507),u=e.n(s),i=e(69979),m=["children","kind"],D="hp-alert",h={info:"#5352ED",positive:"#2ED573",negative:"#FF4757",warning:"#FFA502"},E=function(d){var f=d.children,c=d.kind,v=c===void 0?"info":c,P=r()(d,m);return(0,i.jsx)("div",a()(a()({className:D,style:{background:h[v]}},P),{},{children:f}))};E.propTypes={kind:u().oneOf(["info","positive","negative","warning"])},t.default=E},96974:function(n,t,e){"use strict";e.r(t);var o=e(47890)},47890:function(n,t,e){"use strict";e.r(t)},82882:function(n,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return o}});const o=[{value:"\u8B66\u544A\u63D0\u793A\uFF0C\u5C55\u73B0\u9700\u8981\u5173\u6CE8\u7684\u4FE1\u606F\u3002",paraId:0,tocIndex:0},{value:" ",paraId:1}]},33896:function(n,t){"use strict";t.Z=`import React from 'react';
import '../style';
import Alert from '..';

export default () => <Alert kind="warning">\u8FD9\u662F\u4E00\u6761\u8B66\u544A\u63D0\u793A</Alert>;`},9339:function(n,t){"use strict";t.Z=`import React,{ PropsWithChildren } from 'react';
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
export default Alert;`},24272:function(n,t){"use strict";t.Z=`@popupPrefix: hp-alert;

.@{popupPrefix} {
    padding: 20px;
    background: white;
    border-radius: 3px;
    color: white;
}`},17835:function(n,t){"use strict";t.Z=`// \u7528\u4E8E\u6309\u9700\u52A0\u8F7D\u6837\u5F0F\uFF0C\u7BA1\u7406\u6837\u5F0F\u4F9D\u8D56

import './index.less';
`},67825:function(n,t,e){var o=e(64382);function a(_,r){if(_==null)return{};var p=o(_,r),s,u;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(_);for(u=0;u<i.length;u++)s=i[u],!(r.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(_,s)&&(p[s]=_[s])}return p}n.exports=a,n.exports.__esModule=!0,n.exports.default=n.exports},64382:function(n){function t(e,o){if(e==null)return{};var a={},_=Object.keys(e),r,p;for(p=0;p<_.length;p++)r=_[p],!(o.indexOf(r)>=0)&&(a[r]=e[r]);return a}n.exports=t,n.exports.__esModule=!0,n.exports.default=n.exports}}]);
