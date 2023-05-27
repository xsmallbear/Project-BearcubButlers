export default class SystemUser {
    private _uid: String
    private _id: String
    private _name: String
    private _passwordHash: String
    private _passwordSalt: String
    private _realName: String
    private _phone: String
    private _email: String
    private _createTime: Date
    private _updateTime: Date

    get uid(): String { return this._uid }
    set uid(value: String) { this._uid = value }
    get id(): String { return this._uid }
    set id(value: String) { this._id = value }
    get name(): String { return this._name }
    set name(value: String) { this._name = value }
    get passwordHash(): String { return this._passwordHash }
    set passwordHash(value: String) { this._passwordHash = value }
    get passwordSalt(): String { return this._passwordSalt }
    set passwordSalt(value: String) { this._passwordSalt = value }
    get realName(): String { return this._realName }
    set realName(value: String) { this._realName = value }
    get phone(): String { return this._phone }
    set phone(value: String) { this._phone = value }
    get email(): String { return this._email }
    set email(value: String) { this._email = value }
    get createTime(): Date { return this._createTime }
    set createTime(value: Date) { this._createTime = value }
    get updateTime(): Date { return this._updateTime }
    set updateTime(value: Date) { this._updateTime = value }

    constructor(uid: String,
        id: String,
        name: String,
        passwordHash: String,
        passwordSalt: String,
        realName: String,
        phone: String,
        email: String,
        createTime: Date,
        updateTime: Date) {
        this._uid = uid
        this._id = id
        this._name = name
        this._passwordHash = passwordHash
        this._passwordSalt = passwordSalt
        this._realName = realName
        this._phone = phone
        this._email = email
        this._createTime = createTime
        this._updateTime = updateTime
    }
}