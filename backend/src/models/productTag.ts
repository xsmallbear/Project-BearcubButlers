export default class ProductTag {
    uid: String
    id: String
    name: String
    createTime: Date
    constructor(uid: String, id: String, name: String, createTime: Date) {
        this.uid = uid
        this.id = id
        this.name = name
        this.createTime = createTime
    }
}
