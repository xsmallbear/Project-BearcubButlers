export default class SystemUser {
    uid: String
    id: String
    name: String
    passwordHash: String
    passwordSalt: String
    roleUid: String
    realName: String
    phone: String
    email: String
    createTime: Date
    updateTime: Date
    constructor(uid: String, id: String, name: String, passwordHash: String, passwordSalt: String, roleUid: String, realName: String, phone: String, email: String, createTime: Date, updateTime: Date) {
        this.uid = uid
        this.id = id
        this.name = name
        this.passwordHash = passwordHash
        this.passwordSalt = passwordSalt
        this.roleUid = roleUid
        this.realName = realName
        this.phone = phone
        this.email = email
        this.createTime = createTime
        this.updateTime = updateTime
    }
}
