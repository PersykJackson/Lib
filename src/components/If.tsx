import { FC, PropsWithChildren, ReactNode } from 'react';

export const If: FC<PropsWithChildren<{ condition: boolean, Else?: ReactNode }>> = ({
    condition,
    Else = null,
    children
}) => {
    return condition ? children : Else;
}
