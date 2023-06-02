import SystemUser from "../models/systemUser";
import knexInstance from "../libs/knex"
import Role from "../models/role";

export default class RoleDao {
    /**
     * 根据名称查询角色
     * @param name
     * @returns
     */
    static async selectRoleFromName(name: string): Promise<{} | SystemUser> {
        return knexInstance
            .from<Role>("role")
            .where("name", name)
    }

    /**
     * 
     * @param uid 根据uid查询角色
     * @returns 
     */
    static async selectRoleFromUid(uid: string): Promise<{} | SystemUser> {
        return {}
    }

    /**
     * 添加
     * @param newRole
     */
    static async insertRole(newRole: Role) {
        await knexInstance
            .from<Role>("role")
            .insert(newRole)
    }
}