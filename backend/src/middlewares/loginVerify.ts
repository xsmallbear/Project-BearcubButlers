import {NextFunction, Request, Response} from "express";
import JwtUtil from "../libs/jwt";
import cache from "../libs/cache";
import UserCache from "../types/userCache";
import UserCacheUtil from "../utils/userCacheUtil";

let filtersArray: string[] = []

async function loginVerifyIns(req: Request, res: Response, next: NextFunction) {
    const firstSlashIndex = req.path.indexOf('/');
    const secondSlashIndex = req.path.indexOf('/', firstSlashIndex + 1);
    const target = req.path.substring(firstSlashIndex, secondSlashIndex === -1 ? undefined : secondSlashIndex);
    //需要过滤的地址
    for (let i = 0; i < filtersArray.length; i++) {
        if (target.startsWith(filtersArray[i])) {
            next()
            return
        }
    }

    const authorization = req.header('Authorization')
    if (!authorization) {
        res.send({ state: false, message: "身份验证失败" })
        return
    }
    const result = JwtUtil.verify(authorization as string)
    if (!result || result === "") {
        res.send({ state: false, message: "身份验证失败" })
        return
    }

    //权限验证
    let userCache = cache.get(result.uid) as UserCache
    if (!userCache) {
        await UserCacheUtil.updateUserCache(result.uid)
        userCache = cache.get(result.uid) as UserCache
    }

    console.log("权限列表:",userCache.permissions)
    console.log("访问权限:",target)
    for (let i = 0; i < userCache.permissions.length; i++) {
        if (target.startsWith(userCache.permissions[i])) {
            next()
            return
        }
    }
    res.send({ state: false, message: "您没有权限" })
}

export default function loginVerify(filters?: string[]) {
    if (filters) {
        filtersArray = filters
    }

    return loginVerifyIns
}