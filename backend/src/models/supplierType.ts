export default class SupplierType {
    uid: String
    name: String
    parentUid: String
    createTime: Date
    constructor(uid: String, name: String, parentId: String, createTime: Date) {
        this.uid = uid
        this.name = name
        this.parentUid = parentId
        this.createTime = createTime
    }
}
