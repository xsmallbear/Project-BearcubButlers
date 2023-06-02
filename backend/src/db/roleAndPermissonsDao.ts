import knexInstance from "../libs/knex"
import RoleAndPermissions from "../models/roleAndPermissons";
import PermissionsDao from "./permissionsDao";

export default class RoleAndPermissionsDao {
    static async selectRoleAndPermissionsByUid(uid: string | string[]) {
        knexInstance
            .from<RoleAndPermissions>("roleAndPermissions")
            .where("uid", uid)
    }
}