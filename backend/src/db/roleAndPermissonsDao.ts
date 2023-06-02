import knexInstance from "../libs/knex"
import RoleAndPermissions from "../models/roleAndPermissons";
import PermissionsDao from "./permissionsDao";

export default class RoleAndPermissionsDao {
    /**
     * 根据uid查询角色权限连接表
     * @param uid
     */
    static async selectRoleAndPermissionsByUid(uid: string | string[]) {
        return knexInstance
            .from<RoleAndPermissions>("roleAndPermissions")
            .where("uid", uid)
    }

    /**
     * 根据roleUid查询角色权限连接表
     * @param roleUid
     */
    static async selectRoleAndPermissionsByRoleUid(roleUid: string) {
        return knexInstance
            .from<RoleAndPermissions>("roleAndPermissions")
            .where("roleUid", roleUid)
    }

    /**
     * 添加角色权限连接表数据
     * @param roleAndPermission
     */
    static async insertRoleAndPermissions(roleAndPermission: RoleAndPermissions) {

    }
}