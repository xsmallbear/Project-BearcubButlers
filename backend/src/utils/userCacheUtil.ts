import PermissionsDao from "../db/permissionsDao"
import cache from "../libs/cache"
import UserCache from "../types/userCache"

export default class UserCacheUtil {
    public static async updateUserCache(uid: string) {
        const permissions = await PermissionsDao.selectPermissionsNameFromSystemUserUid(uid)
        const userCache: UserCache = {
            permissions: permissions
        }
        cache.set(uid, userCache)
    }
}