export default class Role {
    uid: String
    name: String
    createTime: Date
    updateTime: Date

    constructor(uuid: String, name: String, createTime: Date, updateTime: Date) {
        this.uid = uuid
        this.name = name
        this.createTime = createTime
        this.updateTime = updateTime
    }
}
