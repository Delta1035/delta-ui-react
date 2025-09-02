import React,{ CSSProperties,FormEvent,HTMLAttributes,ReactNode,useRef,useState } from "react";
import { AnyObject,DtSafeAny } from "../types";

export interface FormProps extends HTMLAttributes<HTMLFormElement> {
    className?: string;
    style?: CSSProperties;
    /**
     * 提交回调
     * @param values 
     * @returns 
     */
    onFinish?: (values: AnyObject) => void;
    /**
     * 提交有错误时的回调
     * @param errorInfo 
     * @returns 
     */
    onFinishFailed?: (errorInfo: DtSafeAny) => void;
    /**
     * 表单初始值
     */
    initialValues?: AnyObject;
    children?: ReactNode;
};

const From = (props: FormProps) => {
    const { initialValues } = props;
    const [values,setValues] = useState(initialValues || {});
    const validatorMap = useRef(new Map<string,Function>());
    const errors = useRef<AnyObject>({});

    const onValueChange = (key: string,value: DtSafeAny) => {
        values[key] = value;
    };

    const handleSubmit = (e: FormEvent) => {

    };
};