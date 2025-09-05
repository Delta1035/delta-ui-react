import React,{ CSSProperties,FormEvent,HTMLAttributes,ReactNode } from "react";
import { RecordObject,DtSafeAny } from "@/types";

export interface FormDescription {
    /**
     * 组件样式类名
     */
    className?: string;
    /**
     * 组件样式
     */
    style?: CSSProperties;
    /**
     * 提交回调
     * @param values 
     * @returns 
     */
    onFinish?: (values: RecordObject) => void;
    /**
     * 提交有错误时的回调
     * @param errorInfo 
     * @returns 
     */
    onFinishFailed?: (errorInfo: DtSafeAny) => void;
    /**
     * 表单初始值
     */
    initialValues?: RecordObject;
    /**
     * 表单内容
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
            className={`happy-form ${className || ''}`}
            style={style}
            onSubmit={handleSubmit}
            {...restProps}
        >
            {children}
        </form>
    );
};

export default Form;