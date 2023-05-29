export default class StoreHouse {
    uid: String
    id: String
    name: String
    shortName: String
    pinyinCode: String
    address: String
    contact: String
    phone: String
    createTime: Date
    updateTime: Date
    constructor(uid: String, id: String, name: String, shortName: String, pinyinCode: String, address: String, contact: String, phone: String, createTime: Date, updateTime: Date) {
        this.uid = uid
        this.id = id
        this.name = name
        this.shortName = shortName
        this.pinyinCode = pinyinCode
        this.address = address
        this.contact = contact
        this.phone = phone
        this.createTime = createTime
        this.updateTime = updateTime
    }
}
