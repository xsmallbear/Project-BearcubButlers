export default class Role {
    uuid: String
    name: String
    createTime: Date
    updateTime: Date

    constructor(uuid: String, name: String, createTime: Date, updateTime: Date) {
        this.uuid = uuid
        this.name = name
        this.createTime = createTime
        this.updateTime = updateTime
    }
}
