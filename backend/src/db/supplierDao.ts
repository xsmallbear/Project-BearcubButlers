import Supplier from "../models/supplier";
import SystemUser from "../models/systemUser";
import knexInstance from "../utils/knexfile"

export default class SupplierDao {
    static async selectSupplierLimit(limit: number, offset: number): Promise<{} | SystemUser> {
        const result = knexInstance.
            from<Supplier>("supplier")
            .limit(limit)
            .offset(offset)
        return result
    }
}