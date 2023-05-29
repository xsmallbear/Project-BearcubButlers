import SystemUser from "../models/systemUser";
import knexInstance from "../utils/knexfile"

export default class SystemUserDao {

    static async selectSystemUserByUid(uid: string): Promise<{} | SystemUser> {
        const result = await knexInstance
            .from<SystemUser>("systemUser")
            .where("uid", uid)
        return result
    }

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
        await knexInstance
            .from<SystemUser>("systemUser")
            .insert(newUser)
    }

    /**
     * 根据用户名修改密码
     * @param userName 
     * @param newPassword 
     */
    static async updatePassowrdByUserName(userName: string, passwordHash: string, passwordSalt: string) {
        await knexInstance("systemUser")
            .where("name", userName)
            .update({ passwordHash: passwordHash, passwordSalt: passwordSalt })
    }
}