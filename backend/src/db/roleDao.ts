import SystemUser from "../models/systemUser";
import knexInstance from "../libs/knex"
import Role from "../models/role";

export default class RoleDao {

    static async selectRolesLimit(limit: number, offset: number) {
        return knexInstance
            .from<Role>("role")
            .limit(limit)
            .offset(offset)
    }

    /**
     *
     * @param uid 根据uid查询角色
     * @returns
     */
    static async selectRoleFromUid(uid: string) {
        return knexInstance
            .from<Role>("role")
            .where("uid", uid)
    }

    /**
     * 根据名称查询角色
     * @param name
     * @returns
     */
    static async selectRoleFromName(name: string) {
        return knexInstance
            .from<Role>("role")
            .where("name", name)
    }

    /**
     * 添加一个新角色
     * @param newRole
     */
    static async insertRole(newRole: Role) {
        await knexInstance
            .from<Role>("role")
            .insert(newRole)
    }

    /**
     * 修改一个角色
     * @param role
     */
    static async updateRole(role: Role) {
        await knexInstance
            .from<Role>("role")
            .update(role)
            .where("uid", role.uid)
    }

    /**
     * 根据uid删除一个角色
     * @param uid
     */
    static async deleteRoleByUid(uid: string) {
        await knexInstance
            .from<Role>("role")
            .where("uid", uid)
            .delete()

    }
}