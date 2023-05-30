import Supplier from "../models/supplier";
import SystemUser from "../models/systemUser";
import knexInstance from "../utils/knexfile"
import Role from "../models/role";

export default class RoleDao {
    /**
     * 根据名称查询角色
     * @param name
     * @returns
     */
    static async selectRoleFromName(name: string): Promise<{} | SystemUser> {
        const result = knexInstance
            .from<Role>("role")
            .where("name", name)
        return result
    }

    /**
     * 添加
     * @param newRole
     */
    static async inserRole(newRole: Role) {
        await knexInstance
            .from<Role>("role")
            .insert(newRole)
    }
}