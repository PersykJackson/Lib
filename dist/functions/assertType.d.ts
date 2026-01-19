import { ZodType } from 'zod';
export declare const assertType: <T extends ZodType>(type: T, value: any) => import("zod").infer<T>;
