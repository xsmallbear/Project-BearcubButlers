import knexInstance from "../libs/knex";
import Customer from "../models/customer";

export default class CustomerDao {

    /**
     * 查询所有的客户信息
     * @param limit
     * @param offset
     */
    static async selectCustomersLimit(limit: number, offset: number) {
        return knexInstance
            .from<Customer>("customer")
            .limit(limit)
            .offset(offset)
    }

    /**
     * 根据uid查询客户
     * @param uid
     */
    static async selectCustomerByUId(uid: string) {
        return knexInstance
            .from<Customer>("customer")
            .where("uid", uid)
    }

    /**
     * 根据id查询客户
     * @param id
     */
    static async selectCustomerById(id: string) {
        return knexInstance
            .from<Customer>("customer")
            .where("id", id)
    }

    /**
     * 添加一个客户分类
     * @param customer
     */
    static async insertCustomer(customer: Customer) {
        await knexInstance
            .from<Customer>("customer")
            .insert(customer)
    }

    /**
     * 修改一个客户分类
     * @param customer
     */
    static async updateCustomer(customer: Customer) {
        await knexInstance
            .from<Customer>("customer")
            .where("uid", customer.uid)
            .update(customer)
    }
}