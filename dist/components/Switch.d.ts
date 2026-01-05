import { ReactNode } from 'react';
export interface SwitchProps<T> {
    condition: T;
    cases: [T, ReactNode][];
}
export declare const Switch: <T>({ condition, cases, }: SwitchProps<T>) => ReactNode;
