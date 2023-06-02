import PermissopnsDao from "../db/permissopnsDao"
import cache from "../libs/cache"
import UserCache from "../types/userCache"

export default class UserCacheUtil {
    public static async updateUserCache(uid: string) {
        const permissopns = await PermissopnsDao.selectPermissonsNameFromSystemUserUid(uid)
        const userCache: UserCache = {
            permissopns: permissopns
        }
        cache.set(uid, userCache)
    }
}