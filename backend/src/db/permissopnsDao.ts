import knexInstance from "../libs/knex"
import Permissions from "../models/permissions";
import RoleAndPermissions from "../models/roleAndPermissons";
import Role from "../models/role";

export default class PermissopnsDao {
    /**
     * 查询指定用户的权限
     * @param uid
     */
    static async selectPermissonsNameFromSystemUserUid(uid: string) {
        /**
         *   SELECT permissions.name
                FROM(
                SELECT *
                FROM roleAndPermissions
                WHERE roleUid in (
                    SELECT role.uid as roleUid
                    FROM systemUser
                    LEFT JOIN role
                    ON systemUser.roleUid = role.uid
                    where systemUser.uid = "F857D8FB9FBA4D49819057FFBC7AE987"
                )
            ) t
            LEFT JOIN permissions
            ON t.permissionsUid = permissions.uid
         */

        const systemUserRoleReult = await knexInstance
            .select("role.uid")
            .from<Role>("systemUser")
            .leftJoin("role", function () {
                this.on("systemUser.roleUid", "=", "role.uid")
            })
            .where("systemUser.uid", uid)

        const RoleAndPermissionsResult = await knexInstance
            .select("permissions.name")
            .from<RoleAndPermissions>("roleAndPermissions")
            .where("roleUid", systemUserRoleReult[0].uid)
            .leftJoin("permissions", function () {
                this.on("roleAndPermissions.permissionsUid", "=", "permissions.uid")
            })

        return RoleAndPermissionsResult.map(res => res.name)
    }

    /**
     * 查询所有的权限
     * @param uid
     */
    static async selectAllPermissons(uid: string) {
        const result = knexInstance
            .from<Permissions>("permissions")
        return result
    }
}