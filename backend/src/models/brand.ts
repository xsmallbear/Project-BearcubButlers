export default class Brand {
    uuid: String
    name: String
    createTime: Date
    constructor(uuid: String, name: String, createTime: Date) {
        this.uuid = uuid
        this.name = name
        this.createTime = createTime
    }
}
