export default class Permissions {
    uid: String
    name: String
    createTime: Date
    updateTime: Date

    constructor(uid: String, name: String, createTime: Date, updateTime: Date) {
        this.uid = uid
        this.name = name
        this.createTime = createTime
        this.updateTime = updateTime
    }
}
