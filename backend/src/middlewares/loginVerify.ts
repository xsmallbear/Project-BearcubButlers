import { Request, Response, NextFunction } from "express";
import JwtUtil from "../utils/jwtUtil";

let filtersArray: string[] = []

function loginVerifyIns(req: Request, res: Response, next: NextFunction) {
    //需要过滤的地址
    for (let i = 0; i < filtersArray.length; i++) {
        if (req.path.startsWith(filtersArray[i])) {
            next()
            return
        }
    }

    const authorization = req.header('Authorization')
    if (!authorization) {
        res.send({ statu: false, message: "身份验证失败" })
        return
    }
    const result = JwtUtil.verify(authorization as string)
    if (!result) {
        res.send({ statu: false, message: "身份验证失败" })
        return
    }

    next();
}

export default function loginVerify(filters?: string[]) {
    if (filters) {
        filtersArray = filters
    }

    return loginVerifyIns
}