export default class Employee {
    uid: String
    id: String
    realName: String
    sex: Boolean
    idCardNumber: String
    birthday: Date
    phone: String
    email: String
    bankName: String
    bankAccountNumber: String
    hireDate: Date
    departmentUid: String
    deucation: String
    position: String
    professionalTitle: String
    createTime: Date
    constructor(uid: String, id: String, realName: String, sex: Boolean, idCardNumber: String, birthday: Date, phone: String, email: String, bankName: String, bankAccountNumber: String, hireDate: Date, departmentUid: String, deucation: String, position: String, professionalTitle: String, createTime: Date) {
        this.uid = uid
        this.id = id
        this.realName = realName
        this.sex = sex
        this.idCardNumber = idCardNumber
        this.birthday = birthday
        this.phone = phone
        this.email = email
        this.bankName = bankName
        this.bankAccountNumber = bankAccountNumber
        this.hireDate = hireDate
        this.departmentUid = departmentUid
        this.deucation = deucation
        this.position = position
        this.professionalTitle = professionalTitle
        this.createTime = createTime
    }
}
