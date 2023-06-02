import {NextFunction, Request, Response} from "express";

enum LoggerLeave {
    DEBUG,
    INFO,
    WARNING,
    ERROR
}

interface EmojiLoggerConfig {
    leave: LoggerLeave
}

const emojiLoggerConfig: EmojiLoggerConfig = {
    //default
    leave: LoggerLeave.DEBUG
};

const getLoggerLeaveString = (): string => {
    switch (emojiLoggerConfig.leave) {
        case LoggerLeave.DEBUG:
            return "debug"
        case LoggerLeave.INFO:
            return "info"
        case LoggerLeave.WARNING:
            return "warning"
        case LoggerLeave.ERROR:
            return "error"
        default:
            return "undefine"
    }
}


const emojiLoggerInstance = (req: Request, res: Response, next: NextFunction) => {
    const leave = getLoggerLeaveString();
    const date = new Date().toLocaleDateString()
    const requestMethod = req.method.toLowerCase()

    let allEmoji = "☁️"
    switch (requestMethod) {
        case "get":
            allEmoji = "⛅";
            break
        case "post":
            allEmoji = "🌤️";
            break
        case "patch":
            allEmoji = "🌥️";
            break
        case "delete":
            allEmoji = "🌦️";
            break
        case "head":
            allEmoji = "🌧️";
            break
        case "option":
            allEmoji = "🌨️";
            break
    }

    console.log(`${allEmoji}[logger]:[${leave}]--time:${date}--method:${requestMethod}--url:${req.originalUrl}`)

    next();
}

export default function emojiLogger(config?: EmojiLoggerConfig) {

    return emojiLoggerInstance;
}

