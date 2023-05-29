export default class Product {
    uid: String
    id: String
    productTypeUid: String
    name: String
    shortName: String
    pinyinCode: String
    unit: String
    specification: String
    model: String
    brandUid: String
    origin: String
    costPrice: String
    remark: String
    createTime: Date
    updateTime: Date
    constructor(uid: String, id: String, productTypeUid: String, name: String, shortName: String, pinyinCode: String, unit: String, specification: String, model: String, brandUid: String, origin: String, costPrice: String, remark: String, createTime: Date, updateTime: Date) {
        this.uid = uid
        this.id = id
        this.productTypeUid = productTypeUid
        this.name = name
        this.shortName = shortName
        this.pinyinCode = pinyinCode
        this.unit = unit
        this.specification = specification
        this.model = model
        this.brandUid = brandUid
        this.origin = origin
        this.costPrice = costPrice
        this.remark = remark
        this.createTime = createTime
        this.updateTime = updateTime
    }
}
