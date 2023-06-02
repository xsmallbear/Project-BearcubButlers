import { Request, Response, NextFunction } from "express";
import JwtUtil from "../libs/jwt";
import cache from "../libs/cache";
import UserCache from "../types/userCache";
import ObjectUtil from "../utils/objectUtil";
import SystemUserController from "../controllers/systemUserController";
import UserCacheUtil from "../utils/userCacheUtil";

let filtersArray: string[] = []

async function loginVerifyIns(req: Request, res: Response, next: NextFunction) {
    const firstSlashIndex = req.path.indexOf('/');
    const secondSlashIndex = req.path.indexOf('/', firstSlashIndex + 1);
    const substr = req.path.substring(firstSlashIndex, secondSlashIndex === -1 ? undefined : secondSlashIndex);
    console.log(substr)
    //需要过滤的地址
    for (let i = 0; i < filtersArray.length; i++) {
        if (substr.startsWith(filtersArray[i])) {
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
    if (!result || result === "") {
        res.send({ statu: false, message: "身份验证失败" })
        return
    }

    //权限验证
    let userCache = cache.get(result.uid) as UserCache
    if (!userCache) {
        await UserCacheUtil.updateUserCache(result.uid)
        userCache = cache.get(result.uid) as UserCache
    }

    for (let i = 0; i < userCache.permissopns.length; i++) {
        if (substr.startsWith(userCache.permissopns[i])) {
            next()
            return
        }
    }
    res.send({ statu: false, message: "您没有权限" })
    //验证失败
}

export default function loginVerify(filters?: string[]) {
    if (filters) {
        filtersArray = filters
    }

    return loginVerifyIns
}