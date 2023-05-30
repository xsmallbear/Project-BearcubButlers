import { Request, Response, NextFunction } from "express";
import UUidUtil from "../utils/uuidUtil";

let filtersArray: string[] = []

function permissionsIns(req: Request, res: Response, next: NextFunction) {
    //需要过滤的地址
    for (let i = 0; i < filtersArray.length; i++) {
        if (req.path.startsWith(filtersArray[i])) {
            next()
            return
        }
    }

    //获取请求地址
    // res.send()
    // return
    next();
}

export default function permissions(filters?: string[]) {
    if (filters) {
        filtersArray = filters
    }

    return permissionsIns
}