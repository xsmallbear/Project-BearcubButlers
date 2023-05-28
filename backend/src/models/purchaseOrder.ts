export default class purchaseOrder {
    uid: String
    id: String
    supplierUid: String
    employeeUid: String
    remark: String
    createTime: Date
    constructor(uid: String, id: String, supplierUid: String, employeeUid: String, remark: String, createTime: Date) {
        this.uid = uid
        this.id = id
        this.supplierUid = supplierUid
        this.employeeUid = employeeUid
        this.remark = remark
        this.createTime = createTime
    }
}
