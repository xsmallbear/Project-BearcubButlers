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
    static async selectSupplierTypesLimit(limit: number, offset: number) {
        return knexInstance.from<SupplierType>("supplierType")
            .limit(limit)
            .offset(offset)
    }

    /**
     * 根据uid查询供应商分类
     * @param uid
     * @returns
     */
    static async selectSupplierTypeByUid(uid: string) {
        return knexInstance
            .from<SupplierType>("supplierType")
            .where("uid", uid)
    }

    /**
     * 根据名字查询供应商分类
     * @param name
     * @returns
     */
    static async selectSupplierTypeByName(name: string) {
        return knexInstance
            .from<SupplierType>("supplierType")
            .where("name", name)
    }

    /**
     * 根据parentUid查询供应商类型
     * @param uid
     */
    static async selectSupplierTypesByParentUid(uid: string) {
        return knexInstance
            .from<SupplierType>("supplierType")
            .where("parentUId", uid)
    }

    /**
     * 添加一个新的供应商类型
     * @param supplierType
     */
    static async insertSupplierType(supplierType: SupplierType) {
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

}