import { createContext } from 'react';
import { DtSafeAny } from '@/types';

export interface FormContextProps {
    values?: Record<string,DtSafeAny>;
    setValues?: (values: Record<string,DtSafeAny>) => void;
    onValueChange?: (key: string,value: DtSafeAny) => void;
    validateRegister?: (name: string,cb: Function) => void;
}
/**
 * @description: 表单上下文,用于表单组件之间共享数据
 */
export default createContext<FormContextProps>({});
