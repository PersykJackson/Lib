import { Driver } from './Driver';
export declare enum LogLevel {
    INFO = "Info",
    WARN = "Warning",
    ERROR = "Error"
}
export declare class Logger {
    private readonly driver;
    constructor(driver: Driver);
    private log;
    info(message: string): void;
    warn(message: string): void;
    error(message: string): void;
}
