export default class EmployeeAndSystemUser {
    uid: String
    employeeUid: String
    systemUserUid: String
    createTime: Date
    constructor(uid: String, employeeUid: String, systemUserUid: String, createTime: Date) {
        this.uid = uid
        this.employeeUid = employeeUid
        this.systemUserUid = systemUserUid
        this.createTime = createTime
    }
}
