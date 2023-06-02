import {NextFunction, Request, Response} from 'express';
import {validationResult} from 'express-validator';

/**
 * validationError中间件
 * 作用 捕获validation 表单验证中的错误 返回错误信息
 * @param req 
 * @param res 
 * @param next 
 * @returns 
 */
export default function validationError(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const messages = errors.array().map(error => error.msg)[0]
        res.send({ state: false, message: messages })
        return;
    } else {
        next()
    }
}