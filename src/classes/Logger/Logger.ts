import { Driver } from './Driver';

export enum LogLevel {
    INFO = 'Info',
    WARN = 'Warning',
    ERROR = 'Error',
}

export class Logger {
    constructor(private readonly driver: Driver) {}

    private log(level: string, message: string) {
        const date = new Date();

        this.driver.write(`[${date.toLocaleTimeString()}]${level}: ${message}`);
    }

    public info(message: string) {
        this.log(LogLevel.INFO, message);
    }

    public warn(message: string) {
        this.log(LogLevel.WARN, message);
    }

    public error(message: string) {
        this.log(LogLevel.ERROR, message);
    }
}
