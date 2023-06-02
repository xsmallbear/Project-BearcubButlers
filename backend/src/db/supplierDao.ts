import Supplier from "../models/supplier";
import SystemUser from "../models/systemUser";
import knexInstance from "../libs/knex"

export default class SupplierDao {
    /**
     * 分页查询供应商
     * @param limit 
     * @param offset 
     * @returns 
     */
    static async selectSuppliersLimit(limit: number, offset: number) {
        return knexInstance.from<Supplier>("supplier")
            .limit(limit)
            .offset(offset)
    }

    /**
     * 根据uid查询供应商
     * @param uid 
     */
    static async selectSupplierByUid(uid: string) {
        return knexInstance
            .from<Supplier>("supplier")
            .where("uid", uid)
    }

    /**
     * 根据id查询供应商
     * @param id 
     */
    static async selectSupplierById(id: string) {
        return knexInstance
            .from<Supplier>("supplier")
            .where("id", id)
    }

    /**
     * 添加一个新的供应商
     * @param supplier 
     */
    static async insertSupplier(supplier: Supplier) {
        await knexInstance
            .from<Supplier>("supplier")
            .insert(supplier)
    }

    /**
     * update供应商信息
     * @param supplier 
     */
    static async updateSupplier(supplier: Supplier) {
        await knexInstance
            .from<Supplier>("supplier")
            .where("uid", supplier.uid)
            .update(supplier)
    }

}