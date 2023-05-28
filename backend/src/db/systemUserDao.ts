import SystemUser from "../models/systemUser";
import knexInstance from "../utils/knexfile"

export default class SystemUserDao {

    /**
     * 根据userName查询结果
     * @param userName 
     * @returns 
     */
    static async selectSystemUserByUserName(userName: string): Promise<{} | SystemUser> {
        const result = await knexInstance
            .from<SystemUser>("systemUser")
            .where("name", userName)
        return result
    }

    /**
     * 根据id查询结果
     * @param id 
     * @returns 
     */
    static async selectSystemUserById(id: string): Promise<{} | SystemUser> {
        const result = await knexInstance
            .from<SystemUser>("systemUser")
            .where("id", id)
        return result
    }

    /**
     * 插入一个新的用户
     * @param newUser
     */
    static async insertSystemUser(newUser: SystemUser) {
        await knexInstance("systemUser")
            .insert(newUser)
    }
}