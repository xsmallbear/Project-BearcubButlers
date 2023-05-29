export default class SupplierType {
    uid: String
    name: String
    parentUid: String
    createTime: Date
    updateTime: Date
    constructor(uid: String, name: String, parentId: String, createTime: Date, updateTime: Date) {
        this.uid = uid
        this.name = name
        this.parentUid = parentId
        this.createTime = createTime
        this.updateTime = updateTime
    }
}
