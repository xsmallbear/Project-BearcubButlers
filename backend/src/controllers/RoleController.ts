import {Request, Response} from "express"
import RoleDao from "../db/roleDao";
import ObjectUtil from "../utils/objectUtil";
import Role from "../models/role";
import UUidUtil from "../utils/uuidUtil";

export default class RoleController {
    static async getAll() {

    }

    static async getSingle() {

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
            res.send({ statu: false, message: "name重复" })
            return
        }

        const newRole = new Role(
            UUidUtil.generateUUID(),
            name,
            new Date(),
            new Date()
        )
        await RoleDao.inserRole(newRole)
        res.send({ statu: true })
    }

    static async update() {

    }

    static async delete() {

    }
}