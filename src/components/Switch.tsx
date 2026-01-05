import { ReactNode } from 'react';

export interface SwitchProps<T> {
    condition: T;
    cases: [T, ReactNode][];
}

export const Switch = <T,>({
    condition,
    cases,
}: SwitchProps<T>) => {
    const match = cases.find(([cond]) => cond === condition);

    if (!match) {
        return null;
    }

    return match[1];
};