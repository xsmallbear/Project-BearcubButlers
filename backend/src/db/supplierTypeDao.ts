import SupplierType from "../models/supplierType";
import SystemUser from "../models/systemUser";
import knexInstance from "../libs/knex"

export default class SupplierTypeDao {
    /**
     * 分页查询供应商分类
     * @param limit 
     * @param offset 
     * @returns 
     */
    static async selectSupplierTypeLimit(limit: number, offset: number): Promise<{} | SystemUser> {
        return knexInstance.from<SupplierType>("supplierType")
            .limit(limit)
            .offset(offset)
    }

    /**
     * 根据uid查询供应商分类
     * @param uid 
     * @returns 
     */
    static async selectSupplierTypeByUid(uid: string): Promise<{} | SystemUser> {
        return knexInstance
            .from<SupplierType>("supplierType")
            .where("uid", uid)
    }

    /**
     * 根据名字查询供应商分类
     * @param name 
     * @returns 
     */
    static async selectSupplierTypeByName(name: string): Promise<{} | SystemUser> {
        return knexInstance
            .from<SupplierType>("supplierType")
            .where("name", name)
    }

    /**
     * 添加一个新的供应商类型
     * @param supplierType 
     */
    static async inserSupplierType(supplierType: SupplierType) {
        await knexInstance
            .from<SupplierType>("supplierType")
            .insert(supplierType)
    }

    /**
     * 修改供应商类型
     * @param supplierType 
     */
    static async updateSupplierType(supplierType: SupplierType) {
        await knexInstance
            .from<SupplierType>("supplierType")
            .where("uid", supplierType.uid)
            .update(supplierType)
    }

    /**
     * 查询当前uid的所有子类
     * @param uid 
     */
    static async selectUidSubTypeByUid(uid: string) {
        return knexInstance
            .from<SupplierType>("supplierType")
            .where("parentUId", uid)
    }
}