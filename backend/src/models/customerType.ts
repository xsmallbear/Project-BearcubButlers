export default class CustomerType {
    uid: String
    name: String
    parentId: String
    createTime: Date
    updateTime: Date
    constructor(uid: String, name: String, parentId: String, createTime: Date, updateTime:Date) {
        this.uid = uid
        this.name = name
        this.parentId = parentId
        this.createTime = createTime
        this.updateTime = updateTime
    }
}
