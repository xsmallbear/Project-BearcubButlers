import {Request, Response} from "express";
import CustomerTypeDao from "../db/customerTypeDao";
import CustomerType from "../models/customerType";
import UUidUtil from "../utils/uuidUtil";
import ObjectUtil from "../utils/objectUtil";

export default class CustomerTypeController {
    /**
     * 获取所有的客户分类信息
     * @param req
     * @param res
     */
    static async getAll(req: Request, res: Response) {
        const {limit = 10, offset = 0} = req.body
        const customerTypes = await CustomerTypeDao.selectCustomerTypesLimit(Number(limit), Number(offset))
        res.send({state: true, datas: customerTypes})
    }

    /**
     * 根绝客户uid查询客户信息
     * @param req
     * @param res
     */
    static async getSingle(req: Request, res: Response) {
        const {customerTypeUid} = req.params
        const customerType = await CustomerTypeDao.selectCustomerTypeByUid(customerTypeUid)
        res.send({state: true, data: customerType})
    }

    /**
     * 创建一个新的客户
     * @param req
     * @param res
     */
    static async create(req: Request, res: Response) {
        const {name, parentUid} = req.body

        //检测这个父类uid在数据库中是否存在
        const parentUidCheck = await CustomerTypeDao.selectCustomerTypeByUid(parentUid)
        if (ObjectUtil.checkObjectIsNull(parentUidCheck)) {
            res.send({state: false, message: "不存在这个parentId"})
            return
        }
        //检测在当前父类下是否有同名的存在
        const subTypes = await CustomerTypeDao.selectCustomerTypeByParentUid(parentUid)
        if (!ObjectUtil.checkObjectIsNull(subTypes)) {
            for (let i = 0; i < subTypes.length; i++) {
                if (subTypes[i].name === name) {
                    res.send({state: false, message: "名称重复"})
                    return
                }
            }
        }
        const newCustomerType: CustomerType = new CustomerType(
            UUidUtil.generateUUID(),
            name,
            parentUid,
            new Date(),
            new Date()
        )
        await CustomerTypeDao.insertCustomerType(newCustomerType)
        res.send({state: true})
    }

    /**
     * 修改客户分类信息
     * @param req
     * @param res
     */
    static async update(req: Request, res: Response) {
        const {customerTypeUid} = req.params
        const {name, parentUid} = req.body

        const dataCheck = await CustomerTypeDao.selectCustomerTypeByUid(customerTypeUid)
        if (ObjectUtil.checkObjectIsNull(dataCheck)) {
            res.send({state: false, message: "数据不存在"})
            return
        }
        //检测在当前父类下是否有同名的存在
        const subTypes = await CustomerTypeDao.selectCustomerTypeByParentUid(parentUid)
        if (!ObjectUtil.checkObjectIsNull(subTypes)) {
            for (let i = 0; i < subTypes.length; i++) {
                if (subTypes[i].name === name) {
                    res.send({state: false, message: "名称重复"})
                    return
                }
            }
        }
        const needUpdateCustomerType = dataCheck[0]
        needUpdateCustomerType.name = name
        needUpdateCustomerType.parentId = parentUid
        needUpdateCustomerType.updateTime = new Date()

        await CustomerTypeDao.updateCustomerType(needUpdateCustomerType)
        res.send({state: true})
    }

    /**
     * 删除一个客户分类
     * @param req
     * @param res
     */
    static async delete(req: Request, res: Response) {
        const {customerTypeUid} = req.query

        const dataCheck = await CustomerTypeDao.selectCustomerTypeByUid(String(customerTypeUid))
        if (ObjectUtil.checkObjectIsNull(dataCheck)) {
            res.send({state: false, message: "数据不存在"})
            return
        }

        const needDeleteCustomerType = dataCheck[0]
        //查询当前的客户分类的子类
        const subCheck = await CustomerTypeDao.selectCustomerTypeByParentUid(String(needDeleteCustomerType.parentId))
        if (!ObjectUtil.checkObjectIsNull(subCheck)) {
            res.send({state: false, message: "该数据有子类,不能删除"})
            return
        }

        //TODO:检查外键引用
    }
}