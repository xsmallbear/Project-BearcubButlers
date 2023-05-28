export default class department {
    uid: String
    id: String
    name: String
    contact: String
    phone: String
    remark: String
    createTime: Date
    constructor(uid: String, id: String, name: String, contact: String, phone: String, remark: String, createTime: Date) {
        this.uid = uid
        this.id = id
        this.name = name
        this.contact = contact
        this.phone = phone
        this.remark = remark
        this.createTime = createTime
    }
}
