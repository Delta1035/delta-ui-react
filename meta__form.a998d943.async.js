(self.webpackChunkdelta_ui_react=self.webpackChunkdelta_ui_react||[]).push([[143],{13050:function(t,e,n){"use strict";n.r(e),n.d(e,{demos:function(){return y}});var r={};n.r(r);var o={};n.r(o);var a=n(90228),s=n.n(a),i=n(87999),d=n.n(i),l=n(52136),c=n.t(l,2),h=n(54506),u=n(59257),y={"form-demo-basic":{component:l.memo(l.lazy(function(){return n.e(294).then(n.bind(n,26442))})),asset:{type:"BLOCK",id:"form-demo-basic",refAtomIds:["form"],dependencies:{"index.tsx":{type:"FILE",value:n(29534).Z},"../style/index.tsx":{type:"FILE",value:n(88682).Z},"...tsx":{type:"FILE",value:n(96993).Z},"./index.scss":{type:"FILE",value:n(26238).Z},"./form.tsx":{type:"FILE",value:n(81445).Z},react:{type:"NPM",value:"19.1.1"}},entry:"index.tsx"},context:{"../style/index.tsx":o,"...tsx":h,"./index.scss":r,"./form.tsx":u,"/home/runner/work/delta-ui-react/delta-ui-react/src/form/style/index.tsx":o,"/home/runner/work/delta-ui-react/delta-ui-react/src/form/index.tsx":h,"/home/runner/work/delta-ui-react/delta-ui-react/src/form/style/index.scss":r,"/home/runner/work/delta-ui-react/delta-ui-react/src/form/form.tsx":u,react:c},renderOpts:{compile:function(){var f=d()(s()().mark(function x(){var v,b=arguments;return s()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,n.e(662).then(n.bind(n,54662));case 2:return m.abrupt("return",(v=m.sent).default.apply(v,b));case 3:case"end":return m.stop()}},x)}));function p(){return f.apply(this,arguments)}return p}()}}}},59257:function(t,e,n){"use strict";n.r(e);var r=n(26068),o=n.n(r),a=n(67825),s=n.n(a),i=n(52136),d=n(69979),l=["initialValues","onFinish","onFinishFailed","className","style","children"],c=function(u){var y=u.initialValues,f=u.onFinish,p=u.onFinishFailed,x=u.className,v=u.style,b=u.children,_=s()(u,l),m=function(E){E.preventDefault();var P=new FormData(E.target),O={};P.forEach(function(F,g){O[g]=F});try{f==null||f(o()(o()({},y),O))}catch(F){p==null||p(F)}};return(0,d.jsx)("form",o()(o()({className:"happy-form ".concat(x||""),style:v,onSubmit:m},_),{},{children:b}))};e.default=c},54506:function(t,e,n){"use strict";n.r(e);var r=n(59257);e.default=r.default},48228:function(t,e,n){"use strict";n.r(e),n.d(e,{texts:function(){return r}});const r=[{value:"\u5177\u6709\u6570\u636E\u6536\u96C6\u3001\u6821\u9A8C\u548C\u63D0\u4EA4\u529F\u80FD\u7684\u8868\u5355\uFF0C\u5305\u542B\u590D\u9009\u6846\u3001\u5355\u9009\u6846\u3001\u8F93\u5165\u6846\u3001\u4E0B\u62C9\u9009\u62E9\u6846\u7B49\u5143\u7D20\u3002",paraId:0,tocIndex:0},{value:" ",paraId:1}]},29534:function(t,e){"use strict";e.Z=`import '../style/index.tsx';
import Form from '..';

export default () => (
  <Form
    initialValues={{ username: '', email: '' }}
    onFinish={(values) => {
      console.log('\u8868\u5355\u63D0\u4EA4:', values);
    }}
    onFinishFailed={(errorInfo) => {
      console.log('\u63D0\u4EA4\u5931\u8D25:', errorInfo);
    }}
  >
    <div style={{ marginBottom: 16 }}>
      <label>\u7528\u6237\u540D\uFF1A</label>
      <input type="text" name="username" />
    </div>
    <div style={{ marginBottom: 16 }}>
      <label>\u90AE\u7BB1\uFF1A</label>
      <input type="email" name="email" />
    </div>
    <button type="submit">\u63D0\u4EA4</button>
  </Form>
);`},81445:function(t,e){"use strict";e.Z=`import React,{ CSSProperties,FormEvent,HTMLAttributes,ReactNode } from "react";
import { RecordObject,DtSafeAny } from "@/types";

export interface FormDescription {
    /**
     * \u7EC4\u4EF6\u6837\u5F0F\u7C7B\u540D
     */
    className?: string;
    /**
     * \u7EC4\u4EF6\u6837\u5F0F
     */
    style?: CSSProperties;
    /**
     * \u63D0\u4EA4\u56DE\u8C03
     * @param values 
     * @returns 
     */
    onFinish?: (values: RecordObject) => void;
    /**
     * \u63D0\u4EA4\u6709\u9519\u8BEF\u65F6\u7684\u56DE\u8C03
     * @param errorInfo 
     * @returns 
     */
    onFinishFailed?: (errorInfo: DtSafeAny) => void;
    /**
     * \u8868\u5355\u521D\u59CB\u503C
     */
    initialValues?: RecordObject;
    /**
     * \u8868\u5355\u5185\u5BB9
     */
    children?: ReactNode;
}

export interface FormProps extends FormDescription,Omit<HTMLAttributes<HTMLFormElement>,'onSubmit' | 'children'> {

}

const Form = (props: FormProps) => {
    const { initialValues,onFinish,onFinishFailed,className,style,children,...restProps } = props;

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const values: RecordObject = {};

        formData.forEach((value,key) => {
            values[key] = value;
        });

        try {
            onFinish?.({ ...initialValues,...values });
        } catch (error) {
            onFinishFailed?.(error);
        }
    };

    return (
        <form
            className={\`happy-form \${className || ''}\`}
            style={style}
            onSubmit={handleSubmit}
            {...restProps}
        >
            {children}
        </form>
    );
};

export default Form;`},96993:function(t,e){"use strict";e.Z=`import Form from "./form";

export default Form;`},26238:function(t,e){"use strict";e.Z=`.happy-form {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;

  label {
    display: inline-block;
    margin-bottom: 4px;
    font-weight: 500;
  }

  input {
    width: 100%;
    padding: 8px 12px;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    font-size: 14px;
    transition: border-color 0.3s;

    &:focus {
      border-color: #1890ff;
      outline: none;
    }
  }

  button {
    padding: 8px 16px;
    background-color: #1890ff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #40a9ff;
    }
  }
}`},88682:function(t,e){"use strict";e.Z="import './index.scss';"},67825:function(t,e,n){var r=n(64382);function o(a,s){if(a==null)return{};var i=r(a,s),d,l;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(a);for(l=0;l<c.length;l++)d=c[l],!(s.indexOf(d)>=0)&&Object.prototype.propertyIsEnumerable.call(a,d)&&(i[d]=a[d])}return i}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},64382:function(t){function e(n,r){if(n==null)return{};var o={},a=Object.keys(n),s,i;for(i=0;i<a.length;i++)s=a[i],!(r.indexOf(s)>=0)&&(o[s]=n[s]);return o}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports}}]);
