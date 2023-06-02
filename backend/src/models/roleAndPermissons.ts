export default class RoleAndPermissions {
    uid: string
    roleUid: string
    permissionsUid: string
    createTime: Date
    updateTime: Date
    constructor(uid: string, roleUid: string, permissionsUid: string, createTime: Date, updateTime: Date) {
        this.uid = uid
        this.roleUid = roleUid
        this.permissionsUid = permissionsUid
        this.createTime = createTime
        this.updateTime = updateTime
    }
}