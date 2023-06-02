import {Request, Response} from "express"
import RoleDao from "../db/roleDao";
import ObjectUtil from "../utils/objectUtil";
import Role from "../models/role";
import UUidUtil from "../utils/uuidUtil";
import RoleAndPermissionsDao from "../db/roleAndPermissonsDao";

export default class RoleController {
    /**
     * 查询所有的角色
     * @param req
     * @param res
     */
    static async getAll(req: Request, res: Response) {
        const limit = req.query.limit
        const offset = req.query.offset

        const roles = await RoleDao.selectRolesLimit(Number(limit), Number(offset))
        res.send({state: false, datas: roles})
    }

    /**
     * 根据角色的Uid查询角色
     * @param req
     * @param res
     */
    static async getSingle(req: Request, res: Response) {
        const uid = req.params.roleUid

        const role = await RoleDao.selectRoleFromUid(uid)
        res.send({state: false, datas: role})
    }

    /**
     * 创建一个新的角色
     * @param req
     * @param res
     */
    static async create(req: Request, res: Response) {
        const name = req.body.name

        const nameCheck = await RoleDao.selectRoleFromName(name)
        if (!ObjectUtil.checkObjectIsNull(nameCheck)) {
            res.send({state: false, message: "name重复"})
            return
        }

        const newRole = new Role(
            UUidUtil.generateUUID(),
            name,
            new Date(),
            new Date()
        )
        await RoleDao.insertRole(newRole)
        res.send({state: true})
    }

    /**
     * 修改角色信息
     * @param req
     * @param res
     */
    static async update(req: Request, res: Response) {
        const uid = req.params.roleUid
        const name = req.body.name

        const uidCheck = await RoleDao.selectRoleFromUid(uid)
        if (ObjectUtil.checkObjectIsNull(uidCheck)) {
            res.send({state: false, message: "uid不存在"})
            return
        }

        const nameCheck = await RoleDao.selectRoleFromName(name)
        if (!ObjectUtil.checkObjectIsNull(nameCheck)) {
            const roleName = nameCheck[0].name
            if (roleName === name) {
                res.send({state: false, message: "name重复"})
                return
            }
        }
        const updateRole: Role = uidCheck[0]
        updateRole.name = name
        updateRole.updateTime = new Date()
        await RoleDao.updateRole(updateRole)
        res.send({state: true})
    }

    /**
     * 删除角色
     * @param req
     * @param res
     */
    static async delete(req: Request, res: Response) {
        const uid = req.params.roleUid

        const uidCheck = await RoleDao.selectRoleFromUid(uid)
        if (ObjectUtil.checkObjectIsNull(uidCheck)) {
            res.send({state: false, message: "uid不存在"})
            return
        }
        //检测是否有外键
        const foreignCheck = await RoleAndPermissionsDao.selectRoleAndPermissionsByRoleUid(uid)
        if (!ObjectUtil.checkObjectIsNull(foreignCheck)) {
            res.send({state: false, message: "该数据有外键不能删除"})
            return
        }
        //删除逻辑
        await RoleDao.deleteRoleByUid(uid)
        res.send({state: true})
    }
}