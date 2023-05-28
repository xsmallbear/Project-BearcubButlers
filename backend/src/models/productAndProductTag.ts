export default class productAndProductTag {
    uid: String
    productUid: String
    productTagUid: String
    createTime: Date
    constructor(uid: String, productUid: String, productTagUid: String, createTime: Date) {
        this.uid = uid
        this.productUid = productUid
        this.productTagUid = productTagUid
        this.createTime = createTime
    }
}
