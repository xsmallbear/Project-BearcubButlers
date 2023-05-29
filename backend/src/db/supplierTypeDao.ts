import SupplierType from "../models/supplierType";
import SystemUser from "../models/systemUser";
import knexInstance from "../utils/knexfile"

export default class SupplierTypeDao {
    /**
     * 分页查询供应商
     * @param limit 
     * @param offset 
     * @returns 
     */
    static async selectSupplierTypeLimit(limit: number, offset: number): Promise<{} | SystemUser> {
        const result = knexInstance.
            from<SupplierType>("supplierType")
            .limit(limit)
            .offset(offset)
        return result
    }

    /**
     * 根据uid查询供应商分类
     * @param uid 
     * @returns 
     */
    static async selectSupplierTypeByUid(uid: string): Promise<{} | SystemUser> {
        const result = knexInstance
            .from<SupplierType>("supplierType")
            .where("uid", uid)
        return result
    }

    /**
     * 根据名字查询供应商分类
     * @param name 
     * @returns 
     */
    static async selectSupplierTypeByName(name: string): Promise<{} | SystemUser> {
        const result = knexInstance
            .from<SupplierType>("supplierType")
            .where("name", name)
        return result
    }
}