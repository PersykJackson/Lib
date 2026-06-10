import { ZodType } from 'zod';

export const assertType = <T extends ZodType>(
    type: T,
    value: any,
) => type.parse(value);
