export default class productType {
    uid: String
    name: String
    parentId: String
    createTime: Date
    constructor(uid: String, name: String, parentId: String, createTime: Date) {
        this.uid = uid
        this.name = name
        this.parentId = parentId
        this.createTime = createTime
    }
}
