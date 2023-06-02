import knexInstance from "../libs/knex";
import CustomerType from "../models/customerType";

export default class CustomerTypeDao {

    /**
     * 查询所有的客户分类信息
     * @param limit
     * @param offset
     */
    static async selectCustomerTypesLimit(limit: number, offset: number) {
        return knexInstance
            .from<CustomerType>("customerType")
            .limit(limit)
            .offset(offset)
    }

    /**
     * 根据uid查询客户类型
     * @param uid
     */
    static async selectCustomerTypeByUid(uid: string) {
        return knexInstance
            .from<CustomerType>("customerType")
            .where("uid", uid)
    }

    /**
     * 根据parentUid查询客户类型
     * @param uid
     */
    static async selectCustomerTypeByParentUid(uid: string) {
        return knexInstance
            .from<CustomerType>("customerType")
            .where("parentId", uid)
    }

    /**
     * 添加一个新的客户类型
     * @param customerType
     */
    static async insertCustomerType(customerType: CustomerType) {
        await knexInstance
            .from<CustomerType>("customerType")
            .insert(customerType)
    }

    /**
     * 修改客户类型
     * @param customerType
     */
    static async updateCustomerType(customerType: CustomerType) {
        await knexInstance
            .from<CustomerType>("customerType")
            .where("uid", customerType.uid)
            .update(customerType)
    }
}