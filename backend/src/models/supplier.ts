export default class supplier {
    uid: String
    id: String
    typeUid: String
    name: String
    shortName: String
    pinyinCode: String
    contact: String
    phone: String
    email: String
    address: String
    tin: String
    remark: String
    createTime: Date
    updateTime: Date
    constructor(uid: String, id: String, typeUid: String, name: String, shortName: String, pinyinCode: String, contact: String, phone: String, email: String, address: String, tin: String, remark: String, createTime: Date, updateTime: Date) {
        this.uid = uid
        this.id = id
        this.typeUid = typeUid
        this.name = name
        this.shortName = shortName
        this.pinyinCode = pinyinCode
        this.contact = contact
        this.phone = phone
        this.email = email
        this.address = address
        this.tin = tin
        this.remark = remark
        this.createTime = createTime
        this.updateTime = updateTime
    }
}
