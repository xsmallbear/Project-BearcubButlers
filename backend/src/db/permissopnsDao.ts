import Supplier from "../models/supplier";
import SystemUser from "../models/systemUser";
import knexInstance from "../utils/knexfile"
import Permissions from "../models/permissions";

export default class PermissopnsDao {
    /**
     * 查询指定用户的权限
     * @param uid
     */
    static async selectPermissonsFromSystemUserUid(uid: string) {

    }

    /**
     * 查询所有的权限
     * @param uid
     */
    static async selectAllPermissons(uid: string) {
        const result = knexInstance
            .from<Permissions>("permissions")
        return result
    }
}