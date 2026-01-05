export var LogLevel;
(function (LogLevel) {
    LogLevel["INFO"] = "Info";
    LogLevel["WARN"] = "Warning";
    LogLevel["ERROR"] = "Error";
})(LogLevel || (LogLevel = {}));
export class Logger {
    constructor(driver) {
        this.driver = driver;
    }
    log(level, message) {
        const date = new Date();
        this.driver.write(`[${date.toLocaleTimeString()}]${level}: ${message}`);
    }
    info(message) {
        this.log(LogLevel.INFO, message);
    }
    warn(message) {
        this.log(LogLevel.WARN, message);
    }
    error(message) {
        this.log(LogLevel.ERROR, message);
    }
}
