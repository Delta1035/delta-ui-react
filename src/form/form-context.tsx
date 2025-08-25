import { createContext } from 'react';
import { DtSafeAny } from '../types';

export interface FormContextProps {
    values?: Record<string,DtSafeAny>;
    setValues?: (values: Record<string,DtSafeAny>) => void;
    onValueChange?: (key: string,value: DtSafeAny) => void;
    validateRegister?: (name: string,cb: Function) => void;
}

export default createContext<FormContextProps>({});
