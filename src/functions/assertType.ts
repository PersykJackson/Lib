import { ZodType } from 'zod';

export const assertType = <T extends ZodType>(
    type: T,
    value: unknown,
) => type.parse(value);
