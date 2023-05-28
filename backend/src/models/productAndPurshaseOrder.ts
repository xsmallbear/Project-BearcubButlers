export default class productAndPurshaseOrder {
    uid: String
    id: String
    productUid: String
    purchaseOrderUid: String
    price: Number
    count: Number
    createTime: Date
    constructor(uid: String, id: String, productUid: String, purchaseOrderUid: String, price: Number, count: Number, createTime: Date) {
        this.uid = uid
        this.id = id
        this.productUid = productUid
        this.purchaseOrderUid = purchaseOrderUid
        this.price = price
        this.count = count
        this.createTime = createTime
    }
}
