import knexInstance from "../libs/knex"
import RoleAndPermissions from "../models/roleAndPermissons";

export default class RoleAndPermissionsDao {
    static async selectRoleAndPermissopnsByUid(uid: string | string[]) {
        knexInstance
            .from<RoleAndPermissions>("roleAndPermissions")
            .where("uid", uid)
    }
}