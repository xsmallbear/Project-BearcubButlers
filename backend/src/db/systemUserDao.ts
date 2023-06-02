import SystemUser from "../models/systemUser";
import knexInstance from "../libs/knex"

export default class SystemUserDao {

    static async selectSystemUserByUid(uid: string){
        return knexInstance
            .from<SystemUser>("systemUser")
            .where("uid", uid);
    }

    /**
     * 根据userName查询结果
     * @param userName 
     * @returns 
     */
    static async selectSystemUserByUserName(userName: string) {
        return knexInstance
            .from<SystemUser>("systemUser")
            .where("name", userName);
    }

    /**
     * 根据id查询结果
     * @param id 
     * @returns 
     */
    static async selectSystemUserById(id: string) {
        return knexInstance
            .from<SystemUser>("systemUser")
            .where("id", id);
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
     * @param passwordHash
     * @param passwordSalt
     */
    static async updatePasswordByUserName(userName: string, passwordHash: string, passwordSalt: string) {
        await knexInstance("systemUser")
            .where("name", userName)
            .update({ passwordHash: passwordHash, passwordSalt: passwordSalt })
    }
}